/* ==========================================================================
   SNACKIFY APP LOGIC & STATE MANAGEMENT (DESI INDIAN SNACKS EDITION)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. PRODUCTS DATABASE (16 AUTHENTIC INDIAN TRADITIONAL SNACKS)
// --------------------------------------------------------------------------
const SNACK_DATABASE = [
  {
    id: 'snack-1',
    name: 'Sizzling Crispy Samosa (2 Pcs)',
    category: 'spicy',
    price: 40,
    rating: 4.9,
    reviews: 3420,
    calories: 260,
    prepTime: '8 min',
    image: 'images/samosa.jpg',
    description: 'Golden fried triangular flaky pastry stuffed with spiced potatoes, green peas, and whole coriander seeds. Served hot with sweet tamarind and spicy mint chutney.',
    tags: ['bestseller', 'spicy', 'quick'],
    dietary: ['Pure Veg'],
    dips: ['Mint Pudina Chutney', 'Sweet Tamarind Chutney', 'Fried Green Chili']
  },
  {
    id: 'snack-2',
    name: 'Delhi Street Pani Puri / Golgappe (8 Pcs)',
    category: 'spicy',
    price: 50,
    rating: 4.9,
    reviews: 4890,
    calories: 180,
    prepTime: '5 min',
    image: 'images/pani_puri.jpg',
    description: 'Crispy hollow puris filled with boiled potatoes, spiced chickpea mash, tangy tamarind water, and ice-cold spicy mint jaljeera water.',
    tags: ['bestseller', 'vegan', 'quick'],
    dietary: ['Pure Veg', 'Vegan'],
    dips: ['Teekha Spicy Water', 'Meetha Sweet Water', 'Boondi & Potato Mix']
  },
  {
    id: 'snack-3',
    name: 'Butter Pav Bhaji Supreme',
    category: 'cheese',
    price: 120,
    rating: 4.8,
    reviews: 2120,
    calories: 450,
    prepTime: '12 min',
    image: 'images/pav_bhaji.jpg',
    description: 'Thick spicy mashed vegetable curry topped with a dollop of melted Amul butter, served with butter-toasted soft pav buns, diced onions, and lemon wedges.',
    tags: ['bestseller'],
    dietary: ['Pure Veg'],
    dips: ['Extra Amul Butter', 'Chopped Onions & Lemon', 'Extra Butter Pav (+₹25)']
  },
  {
    id: 'snack-4',
    name: 'Bombay Masala Vada Pav (2 Pcs)',
    category: 'spicy',
    price: 60,
    rating: 4.9,
    reviews: 1760,
    calories: 320,
    prepTime: '6 min',
    image: 'images/vada_pav.jpg',
    description: 'The famous Mumbai street burger! Crispy fried potato fritter inside soft pav spread with dry garlic chutney, spicy green chili, and sweet tamarind.',
    tags: ['bestseller', 'quick'],
    dietary: ['Pure Veg'],
    dips: ['Garlic Dry Chutney', 'Fried Green Chili', 'Sweet Date Chutney']
  },
  {
    id: 'snack-5',
    name: 'Crispy Masala Dosa & Sambhar',
    category: 'healthy',
    price: 110,
    rating: 4.9,
    reviews: 2450,
    calories: 380,
    prepTime: '10 min',
    image: 'images/masala_dosa.jpg',
    description: 'Thin paper-crispy fermented rice and lentil crepe stuffed with spiced potato masala, served with piping hot dal sambhar and white coconut chutney.',
    tags: ['bestseller', 'gluten-free'],
    dietary: ['Pure Veg', 'Gluten-Free'],
    dips: ['White Coconut Chutney', 'Tomato Red Chutney', 'Hot Dal Sambhar']
  },
  {
    id: 'snack-6',
    name: 'Hot Jalebi with Creamy Rabri (250g)',
    category: 'sweet',
    price: 140,
    rating: 4.9,
    reviews: 3100,
    calories: 520,
    prepTime: '8 min',
    image: 'images/jalebi_rabri.jpg',
    description: 'Crispy spiral jalebis fried golden brown, soaked in saffron cardamom sugar syrup, paired with chilled thick malai rabri.',
    tags: ['bestseller', 'quick'],
    dietary: ['Pure Veg'],
    dips: ['Creamy Malai Rabri', 'Extra Saffron Syrup']
  },
  {
    id: 'snack-7',
    name: 'Piping Hot Chole Bhature',
    category: 'spicy',
    price: 130,
    rating: 4.8,
    reviews: 2890,
    calories: 580,
    prepTime: '12 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeADLONIUW85GclyAgxqCShJC8oNnRwccJmqC3ImoVpA&s=10',
    description: 'Two fluffy puffed golden bhaturas served with spicy dark Punjabi chickpea chole curry, achari green chili, and pickled onions.',
    tags: ['bestseller'],
    dietary: ['Pure Veg'],
    dips: ['Spicy Mango Pickle', 'Mint Onion Salad']
  },
  {
    id: 'snack-8',
    name: 'Steamed Khaman Dhokla (4 Pcs)',
    category: 'healthy',
    price: 70,
    rating: 4.7,
    reviews: 940,
    calories: 190,
    prepTime: '5 min',
    image: 'https://cdn2.foodviva.com/static-content/food-images/snacks-recipes/khaman-dhokla-recipe/khaman-dhokla-recipe.jpg',
    description: 'Spongy soft Gujarati gram flour cakes tempered with mustard seeds, curry leaves, fresh grated coconut, and green chilies.',
    tags: ['vegan', 'gluten-free', 'quick'],
    dietary: ['Pure Veg', 'Vegan', 'Gluten-Free'],
    dips: ['Sweet Tamarind Dip', 'Green Chili Tempering']
  },
  {
    id: 'snack-9',
    name: 'Kurkuri Aloo Tikki Chaat',
    category: 'spicy',
    price: 80,
    rating: 4.8,
    reviews: 1650,
    calories: 340,
    prepTime: '8 min',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/aloo-tikki-960x1440.jpg',
    description: 'Crispy shallow-fried potato patties topped with sweet sweetened dahi yogurt, spicy green chutney, tamarind chutney, and nylon sev.',
    tags: ['bestseller'],
    dietary: ['Pure Veg'],
    dips: ['Sweet Dahi Curd', 'Nylon Sev & Pomegranate', 'Spicy Mint Chutney']
  },
  {
    id: 'snack-10',
    name: 'Royal Shahi Gulab Jamun (4 Pcs)',
    category: 'sweet',
    price: 90,
    rating: 4.9,
    reviews: 2100,
    calories: 360,
    prepTime: '5 min',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/gulab-jamun-960x1440.jpg',
    description: 'Soft melt-in-mouth milk solid dumplings fried golden brown and soaked in hot rose and cardamom infused sugar syrup.',
    tags: ['quick'],
    dietary: ['Pure Veg'],
    dips: ['Warm Cardamom Syrup', 'Pistachio Flakes']
  },
  {
    id: 'snack-11',
    name: 'Tangy Bombay Bhel Puri Bowl',
    category: 'healthy',
    price: 55,
    rating: 4.7,
    reviews: 1320,
    calories: 210,
    prepTime: '5 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfJE76cikzHBmdU2VpRD6FQnRqpVSTdeEoelfu4Ej0w&s=10',
    description: 'Crunchy puffed rice tossed with crispy papdi, diced onions, tomatoes, boiled potatoes, tangy date-tamarind chutney, and fresh coriander.',
    tags: ['vegan', 'quick'],
    dietary: ['Pure Veg', 'Vegan'],
    dips: ['Nylon Sev', 'Raw Mango Bits', 'Extra Tamarind Chutney']
  },
  {
    id: 'snack-12',
    name: 'Kadak Kulhad Masala Chai & Maska Bun',
    category: 'drinks',
    price: 45,
    rating: 4.9,
    reviews: 5400,
    calories: 220,
    prepTime: '5 min',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/08/masala-chai-recipe.jpg',
    description: 'Authentic Indian clay kulhad tea brewed with crushed ginger, cardamom, cloves, served hot with a soft maska butter bun.',
    tags: ['bestseller', 'quick'],
    dietary: ['Pure Veg', 'Piping Hot'],
    dips: ['Extra Ginger Cardamom', 'Amul Maska Butter']
  },
  {
    id: 'snack-13',
    name: 'Tandoori Paneer Tikka (6 Pcs)',
    category: 'cheese',
    price: 180,
    rating: 4.9,
    reviews: 1980,
    calories: 420,
    prepTime: '15 min',
    image: 'images/paneer_tikka.jpg',
    description: 'Chunks of fresh cottage cheese marinated in spiced yogurt and mustard oil, roasted in clay tandoor with bell peppers and onions.',
    tags: ['bestseller', 'gluten-free'],
    dietary: ['Pure Veg', 'Gluten-Free', 'High Protein'],
    dips: ['Spicy Mint Chutney', 'Lachha Lemon Onion']
  },
  {
    id: 'snack-14',
    name: 'Crispy Raj Kachori Chaat',
    category: 'spicy',
    price: 100,
    rating: 4.8,
    reviews: 1450,
    calories: 410,
    prepTime: '8 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnA59OWmIiPs2myhHSmDWs1f9n8WKBCxHrCuYbsF6VQ&s=10',
    description: 'King of all chaats! Giant crispy hollow kachori stuffed with boiled sprouted moong, potatoes, sweet dahi, pomegranate, and chutneys.',
    tags: ['bestseller'],
    dietary: ['Pure Veg'],
    dips: ['Sweet Date Chutney', 'Whipped Dahi Yogurt']
  },
  {
    id: 'snack-15',
    name: 'Premium Kaju Katli Barfi Box (200g)',
    category: 'sweet',
    price: 220,
    rating: 4.9,
    reviews: 2780,
    calories: 440,
    prepTime: '5 min',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/kaju-katli-kaju-barfi-960x1440.jpg',
    description: 'Iconic diamond-shaped Indian sweet made from ground cashews, sugar, and cardamoms, decorated with silver vark leaf.',
    tags: ['gluten-free', 'bestseller'],
    dietary: ['Pure Veg', 'Gluten-Free'],
    dips: ['Royal Silver Leaf Finish']
  },
  {
    id: 'snack-16',
    name: 'Thandi Kesari Badam Thandai Milkshake',
    category: 'drinks',
    price: 85,
    rating: 4.8,
    reviews: 890,
    calories: 280,
    prepTime: '5 min',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfefnjYA-B5JFOV-3f0Hyv6R2olJ-93RdRawV36Aaczg&s=10',
    description: 'Refreshing traditional chilled milk beverage blended with crushed almonds, pistachios, rose petals, fennel seeds, and Kashmir saffron.',
    tags: ['gluten-free', 'quick'],
    dietary: ['Pure Veg', 'Chilled'],
    dips: ['Chopped Pistachios & Saffron']
  }
];

// PROMO CODES DEFINITION
const PROMO_CODES = {
  'SNACK20': { type: 'percent', value: 0.20, label: '20% OFF Desi Discount' },
  'FREESHIP': { type: 'free_shipping', value: 0, label: 'FREE Express Delivery' },
  'CRUNCH50': { type: 'fixed', value: 50.00, label: '₹50.00 OFF Snack Special' }
};

// --------------------------------------------------------------------------
// 2. GLOBAL APP STATE
// --------------------------------------------------------------------------
let state = {
  cart: [],
  wishlist: [],
  orderHistory: [],
  currentCategory: 'all',
  activeTags: new Set(),
  searchQuery: '',
  maxPrice: 250,
  sortBy: 'recommended',
  viewMode: 'grid',
  appliedPromo: null,
  activeModalItem: null,
  modalQty: 1,
  modalSpice: 'Mild',
  currentLocation: '742 Park Road, Connaught Place',
  countdownInterval: null,
  theme: localStorage.getItem('snackify_theme') || 'dark'
};

// Load saved local data
function loadStateFromStorage() {
  try {
    const savedCart = localStorage.getItem('snackify_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
    const savedWishlist = localStorage.getItem('snackify_wishlist');
    if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    const savedHistory = localStorage.getItem('snackify_history');
    if (savedHistory) state.orderHistory = JSON.parse(savedHistory);
    const savedLoc = localStorage.getItem('snackify_location');
    if (savedLoc) {
      state.currentLocation = savedLoc;
      document.getElementById('current-address').textContent = savedLoc + ' ▾';
    }
  } catch (e) {
    console.error('Error loading state from localStorage:', e);
  }
}

function saveStateToStorage() {
  localStorage.setItem('snackify_cart', JSON.stringify(state.cart));
  localStorage.setItem('snackify_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('snackify_history', JSON.stringify(state.orderHistory));
  localStorage.setItem('snackify_location', state.currentLocation);
}

// --------------------------------------------------------------------------
// 3. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  initTheme();
  setupEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  renderCartAddons();
});

function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('snackify_theme', state.theme);
  showToast(`Switched to ${state.theme === 'dark' ? '🌙 Dark' : '☀️ Light'} Mode`, 'info');
}

function setupEventListeners() {
  // Theme button
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Search input listeners
  const desktopSearch = document.getElementById('global-search-input');
  const mobileSearch = document.getElementById('mobile-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  const handleSearch = (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if (desktopSearch) desktopSearch.value = e.target.value;
    if (mobileSearch) mobileSearch.value = e.target.value;
    if (clearBtn) clearBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();
  };

  if (desktopSearch) desktopSearch.addEventListener('input', handleSearch);
  if (mobileSearch) mobileSearch.addEventListener('input', handleSearch);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (desktopSearch) desktopSearch.value = '';
      if (mobileSearch) mobileSearch.value = '';
      state.searchQuery = '';
      clearBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Category Pills
  const catNav = document.getElementById('category-nav');
  if (catNav) {
    catNav.addEventListener('click', (e) => {
      const chip = e.target.closest('.category-chip');
      if (!chip) return;
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.currentCategory = chip.dataset.category;
      renderProducts();
    });
  }

  // Dietary Tag Chips
  const tagContainer = document.getElementById('dietary-tags');
  if (tagContainer) {
    tagContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.tag-chip');
      if (!chip) return;
      const tag = chip.dataset.tag;
      if (state.activeTags.has(tag)) {
        state.activeTags.delete(tag);
        chip.classList.remove('active');
      } else {
        state.activeTags.add(tag);
        chip.classList.add('active');
      }
      renderProducts();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // View Layout Toggle
  const gridBtn = document.getElementById('view-grid-btn');
  const listBtn = document.getElementById('view-list-btn');
  const productGrid = document.getElementById('product-grid');

  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
      state.viewMode = 'grid';
      productGrid.className = 'product-grid grid-layout';
    });

    listBtn.addEventListener('click', () => {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
      state.viewMode = 'list';
      productGrid.className = 'product-grid list-layout';
    });
  }

  // Cart Drawer Trigger
  document.getElementById('cart-trigger-btn').addEventListener('click', openCartDrawer);
  document.getElementById('favorites-btn').addEventListener('click', openWishlistModal);

  // Reset Filters Button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);

  // Spice level buttons in modal
  document.addEventListener('click', (e) => {
    if (e.target.closest('.spice-btn')) {
      const btn = e.target.closest('.spice-btn');
      document.querySelectorAll('.spice-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modalSpice = btn.dataset.spice;
    }
  });
}

function handlePriceRange(val) {
  state.maxPrice = parseFloat(val);
  document.getElementById('price-range-val').textContent = `₹${val}`;
  renderProducts();
}

// --------------------------------------------------------------------------
// 4. RENDERING PRODUCTS & FILTERING
// --------------------------------------------------------------------------
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  const statusBar = document.getElementById('filter-status-bar');
  const statusText = document.getElementById('status-text');

  let filtered = SNACK_DATABASE.filter(item => {
    // Price Range Filter
    if (item.price > state.maxPrice) return false;

    // Category Filter
    if (state.currentCategory !== 'all' && item.category !== state.currentCategory) {
      return false;
    }
    // Tag Filters
    if (state.activeTags.size > 0) {
      for (let tag of state.activeTags) {
        if (!item.tags.includes(tag)) return false;
      }
    }
    // Search Query Filter
    if (state.searchQuery) {
      const matchName = item.name.toLowerCase().includes(state.searchQuery);
      const matchDesc = item.description.toLowerCase().includes(state.searchQuery);
      const matchCat = item.category.toLowerCase().includes(state.searchQuery);
      if (!matchName && !matchDesc && !matchCat) return false;
    }
    return true;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'calories') {
    filtered.sort((a, b) => a.calories - b.calories);
  } else if (state.sortBy === 'popular') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  // Update Status Bar
  const isFiltered = state.currentCategory !== 'all' || state.activeTags.size > 0 || state.searchQuery !== '' || state.maxPrice < 250;
  if (isFiltered) {
    statusBar.style.display = 'flex';
    statusText.innerHTML = `Showing <strong>${filtered.length}</strong> snacks found`;
  } else {
    statusBar.style.display = 'none';
  }

  if (filtered.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  grid.style.display = state.viewMode === 'grid' ? 'grid' : 'flex';
  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(item => {
    const isFav = state.wishlist.includes(item.id);
    const cartEntry = state.cart.find(c => c.id === item.id);
    const inCartQty = cartEntry ? cartEntry.quantity : 0;

    const badgesHtml = item.tags.map(t => {
      let label = t;
      if (t === 'bestseller') label = '🔥 Best Seller';
      if (t === 'spicy') label = '🌶️ Spicy';
      if (t === 'vegan') label = '🌱 Pure Veg';
      if (t === 'quick') label = '⚡ 15 Mins';
      return `<span class="badge-tag ${t}">${label}</span>`;
    }).join('');

    return `
      <div class="snack-card" data-id="${item.id}">
        <div class="snack-card-image-box" onclick="openDetailModal('${item.id}')">
          <img src="${item.image}" alt="${item.name}" class="snack-img" loading="lazy" onerror="this.onerror=null; this.src='${item.fallbackImage || item.image}';">
          <div class="card-badge-container">
            ${badgesHtml}
          </div>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${item.id}')" title="Save Favorite">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="snack-card-body">
          <div class="snack-meta-row">
            <span class="snack-rating"><i class="fa-solid fa-star"></i> ${item.rating} (${item.reviews})</span>
            <span class="snack-calories"><i class="fa-solid fa-fire"></i> ${item.calories} kcal</span>
          </div>

          <h3 class="snack-title" onclick="openDetailModal('${item.id}')">${item.name}</h3>
          <p class="snack-description">${item.description}</p>

          <div class="snack-card-footer">
            <span class="snack-price">₹${item.price.toFixed(0)}</span>
            
            ${inCartQty > 0 ? `
              <div class="card-stepper">
                <button onclick="updateCartQuantity('${item.id}', ${inCartQty - 1})"><i class="fa-solid fa-minus"></i></button>
                <span>${inCartQty}</span>
                <button onclick="updateCartQuantity('${item.id}', ${inCartQty + 1})"><i class="fa-solid fa-plus"></i></button>
              </div>
            ` : `
              <button class="add-cart-btn" onclick="quickAddToCart('${item.id}', event)">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterByCategory(cat) {
  state.currentCategory = cat;
  document.querySelectorAll('.category-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.category === cat);
  });
  renderProducts();
  scrollToCatalog();
}

function resetAllFilters() {
  state.currentCategory = 'all';
  state.activeTags.clear();
  state.searchQuery = '';
  state.maxPrice = 250;
  document.getElementById('price-range').value = 250;
  document.getElementById('price-range-val').textContent = '₹250';
  document.querySelectorAll('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  document.querySelectorAll('.tag-chip').forEach(t => t.classList.remove('active'));
  const dSearch = document.getElementById('global-search-input');
  const mSearch = document.getElementById('mobile-search-input');
  if (dSearch) dSearch.value = '';
  if (mSearch) mSearch.value = '';
  renderProducts();
}

function scrollToCatalog() {
  const section = document.getElementById('catalog-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// --------------------------------------------------------------------------
// 5. CART & WISHLIST LOGIC
// --------------------------------------------------------------------------
function quickAddToCart(itemId, event) {
  const item = SNACK_DATABASE.find(s => s.id === itemId);
  if (!item) return;

  addToCart({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    dip: item.dips[0] || 'Standard Chutney',
    spice: 'Mild',
    special: ''
  }, 1);

  if (event) {
    createFlyAnimation(event.target, item.image);
  }
}

function addToCart(itemData, qty = 1) {
  const existingIndex = state.cart.findIndex(c => c.id === itemData.id && c.dip === itemData.dip && c.spice === itemData.spice);
  
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += qty;
  } else {
    state.cart.push({
      ...itemData,
      quantity: qty
    });
  }

  saveStateToStorage();
  updateCartUI();
  renderProducts();
  showToast(`Added <strong>${itemData.name}</strong> to your cart! 🍿`, 'success');
}

function updateCartQuantity(itemId, newQty) {
  const index = state.cart.findIndex(c => c.id === itemId);
  if (index > -1) {
    if (newQty <= 0) {
      state.cart.splice(index, 1);
      showToast('Item removed from cart', 'info');
    } else {
      state.cart[index].quantity = newQty;
    }
    saveStateToStorage();
    updateCartUI();
    renderProducts();
  }
}

function removeFromCart(index) {
  const item = state.cart[index];
  state.cart.splice(index, 1);
  saveStateToStorage();
  updateCartUI();
  renderProducts();
  if (item) showToast(`Removed ${item.name}`, 'info');
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  state.appliedPromo = null;
  saveStateToStorage();
  updateCartUI();
  renderProducts();
  showToast('Cart cleared', 'info');
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // GST 5%
  const tax = subtotal * 0.05;

  // Delivery Fee (Free if subtotal >= 200 or PROMO FREESHIP)
  let deliveryFee = subtotal >= 200.00 ? 0.00 : 30.00;
  if (state.appliedPromo && state.appliedPromo.code === 'FREESHIP') {
    deliveryFee = 0.00;
  }

  // Calculate Discount
  let discount = 0;
  if (state.appliedPromo) {
    if (state.appliedPromo.type === 'percent') {
      discount = subtotal * state.appliedPromo.value;
    } else if (state.appliedPromo.type === 'fixed') {
      discount = state.appliedPromo.value;
    }
  }

  const grandTotal = Math.max(0, subtotal + tax + deliveryFee - discount);

  // Update Header Elements
  document.getElementById('cart-badge-count').textContent = totalItems;
  document.getElementById('cart-header-total').textContent = `₹${grandTotal.toFixed(0)}`;
  document.getElementById('cart-drawer-count').textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  document.getElementById('mobile-cart-count').textContent = totalItems;

  // Free Shipping Bar Progress
  const progressFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  
  if (subtotal >= 200.00 || (state.appliedPromo && state.appliedPromo.code === 'FREESHIP')) {
    progressFill.style.width = '100%';
    progressText.innerHTML = '🎉 You unlocked <strong>FREE Express Delivery!</strong>';
  } else {
    const diff = (200.00 - subtotal).toFixed(0);
    const percent = Math.min(100, (subtotal / 200.00) * 100);
    progressFill.style.width = `${percent}%`;
    progressText.innerHTML = `Add <strong>₹${diff}</strong> more for FREE Express Delivery 🚚`;
  }

  // Render Items List in Cart Drawer
  const container = document.getElementById('cart-items-container');
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Your Cart is Empty</h4>
        <p>Looks like you haven't added any desi snacks yet!</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); scrollToCatalog();">Browse Snacks</button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${item.fallbackImage || item.image}';">
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-name">${item.name}</h4>
            <span class="cart-item-options">${item.dip ? 'Chutney: ' + item.dip : ''} ${item.spice && item.spice !== 'Mild' ? '• ' + item.spice : ''}</span>
          </div>
          <div class="cart-item-row">
            <span class="cart-item-price">₹${(item.price * item.quantity).toFixed(0)}</span>
            <div class="cart-qty-stepper">
              <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})"><i class="fa-solid fa-minus"></i></button>
              <span>${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove item"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  }

  // Summary Table updates
  document.getElementById('cart-subtotal-val').textContent = `₹${subtotal.toFixed(0)}`;
  document.getElementById('cart-tax-val').textContent = `₹${tax.toFixed(0)}`;
  document.getElementById('cart-delivery-val').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(0)}`;
  
  const discountRow = document.getElementById('discount-row');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cart-discount-val').textContent = `-₹${discount.toFixed(0)}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('cart-grand-total').textContent = `₹${grandTotal.toFixed(0)}`;
  document.getElementById('checkout-total-val').textContent = `₹${grandTotal.toFixed(0)}`;

  // Disable checkout button if empty
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = state.cart.length === 0;
}

function renderCartAddons() {
  const row = document.getElementById('cart-addons-row');
  if (!row) return;
  const addons = [
    { name: '☕ Kulhad Masala Chai', price: 45, id: 'snack-12' },
    { name: '🥟 Extra Samosa (1 Pc)', price: 20, id: 'snack-1' },
    { name: '🍯 Sweet Gulab Jamun', price: 40, id: 'snack-10' },
    { name: '🥛 Chilled Thandai', price: 85, id: 'snack-16' }
  ];
  row.innerHTML = addons.map(a => `
    <div class="addon-chip" onclick="quickAddToCart('${a.id}')">
      <span>${a.name}</span>
      <strong>+₹${a.price}</strong>
    </div>
  `).join('');
}

// PROMO CODE LOGIC
function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  if (PROMO_CODES[code]) {
    state.appliedPromo = {
      code: code,
      ...PROMO_CODES[code]
    };
    document.getElementById('promo-input-group').style.display = 'none';
    document.getElementById('active-promo-pill').style.display = 'flex';
    document.getElementById('promo-applied-text').textContent = `${code} (${PROMO_CODES[code].label})`;
    updateCartUI();
    showToast(`Promo <strong>${code}</strong> applied! 🎉`, 'success');
  } else {
    showToast('Invalid promo code. Try <strong>SNACK20</strong> or <strong>FREESHIP</strong>', 'alert');
  }
}

function removePromoCode() {
  state.appliedPromo = null;
  document.getElementById('promo-input-group').style.display = 'flex';
  document.getElementById('active-promo-pill').style.display = 'none';
  document.getElementById('promo-code-input').value = '';
  updateCartUI();
  showToast('Promo code removed', 'info');
}

function copyPromo(code) {
  const input = document.getElementById('promo-code-input');
  if (input) input.value = code;
  openCartDrawer();
  applyPromoCode();
}

// WISHLIST TOGGLE
function toggleWishlist(itemId) {
  const idx = state.wishlist.indexOf(itemId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from favorites', 'info');
  } else {
    state.wishlist.push(itemId);
    showToast('Saved to your favorites! ❤️', 'success');
  }
  saveStateToStorage();
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  document.getElementById('wishlist-count').textContent = count;
  document.getElementById('mobile-fav-count').textContent = count;
}

// --------------------------------------------------------------------------
// 6. MODALS MANAGEMENT
// --------------------------------------------------------------------------
// CART DRAWER
function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('active');
  document.getElementById('cart-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('cart-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ITEM DETAIL MODAL
function openDetailModal(itemId) {
  const item = SNACK_DATABASE.find(s => s.id === itemId);
  if (!item) return;

  state.activeModalItem = item;
  state.modalQty = 1;
  state.modalSpice = 'Mild';

  const modalImg = document.getElementById('modal-item-img');
  modalImg.src = item.image;
  modalImg.onerror = function() {
    this.onerror = null;
    this.src = item.fallbackImage || item.image;
  };
  document.getElementById('modal-item-title').textContent = item.name;
  document.getElementById('modal-item-price').textContent = `₹${item.price.toFixed(0)}`;
  document.getElementById('modal-item-rating').innerHTML = `<i class="fa-solid fa-star"></i> ${item.rating} (${item.reviews})`;
  document.getElementById('modal-item-calories').innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ${item.calories} kcal`;
  document.getElementById('modal-item-desc').textContent = item.description;
  document.getElementById('modal-item-category-badge').textContent = item.category.toUpperCase();

  // Wishlist heart
  const isFav = state.wishlist.includes(item.id);
  const favBtn = document.getElementById('modal-fav-btn');
  favBtn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
  favBtn.onclick = () => {
    toggleWishlist(item.id);
    const nowFav = state.wishlist.includes(item.id);
    favBtn.innerHTML = `<i class="${nowFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
  };

  // Dynamic Dips
  const dipsContainer = document.getElementById('modal-dip-options');
  dipsContainer.innerHTML = item.dips.map((d, index) => `
    <label class="option-pill">
      <input type="radio" name="dip-choice" value="${d}" ${index === 0 ? 'checked' : ''}>
      <span>${d}</span>
    </label>
  `).join('');

  updateModalTotal();

  document.getElementById('detail-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  document.getElementById('detail-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function incrementModalQty() {
  state.modalQty++;
  updateModalTotal();
}

function decrementModalQty() {
  if (state.modalQty > 1) {
    state.modalQty--;
    updateModalTotal();
  }
}

function updateModalTotal() {
  if (!state.activeModalItem) return;
  const total = state.activeModalItem.price * state.modalQty;
  document.getElementById('modal-qty-display').textContent = state.modalQty;
  document.getElementById('modal-calculated-total').textContent = `₹${total.toFixed(0)}`;
}

function addModalItemToCart() {
  if (!state.activeModalItem) return;
  
  const selectedDipRadio = document.querySelector('input[name="dip-choice"]:checked');
  const dipChoice = selectedDipRadio ? selectedDipRadio.value : 'Standard Chutney';
  const specialText = document.getElementById('special-instructions').value;

  addToCart({
    id: state.activeModalItem.id,
    name: state.activeModalItem.name,
    price: state.activeModalItem.price,
    image: state.activeModalItem.image,
    dip: dipChoice,
    spice: state.modalSpice,
    special: specialText
  }, state.modalQty);

  closeDetailModal();
  openCartDrawer();
}

// CHECKOUT MODAL
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'alert');
    return;
  }
  closeCartDrawer();
  goToCheckoutStep(1);
  document.getElementById('checkout-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function goToCheckoutStep(step) {
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.step-item').forEach(d => d.classList.remove('active'));

  document.getElementById(`checkout-step-${step}`).classList.add('active');
  document.getElementById(`step-${step}-dot`).classList.add('active');
}

function togglePaymentFields(type) {
  const cardBox = document.getElementById('card-fields-box');
  if (cardBox) {
    cardBox.style.display = (type === 'card' || type === 'upi') ? 'block' : 'none';
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();
  
  const orderId = 'SNK-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('confirmed-order-id').textContent = `#${orderId}`;

  // Transition to confirmation screen
  goToCheckoutStep(3);
  
  // Render order receipt
  const name = document.getElementById('checkout-name').value;
  const address = document.getElementById('checkout-street').value;
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const delivery = subtotal >= 200 || (state.appliedPromo && state.appliedPromo.code === 'FREESHIP') ? 0 : 30;
  let discount = 0;
  if (state.appliedPromo) {
    discount = state.appliedPromo.type === 'percent' ? subtotal * state.appliedPromo.value : state.appliedPromo.value;
  }
  const grandTotal = Math.max(0, subtotal + tax + delivery - discount);

  // Save to Order History
  const newOrder = {
    id: orderId,
    date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: [...state.cart],
    total: grandTotal
  };
  state.orderHistory.unshift(newOrder);

  const receiptBox = document.getElementById('confirmation-receipt-box');
  receiptBox.innerHTML = `
    <div style="margin-bottom:0.75rem; border-bottom:1px dashed var(--border-color); padding-bottom:0.5rem;">
      <strong>Deliver To:</strong> ${name}<br>
      <span style="color:var(--text-muted);">${address}</span>
    </div>
    <div style="margin-bottom:0.5rem;">
      ${state.cart.map(item => `
        <div style="display:flex; justify-between: space-between; margin-bottom:0.25rem;">
          <span>${item.quantity}x ${item.name}</span>
          <span style="margin-left:auto;">₹${(item.price * item.quantity).toFixed(0)}</span>
        </div>
      `).join('')}
    </div>
    <div style="border-top:1px dashed var(--border-color); padding-top:0.5rem; display:flex; justify-content:space-between; font-weight:800;">
      <span>Grand Total Paid:</span>
      <span style="color:var(--primary-coral);">₹${grandTotal.toFixed(0)}</span>
    </div>
  `;

  // Clear state cart
  state.cart = [];
  state.appliedPromo = null;
  saveStateToStorage();
  updateCartUI();

  // Launch Confetti Celebration
  launchConfetti();

  // Start Live Timer & Animated Scooter
  startDeliveryTimer(15 * 60);
}

function startDeliveryTimer(durationSeconds) {
  if (state.countdownInterval) clearInterval(state.countdownInterval);

  let timer = durationSeconds;
  const totalSeconds = durationSeconds;
  const timerDisplay = document.getElementById('live-countdown-timer');
  const scooter = document.getElementById('scooter-mover');

  state.countdownInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);

    const mStr = minutes < 10 ? '0' + minutes : minutes;
    const sStr = seconds < 10 ? '0' + seconds : seconds;

    if (timerDisplay) timerDisplay.textContent = `${mStr}:${sStr}`;

    // Animate scooter position percentage
    if (scooter) {
      const progressPercent = ((totalSeconds - timer) / totalSeconds) * 90;
      scooter.style.left = `${progressPercent}%`;
    }

    if (--timer < 0) {
      clearInterval(state.countdownInterval);
      if (timerDisplay) timerDisplay.textContent = 'Arrived! 🔔';
      if (scooter) scooter.style.left = '92%';
    }
  }, 1000);
}

function finishOrderAndReset() {
  closeCheckoutModal();
  renderProducts();
}

function printReceipt() {
  window.print();
}

// LOCATION MODAL
function openLocationModal() {
  document.getElementById('location-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLocationModal() {
  document.getElementById('location-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function selectLocation(addressStr) {
  state.currentLocation = addressStr;
  document.getElementById('current-address').textContent = addressStr + ' ▾';
  const input = document.getElementById('checkout-street');
  if (input) input.value = addressStr;
  saveStateToStorage();
  closeLocationModal();
  showToast(`Delivery location set to <strong>${addressStr}</strong>`, 'info');
}

function saveCustomLocation() {
  const val = document.getElementById('custom-address-input').value.trim();
  if (val) {
    selectLocation(val);
  }
}

// COUPONS MODAL
function openCouponsModal() {
  document.getElementById('coupons-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCouponsModal() {
  document.getElementById('coupons-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ORDER HISTORY MODAL
function openHistoryModal() {
  const container = document.getElementById('history-orders-container');
  if (state.orderHistory.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
        <i class="fa-solid fa-clock-rotate-left" style="font-size:3rem; margin-bottom:1rem; display:block;"></i>
        <h3>No past orders yet</h3>
        <p>Your completed snack orders will be saved here!</p>
      </div>
    `;
  } else {
    container.innerHTML = state.orderHistory.map((ord, idx) => `
      <div class="history-card">
        <div class="history-card-header">
          <span>Order #${ord.id} (${ord.date})</span>
          <span style="color:var(--primary-coral);">₹${ord.total.toFixed(0)}</span>
        </div>
        <p class="history-items-text">Items: ${ord.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}</p>
        <button class="btn btn-secondary" style="padding:0.35rem 0.85rem; font-size:0.8rem; width:100%;" onclick="reorderPastOrder(${idx})">
          <i class="fa-solid fa-rotate-right"></i> Reorder All Items
        </button>
      </div>
    `).join('');
  }

  document.getElementById('history-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeHistoryModal() {
  document.getElementById('history-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function reorderPastOrder(index) {
  const order = state.orderHistory[index];
  if (!order) return;

  order.items.forEach(item => {
    addToCart(item, item.quantity);
  });

  closeHistoryModal();
  openCartDrawer();
  showToast('Reordered past order items!', 'success');
}

// WISHLIST MODAL
function openWishlistModal() {
  const container = document.getElementById('wishlist-items-container');
  const favItems = SNACK_DATABASE.filter(s => state.wishlist.includes(s.id));

  if (favItems.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size:3rem; margin-bottom:1rem; display:block;"></i>
        <h3>No saved snacks yet</h3>
        <p>Tap the heart icon on any snack to add it here!</p>
      </div>
    `;
  } else {
    container.innerHTML = favItems.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${item.fallbackImage || item.image}';">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-price">₹${item.price.toFixed(0)}</span>
        </div>
        <button class="btn btn-primary" style="padding:0.4rem 0.85rem; font-size:0.8rem;" onclick="quickAddToCart('${item.id}'); closeWishlistModal(); openCartDrawer();">
          Add To Cart
        </button>
      </div>
    `).join('');
  }

  document.getElementById('wishlist-modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistModal() {
  document.getElementById('wishlist-modal-backdrop').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// --------------------------------------------------------------------------
// 7. TOAST NOTIFICATION ENGINE
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'alert') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// FLY TO CART ANIMATION
function createFlyAnimation(sourceElem, imgUrl) {
  const flyImg = document.createElement('img');
  flyImg.src = imgUrl;
  flyImg.style.position = 'fixed';
  flyImg.style.width = '50px';
  flyImg.style.height = '50px';
  flyImg.style.borderRadius = '50%';
  flyImg.style.objectFit = 'cover';
  flyImg.style.zIndex = '1000';
  flyImg.style.transition = 'all 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)';

  const rect = sourceElem.getBoundingClientRect();
  flyImg.style.left = `${rect.left}px`;
  flyImg.style.top = `${rect.top}px`;

  document.body.appendChild(flyImg);

  const cartBtn = document.getElementById('cart-trigger-btn');
  const cartRect = cartBtn.getBoundingClientRect();

  setTimeout(() => {
    flyImg.style.left = `${cartRect.left + 10}px`;
    flyImg.style.top = `${cartRect.top + 10}px`;
    flyImg.style.width = '20px';
    flyImg.style.height = '20px';
    flyImg.style.opacity = '0';
  }, 50);

  setTimeout(() => flyImg.remove(), 850);
}

// --------------------------------------------------------------------------
// 8. CONFETTI CELEBRATION ENGINE
// --------------------------------------------------------------------------
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#FF4757', '#FFA502', '#2ED573', '#70A1FF', '#FF7854', '#FFFFFF'];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      rx: (Math.random() - 0.5) * 16,
      ry: (Math.random() - 0.8) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      gravity: 0.3,
      alpha: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let activeParticles = 0;
    particles.forEach(p => {
      p.x += p.rx;
      p.y += p.ry;
      p.ry += p.gravity;
      p.alpha -= 0.008;

      if (p.alpha > 0) {
        activeParticles++;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (activeParticles > 0) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

function showHelpModal() {
  showToast('Need help? Our 24/7 Desi crunch hotline: 1800-SNACKIFY 📞', 'info');
}

function handleSubscribe(e) {
  e.preventDefault();
  showToast('Subscribed! Check your email for secret 30% OFF coupon 🎁', 'success');
  e.target.reset();
}
