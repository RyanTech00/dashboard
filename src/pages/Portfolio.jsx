import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Shield,
  Network,
  Terminal,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedCard from '../components/AnimatedCard';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on mount/reload
  useEffect(() => {
    window.scrollTo(0, 0);
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Dados do portfólio - PERSONALIZA AQUI
  const portfolioData = {
    name: "Ryan Barbosa",
    title: "Cybersecurity Student",
    subtitle: "TeSP em Cibersegurança, Redes e Sistemas Informáticos - Seeking Internship Feb 2025",
    email: "contact@ryanbarbosa.com",
    phone: "+351 969 824 219",
    linkedin: "linkedin.com/in/ryan-barbosa-451318399/",
    github: "github.com/RyanTech00",
    website: "ryanbarbosa.com",
    location: "Portugal",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQGHBC2MjqyYFA/profile-displayphoto-shrink_800_800/B4EZqrWnqLHcAc-/0/1763811425969?e=1765411200&v=beta&t=0a4-S5oGd2vH44rRnsVGXhSqYN2nehT85wcdADQB0ag",
    bio: "Award-winning cybersecurity student at ESTG-IPP with hands-on experience in network infrastructure, penetration testing, and systems administration. Recently awarded 2nd Place and 'Hacker Destaque' at Hackathon CyberTech 2025 for anti-phishing solution development. Currently developing practical skills through academic projects involving email server implementation, network security with pfSense, Active Directory management, and monitoring systems deployment. Seeking 750-hour internship opportunity (Feb-Jul 2025) to apply technical knowledge in real-world cybersecurity challenges.",

    projects: [
      {
        id: 1,
        title: "Anti-Phishing Solution - Hackathon CyberTech 🏆",
        description: "2nd Place winner at Hackathon CyberTech by Incubou (Amarante, April 2025). Developed innovative anti-phishing solution with Team 404 NotFound in 24-hour challenge. Awarded 'Hacker Destaque' for outstanding individual contribution",
        tags: ["Phishing Prevention", "Cybersecurity", "Team Competition", "Prototyping"],
        status: "Completed",
        award: "2nd Place + Hacker Destaque Award"
      },
      {
        id: 2,
        title: "FSociety Infrastructure Project",
        description: "Complete network infrastructure with 4-layer security architecture, pfSense firewall, Active Directory, and OpenVPN secure remote access across 7 VMs",
        tags: ["pfSense", "Active Directory", "OpenVPN", "Network Security"],
        status: "Completed"
      },
      {
        id: 3,
        title: "Open-Source Email Server",
        description: "Academic project implementing enterprise email infrastructure with Proxmox Mail Gateway, featuring spam filtering and virus detection capabilities",
        tags: ["Proxmox", "Mail Gateway", "Security", "Linux"],
        status: "Completed"
      },
      {
        id: 4,
        title: "Security Testing & Vulnerability Analysis",
        description: "Penetration testing exercises on own FSociety infrastructure to identify and address security vulnerabilities in network configurations and services",
        tags: ["Penetration Testing", "Vulnerability Analysis", "Network Security"],
        status: "Ongoing"
      },
      {
        id: 5,
        title: "Digital Business Card",
        description: "Optimized digital card with 3D flip animation, QR code generation, and vCard export",
        tags: ["React", "Vite", "Tailwind CSS"],
        status: "Completed"
      }
    ],

    skills: [
      { name: "Network Architecture & Configuration", level: 70 },
      { name: "Systems Administration (Linux/Windows)", level: 75 },
      { name: "Network Security & Firewalls (pfSense)", level: 70 },
      { name: "Vulnerability Analysis & Penetration Testing", level: 45 },
      { name: "Active Directory & User Management", level: 65 },
      { name: "Python & Algorithm Development", level: 45 },
      { name: "Database Management", level: 65 },
      { name: "Digital Forensics", level: 45 },
    ],

    experience: [
      {
        period: "April 2025",
        role: "Hacker Destaque - Team 404 NotFound",
        company: "Hackathon CyberTech by Incubou",
        description: "Competed in 24-hour cybersecurity hackathon focused on developing innovative solutions for real-world cybersecurity challenges. Collaborated with Hugo Correia and Beatriz Novais (ESTG cybersecurity students) to create anti-phishing solution.",
        highlights: [
          "🏆 2nd Place overall in competition among multiple teams",
          "🏆 'Hacker Destaque' award for outstanding individual contribution",
          "Developed functional prototype for phishing attack prevention",
          "Participated in specialized mentorship sessions and practical workshops",
          "Presented solution to panel of cybersecurity specialists"
        ]
      },
      {
        period: "2023 - Present",
        role: "Cybersecurity Student - Academic Projects",
        company: "ESTG - Instituto Politécnico do Porto",
        description: "Developing comprehensive technical skills through hands-on academic projects in network security, infrastructure deployment, and penetration testing.",
        highlights: [
          "Implemented enterprise-grade network infrastructure with pfSense, Active Directory, and OpenVPN",
          "Deployed comprehensive monitoring and security systems achieving high availability",
          "Conducted penetration testing exercises on own infrastructure to improve security posture",
          "Built open-source email server infrastructure with advanced spam filtering and security features",
          "Configured DMZ environments with proper network segmentation and security policies",
          "Created detailed technical documentation following academic standards with LaTeX"
        ]
      }
    ],

    certifications: [
      {
        name: "Cisco CCNA",
        provider: "Cisco NetAcad",
        status: "In Progress",
        year: "Expected 2025"
      },
      {
        name: "PortSwigger Web Security Academy",
        provider: "PortSwigger",
        status: "In Progress",
        year: "Expected 2025"
      }
    ],

    education: [
      {
        period: "2023 - 2025",
        degree: "TeSP em Cibersegurança, Redes e Sistemas Informáticos",
        institution: "ESTG - Instituto Politécnico do Porto",
        location: "Felgueiras, Portugal",
        highlights: [
          "Network architecture planning and protocol configuration",
          "Security threat management and vulnerability analysis",
          "Installation and configuration of operating systems, servers, and network services",
          "Email platforms and web services administration",
          "Active Directory domain and centralized user/computer management",
          "Database systems planning and administration",
          "Network infrastructure design using appropriate technologies",
          "Algorithm development and digital forensics",
          "Security policies implementation for systems, networks, and databases"
        ],
        note: "750-hour internship (Feb-Jul 2025) included in final semester"
      }
    ],

    internshipInfo: {
      duration: "750 hours",
      period: "February - July 2025",
      coverage: "Activities covered by ESTG-IPP insurance",
      requirements: [
        "Supervisor with higher education and/or IT experience",
        "Project-based work defined by host organization",
        "Formal protocols between ESTG-IPP and host entity"
      ]
    },

    hackathon: {
      title: "Hackathon CyberTech 2025 - Amarante",
      team: "404 NotFound",
      awards: ["2nd Place Overall", "Hacker Destaque Award"],
      photos: [
        {
          url: "img/hackathon/team-award.jpg",
          caption: "Team 404 NotFound receiving 2nd place award"
        },
        {
          url: "img/hackathon/team-photo.jpg",
          caption: "Team 404 NotFound with Hugo Correia and Beatriz Novais"
        },
        {
          url: "img/hackathon/presentation.jpg",
          caption: "Presenting anti-phishing solution to judges"
        }
      ],
      certificate: {
        preview: "img/hackathon/certificate-preview.jpg",
        pdf: "documents/hackathon-certificate.pdf",
        blockchainVerified: true
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://ryanbarbosa.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll reveal animations
  const heroPhotoRef = useScrollReveal('animate-scale-in', 0.2);
  const heroContentRef = useScrollReveal('animate-fade-in-left', 0.2, 'delay-200');
  const sectionTitleRef1 = useScrollReveal('animate-fade-in-up', 0.3);
  const sectionTitleRef2 = useScrollReveal('animate-fade-in-up', 0.3);
  const sectionTitleRef3 = useScrollReveal('animate-fade-in-up', 0.3);
  const sectionTitleRef4 = useScrollReveal('animate-fade-in-up', 0.3);
  const sectionTitleRef5 = useScrollReveal('animate-fade-in-up', 0.3);
  const sectionTitleRef6 = useScrollReveal('animate-fade-in-up', 0.3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg">Ryan Barbosa</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-emerald-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-emerald-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-emerald-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-emerald-400 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-emerald-400 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-emerald-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-emerald-500/20">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div ref={heroPhotoRef} className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl flex-shrink-0">
              {portfolioData.photo ? (
                <img
                  src={portfolioData.photo}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Shield className="w-32 h-32 text-slate-500" />
                </div>
              )}
            </div>

            {/* Hero Content */}
            <div ref={heroContentRef} className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-white mb-4">{portfolioData.name}</h1>
              <h2 className="text-2xl text-emerald-400 mb-2">{portfolioData.title}</h2>
              <p className="text-lg text-slate-400 mb-6">{portfolioData.subtitle}</p>
              <p className="text-slate-300 mb-8 max-w-2xl">{portfolioData.bio}</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  <Home className="w-5 h-5" />
                  View Digital Card
                </Link>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-emerald-500/30"
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
                <a
                  href="#"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-emerald-500/30"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef1} className="text-4xl font-bold text-white mb-12 text-center">
            <Code className="inline-block w-10 h-10 mr-3 text-emerald-400" />
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                animation="animate-scale-in"
                delay={`delay-${Math.min(index * 100, 500)}`}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:scale-105 cursor-pointer shadow-lg h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-emerald-600/20 text-emerald-400'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-600/20 text-yellow-400'
                        : 'bg-blue-600/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  {project.award && (
                    <div className="mb-3 p-2 bg-amber-600/10 border border-amber-500/30 rounded-lg">
                      <p className="text-amber-400 text-sm font-semibold flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {project.award}
                      </p>
                    </div>
                  )}
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-emerald-400 rounded-full border border-emerald-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Award className="w-10 h-10 text-amber-400" />
                <h2 className="text-4xl font-bold text-white">Hackathon Highlights</h2>
                <Award className="w-10 h-10 text-amber-400" />
              </div>
              <p className="text-slate-400 text-lg">
                {portfolioData.hackathon.title}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {portfolioData.hackathon.awards.map((award, index) => (
                  <span key={index} className="px-4 py-2 bg-amber-600/20 border border-amber-500/40 rounded-full text-amber-400 font-semibold">
                    🏆 {award}
                  </span>
                ))}
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {portfolioData.hackathon.photos.map((photo, index) => (
                <AnimatedCard
                  key={index}
                  animation="animate-scale-in"
                  delay={`delay-${index * 100}`}
                >
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        draggable="false"
                        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-slate-300 text-sm text-center">{photo.caption}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Certificate Section */}
            <div className="mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-white text-center mb-4">Official Certificate</h3>
              <AnimatedCard animation="animate-fade-in-up">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all">
                  <div className="relative">
                    <img
                      src={portfolioData.hackathon.certificate.preview}
                      alt="Hackathon Certificate"
                      className="w-full h-auto"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      draggable="false"
                      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                    />
                    {portfolioData.hackathon.certificate.blockchainVerified && (
                      <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-400/50 shadow-lg">
                        <p className="text-white text-sm font-semibold flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          Blockchain Verified
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-center text-xs mb-3">
                      This certificate is timestamped on the Bitcoin blockchain for authenticity verification.
                      All images are protected by copyright © 2025 Ryan Barbosa.
                    </p>
                    <div className="bg-slate-800/50 border border-emerald-500/20 rounded-lg p-3 mb-3">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4" />
                        How to Verify Authenticity:
                      </h4>
                      <ol className="text-slate-300 text-xs space-y-1.5 list-decimal list-inside">
                        <li>Visit OpenTimestamps website using the button below</li>
                        <li>Download any image from this portfolio</li>
                        <li>Upload the image + .ots file to verify timestamp</li>
                        <li>Blockchain confirms file authenticity and creation date</li>
                      </ol>
                      <p className="text-slate-500 text-xs mt-2">
                        Note: .ots verification files available upon request
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <a
                href="https://opentimestamps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                Learn About OpenTimestamps
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-slate-500 text-xs mt-3">
                Professional blockchain-based document verification system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef2} className="text-4xl font-bold text-white mb-12 text-center">
            <Terminal className="inline-block w-10 h-10 mr-3 text-emerald-400" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioData.skills.map((skill, index) => (
              <AnimatedCard
                key={index}
                animation="animate-fade-in-left"
                delay={`delay-${Math.min(index * 100, 500)}`}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-emerald-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef3} className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-emerald-400" />
            </div>
            Education
          </h2>

          <div className="max-w-4xl space-y-6">
            {portfolioData.education.map((edu, index) => (
              <AnimatedCard
                key={index}
                animation="animate-fade-in-up"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{edu.degree}</h3>
                  <p className="text-emerald-400 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-4">
                    {edu.period} • {edu.location}
                  </p>
                  {edu.note && (
                    <div className="mb-4 p-3 bg-emerald-600/10 border border-emerald-500/30 rounded-lg">
                      <p className="text-emerald-400 text-sm font-semibold">{edu.note}</p>
                    </div>
                  )}
                  {edu.highlights && (
                    <div>
                      <p className="text-slate-400 font-semibold mb-3 text-sm">Key Competencies:</p>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-emerald-400 mt-1">›</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef4} className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-emerald-400" />
            </div>
            Experience
          </h2>

          <div className="max-w-4xl space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <AnimatedCard
                key={index}
                animation="animate-fade-in-up"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{exp.role}</h3>
                  <p className="text-emerald-400 font-semibold mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-emerald-400 mt-1">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef5} className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
              <Award className="w-7 h-7 text-emerald-400" />
            </div>
            Certifications
          </h2>

          <div className="max-w-4xl space-y-6">
            {portfolioData.certifications.map((cert, index) => (
              <AnimatedCard
                key={index}
                animation="animate-fade-in-up"
                delay={`delay-${index * 100}`}
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                      <p className="text-emerald-400 font-semibold">{cert.provider}</p>
                    </div>
                    <span className="text-slate-400 text-sm whitespace-nowrap ml-4">{cert.year}</span>
                  </div>
                  <span className={`inline-block text-xs px-3 py-1.5 rounded-full ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-600/20 text-emerald-400'
                      : cert.status === 'In Progress'
                      ? 'bg-yellow-600/20 text-yellow-400'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 ref={sectionTitleRef6} className="text-4xl font-bold text-white mb-12 text-center">
            <Mail className="inline-block w-10 h-10 mr-3 text-emerald-400" />
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 mb-6">
                Available for internship opportunities starting February 2025. 
                Feel free to reach out to discuss potential collaboration.
              </p>

              <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold">{portfolioData.email}</p>
                </div>
              </a>

              <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-semibold">{portfolioData.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold">{portfolioData.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-slate-500 mb-4">Social Media</p>
                <div className="flex gap-4">
                  <a
                    href={`https://${portfolioData.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-emerald-600/20 rounded-lg flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://${portfolioData.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-emerald-600/20 rounded-lg flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://${portfolioData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-emerald-600/20 rounded-lg flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Your message..."
                    disabled={isSubmitting}
                  />
                </div>

                {/* Status Message */}
                {formStatus.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      formStatus.type === 'success'
                        ? 'bg-emerald-600/20 border border-emerald-500/30 text-emerald-400'
                        : 'bg-red-600/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-emerald-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}