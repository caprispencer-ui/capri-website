# captured by capri

A copy of the captured by capri Pixieset site (capturedbycapri.mypixieset.com) as a plain HTML site: Home, Portfolio, About, Testimonials, Services + Pricing, Contact and Session Inquiry.

## Editing

Every page is a normal `.html` file in this folder. Open one in a text editor (or on GitHub, click the pencil icon), change the words, and save. Colors and fonts live in `assets/style.css`.

The photos currently load from Pixieset's image servers, so keep the Pixieset photos up for now. To host a photo here instead, put it in `assets/photos/` and change its `src` to `assets/photos/your-photo.jpg`.

## Turning on the forms

The Contact and Session Inquiry forms need a free [Formspree](https://formspree.io) form to email you. Until one is set up, the forms tell people to message you on Instagram.

1. Sign up at formspree.io and create a form. It gives you an ID like `xyzabcd`.
2. In `contact.html` and `inquiry.html`, replace `YOUR_FORM_ID` with that ID.

## Publishing

The site publishes with GitHub Pages every time `main` changes. To switch it on once: in this repo go to **Settings > Pages** and set **Source** to **GitHub Actions**. The address will be `https://caprispencer-ui.github.io/capri-website/`, and you can add your own domain on the same settings page.
