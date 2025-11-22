import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Globe, User, Download, Share2, Shield, Terminal, Phone, ExternalLink } from 'lucide-react';
import Loader from './Loader';

export default function DigitalCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Configuração - PERSONALIZA AQUI
  const cardData = {
    name: "Ryan Barbosa",
    title: "Cybersecurity Student",
    subtitle: "Technical Course - Seeking Internship",
    email: "contact@ryanbarbosa.com",
    phone: "+351 969 824 219",
    linkedin: "linkedin.com/in/ryan-barbosa-451318399/",
    github: "github.com/RyanTech00",
    website: "ryanbarbosa.com",
    location: "Portugal",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQGHBC2MjqyYFA/profile-displayphoto-shrink_800_800/B4EZqrWnqLHcAc-/0/1763811425969?e=1765411200&v=beta&t=0a4-S5oGd2vH44rRnsVGXhSqYN2nehT85wcdADQB0ag", // Coloque sua foto em public/foto.jpg (ou deixe null para usar ícone)
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing"],
    bio: "Passionate about cybersecurity, eager to learn and contribute to protecting digital infrastructure."
  };

  useEffect(() => {
    // Scroll to top on mount/reload
    window.scrollTo(0, 0);
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Simula carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Gera QR Code com URL da página atual
    const currentUrl = window.location.href.split('?')[0];
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&bgcolor=1e293b&color=10b981&margin=10`;
    setQrCodeUrl(qrUrl);

    // Detecta se veio de QR scan
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('qr') === 'scan') {
      setTimeout(() => setShowDownloadPrompt(true), 2000);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${cardData.name}
N:${cardData.name.split(' ')[1]};${cardData.name.split(' ')[0]};;;
TITLE:${cardData.title}
EMAIL;TYPE=INTERNET:${cardData.email}
TEL;TYPE=CELL:${cardData.phone}
URL:https://${cardData.website}
URL;TYPE=LinkedIn:https://${cardData.linkedin}
URL;TYPE=GitHub:https://${cardData.github}
ADR;TYPE=HOME:;;;;;;${cardData.location}
NOTE:${cardData.skills.join(' | ')} - ${cardData.bio}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${cardData.name.replace(' ', '-').toLowerCase()}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    setShowDownloadPrompt(false);
  };

  const shareCard = async () => {
    const url = `${window.location.origin}${window.location.pathname}?qr=scan`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${cardData.name} - ${cardData.title}`,
          text: `Conecta comigo! ${cardData.skills[0]} | ${cardData.skills[1]}`,
          url: url
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(url);
        }
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  // Mostra o loader enquanto carrega
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Copied Notification */}
      {showCopied && (
        <div className="fixed top-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideDown">
          ✓ Link copied!
        </div>
      )}

      {/* Download Prompt Modal */}
      {showDownloadPrompt && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-sm w-full shadow-2xl border-2 border-emerald-500/30">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Save Contact?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Add Ryan to your contacts and stay connected
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={downloadVCard}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                📥 Yes, save now
              </button>
              <button
                onClick={() => setShowDownloadPrompt(false)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-4 rounded-xl transition-colors"
              >
                View card first
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md relative z-10">
        {/* Header Actions */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-emerald-400">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-mono">SECURE CARD</span>
          </div>
          <button
            onClick={shareCard}
            className="bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        {/* Card Container with 3D Perspective */}
        <div className="relative w-full h-[600px] sm:h-[650px]" style={{ perspective: '1500px' }}>
          <div
            className="relative w-full h-full transition-transform duration-700 cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
            onClick={handleFlip}
          >
            {/* FRONT OF CARD */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-500/20"
              style={{
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Accent Line */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600"></div>

              {/* Header */}
              <div className="bg-slate-900/60 backdrop-blur-sm px-5 py-4 flex justify-between items-center border-b border-emerald-500/10">
                <div>
                  <h2 className="text-white text-xl font-bold tracking-tight">{cardData.name}</h2>
                  <p className="text-emerald-400 text-xs font-mono flex items-center gap-1.5 mt-0.5">
                    <Terminal className="w-3 h-3" />
                    ID: RB-{new Date().getFullYear()}-PT
                  </p>
                </div>
                <div className="bg-emerald-600/20 backdrop-blur-sm rounded-xl p-2.5 border border-emerald-500/30">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-start justify-between mb-6">
                  {/* QR Code */}
                  <div className="bg-slate-900 p-3 rounded-xl shadow-xl border-2 border-emerald-500/20">
                    {qrCodeUrl ? (
                      <img
                        src={qrCodeUrl}
                        alt="QR Code para contacto"
                        className="w-28 h-28 rounded-lg"
                      />
                    ) : (
                      <div className="w-28 h-28 bg-slate-800 flex items-center justify-center rounded-lg">
                        <div className="text-slate-500 text-xs text-center">Loading<br/>QR...</div>
                      </div>
                    )}
                  </div>

                  {/* Photo */}
                  <div className="w-36 h-36 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden border-4 border-emerald-500/20 shadow-xl">
                    {cardData.photo ? (
                      <img
                        src={cardData.photo}
                        alt={cardData.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-20 h-20 text-slate-500" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Title Card */}
                <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 backdrop-blur-sm rounded-xl p-5 mb-4 border border-emerald-500/30 shadow-lg">
                  <h3 className="text-white text-xl font-bold mb-1">{cardData.title}</h3>
                  <p className="text-emerald-300 text-sm">{cardData.subtitle}</p>
                </div>

                {/* Skills/Info */}
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-emerald-500/10">
                  <div className="space-y-2">
                    {cardData.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-emerald-100 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-4 bg-slate-900/40 rounded-xl p-4 border border-emerald-500/10">
                  <p className="text-emerald-300 text-xs text-center font-mono">
                    📱 Scan QR • 🔄 Tap to flip • 📧 Get in touch
                  </p>
                </div>
              </div>

              {/* Footer Indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-slate-900/80 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-3 border border-emerald-500/20">
                  <span className="text-white text-sm font-medium">Tap to flip</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-emerald-500/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK OF CARD */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-500/20"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              {/* Accent Line */}
              <div className="h-2 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-500"></div>

              {/* Header */}
              <div className="bg-slate-900/60 backdrop-blur-sm px-5 py-3.5 border-b border-emerald-500/10">
                <h2 className="text-white text-xl font-bold">Contact</h2>
                <p className="text-slate-400 text-xs">Let's connect and collaborate</p>
              </div>

              {/* Contacts List */}
              <div className="p-4 space-y-2.5 overflow-y-auto max-h-[calc(100%-140px)]">
                {/* Email */}
                <a
                  href={`mailto:${cardData.email}`}
                  className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-3.5 group border border-emerald-500/10 hover:border-emerald-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-emerald-600 rounded-lg p-2.5 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-mono mb-0.5">EMAIL</p>
                    <p className="text-white font-medium text-sm truncate">{cardData.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${cardData.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-3.5 group border border-emerald-500/10 hover:border-emerald-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-blue-600 rounded-lg p-2.5 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-xs font-mono mb-0.5">PHONE</p>
                    <p className="text-white font-medium text-sm">{cardData.phone}</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://${cardData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-3.5 group border border-emerald-500/10 hover:border-emerald-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-blue-500 rounded-lg p-2.5 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-mono mb-0.5">LINKEDIN</p>
                    <p className="text-white font-medium text-sm truncate">{cardData.linkedin.replace('linkedin.com/', '')}</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={`https://${cardData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-3.5 group border border-emerald-500/10 hover:border-emerald-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-purple-600 rounded-lg p-2.5 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-mono mb-0.5">GITHUB</p>
                    <p className="text-white font-medium text-sm truncate">{cardData.github.replace('github.com/', '@')}</p>
                  </div>
                </a>

                {/* Portfolio */}
                <a
                  href={`https://${cardData.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-3.5 group border border-emerald-500/10 hover:border-emerald-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-emerald-600 rounded-lg p-2.5 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-mono mb-0.5">WEBSITE</p>
                    <p className="text-white font-medium text-sm truncate">{cardData.website}</p>
                  </div>
                </a>

                {/* Action Buttons - Side by Side */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {/* Save Contact CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadVCard();
                    }}
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-emerald-500/30"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-xs">Save Contacts</span>
                  </button>

                  {/* Portfolio CTA */}
                  <Link
                    to="/portfolio"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-purple-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Portfolio</span>
                  </Link>
                </div>
              </div>

              {/* Back Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-emerald-500/20">
                  <span className="text-white text-xs font-medium">Tap to flip back</span>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500/30 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 space-y-3">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/10">
            <p className="text-slate-300 text-sm text-center leading-relaxed">
              💡 <strong className="text-emerald-400">Desktop:</strong> Click card to flip
              <br/>
              📱 <strong className="text-emerald-400">Mobile:</strong> Tap to flip | Clickable links on back
            </p>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-xs font-mono">
              © 2025 Ryan Barbosa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
