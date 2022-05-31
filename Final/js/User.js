
class User {

    user_name
    password
    first_name
    last_name
    email
    birth_date
    city
    street
    street_number

    constructor(
        u_name,
        pass,
        email,
        f_name,
        l_name,
        birth_date,
        city,
        street,
        street_number)
    {
        this.first_name=f_name
        this.user_name = u_name
        this.last_name = l_name
        this.password = pass
        this.email = email
        this.birth_date = birth_date
        this.city = city
        this.street = street
        this.street_number = street_number
    }
}

//*Update user info
function UpdateUserInfo(){
    //* Update first the local storage
    users[current_user_index].city = city.value;

    users[current_user_index].street = adress.value;

    
    users[current_user_index].email = email.value;
    
    users[current_user_index].street_number = streetNumber.value;

    //* Update the session storage
    currentUser.city = city.value;

    currentUser.street = adress.value;
  
    currentUser.email = email.value;
    
    currentUser.street_number = streetNumber.value;

    sessionStorage.setItem(`current_user`, JSON.stringify(currentUser))

    localStorage.setItem(`users`, JSON.stringify(users))
    
    if(adminLStorage)
    {
        document.getElementById("info_form").action ="AdminUserTable.html"
    }
}