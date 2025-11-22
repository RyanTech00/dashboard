# 🎴 Digital Business Card + Portfolio - Ryan Barbosa

> Modern digital business card and professional portfolio with blockchain-protected certificates

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan.svg)](https://tailwindcss.com/)

## 🌐 Live Demo

**Website:** [ryanbarbosa.com](https://ryanbarbosa.com)

---

## ✨ Features

### 📇 Digital Business Card
- 🔄 **3D Flip Animation** - Interactive card with front/back sides
- 📱 **Dynamic QR Code** - Auto-generated via API
- 💾 **vCard Export** - Save contact directly to phone
- 🔗 **Web Share API** - Native sharing on mobile devices
- 📋 **Copy to Clipboard** - Quick contact info copy
- 📞 **Clickable Links** - Email, phone, social media
- 🎨 **Cybersecurity Theme** - Professional dark design
- 🌐 **Fully Responsive** - Mobile, tablet, desktop optimized

### 💼 Professional Portfolio
- 🏆 **Hackathon Highlights** - Award-winning projects showcase
- 🔐 **Blockchain Protection** - OpenTimestamps verification
- 🖼️ **Watermarked Media** - Copyright-protected images
- 📊 **Skills Visualization** - Interactive progress bars
- 📈 **Experience Timeline** - Professional journey
- 🎓 **Education Section** - Academic credentials
- 🏅 **Certifications** - Professional achievements
- 📧 **Contact Form** - Integrated communication

---

## ⚡ Performance

### Build Optimization

| Metric | Size | Gzipped |
|--------|------|---------|
| **Total Build** | 184 KB | ~55 KB |
| Main Component | 15 KB | 4.4 KB |
| Icons | 3 KB | 1.4 KB |
| CSS | 17 KB | 3.6 KB |
| Vendor (React) | 141 KB | 45 KB |

### Comparison: Vite vs Next.js

| Metric | Next.js | Vite | Improvement |
|--------|---------|------|-------------|
| node_modules | ~400 MB | ~60 MB | **85% smaller** |
| Build time | ~15-30s | ~4s | **73% faster** |
| Build size | ~500 KB+ | ~184 KB | **63% smaller** |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/RyanTech00/digital-card-portfolio.git
cd digital-card-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
digital-card-portfolio/
├── public/
│   ├── img/
│   │   ├── foto.jpg                    # Profile photo
│   │   └── hackathon/                  # Hackathon photos (watermarked)
│   │       ├── team-award.jpg
│   │       ├── team-photo.jpg
│   │       ├── presentation.jpg
│   │       └── certificate-preview.jpg
│   └── documents/
│       └── hackathon-certificate.pdf   # Official certificate
├── src/
│   ├── pages/
│   │   ├── DigitalCard.jsx            # Business card component
│   │   └── Portfolio.jsx              # Portfolio page
│   ├── components/
│   │   └── AnimatedCard.jsx           # Reusable animated card
│   ├── hooks/
│   │   └── useScrollReveal.js         # Scroll animations
│   ├── App.jsx                        # Router setup
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
├── LICENSE
├── SECURITY.md
└── README.md
```

---

## 🎨 Customization

### Update Personal Information

Edit `src/pages/DigitalCard.jsx`:

```javascript
const cardData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+351 XXX XXX XXX",
  linkedin: "linkedin.com/in/your-profile",
  github: "github.com/your-username",
  website: "your-website.com",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  bio: "Your bio here"
};
```

### Update Portfolio Content

Edit `src/pages/Portfolio.jsx`:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  projects: [ /* your projects */ ],
  skills: [ /* your skills */ ],
  experience: [ /* your experience */ ],
  education: [ /* your education */ ],
  certifications: [ /* your certifications */ ]
};
```

### Add Your Photos

Replace images in `public/img/` with your own:
- `foto.jpg` - Your profile photo (recommended: 512x512px)
- `hackathon/` - Your event photos (watermark recommended)

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Other Platforms

Compatible with:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting

**Build Settings:**
```yaml
Build Command: npm run build
Output Directory: dist
Node Version: 18+
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Ultra-fast build tool & dev server |
| **React 18** | UI library with hooks |
| **React Router** | Client-side routing |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **Lucide React** | Modern icon library |
| **QR Server API** | Dynamic QR code generation |

---

## 📊 Features Breakdown

### Business Card Features
- [x] 3D flip animation
- [x] QR code generation
- [x] vCard download
- [x] Web share API
- [x] Clipboard copy
- [x] Social media links
- [x] Responsive design

### Portfolio Features
- [x] Projects showcase
- [x] Skills visualization
- [x] Experience timeline
- [x] Education section
- [x] Certifications display
- [x] Hackathon highlights
- [x] Blockchain verification
- [x] Contact form
- [x] Scroll animations

---

## 🔐 Security

This project implements multiple security layers:
- Watermarked images for copyright protection
- JavaScript protection against easy downloads
- Blockchain verification via OpenTimestamps
- No sensitive data storage

For detailed security information and reporting vulnerabilities, see [SECURITY.md](SECURITY.md).

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Ryan Barbosa**

- 🌐 Website: [ryanbarbosa.com](https://ryanbarbosa.com)
- 💼 LinkedIn: [linkedin.com/in/ryan-barbosa-451318399](https://linkedin.com/in/ryan-barbosa-451318399/)
- 🐱 GitHub: [@RyanTech00](https://github.com/RyanTech00)
- 📧 Email: contact@ryanbarbosa.com
- 📍 Location: Portugal

**Education:** TeSP em Cibersegurança, Redes e Sistemas Informáticos @ ESTG-IPP

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/RyanTech00/digital-card-portfolio/issues).

### How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you or you found it interesting!

---

## 🙏 Acknowledgments

- **ESTG-IPP** - Escola Superior de Tecnologia e Gestão, Instituto Politécnico do Porto
- **Hackathon CyberTech 2025** - Competition organizers (Incubou, Amarante)
- **OpenTimestamps** - Blockchain verification system
- **Vite Team** - Amazing build tool
- **Tailwind Labs** - Excellent CSS framework

---

## 📝 Changelog

### v2.0.0 (2025-01)
- ✨ Added professional portfolio section
- 🔐 Implemented blockchain verification with OpenTimestamps
- 🖼️ Added watermark protection on all images
- 🏆 Integrated hackathon highlights section
- 📊 Added skills visualization
- 📈 Added experience timeline
- 🎓 Added education section
- 🏅 Added certifications display
- 📧 Integrated contact form
- ⚡ Performance optimizations
- 🎨 Improved responsive design

### v1.0.0 (2024)
- 🎉 Initial release
- 📇 Digital business card
- 🔄 3D flip animation
- 📱 QR code generation
- 💾 vCard export
- 🔗 Web share API

---

## 📞 Support

For support or questions:
- 📧 Email: contact@ryanbarbosa.com
- 💼 LinkedIn: [Ryan Barbosa](https://linkedin.com/in/ryan-barbosa-451318399/)
- 🐛 Issues: [GitHub Issues](https://github.com/RyanTech00/digital-card-portfolio/issues)

---

<div align="center">

Made with ❤️ by [Ryan Barbosa](https://ryanbarbosa.com)

**🔐 Protected by OpenTimestamps | 🛡️ Secured with Blockchain**

---

If you found this project useful, please consider giving it a ⭐!

</div>
