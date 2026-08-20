# Snackify - Indian Street Food Delivery

Snackify is a responsive Indian street food delivery website built with HTML, CSS, and vanilla JavaScript. It is designed to feel like a modern food delivery app while keeping the project simple enough to run as a static frontend with a lightweight Node.js server.

The website lets customers discover Indian snacks, search and filter the menu, customize items, manage a cart, apply offers, enter delivery details, select a payment method, place a simulated order, and review past orders.

## Live Project Links

GitHub repository:

https://github.com/sh6224382-crypto/FoodDelivery-

Current feature branch:

https://github.com/sh6224382-crypto/FoodDelivery-/tree/feature/food-image-fix

Pull request comparison:

https://github.com/sh6224382-crypto/FoodDelivery-/compare/main...feature/food-image-fix?expand=1

Local development URL:

http://127.0.0.1:8080/

## Website Overview

### Announcement bar

The top announcement bar highlights the current desi offer, the `SNACK20` promotion code, and the average delivery time of 14.5 minutes. The promo badge can be clicked to copy the code.

### Sticky navigation header

The header stays visible while browsing and includes:

- Snackify brand logo and reset-home action.
- Delivery location selector.
- Desktop search input.
- Light and dark theme toggle.
- Order history button.
- Wishlist button with saved-item count.
- Cart button with item count and current cart total.

On smaller screens, the search field moves into a dedicated mobile search row.

### Hero showcase

The hero section introduces the food delivery service with:

- Authentic Indian street snack messaging.
- Samosa and golgappa highlights.
- Free delivery information for orders above Rs 200.
- Hot and fresh food promise.
- 4.9/5 rating highlight.
- Explore Snacks action.
- Quick links to spicy snacks and sweets.
- Featured samosa image with bestseller and delivery-time badges.

### Food catalog

The catalog displays food cards dynamically from the product database. Every card includes an image, food name, rating, review count, calorie count, description, price, tags, wishlist action, detail action, and quick add-to-cart control.

The catalog currently contains 16 menu items:

1. Sizzling Crispy Samosa
2. Delhi Street Pani Puri / Golgappe
3. Butter Pav Bhaji Supreme
4. Bombay Masala Vada Pav
5. Crispy Masala Dosa and Sambhar
6. Hot Jalebi with Creamy Rabri
7. Piping Hot Chole Bhature
8. Steamed Khaman Dhokla
9. Kurkuri Aloo Tikki Chaat
10. Royal Shahi Gulab Jamun
11. Tangy Bombay Bhel Puri Bowl
12. Kadak Kulhad Masala Chai and Maska Bun
13. Tandoori Paneer Tikka
14. Crispy Raj Kachori Chaat
15. Premium Kaju Katli Barfi Box
16. Thandi Kesari Badam Thandai Milkshake

## Catalog Controls

### Categories

Customers can filter the catalog using these category chips:

- All Snacks
- Spicy Chaat and Fried
- Mithai and Sweets
- Butter and Cheese
- Light and Steamed
- Chai and Drinks

### Dietary and speed tags

Multiple tags can be selected at the same time:

- Best Sellers
- Pure Veg
- Gluten Free
- Under 15 Mins

### Search

Search checks the food name, description, and category. Desktop and mobile search fields stay synchronized. A clear button appears while a search is active.

### Price filter

The maximum price slider ranges from Rs 40 to Rs 250 and updates the catalog immediately.

### Sorting

Customers can sort by:

- Recommended
- Most Popular
- Price: Low to High
- Price: High to Low
- Highest Rated
- Lowest Calories

### Grid and list views

The catalog supports both a responsive grid layout and a compact list layout. The reset filters action restores the default category, tags, search, price, sorting, and view state.

## Food Item Details

Clicking a food image or name opens the item detail modal. The modal displays:

- Large food image.
- Category badge.
- Price, rating, reviews, and calories.
- Full food description.
- Food tags.
- Chutney or sauce choices.
- Spice preference: Mild, Medium, or Extra Teekha.
- Optional special request field.
- Quantity stepper.
- Add To Cart action with calculated total.
- Favorite button.

Each item has its own chutney options, dietary tags, preparation time, description, and nutrition information in the JavaScript product database.

## Cart Experience

The cart opens as a slide-out drawer and includes:

- Current item list.
- Product thumbnails.
- Selected chutney and spice information.
- Quantity controls.
- Remove-item buttons.
- Clear cart action.
- Suggested snack pairings.
- Free delivery progress bar.
- Coupon and offer access.
- Subtotal.
- GST calculated at 5 percent.
- Delivery fee.
- Promo discount.
- Final total.
- Proceed To Checkout action.

### Delivery pricing

- Orders below Rs 200 normally include a Rs 30 delivery fee.
- Orders of Rs 200 or more receive free delivery.
- The `FREESHIP` coupon also removes the delivery fee.

## Coupons and Offers

The coupon modal displays three available offers:

