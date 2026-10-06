# Security

This repository contains a static frontend. It does not implement authentication, payments, private storage, or a database.

Before production:
- Use HTTPS.
- Add server-side authentication and authorization.
- Hash passwords with Argon2id or bcrypt.
- Use secure, HTTP-only, SameSite cookies for sessions.
- Validate all input on the server.
- Use parameterized database queries.
- Add rate limiting and CSRF protection where applicable.
- Configure security headers and a restrictive Content Security Policy.
- Validate and safely store uploaded files.
- Keep secrets in environment variables.
- Never store raw payment-card data.
- Verify payment webhooks.
- Add audit logging without storing secrets.
- Run dependency and security scans.
- Have privacy/legal documents reviewed for the jurisdictions where the service operates.

Do not claim the website is 100% secure or legally compliant.
