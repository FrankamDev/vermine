"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Activity,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Douala",
      });
      setLocalTime(timeString);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/verminesecret",
      color: "hover:bg-[#1877F2] hover:text-white border-[#1877F2]/20",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/verminesecret",
      color:
        "hover:bg-gradient-to-tr hover:from-[#E1306C] hover:via-[#C13584] hover:to-[#F56040] hover:text-white border-pink-500/10",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/237658769733",
      color: "hover:bg-[#25D366] hover:text-white border-[#25D366]/20",
    },
    {
      name: "Telegram",
      icon: FaTelegramPlane,
      href: "https://t.me/verminesecret",
      color: "hover:bg-[#229ED9] hover:text-white border-[#229ED9]/20",
    },
  ];

  return (
    <footer className="relative bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-20 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-500">
      {/* Traceurs d'arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        {/* Section Supérieure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200 dark:border-slate-900">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-750 dark:text-emerald-450 text-xs font-bold tracking-widest rounded-full border border-emerald-200/50 dark:border-emerald-900/30">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              VERMINE SECRET • Réseau Sanitaire National
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tighter leading-none text-slate-950 dark:text-white">
              Protégeons ensemble
              <br />
              votre espace de vie.
            </h3>

            <p className="text-slate-600 dark:text-slate-400 max-w-md text-[15px]">
              Solutions expertes et éco-responsables de désinsectisation,
              dératisation et assainissement pour particuliers et professionnels
              au Cameroun.
            </p>
          </div>

          {/* Statut Temps Réel */}
          <div className="lg:col-span-5 flex items-center">
            <div className="bg-white dark:bg-slate-900/55 border border-slate-200 dark:border-slate-900/80 rounded-3xl p-6 shadow-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-450">
                    Intervention Actives 24h
                  </span>
                </div>
                <span className="font-mono text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {localTime || "En ligne"}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Nos brigades d'intervention rapide couvrent actuellement Douala,
                Yaoundé et leurs environs.
              </p>
            </div>
          </div>
        </div>

        {/* Section Principale */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 py-16 gap-x-6">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-emerald-700 dark:bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter text-slate-950 dark:text-white">
                  VERMINE
                </span>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 -mt-1.5 font-bold tracking-widest">
                  SECRET
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-[15px] max-w-sm">
              L'élite de la lutte anti-nuisibles au Cameroun. Élimination
              radicale, traitements écologiques et protocoles sanitaires
              conformes aux normes internationales.
            </p>

            {/* Réseaux Sociaux 3D */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 text-2xl shadow-sm transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Secteurs */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            <h5 className="text-xs font-black uppercase tracking-widest text-slate-450 dark:text-slate-500">
              Nos Secteurs
            </h5>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-650 dark:hover:text-emerald-400 transition-colors"
                >
                  Résidences & Villas
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-650 dark:hover:text-emerald-400 transition-colors"
                >
                  Bureaux & Commerces
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-650 dark:hover:text-emerald-400 transition-colors"
                >
                  Hôtels & Restauration
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-650 dark:hover:text-emerald-400 transition-colors"
                >
                  Complexes Industriels
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagements */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h5 className="text-xs font-black uppercase tracking-widest text-slate-450 dark:text-slate-500">
              Charte Qualité
            </h5>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                ✔ Intervention sous 24h garantie
              </li>
              <li className="flex items-center gap-2">
                ✔ Produits certifiés MINADER
              </li>
              <li className="flex items-center gap-2">
                ✔ Garantie de résultats de 6 à 12 mois
              </li>
              <li className="flex items-center gap-2">
                ✔ Rapports de traitement détaillés
              </li>
            </ul>
          </div>
        </div>

        {/* Coordonnées & Copyright */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-3 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <a
                href="tel:+237658769733"
                className="hover:text-emerald-700 dark:hover:text-emerald-400 font-semibold text-slate-900 dark:text-slate-200"
              >
                +237 658 76 97 33
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <a
                href="mailto:contact.vermin.cm@gmail.com"
                className="hover:text-emerald-700 dark:hover:text-emerald-400 text-slate-900 dark:text-slate-200"
              >
                contact.vermin.cm@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <span className="text-slate-900 dark:text-slate-200">
                Douala • Yaoundé • Cameroun
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-500 flex flex-col md:flex-row items-center gap-x-4 gap-y-2 text-center md:text-left">
            <span>© 2026 Vermine Secret. Tous droits réservés.</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-800">
              •
            </span>
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-slate-600 dark:text-slate-450">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-550" />{" "}
              Agréé MINADER N°023
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-250 dark:hover:border-emerald-900/50 shadow-sm transition-all"
            aria-label="Retourner en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
