import { useState } from "react";
import DynamicDropdownForm from "./Dropdown";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import { useTheme } from "@/lib/themeContext";

// Define locally if imported one causes issues, but try to use import first if possible.
// Actually, to be safe and avoid "Module not found" if utils is missing, I'll define a minimal interface or use any.
interface PlotParams {
  data?: any[];
  layout?: any;
}

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
  const { theme } = useTheme();
  const [graph, setGraph] = useState<PlotParams>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [formData, setForm] = useState<{ campus: number; [key: string]: any }>({
    campus: PILANI,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    setLoading(true);
    setError(null);
    setIsLoaded(false);

    const url = `${import.meta.env.VITE_API_URL}/graph?campus=${formData.campus}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setGraph(data);
      setIsLoaded(true);
    } catch (err) {
      console.error("Failed to load Plot. Error: ", err);
      setError("Failed to load graph data.");
    } finally {
      setLoading(false);
    }
  }

  // Determine Plotly colors based on theme
  const bgColor = theme === "dark" ? "#0a0a0a" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridColor = theme === "dark" ? "#333333" : "#e0e0e0";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* SELECTION PANEL - NO BORDER/SHADOW per instructions */}
      <div className="bg-[var(--brutal-bg-secondary)] p-6 mb-8 text-center">
        <h2 className="brutal-heading-md mb-6">PLOT TRENDS</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold uppercase">Select Campus To Visualize:</p>
          <div className="w-full max-w-md">
            <DynamicDropdownForm
              configs={formConfig}
              formData={formData}
              setForm={setForm}
              handleSubmit={loadData}
            />
          </div>
        </div>
        {loading && (
          <p className="mt-4 font-bold animate-pulse">GENERATING PLOT...</p>
        )}
        {error && (
          <p className="mt-4 text-[var(--brutal-accent)] font-bold">{error}</p>
        )}
      </div>

      {/* PLOT CONTAINER - BRUTAL BOX */}
      {isLoaded && graph.data && (
        <div className="brutal-box p-4 bg-[var(--brutal-bg)]">
          <div className="w-full h-[500px] relative">
            <Plot
              data={graph.data.map((trace: any) => ({
                ...trace,
                line: { ...trace.line, width: 3 }, // Thicker lines for brutalist feel
                marker: {
                  ...trace.marker,
                  size: 8,
                  line: { width: 1, color: textColor },
                },
              }))}
              layout={{
                ...graph.layout,
                dragmode: false,
                plot_bgcolor: bgColor,
                paper_bgcolor: bgColor,
                font: {
                  family: '"Space Mono", monospace',
                  color: textColor,
                  size: 12,
                },
                xaxis: {
                  ...graph.layout?.xaxis,
                  gridcolor: gridColor,
                  zerolinecolor: gridColor,
                  tickfont: {
                    family: '"Space Mono", monospace',
                    color: textColor,
                  },
                  title: {
                    text: "Year",
                    font: {
                      family: '"JetBrains Mono", monospace',
                      size: 14,
                      color: textColor,
                    },
                  },
                },
                yaxis: {
                  ...graph.layout?.yaxis,
                  gridcolor: gridColor,
                  zerolinecolor: gridColor,
                  tickfont: {
                    family: '"Space Mono", monospace',
                    color: textColor,
                  },
                  title: {
                    text: "Cutoff Score",
                    font: {
                      family: '"JetBrains Mono", monospace',
                      size: 14,
                      color: textColor,
                    },
                  },
                },
                legend: {
                  ...graph.layout?.legend,
                  font: { family: '"Space Mono", monospace', color: textColor },
                  bgcolor: bgColor,
                  bordercolor: textColor,
                  borderwidth: 2,
                },
                margin: { l: 60, r: 20, t: 40, b: 60 },
                autosize: true,
              }}
              config={{
                responsive: true,
                displayModeBar: false,
                scrollZoom: false,
              }}
              style={{ width: "100%", height: "100%" }}
              useResizeHandler={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GraphPlot;
