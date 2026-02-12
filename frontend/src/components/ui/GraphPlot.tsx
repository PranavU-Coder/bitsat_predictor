import { useState } from "react";
import { PlotParams } from "@/lib/utils";
import DynamicDropdownForm from "./Dropdown";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

const PILANI = 0,
  GOA = 1,
  HYDERABAD = 2;

const formConfig = [
  {
    key: "campus",
    placeholder: "Select Campus",
    options: [
      { label: "Pilani", value: PILANI },
      { label: "Goa", value: GOA },
      { label: "Hyderabad", value: HYDERABAD },
    ],
  },
] as const;

function GraphPlot() {
  const [graph, setGraph] = useState<PlotParams>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [formData, setForm] = useState({ campus: PILANI });

  async function loadData() {
    const url = `${import.meta.env.VITE_API_URL}/graph?campus=${formData.campus}`;
    await fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setGraph(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load Plot. Error: ", err);
      });
  }

  return (
    <>
      <h1 className="text-center text-3xl mb-5">Plot Trends</h1>
      <div className="h-[500px] w-[800px] pt-2 p-4 mb-4 text-center">
        <div>
          <p>Select Campus: </p>
          <DynamicDropdownForm
            configs={formConfig}
            formData={formData}
            setForm={setForm}
            handleSubmit={loadData}
          />
        </div>
        {isLoaded && (
          <Plot
            data={graph.data}
            layout={{
              ...graph.layout,
              dragmode: false,
              plot_bgcolor: "#030712",
              paper_bgcolor: "#030712",
            }}
            config={{
              responsive: false,
              displayModeBar: false,
              scrollZoom: false,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </>
  );
}

export default GraphPlot;
