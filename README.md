# Fiona Miao Consulting Website

A modern, dynamic consulting website built with Next.js, featuring appointment scheduling, contact forms, and comprehensive service offerings.

## Overview

This is a full-stack web application for a professional consulting firm with the following key features:

- **Home Page**: Hero section with services overview
- **Services Page**: Detailed information about consulting services
- **Pricing Page**: Transparent pricing plans
- **Contact Page**: Contact form with email integration
- **Appointments**: Online appointment booking system
- **API Routes**: Backend endpoints for form submissions and appointment management

## Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB (configured, needs credentials)
- **Package Manager**: npm
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites
- Node.js 18+ (installed via Homebrew)
- npm 11+

### Installation

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.local.example` to `.env.local`
   - Update with your MongoDB connection string and other credentials

3. **Run development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/       # Contact form API
│   │   └── appointments/  # Appointment booking API
│   ├── (pages)/
│   │   ├── page.tsx       # Home page
│   │   ├── services/      # Services page
│   │   ├── pricing/       # Pricing page
│   │   ├── contact/       # Contact page
│   │   └── appointments/  # Appointments page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
└── lib/                   # Utilities and helpers
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues

## Next Steps

### Database Integration
1. Install MongoDB driver: `npm install mongodb`
2. Update API routes in `src/app/api/` to connect to your MongoDB instance
3. Create data schemas for contacts and appointments

### Email Integration
1. Install nodemailer: `npm install nodemailer`
2. Configure SMTP settings in `.env.local`
3. Update API routes to send confirmation emails

### Authentication (Optional)
1. Install NextAuth.js: `npm install next-auth`
2. Set up authentication providers
3. Protect admin routes

### Deployment
1. Create a Vercel account at https://vercel.com
2. Connect your GitHub repository
3. Deploy with one click

## Configuration

### Environment Variables
Create a `.env.local` file with:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
ADMIN_EMAIL=admin@consulting.fionamiao.com
```

## Performance

- **Turbopack**: Enabled for faster builds and development
- **Static Generation**: Home page and service pages use static generation
- **API Routes**: Dynamic server rendering for real-time data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a custom consulting website. For updates and modifications, follow the established component and page structure.

## Support

For issues or questions about the website, contact the development team.

## License

© 2026 Fiona Miao Consulting. All rights reserved.
