/*
  UNCLE MONEY storefront data
  Replace product/category image paths below with your own files in /assets.
  This static version stores cart and favourites in the visitor's browser.
*/

const categories = [
  { name: "Style & Accessories", count: "26 pieces", image: "assets/categories/style.svg", filter: "Style" },
  { name: "Home & Living", count: "18 objects", image: "assets/categories/home.svg", filter: "Home" },
  { name: "Tech & Sound", count: "21 upgrades", image: "assets/categories/tech.svg", filter: "Tech" },
  { name: "Travel & Leisure", count: "14 essentials", image: "assets/categories/travel.svg", filter: "Travel" }
];

const products = [
  {
    id: 1,
    name: "Marina Frame Sunglasses",
    category: "Style",
    price: 38,
    compareAt: 52,
    image: "assets/products/sunglasses.svg",
    badge: "Best seller",
    tags: ["bestseller", "deal"],
    rating: 4.9,
    reviews: 184,
    description: "Gloss-finish frames with smoked lenses and a confident, vacation-ready silhouette. Lightweight enough for all-day wear."
  },
  {
    id: 2,
    name: "Solstice Eau de Parfum",
    category: "Style",
    price: 64,
    image: "assets/products/fragrance.svg",
    badge: "New",
    tags: ["new"],
    rating: 4.8,
    reviews: 96,
    description: "A bright, warm fragrance with citrus peel, soft florals and a smooth amber finish made for late afternoons."
  },
  {
    id: 3,
    name: "Lagoon Wireless Headphones",
    category: "Tech",
    price: 89,
    compareAt: 119,
    image: "assets/products/headphones.svg",
    badge: "25% off",
    tags: ["deal", "bestseller"],
    rating: 4.9,
    reviews: 231,
    description: "Immersive over-ear sound, plush cushions and a bold cyan finish. Designed for long playlists and focused work."
  },
  {
    id: 4,
    name: "Palm Dial Watch",
    category: "Style",
    price: 74,
    image: "assets/products/watch.svg",
    badge: "Limited",
    tags: ["new"],
    rating: 4.7,
    reviews: 72,
    description: "A clean statement watch with a sunlit dial, polished case and soft silicone strap in a tropical yellow tone."
  },
  {
    id: 5,
    name: "Market Day Carryall",
    category: "Travel",
    price: 42,
    image: "assets/products/tote.svg",
    badge: "Best seller",
    tags: ["bestseller"],
    rating: 4.9,
    reviews: 156,
    description: "A structured carryall with generous storage, reinforced handles and a bright woven finish for daily errands or beach days."
  },
  {
    id: 6,
    name: "Coastline Runner",
    category: "Style",
    price: 96,
    compareAt: 128,
    image: "assets/products/sneaker.svg",
    badge: "Deal",
    tags: ["deal"],
    rating: 4.8,
    reviews: 128,
    description: "A lightweight lifestyle sneaker balancing soft cushioning, clean lines and bright tropical colour blocking."
  },
  {
    id: 7,
    name: "Sun Club Tumbler",
    category: "Home",
    price: 29,
    image: "assets/products/tumbler.svg",
    badge: "New",
    tags: ["new"],
    rating: 4.8,
    reviews: 89,
    description: "Double-wall insulated drinkware with a smooth matte finish, reusable straw and a shape that fits standard cup holders."
  },
  {
    id: 8,
    name: "Halo Desk Light",
    category: "Home",
    price: 58,
    image: "assets/products/lamp.svg",
    badge: "Editor pick",
    tags: ["bestseller"],
    rating: 4.7,
    reviews: 64,
    description: "A sculptural dimmable lamp that adds warm light and a soft pink accent to desks, shelves and bedside tables."
  }
];

const state = {
  filter: "all",
  query: "",
  modalProductId: null,
  cart: JSON.parse(localStorage.getItem("uncleMoneyCart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("uncleMoneyFavorites") || "[]")
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const categoryGrid = $("#categoryGrid");
const productGrid = $("#productGrid");
const resultCount = $("#resultCount");
const clearSearch = $("#clearSearch");
const siteSearch = $("#siteSearch");
const cartDrawer = $("#cartDrawer");
const backdrop = $("#backdrop");
const cartItems = $("#cartItems");
const cartSummary = $("#cartSummary");
const emptyCart = $("#emptyCart");
const toast = $("#toast");

function money(value) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(value);
}

function saveState() {
  localStorage.setItem("uncleMoneyCart", JSON.stringify(state.cart));
  localStorage.setItem("uncleMoneyFavorites", JSON.stringify(state.favorites));
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category, index) => `
    <article class="category-card reveal ${index > 1 ? "delay-one" : ""}" data-category="${category.filter}" tabindex="0" role="button" aria-label="Shop ${category.name}">
      <img src="${category.image}" alt="${category.name}" />
      <div class="category-content">
        <div><small>${category.count}</small><h3>${category.name}</h3></div>
        <span class="category-arrow">↗</span>
      </div>
    </article>
  `).join("");

  $$(".category-card").forEach(card => {
    const activate = () => {
      state.query = card.dataset.category;
      siteSearch.value = state.query;
      clearSearch.hidden = false;
      renderProducts();
      document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") activate();
    });
  });
}

