// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC3WxZBaNJoZA2p7oe6ihTJCFOE6Y0U_7Q",
  authDomain: "dropshipping-98eb5.firebaseapp.com",
  projectId: "dropshipping-98eb5",
  storageBucket: "dropshipping-98eb5.appspot.com",
  messagingSenderId: "904925867242",
  appId: "1:904925867242:web:af0abda866826e92f8fb93",
  measurementId: "G-BVZR8HY1SR"
};

firebase.initializeApp(firebaseConfig);

// Reference to your Firebase database
const database = firebase.database();

// Reference to the container where products will be displayed
const productContainer = document.getElementById('productContainer');

// Function to fetch and display products from Firebase
function displayProducts() {
    database.ref('products').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const productData = childSnapshot.val();
            const productId = childSnapshot.key;

            // Create product card element
            const productCard = document.createElement('div');
            productCard.classList.add('col-lg-3', 'col-sm-6', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'product-item', 'my-3');

            // Product image
            const productImage = document.createElement('img');
            productImage.src = productData.imageUrl;
            productImage.alt = productData.name;
            productCard.appendChild(productImage);

            // Icons (expand, heart, shopping bag)
            const iconsList = document.createElement('ul');
            iconsList.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'list-unstyled', 'icons');
            const expandIcon = createIcon('fas fa-expand-arrows-alt');
            const heartIcon = createIcon('far fa-heart');
            const shoppingBagIcon = createIcon('fas fa-shopping-bag');
            iconsList.appendChild(expandIcon);
            iconsList.appendChild(heartIcon);
            iconsList.appendChild(shoppingBagIcon);
            productCard.appendChild(iconsList);

            // Tag
            const tag = document.createElement('div');
            tag.classList.add('tag', 'bg-red'); // Adjust the class dynamically based on product tag
            tag.textContent = productData.tag; // Assuming tag is stored as a direct property
            productCard.appendChild(tag);

            // Title
            const title = document.createElement('div');
            title.classList.add('title', 'pt-4', 'pb-1');
            title.textContent = productData.name;
            productCard.appendChild(title);

            // Star rating
            const starRating = document.createElement('div');
            starRating.classList.add('d-flex', 'align-content-center', 'justify-content-center');
            for (let i = 0; i < 5; i++) {
                const starIcon = createIcon('fas fa-star');
                starRating.appendChild(starIcon);
            }
            productCard.appendChild(starRating);

            // Price
            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = '$ ' + productData.price;
            productCard.appendChild(price);

            // Append product card to the container
            productContainer.appendChild(productCard);
        });
    });
}

// Helper function to create icon elements
function createIcon(className) {
    const icon = document.createElement('li');
    icon.classList.add('icon');
    
    // Split className by spaces and add each class individually
    className.split(' ').forEach(cls => {
        icon.classList.add(cls);
    });

    const iconSpan = document.createElement('span');
    // Assuming you want to add the classes to the <span> inside <li>
    // Adjust this logic based on your specific HTML structure
    iconSpan.classList.add('icon-span');
    icon.appendChild(iconSpan);
    return icon;
}

// Call the function to display products
displayProducts();
