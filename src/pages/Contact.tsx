import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, ShieldAlert, CheckCircle2, 
  Clock, AlertTriangle, Building, ArrowRight, Loader2 
} from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
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
    setFormData(prev => ({ ...prev, name: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulation d'une requête API réseau vers le serveur de messagerie
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500 flex items-center">
      
      {/* TRACEURS TECH ET FLUIDES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {urgency === 'critical' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-rose-600 pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-[10px] font-mono font-bold tracking-widest text-slate-900 dark:text-lime-400 uppercase">
            <Clock className="w-3 h-3 text-lime-500" /> Dispatching National H24
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-none">
            Déclencher Une <br />
            <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-slate-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
              Expertise Environnementale
            </span>
          </h2>
        </div>

        {/* CONTAINER INTERACTIF DOUBLE COLONNE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* COLONNE GAUCHE : INFO DE CONTACT & SWITCHER D'URGENCE */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-900 p-6 sm:p-8 relative">
            <div className="space-y-6">
              
              {/* TOGGLE SÉLECTEUR D'URGENCE CRITIQUE */}
              <div className="p-1.5 bg-stone-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`py-2 text-[11px] font-bold uppercase tracking-wider transition-all rounded-none ${
                    urgency === 'standard'
                      ? 'bg-slate-950 text-white dark:bg-slate-900 shadow-md'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  Audit Classique
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('critical')}
                  className={`py-2 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 rounded-none ${
                    urgency === 'critical'
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20 animate-pulse'
                      : 'text-rose-500/80 hover:text-rose-500 bg-rose-500/5'
                  }`}
                >
                  <AlertTriangle className="w-3 h-3" /> Urgence SOS
                </button>
              </div>

              {/* PANNEAU DINAMIQUE SELON L'URGENCE */}
              <div className="h-28 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {urgency === 'standard' ? (
                    <motion.div
                      key="standard-txt"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-2 text-left"
                    >
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-950 dark:text-white">Planification sous 24h-48h</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                        Pour l'établissement de protocoles de prévention récurrents, d'audits HACCP ou de diagnostics immobiliers pré-achat.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="critical-txt"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-2 text-left"
                    >
                      <h4 className="text-xs font-black uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-rose-500" /> Cellule Crise Active (Douala / Yaoundé)
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-rose-400/70 font-light leading-relaxed">
                        Infestation majeure constatée, fermeture administrative imminente ou rupture de chaîne logistique. Intervention immédiate requise.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BLOCS INFOS RESEAUX CHANNELS */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <a 
                  href="tel:+237600000000" 
                  className={`flex items-center gap-4 p-4 border transition-all text-left ${
                    urgency === 'critical' ? 'border-rose-500/30 bg-rose-500/5' : 'border-slate-100 dark:border-slate-900 bg-stone-50/50 dark:bg-slate-950/40'
                  }`}
                >
                  <div className={`p-2.5 ${urgency === 'critical' ? 'bg-rose-600 text-white' : 'bg-slate-950 text-white dark:bg-slate-900'}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest">Ligne Directe Techniciens</span>
                    <span className={`text-sm font-mono font-bold ${urgency === 'critical' ? 'text-rose-500' : 'text-slate-950 dark:text-white'}`}>+237 6xx xx xx xx</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-900 bg-stone-50/50 dark:bg-slate-950/40 text-left">
                  <div className="p-2.5 bg-slate-950 text-white dark:bg-slate-900">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest">Secrétariat Central</span>
                    <span className="text-sm font-mono font-medium text-slate-950 dark:text-white">contact@verminesecret.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-900 bg-stone-50/50 dark:bg-slate-950/40 text-left">
                  <div className="p-2.5 bg-slate-950 text-white dark:bg-slate-900">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest">Bureaux Généraux</span>
                    <span className="text-sm font-sans font-light text-slate-700 dark:text-slate-300">Akwa — Douala, Cameroun</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-[9px] font-mono text-slate-400 dark:text-slate-600 pt-6 text-left border-t border-slate-100 dark:border-slate-800">
              SECURE CONNECT // END_TO_END ENCRYPTION ACTIVE
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE PRO DE HAUTE PRÉCISION */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-8 relative shadow-xl shadow-black/[0.02]">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // ÉCRAN SUCCÈS IMMERSIF
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white dark:bg-slate-900 z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { type: 'spring', stiffness: 200, delay: 0.1 } }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-lime-500 mb-6" />
                  </motion.div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 dark:text-white mb-2">
                    Alerte Routée avec Succès
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-sm mb-6 leading-relaxed">
                    Vos coordonnées ont été chiffrées et envoyées instantanément sur la tablette de l'ingénieur sanitaire d'astreinte le plus proche de votre zone.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-50 dark:hover:bg-slate-950 transition-colors"
                  >
                    Réinitialiser le terminal
                  </button>
                </motion.div>
              ) : (
                // FORMULAIRE INTERACTIF INTERNE
                <form onSubmit={handleSubmit} className="space-y-5 text-left h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* ENTRÉE : NOM COMPLET */}
                    <div className="space-y-1.5 relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Nom de l'entité / Responsable</label>
                      <input 
                        type="text" 
                        required
                        disabled={status === 'submitting'}
                        placeholder="ex: Groupement Agro-Alimentaire SA" 
                        className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 transition-colors disabled:opacity-50 rounded-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* ENTRÉE : EMAIL */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Adresse Email de liaison</label>
                        <input 
                          type="email" 
                          required
                          disabled={status === 'submitting'}
                          placeholder="responsable@entreprise.cm" 
                          className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 transition-colors disabled:opacity-50 rounded-none"
                        />
                      </div>

                      {/* ENTRÉE : NUMÉRO DE TÉLÉPHONE */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Numéro Téléphonique Direct</label>
                        <input 
                          type="tel" 
                          required
                          disabled={status === 'submitting'}
                          placeholder="+237 6..." 
                          className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 transition-colors disabled:opacity-50 rounded-none"
                        />
                      </div>
                    </div>

                    {/* ENTRÉE : PÔLE SÉLECTIONNÉ DYNAMIQUE */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Secteur Structurel Affecté</label>
                      <div className="relative">
                        <select 
                          disabled={status === 'submitting'}
                          className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 appearance-none cursor-pointer transition-colors disabled:opacity-50 rounded-none"
                        >
                          <option value="corporate">Bureaux, Banques & Établissements Privés</option>
                          <option value="residential">Résidences, Villas & Propriétés individuelles</option>
                          <option value="industrial">Usines, Entrepôts & Stockages Agro-industriels</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <Building className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* ENTRÉE : BRÈVE DESCRIPTION DE L'INFESTATION */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Nature des Vecteurs / Symptômes observés</label>
                      <textarea 
                        rows={4}
                        required
                        disabled={status === 'submitting'}
                        placeholder="Décrivez brièvement la situation pour optimiser la préparation du matériel biocide lors de notre descente..."
                        className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 transition-colors resize-none disabled:opacity-50 rounded-none"
                      />
                    </div>

                  </div>

                  {/* BOUTON DE TRANSMISSION MAÎTRE */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-none ${
                        status === 'submitting'
                          ? 'bg-stone-100 dark:bg-slate-950 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-900'
                          : urgency === 'critical'
                            ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-xl shadow-rose-600/10'
                            : 'bg-slate-950 text-white dark:bg-lime-400 dark:text-slate-950 hover:bg-lime-500'
                      }`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-lime-500" />
                          <span>Transmission sécurisée réseau...</span>
                        </>
                      ) : (
                        <>
                          <span>{urgency === 'critical' ? "Lancer l'alerte d'urgence" : "Soumettre la demande d'intervention"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
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