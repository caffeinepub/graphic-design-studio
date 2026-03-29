import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Loader2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiBehance } from "react-icons/si";
import type { Project } from "./backend.d";
import { useGetProjects, useSubmitContact } from "./hooks/useQueries";

const SAMPLE_PROJECTS: Project[] = [
  {
    title: "Nomad Coffee Roasters",
    description:
      "Complete brand identity for a specialty coffee roaster, from logo to packaging.",
    category: "Brand Identity",
    imageUrl: "",
  },
  {
    title: "Apex Sport — Digital Campaign",
    description:
      "Motion-first campaign assets for a global athletic wear launch.",
    category: "Motion Graphics",
    imageUrl: "",
  },
  {
    title: "Lumière Fragrance",
    description:
      "Luxury packaging and print collateral for a Parisian perfume house.",
    category: "Print Design",
    imageUrl: "",
  },
  {
    title: "Forma Architecture Studio",
    description:
      "Award-winning portfolio website and visual identity for an architecture firm.",
    category: "Web Design",
    imageUrl: "",
  },
  {
    title: "Pulse Music Festival",
    description:
      "Event branding, wayfinding, and digital presence for a 3-day festival.",
    category: "Brand Identity",
    imageUrl: "",
  },
];

const PROJECT_GRADIENTS = [
  "from-orange-600 via-amber-500 to-yellow-400",
  "from-indigo-700 via-blue-500 to-cyan-400",
  "from-rose-600 via-pink-500 to-fuchsia-400",
  "from-emerald-600 via-teal-500 to-cyan-400",
  "from-violet-700 via-purple-500 to-pink-400",
];

