import { SiteFrame } from "@/components/site-frame";

const gallery = ["Hero", "Facilities", "Machinery", "Team", "Warehouse", "Projects"];

const serviceTags = [
  "Concrete Supply",
  "Earthmoving",
  "Steel Fabrication",
  "Project Management",
  "Civil Engineering",
  "Heavy Machinery Rental",
];

const reviews = [
  "Apex is reliable and delivers on time. Excellent collaboration.",
  "Professional team and very responsive through procurement cycles.",
];

export default function ProfilePage() {
  return (
    <SiteFrame active="profile">
      <section className="grid h-[360px] grid-cols-1 gap-1 md:grid-cols-3">
        <div className="bg-[linear-gradient(140deg,#c7d2fe,#93c5fd)]" />
        <div className="bg-[linear-gradient(140deg,#bae6fd,#67e8f9)]" />
        <div className="bg-[linear-gradient(140deg,#fbcfe8,#fda4af)]" />
      </section>

      <div className="shell-container -mt-10 pb-14">
        <section className="rounded-xl border border-line bg-card p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-orange-600 text-3xl font-bold text-white">A</div>
              <div>
                <h1 className="display-font text-3xl text-secondary">Apex Construction Solutions</h1>
                <p className="mt-1 text-sm text-slate-500">B2B Construction Company</p>
                <p className="mt-2 text-sm font-semibold text-secondary">4.8 rating · 512 reviews</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
                WhatsApp
              </button>
              <button type="button" className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white">
                Enquiry
              </button>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-7 lg:grid-cols-12">
          <main className="space-y-12 lg:col-span-8">
            <section>
              <div className="mb-5 flex flex-wrap gap-3 border-b border-line pb-3 text-sm font-semibold text-slate-500">
                <span className="border-b-2 border-primary pb-2 text-primary">Gallery</span>
                <span>Information</span>
                <span>Services</span>
                <span>Reviews</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {gallery.map((image) => (
                  <article key={image} className="h-44 rounded-xl border border-line bg-[linear-gradient(140deg,#e2e8f0,#cbd5e1)] p-3">
                    <span className="rounded bg-white/70 px-2 py-1 text-xs font-semibold text-slate-700">{image}</span>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="display-font mb-4 text-2xl text-secondary">Products and Services</h2>
              <div className="flex flex-wrap gap-2">
                {serviceTags.map((service) => (
                  <span key={service} className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-slate-700">
                    {service}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="display-font text-2xl text-secondary">User Reviews</h2>
                <p className="text-sm font-semibold text-secondary">4.8 / 5</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review) => (
                  <article key={review} className="rounded-xl border border-line bg-[#fbfcfd] p-5">
                    <p className="text-sm leading-6 text-slate-600">&quot;{review}&quot;</p>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="space-y-6 lg:col-span-4">
            <section className="overflow-hidden rounded-xl border border-line bg-card">
              <div className="border-b border-line bg-[#f8f9fb] p-6 text-center">
                <div className="mx-auto h-[7.5rem] w-[7.5rem] rounded-lg bg-[linear-gradient(140deg,#e2e8f0,#94a3b8)]" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Scan to view profile</p>
              </div>
              <div className="space-y-4 p-6 text-sm text-slate-700">
                <p>123 Builder&apos;s Way, Industrial Zone, Colombo</p>
                <p>+94 77 123 4567</p>
                <p>contact@apexconstruction.com</p>
              </div>
            </section>

            <section className="rounded-xl border border-line bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">Lead Generation</h3>
              <form className="space-y-3">
                <input className="w-full rounded-md border border-line bg-muted px-3 py-2 text-sm outline-none" placeholder="Your Name" />
                <input className="w-full rounded-md border border-line bg-muted px-3 py-2 text-sm outline-none" placeholder="Mobile Number" />
                <textarea className="min-h-28 w-full rounded-md border border-line bg-muted px-3 py-2 text-sm outline-none" placeholder="Message" />
                <button type="button" className="w-full rounded-md bg-secondary py-2 text-sm font-semibold text-white">
                  Send Enquiry
                </button>
              </form>
            </section>
          </aside>
        </div>
      </div>
    </SiteFrame>
  );
}
