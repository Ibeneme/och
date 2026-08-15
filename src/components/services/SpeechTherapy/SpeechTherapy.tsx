
import {
    MessageSquare,
    Utensils,
    Brain,
    Lightbulb,
    BookOpen,
    Phone,
  
  } from "lucide-react";
  
  export default function SpeechTherapyComponent() {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-slate-800">
        {/* ===== Hero Section ===== */}
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=2000&q=80"
              alt="Speech therapist assisting a patient with communication exercises at home"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F59E0B] font-medium text-xs tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Active Clinical Discipline
              </div>
              <div className="text-xs text-slate-300 mb-3 font-medium">
                JACOP Healthcare Services, Inc., serving clients since 2010, is
                now doing business as One Community Home Health[cite: 1].
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Speech Therapy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Care at Home
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Expert clinical support to improve communication clarity, rebuild
                cognitive skills, and ensure safe swallowing and nutrition in the
                comfort of home.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation-form"
                  className="px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-bold rounded-xl transition-all text-sm"
                >
                  Request Care & Consultation
                </a>
                <a
                  href="tel:9723251598"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all text-sm backdrop-blur-sm flex items-center gap-2"
                >
                  <Phone size={16} /> Call (972) 325-1598
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* ===== Overview Section ===== */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                    Communication & Swallowing Care
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                    Enhancing Connection, Safety, and Daily Understanding
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our licensed speech-language pathologists provide targeted
                    in-home evaluations and therapy programs. We assist patients
                    recovering from stroke, neurological conditions, or surgery by
                    improving verbal expression, cognitive processing, and safe
                    swallowing techniques.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Licensed Speech Pathologists
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Swallowing & Safety Assessments
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Personalized In-Home Sessions
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Family & Caregiver Coaching
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                    alt="Speech therapist engaging with a patient during a home session"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* ===== Core Topics / Services Grid ===== */}
        <section className="py-20 bg-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[#F59E0B] font-semibold tracking-widest uppercase text-xs">
                Specialized Care Areas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2 mb-4">
                Speech Therapy Scope of Services
              </h2>
              <p className="text-slate-600 text-sm">
                Our comprehensive programs address verbal communication, cognitive
                abilities, and safe dietary execution.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Speech and communication */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Speech & Communication
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exercises to improve articulation, vocal clarity, and verbal
                    expression for confident conversations.
                  </p>
                </div>
              </div>
  
              {/* 2. Swallowing difficulties */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Utensils size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Swallowing Difficulties
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clinical evaluations and training (dysphagia therapy) to
                    ensure safe eating, drinking, and nutrition.
                  </p>
                </div>
              </div>
  
              {/* 3. Cognitive-communication skills */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Cognitive-Communication Skills
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Techniques to strengthen attention, reasoning, executive
                    function, and social interaction skills.
                  </p>
                </div>
              </div>
  
              {/* 4. Memory and problem-solving support */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Memory & Problem-Solving Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategies and practical mental exercises to assist with daily
                    recall, planning, and organization.
                  </p>
                </div>
              </div>
  
              {/* 5. Patient and caregiver education */}
              <div className="bg-white p-6 rounded-3xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-base">
                    Patient & Caregiver Education
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guiding families and patients through personalized home
                    communication techniques, diet modifications, and safety tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  