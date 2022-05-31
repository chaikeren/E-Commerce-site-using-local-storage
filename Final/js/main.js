
//*Global variables
{   
    var admin = {
        userName:"admin",
        password:"admin1234admin"
    }
    var adminLStorage = JSON.parse(localStorage.getItem(`admin`))
    var users = LoadUsers()
    var register_form = document.querySelector(`#register_form`)
    var signIn_form = document.querySelector(`#signIn_form`);
    var username = document.querySelector(`#profile_username`)
    var email = document.querySelector(`#profile_email`)
    var streetNumber = document.querySelector(`#profile_streetNumber`)
    var city = document.querySelector(`#profile_city`)
    var adress = document.querySelector(`#profile_adress`)
    var index_user_proflile_file = document.querySelector(`#index_user_proflile_file`)
    var index_user_proflile_image = document.querySelector(`#index_user_proflile_image`)
    var register_user_profile_file = document.querySelector(`#register_user_profile_file`)
    var profLabel = document.querySelector(`#profLabel`)
    var currentUser = JSON.parse(sessionStorage.getItem(`current_user`))
    var current_user_index = JSON.parse(sessionStorage.getItem(`current_user_index`))
    var logout = document.querySelector('.leftBtn')
    var updateInfo = document.querySelector('#info_form');
    var toggle = document.getElementById('toggle')
    var navbar = document.getElementById('navbar')
    var menu = document.getElementById('menu')
    var box = document.getElementById('box2')
    var contactUs = document.getElementById('contactUs')
    var image = document.getElementById('#image')
    var signinBtn = document.querySelector('.signInBtn')
    var signupBtn = document.querySelector('.signUpBtn')
    var formBx = document.querySelector('.formBx')
    var body = document.querySelector('.regBd')
    var cityList = document.getElementById('cityList')
    var image = document.querySelector(`#peerVideo`)
}

//*Takes the submit arrgoument from the form
if(register_form){
    register_form.addEventListener(`submit`, RegisterUser)
}

//*Save current user image in local storage
if(register_user_profile_file){
    register_user_profile_file.addEventListener("change", ShowImage)
}

//*Log in the user
if(signIn_form){
    signIn_form.addEventListener(`submit`, LoginUser);
}

//*loggin out
if(logout){
    logout.addEventListener("click",LogginOut);
}

//* Put current user info in the logged in icon
if(adminLStorage&&currentUser && username&& email && streetNumber && index_user_proflile_file)
{
    city.value = currentUser.city;
    adress.value = currentUser.street;
    username.value = currentUser.user_name;
    email.value = currentUser.email;
    streetNumber.value = currentUser.street_number; 
    index_user_proflile_image.src = localStorage.getItem(currentUser.user_name)
    
};

if(currentUser && username&& email && streetNumber && index_user_proflile_file)
{
    city.value = currentUser.city;
    adress.value = currentUser.street;
    username.value = currentUser.user_name;
    email.value = currentUser.email;
    streetNumber.value = currentUser.street_number; 
    index_user_proflile_image.src = localStorage.getItem(currentUser.user_name)
}

//*Updating Current user info
if(updateInfo){
    updateInfo.addEventListener("submit",UpdateUserInfo)
}

//*shows current user image in the looged-in icon
if(index_user_proflile_file){
    index_user_proflile_file.addEventListener("change", ShowImage)
}

//*When not logged in, go to register page.
//*when logged in used as a on click, to show current-user info
if(index_user_proflile_image)
{
    if(index_user_proflile_image.src == "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3lC0SfgqCcTGipFh64hddM6xgBYQj90wOA&usqp=CAU")
        index_user_proflile_image.addEventListener("click", function(){
            window.location.replace("register2.html");
        })
    else
        index_user_proflile_image.addEventListener("click", ShowProfileInfo)
}

