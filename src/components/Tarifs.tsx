'use client';

import React, { useState, useMemo, useCallback } from "react";
import {
  Bug,
  Rat,
  Bed,
  Home,
  Building2,
  Store,
  Ruler,
  Clock,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";

interface Pest {
  id: string;
  label: string;
  icon: React.ElementType;
  color: keyof typeof COLOR_MAP;
}

interface PropertyType {
  id: string;
  label: string;
  icon: React.ElementType;
  options: string[];
}

interface PricingCard {
  label: string;
  price: number;
  duration: number;
  warranty: string;
}

const COLOR_MAP = {
  amber: { ring: "ring-amber-500", bg: "bg-amber-500", text: "text-amber-900", soft: "bg-amber-50", border: "border-amber-200" },
  sky: { ring: "ring-sky-500", bg: "bg-sky-500", text: "text-sky-900", soft: "bg-sky-50", border: "border-sky-200" },
  stone: { ring: "ring-stone-500", bg: "bg-stone-500", text: "text-stone-900", soft: "bg-stone-50", border: "border-stone-200" },
  lime: { ring: "ring-lime-500", bg: "bg-lime-500", text: "text-lime-900", soft: "bg-lime-50", border: "border-lime-200" },
  rose: { ring: "ring-rose-500", bg: "bg-rose-500", text: "text-rose-900", soft: "bg-rose-50", border: "border-rose-200" },
} as const;

const PESTS: Pest[] = [
  { id: "cafards", label: "Cafards", icon: Bug, color: "amber" },
  { id: "moustiques", label: "Moustiques", icon: Bug, color: "sky" },
  { id: "rats", label: "Rats & Souris", icon: Rat, color: "stone" },
  { id: "fourmis", label: "Fourmis", icon: Bug, color: "lime" },
  { id: "punaises", label: "Punaises de lit", icon: Bed, color: "rose" },
];

const PROPERTY_TYPES: PropertyType[] = [
  { id: "appartement", label: "Appartement", icon: Home, options: ["Studio", "T1", "T2", "T3", "T4+", "T5+"] },
  { id: "maison", label: "Maison", icon: Building2, options: ["1 chambre", "2 chambres", "3 chambres", "4+ chambres", "Villa"] },
  { id: "commerce", label: "Commerce", icon: Store, options: ["Boutique", "Bureau", "Restaurant", "Hôtel", "Entrepôt", "Local"] },
  { id: "surface", label: "Surface seule", icon: Ruler, options: ["0–50 m²", "51–100 m²", "101–200 m²", "201–400 m²", "400+ m²"] },
];

function calculatePrice(pestIdx: number, sizeIdx: number): PricingCard {
  const basePrice = 15000 + pestIdx * 8000;           // Prix de base adapté Cameroun
  const price = basePrice + sizeIdx * 12000;
  const duration = 45 + sizeIdx * 20;
  const warranty = sizeIdx <= 1 ? "3 mois" : sizeIdx <= 3 ? "6 mois" : "12 mois";

  return {
    label: PROPERTY_TYPES[0].options[sizeIdx] || "Standard",
    price: Math.round(price),
    duration,
    warranty,
  };
}

export default function TarifsProfessionnel() {
  const [selectedPestIdx, setSelectedPestIdx] = useState(0);
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [reserved, setReserved] = useState<(PricingCard & { pest: string; type: string }) | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectedPest = PESTS[selectedPestIdx];
  const selectedType = PROPERTY_TYPES[selectedTypeIdx];
  const colors = COLOR_MAP[selectedPest.color];

  const pricingCards = useMemo(() => {
    return selectedType.options.map((_, i) => ({
      ...calculatePrice(selectedPestIdx, i),
      label: selectedType.options[i],
    }));
  }, [selectedPestIdx, selectedTypeIdx]);

  const selectedCard = pricingCards[selectedSizeIdx];

  const handleReservation = useCallback(() => {
    setReserved({
      ...selectedCard,
      pest: selectedPest.label,
      type: selectedType.label,
    });
    setShowConfirmation(true);
  }, [selectedCard, selectedPest, selectedType]);

  return (
    <div className="min-h-screen bg-[#FAF9F4]  bg-stone-50 dark:bg-slate-950  text-stone-900 pb-24">
      <Navbar />

      <div className="max-w-3xl mt-22  mx-auto px-4 pt-6">
        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white px-4 py-2 rounded-2xl border mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Intervention garantie sous 24h • Satisfaction 100%
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter leading-tight">
            Quel est le prix de<br />
            <span className="text-emerald-600">votre tranquillité ?</span>
          </h1>
          <p className="mt-3 text-stone-600 text-[15px]">
            Estimation instantanée • Aucun engagement
          </p>
        </div>

        {/* Étape 1 : Nuisibles */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="text-sm font-semibold text-stone-500">1. Quel nuisible ?</div>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PESTS.map((pest, idx) => {
              const isActive = idx === selectedPestIdx;
              const Icon = pest.icon;
              return (
                <motion.button
                  key={pest.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPestIdx(idx)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-3xl border-2 transition-all
                    ${isActive
                      ? `${colors.bg} ${colors.text} border-transparent shadow-xl`
                      : "border-stone-200 bg-white hover:border-stone-300"
                    }`}
                >
                  <motion.div
                    animate={isActive ? { scale: 1.1, rotate: 8 } : { scale: 1 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <span className="font-semibold text-sm">{pest.label}</span>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Étape 2 : Type de bien */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="text-sm font-semibold text-stone-500">2. Type de bien</div>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="flex flex-wrap gap-2 bg-stone-100 p-2 rounded-3xl">
            {PROPERTY_TYPES.map((type, idx) => {
              const active = idx === selectedTypeIdx;
              const Icon = type.icon;
              return (
                <motion.button
                  key={type.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedTypeIdx(idx);
                    setSelectedSizeIdx(0);
                  }}
                  className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-medium transition-all
                    ${active ? "bg-white shadow text-stone-900" : "text-stone-600 hover:bg-white/70"}`}
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Étape 3 : Tarifs */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="text-sm font-semibold text-stone-500">3. Taille du bien</div>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {pricingCards.map((card, idx) => {
              const isSelected = idx === selectedSizeIdx;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setSelectedSizeIdx(idx)}
                  className={`group relative rounded-3xl border-2 p-5 cursor-pointer transition-all
                    ${isSelected
                      ? `${colors.border} ${colors.soft} shadow-xl ring-2 ring-offset-2 ${colors.ring}`
                      : "border-stone-200 bg-white hover:border-stone-300"
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-lg">{card.label}</p>
                      <p className="text-3xl font-black tracking-tighter mt-1">
                        {card.price.toLocaleString('fr-FR')} <span className="text-base font-normal">FCFA</span>
                      </p>
                    </div>
                    {isSelected && <CheckCircle className="w-7 h-7 text-emerald-600 mt-1" />}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{card.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{card.warranty}</span>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReservation();
                    }}
                    className="mt-6 w-full bg-stone-900 hover:bg-black text-white py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Réserver
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Barre flottante mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-50 max-w-3xl mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500">Estimation</p>
            <p className="text-2xl font-bold tracking-tighter">
              {selectedCard.price.toLocaleString('fr-FR')} FCFA
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleReservation}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-all"
          >
            Réserver maintenant
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Modal de confirmation */}
      <AnimatePresence>
        {showConfirmation && reserved && (
          <div className="fixed inset-0 bg-black/70 z-[100] flex items-end sm:items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-3xl max-w-md w-full overflow-hidden"
            >
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </motion.div>

                <h3 className="text-2xl font-bold">Demande enregistrée !</h3>
                <p className="mt-2 text-stone-600">
                  {reserved.pest} — {reserved.type} — {reserved.label}
                </p>

                <div className="my-8 p-5 bg-stone-50 rounded-2xl text-left space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Tarif estimé</span>
                    <span className="font-bold text-xl">{reserved.price.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Durée</span>
                    <span>{reserved.duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Garantie</span>
                    <span className="font-medium">{reserved.warranty}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-600 mb-8">
                  Un technicien certifié vous contactera très rapidement.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1 py-4 border border-stone-300 rounded-2xl font-medium"
                  >
                    Fermer
                  </button>
                  <a
                    href="https://wa.me/+237690461830"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-lime-400 hover:bg-lime-300 text-lime-950 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}