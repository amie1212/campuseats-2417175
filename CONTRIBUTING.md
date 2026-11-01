# Collaborating on CampusEats

## 1. Get access (repo owner does this once)
1. Open https://github.com/amie1212/campuseats-2417175 → **Settings** → **Collaborators** → **Add people**.
2. Enter each friend's GitHub username or email. They accept the invite from their email or GitHub notifications.
3. (Recommended) **Settings → Branches → Add rule** for `main`: tick *Require a pull request before merging*, so nobody pushes straight to `main`.

## 2. First-time setup (each friend)
```bash
git clone https://github.com/amie1212/campuseats-2417175.git
cd campuseats-2417175
npm install
npm run dev
```

## 3. Daily workflow
```bash
git checkout main
git pull origin main                 # get the latest code
git checkout -b feature/<your-matric>-<short-name>
# ...make changes...
npm run lint
git add .
git commit -m "feat: describe what you did"
git push -u origin feature/<your-matric>-<short-name>
```
Then open a **Pull Request** on GitHub into `main`, ask a teammate to review, and merge it.

## 4. Adding your vendor
Add your vendor object to `public/api/vendors.json`. Use your own matric number as the ID prefix so IDs never clash:
```json
{
  "id": "<matric>-kafe-<name>",
  "name": "Kafe Mahallah <Name>",
  "location": "...",
  "openHours": "8:00 am - 9:00 pm",
  "isOpen": true,
  "menu": [
    { "id": "<matric>-m1", "name": "...", "description": "...", "price": 7.0,
      "category": "Rice", "available": true, "popular": false }
  ]
}
```
Remember the comma between vendor objects, and add a line for your vendor to the README.

## 5. Avoiding conflicts
- Pull `main` before starting work, and keep pull requests small.
- Only edit your own vendor in `vendors.json`.
- If GitHub reports a merge conflict: `git pull origin main`, fix the files marked with `<<<<<<<`, then commit and push again.
