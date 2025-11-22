# Security Policy

## 🔐 Security Overview

This project implements multiple layers of security to protect content authenticity and copyright:

- **Watermarked Images** - All media assets include visible watermarks
- **JavaScript Protection** - Anti right-click and drag protection
- **Blockchain Verification** - OpenTimestamps for certificate authenticity
- **No Sensitive Data** - No passwords, API keys, or personal data stored
- **HTTPS Only** - All deployments enforce HTTPS

---

## 🛡️ Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |
| < 1.0   | :x:                |

---

## 🚨 Reporting a Vulnerability

### How to Report

If you discover a security vulnerability in this project, please follow these steps:

1. **DO NOT** open a public issue
2. **Email directly** to: **contact@ryanbarbosa.com**
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Fix Timeline**: Depends on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

### Disclosure Policy

- We follow **responsible disclosure** principles
- Vulnerabilities will be patched before public disclosure
- Credit will be given to reporters (if desired)

---

## 🔒 Security Features

### Content Protection

#### 1. Image Watermarking
All hackathon photos and certificates include:
- Visible watermark: "ryanbarbosa.com"
- Copyright notice: "© Ryan Barbosa 2025"
- Embedded metadata

**Purpose**: Discourage unauthorized use and maintain attribution

#### 2. JavaScript Protection
```javascript
// Anti right-click
onContextMenu={(e) => e.preventDefault()}

// Anti drag
onDragStart={(e) => e.preventDefault()}
draggable="false"

// Anti selection
userSelect: 'none'
```

**Purpose**: Prevent casual copying via browser UI

**Limitation**: Can be bypassed by developers (screenshot, DevTools, etc.)

#### 3. Blockchain Verification
Using **OpenTimestamps**:
- SHA-256 hash of files registered on Bitcoin blockchain
- Immutable proof-of-existence
- Verification files (.ots) available upon request

**Purpose**: Prove authenticity and creation date of certificates

**How it works**:
1. File hash computed (SHA-256)
2. Hash timestamped on Bitcoin blockchain
3. .ots file generated as proof
4. Anyone can verify with file + .ots

---

## 🔍 Known Limitations

### What We Protect Against
✅ Casual copying via right-click/drag  
✅ Certificate forgery (blockchain verification)  
✅ Attribution loss (visible watermarks)

### What We Don't Protect Against
❌ Screenshots (watermark remains visible)  
❌ Browser DevTools (technical users)  
❌ Determined attackers with image editing tools

**Note**: These limitations are inherent to web technologies. Perfect protection is impossible for public web content.

---

## 🛠️ Security Best Practices

### For Developers

If you fork or contribute to this project:

1. **Never commit**:
   - API keys or secrets
   - Personal data
   - Unencrypted sensitive information

2. **Always**:
   - Keep dependencies updated
   - Use HTTPS for all deployments
   - Sanitize user inputs (contact form)
   - Follow secure coding practices

3. **Recommended tools**:
   - `npm audit` - Check for vulnerabilities
   - Dependabot - Automated dependency updates
   - `.env` files - For local secrets (never commit)

### For Users

If you deploy your own version:

1. **Update personal information** in code
2. **Replace images** with your own watermarked versions
3. **Use HTTPS** hosting (Cloudflare, Vercel, Netlify)
4. **Enable security headers** in hosting platform
5. **Keep dependencies updated** regularly

---

## 📋 Security Checklist

### Before Deployment

- [ ] All images watermarked
- [ ] No sensitive data in code
- [ ] Dependencies updated (`npm audit`)
- [ ] HTTPS configured
- [ ] Contact form spam protection (if applicable)
- [ ] CSP headers configured (optional)
- [ ] Rate limiting on API endpoints (if applicable)

### Regular Maintenance

- [ ] Monthly dependency updates
- [ ] Quarterly security audit
- [ ] Review access logs for suspicious activity
- [ ] Update OpenTimestamps .ots files as needed

---

## 🔗 External Security Resources

### OpenTimestamps
- **Website**: https://opentimestamps.org/
- **Purpose**: Blockchain-based document timestamping
- **Privacy**: No data stored, only hashes

### Dependencies
All dependencies are from trusted sources:
- **npm registry** - https://www.npmjs.com/
- **React** - https://reactjs.org/ (Meta/Facebook)
- **Vite** - https://vitejs.dev/ (Evan You)
- **Tailwind CSS** - https://tailwindcss.com/ (Tailwind Labs)

---

## 📞 Security Contact

**Primary**: contact@ryanbarbosa.com  
**LinkedIn**: [Ryan Barbosa](https://linkedin.com/in/ryan-barbosa-451318399/)

**Response Time**: Within 48 hours

---

## 📜 Security Updates

Security updates will be announced via:
- GitHub Security Advisories
- Changelog in README.md
- Git tags for security releases

**Format**: `v2.0.1-security`

---

## ⚖️ Legal

### Copyright Protection

All images and content are protected by copyright:
- **Copyright © 2025 Ryan Barbosa**
- Unauthorized use is prohibited
- Watermarks must not be removed

### DMCA Compliance

If you believe your copyright has been infringed:
1. Email: contact@ryanbarbosa.com
2. Include:
   - Your contact information
   - Description of copyrighted work
   - Location of infringing content
   - Good faith statement
   - Signature

### License

This project is MIT licensed - see [LICENSE](LICENSE) file.

**Important**: MIT license applies to code only, not to:
- Images (watermarked, copyrighted)
- Personal content
- Certificates
- Branding

---

## 🤝 Acknowledgments

Security practices inspired by:
- [OWASP](https://owasp.org/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)

---

<div align="center">

**Last Updated**: January 2025

For non-security issues, see [README.md](README.md)

</div>
