# Buttercup Bakehouse

A responsive, multi-page static HTML/CSS/JavaScript bakery website inspired by the layout principles of the user's Everwood Outdoor Living reference, with a distinct bakery identity.

## Run locally
Open `pages/index.html` in a browser. For best results, use a local static server (for example VS Code Live Server).

## Pages
- `pages/index.html` — Home 1, classic
- `pages/home2.html` — Home 2, premium
- `pages/about.html` — About
- `pages/products.html` — Filterable product listing
- `pages/product-detail.html?item=strawberry-cloud-cake` — Dynamic product detail template
- `pages/custom-orders.html` — Custom cake enquiry
- `pages/blog.html` — Journal listing
- `pages/blog-detail.html?article=slow-mornings-and-warm-bread` — Dynamic article detail template
- `pages/contact.html` — Contact and visit details
- `pages/404.html` — Custom not-found page
- `pages/coming-soon.html` — Coming soon page

## Design system
- Primary: Cocoa Brown `#70452F`
- Secondary: Warm Terracotta `#C58A62`
- Light and dark modes are supported.
- LTR/RTL direction toggle is supported and saved in localStorage.
- Fonts: Playfair Display and DM Sans.

## CSS architecture
`assets/css/style.css` contains shared components. Each page has its own stylesheet. `dark-mode.css` and `rtl.css` are separate theme/direction layers.

## Forms and integrations
The contact and custom cake forms perform browser-side validation and display a demo confirmation. Connect them to Netlify Forms, Formspree or a backend before production use. The contact map is a placeholder.

## Product and article content
The product and article detail pages use URL query parameters to load the selected item. Edit the `products` and `articles` arrays in `assets/js/main.js` to change demo content.

## Images
Images use remote Unsplash image URLs and require an internet connection. Replace with licensed local images for production.

## Production checklist
- Replace demo contact details and sample prices.
- Connect forms to a real form endpoint.
- Add an actual map embed and verified business address.
- Confirm image licenses and optimize images locally.
- Add analytics, cookie/privacy notices and production structured data if required.


## Premium Buttercup theme update

- Shared header and footer markup now lives directly in each page HTML file.
- The same Buttercup cupcake logo is used in the header and footer (`assets/images/logo/buttercup-cupcake.svg`).
- Warm chocolate brown and antique gold are the two brand colours; cream ivory is the neutral page background.
- The footer itself is transparent. A separate cream-and-gold custom-cake CTA sits above it.
- The header RTL control starts in LTR mode and displays `RTL`; selecting it switches the page to RTL and changes the control label to `LTR`.
- The current page navigation link receives an active underline.
