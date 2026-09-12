import Image from "next/image";

// ── EDIT CEPAT: ganti kontak di sini ──────────────────────────────
const CONTACT = {
  email: "candra.darisman@email.com",
  phone: "+62 851-5911-9090",
  location: "Bandung, Jawa Barat, Indonesia",
  linkedin: "https://www.linkedin.com/in/candra-darisman/",
};
const CV_ID = "/Candra-Darisman-CV-ID.pdf";
const CV_EN = "/Candra-Darisman-CV-EN.pdf";
// ─────────────────────────────────────────────────────────────────

const NAV = [
  { href: "#beranda", label: "Beranda" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
];

const COMPETENCIES: { title: string; items: string[] }[] = [
  {
    title: "Manajemen & Perencanaan",
    items: [
      "Production Planning & Inventory Control (PPIC)",
      "Inventory Control",
      "Material Planning & Monitoring",
    ],
  },
  {
    title: "Koordinasi Proyek",
    items: [
      "Project Planning & Coordination",
      "Project Target Mapping",
      "Customer & Vendor Coordination",
    ],
  },
  {
    title: "Operasional Teknikal",
    items: [
      "Technical Operations",
      "Electrical & Industrial Automation",
      "PLC, SCADA & Electropneumatic",
    ],
  },
  {
    title: "Sistem & Administrasi",
    items: [
      "Sales Order (SO) Verification",
      "ERP / NEO",
      "Warehouse Management",
    ],
  },
];

const EXPERIENCE: {
  company: string;
  role: string;
  period: string;
  points: string[];
}[] = [
  {
    company: "PT HARIFF DTE",
    role: "Staff Project Support",
    period: "2022 – 2024",
    points: [
      "Mendukung aktivitas proyek dan koordinasi operasional.",
      "Mendukung aktivitas kontrol inventaris di seluruh pelanggan/proyek.",
      "Memantau Sales Order (SO) terhadap target material dan pengiriman material.",
      "Verifikasi preliminary Sales Order (new & revised SO).",
    ],
  },
  {
    company: "PT HARIFF DTE",
    role: "Project Coordinator — Telkomsel Regional Bali–Nusra",
    period: "2022 – 2023",
    points: [
      "Mengoordinasikan proyek rectifier battery Telkomsel.",
      "Mengelola izin kerja teknisi dan vendor.",
      "Memantau aktivitas instalasi, swap, upgrade, dan ATP di lokasi.",
    ],
  },
  {
    company: "PT HARIFF DTE",
    role: "Project Coordinator — Telkomsel Regional Kalimantan",
    period: "2016 – 2022",
    points: [
      "Mengoordinasikan proyek rectifier battery Telkomsel di wilayah Kalimantan.",
      "Memetakan target proyek dan berkoordinasi dengan pelanggan serta vendor.",
      "Mengoordinasikan penutupan proyek dan penyerahan dokumentasi ATP.",
    ],
  },
  {
    company: "PT HARIFF DTE",
    role: "Leader / Coordinator / Technician",
    period: "2013 – 2016",
    points: [
      "Tanggung jawab progresif dalam operasional teknis, aktivitas lapangan, dan eksekusi proyek.",
    ],
  },
  {
    company: "PT DHANAR MAS CONCERN",
    role: "Staff Electrical",
    period: "2012 – 2013",
    points: ["Bekerja dalam operasional teknikal dan kelistrikan."],
  },
];

const CERTS = [
  "Supply Chain Management (2025)",
  "Re-Training Warehouse Management (2025)",
  "ERP NEO Implementation (2024)",
  "ISO 9001, 14001, 45001, 19001 Awareness (2023)",
  "Basic First Aid (2024)",
];

export default function Home() {
  return (
    <>
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#beranda" className="text-sm font-bold tracking-widest text-[#16294d]">
            my Portfolio
          </a>
          <nav aria-label="Navigasi utama" className="flex items-center gap-1 overflow-x-auto">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-[#16294d]"
              >
                {n.label}
              </a>
            ))}
            <details className="relative ml-2 hidden shrink-0 sm:block">
              <summary className="cursor-pointer whitespace-nowrap rounded-full bg-[#16294d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0f1e3a] [&::-webkit-details-marker]:hidden">
                Unduh Resume ▾
              </summary>
              <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <a
                  href={CV_ID}
                  download
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                >
                  Indonesia (PDF)
                </a>
                <a
                  href={CV_EN}
                  download
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                >
                  English (PDF)
                </a>
              </div>
            </details>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* ── 3.1 Hero ── */}
        <section id="beranda" aria-labelledby="hero-heading" className="grid gap-10 py-14 sm:py-20 md:grid-cols-[280px_1fr] md:items-center">
          <div className="mx-auto">
            <div className="relative flex h-60 w-48 items-center justify-center overflow-hidden rounded-2xl bg-[#16294d] text-5xl font-bold text-white shadow-lg sm:h-72 sm:w-56">
              <span aria-hidden="true">CD</span>
              <Image
                src="/foto-candra.jpg"
                alt="Foto profesional Candra Darisman"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              PPIC • Project Support • Project Coordinator
            </p>
            <h1 id="hero-heading" className="mt-2 text-4xl font-extrabold tracking-tight text-[#16294d] sm:text-5xl">
              CANDRA DARISMAN
            </h1>
            <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
              PPIC, Production Planning &amp; Inventory Control, Project Support, dan Project
              Coordinator — juga: Supply Chain, Operations, Warehouse Management.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
              Karir progresif di bidang operasional teknis, koordinasi proyek, dan kontrol
              inventaris. Mendukung inventory control, project target mapping, monitoring
              material, verifikasi Sales Order, dan koordinasi tim deployment untuk proyek
              Telkomsel regional Sumatera, Kalimantan, dan Bali–Nusra.
            </p>
            <div className="no-print mt-6 flex flex-wrap gap-3">
              <a
                href={CV_ID}
                download
                className="rounded-full bg-[#16294d] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0f1e3a]"
              >
                Resume Indonesia
              </a>
              <a
                href={CV_EN}
                download
                className="rounded-full border border-[#16294d] px-6 py-3 text-sm font-semibold text-[#16294d] hover:bg-slate-100"
              >
                English Resume
              </a>
              <a
                href="#kontak"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </section>

        {/* ── 3.2 Core Competencies ── */}
        <section id="keahlian" aria-labelledby="skills-heading" className="border-t border-slate-200 py-14">
          <h2 id="skills-heading" className="text-2xl font-bold text-[#16294d]">
            Core Competencies
          </h2>
          <p className="mt-1 text-sm text-slate-500">Keahlian utama — mudah dipindai HRD.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {COMPETENCIES.map((c) => (
              <article key={c.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#16294d]">
                  {c.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16294d]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3.3 Experience ── */}
        <section id="pengalaman" aria-labelledby="exp-heading" className="border-t border-slate-200 py-14">
          <h2 id="exp-heading" className="text-2xl font-bold text-[#16294d]">
            Professional Experience
          </h2>
          <p className="mt-1 text-sm text-slate-500">12+ tahun pengalaman progresif.</p>
          <ol className="mt-8 space-y-8 border-l-2 border-slate-200 pl-6">
            {EXPERIENCE.map((e) => (
              <li key={`${e.role}-${e.period}`} className="relative">
                <span aria-hidden="true" className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#16294d] ring-4 ring-slate-100" />
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {e.period} • {e.company}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{e.role}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 3.4 Education & Certifications ── */}
        <section id="pendidikan" aria-labelledby="edu-heading" className="border-t border-slate-200 py-14">
          <h2 id="edu-heading" className="text-2xl font-bold text-[#16294d]">
            Education &amp; Certifications
          </h2>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">SMKN 4 BANDUNG</h3>
            <p className="mt-1 text-sm text-slate-600">
              Industrial Automation Engineering — Teknik Otomasi Industri (2010 – 2012)
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <div key={c} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                {c}
              </div>
            ))}
          </div>
        </section>

        {/* ── Kontak ── */}
        <section id="kontak" aria-labelledby="contact-heading" className="border-t border-slate-200 py-14">
          <h2 id="contact-heading" className="text-2xl font-bold text-[#16294d]">
            Kontak
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            HRD / Recruiter dapat menghubungi langsung atau mengunduh resume.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#16294d] p-6 text-white">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-white/60">Email</dt>
                  <dd>
                    <a href={`mailto:${CONTACT.email}`} className="font-semibold underline underline-offset-4">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/60">Telepon / WA</dt>
                  <dd className="font-semibold">{CONTACT.phone}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Lokasi</dt>
                  <dd className="font-semibold">{CONTACT.location}</dd>
                </div>
              </dl>
              <div className="no-print mt-5 flex flex-wrap gap-3">
                <a href={CV_ID} download className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#16294d] hover:bg-slate-100">
                  Resume ID
                </a>
                <a href={CV_EN} download className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                  Resume EN
                </a>
                <a href={`mailto:${CONTACT.email}`} className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                  Kirim Email
                </a>
              </div>
            </div>
            <form
              className="rounded-xl border border-slate-200 p-6"
              action={`mailto:${CONTACT.email}`}
              method="post"
              encType="text/plain"
            >
              <label htmlFor="pesan" className="text-sm font-semibold text-slate-700">
                Pesan singkat untuk kandidat
              </label>
              <textarea
                id="pesan"
                name="body"
                rows={5}
                required
                placeholder="Halo Pak Candra, kami dari HRD … ingin menjadwalkan interview untuk posisi PPIC…"
                className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-[#16294d] focus:outline-none"
              />
              <button type="submit" className="no-print mt-3 w-full rounded-full bg-[#16294d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0f1e3a]">
                Hubungi Saya
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Candra Darisman — PPIC • Supply Chain • Operations</p>
          <nav aria-label="Navigasi footer" className="flex gap-4">
            <a href="#beranda" className="hover:text-[#16294d]">Beranda</a>
            <a href={CV_ID} download className="hover:text-[#16294d]">Resume ID</a>
            <a href={CV_EN} download className="hover:text-[#16294d]">Resume EN</a>
            <a href="#kontak" className="hover:text-[#16294d]">Kontak</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