function getVisibleProducts() {
  const q = state.query.trim().toLowerCase();
  return products.filter(product => {
    const matchesFilter = state.filter === "all" || product.tags.includes(state.filter);
    const haystack = `${product.name} ${product.category} ${product.badge} ${product.description}`.toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  });
}

function renderProducts() {
  const visible = getVisibleProducts();
  resultCount.textContent = `${visible.length} product${visible.length === 1 ? "" : "s"}`;
  clearSearch.hidden = !state.query;

  if (!visible.length) {
    productGrid.innerHTML = `<div class="no-results"><h3>Nothing matched that search.</h3><p>Try a category like Tech, Home, Travel or Style.</p></div>`;
    return;
  }

  productGrid.innerHTML = visible.map(product => {
    const favorite = state.favorites.includes(product.id);
    return `
      <article class="product-card reveal visible" data-id="${product.id}">
        <div class="product-image" data-action="view" tabindex="0" role="button" aria-label="View ${product.name}">
          <span class="product-badge">${product.badge}</span>
          <button class="favorite-button ${favorite ? "active" : ""}" data-action="favorite" aria-label="${favorite ? "Remove from" : "Add to"} saved items">${favorite ? "♥" : "♡"}</button>
          <img src="${product.image}" alt="${product.name}" />
          <button class="quick-add" data-action="add">Quick add — ${money(product.price)}</button>
        </div>
        <div class="product-info">
          <div class="product-meta">
            <div><h3>${product.name}</h3><span class="product-category">${product.category}</span></div>
            <div class="price">${product.compareAt ? `<s>${money(product.compareAt)}</s>` : ""}${money(product.price)}</div>
          </div>
          <div class="rating">★★★★★ <span>${product.rating} (${product.reviews})</span></div>
        </div>
      </article>
    `;
  }).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function addToCart(productId) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else state.cart.push({ id: productId, quantity: 1 });
  saveState();
  updateCart();
  const product = products.find(item => item.id === productId);
  showToast(`${product.name} added to your bag.`);
}

function updateCart() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = totalCount;
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);
  $("#cartSubtotal").textContent = money(subtotal);

  if (!state.cart.length) {
    cartItems.innerHTML = "";
    emptyCart.classList.add("show");
    cartSummary.style.display = "none";
    return;
  }

  emptyCart.classList.remove("show");
  cartSummary.style.display = "block";
  cartItems.innerHTML = state.cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `
      <article class="cart-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <p>${product.category}</p>
          <div class="qty-controls"><button data-cart="minus" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-cart="plus" aria-label="Increase quantity">+</button></div>
          <button class="remove-item" data-cart="remove">Remove</button>
        </div>
        <strong>${money(product.price * item.quantity)}</strong>
      </article>
    `;
  }).join("");
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) state.favorites = state.favorites.filter(id => id !== productId);
  else state.favorites.push(productId);
  saveState();
  renderProducts();
  showToast(state.favorites.includes(productId) ? "Saved to your favourites." : "Removed from favourites.");
}

function openOverlay(element) {
  element.classList.add("show");
  element.setAttribute("aria-hidden", "false");
  backdrop.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeOverlays() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  $("#productModal").classList.remove("show");
  $("#productModal").setAttribute("aria-hidden", "true");
  $("#infoModal").classList.remove("show");
  $("#infoModal").setAttribute("aria-hidden", "true");
  backdrop.classList.remove("show");
  document.body.style.overflow = "";
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  backdrop.classList.add("show");
  document.body.style.overflow = "hidden";
}

function openProductModal(productId) {
  const product = products.find(item => item.id === productId);
  state.modalProductId = productId;
  $("#modalImage").style.backgroundImage = `url("${product.image}")`;
  $("#modalTag").textContent = product.badge;
  $("#modalTitle").textContent = product.name;
  $("#modalPrice").textContent = money(product.price);
  $("#modalCompare").textContent = product.compareAt ? money(product.compareAt) : "";
  $("#modalDescription").textContent = product.description;
  openOverlay($("#productModal"));
}

function setupProductEvents() {
  productGrid.addEventListener("click", event => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    const productId = Number(card.dataset.id);
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "add") addToCart(productId);
    if (action === "favorite") toggleFavorite(productId);
    if (action === "view" && !event.target.closest("button")) openProductModal(productId);
  });

  productGrid.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches('[data-action="view"]')) {
      openProductModal(Number(event.target.closest(".product-card").dataset.id));
    }
  });
}