//*Show tumbs up gif when user logged in
if( image && index_user_proflile_image){
    if(index_user_proflile_image.src != "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3lC0SfgqCcTGipFh64hddM6xgBYQj90wOA&usqp=CAU"){
    document.addEventListener("DOMContentLoaded", ShowLoggedInTumbsUp)
    }
}

//*Navbar
if(toggle){
    toggle.addEventListener('click',ShowNavBar)
}

//*contact us
if(box){
    box.addEventListener('click',ShowContactForm)
}

//*Register
if(signupBtn || signinBtn){
    signupBtn.addEventListener('click',ActiveBox)

    signinBtn.addEventListener('click',RemoveActiveBox)
}

//*Show JSON list of cities in the register form
if(cityList){
    ShowJsonList()
}



//*clear local storage */
// localStorage.clear()

//*All products global veriables 
{
    var products = LoadProducts()

    var product_form = document.querySelector(`#product_form`)
    var product_file = document.querySelector(`#product_file`)
    var product_image = document.querySelector(`#product_image`)
    var product_submit = document.querySelector(`#btn5`)
    
    
    var shop_carrier_1 = document.querySelector(`#shop_carrier_1`)
    var shop_carrier_2 = document.querySelector(`#shop_carrier_2`)
    var shop_carrier_3 = document.querySelector(`#shop_carrier_3`)
    var shop_carrier_4 = document.querySelector(`#shop_carrier_4`)
    var shop_carrier_5 = document.querySelector(`#shop_carrier_5`)
    
    
    var shop_item_1 = document.querySelector(`#shop_item_1`)
    var shop_item_2 = document.querySelector(`#shop_item_2`)
    var shop_item_3 = document.querySelector(`#shop_item_3`)
    var shop_item_4 = document.querySelector(`#shop_item_4`)
    var shop_item_5 = document.querySelector(`#shop_item_5`)
    
    
    var price_prod1 = document.querySelector(`#price_prod1`)
    var price_prod2 = document.querySelector(`#price_prod2`)
    var price_prod3 = document.querySelector(`#price_prod3`)
    var price_prod4 = document.querySelector(`#price_prod4`)
    var price_prod5 = document.querySelector(`#price_prod5`)

    var number_of_products = 0;
}

//*All veriables for user cart
{
    var cart = LoadUserCart()
}

//*Save current user image in local storage
if(product_file){
    product_file.addEventListener("change", ShowImage)
}

if(product_form){
    product_form.addEventListener(`submit`, CreateProduct)
}

if(shop_carrier_1 && number_of_products < products.length){
    shop_item_1.src = JSON.parse(localStorage.getItem(products[number_of_products].prod_name))
    shop_carrier_1.style.display = "flex"
    shop_carrier_1.addEventListener("click", AddToCart)
    price_prod1.innerHTML = products[number_of_products].prod_price + "$"
    
    number_of_products++;
}

if(shop_carrier_2 && number_of_products < products.length){
    shop_item_2.src = JSON.parse(localStorage.getItem(products[number_of_products].prod_name))
    shop_carrier_2.style.display = "flex"
    shop_carrier_2.addEventListener("click", AddToCart)
    price_prod2.innerHTML = products[number_of_products].prod_price + "$"
    number_of_products++;
}

if(shop_carrier_3 && number_of_products < products.length){
    shop_item_3.src = JSON.parse(localStorage.getItem(products[number_of_products].prod_name))
    shop_carrier_3.style.display = "flex"
    shop_carrier_3.addEventListener("click", AddToCart)
    price_prod3.innerHTML = products[number_of_products].prod_price + "$"
    number_of_products++;
}

if(shop_carrier_4 && number_of_products < products.length){
    shop_item_4.src = JSON.parse(localStorage.getItem(products[number_of_products].prod_name))
    shop_carrier_4.style.display = "flex"
    shop_carrier_4.addEventListener("click", AddToCart)
    price_prod4.innerHTML = products[number_of_products].prod_price + "$"
    number_of_products++;
}

