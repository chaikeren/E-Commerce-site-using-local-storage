class Product{
    prod_id
    prod_name
    prod_price
    prod_description
    category

    constructor(
        prod_id,
        prod_name,
        prod_price,
        prod_description,
        category
        )
    {
        this.prod_id = prod_id
        this.prod_name = prod_name
        this.prod_price = prod_price
        this.prod_description = prod_description
        this.category = category
    }
}


function UpdateProductInfo(){
    //* Update first the local storage
    products[currentProduct].prod_id = current_prod_id.value

    products[currentProduct].prod_price = current_prod_price.value

    products[currentProduct].prod_description = current_prod_description.value 

    products[currentProduct].category = current_prod_category.value

    localStorage.setItem(`productsArray`, JSON.stringify(products))
    alert("Changed")
    window.location.replace("adminProductTable.html")
}