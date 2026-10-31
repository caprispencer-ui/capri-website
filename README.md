# captured by capri

A copy of the captured by capri Pixieset site (capturedbycapri.mypixieset.com) as a plain HTML site: Home, Portfolio, About, Testimonials, Services + Pricing, Contact and Session Inquiry.

## Editing

Every page is a normal `.html` file in this folder. Open one in a text editor (or on GitHub, click the pencil icon), change the words, and save. Colors and fonts live in `assets/style.css`.

Full-size photos live in `assets/photos/`. The pages load smaller, faster WebP copies from `assets/photos/web/` (about 1000px wide). To add or swap a photo, upload it to `assets/photos/`, then either ask Claude to make a web copy, or point the page's `src` at `assets/photos/your-photo.jpg` (it works, just loads slower).

Give every photo a short `alt` description of what's in it (e.g. "Family of five sitting in the grass by a pond"). Google Images uses it.

## Search engines

- `sitemap.xml` lists every page. Add a line when you add a new page.
- `robots.txt` points search engines to the sitemap.
- Each page's `<head>` has its own title, description, canonical link and share-preview (`og:`) tags. The homepage also has business details for Google (the `application/ld+json` block): update the prices there if they change.

## Forms

The Contact and Session Inquiry forms email caprispencer@gmail.com through [FormSubmit](https://formsubmit.co) (free, no account).

- **First time only:** submit either form once yourself. FormSubmit emails you an activation link; click it. Messages aren't delivered until you do.
- **Hide your email address (optional):** the activation email includes a random code. Replace `caprispencer@gmail.com` in the `action="https://formsubmit.co/..."` line of `contact.html` and `inquiry.html` with that code.
- If a message ever fails to send, the form tells people to message you on Instagram instead.

## Publishing

The site publishes with GitHub Pages every time `main` changes. To switch it on once: in this repo go to **Settings > Pages** and set **Source** to **GitHub Actions**. The address will be `https://caprispencer-ui.github.io/capri-website/`, and you can add your own domain on the same settings page.
