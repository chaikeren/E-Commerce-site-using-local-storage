//*Create new user
//*Get us all the register users if no one register gives empty list
function LoadUsers(){
    
    //*Take the info from the local storage 
    let usersArr = JSON.parse(localStorage.getItem(`users`))
    
    //*Return empty array
    if(usersArr == null)
        return new Array()
    
    //*Return the users
    return usersArr
}

function RegisterUser(event) {

    //*remove the defult page refreshing
    event.preventDefault()

    //*get user info from the form page
    let user_name = document.querySelector(`#username`).value
    let user_pass = document.querySelector(`#password`).value
    let user_pass_confirm = document.querySelector(`#conf-password`).value
    let user_email = document.querySelector(`#email`).value
    let user_first_name = document.querySelector(`#firstName`).value
    let user_last_name = document.querySelector(`#lastName`).value
    let birth_date = document.querySelector(`#birthDate`).value
    let city = document.querySelector(`#cityName`).value
    let street = document.querySelector(`#street`).value
    let street_number = document.querySelector(`#streetNumber`).value

    let register_index_user_proflile_image = document.querySelector(`#register_index_user_proflile_image`).src

    //*check the password
    if (user_pass !== user_pass_confirm) {
        alert(`Password does not match`)
        return
    }

    let user = new User(
        user_name,
        user_pass,
        user_email,
        user_first_name,
        user_last_name,
        birth_date,
        city,
        street,
        street_number,
        )

    //*check if the email is alreay exist
    for(let i=0;i<users.length;i++){
        if(user_email === users[i].email){
            alert(`Email already exist`)
            return
        }
    } 

    //*check if the Username is alreay exist
    for(let i=0;i<users.length;i++){
        if(user_name === users[i].user_name){
            alert(`Username already exist`)
            return
        }
    } 
    users.push(user)


    //*Saves all the users in the lockl storage
    localStorage.setItem(`users`, JSON.stringify(users))

    //*save user image after he register successfuly in a diffrent local storage
    localStorage.setItem(user_name, register_index_user_proflile_image)

    // //*When succesfuly registerd go to login form
    // register_form.addEventListener("submit",RemoveActiveBox)
    register_form.reset();
    window.location.replace("register2.html");
}

//*Loggin in
function LoginUser(event){

    event.preventDefault()

    let user_namelog = document.querySelector(`#usernameT`).value
    let user_passlog = document.querySelector(`#passwordT`).value

    //*Admin profile values
    if(user_namelog === admin.userName &&
        user_passlog === admin.password){
            localStorage.setItem(`admin`, JSON.stringify(admin))

            window.location.replace("adminUserTable.html");

            return
        }

    //*Profile values
    var i = 0;
    for(;i<users.length;i++){
        if(user_namelog === users[i].user_name && 
            user_passlog === users[i].password){

            sessionStorage.setItem(`current_user`, JSON.stringify(users[i]))
            sessionStorage.setItem(`current_user_index`, JSON.stringify(i))

            window.location.replace("index.html");

            return
        }
    } 

        document.querySelector(`#signIn_form`).reset();
        alert("Incorrect Username or Password")
        return
}

//*Loggin out
function LogginOut(){
    window.location.replace("index.html");

    localStorage.removeItem(`cart`)
    sessionStorage.removeItem(`current_user`)
    current_user_index = null
}

//*Navbar
function ShowNavBar(){
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')
    menu.classList.toggle('active')
}

//*Profil logged in
function ShowProfileInfo(){
    document.querySelector(`.box3`).classList.toggle('active')
}

//*Contact us
function ShowContactForm(){
    box.classList.toggle('active')
    contactUs.classList.toggle('active')
}

//*Register
function ActiveBox(){
    formBx.classList.add('active')
    body.classList.add('active')
}
function RemoveActiveBox(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}

//*Show image when user choose file
function ShowImage(event){
    //*The input
    let element = event.target

    //*File
    let file = element.files[0]

    //**object that let chrome read the info from a surten file
    let reader = new FileReader()

    //*restart the reading function
    reader.onload = () => {
        //*We change the profile image icon to the desired image and updating the local storage image
        if(index_user_proflile_image!= null && 
            index_user_proflile_image != "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3lC0SfgqCcTGipFh64hddM6xgBYQj90wOA&usqp=CAU"){
                index_user_proflile_image.src = reader.result
                localStorage.setItem(users[current_user_index].user_name,  index_user_proflile_image.src)
            }

        //* Give the register profile image the src of desired image
        else if(adminLStorage == null && register_index_user_proflile_image!= null){
            register_index_user_proflile_image.src = reader.result
        }

        //*In-charge of showing product picture when creating product
        else if(product_image!=null){
            product_image.src = reader.result
        }
    }

    reader.readAsDataURL(file)
}

//*Show JSON cities list
function ShowJsonList(){
    fetch("cities.json")
    .then(response => response.json())
    .then(data => {
        for(var i =0;i< data.length;i++){
            cityList.innerHTML += '<option value="'+data[i].name+'"></option>'
        }
    })
}

function ShowLoggedInTumbsUp(){
    setTimeout(function(){
        showImage();
        setInterval(hideImage, 3000);
      });
    function hideImage(){
      image.style.display = "none" ;
    }
    function showImage(){
      image.style.display = "block" ;
    }
}

