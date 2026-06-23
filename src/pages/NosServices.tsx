// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Building2, Home, Factory, ShieldCheck, ArrowRight, Layers, Sparkles, Check } from 'lucide-react';

// interface ServiceCategory {
//   id: string;
//   title: string;
//   tagline: string;
//   icon: React.ReactNode;
//   bgImage: string;
//   targets: string[];
//   features: string[];
// }

// export function NosServices() {
//   const [activeTab, setActiveTab] = useState<string>('corporate');

//   const categories: ServiceCategory[] = [
//     {
//       id: 'corporate',
//       title: 'Entreprises & Bureaux',
//       tagline: 'Protection de marque et audits de conformité',
//       icon: <Building2 className="w-5 h-5" />,
//       bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
//       targets: ['Sièges Sociaux & Banques', 'Hôtels & Restaurants (HACCP)', 'Cliniques & Établissements Privés'],
//       features: ['Discrétion totale (véhicules banalisés)', 'Rapports d’intervention dématérialisés', 'Contrats annuels de maintenance préventive']
//     },
//     {
//       id: 'residential',
//       title: 'Résidences & Villas',
//       tagline: 'Assainissement biologique et sérénité familiale',
//       icon: <Home className="w-5 h-5" />,
//       bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
//       targets: ['Villas et Concessions privées', 'Appartements & Complexes résidentiels', 'Cités universitaires'],
//       features: ['Traitements 100% bio-sourcés', 'Zéro évacuation de domicile requise', 'Garantie écrite de non-réapparition']
//     },
//     {
//       id: 'industrial',
//       title: 'Secteur Industriel',
//       tagline: 'Ingénierie sanitaire de haute précision',
//       icon: <Factory className="w-5 h-5" />,
//       bgImage: 'https://images.unsplash.com/photo-1530604231867-a42c3c3044f1?auto=format&fit=crop&q=80&w=600',
//       targets: ['Entrepôts agroalimentaires', 'Usines de transformation', 'Zones de stockage & Logistique'],
//       features: ['Traitements par fumigation thermique', 'Contrôle drastique des rongeurs de soute', 'Traçabilité absolue conforme aux normes']
//     }
//   ];

//   const activeData = categories.find(c => c.id === activeTab) || categories[0];

//   return (
//     <section id="services-global" className="relative min-h-screen py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500 flex items-center">

//       {/* GRAPHISMES DE FOND FLUIDES */}
//       <div className="absolute top-1/4 left-[-10%] w-[55vw] h-[55vw] bg-lime-400/10 dark:bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-300/10 dark:bg-blue-950/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">

//         {/* EN-TÊTE DE SECTION STYLE MAGAZINE DE LUXE */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end">
//           <div className="lg:col-span-7 text-center lg:text-left">
//             <span className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-slate-900 border border-slate-200/40 text-[10px] font-bold tracking-widest text-blue-950 dark:text-lime-400 uppercase mb-4">
//               <Layers className="w-3 h-3 text-lime-500" /> Pôles d'Excellence
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-none">
//               Nos Secteurs <br />
//               <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
//                 D'Intervention
//               </span>
//             </h2>
//           </div>
//           <div className="lg:col-span-5 text-center lg:text-right">
//             <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto lg:ml-auto leading-relaxed">
//               De l’appartement d'habitation aux complexes agro-industriels majeurs de Douala et Yaoundé, Vermine Secret déploie des méthodologies scientifiques adaptées.
//             </p>
//           </div>
//         </div>

//         {/* COMPOSANT INTERACTIF PRINCIPAL */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

//           {/* SÉLECTEUR VERTICAL/HORIZONTAL (Navigation réactive premium) */}
//           <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
//             {categories.map((cat) => {
//               const isSelected = activeTab === cat.id;
//               return (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveTab(cat.id)}
//                   className={`flex items-center gap-4 p-4 lg:p-6 text-left border transition-all duration-300 rounded-none shrink-0 lg:shrink w-auto lg:w-full focus:outline-none relative overflow-hidden ${
//                     isSelected
//                       ? 'bg-slate-950 text-white border-slate-950 dark:bg-slate-900 dark:border-slate-800'
//                       : 'bg-stone-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-900 hover:bg-stone-100/50'
//                   }`}
//                 >
//                   <div className={`w-8 h-8 flex items-center justify-center transition-colors ${
//                     isSelected ? 'text-lime-400' : 'text-slate-400'
//                   }`}>
//                     {cat.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider block">{cat.title.split(' ')[0]}</h4>
//                     <span className="text-[10px] hidden lg:block font-light text-slate-400 dark:text-slate-500 mt-0.5">{cat.title.split(' ').slice(1).join(' ')}</span>
//                   </div>

