# WK

Static editorial website for WK.

## Cloudflare deployment

This project uses Cloudflare Workers Static Assets, matching the supplied
reference project. It has no build step.

1. Authenticate once with `npx wrangler login`.
2. Deploy with `npx wrangler deploy` from this directory.

For a Git-connected deployment, leave the build command empty and use
`npx wrangler deploy` as the deploy command. Cloudflare will redeploy on each
push. The `.assetsignore` file prevents repository metadata and source-only
files from being published while retaining `wk/styles.css` and `wk/script.js`,
which the merged homepage uses.

Before a production launch, replace the example canonical domain in
`index.html`, `robots.txt`, and `sitemap.xml` if it changes from
`https://wk-house.com/`.