if(shop_carrier_5 && number_of_products < products.length){
    shop_item_5.src = JSON.parse(localStorage.getItem(products[number_of_products].prod_name))
    shop_carrier_5.style.display = "flex"
    shop_carrier_5.addEventListener("click", AddToCart)
    price_prod5.innerHTML = products[number_of_products].prod_price + "$"
    number_of_products++;
}

//*All Cart checkout veriables
{
    var c1 = document.querySelector(`#c1`)
    var c2 = document.querySelector(`#c2`)
    var c3 = document.querySelector(`#c3`)
    var c4 = document.querySelector(`#c4`)
    var c5 = document.querySelector(`#c5`)
    
    
    var card_image1 = document.querySelector(`.card-image1`)
    var card_image2 = document.querySelector(`.card-image2`)
    var card_image3 = document.querySelector(`.card-image3`)
    var card_image4 = document.querySelector(`.card-image4`)
    var card_image5 = document.querySelector(`.card-image5`)
}

var currentNumberOfProds = 0

//*Show items befor buying
if(c1 && currentNumberOfProds < cart.length){
    c1.style.display = "grid"
    document.querySelector(`#card_prod_name1`).innerHTML = cart[currentNumberOfProds].prod_name
    document.querySelector(`#card_prod_desc1`).innerHTML = cart[currentNumberOfProds].prod_description
    document.querySelector(`#card_prod_price1`).innerHTML = cart[currentNumberOfProds].prod_price
    document.querySelector(`#card_id1`).innerHTML = cart[currentNumberOfProds].prod_id
    document.querySelector(`#card_category1`).innerHTML = cart[currentNumberOfProds].category
    document.querySelector(`#card-image1`).src = JSON.parse(localStorage.getItem(cart[currentNumberOfProds].prod_name))
    currentNumberOfProds++
}
if(c2 && currentNumberOfProds < cart.length){
    c2.style.display = "grid"
    document.querySelector(`#card_prod_name2`).innerHTML = cart[currentNumberOfProds].prod_name
    document.querySelector(`#card_prod_desc2`).innerHTML = cart[currentNumberOfProds].prod_description
    document.querySelector(`#card_prod_price2`).innerHTML = cart[currentNumberOfProds].prod_price
    document.querySelector(`#card_id2`).innerHTML = cart[currentNumberOfProds].prod_id
    document.querySelector(`#card_category2`).innerHTML = cart[currentNumberOfProds].category
    document.querySelector(`#card-image2`).src = JSON.parse(localStorage.getItem(cart[currentNumberOfProds].prod_name))
    currentNumberOfProds++
}
if(c3 && currentNumberOfProds < cart.length){
    c3.style.display = "grid"
    document.querySelector(`#card_prod_name3`).innerHTML = cart[currentNumberOfProds].prod_name
    document.querySelector(`#card_prod_desc3`).innerHTML = cart[currentNumberOfProds].prod_description
    document.querySelector(`#card_prod_price3`).innerHTML = cart[currentNumberOfProds].prod_price
    document.querySelector(`#card_id3`).innerHTML = cart[currentNumberOfProds].prod_id
    document.querySelector(`#card_category3`).innerHTML = cart[currentNumberOfProds].category
    document.querySelector(`#card-image3`).src = JSON.parse(localStorage.getItem(cart[currentNumberOfProds].prod_name))
    currentNumberOfProds++
}
if(c4 && currentNumberOfProds < cart.length){
    c4.style.display = "grid"
    document.querySelector(`#card_prod_name4`).innerHTML = cart[currentNumberOfProds].prod_name
    document.querySelector(`#card_prod_desc4`).innerHTML = cart[currentNumberOfProds].prod_description
    document.querySelector(`#card_prod_price4`).innerHTML = cart[currentNumberOfProds].prod_price
    document.querySelector(`#card_id4`).innerHTML = cart[currentNumberOfProds].prod_id
    document.querySelector(`#card_category4`).innerHTML = cart[currentNumberOfProds].category
    document.querySelector(`#card-image4`).src = JSON.parse(localStorage.getItem(cart[currentNumberOfProds].prod_name))
    currentNumberOfProds++
}
if(c5 && currentNumberOfProds < cart.length){
    c5.style.display = "grid"
    document.querySelector(`#card_prod_name5`).innerHTML = cart[currentNumberOfProds].prod_name
    document.querySelector(`#card_prod_desc5`).innerHTML = cart[currentNumberOfProds].prod_description
    document.querySelector(`#card_prod_price5`).innerHTML = cart[currentNumberOfProds].prod_price
    document.querySelector(`#card_id5`).innerHTML = cart[currentNumberOfProds].prod_id
    document.querySelector(`#card_category5`).innerHTML = cart[currentNumberOfProds].category
    document.querySelector(`#card-image5`).src = JSON.parse(localStorage.getItem(cart[currentNumberOfProds].prod_name))
    currentNumberOfProds++
}

