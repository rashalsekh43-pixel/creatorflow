# Influead Geometric Website

A static, vanilla HTML/CSS/JavaScript website for Influead.

## Pages
- `index.html` landing page
- `login.html`, `signup.html` creator and brand contact links
- `creator-dashboard.html`, `brand-dashboard.html` creator and brand contact links
- `contact.html` contact information
- `privacy.html`, `terms.html`, `cookies.html`, `security.html` legal and trust policies

## Stack
- HTML5
- CSS3 with centralized custom properties
- Vanilla JavaScript
- Vite
- Supabase JavaScript client
- Google Fonts: Outfit + Plus Jakarta Sans

## Important
The Supabase client is installed and configured through `supabase-client.js`. Authentication and database features still need to be connected to the relevant pages and tables. For creator, brand, account, or campaign inquiries, contact Influead by email.

## Supabase setup
1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` using the Project URL and publishable key from the Supabase project settings.
4. Import `supabase` from `./supabase-client.js` in browser code that needs Supabase.
5. Enable Row Level Security (RLS) and create policies for every table before using the publishable key in the browser. Never put a service-role key or database password in frontend code or a `VITE_` variable.

Run `npm run dev` to start the local development server and `npm run build` to build all site pages.

## Deploy
Deploy the generated `dist` directory to a static host such as Cloudflare Pages. Configure the two `VITE_SUPABASE_*` values in the hosting provider's build environment. Keep `.env` private and uncommitted.