//                   {isSelected && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="absolute right-0 top-0 bottom-0 w-[4px] bg-lime-400 hidden lg:block"
//                     />
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* TABLEAU DE BORD DYNAMIQUE DU PÔLE SÉLECTIONNÉ */}
//           <div className="lg:col-span-8 bg-stone-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative">

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                 className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
//               >
//                 {/* LISTE DES TEXTES ET SPÉCIFICATIONS */}
//                 <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
//                   <div>
//                     <span className="text-[9px] font-black tracking-widest text-lime-600 dark:text-lime-400 uppercase flex items-center gap-1.5 mb-1">
//                       <Sparkles className="w-3 h-3" /> Pôle d'activité certifié
//                     </span>
//                     <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
//                       {activeData.title}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1 italic">
//                       « {activeData.tagline} »
//                     </p>
//                   </div>

//                   {/* Espaces Cibler (Sous-sections) */}
//                   <div className="space-y-2">
//                     <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Périmètres types :</h5>
//                     <div className="space-y-1.5">
//                       {activeData.targets.map((tgt, i) => (
//                         <div key={i} className="text-xs text-slate-900 dark:text-slate-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-950 dark:bg-lime-400" />
//                           {tgt}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Avantages Inclus */}
//                   <div className="space-y-2">
//                     <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Normes et Garanties incluses :</h5>
//                     <div className="space-y-1.5">
//                       {activeData.features.map((feat, i) => (
//                         <div key={i} className="text-xs text-slate-600 dark:text-slate-400 font-light flex items-start gap-2">
//                           <Check className="w-3.5 h-3.5 text-lime-500 shrink-0 mt-0.5" />
//                           <span>{feat}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* IMAGE D'ILLUSTRATION AVEC EFFET ARCHITECTURAL (Droite) */}
//                 <div className="md:col-span-5 relative min-h-[180px] md:min-h-none overflow-hidden group">
//                   <img
//                     src={activeData.bgImage}
//                     alt={activeData.title}
//                     className="w-full h-full object-cover grayscale dark:brightness-90 hover:grayscale-0 transition-all duration-700 pointer-events-none select-none"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
//                 </div>

//               </motion.div>
//             </AnimatePresence>

//             {/* BARRE D'ACTION BAS DE CARTE */}
//             <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
//                 <ShieldCheck className="w-4 h-4 text-lime-500" /> Sécurité Biocide Contrôlée
//               </div>
//               <a
//                 href="#contact"
//                 className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 dark:bg-lime-400 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 hover:bg-lime-500"
//               >
//                 <span>Planifier un audit</span>
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </a>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Home,
  Factory,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
  Database,
  RefreshCw,
  ShieldAlert,
  Target,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: "Building2" | "Home" | "Factory";
  bgImage: string;
  targets: string[];
  features: string[];
  basePrice: number;
  riskLevel: "Modéré" | "Élevé" | "Critique";
}

