# GitHub OAuth Setup Guide

Follow these step-by-step instructions to create your GitHub OAuth App and get the required credentials.

## Step 1: Create GitHub OAuth App

1. **Go to GitHub Settings**
   - Log into GitHub
   - Click your profile picture (top-right)
   - Select **Settings**

2. **Navigate to Developer Settings**
   - In the left sidebar, scroll down to **Developer settings**
   - Click **OAuth Apps**
   - Click **New OAuth App**

3. **Fill in the OAuth App Details**
   ```
   Application name: My Next.js App
   Homepage URL: http://localhost:3000
   Application description: Next.js app with GitHub authentication
   Authorization callback URL: http://localhost:3000/api/auth/callback/github
   ```

4. **Register the Application**
   - Click **Register application**
   - You'll be redirected to the app details page

## Step 2: Get Your Credentials

After creating the OAuth App, you'll see:

- **Client ID** (this is your `GITHUB_ID`)
- **Client Secret** (this is your `GITHUB_SECRET`)

**Important:** Click **Generate a new client secret** to create the Client Secret.

## Step 3: Create Environment File

Create a `.env.local` file in your `my-next-app` directory:

```bash
# Copy this file and fill in your actual values
GITHUB_ID=your-actual-client-id-here
GITHUB_SECRET=your-actual-client-secret-here
ADMIN_EMAILS=wd8Designer@users.noreply.github.com
```

## Step 4: Test Your Setup

1. **Start the development server:**
   ```bash
   cd my-next-app
   npm run dev
   ```

2. **Visit your app:**
   - Go to http://localhost:3000
   - Click "Sign in with GitHub"
   - You should be redirected to GitHub for authorization

## Troubleshooting

- **"Cannot read properties of undefined"**: Check your `.env.local` file
- **"Invalid client_id"**: Verify your GITHUB_ID is correct
- **"Invalid client_secret"**: Verify your GITHUB_SECRET is correct
- **"Redirect URI mismatch"**: Ensure callback URL matches exactly

## Security Notes

- Never commit your `.env.local` file to git
- Keep your Client Secret secure
- In production, use environment variables from your hosting platform
