# Astronomy Client Website

A modern, sleek website for selling the Astronomy Minecraft client with PayPal and gift card payment options.

## Features

- Clean, modern UI with dark theme
- Responsive design for all devices
- PayPal checkout integration
- Gift card payment via Discord (manual verification)
- Pricing cards for Weekly ($2), Monthly ($5), and Lifetime ($10) plans
- Success page with next steps

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:
   - `PAYPAL_CLIENT_ID` - Your PayPal client ID
   - `PAYPAL_WEEKLY_TOKEN` - PayPal payment token for weekly plan
   - `PAYPAL_MONTHLY_TOKEN` - PayPal payment token for monthly plan
   - `PAYPAL_LIFETIME_TOKEN` - PayPal payment token for lifetime plan
   - `DISCORD_INVITE` - Your Discord server invite link for gift card purchases
   - `BOT_API_URL` - Your bot API URL for license generation
   - `NEXT_PUBLIC_URL` - Your website URL

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## PayPal Setup

1. Create a PayPal Business account at https://paypal.com
2. Create three payment buttons/links:
   - Weekly: $2 USD
   - Monthly: $5 USD
   - Lifetime: $10 USD
3. Copy the payment tokens/links to your `.env.local`
4. Update the PayPal URLs in `src/app/page.tsx` with your actual payment links

## Gift Card Process

For gift card payments:
1. User clicks "Gift Card (Discord)" button
2. Redirects to your Discord server
3. User opens a ticket and provides gift card details
4. Staff verifies gift card and manually generates license key using Discord bot
5. Staff sends license key to user

## Bot API Integration

The bot's `/api/generate-license` endpoint is available for manual license generation by staff. This is used for gift card purchases and manual PayPal verification if needed.

Example request:
```json
{
  "email": "user@example.com",
  "duration": "lifetime",
  "stripe_session_id": "manual_staff"
}
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting platform.

For Vercel:
```bash
npm install -g vercel
vercel
```

Set environment variables in your deployment dashboard.
