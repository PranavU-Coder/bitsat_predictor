import useAppSeo from "@/lib/hooks/useAppSeo";

function Working() {
  useAppSeo({
    title: "How It Works",
    description: "Understand the methodology behind the predictions.",
  });

  return (
    <main className="brutal-grid-bg min-h-screen pb-24">
      <div className="brutal-container pt-12 md:pt-24">
        <div className="brutal-box p-8 md:p-12 bg-[var(--brutal-bg)] mb-12">
          <h1 className="brutal-heading-lg mb-8">HOW IT WORKS</h1>

          <div className="space-y-8">
            <section>
              <h2 className="brutal-heading-sm mb-4 flex items-center gap-2">
                <span className="bg-[var(--brutal-accent)] text-white px-2">
                  01
                </span>
                DATA COLLECTION
              </h2>
              <p className="brutal-text">
                We aggregate historical BITSAT cutoff scores from official
                sources and reliable student reports over the past 5 years. This
                data forms the backbone of our analysis.
              </p>
            </section>

            <section>
              <h2 className="brutal-heading-sm mb-4 flex items-center gap-2">
                <span className="bg-[var(--brutal-accent)] text-white px-2">
                  02
                </span>
                THE ALGORITHM
              </h2>
              <p className="brutal-text">
                Our prediction model uses statistical regression to identify
                trends in cutoff scores. We account for factors like paper
                difficulty (normalized) and seat matrix changes.
              </p>
            </section>

            <section>
              <h2 className="brutal-heading-sm mb-4 flex items-center gap-2">
                <span className="bg-[var(--brutal-accent)] text-white px-2">
                  03
                </span>
                SCENARIOS
              </h2>
              <p className="brutal-text">
                We provide three scenarios:{" "}
                <span className="font-bold">Best Case</span>,{" "}
                <span className="font-bold">Average Case</span>, and{" "}
                <span className="font-bold">Worst Case</span>. This gives you a
                realistic range of probabilities rather than a single uncertain
                number.
              </p>
            </section>
          </div>
        </div>

        <div className="brutal-box-sm p-6 bg-[var(--brutal-bg-secondary)] text-center">
          <p className="brutal-text-sm font-bold">
            DISCLAIMER: THESE ARE PREDICTIONS BASED ON PAST TRENDS. ACTUAL
            CUTOFFS MAY VARY.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Working;