//*All products in store
function LoadProducts(){
    
    //*Take the info from the local storage 
    let products = JSON.parse(localStorage.getItem(`productsArray`))
    
    //*Return empty array
    if(products == null)
        return new Array()
    
    //*Return the users
    return products
}

//* All products in cart
function LoadUserCart(){
    
    //*Take the info from the local storage 
    let cart = JSON.parse(localStorage.getItem(`cart`))
    
    //*Return empty array
    if(cart == null)
        return new Array()
    
    //*Return the users
    return cart
}

//*Add item to cart
function AddToCart(event){
    event.target.classList.add('active')
    event.target.classList.add('active')
    var ID = event.target.id
    var index = parseInt(ID.substring(ID.length-1))-1
    cart.push( products[index])
    localStorage.setItem(`cart`, JSON.stringify(cart))
}

//*Create new product
function CreateProduct(event) {

    if(product_submit.value == "Change"){
        return
    }
    event.preventDefault()

    let prod_id = document.querySelector(`#prod_id`).value
    let prod_name = document.querySelector(`#prod_name`).value
    let prod_price = document.querySelector(`#prod_price`).value
    let prod_description = document.querySelector(`#prod_description`).value
    let category = document.querySelector(`#category`).value
    let product_image = document.querySelector(`#product_image`).src

    let product = new Product(
        prod_id,
        prod_name,
        prod_price,
        prod_description,
        category
        )
    
    for(let i=0;i<products.length;i++){
        if(prod_id === products[i].prod_id){
            alert(`Product id already exist`)
            return
        }
    } 

    for(let i=0;i<products.length;i++){
        if(prod_name === products[i].prod_name){
            alert(`Product name already exist`)
            return
        }
    } 
    products.push(product)

    localStorage.setItem(prod_name, JSON.stringify(product_image))
    sessionStorage.setItem(prod_name, JSON.stringify(prod_name))

    localStorage.setItem(`productsArray`, JSON.stringify(products))
    alert("Product has been created")
    window.location.reload()
}

//*Checkout
function Checkout(){
    if(parseInt(totalPrice.innerHTML) > 0){
        totalPrice.innerHTML = 0;
        localStorage.removeItem(`cart`)
        alert("Thanks for buying")
        window.location.replace("index.html");
    }
}


// //*Admin user edits
function onDeleteRow2(e) {
    if (!e.target.classList.contains("deleteBtn2")) {
        var index = e.target.closest("td").innerHTML.substring(36,37)
        sessionStorage.setItem(`current_user`, JSON.stringify(users[index]))
        sessionStorage.setItem(`current_user_index`, JSON.stringify(index))
        location.href = `index.html`
      return;
    }
  
    
    var index = e.target.closest("td").innerHTML.substring(36,37)
    users.splice(index,1)
    localStorage.setItem(`users`,JSON.stringify(users))
    const btn = e.target;
    btn.closest("tr").remove();
    
  }

function LoadTableData2(personData2){
    const tableBody2 = document.getElementById(`tableData2`)
    let dataHtml = ``;

    let i= 0;
    for(let person of personData2){
        dataHtml+= `<tr>
                        <td>${person.user_name}</td>
                        <td>${person.birth_date}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.street_number}</td>
                        <td><button class="deleteBtn2" data-id = "${i++}">Delete</button>
                        <button class="edit_person">Edit</button>
                        </td>
                    </tr>`;
    }
    if(tableBody2){
        tableBody2.innerHTML = dataHtml
    }
}





//*Admin edits
function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        var index = e.target.closest("td").innerHTML.substring(35,36)
        localStorage.setItem(`currentProduct`, index)
        location.href = `makeProd.html`
      return;
    }
  
    var index = e.target.closest("td").innerHTML.substring(35,36)
    products.splice(index,1)
    localStorage.setItem(`productsArray`,JSON.stringify(products))
    const btn = e.target;
    btn.closest("tr").remove();
    
  }

function LoadTableData(personData){
    const tableBody = document.getElementById(`tableData`)
    let dataHtml = ``;

    let i= 0;

    for(let product of personData){
        dataHtml+= `<tr>
                        <td>${product.prod_id}</td>
                        <td>${product.prod_name}</td>
                        <td>${product.prod_price}</td>
                        <td>${product.prod_description}</td>
                        <td>${product.category}</td>
                        <td><button class="deleteBtn" data-id = "${i++}">Delete</button>
                        <button class="edit_product">Edit</button>
                        </td>
                    </tr>`;
    }

    if(tableBody){
        tableBody.innerHTML = dataHtml
    }
}

function SortColum(columName){
    const dataType = typeof personData[0][columName];


    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
        SortNumberColum(sortDirection, columName);
        break;
    }
    
    LoadTableData(personData);

}

function SortNumberColum(sort, columName){
    personData = personData.sort((p1,p2) => {
        return sort ? p1[columName] - p2[columName] : 
        p2[columName] - p1[columName]
    });
}

function GoToAdmin(){
    location.href = "adminProductTable.html"
}

// Admin logs out
function AdminLogOut()
{
  localStorage.removeItem(`admin`)
}