// SYNCHRONOUS
console.log('Start');

const time = Date.now();
while (Date.now() - time < 5000) {}

console.log('END');

// ASYNCHRONOUS
console.log('Start');
setTimeout(() => {
  console.log('wird später ausgeführt');
}, 5000);

console.log('END');

// fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error:', error));

fetch('https://fakestoreapi.com/products')
  .then((response) => {
    console.log(response);
    if (!response.ok) throw new Error('Request failed');
    // if (!res.ok) throw new Error(`Request failed with status: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderProducts(data);
  })
  .catch((error) => console.error(error))
  .finally(() => console.log('You will see this in any condition'));

function renderProducts(products) {
  const productList = document.getElementById('product-list');
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <img src="${product.image}" alt="${product.title}" width="20%" />

        `;
    productList.appendChild(productDiv);
  });
}

fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Test Product',
    price: 29.99,
    description: 'this is a test product',
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error('Request failed');
    return res.json();
  })
  .then((data) => console.log('Product was added', data));

// ASYNC AWAIT

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('request failed');
  const data = await res.json();
  console.log(data);
}

fetchProducts();

// ASYNC AWAIT TRY-CATCH
// async function fetchProducts() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       console.log(response);
//       if (!response) throw new Error('Request failed');
//       const parsedData = await response.json();
//       console.log(parsedData);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   fetchProducts();
