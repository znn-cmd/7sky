# OCTA SUN Residence - Premium Villa Investment Landing Page

A modern, highly-convertible one-page landing site for OCTA SUN Residence (Bali), developed by SEVEN SKY, targeting speculative investors motivated by ROI, appreciation, and capital growth.

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: react-scroll

## 🎨 Design Features

- **Color Palette**: Warm natural tones inspired by sevensky-bali.com
  - Background: #F7F4EF
  - Text: #1F1F1F
  - Accent Gold: #D6B278
  - Warm Beige: #E9E2D2
  - Light Gray: #F5F5F5

- **Typography**: 
  - Headings: Cormorant Garamond (serif)
  - Body Text: Manrope (sans-serif)

- **Design Elements**:
  - Soft shadows and rounded corners (xl-2xl)
  - Cinematic photos with AI-generated placeholders
  - Smooth scroll animations
  - Gradient backgrounds
  - Responsive design

## 📱 Page Sections

1. **Hero Section** - Full-width background with main CTAs
2. **Why Invest** - 3x2 grid of investment benefits
3. **Villas Overview** - Villa collection with pricing
4. **Investment Model** - ROI projections and financial data
5. **Location** - Bukit Peninsula map and key points
6. **Developer & Operator** - SEVEN SKY credentials and past projects
7. **Limited Offer** - Urgency block with countdown timer
8. **Contact Form** - Lead capture with investor pack download
9. **FAQ** - Accordion with common questions
10. **Footer** - Company info and social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd octa-sun-residence-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page component
└── components/
    ├── SectionHero.tsx      # Hero section with CTAs
    ├── SectionWhyInvest.tsx  # Investment benefits grid
    ├── SectionVillas.tsx    # Villa collection showcase
    ├── SectionInvestmentModel.tsx # ROI charts and projections
    ├── SectionLocation.tsx  # Location map and points
    ├── SectionDeveloper.tsx # Developer credentials
    ├── SectionUrgency.tsx   # Limited offer countdown
    ├── SectionContact.tsx   # Lead form and contact info
    ├── SectionFAQ.tsx       # FAQ accordion
    └── SectionFooter.tsx    # Footer with links
```

## 🎯 Key Features

### Conversion Optimization
- **Clear Value Proposition**: ROI up to 17% per year prominently displayed
- **Urgency Elements**: Countdown timer and limited units messaging
- **Social Proof**: Developer track record and client testimonials
- **Multiple CTAs**: Strategic placement throughout the page
- **Lead Capture**: Comprehensive contact form with investor pack

### User Experience
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Optimized for all device sizes
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: Proper semantic HTML and ARIA labels
- **SEO Optimized**: Comprehensive metadata and structured data

### Technical Excellence
- **TypeScript**: Full type safety throughout
- **Modern CSS**: TailwindCSS with custom utilities
- **Performance**: Lighthouse score optimized
- **Code Quality**: ESLint configuration and clean architecture

## 🔧 Customization

### Colors
Update CSS variables in `globals.css`:
```css
:root {
  --background: #F7F4EF;
  --text: #1F1F1F;
  --accent-gold: #D6B278;
  --warm-beige: #E9E2D2;
  --light-gray: #F5F5F5;
  --button-hover: #C89E57;
}
```

### Content
- Update villa information in `SectionVillas.tsx`
- Modify investment data in `SectionInvestmentModel.tsx`
- Change developer information in `SectionDeveloper.tsx`
- Update FAQ content in `SectionFAQ.tsx`

### Images
Replace placeholder images with actual project photos:
- Hero background: `SectionHero.tsx`
- Villa images: `SectionVillas.tsx`
- Location map: `SectionLocation.tsx`
- Project gallery: `SectionDeveloper.tsx`

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ score
- **Core Web Vitals**: Fast loading and smooth interactions
- **SEO**: Comprehensive metadata and structured data
- **Accessibility**: WCAG compliant design

## 🌐 Deployment

The application is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📞 Contact

For questions about this landing page or OCTA SUN Residence investment opportunities:

- **Phone**: +62 812 3456 7890
- **Email**: invest@sevensky-bali.com
- **WhatsApp**: +62 812 3456 7890

---

**© 2025 Seven Sky Developments. All rights reserved.**