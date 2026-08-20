# Snackify - Indian Street Food Delivery

Snackify is a responsive Indian street food delivery web app built with plain HTML, CSS, and JavaScript. It provides a modern food-ordering experience with searchable snacks, category filters, cart management, wishlist support, item customization, promo codes, checkout flow, delivery locations, and order history.

## Features

- Browse 16 Indian snacks and drinks.
- Search by food name, description, or category.
- Filter by spicy, sweet, drinks, healthy, and cheese categories.
- Sort by price, rating, calories, and popularity.
- Switch between grid and list views.
- Open detailed food item modals.
- Customize chutney, spice level, quantity, and special requests.
- Add items to a persistent cart and wishlist.
- Apply promotional codes such as `SNACK20`, `FREESHIP`, and `CRUNCH50`.
- Save delivery locations and order history in browser storage.
- Use food photography and matching food image sources for menu cards.
- Responsive layout for desktop, tablet, and mobile screens.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js HTTP server
- Font Awesome icons

## Project Structure

```text
FoodDelivery-
|-- index.html       Main application page
|-- app.js           Product data, cart, filters, modals, and app logic
|-- styles.css       Responsive application styling
|-- server.js        Local Node.js static file server
|-- images/          Food image assets
|-- README.md        Project documentation
```

## Run Locally

### Requirements

- Node.js installed on your computer.

### Start the server

Open a terminal in the project folder and run:

```bash
node server.js
```

Then open:

```text
http://127.0.0.1:8080/
```

You can also use:

```text
http://localhost:8080/
```

## GitHub

Repository:

https://github.com/sh6224382-crypto/FoodDelivery-

Feature branch:

https://github.com/sh6224382-crypto/FoodDelivery-/tree/feature/food-image-fix

Pull request comparison:

https://github.com/sh6224382-crypto/FoodDelivery-/compare/main...feature/food-image-fix?expand=1

## Image Sources

The menu uses local food photographs where available and matching remote food photos for additional items. An internet connection is required for remote image URLs to load. Local image assets are stored in the `images/` directory.

## Deployment

The project is a static frontend with a small Node.js development server. It can be deployed to Vercel as a static site. Import the GitHub repository in Vercel and use the project root as the deployment directory.

Vercel import link:

https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsh6224382-crypto%2FFoodDelivery-

## License

This project is intended for educational and demonstration purposes.