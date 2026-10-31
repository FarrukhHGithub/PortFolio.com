# Portfolio + Admin (Next.js 14, Prisma, PostgreSQL)

## Structure
- `src/app/page.tsx` landing page (reads projects/skills from DB, falls back to placeholders)
- `src/app/admin/*` protected admin (login, dashboard, project CRUD, messages)
- `src/app/api/*` contact, auth, admin REST routes
- `src/middleware.ts` auth guard for /admin and /api/admin + origin (CSRF) check
- `src/lib/*` db, auth (JWT httpOnly cookie), rate limit, zod validation
- `prisma/schema.prisma` tables: User, Project, Skill, Experience, Message, AuditLog

## Security built in
bcrypt (cost 12), JWT in httpOnly+Secure+SameSite=Strict cookie, 8h expiry, login rate limit (5/15min),
zod validation on every input, origin check on mutations, honeypot + rate limit on contact form,
CSP/HSTS/X-Frame headers, audit log, Prisma parameterized queries, no secrets in repo.

## Local
cp .env.example .env  (edit values)
npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev     # admin at /admin/login

## Hostinger VPS (Ubuntu 22.04/24.04)
1. ssh root@VPS_IP ; adduser deploy ; usermod -aG sudo deploy ; disable root + password SSH login
2. ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw enable ; apt install fail2ban
3. Install Node 20 (nodesource), nginx, postgresql, certbot python3-certbot-nginx ; npm i -g pm2
4. sudo -u postgres createuser portfolio -P ; createdb portfolio -O portfolio
5. git clone repo to /var/www/portfolio ; create .env ; npm ci ; npx prisma migrate deploy ; npm run db:seed ; npm run build
6. cp -r public .next/static into .next/standalone/.next/ as needed:
   cp -r .next/static .next/standalone/.next/static ; [ -d public ] && cp -r public .next/standalone/public
7. pm2 start deploy/ecosystem.config.js ; pm2 save ; pm2 startup
8. Copy deploy/nginx.conf to /etc/nginx/sites-available/portfolio, symlink, nginx -t, certbot --nginx -d yourdomain.com -d www.yourdomain.com
9. Point domain A record to VPS IP in Hostinger DNS.

## AWS pieces worth adding
S3 + CloudFront for project images, SES for contact-form email, Route 53 DNS, RDS instead of local Postgres,
IAM least-privilege user, CloudWatch logs, GitHub Actions to SSH deploy.
