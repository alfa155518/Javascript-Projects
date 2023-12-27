// Start Blog

let btnReadBlog = document.querySelectorAll(".our-blog .all-boxes .box a");

let blogContainer = document.querySelector(".blog-container");

// let blogArray;

if (localStorage.getItem("blogItem") !== null) {
  JSON.parse(localStorage.getItem("blogItem"));

  // check page it Reload Good
  window.addEventListener("DOMContentLoaded", (e) => {
    if (document.querySelector(".blog-container")) {
      let mainDiv = document.createElement("div");

      mainDiv.className = "parent-blog";

      mainDiv.innerHTML = JSON.parse(localStorage.getItem("blogItem"));

      document.querySelector(".blog-container").append(mainDiv);
    }
  });
}

btnReadBlog.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // parent Element
    let blogItem = e.target.parentElement;

    // Object Contains element
    const itemObj = {
      blogItemImg: blogItem.querySelector("img").src,
      blogItemFans: blogItem.querySelector(".fans").innerHTML,
      blogItemInfo: blogItem.querySelector("p").innerHTML
    };

    const componentBlog = handelBlog(
      itemObj.blogItemImg,
      itemObj.blogItemFans,
      itemObj.blogItemInfo
    );

    // Store Blog element
    localStorage.setItem("blogItem", JSON.stringify(componentBlog));
  });
});

// Return HTML Element IN Bolg
function handelBlog(img, fans, info) {
  return `
    
    <div class=container>
    
    
    <img src="${img}" alt="" class="py-3">
    <div class= fans ${fans}</div>

    <button class="btn btn-outline-success dropdown-toggle m-3" data-bs-target="#cool" data-bs-toggle="collapse">Read More</button>
    
    <p class= collapse id=cool >Sure! Here's an article about vegetables and their benefits:

    Title: The Nutritional Powerhouses: Vegetables and Their Incredible Benefits
    
    Introduction:
    Vegetables are often referred to as nature's nutritional powerhouses. These colorful and vibrant gifts from the earth are packed with essential nutrients, vitamins, minerals, and fiber that contribute to our overall health and well-being. Incorporating a variety of vegetables into our daily diet is a cornerstone of a healthy lifestyle. Let's explore the numerous benefits that vegetables offer and why they should be an integral part of our meals.
    
    Abundant Nutrients:
    Vegetables are rich in essential nutrients such as vitamins A, C, K, and E, as well as minerals like potassium, magnesium, and folate. These nutrients play crucial roles in supporting our immune system, maintaining healthy bones, improving vision, and promoting cell growth and repair.
    
    Fiber for Digestive Health:
    One of the standout features of vegetables is their high fiber content. Fiber aids in digestion, prevents constipation, and supports a healthy gut. It also promotes satiety, making us feel fuller for longer, which can help with weight management.
    
    Disease Prevention:
    Regular consumption of vegetables has been linked to a reduced risk of chronic diseases. The antioxidants present in vegetables help fight off harmful free radicals in our bodies, thus reducing the risk of cancer, heart disease, and other age-related illnesses. Leafy greens, such as spinach and kale, are particularly rich in antioxidants and have been associated with a lower risk of certain cancers.
    
    Weight Management:
    Vegetables are low in calories and high in nutrients, making them an excellent choice for weight management. They provide the body with essential vitamins and minerals while being relatively low in fat and carbohydrates. Including a variety of vegetables in your meals can help control calorie intake, promote a healthy metabolism, and support sustainable weight loss.
    
    Hydration and Skin Health:
    Many vegetables, such as cucumbers, tomatoes, and lettuce, have high water content, contributing to our daily hydration needs. Staying hydrated is essential for maintaining healthy skin, promoting a youthful complexion, and supporting overall skin health.
    
    Boosting Energy and Vitality:
    The nutrients in vegetables, including B vitamins and iron, help convert food into energy, keeping us feeling energized throughout the day. Incorporating vegetables into your diet can also enhance vitality, improve cognitive function, and support a positive mood.
    
    Variety and Culinary Delights:
    The world of vegetables is incredibly diverse, offering a wide array of flavors, textures, and colors. From leafy greens to vibrant bell peppers, crunchy carrots, and creamy avocados, there is a vegetable to suit every palate and culinary preference. Experimenting with different vegetables can add excitement and variety to your meals, making healthy eating a pleasurable experience.
    
    Conclusion:
    Vegetables are not just a side dish; they are the true heroes of a nutritious and balanced diet. Their abundance of essential nutrients, fiber, and disease-fighting compounds make them an integral part of a healthy lifestyle. By incorporating a rainbow of vegetables into our meals, we can reap the numerous benefits they offer, supporting our overall well-being and enjoying the delicious flavors they bring to our plates. So let's celebrate vegetables and make them a central part of our daily dietary choices for a healthier and happier life</p>  
    

    </div>

    `;
}
