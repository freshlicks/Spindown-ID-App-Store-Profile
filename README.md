# Spindown ID Landing Page

A modern, responsive landing page for **Spindown ID** - the essential companion app for Magic: The Gathering players to identify, track, and manage their spindown dice collections.

## 🎲 About Spindown ID

Spindown ID is a mobile application that helps Magic: The Gathering players instantly identify their spindown dice using camera technology, track their collections, and discover new sets. Built with Flutter and powered by TensorFlow for on-device machine learning.

### Key Features

- **📸 Camera Identification**: Point your camera at any spindown die and instantly identify its set, symbol, and release date
- **📊 Complete Collection Tracker**: Log every die you own, organized by set, color, or rarity to avoid duplicates
- **🗃️ Expansive Set Database**: Browse a comprehensive database of every Magic: The Gathering set with spindown dice
- **❤️ Wishlist & Trade List**: Track dice you're hunting for and manage duplicates with a dedicated trade list
- **📋 Detailed Die Information**: Get high-resolution images, unique set symbols, and interesting facts about each die
- **✍️ Manual Entry Mode**: Manually enter details for rare or unusual dice that camera identification might miss

## 🚀 Technology Stack

- **Frontend**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (PostCSS plugin) with enhanced animations and custom design system
- **Mobile App**: Flutter + TensorFlow (on-device ML)
- **Icons**: Custom SVG icons for features and branding

## 🎨 Design System

The landing page features a custom design system with:

- **Primary Color**: `#00F5D4` (Cyan)
- **Background**: `#121829` (Dark Blue)
- **Surface**: `#1F2940` (Medium Blue)
- **Typography**: Poppins font family
- **Animations**: Enhanced scroll-triggered animations, floating D20 dice, fade-in effects, and interactive hover states

## 📱 App Availability

- **iOS**: Available on the App Store
- **Android**: Available on Google Play Store
- **Free**: No cost to download or use

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Spindown-ID-App-Store-Profile
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment to GitHub Pages

This project is configured with a GitHub Actions workflow for automatic deployment to GitHub Pages.

### Automated Deployment

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically build and deploy your site

3. **Access your site**
   - Your site will be available at: `https://[your-username].github.io/Spindown-ID-App-Store-Profile/`
   - Replace `[your-username]` with your actual GitHub username

### Workflow Features

The GitHub Actions workflow includes:

- **Node.js 18** setup with npm caching
- **Automatic dependency installation** with `npm ci`
- **Production build** with `npm run build`
- **Deploy to GitHub Pages** using the latest GitHub Pages actions
- **Manual trigger** option from the Actions tab
- **Proper permissions** for GitHub Pages deployment

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings to point to GitHub Pages
3. The workflow will automatically handle the custom domain

### Project Structure

```
├── components/           # React components
│   ├── icons/           # Custom SVG icons
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with app showcase
│   ├── Features.tsx     # Feature highlights
│   ├── Showcase.tsx     # App interface showcase
│   ├── Testimonials.tsx # User testimonials
│   ├── PoweredBy.tsx    # Technology stack
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer
├── hooks/               # Custom React hooks
│   └── useOnScreen.tsx  # Intersection Observer hook
├── src/                 # Source files
│   └── index.css        # Tailwind CSS entry point
├── index.html           # HTML template
├── index.tsx            # React entry point
├── App.tsx              # Main app component
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.ts       # Vite configuration
```

## 🎯 Target Audience

- **Magic: The Gathering Players**: Both casual and competitive players
- **Dice Collectors**: Enthusiasts who collect spindown dice from various sets
- **Local Game Store Owners**: For pricing and trading assistance
- **Traders**: Players who trade dice with others in their community

## 📈 Feature Highlights

### Camera Identification

- Instant recognition of spindown dice
- Set symbol identification
- Release date information
- High accuracy on-device processing

### Collection Management

- Complete inventory tracking
- Duplicate prevention
- Organization by multiple criteria
- Visual collection overview

### Database & Discovery

- Comprehensive MTG set database
- Search and filter capabilities
- Set information and history
- Rare and special edition tracking

## 🤝 Contributing

This is a landing page project for the Spindown ID mobile application. For contributions to the mobile app itself, please refer to the main Spindown ID repository.

## 📄 License

This project is part of the Spindown ID application ecosystem. Please refer to the main application repository for licensing information.

---

**Ready to start your spindown dice collection journey?** Download Spindown ID today and take your Magic: The Gathering experience to the next level!
