const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 800, rating: 4.5 },
    { id: 2, name: "T-Shirt", category: "clothing", price: 20, rating: 4.2 },
    { id: 3, name: "Microwave", category: "home", price: 100, rating: 4.0 },
    { id: 4, name: "Smartphone", category: "electronics", price: 600, rating: 4.8 },
    { id: 5, name: "Jeans", category: "clothing", price: 40, rating: 4.1 },
    { id: 6, name: "Refrigerator", category: "home", price: 1200, rating: 4.7 },
];

const productList = document.getElementById('productList')

function displayProduct(productArray){
    productList.innerHTML = ''
    productArray.forEach(product => {
        productList.innerHTML +=
        `<div class="product">
         <h3>${product.name}</h3>
         <p>Category: ${product.category}</p>
         <p>Price: $${product.price}</p>
         <p>Rating: ${product.rating}</p>
        </div>`;
    });
}
displayProduct(products)

// filter by category

const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.addEventListener('change',()=>{
    const selectedCategory = categoryFilter.value;
    const filteredProducts = 
        selectedCategory === 'all' ? products : products.filter((product)=> product.category === selectedCategory);
    displayProduct(filteredProducts)
})


// Sort by price

const sortFilter = document.getElementById('sortOption');
sortFilter.addEventListener('change',()=>{
    const selectedSort = sortFilter.value;
    let sortedProduct = [...products]

    if(selectedSort === 'priceLow'){
        sortedProduct.sort((a,b)=> a.price - b.price)
    }
    else if (selectedSort === 'priceHigh'){
        sortedProduct.sort((a,b)=> b.price - a.price)
    }
    else if (selectedSort === 'rating'){
        sortedProduct.sort((a,b)=> b.rating - a.rating)
    }
    displayProduct(sortedProduct)
})

// Search products

const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input',()=>{
    const searchText = searchInput.value.toLowerCase();
    const result = products.filter((element)=>
        element.name.toLowerCase().includes(searchText)
    );
    displayProduct(result)
})