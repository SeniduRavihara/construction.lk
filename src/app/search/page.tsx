import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";

const results = [
  {
    name: "Apex Construction Materials",
    rating: "4.8",
    reviews: 32,
    tags: ["#Cement", "#Steel", "#HeavyEquipment", "#ArchitecturalServices"],
  },
  {
    name: "Global Builders Solutions",
    rating: "4.8",
    reviews: 32,
    tags: ["#Cement", "#Steel", "#HeavyEquipment"],
  },
  {
    name: "Heavy Machinery Lanka",
    rating: "4.7",
    reviews: 28,
    tags: ["#Machinery", "#Rentals", "#Maintenance"],
  },
  {
    name: "Construction Sales Hub",
    rating: "4.6",
    reviews: 40,
    tags: ["#BulkOrders", "#Materials", "#Logistics"],
  },
];

const brands = ["Caterpillar Excavators", "Sika Waterproofing Solutions"];

export default function SearchPage() {
  return (
    <SiteFrame active="search">
      <div className="bg-[#f5f6f8] py-9">
        <div className="shell-container">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>›</span>
            <span>Search Results</span>
            <span>›</span>
            <span className="font-semibold text-secondary">Construction</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <aside className="space-y-5 lg:col-span-3">
              <div className="rounded-xl border border-line bg-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-secondary">Filters</h2>
                  <button type="button" className="text-xs font-semibold text-primary">
                    Clear all
                  </button>
                </div>

                <div className="space-y-5 text-sm">
                  <section>
                    <h3 className="mb-3 font-bold text-secondary">Location</h3>
                    <input
                      aria-label="location"
                      className="w-full rounded-md border border-line bg-muted px-3 py-2 text-sm outline-none"
                      placeholder="Search location"
                    />
                  </section>
                  <section className="border-y border-line py-5">
                    <h3 className="mb-3 font-bold text-secondary">Business Type</h3>
                    <div className="space-y-3 text-slate-600">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" /> Supplier
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" /> Contractor
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" /> Service Provider
                      </label>
                    </div>
                  </section>
                  <section className="flex items-center justify-between">
                    <h3 className="font-bold text-secondary">Verified Only</h3>
                    <button type="button" className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      ON
                    </button>
                  </section>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-6">
              <div className="mb-5 flex items-center justify-between">
                <h1 className="display-font text-3xl text-secondary">Construction Search Results</h1>
                <p className="text-sm text-slate-500">Sort by: Relevance</p>
              </div>

              <div className="space-y-4">
                {results.map((result) => (
                  <article key={result.name} className="rounded-xl border border-line bg-card p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="h-[8.5rem] w-full rounded-lg bg-[linear-gradient(145deg,#dbeafe,#e2e8f0)] sm:h-auto sm:w-40" />
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                          <h2 className="text-lg font-bold text-secondary">{result.name}</h2>
                          <p className="text-sm text-slate-500">
                            {result.rating} ({result.reviews} reviews)
                          </p>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {result.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-muted px-2 py-1 text-[11px] font-semibold text-slate-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mb-4 text-xs leading-5 text-slate-500">
                          Trusted supplier for large-scale projects, ready to support urgent procurement cycles.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                          <button type="button" className="rounded-md border border-line px-3 py-2 text-secondary">
                            Call
                          </button>
                          <button type="button" className="rounded-md bg-primary px-3 py-2 text-white">
                            Enquiry
                          </button>
                          <button type="button" className="rounded-md bg-secondary px-3 py-2 text-white">
                            Chat
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center gap-2 text-sm">
                <button type="button" className="h-8 w-8 rounded-md bg-secondary font-semibold text-white">
                  1
                </button>
                <button type="button" className="h-8 w-8 rounded-md border border-line bg-white">
                  2
                </button>
                <button type="button" className="h-8 w-8 rounded-md border border-line bg-white">
                  3
                </button>
              </div>
            </main>

            <aside className="space-y-6 lg:col-span-3">
              <h2 className="text-lg font-bold text-secondary">Recommended Brands</h2>
              {brands.map((brand) => (
                <article key={brand} className="overflow-hidden rounded-xl border border-line bg-card">
                  <div className="h-32 bg-[linear-gradient(135deg,#fde68a,#fcd34d)]" />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-secondary">{brand}</h3>
                    <p className="mt-1 text-xs text-slate-500">Popular among commercial and infrastructure projects.</p>
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}
