const menu = [
  {
    id: 1,
    title: "GroundnutOil",
    category: "oil",
    price: 110.45,
    quantity: 16,
    img: "./images/item-1.jpg",
    desc: `Groundnut oil is a healthy, versatile oil ideal for cooking and frying, high in beneficial fats, antioxidants, and has a high smoke point. It has a mild, nutty flavor and can be used in both sweet and savory dishes. A great choice for those looking for a high-quality oil to enhance their cooking. `,
  },
  {
    id: 2,
    title: "PalmOil",
    category: "oil",
    price: 54.12,
    quantity: 25,
    img: "./images/item-2.jpg",
    desc: `Palm oil is a versatile oil used in food and cosmetics. It has a high smoke point and is rich in vitamins and minerals. It's also used in personal care products due to its moisturizing properties. Our palm oil is sustainably sourced. `,
  },
  {
    id: 3,
    title: "RoyalStallion",
    category: "Main",
    price: 91.25,
    quantity: 32,
    img: "./images/item-3.jpg",
    desc: `Raw rice is a staple food that is easy to cook, versatile and budget-friendly, it can be stored for long time and it is available in different types like long-grain, short-grain and wild rice. `,
  },
  {
    id: 4,
    title: "BasmatiRice",
    category: "Main",
    quantity: 0,
    price: 45.55,
    img: "./images/item-4.jpg",
    desc: `We offer raw basmati rice that is non-GMO, gluten-free and has a distinct aroma and delicate flavor. It cooks quickly and evenly, making it perfect for any dish. Order now to try it for yourself. `,
  },
  {
    id: 5,
    title: "spaghetti",
    category: "Main",
    price: 22.99,
    quantity: 1200,
    img: "./images/item-5.png",
    desc: `Raw spaghetti is a type of pasta made from wheat and can be used in many dishes. It can be boiled and paired with different sauces and ingredients to make a tasty meal. It's a good alternative to traditional pasta and can be used to make unique dishes. `,
  },
  {
    id: 6,
    title: "salt",
    category: "spice",
    price: 1.30,
    quantity: 16,
    img: "./images/item-6.jpg",
    desc: `Salt is a natural mineral that is used to add flavor and enhance taste in cooking. It is also used as a preservative and to control bacteria growth. Salt is a essential mineral for human body and it is found in most foods in small amounts. `,
  },
  {
    id: 7,
    title: "Detergent",
    category: "wash",
    price: 1.96,
    quantity: 120,
    img: "./images/item-7.jpg",
    desc: `Efficient and effective cleaning power in every scoop of our detergent. Say goodbye to tough stains and lingering odors with our top-rated formula. Try it today and experience spotless results every time. `,
  },
  {
    id: 8,
    title: "Bleach",
    category: "wash",
    price: 5.21,
    quantity: 100,
    img: "./images/item-8.jpg",
    desc: `Bleach is a powerful cleaning agent that effectively removes stains and dirt, sanitizes surfaces, and kills germs. A must-have for any household cleaning. `,
  },
  {
    id: 9,
    title: "RawCatFish",
    category: "fish",
    quantity: 1500,
    price: 1.96,
    img: "./images/item-9.jpg",
    desc: `Fresh, sustainable, and delicious raw catfish, perfect for grilling or sushi. High in protein and healthy omega-3s. Order now for a taste of the sea. `,
  },
  {
    id: 10,
    title: "SmokedCatFish",
    category: "fish",
    quantity: 500,
    price: 3.82,
    img: "./images/item-10.jpg",
    desc: `Delicious and savory smoked catfish, perfect for sandwiches, salads, or as a side dish. Slow-smoked to perfection for a rich and smoky flavor. Order now and enjoy the taste of traditional smoked fish. `,
  },
];

const main = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){
 display(menu);
 
 displayCategoryBtn();
});

function display(params) {
   let displayMain = params.map(function(i){
return `<article class="menu-item">
          <img src=${i.img} alt="" class="photo" />
          <div class="item-info">
            <header>
              <h4>${i.title}</h4>
              <h4 class="price">$${i.price}</h4>
              <h4 class="qty">${i.quantity}Left</h4>
            </header>
            <p class="item-text">
              ${i.desc}</p>
          </div>
        </article>`
  });
  displayMain = displayMain.join('');
  main.innerHTML = displayMain;
}

function displayCategoryBtn (){
const categories = menu.reduce(function(values,item){
   if (!values.includes(item.category)){
     values.push(item.category);
   }
   return values;
 },['all']);

 const categoryBtns = categories.map(function(cat){
   return `<button class="filter-btn" data-id=${cat}>${cat}</button>`;
 }).join('');
btnContainer.innerHTML = categoryBtns;

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
const category = e.currentTarget.dataset.id;
const displayCategory = menu.filter(function(cat){
  if (cat.category === category){
    return cat;
  }
});
if (category === 'all') {
  display(menu);
} else {
  display(displayCategory);
}
  });
});
}