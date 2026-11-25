# whtknightsoft.com

The Wht Knight Software website: plain HTML and CSS, no build step. Served by GitHub Pages from this repo's
`main` branch (Gitea is the main copy and push-mirrors to GitHub). Design notes and decisions live in
`~/Projects/Unity/TimeCalc/Website/SITE_NOTES.md`.

## Files
- `index.html`: home page (Workshop list, Support, Privacy).
- `timecalc/index.html`: the Time Calc page (also its store Support URL).
- `privacy/index.html`: the privacy policy for every app, game, mod and the site.
- `404.html`: page-not-found.
- `css/site.css`: all styles. Colors are tokens at the top, once for light and once for dark.
- `js/site.js`: the light/dark switch and the "Show email address" link.
- `CNAME`: the custom domain for GitHub Pages. `.nojekyll`: tells Pages to serve files as they are.

Every page carries the same header and footer (and the Cloudflare Web Analytics snippet before `</body>`);
a change to one means the same change to all four.

## Preview locally
```bash
python3 -m http.server 8746
```
Then open http://localhost:8746. (Cloudflare's script logs harmless errors on localhost.)

## Adding a project
Copy the Time Calc card in `index.html` and the `timecalc/` folder, then edit.
