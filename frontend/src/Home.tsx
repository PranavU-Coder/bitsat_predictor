import GraphPlot from "./components/ui/GraphPlot";
import PredictTable from "./components/ui/PredictTable";

function Home() {
  return (
    <main className="min-h-screen h-fit flex flex-col gap-20 items-center px-8 pt-24">
      <div className="mt-10 mb-8">
        <PredictTable />
      </div>
      <div className="mt-10 mb-8">
        <GraphPlot />
      </div>
    </main>
  );
}

export default Home;
