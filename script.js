let productList = document.getElementById('productList');
let searchBar = document.getElementById('searchBar');
let userdata = [];


searchBar.addEventListener('keyup', (e) => {

    const searchproduct = e.target.value.toLowerCase();

    const productfliter = userdata.filter(product => {
        return (
            product.name.toLowerCase().includes(searchproduct)
        ) 
    });
    productCat(productfliter)  
})

let makeupAPI = async () => {
    try {
        let response = await fetch('makeup.json');

        userdata = await response.json();

        productCat(userdata);
    } catch (err) {
        console.error(err);
    }
};

let productCat = (productsdisplay) => {
    let gethtmlvalue = productsdisplay
        .map((product) => {
            return `<div class=col-6 id=styless>
                <img src=${product.api_featured_image} class=img-fluid></img>
                <p>Brand : ${product.brand}</p>
                <p>Name : ${product.name}</p>
                <p>Price :$ ${product.price}</p>
                <p class=descrip>Description : ${product.description}</p>
                <a href=${product.product_link} class=btn target=_blank>View Product Link</a>
            </div> `;
        })
        .join('');
        productList.innerHTML = gethtmlvalue;
};

makeupAPI();