//*Checkout veriables
{
    var totalPrice = document.querySelector(`#checkout`)
    var checkout = document.querySelector(`#cart_box`)
    var total = 0;
}

//*Checkout
for(var i =0;i<cart.length;i++)
{
    total+= parseInt(cart[i].prod_price);
}

if(totalPrice){
    totalPrice.innerHTML = total + '$'
}

if(checkout){
    checkout.addEventListener('click', Checkout)
}




//*Admin edits
const tableEl = document.querySelector("#tb1");

if(tableEl){
    tableEl.addEventListener("click", onDeleteRow);
}

let sortDirection = false;
let personData = products


var personData2 = users

//*Admin user 
window.onload = () => {
    LoadTableData2(personData2);
};

const tableE2 = document.querySelector("#tb2");

if(tableE2){
    tableE2.addEventListener("click", onDeleteRow2);
}

window.onload = () => {
    LoadTableData(personData);
    LoadTableData2(personData2);
};


var currentProduct = JSON.parse(localStorage.getItem(`currentProduct`))

var current_prod_id = document.querySelector(`#prod_id`)
var current_prod_name = document.querySelector(`#prod_name`)
var current_prod_price = document.querySelector(`#prod_price`)
var current_prod_description = document.querySelector(`#prod_description`)
var current_prod_category = document.querySelector(`#category`)
var currrent_prod_image = document.querySelector(`#product_image`)
var current_prod_btn = document.querySelector(`#btn5`)
var current_prod_file = document.querySelector(`#product_file`)
var current_prod_return = document.querySelector(`#go_admin_page`)

    if(currentProduct > -1 &&
    current_prod_id &&
    current_prod_price &&
    current_prod_description &&
    current_prod_category &&
    currrent_prod_image &&
    current_prod_btn &&
    current_prod_file )
    {

        current_prod_id.value = products[currentProduct].prod_id
        current_prod_name.value = "Cant Change"
        current_prod_price.value = products[currentProduct].prod_price
        current_prod_description.value = products[currentProduct].prod_description
        current_prod_category.value =  products[currentProduct].category
        currrent_prod_image.src = JSON.parse(localStorage.getItem(products[currentProduct].prod_name))
        current_prod_file.style.display = "none"
        current_prod_btn.value = "Change"
    }

if(current_prod_btn && current_prod_btn.value == "Change"){
    current_prod_btn.addEventListener("click", UpdateProductInfo)
}

if(current_prod_return){
    current_prod_return.addEventListener("click", GoToAdmin)
}


var btns = document.querySelectorAll(`.btn_remove`)

btns.forEach(btn => btn.addEventListener(`click`,RemoveFromCart))

function RemoveFromCart(event){
    let index = event.target.dataset.id;
    cart.splice(index,1)
    localStorage.setItem(`cart`, JSON.stringify(cart))
    location.href = `product.html`
}