function HeroArt() {
  return (
    <svg
      viewBox="0 0 900 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-4xl mx-auto"
      role="img"
      aria-label="Abstract geometric composition"
    >
      <rect x="0" y="60" width="80" height="80" fill="#FF6A2B" opacity="0.9" />
      <rect x="88" y="20" width="40" height="40" fill="#FF6A2B" opacity="0.7" />
      <rect x="88" y="68" width="40" height="72" fill="#FF8C55" opacity="0.5" />
      <rect
        x="136"
        y="40"
        width="24"
        height="100"
        fill="#FF6A2B"
        opacity="0.6"
      />
      <rect x="168" y="0" width="60" height="60" fill="#4A6FA5" opacity="0.7" />
      <rect
        x="168"
        y="68"
        width="60"
        height="72"
        fill="#3A5A8A"
        opacity="0.5"
      />
      <rect
        x="236"
        y="30"
        width="30"
        height="110"
        fill="#5B7DBF"
        opacity="0.6"
      />
      <rect
        x="274"
        y="10"
        width="80"
        height="50"
        fill="#4A6FA5"
        opacity="0.4"
      />
      <rect
        x="274"
        y="68"
        width="80"
        height="80"
        fill="#3A5A8A"
        opacity="0.6"
      />
      <rect
        x="362"
        y="0"
        width="176"
        height="140"
        fill="#FF6A2B"
        opacity="0.15"
      />
      <rect
        x="370"
        y="8"
        width="160"
        height="124"
        fill="none"
        stroke="#FF6A2B"
        strokeWidth="2"
        opacity="0.4"
      />
      <rect
        x="400"
        y="30"
        width="100"
        height="80"
        fill="#FF6A2B"
        opacity="0.25"
      />
      <rect
        x="546"
        y="10"
        width="80"
        height="50"
        fill="#4A6FA5"
        opacity="0.4"
      />
      <rect
        x="546"
        y="68"
        width="80"
        height="80"
        fill="#3A5A8A"
        opacity="0.6"
      />
      <rect
        x="634"
        y="30"
        width="30"
        height="110"
        fill="#5B7DBF"
        opacity="0.6"
      />
      <rect x="672" y="0" width="60" height="60" fill="#4A6FA5" opacity="0.7" />
      <rect
        x="672"
        y="68"
        width="60"
        height="72"
        fill="#3A5A8A"
        opacity="0.5"
      />
      <rect
        x="740"
        y="40"
        width="24"
        height="100"
        fill="#FF6A2B"
        opacity="0.6"
      />
      <rect
        x="772"
        y="68"
        width="40"
        height="72"
        fill="#FF8C55"
        opacity="0.5"
      />
      <rect
        x="772"
        y="20"
        width="40"
        height="40"
        fill="#FF6A2B"
        opacity="0.7"
      />
      <rect
        x="820"
        y="60"
        width="80"
        height="80"
        fill="#FF6A2B"
        opacity="0.9"
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
        [160, 200].map((y) => (
          <circle
            key={`dot-${i}-${y}`}
            cx={80 + i * 95}
            cy={y}
            r="2"
            fill="#A7B0B6"
            opacity="0.3"
          />
        )),
      )}
    </svg>
  );
}

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
        role="img"
        aria-label="Brand Identity icon"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Brand Identity",
    description:
      "Logos, visual systems, and brand guidelines that make your company unmistakable in any market.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
        role="img"
        aria-label="Web Design icon"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    ),
    title: "Web Design",
    description:
      "High-performance, pixel-perfect websites that convert visitors into loyal customers.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
        role="img"
        aria-label="Motion Graphics icon"
      >
        <polygon points="5,3 19,12 5,21" />
        <path d="M19 3v18" />
      </svg>
    ),
    title: "Motion Graphics",
    description:
      "Dynamic animations and video content that elevate your brand's storytelling.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
        role="img"
        aria-label="Print Design icon"
      >
        <path d="M6 9V2h12v7" />
        <rect x="2" y="9" width="20" height="10" rx="2" />
        <path d="M6 14h12M6 19v3h12v-3" />
      </svg>
    ),
    title: "Print Design",
    description:
      "Editorial layouts, packaging, and print collateral with meticulous craft and attention to detail.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectDetails: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { data: backendProjects } = useGetProjects();
  const submitContact = useSubmitContact();

  const projects: Project[] =
    backendProjects && backendProjects.length > 0
      ? backendProjects
      : SAMPLE_PROJECTS;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    await submitContact.mutateAsync({ id, ...formState });
    setSubmitted(true);
    setFormState({ name: "", email: "", projectDetails: "", message: "" });
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body">
      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E2326] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-white tracking-widest text-sm uppercase">
            STUDIO FRAME
          </span>

          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="main.nav"
          >
            {["Work", "Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[#A7B0B6] hover:text-white text-sm uppercase tracking-widest transition-colors"
                data-ocid={`nav.${item.toLowerCase()}.link`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="hidden md:block bg-[#FF6A2B] hover:bg-[#e85e23] text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full transition-colors"
              data-ocid="header.start_project.button"
            >
              Start Project
            </button>
            <button
              type="button"
              className="md:hidden text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="header.menu.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden bg-[#1E2326] border-t border-white/10 px-6 py-6 flex flex-col gap-5"
              data-ocid="header.mobile_menu.panel"
            >
              {["Work", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[#A7B0B6] hover:text-white text-sm uppercase tracking-widest text-left transition-colors"
                  data-ocid={`nav.mobile.${item.toLowerCase()}.link`}
                >
                  {item}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="bg-[#FF6A2B] text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full w-fit transition-colors"
                data-ocid="header.mobile_start_project.button"
              >
                Start Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Hero ─── */}
      <section id="about" className="bg-[#1E2326] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FF6A2B] text-xs font-semibold uppercase tracking-[0.2em] mb-6"
          >
            Graphic Design Studio — Est. 2018
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold uppercase text-white leading-none tracking-tight text-4xl sm:text-6xl lg:text-7xl mb-6"
          >
            WE CRAFT
            <br />
            <span className="text-[#FF6A2B]">DISTINCTIVE</span>
            <br />
            DIGITAL IDENTITIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A7B0B6] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            We partner with ambitious brands to create bold visual identities,
            compelling digital experiences, and unforgettable motion content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <button
              type="button"
              onClick={() => scrollTo("work")}
              className="bg-[#FF6A2B] hover:bg-[#e85e23] text-white font-semibold uppercase tracking-widest text-xs px-7 py-3 rounded-full transition-colors"
              data-ocid="hero.view_portfolio.button"
            >
              View Portfolio
            </button>
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="border border-white/30 hover:border-white text-white font-semibold uppercase tracking-widest text-xs px-7 py-3 rounded-full transition-colors"
              data-ocid="hero.our_services.button"
            >
              Our Services
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section id="work" className="bg-[#F3F6F7] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-extrabold uppercase text-[#111417] tracking-tight text-3xl sm:text-4xl">
              FEATURED WORK
            </h2>
            <div className="hidden sm:block w-16 h-px bg-[#111417]/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects[0] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
                data-ocid="work.item.1"
              >
                <div
                  className={`w-full aspect-[4/3] bg-gradient-to-br ${PROJECT_GRADIENTS[0]} rounded-sm overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-white/70 text-xs uppercase tracking-widest">
                      {projects[0].category}
                    </span>
                    <h3 className="font-display font-bold text-white text-xl mt-1">
                      {projects[0].title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#A7B0B6] text-sm mt-3 leading-relaxed">
                  {projects[0].description}
                </p>
              </motion.div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {projects.slice(1, 5).map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer"
                  data-ocid={`work.item.${i + 2}`}
                >
                  <div
                    className={`w-full aspect-square bg-gradient-to-br ${PROJECT_GRADIENTS[(i + 1) % PROJECT_GRADIENTS.length]} rounded-sm overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <p className="text-xs text-[#FF6A2B] uppercase tracking-widest mt-2">
                    {project.category}
                  </p>
                  <h3 className="font-display font-semibold text-[#111417] text-sm mt-0.5 leading-tight">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="border border-[#111417]/30 hover:border-[#111417] text-[#111417] font-semibold uppercase tracking-widest text-xs px-7 py-3 rounded-full transition-colors"
              data-ocid="work.view_all.button"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="bg-[#1E2326] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold uppercase text-white tracking-tight text-3xl sm:text-4xl mb-14">
            SERVICES OFFERED
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="text-[#FF6A2B]">{service.icon}</div>
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-sm">
                  {service.title}
                </h3>
                <p className="text-[#A7B0B6] text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="w-8 h-px bg-[#FF6A2B]/60 mt-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="bg-[#F3F6F7] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold uppercase text-[#111417] tracking-tight text-3xl sm:text-4xl leading-tight"
            >
              CONTACT /<br />
              <span className="text-[#FF6A2B]">LET&apos;S BUILD</span>
              <br />
              SOMETHING
              <br />
              AMAZING
              <br />
              TOGETHER
            </motion.h2>
            <p className="text-[#A7B0B6] text-sm mt-6 leading-relaxed">
              Ready to transform your brand? Tell us about your project and
              we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4 text-center"
                  data-ocid="contact.success_state"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FF6A2B] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      className="w-7 h-7"
                      role="img"
                      aria-label="Success checkmark"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-[#111417] text-xl uppercase tracking-wide">
                    Message Sent!
                  </h3>
                  <p className="text-[#A7B0B6] text-sm">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[#FF6A2B] text-xs uppercase tracking-widest font-semibold hover:underline mt-2"
                    data-ocid="contact.send_another.button"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  data-ocid="contact.form.panel"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-xs uppercase tracking-widest text-[#111417]/60 font-semibold block mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-white border-[#111417]/20 rounded-none focus-visible:ring-[#FF6A2B]"
                      placeholder="Jane Smith"
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs uppercase tracking-widest text-[#111417]/60 font-semibold block mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-white border-[#111417]/20 rounded-none focus-visible:ring-[#FF6A2B]"
                      placeholder="jane@company.com"
                      data-ocid="contact.email.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-project-details"
                      className="text-xs uppercase tracking-widest text-[#111417]/60 font-semibold block mb-1"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="contact-project-details"
                      required
                      value={formState.projectDetails}
                      onChange={(e) =>
                        setFormState((p) => ({
                          ...p,
                          projectDetails: e.target.value,
                        }))
                      }
                      className="bg-white border-[#111417]/20 rounded-none focus-visible:ring-[#FF6A2B] resize-none"
                      rows={2}
                      placeholder="Brief description of your project..."
                      data-ocid="contact.project_details.textarea"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-xs uppercase tracking-widest text-[#111417]/60 font-semibold block mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-white border-[#111417]/20 rounded-none focus-visible:ring-[#FF6A2B] resize-none"
                      rows={3}
                      placeholder="Tell us more about your vision..."
                      data-ocid="contact.message.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="bg-[#FF6A2B] hover:bg-[#e85e23] text-white uppercase tracking-widest text-xs font-semibold rounded-full px-7 py-3 w-fit self-start h-auto"
                    data-ocid="contact.submit.button"
                  >
                    {submitContact.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  {submitContact.isError && (
                    <p
                      className="text-red-500 text-xs"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div
            className="flex flex-col gap-6 justify-center"
            data-ocid="contact.info.panel"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF6A2B] font-semibold mb-1">
                Studio Address
              </p>
              <p className="text-[#111417] text-sm leading-relaxed">
                42 Creative Quarter
                <br />
                London, EC2A 4BT
                <br />
                United Kingdom
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF6A2B] font-semibold mb-1">
                Email
              </p>
              <a
                href="mailto:hello@studioframe.co"
                className="text-[#111417] text-sm hover:text-[#FF6A2B] transition-colors"
              >
                hello@studioframe.co
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF6A2B] font-semibold mb-1">
                Phone
              </p>
              <a
                href="tel:+442071234567"
                className="text-[#111417] text-sm hover:text-[#FF6A2B] transition-colors"
              >
                +44 207 123 4567
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF6A2B] font-semibold mb-2">
                Business Hours
              </p>
              <p className="text-[#A7B0B6] text-sm">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM GMT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1E2326] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div>
              <span className="font-display font-bold text-white tracking-widest text-sm uppercase">
                STUDIO FRAME
              </span>
              <p className="text-[#A7B0B6] text-xs mt-3 leading-relaxed max-w-xs">
                Crafting distinctive visual identities for forward-thinking
                brands since 2018.
              </p>
            </div>
            <nav className="flex flex-col gap-2" data-ocid="footer.nav">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-[#A7B0B6] hover:text-white text-xs uppercase tracking-widest text-left transition-colors w-fit"
                  data-ocid={`footer.${item.toLowerCase()}.link`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7B0B6] hover:text-white transition-colors"
                aria-label="Instagram"
                data-ocid="footer.instagram.link"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7B0B6] hover:text-white transition-colors"
                aria-label="Behance"
                data-ocid="footer.behance.link"
              >
                <SiBehance size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7B0B6] hover:text-white transition-colors"
                aria-label="LinkedIn"
                data-ocid="footer.linkedin.link"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6">
            <p className="text-[#A7B0B6] text-xs">
              © {new Date().getFullYear()} Studio Frame. All rights reserved.
            </p>
            <p className="text-[#A7B0B6] text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
