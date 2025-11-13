AliShop Faisalabad — Full store (Next.js)

What this includes
- Home (products), Cart, Orders (summary), Contact pages
- Daraz OAuth connect button and server API stubs for integration
- No secrets included. Add DARAZ_APP_KEY and DARAZ_APP_SECRET in environment variables.

Quick start (local)
1. npm install
2. create .env.local with:
   DARAZ_APP_KEY=504482
   DARAZ_APP_SECRET=YOUR_APP_SECRET_HERE
   DARAZ_REDIRECT_URI=http://localhost:3000/api/daraz/oauth-callback
3. npm run dev
4. Open http://localhost:3000

Deploy on Vercel
- Push to GitHub
- Import project in Vercel and set environment variables (production values)
- Set DARAZ_REDIRECT_URI in Daraz Console to your deployed domain + /api/daraz/oauth-callback