function setupCartEvents() {
  cartItems.addEventListener("click", event => {
    const row = event.target.closest(".cart-item");
    if (!row) return;
    const id = Number(row.dataset.id);
    const item = state.cart.find(entry => entry.id === id);
    const action = event.target.dataset.cart;
    if (action === "plus") item.quantity += 1;
    if (action === "minus") item.quantity = Math.max(1, item.quantity - 1);
    if (action === "remove") state.cart = state.cart.filter(entry => entry.id !== id);
    saveState();
    updateCart();
  });
}

function setupFilters() {
  $("#filterRow").addEventListener("click", event => {
    const button = event.target.closest(".filter-pill");
    if (!button) return;
    state.filter = button.dataset.filter;
    $$(".filter-pill").forEach(item => item.classList.toggle("active", item === button));
    renderProducts();
  });

  siteSearch.addEventListener("input", event => {
    state.query = event.target.value;
    renderProducts();
  });

  clearSearch.addEventListener("click", () => {
    state.query = "";
    siteSearch.value = "";
    renderProducts();
    siteSearch.focus();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      siteSearch.focus();
    }
    if (event.key === "Escape") closeOverlays();
  });
}

function startCountdown() {
  const end = Date.now() + 36 * 60 * 60 * 1000;
  const tick = () => {
    const remaining = Math.max(0, end - Date.now());
    const h = Math.floor(remaining / 3_600_000);
    const m = Math.floor((remaining % 3_600_000) / 60_000);
    const s = Math.floor((remaining % 60_000) / 1000);
    $("#hours").textContent = String(h).padStart(2, "0");
    $("#minutes").textContent = String(m).padStart(2, "0");
    $("#seconds").textContent = String(s).padStart(2, "0");
  };
  tick();
  setInterval(tick, 1000);
}

function setupScrollEffects() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$(".rail-link[data-section]").forEach(link => link.classList.toggle("active", link.dataset.section === entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  ["home", "categories", "deals", "products"].forEach(id => sectionObserver.observe(document.getElementById(id)));
}

function setupMisc() {
  $("#cartButton").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeOverlays);
  $("#closeModal").addEventListener("click", closeOverlays);
  $("#closeInfo").addEventListener("click", closeOverlays);
  backdrop.addEventListener("click", closeOverlays);
  $("#emptyShopButton").addEventListener("click", () => { closeOverlays(); document.querySelector("#products").scrollIntoView({ behavior: "smooth" }); });
  $("#modalAddButton").addEventListener("click", () => addToCart(state.modalProductId));
  $("#openInfo").addEventListener("click", () => openOverlay($("#infoModal")));
  $("#shippingButton").addEventListener("click", () => { openOverlay($("#infoModal")); $("#infoModal h2").textContent = "Shipping that stays simple."; $("#infoModal p").textContent = "Use this panel for your real shipping policy, delivery windows, returns and exchange information before publishing."; });
  $("#accountButton").addEventListener("click", () => showToast("Connect this button to your customer account platform."));
  $("#checkoutButton").addEventListener("click", () => showToast("Connect Stripe, Shopify or another checkout here."));
  $("#openFavorites").addEventListener("click", () => {
    if (!state.favorites.length) return showToast("You have no saved products yet.");
    state.query = "";
    state.filter = "all";
    siteSearch.value = "";
    const favoriteProducts = products.filter(product => state.favorites.includes(product.id));
    resultCount.textContent = `${favoriteProducts.length} saved product${favoriteProducts.length === 1 ? "" : "s"}`;
    productGrid.innerHTML = favoriteProducts.map(product => `
      <article class="product-card reveal visible" data-id="${product.id}">
        <div class="product-image" data-action="view"><span class="product-badge">Saved</span><button class="favorite-button active" data-action="favorite">♥</button><img src="${product.image}" alt="${product.name}"/><button class="quick-add" data-action="add">Quick add — ${money(product.price)}</button></div>
        <div class="product-info"><div class="product-meta"><div><h3>${product.name}</h3><span class="product-category">${product.category}</span></div><div class="price">${money(product.price)}</div></div><div class="rating">★★★★★ <span>${product.rating} (${product.reviews})</span></div></div>
      </article>
    `).join("");
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });

  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    showToast("You're on the Money List.");
    event.currentTarget.reset();
  });

  const mobileMenu = $("#mobileMenu");
  const mobileMenuButton = $("#mobileMenuButton");
  mobileMenuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    mobileMenuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
  });
  $$("a", mobileMenu).forEach(link => link.addEventListener("click", () => mobileMenu.classList.remove("open")));
  $("#year").textContent = new Date().getFullYear();
}

renderCategories();
renderProducts();
updateCart();
setupProductEvents();
setupCartEvents();
setupFilters();
setupMisc();
startCountdown();
setupScrollEffects();
