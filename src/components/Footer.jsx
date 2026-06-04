import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Navigation Data Structure
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Accueil", path: "/" },
        { name: "Imaginer", path: "/imaginer" },
        { name: "Concevoir", path: "/concevoir" },
        { name: "Réaliser", path: "/realiser" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Construction", path: "/services/construction" },
        { name: "Rénovation", path: "/services/renovation" },
        { name: "Aménagement", path: "/services/amenagement" },
        { name: "Éco-responsable", path: "/services/eco" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Nous écrire", path: "/contact" },
        { name: "Devis gratuit", path: "/devis" },
        { name: "Téléphone", path: "tel:+33000000000" },
        { name: "Adresse", path: "/plan" },
      ],
    },
  ];

  const socialLinks = ["Facebook", "Instagram", "Youtube"];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Grid */}
        <div style={styles.grid}>
          
          {/* Brand Column */}
          <div style={styles.brandCol}>
            <div style={styles.logo}>
              BATI<span style={{ color: "var(--gold, #C9A96E)" }}>CHABLAIS</span>
            </div>
            <p style={styles.description}>
              Construction & rénovation de maisons haut standing en Haute-Savoie
              depuis 2010. L'excellence au service de votre patrimoine.
            </p>
            <div style={styles.socialWrapper}>
              {socialLinks.map((social) => (
                <a key={social} href={`https://${social.toLowerCase()}.com`} style={styles.socialLink} className="footer-link">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Map Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={styles.sectionTitle}>{section.title}</h4>
              <ul style={styles.list}>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} style={styles.link} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <span>© {new Date().getFullYear()} Toska. Tous droits réservés.</span>
          <span style={styles.location}>Haute-Savoie, France</span>
        </div>
      </div>

      {/* Inline Hover Effect Logic */}
      <style>
        {`
          .footer-link { transition: color 0.3s ease; }
          .footer-link:hover { color: var(--off-white, #fff) !important; }
          @media (max-width: 768px) {
            .footer-grid-responsive { 
                grid-template-columns: 1fr !important; 
                gap: 40px !important; 
            }
          }
        `}
      </style>
    </footer>
  );
};

// Styles object for better organization
const styles = {
  footer: {
    background: "#060604",
    borderTop: "1px solid rgba(201,169,110,0.1)",
    padding: "80px 24px 40px", // Adjusted padding for mobile
    color: "var(--stone, #a8a29e)",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Automatically wraps on mobile
    gap: 60,
    marginBottom: 80,
  },
  brandCol: {
    gridColumn: "span 1",
  },
  logo: {
    fontFamily: "var(--font-display, serif)",
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 2,
    marginBottom: 20,
    color: "#fff",
  },
  description: {
    fontFamily: "var(--font-body, sans-serif)",
    fontSize: 14,
    lineHeight: 1.8,
    maxWidth: 280,
    fontWeight: 300,
  },
  socialWrapper: {
    display: "flex",
    gap: 16,
    marginTop: 28,
  },
  socialLink: {
    fontFamily: "var(--font-body)",
    fontSize: 10,
    letterSpacing: 2,
    color: "var(--stone, #a8a29e)",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    letterSpacing: 3,
    color: "var(--gold, #C9A96E)",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  link: {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--stone, #a8a29e)",
    textDecoration: "none",
    fontWeight: 300,
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 32,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "var(--font-body)",
    fontSize: 12,
    letterSpacing: 1,
    flexWrap: "wrap",
    gap: 20,
  },
  location: {
    color: "rgba(201,169,110,0.5)",
  },
};

export default Footer;