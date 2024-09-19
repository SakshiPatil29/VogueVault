document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Red Dress',
            price: 29.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Blue Jeans',
            price: 49.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Green Shirt',
            price: 19.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Black Shoes',
            price: 79.99,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        product

Item.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productList.appendChild(productItem);
    });
});
