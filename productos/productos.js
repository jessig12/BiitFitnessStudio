// Product container to add cards
let pcontainer = document.getElementById("product-container");

// Add a single product to product container
function addProduct(product) {
    // Create card
    let card = document.createElement("div");
    card.className = "product-card";

    // Create image
    let product_image = document.createElement("img");
    product_image.src = product.image;
    product_image.className = "product-img";

    // Create image container
    let a = document.createElement("a");
    a.href = "";
    a.appendChild(product_image);

    // Create product name
    let product_title = document.createElement("h3");
    product_title.className = "product-title";
    product_title.innerText = product.title;

    // Create product price
    let product_price = document.createElement("h4");
    product_price.className = "product-price";
    product_price.innerText = "$" + product.price;

    // Create product button action
    let product_button = document.createElement("button");
    product_button.className = ("product-button", "btn btn-dark");
    product_button.innerText = "Agregar al carrito";

    // Add elements to card
    card.appendChild(a);
    card.appendChild(product_title);
    card.appendChild(product_price);
    card.appendChild(product_button);

    // Add card to product container
    pcontainer.appendChild(card);
}

// Add new products to product container //To do: modify every product...
addProduct({
    title: "Gold Standar Whey sabor vainilla ",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1020.00,
    description: "lorem ipsum dolor sit amet",
});

addProduct({
    title: "Gold Standar Whey sabor chocolate",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1020.00,
    description: "lorem ipsum dolor sit amet",
});

addProduct({
    title: "Gold Standar Whey sabor fresa",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1020.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor peanut butter",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1520.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor natural",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1200.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor cookies&cream",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1250.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor chai",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1250.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor taro",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1250.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor moka",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1350.00,
    description: "lorem ipsum dolor sit amet",
});
addProduct({
    title: "Gold Standar Whey sabor plátano",
    image: "https://i.ibb.co/qpq6RV2/chocolate.png",
    price: 1350.00,
    description: "lorem ipsum dolor sit amet",
});
/**
 * Visual style
 */

const flavoursContainer = document.getElementById("product-container");
const flavoursScrollWidth = flavoursContainer.scrollWidth;

let disabled = false;

window.addEventListener("load", () => {
    self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
            flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }
    }, 15);
});
