

// CHARACTER Class 
class Character{
    constructor(name, strength, health) {
        this.n = name,
        this.st = strength,
        this.h = health
        this.buttonAttack = document.querySelector(`.${this.n}-attack`);
        this.buttonHealth = document.querySelectorAll(`.${this.n}-health`);
        this.energyLife = document.querySelector(`.${this.n}-health span`)
        this.loose = document.querySelectorAll(`.${this.n}-loose`)
    };
    
    // methods Attack 
    attack = function(opponent) {
        if (opponent.h > 0) {
            // decrease pearson Health health 
            opponent.h -= this.st
            opponent.energyLife.style.width = `${opponent.h}%`
        } else {
            // appear person loose & health === 0 
            opponent.buttonAttack.classList.add("stop")
            opponent.buttonHealth.forEach(element => {
                element.classList.add("stop")
            });
            opponent.loose.forEach(loose => {
                loose.style.display = 'block'
            });
        };
    };
    
    // methods Make Health Your Self 
    healthSelf = function() {
        if (this.h < 100) {
            this.h += 10
            this.energyLife.style.width = `${this.h}%`
        };
        if (this.h >= 100) {
            this.h = 100;
        };
    };
    
};




//## solution optionality ##//

// Character.prototype.attack = function(opponent) {
//     opponent.h -= this.st
// }


// Character.prototype.healthSelf = function() {
//         if (this.h < 100) {
//                 this.h += 10
//                 this.energyLife.style.width = `${this.h}%`
//             }
//             if (this.h > 100) {
//                   this.h = 100;
//               }
//            }




// #################################
// #################################







// tow persons 
let narato = new Character("narato", 10, 100);

let sasake = new Character("sasake", 5, 100);


// Attack function 
narato.buttonAttack.addEventListener("click" , e => {
    narato.attack(sasake);
    console.log(sasake);
});
sasake.buttonAttack.addEventListener("click" , e => {
    sasake.attack(narato);
    console.log(narato);
});

// Health Function 
narato.buttonHealth.forEach(e => {
    e.addEventListener("click", e => {
        narato.healthSelf();
    });
});
sasake.buttonHealth.forEach(e => {
    e.addEventListener("click", e => {
        sasake.healthSelf();
    });
});



