# Sharing shops with classmates

The M1 report is **individual**: each person keeps **their own repo** and the code at
the tag must be their own work. Collaboration means **exchanging shop data**
(vendor entries in `public/api/vendors.json`), not editing each other's code.

Rules from the M1 report template:
- Classmates' shops **may** appear in your vendor list.
- **Your shop must be first** in `vendors.json`.
- Every copied shop **must be credited in `README.md`** (see the "Credits" section).
- Every report screenshot must show **your own** shop.

## 1. Share your shop
Send friends the link to your vendor data, e.g.
`https://github.com/amie1212/campuseats-2417175/blob/main/public/api/vendors.json`
(your repo must be public, or add them under **Settings → Collaborators** so they can read it).
Use your matric number as the ID prefix (`2417175-kafe-faruq`, `2417175-m1`, …) so IDs never clash.

## 2. Add a friend's shop to your repo
1. Open their `vendors.json` and copy **their own vendor object only** (the one whose id starts with their matric).
2. Paste it **after** your shop in your `public/api/vendors.json` — keep a comma between objects and the file wrapped in `[ ... ]`.
3. Add a credit line in `README.md` under "Credits":
   `- **Kafe Mahallah Aminah** — copied from Ali bin Abu (2415666), https://github.com/alibinabu/campuseats-2415666`
4. Check it works: `npm run dev`, open the home page and `/vendor/<their-id>`.
5. Commit and push:
   ```bash
   git add public/api/vendors.json README.md
   git commit -m "feat: add classmate shop <name> (<matric>), credited in README"
   git push origin main
   ```

## 3. Before tagging `react-done`
- Your shop is still first in the list.
- Every copied shop has a credit line in the README.
- `npm run lint` and `npm run build` pass.
