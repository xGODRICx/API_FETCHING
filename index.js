const Base_URL = "https://dummyjson.com"
async function fetchProductsData () {
    try {
        let response = await fetch(`${Base_URL}/products`);
        console.log(response);
        let translatedData = await response.json();
        console.log(translatedData)
        let actualProductData = translatedData.products
        console.log(actualProductData)
        return actualProductData
    }
    catch(error) {
        console.log(error);
    }
};
async function renderData() {
    let container = document.getElementById("products-container")
    let productsInContainer = await fetchProductsData();
    console.log(productsInContainer)
    for(i = 0; i < productsInContainer.length; i++){
        let myCurrentProductInContainer = productsInContainer[i];
        let newProductInContainer = document.createElement("p")
        newProductInContainer.innerText = myCurrentProductInContainer.title
        container.appendChild(newProductInContainer);
    }
}
renderData()