import Plot from "react-plotly.js"
import {useState} from "react";
import { PlotParams } from "@/lib/utils";
import DynamicDropdownForm from "./Dropdown";

const PILANI = 0, GOA = 1, HYDERABAD = 2;

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

function GraphPlot(){
    
    const [graph, setGraph] = useState<PlotParams>({});
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [formData, setForm] = useState({ "campus":PILANI });

    async function loadData() {
        const url = `http://localhost:8000/graph?campus=${formData.campus}`
        await fetch(url)
        .then(res => res.json())
        .then(data => setGraph(data));
        setIsLoaded(true);
    }

    return(
        <>
            <h1 className="text-center text-3xl mb-5">Plot Trends</h1>
            <div className="h-[500px] w-[800px] pt-2 p-4 mb-4 text-center">
                <div>
                    <p>Select Campus: </p>
                    {/* <select onChange={(e)=>{setForm({"campus": Number(e.target.value)})}} className="m-2 p-2 text-center w-[200px] rounded-md cursor-pointer">
                        <option value={PILANI} className="m-1">Pilani</option>
                        <option value={GOA} className="m-1">Goa</option>
                        <option value={HYDERABAD} className="m-1">Hyderabad</option>
                    </select>  */}
                    <DynamicDropdownForm
                        configs={formConfig}
                        formData={formData}
                        setForm={setForm}
                        handleSubmit={loadData}
                    />
                    {/* <br/>
                    <button type="button" onClick={loadData} className={submitButtonStyle}>Submit</button>   */}
                </div>
                {isLoaded && <Plot
                    data = {graph.data}
                    layout = {{...graph.layout, dragmode: false, plot_bgcolor: "#030712", paper_bgcolor: "#030712"}}
                    config = {{responsive : false, displayModeBar: false, scrollZoom: false}}
                    style = {{width:"100%", height:"100%"}}
                />}
            </div>
        </>
    )
}

export default GraphPlot
