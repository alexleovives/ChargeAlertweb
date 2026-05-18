/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Bell, 
  Zap, 
  Smartphone, 
  Volume2, 
  History, 
  ShieldCheck, 
  Palette, 
  Leaf, 
  Download, 
  Shield, 
  Instagram,
  ChevronRight,
  Menu,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

import logo from "./assets/images/app_logo_final_1779034097413.png";
import mockup from "./assets/images/hero_mockup_final_1779034117087.png";
import screenHistory from "./assets/images/screen_history_gen_1779032823659.png";
import screenVib from "./assets/images/screen_vibration_gen_1779032863975.png";
import screenAlerts from "./assets/images/screen_alerts_gen_1779032807410.png";
import screenDash from "./assets/images/screen_dash_gen_1779032784623.png";
import screenConfig from "./assets/images/screen_settings_gen_1779032844686.png";

const IMAGE_URLS = {
  LOGO: logo,
  MOCKUP: mockup,
  SCREEN_HISTORY: screenHistory,
  SCREEN_ALERTS_VIB: screenVib,
  SCREEN_ALERTS_SOUND: screenAlerts,
  SCREEN_DASH: screenDash,
  SCREEN_CONFIG: screenConfig
};

const navLinks = [
  { name: "Características", href: "#features" },
  { name: "Capturas", href: "#screenshots" },
  { name: "Protección", href: "#info" },
];

const features = [
  { icon: Bell, title: "Alertas inteligentes", desc: "Notificaciones en tiempo real cuando el nivel de carga alcanza tu límite ideal." },
  { icon: Zap, title: "Carga rápida", desc: "Identifica instantáneamente si tu cargador está entregando la potencia máxima." },
  { icon: Smartphone, title: "Vibración", desc: "Patrones de vibración háptica personalizables para cada tipo de alerta de energía." },
  { icon: Volume2, title: "Sonidos", desc: "Biblioteca de sonidos futuristas para avisarte sin necesidad de mirar la pantalla." },
  { icon: History, title: "Historial", desc: "Visualiza métricas detalladas de tus ciclos de carga diarios y semanales." },
  { icon: ShieldCheck, title: "Protección", desc: "Algoritmos avanzados que previenen el sobrecalentamiento y la degradación." },
  { icon: Palette, title: "Diseño OLED", desc: "Interfaz optimizada para pantallas oscuras que ahorra energía mientras la usas." },
  { icon: Leaf, title: "Eficiencia", desc: "Consumo de recursos en segundo plano prácticamente nulo para tu CPU." }
];