| Code | Benefit |
| --- | --- |
| `SNACK20` | 20 percent off the snack subtotal |
| `FREESHIP` | Free express delivery |
| `CRUNCH50` | Rs 50 off the order |

Coupons can be applied from the cart drawer. The active coupon is shown as a removable pill and the cart total updates immediately.

## Checkout Flow

Checkout is a three-step simulated ordering flow:

### Step 1: Delivery

The customer enters or confirms:

- Full name.
- Street address and flat number.
- Phone number.
- Delivery speed.

Delivery speed options are Priority Express at 12 to 15 minutes and Standard Delivery at 25 to 30 minutes.

### Step 2: Payment

The payment step provides payment method choices including:

- UPI through GPay, PhonePe, or Paytm.
- Credit or debit card.
- Cash on delivery.

The payment form is a frontend demonstration and does not process real payments.

### Step 3: Confirmation

After placing an order, the app:

- Creates a Snackify order ID.
- Shows a receipt with customer, address, items, and final amount.
- Clears the active cart and coupon.
- Saves the order in order history.
- Starts a 15-minute delivery countdown.
- Animates the delivery scooter.
- Shows an arrival state when the countdown finishes.
- Provides a print receipt action.

## Delivery Locations

The location modal provides saved location choices for Home, Work Office, and University Campus. Customers can also enter a custom address. The selected address updates the header and checkout street address.

## Wishlist and Order History

### Wishlist

Customers can save products with the heart icon. The wishlist modal shows saved products, prices, thumbnails, and Add To Cart actions.

### Order history

Completed simulated orders are stored with:

- Order ID.
- Date and time.
- Ordered items and quantities.
- Final paid amount.
- Reorder action.

The Reorder All Items action adds a previous order back to the cart.

## Footer and Support Areas

The footer contains:

- Snackify brand summary.
- Social link placeholders for Instagram, TikTok, and X.
- Popular category shortcuts.
- Customer care links.
- Delivery guarantee information.
- Past-order access.
- FAQs and support action.
- Hygiene and allergen information action.
- Newsletter subscription form for desi offers and new snack drops.

## Themes and Responsive Design

The site starts in dark mode and supports a light mode toggle. The selected theme is saved in browser storage. The layout adapts to desktop, tablet, and mobile widths with responsive navigation, mobile search, flexible product cards, modal layouts, and list/grid catalog views.

## Technology Used

- HTML5 for page structure and accessible form controls.
- CSS3 for responsive layout, themes, cards, drawers, modals, transitions, and visual styling.
- Vanilla JavaScript for product data, state management, filtering, cart logic, checkout, modals, and browser storage.
- Node.js built-in `http` module for the local static server.
- Font Awesome for interface icons.
- Google Fonts for Outfit and Plus Jakarta Sans typography.

## Project Structure

```text
FoodDelivery-
|-- index.html       Main website markup and modal structures
|-- app.js           Product data, state, filters, cart, checkout, and UI logic
|-- styles.css       Themes, responsive styles, cards, drawers, and modals
|-- server.js        Node.js static file server on port 8080
|-- images/          Local food photography and SVG fallback artwork
|-- README.md        Complete project documentation
```

## Run Locally

### Requirements

- Node.js installed on the computer.
- Internet access for Google Fonts, Font Awesome, and remote food photos.

### Start the app

Open PowerShell or a terminal in the project directory:

```bash
node server.js
```

Open the website at:

```text
http://127.0.0.1:8080/
```

You can also use:

```text
http://localhost:8080/
```

Stop the server with `Ctrl+C`.

## Browser Storage

The app stores customer state in `localStorage` so the demo remains usable after refresh. The following keys are used:

- `snackify_cart`
- `snackify_wishlist`
- `snackify_history`
- `snackify_location`
- `snackify_theme`

To reset the demo completely, clear the website local storage in the browser or use the app's reset and clear actions.

## Images and External Assets

Food images are loaded from local files in `images/` and selected remote image URLs. Remote image URLs require an internet connection and may be affected by third-party hosting changes. The local SVG food artwork remains available as project assets. Fonts and icons are also loaded from Google Fonts and Font Awesome CDNs.

## Deployment on Vercel

This is a static frontend project and can be deployed on Vercel from the GitHub repository.

1. Open the Vercel import link below.
2. Sign in to Vercel.
3. Connect GitHub if it is not already connected.
4. Import `sh6224382-crypto/FoodDelivery-`.
5. Use the repository root as the project root.
6. Deploy without a build command.
7. Open the generated Vercel domain.

Vercel import link:

https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsh6224382-crypto%2FFoodDelivery-

## Important Notes

- Checkout and payments are simulated for demonstration only.
- No backend database or real order API is connected.
- Customer data is stored only in the current browser.
- Social links and support actions are demo interactions.
- Remote food images may not load when the browser is offline.

## License

This project is intended for educational and demonstration purposes.
