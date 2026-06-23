// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Shield, Send, CheckCircle2, MapPin, Clock, Activity } from 'lucide-react';

// export function Contact() {
//   const [selectedNuisible, setSelectedNuisible] = useState<string>('');
//   const [selectedVille, setSelectedVille] = useState<string>('');
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulation d'envoi
//     setIsSubmitted(true);
//   };

//   return (
//     <section id="contact" className="relative min-h-screen pt-24 bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col justify-between overflow-hidden">
      
//       {/* GRILLE TECHNIQUE EN ARRIÈRE-PLAN */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-lime-400/10 dark:bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full mb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* BLOC GAUCHE : COORDINATIONS ET REASSURANCE */}
//           <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
//             <div>
//               <span className="text-[10px] font-bold tracking-widest text-lime-600 dark:text-lime-400 uppercase bg-lime-50 dark:bg-slate-900 px-3 py-1">
//                 ZÉRO ENGAGEMENT
//               </span>
//               <h3 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-slate-950 dark:text-white mt-4 leading-tight">
//                 Recevez votre <br />
//                 <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
//                   Cotation sous 15 min
//                 </span>
//               </h3>
//               <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-4 leading-relaxed max-w-sm mx-auto lg:mx-0">
//                 Nos experts analysent vos données pour concevoir un plan d'éradication sur-mesure immédiat.
//               </p>
//             </div>

//             {/* Micro-informations à puces épurées */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
//               <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-slate-900">
//                 <MapPin className="w-4 h-4 text-lime-500 shrink-0" />
//                 <div>
//                   <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Bureaux</h5>
//                   <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">Yaoundé & Douala</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-slate-900">
//                 <Clock className="w-4 h-4 text-lime-500 shrink-0" />
//                 <div>
//                   <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Disponibilité</h5>
//                   <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">24h / 24 — 7j / 7</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BLOC DROIT : FORMULAIRE INTERACTIF SANS COUTURE */}
//           <div className="lg:col-span-7 w-full">
//             <div className="bg-stone-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 relative">
              
//               <AnimatePresence mode="wait">
//                 {!isSubmitted ? (
//                   <motion.form 
//                     key="form"
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                     exit={{ opacity: 0, y: -20 }}
//                   >
//                     {/* ÉTAPE 1 : CHOIX DU NUISIBLE (Badges tactiles) */}
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
//                         1. Type de menace biologique :
//                       </label>
//                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                         {['Cafards', 'Rats', 'Moustiques', 'Autre'].map((type) => (
//                           <button
//                             key={type}
//                             type="button"
//                             onClick={() => setSelectedNuisible(type)}
//                             className={`py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
//                               selectedNuisible === type
//                                 ? 'bg-blue-950 text-white border-blue-950 dark:bg-lime-400 dark:text-slate-950 dark:border-lime-400'
//                                 : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-slate-300'
//                             }`}
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* ÉTAPE 2 : LOCALISATION */}
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
//                         2. Zone d'intervention :
//                       </label>
//                       <div className="grid grid-cols-3 gap-2">
//                         {['Yaoundé', 'Douala', 'Autre'].map((ville) => (
//                           <button
//                             key={ville}
//                             type="button"
//                             onClick={() => setSelectedVille(ville)}
//                             className={`py-2.5 text-xs font-bold uppercase tracking-wider transition-all border ${
//                               selectedVille === ville
//                                 ? 'bg-blue-950 text-white border-blue-950 dark:bg-lime-400 dark:text-slate-950 dark:border-lime-400'
//                                 : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-slate-300'
//                             }`}
//                           >
//                             {ville}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* ÉTAPE 3 : COORDONNÉES */}
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
//                         3. Vos Coordonnées :
//                       </label>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         <input 
//                           type="tel" 
//                           required
//                           placeholder="N° de Téléphone (WhatsApp)" 
//                           className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 text-xs focus:outline-none focus:border-lime-400 text-slate-900 dark:text-white"
//                         />
//                         <input 
//                           type="text" 
//                           required
//                           placeholder="Nom complet ou Entreprise" 
//                           className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 text-xs focus:outline-none focus:border-lime-400 text-slate-900 dark:text-white"
//                         />
//                       </div>
//                     </div>