const screenshots = [
  { url: IMAGE_URLS.SCREEN_DASH, title: "Panel de Control" },
  { url: IMAGE_URLS.SCREEN_ALERTS_SOUND, title: "Configurar Alertas" },
  { url: IMAGE_URLS.SCREEN_ALERTS_VIB, title: "Pruebas de Vibración" },
  { url: IMAGE_URLS.SCREEN_HISTORY, title: "Historial y Salud" },
  { url: IMAGE_URLS.SCREEN_CONFIG, title: "Ajustes de Sistema" }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-primary">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src={IMAGE_URLS.LOGO} 
              alt="ChargeAlert" 
              className="w-10 h-10 drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]"
            />
            <span className="text-2xl font-black text-primary tracking-tighter text-glow font-display">ChargeAlert</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="https://alexleovives.itch.io/chargealert" target="_blank" rel="noopener noreferrer" className="button-primary text-sm py-2">Descargar APK</a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-surface py-4 px-6 border-b border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-on-surface hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://alexleovives.itch.io/chargealert" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="button-primary text-center">Descargar APK</a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Tecnología de Vanguardia</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Protege tu batería <span className="text-primary text-glow">inteligentemente</span>.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                ChargeAlert monitorea cada ciclo de energía para extender la vida útil de tu hardware con alertas precisas y un diseño futurista optimizado para Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://alexleovives.itch.io/chargealert" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-primary flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Itch.io
                </a>
                <a 
                  href="https://www.mediafire.com/file/8kgst7mtwyklr4m/ChargeAlert+v1.1.apk/file" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-secondary flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  MediaFire (APK)
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center perspective-[1000px]"
            >
              <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img 
                src={IMAGE_URLS.MOCKUP} 
                alt="App Interface" 
                className="w-full max-w-[450px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter transition-all duration-700 hover:brightness-110" 
              />
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-surface-container-lowest/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              Potencia en cada línea
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant max-w-2xl mx-auto text-lg"
            >
              Funciones avanzadas diseñadas para el usuario que exige control total sobre su hardware y energía.
            </motion.p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Screenshots Gallery */}
        <section id="screenshots" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Interfaz Galáctica</h2>
              <p className="text-on-surface-variant">Explora la experiencia de usuario premium optimizada para tu día a día.</p>
            </motion.div>
          </div>

            <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-4 md:gap-6 overflow-x-auto px-6 pb-12 scroll-hide snap-x snap-mandatory"
          >
            {screenshots.map((screen, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, x: 50 },
                  show: { opacity: 1, scale: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="min-w-[140px] md:min-w-[180px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 glow-cyan/5 shrink-0 snap-center"
              >
                <div className="relative group">
                  <img 
                    src={screen.url} 
                    alt={screen.title} 
                    className="w-full object-cover object-top aspect-square" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-tighter">{screen.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Information / Science */}
        <section id="info" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 rounded-[3rem] relative overflow-hidden group border-primary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Ciencia detrás de la energía</h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                ChargeAlert es una herramienta inteligente diseñada para maximizar la vida útil de la batería de tu dispositivo Android mediante el monitoreo de los ciclos de carga y alertas en tiempo real.
              </p>
              <p>
                Al mantener tu batería entre el <span className="text-primary font-bold">20% y el 80%</span>, puedes duplicar su longevidad. Nuestra aplicación te ayuda a lograr este equilibrio perfecto sin esfuerzo.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Android Nativo</h3>
                <p className="text-on-surface-variant">Optimizado específicamente para el kernel de dispositivos Android modernos, asegurando lecturas precisas de hardware.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Privacidad Total</h3>
                <p className="text-on-surface-variant">Tus datos de carga nunca salen de tu dispositivo. Sin trackers, sin anuncios, sin compromisos.</p>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Call to action */}
        <section id="download" className="py-24 px-6 text-center">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="max-w-4xl mx-auto glass-card p-16 md:p-24 rounded-[3rem] border-primary/20 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">¿Listo para mejorar tu batería?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">
              Únete a miles de usuarios que ya están protegiendo su inversión con la herramienta de gestión de carga más avanzada.
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href="https://alexleovives.itch.io/chargealert" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-primary py-5 px-12 text-lg flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <ExternalLink className="w-6 h-6" />
                  Descargar en Itch.io
                </a>
                <a 
                  href="https://www.mediafire.com/file/8kgst7mtwyklr4m/ChargeAlert+v1.1.apk/file" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-secondary py-5 px-12 text-lg flex items-center justify-center gap-3 w-full sm:w-auto bg-white/5"
                >
                  <Download className="w-6 h-6" />
                  Descargar APK (MediaFire)
                </a>
              </div>
              <div className="text-xs font-bold text-on-surface-variant/50 flex gap-4 uppercase tracking-widest">
                <span>v2.4.0</span>
                <span>•</span>
                <span>Android 8.0+</span>
                <span>•</span>
                <span>12MB</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-20 pb-10 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-xs">
            <div className="flex items-center gap-3">
              <img src={IMAGE_URLS.LOGO} alt="ChargeAlert" className="w-8 h-8" />
              <span className="text-xl font-black text-primary font-display">ChargeAlert</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Maximiza el rendimiento de tu energía con elegancia y precisión técnica. Desarrollado para Android.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">App</h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Funciones</a></li>
                <li><a href="#screenshots" className="hover:text-primary transition-colors">Capturas</a></li>
                <li><a href="#download" className="hover:text-primary transition-colors">Descargar</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Social</h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>
                  <a href="https://instagram.com/alexleovives" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                    @alexleovives
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-10">
          <p className="text-sm text-on-surface-variant/60">
            © {new Date().getFullYear()} ChargeAlert. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant/80">
            <span>Desarrollado por</span>
            <span className="text-primary font-bold text-glow">Viveros Alex</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
