export default function SkillsSkeleton() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 animate-pulse">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14 space-y-4">
          <div className="mx-auto h-6 w-32 rounded bg-muted" />
          <div className="mx-auto h-10 w-64 rounded bg-muted" />
          <div className="mx-auto h-4 w-96 max-w-full rounded bg-muted" />
        </div>

        {/* ================= FEATURED SKILLS ================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-6 space-y-4"
            >
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <div className="h-4 w-32 rounded bg-muted" />
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-5/6 rounded bg-muted" />
            </div>
          ))}
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="space-y-14">
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-muted" />
                <div className="h-6 w-40 rounded bg-muted" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className="rounded-xl border border-border p-5 space-y-4"
                  >
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <div className="h-4 w-32 rounded bg-muted" />
                        <div className="h-3 w-24 rounded bg-muted" />
                      </div>
                      <div className="h-6 w-10 rounded bg-muted" />
                    </div>

                    <div className="h-2 w-full rounded-full bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 text-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-10 w-16 mx-auto rounded bg-muted" />
              <div className="h-4 w-32 mx-auto rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