//                     {/* BOUTON D'ENVOI */}
//                     <button
//                       type="submit"
//                       className="w-full py-4 bg-lime-400 hover:bg-lime-500 text-slate-950 font-black text-xs tracking-widest uppercase transition-all shadow-xl shadow-lime-400/10 flex items-center justify-center gap-2"
//                     >
//                       <Send className="w-3.5 h-3.5" /> Transmettre ma configuration
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div 
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12 space-y-4"
//                   >
//                     <div className="w-12 h-12 bg-lime-100 dark:bg-lime-950/50 text-lime-600 dark:text-lime-400 flex items-center justify-center mx-auto rounded-none">
//                       <CheckCircle2 className="w-6 h-6" />
//                     </div>
//                     <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">Données reçues</h4>
//                     <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
//                       Un ingénieur sanitaire Vermine secret vient de prendre en charge votre dossier. Vous allez être contacté sur votre mobile immédiatement.
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER ÉDITORIAL INTÉGRÉ (Rendu architectural) */}
//       <footer className="w-full bg-slate-950 border-t border-slate-900 px-4 sm:px-6 md:px-12 py-12 relative z-10">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
//           {/* Logo gauche */}
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-lime-400 rounded-none flex items-center justify-center">
//               <Shield className="h-4 w-4 text-blue-900"/>
//             </div>
//             <span className="text-md font-black tracking-tight text-white">
//               NEXO<span className="text-lime-500">RA</span>
//             </span>
//           </div>

//           {/* Copyrights & Localisation */}
//           <div className="text-center md:text-right space-y-1">
//             <p className="text-[11px] text-slate-500 font-light">
//               © 2026 VermineSecret Assainissement. Tous droits réservés.
//             </p>
//             <p className="text-[9px] text-slate-600 font-bold tracking-widest uppercase flex items-center justify-center md:justify-end gap-1.5">
//               <Activity className="w-2.5 h-2.5 text-lime-400" /> Normes Environnementales Camerounaises
//             </p>
//           </div>
          
//         </div>
//       </footer>

//     </section>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   Phone, 
  Clock, AlertTriangle,  ArrowRight, MessageSquare, 
  CheckCircle2
} from 'lucide-react';

type FormStatus = 'idle' | 'success';
type UrgencyLevel = 'standard' | 'critical';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
}

