import GraphPlot from "./components/ui/GraphPlot";
import PredictTable from "./components/ui/PredictTable";

function Home() {
  return (
    <main className="brutal-grid-bg min-h-screen relative overflow-hidden">
      {/* Hero / Intro */}
      <div className="brutal-container py-20 relative z-10">
        <div className="brutal-box p-8 md:p-16 mb-20 bg-[var(--brutal-bg)] relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-[var(--brutal-accent)]"></div>
          <h1 className="brutal-heading-xl mb-6 brutal-animate-up brutal-stagger-1">
            PREDICT <span className="text-[var(--brutal-accent)]">YOUR</span>{" "}
            FUTURE
          </h1>
          <p className="brutal-text-lg max-w-2xl mb-8 brutal-animate-up brutal-stagger-2">
            Advanced BITSAT branch prediction based on historical cutoffs. No
            fluff. Just data.
          </p>
          <div className="brutal-corner brutal-corner-br"></div>
        </div>

        {/* Prediction Section */}
        <section className="mb-24 relative">
          <div className="absolute -left-10 top-20 hidden xl:block">
            <div className="brutal-cross rotate-45"></div>
          </div>

          <div className="flex flex-col gap-16">
            <div className="brutal-animate-up brutal-stagger-3">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-4 h-4 bg-[var(--brutal-accent)]"></div>
                <h2 className="brutal-heading-lg">Calculator</h2>
              </div>
              <PredictTable />
            </div>

            <div className="brutal-line brutal-line-accent my-8"></div>

            <div className="brutal-animate-up brutal-stagger-4">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-4 h-4 bg-[var(--brutal-accent)]"></div>
                <h2 className="brutal-heading-lg">Trends</h2>
              </div>
              <GraphPlot />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
