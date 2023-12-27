// all variables 

let theInputSearch = document.querySelector(".content .search input");

let buttonSearch = document.querySelector(".content .search i");

let statusWeather = document.querySelector(".content .info .status-weather")

let theTemperature = document.querySelector(".content .info .degree span");

let placeName = document.querySelector(".content .info .place-name");

let maxTemperature = document.querySelector(".content .all-details .status .max-temp span");

let minTemperature = document.querySelector(".content .all-details .status .min-temp span");

let humidity = document.querySelector('.content .all-details .box .status .humidity span')

let windySpeed = document.querySelector(".content .all-details .status .windy-speed span");

let theStorm = document.querySelector(".content .all-details .status .storm span");

let weatherState = document.querySelector(".content .all-details .box .weather-state span");

let cloudsDegree = document.querySelector(".content .all-details .box .clouds-degree span");

let countryName = document.querySelector(".content .all-details .box .country span");

let errorMessage = document.createElement('div');

errorMessage.innerHTML = 'You must write the name of any city, capital, province or country in the world';

errorMessage.className = 'error-message';

document.body.append(errorMessage);

// focus on input 
window.onload = function() {
    theInputSearch.focus();
};


// click on button search 
buttonSearch.onclick = function() {
    if (theInputSearch.value === '' || theInputSearch.value === null) {
        errorMessage.classList.add("active")
    } else {
        errorMessage.classList.remove("active");

        // function show Details
        showDetails();

        theInputSearch.value = '';

        theInputSearch.focus();
    };
};

// fetch on API 
function showDetails() {
    let apiData = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${theInputSearch.value}&appid=4be38c025b606f181467e68a47602f04`
    fetch(apiData)
    .then(result => {
        let myData = result.json();
        return myData;
    }).then(dataWeather => {
        // function weather Information
        weatherInfo(dataWeather)
        return dataWeather;
    }).then(allDetailsWeather => {
        // function get All Date Weather 
        getAllDataWeather(allDetailsWeather)

        console.log(allDetailsWeather)
    })
    
}



// function Weather Information 
function weatherInfo(info){
    statusWeather.innerHTML = info;

    // weather Temperature
    theTemperature.innerHTML = `${info.main.temp} C`;

    // place Name 
    placeName.innerHTML = info.name;

    if (info.main.temp >= 22) {
        statusWeather.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else if(info.main.temp < 22) {
        statusWeather.innerHTML = `<i class="fa-solid fa-cloud-sun">`;
    } else if (info.main.temp <= 16 ) {
        statusWeather.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    } else if (info.main.temp <= 1) {
        statusWeather.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    };
}


// function get All Data Weather 
function getAllDataWeather(allDetails) {

    // max Temperature
    maxTemperature.innerHTML = `${allDetails.main.temp_max} C`;

    // min Temperature
    minTemperature.innerHTML = `${allDetails.main.temp_min} C`;

    // humidity percents 
    humidity.innerHTML = `${allDetails.main.humidity} %RH`

    // Wendy speed 
    windySpeed.innerHTML = `${allDetails.wind.speed} M/S`;

    allDetails.wind.gust == undefined ? theStorm.innerHTML = '0 M/S' : theStorm.innerHTML = `${ allDetails.wind.gust} M/S`;

    // clouds percent 
    cloudsDegree.innerHTML = `${allDetails.clouds.all} WMO`;

    // weather Status 
    weatherState.innerHTML = allDetails.weather[0].description;

    // country 
    countryName.innerHTML = allDetails.sys.country;
}











