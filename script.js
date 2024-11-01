/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')


// Products Data
const products = [
    { id: 1, title: 'Product 1', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Product 2', description: 'You will love this product.', price: '$20', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Product 3', description: 'Best product in the market.', price: '$30', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Product 4', description: 'A must-have product.', price: '$40', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Product 5', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 6, title: 'Product 6', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 7, title: 'Product 7', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 8, title: 'Product 8', description: 'You will love this product.', price: '$20', image: 'https://via.placeholder.com/200' },
    { id: 9, title: 'Product 9', description: 'Best product in the market.', price: '$30', image: 'https://via.placeholder.com/200' },
    { id: 10, title: 'Product 10', description: 'A must-have product.', price: '$40', image: 'https://via.placeholder.com/200' },
    { id: 11, title: 'Product 11', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 12, title: 'Product 12', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 13, title: 'Product 13', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 14, title: 'Product 14', description: 'You will love this product.', price: '$20', image: 'https://via.placeholder.com/200' },
    { id: 15, title: 'Product 15', description: 'Best product in the market.', price: '$30', image: 'https://via.placeholder.com/200' },
    { id: 16, title: 'Product 16', description: 'A must-have product.', price: '$40', image: 'https://via.placeholder.com/200' },
    { id: 17, title: 'Product 17', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 18, title: 'Product 18', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 19, title: 'Product 19', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 20, title: 'Product 20', description: 'You will love this product.', price: '$20', image: 'https://via.placeholder.com/200' },
    { id: 21, title: 'Product 21', description: 'Best product in the market.', price: '$30', image: 'https://via.placeholder.com/200' },
    { id: 22, title: 'Product 22', description: 'A must-have product.', price: '$40', image: 'https://via.placeholder.com/200' },
    { id: 23, title: 'Product 23', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },
    { id: 24, title: 'Product 24', description: 'This is a great product.', price: '$10', image: 'https://via.placeholder.com/200' },










];

// Generate Product Cards
const productGrid = document.getElementById('productGrid');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-card-content">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        </div>
    `;
    card.onclick = () => openModal(product);
    productGrid.appendChild(card);
});

// Modal Functionality
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const closeBtn = document.getElementById('closeBtn');

function openModal(product) {
    modal.style.display = 'flex';
    modalImage.src = product.image;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяет стандартное поведение отправки формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Параметры для отправки
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Отправка через EmailJS
    emailjs.send('service_jxs9ewp', 'template_nghvcfb', templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
        }, function (error) {
            alert("Failed to send the message. Please try again.");
        });
});
// Sample transaction data
const transactionsData = [
    { id: "TX12345", user: "John Doe", amount: "$120.00", status: "Completed", date: "2024-10-25" },
    { id: "TX12346", user: "Jane Smith", amount: "$250.00", status: "Pending", date: "2024-10-26" },
    { id: "TX12347", user: "Alice Johnson", amount: "$95.00", status: "Failed", date: "2024-10-27" },
    { id: "TX12348", user: "Michael Brown", amount: "$300.00", status: "Completed", date: "2024-10-28" },
    { id: "TX12349", user: "Emily White", amount: "$450.00", status: "Completed", date: "2024-10-29" },
    { id: "TX12350", user: "David Green", amount: "$180.00", status: "Pending", date: "2024-10-30" },
    { id: "TX12351", user: "Laura Black", amount: "$60.00", status: "Failed", date: "2024-10-31" },
];

// Function to render the transaction data
function renderTransactions() {
    const tableBody = document.getElementById("transactions-table-body");
    transactionsData.forEach(transaction => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${transaction.id}</td>
                    <td>${transaction.user}</td>
                    <td>${transaction.amount}</td>
                    <td><span class="status ${transaction.status.toLowerCase()}">${transaction.status}</span></td>
                    <td>${transaction.date}</td>
                `;

        tableBody.appendChild(row);
    });
}

// Call the function to render transactions on page load
renderTransactions();


// filter.js
function filterTable(input) {
    const filter = input.value.toUpperCase();
    const rows = input.nextElementSibling.querySelectorAll("tr:not(:first-child)");

    rows.forEach(row => {
        const cells = Array.from(row.getElementsByTagName("td"));
        const matches = cells.some(cell => cell.textContent.toUpperCase().includes(filter));
        row.style.display = matches ? "" : "none";
    });
}
