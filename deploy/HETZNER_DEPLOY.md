# Hetzner Deployment

This project is a static Vite frontend. Supabase stays hosted on Supabase. Hetzner only serves the built frontend files through Nginx.

## 1. Create the server

On Hetzner Cloud, create an Ubuntu 24.04 server.

Recommended minimum:

- 1 vCPU
- 2 GB RAM
- 20 GB disk

Add your SSH key during server creation.

## 2. Point your domain to the server

In your DNS provider, create these records:

- `A` record for `yourdomain.com` -> your Hetzner server IPv4
- `A` record for `www.yourdomain.com` -> your Hetzner server IPv4

Wait for DNS to propagate.

## 3. SSH into the server

```bash
ssh root@YOUR_SERVER_IP
```

## 4. Install system packages

```bash
apt update
apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
node -v
npm -v
```

## 5. Clone the repository

```bash
mkdir -p /var/www/servicing
cd /var/www/servicing
git clone https://github.com/mohsin228/mobile-automovite-services.git current
cd current
```

## 6. Create the environment file on the server

```bash
nano .env.local
```

Paste:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Save and exit.

## 7. Install dependencies and build

```bash
npm ci
npm run build
```

After this, your production files will be in `dist/`.

## 8. Install the Nginx site config

Copy the provided config:

```bash
cp deploy/nginx.servicing.conf /etc/nginx/sites-available/servicing
```

Open it and replace `yourdomain.com` and `www.yourdomain.com` with your real domain:

```bash
nano /etc/nginx/sites-available/servicing
```

## 9. Enable the Nginx site

```bash
ln -s /etc/nginx/sites-available/servicing /etc/nginx/sites-enabled/servicing
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

## 10. Install SSL with Certbot

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Choose the redirect option when Certbot asks whether HTTP should redirect to HTTPS.

## 11. Check the site

Open:

- `https://yourdomain.com`
- `https://www.yourdomain.com`

## 12. Update the site later

Whenever you push new code to GitHub, deploy updates with:

```bash
cd /var/www/servicing/current
git pull origin main
npm ci
npm run build
systemctl reload nginx
```

## 13. Optional firewall

If UFW is installed, allow web traffic:

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

## 14. Useful checks

```bash
systemctl status nginx
journalctl -u nginx --no-pager -n 50
ls -la /var/www/servicing/current/dist
curl -I http://localhost
curl -I https://yourdomain.com
```