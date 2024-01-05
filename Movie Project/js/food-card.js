let colddrinksdata=[
    {
        foodimg: "assets/food images/cocacola.png",
        foodname: "cocacola",
        price: "99",
    },
    {
        foodimg: "assets/food images/pepsi.png",
        foodname: "pepsi",
        price: "99",
    },
    {
        foodimg: "assets/food images/coca-fries-burger.png",
        foodname: "burgercombo",
        price: "249",
    },
    {
        foodimg: "assets/food images/fries.png",
        foodname: "fries",
        price: "119",
    },
    {
        foodimg: "assets/food images/coffee.png",
        foodname: "coffee",
        price: "79",
    },
    {
        foodimg: "assets/food images/tea.png",
        foodname: "tea",
        price: "69",
    },
    {
        foodimg: "assets/food images/coldcoffee.png",
        foodname: "coldcoffee",
        price: "129",
    }
]




const cardcon = document.querySelector('.colddrinks')

const postmethod = () =>{
    colddrinksdata.map((data2) => {
        const poseele = document.createElement('div');
        poseele.className='col-6 col-sm-6  col-lg-3 col-md-4 col-xl-3';
        poseele.innerHTML += `
        <div class="card">
        <img src="${data2.foodimg}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="food-name-price">
                <p>${data2.foodname}</p>
                <p><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${data2.price}</p>
            </div>
            <div class="add-food">
                <a href="#" class=""><i class="fa-solid fa-paper-plane"></i>add</a>
            </div>
        </div>
    </div>`
  cardcon.appendChild(poseele)
})

}

postmethod()