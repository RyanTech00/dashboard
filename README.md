# 🎴 Digital Business Card - Ryan Barbosa

Cartão de visita digital otimizado com Vite + React + Tailwind CSS

## ⚡ Performance

### Build otimizado:
- **Total build:** 184 KB
- **Gzip total:** ~55 KB
- **Componente principal:** 15 KB (4.4 KB gzip)
- **Ícones:** 3 KB (1.4 KB gzip)
- **CSS:** 17 KB (3.6 KB gzip)
- **Vendor (React):** 141 KB (45 KB gzip)

### Comparação com Next.js:
| Métrica | Next.js | Vite | Redução |
|---------|---------|------|---------|
| node_modules | ~400 MB | ~60 MB | **85%** |
| Build time | ~15-30s | ~4s | **73%** |
| Build size | ~500 KB+ | ~184 KB | **63%** |

## ✨ Funcionalidades

✅ **Todas mantidas do original:**
- 🔄 Animação 3D flip (frente/verso)
- 📱 QR Code dinâmico (gerado via API)
- 💾 Download vCard (salvar contato)
- 🔗 Web Share API (compartilhar)
- 📋 Copy to clipboard
- 📞 Links clicáveis (email, phone, social)
- 🎨 Tailwind CSS com tema cybersecurity
- 🌐 Totalmente responsivo

## 🚀 Como usar

### Desenvolvimento
```bash
npm install
npm run dev
```

### Build para produção
```bash
npm run build
npm run preview
```

### Deploy
O build gera uma pasta `dist/` pronta para deploy em:
- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor estático

## 📝 Personalização

Edite o objeto `cardData` em [src/DigitalCard.jsx](src/DigitalCard.jsx):

```javascript
const cardData = {
  name: "Seu Nome",
  title: "Seu Título",
  email: "seu@email.com",
  phone: "+351 XXX XXX XXX",
  linkedin: "linkedin.com/in/seu-perfil",
  github: "github.com/seu-usuario",
  website: "seu-site.com",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  // ...
};
```

## 📦 Estrutura do projeto

```
d:/card/
├── src/
│   ├── DigitalCard.jsx  # Componente principal
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais + Tailwind
├── index.html           # Template HTML
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
└── package.json         # Dependências
```

## 🛠️ Tecnologias

- **Vite** - Build tool ultra-rápido
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS
- **Lucide React** - Ícones modernos
- **QR Server API** - Geração de QR codes

## 📄 Licença

Projeto pessoal - Ryan Barbosa