export function NosServices() {
  const [activeTab, setActiveTab] = useState<string>("corporate");
  const [dbData, setDbData] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [areaSize, setAreaSize] = useState<number>(150); // État pour le calculateur dynamique

  // Simulation d'un fetch de base de données distante avec latence réseau
  useEffect(() => {
    const fetchServicesFromDB = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1200)); // Latence artificielle

      const mockDB: ServiceCategory[] = [
        {
          id: "corporate",
          title: "Entreprises & Bureaux",
          tagline: "Protection de marque et audits de conformité réglementaire",
          iconName: "Building2",
          bgImage:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
          targets: [
            "Sièges Sociaux & Banques",
            "Hôtels & Restaurants (HACCP)",
            "Cliniques & Établissements Privés",
          ],
          features: [
            "Discrétion totale (véhicules banalisés)",
            "Rapports d’intervention dématérialisés",
            "Contrats annuels de maintenance préventive",
          ],
          basePrice: 450, // Prix de base par m² estimé en FCFA/unité ou indice
          riskLevel: "Modéré",
        },
        {
          id: "residential",
          title: "Résidences & Villas",
          tagline: "Assainissement biologique et sérénité familiale",
          iconName: "Home",
          bgImage:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
          targets: [
            "Villas et Concessions privées",
            "Appartements & Complexes résidentiels",
            "Cités universitaires",
          ],
          features: [
            "Traitements 100% bio-sourcés",
            "Zéro évacuation de domicile requise",
            "Garantie écrite de non-réapparition",
          ],
          basePrice: 350,
          riskLevel: "Élevé",
        },
        {
          id: "industrial",
          title: "Secteur Industriel",
          tagline: "Ingénierie sanitaire de haute précision environnementale",
          iconName: "Factory",
          bgImage:
            "https://images.unsplash.com/photo-1530604231867-a42c3c3044f1?auto=format&fit=crop&q=80&w=600",
          targets: [
            "Entrepôts agroalimentaires",
            "Usines de transformation",
            "Zones de stockage & Logistique",
          ],
          features: [
            "Traitements par fumigation thermique",
            "Contrôle drastique des rongeurs de soute",
            "Traçabilité absolue conforme aux normes",
          ],
          basePrice: 650,
          riskLevel: "Critique",
        },
      ];

      setDbData(mockDB);
      setIsLoading(false);
    };

    fetchServicesFromDB();
  }, []);

  // Déclencheur manuel pour re-simuler une synchronisation
  const handleSync = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const activeData = dbData.find((c) => c.id === activeTab);

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Factory":
        return <Factory className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  // const fadeInUp: Variants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  // };

  return (
    <section
      id="services-global"
      className="relative min-h-screen py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500 flex items-center"
    >
      {/* TRACEURS GEOMETRIQUES ET FLUIDES */}
      <Navbar />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[55vw] h-[55vw] bg-lime-400/10 dark:bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-300/10 dark:bg-blue-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        {/* ENTÊTE AVEC ÉTAT DE LA BASE DE DONNÉES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-stone-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-[10px] font-mono font-bold tracking-widest text-slate-900 dark:text-lime-400 uppercase mb-4 rounded-none">
              <Database
                className={`w-3 h-3 ${isLoading ? "animate-spin text-lime-500" : "text-blue-600"}`}
              />
              {isLoading
                ? "Sync SQL distants..."
                : "DB_CONNECTED // PROTOCOLES LIVE"}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-none">
              Nos Secteurs <br />
              <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
                D\'Intervention Appliquée
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-center lg:text-right flex flex-col items-center lg:items-end gap-3">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm leading-relaxed">
              De l’appartement d\'habitation aux complexes agro-industriels
              majeurs de Douala et Yaoundé, Vermine Secret déploie des
              méthodologies scientifiques adaptées.
            </p>
            <button
              onClick={handleSync}
              className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-600 hover:text-lime-500 dark:hover:text-lime-400 flex items-center gap-1.5 transition-colors focus:outline-none"
            >
              <RefreshCw className="w-3 h-3" /> Forcer rafraîchissement noeud
            </button>
          </div>
        </div>

        {/* CONTAINER MAÎTRE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SÉLECTEUR GAUCHE SQUELETTE OU BOUTON */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {isLoading && dbData.length === 0
              ? // Squelette initial des boutons gauches
                [1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-[160px] lg:w-full h-16 bg-stone-100 dark:bg-slate-900/50 animate-pulse border border-transparent"
                  />
                ))
              : (dbData.length > 0 ? dbData : []).map((cat) => {
                  const isSelected = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => !isLoading && setActiveTab(cat.id)}
                      className={`flex items-center gap-4 p-4 lg:p-6 text-left border transition-all duration-300 rounded-none shrink-0 lg:shrink w-auto lg:w-full focus:outline-none relative overflow-hidden ${
                        isSelected
                          ? "bg-slate-950 text-white border-slate-950 dark:bg-slate-900 dark:border-slate-800 shadow-lg shadow-black/5"
                          : "bg-stone-50/60 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 flex items-center justify-center transition-colors ${isSelected ? "text-lime-400" : "text-slate-400"}`}
                      >
                        {getIcon(cat.iconName)}
                      </div>
                      <div>
                        <h4
                          className={`text-xs sm:text-sm font-black uppercase tracking-wider block ${isSelected ? "text-white" : "text-slate-950 dark:text-white"}`}
                        >
                          {cat.title.split(" ")[0]}
                        </h4>
                        <span className="text-[10px] hidden lg:block font-light text-slate-400 dark:text-slate-500 mt-0.5">
                          {cat.title.split(" ").slice(1).join(" ")}
                        </span>
                      </div>

                      {isSelected && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute right-0 top-0 bottom-0 w-[4px] bg-lime-400 hidden lg:block"
                        />
                      )}
                    </button>
                  );
                })}
          </div>

          {/* TABLEAU DE BORD CENTRAL DYNAMIQUE */}
          <div className="lg:col-span-8 bg-stone-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-900 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-500/5 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              {isLoading ? (
                // ÉCRAN DE CHARGEMENT SQUELETTE DE BASE DE DONNÉES
                <motion.div
                  key="loading-skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full w-full py-6"
                >
                  <div className="md:col-span-7 space-y-4">
                    <div className="h-4 w-1/4 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                    <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                    <div className="space-y-2 pt-4">
                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
                      <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                    </div>
                  </div>
                  <div className="md:col-span-5 h-48 md:h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
                </motion.div>
              ) : (
                activeData && (
                  // RENDU LIVE DES DONNÉES DE LA BD SIMULÉE
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                  >
                    {/* TEXTES & PROTOCOLES */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-black tracking-widest text-lime-600 dark:text-lime-400 uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> Pôle d'activité
                            certifié
                          </span>
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                              activeData.riskLevel === "Critique"
                                ? "bg-rose-500/10 text-rose-500 border-rose-500/20"
                                : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            }`}
                          >
                            Risque {activeData.riskLevel}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-950 dark:text-white">
                          {activeData.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light italic leading-relaxed">
                          « {activeData.tagline} »
                        </p>
                      </div>

                      {/* Périmètres types */}
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <Target className="w-3 h-3 text-blue-950 dark:text-lime-400" />{" "}
                          Périmètres types :
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-1.5">
                          {activeData.targets.map((tgt, i) => (
                            <div
                              key={i}
                              className="text-xs text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-950 dark:bg-lime-400" />
                              {tgt}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Avantages Inclus */}
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-3 h-3 text-lime-500" />{" "}
                          Normes et Garanties incluses :
                        </h5>
                        <div className="space-y-1.5">
                          {activeData.features.map((feat, i) => (
                            <div
                              key={i}
                              className="text-xs text-slate-600 dark:text-slate-400 font-light flex items-start gap-2"
                            >
                              <Check className="w-3.5 h-3.5 text-lime-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* MOCKUP INTERACTIF DROITE : ESTIMATEUR TEMPS RÉEL */}
                    <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-200/60 dark:border-slate-800/80 pt-6 md:pt-0 md:pl-6 space-y-4">
                      {/* Image à effet architectural architectural */}
                      <div className="relative h-28 w-full overflow-hidden group border border-slate-200/40 dark:border-slate-800">
                        <img
                          src={activeData.bgImage}
                          alt={activeData.title}
                          className="w-full h-full object-cover grayscale dark:brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                      </div>

                      <div className="bg-white dark:bg-slate-950 p-4 border border-slate-200/60 dark:border-slate-800 text-left space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Surface (m²)
                          </label>
                          <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-stone-100 dark:bg-slate-900 text-slate-950 dark:text-white border border-slate-200 dark:border-slate-800">
                            {areaSize} m²
                          </span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="1500"
                          step="25"
                          value={areaSize}
                          onChange={(e) => setAreaSize(Number(e.target.value))}
                          className="w-full accent-lime-400 bg-stone-100 dark:bg-slate-900 h-1 rounded-none appearance-none cursor-pointer"
                        />
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-900 flex justify-between items-end">
                          <span className="text-[9px] uppercase font-bold text-slate-400">
                            Estimation d'indice :
                          </span>
                          <span className="text-sm font-mono font-black text-lime-600 dark:text-lime-400">
                            {Math.round(
                              areaSize * activeData.basePrice,
                            ).toLocaleString()}{" "}
                            <span className="text-[10px] font-sans font-light text-slate-500">
                              FCFA
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>

            {/* BARRE D'ACTION BAS DE CARTE UNIFIÉE */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4 text-rose-500" /> Agrément
                Phyto-Sanitaire MINADER N°023
              </div>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-blue-950 dark:bg-lime-400 text-white dark:text-slate-950 text-xs font-black tracking-widest uppercase transition-all text-center flex items-center justify-center gap-2 hover:bg-lime-500 shadow-lg shadow-lime-500/5 rounded-none"
              >
                <span>Planifier un audit sur site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