export function ContactSection() {
  const [urgency, setUrgency] = useState<UrgencyLevel>('standard');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sector: 'corporate',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Détermination des labels lisibles pour le pôle
    const sectorLabels: Record<string, string> = {
      corporate: "🏢 Bureaux & Banques",
      residential: "🏠 Résidences & Villas",
      industrial: "🏭 Secteur Industriel"
    };

    // 2. Construction du template de message WhatsApp hyper pro
    const WhatsAppNumber = "237690461830";
    const flagUrgency = urgency === 'critical' ? "🚨 *URGENCE CRITIQUE SOS*" : "📅 *DEMANDE D'AUDIT STANDARD*";
    
    const textMessage = 
`${flagUrgency}
-----------------------------------------
👤 *Entité / Nom :* ${formData.name}
✉️ *Email :* ${formData.email}
📞 *Téléphone Direct :* ${formData.phone}
📍 *Secteur :* ${sectorLabels[formData.sector] || formData.sector}

📝 *Description du Problème / Vecteurs :*
"${formData.message}"
-----------------------------------------
📱 _Envoyé depuis le terminal mobile Vermine Secret._`;

    // 3. Encodage URL sécurisé pour la transmission
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WhatsAppNumber}?text=${encodedMessage}`;

    // 4. Déclenchement de l'état de succès local & ouverture de l'application
    setStatus('success');
    
    // Légère latence pour laisser l'animation de succès s'exécuter avant le switch d'app
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="relative min-h-screen py-12 bg-stone-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500 flex items-center">
      
      {/* TRACEURS GRAPHISME DE FOND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <AnimatePresence>
        {urgency === 'critical' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-rose-600 pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* EN-TÊTE MOBILE RESPONSIVE */}
        <div className="text-left max-w-xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-[9px] font-mono font-bold tracking-widest text-slate-900 dark:text-lime-400 uppercase">
            <Clock className="w-3 h-3 text-lime-500" /> Dispatching National H24
          </span>
          <h2 className="text-3xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-tight">
            Déclencher Une <br />
            <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-slate-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
              Intervention Live
            </span>
          </h2>
        </div>

        {/* COMPOSANT CENTRAL UNIQUE BLINDÉ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-xl lg:max-w-6xl mx-auto items-stretch">
          
          {/* ZONE COMMUTATEUR D'URGENCE & DIRECTORY */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-900 p-5 sm:p-6">
            <div className="space-y-4">
              
              {/* ACCORDION D'URGENCE MOBILE */}
              <div className="p-1 bg-stone-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`py-2.5 text-[10px] font-black uppercase tracking-wider transition-all rounded-none ${
                    urgency === 'standard'
                      ? 'bg-slate-950 text-white dark:bg-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Audit Classique
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('critical')}
                  className={`py-2.5 text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 rounded-none ${
                    urgency === 'critical'
                      ? 'bg-rose-600 text-white font-bold'
                      : 'text-rose-500 bg-rose-500/5'
                  }`}
                >
                  <AlertTriangle className="w-3 h-3 animate-bounce" /> Urgence SOS
                </button>
              </div>

              {/* MESSAGE CONTEXTUEL DE SÉCURITÉ */}
              <div className="min-h-[60px] flex flex-col justify-center border-l-2 pl-3 text-left ${urgency === 'critical' ? 'border-rose-500' : 'border-lime-400'}">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {urgency === 'standard' 
                    ? "Planification d'inspections préventives HACCP sous 24h à 48h." 
                    : "Infestation active identifiée. Priorisation immédiate du protocole sur l'axe Douala/Yaoundé."}
                </p>
              </div>
            </div>

            {/* QUICK CALL LINK DIRECT (PARFAIT SUR SMARTPHONE) */}
            <a 
              href="tel:+237690461830" 
              className="flex items-center justify-between p-3.5 bg-stone-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-950 dark:bg-slate-900 text-white">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-widest font-bold text-slate-400 block">Standard Téléphonique</span>
                  <span className="text-xs font-mono font-bold text-slate-950 dark:text-white">+237 690 461 830</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* COLONNE DU FORMULAIRE ROUTÉ VERS WHATSAPP */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-5 sm:p-6 relative">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // SUCCESS STATE DESIGN
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white dark:bg-slate-900 z-20 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { type: 'spring', delay: 0.1 } }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-lime-500 mb-4" />
                  </motion.div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-slate-950 dark:text-white mb-1">
                    Redirection WhatsApp En Cours
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light max-w-xs mb-4 leading-relaxed">
                    Si l'application ne s'ouvre pas automatiquement, cliquez sur le bouton de secours ci-dessous pour valider le rapport.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-500 text-[9px] font-mono uppercase tracking-widest hover:bg-stone-50 dark:hover:bg-slate-950"
                  >
                    Nouveau Formulaire
                  </button>
                </motion.div>
              ) : (
                // FORMULAIRE INTERACTIF
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Nom complet / Structure</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="ex: Hôtel Sawa / Direction" 
                      className="w-full bg-stone-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Adresse Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contact@hotel.cm" 
                        className="w-full bg-stone-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Téléphone de Rappel</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="ex: 690461830" 
                        className="w-full bg-stone-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Secteur Référent</label>
                    <select 
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none appearance-none cursor-pointer"
                    >
                      <option value="corporate">Entreprises & Complexes de Bureaux</option>
                      <option value="residential">Résidences, Villas & Appartements</option>
                      <option value="industrial">Usines, Agro-Alimentaire & Logistique</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Message descriptif des nuisibles</label>
                    <textarea 
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Indiquez ici le type de nuisibles (rongeurs, insectes...) observés ou le diagnostic requis..."
                      className="w-full bg-stone-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none resize-none"
                    />
                  </div>

                  {/* BOUTON D'ENVOI DIRECT DE L'APPLI VERS WHATSAPP */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`w-full py-3.5 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-none ${
                        urgency === 'critical'
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-slate-950 text-white dark:bg-lime-400 dark:text-slate-950 hover:bg-lime-500'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span>Générer & Transmettre via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}