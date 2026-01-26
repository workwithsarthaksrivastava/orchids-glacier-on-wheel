# Glacier on Wheels - Cold-Chain Logistics Website

Modern, SEO-optimized website for Bihar's pioneer in cold-chain logistics.

## 🌟 Features

- 4-page professional website (Home, About, Services, Contact)
- SEO-optimized with meta tags and structured data
- Mobile-first responsive design
- Ice Blue, White, and Dark Navy color scheme
- IoT-enabled temperature monitoring showcase
- Contact form with validation
- Google Maps integration

## 📄 Pages

### Home (/)
- Hero section with company tagline
- Services overview cards
- Operations coverage across North India
- Trusted by leading brands section
- Call-to-action sections

### About (/about)
- Company story and mission
- Why choose us (6 key benefits)
- Industry expertise showcase
- Operational excellence highlights

### Services (/services)
- Refrigerated van rentals details
- Cold-chain logistics solutions
- IoT-enabled temperature monitoring
- Industries served
- Key benefits

### Contact (/contact)
- Contact form with validation
- Office address and phone numbers
- Google Maps embed
- Quick response guarantee
- Service coverage areas

## 🎨 Design

- **Primary Colors**: Ice Blue (#E8F4F8), Dark Navy (#1a2332)
- **Typography**: Inter for body, Poppins for headings
- **Components**: Shadcn/UI components
- **Animations**: Subtle hover effects and transitions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Hosting**: Vercel-ready

## 📱 SEO Features

### Global SEO
- Comprehensive meta tags
- Open Graph tags for social sharing
- LocalBusiness structured data (schema.org)
- Optimized for local search (Bihar focus)

### Page-Specific Keywords
- **Home**: cold chain logistics bihar, refrigerated van rental bihar
- **About**: cold chain experts india, refrigerated transport company
- **Services**: frozen food logistics, IoT temperature monitoring
- **Contact**: cold chain logistics Hajipur, refrigerated transport Bihar

## 🛠️ Development

### Prerequisites
```bash
Node.js 18+ or Bun
```

### Install Dependencies
```bash
npm install
# or
bun install
```

### Run Development Server
```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
npm run build
npm start
```

## 📞 Contact Information

**Glacier on Wheels**
- Address: 102, Ground Floor, Malti Complex, Ramashish Chowk, Hajipur – 844101, Bihar
- Phone: +91 9155956967, +91 7761925078
- Coverage: Bihar, UP, Jharkhand, West Bengal, Delhi-NCR, Punjab, Haryana

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Custom Domain Setup

1. Buy domain (e.g., glacieronwheel.com)
2. Add domain in Vercel Dashboard
3. Configure DNS records:
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com
4. SSL automatically enabled by Vercel

## 📝 Content Updates

### Update Images
Replace Unsplash URLs in page files with your own images:
- `src/app/page.tsx` - Home page images
- `src/app/about/page.tsx` - About page images
- `src/app/services/page.tsx` - Services page images

### Update Contact Form
Integrate with your backend or email service in:
- `src/components/ContactForm.tsx` - Line 57 (onSubmit function)

### Update Google Maps
Replace the iframe src in:
- `src/app/contact/page.tsx` - Line 90
- Use actual coordinates for Hajipur office location

## 🎯 Performance Targets

- Lighthouse Score: 95+
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): 0
- FCP (First Contentful Paint): < 1.8s

## 📦 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── layout.tsx (SEO metadata & structured data)
│   ├── page.tsx (Home page)
│   └── globals.css (Brand colors)
├── components/
│   ├── ui/ (Shadcn components)
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── lib/
    └── utils.ts
```

## 🔒 Security

- No hardcoded API keys
- Form validation with Zod
- Secure HTTPS via Vercel
- XSS protection enabled

## 📄 License

Proprietary - Glacier on Wheels © 2026

## 🤝 Support

For website support or logistics inquiries:
- Call: +91 9155956967
- Email: Available on contact form

---

Built with ❄️ by the Glacier on Wheels team
