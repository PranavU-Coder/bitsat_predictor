import Plot from "react-plotly.js"
import {useState} from "react";
import { PlotParams } from "@/lib/utils";

const PILANI = 0, GOA = 1, HYDERABAD = 2;
const BEST = 0, AVG = 1, WORST = 2;

function GraphPlot(){
    
    const [graph, setGraph] = useState<PlotParams>({});
    const [formData, setForm] = useState({"campus":PILANI, "scenario":BEST});

    async function loadData() {
        const url = `http://localhost:8000/graph?campus=${formData.campus}&scenario=${formData.scenario}`
        await fetch(url)
        .then(res => res.json())
        .then(data => setGraph(data));
    }

    return(
        <>
            <h1 className="text-center text-3xl">Plot Trends</h1>
            <div className="h-[500px] w-[500px] pt-2 p-4 mb-4 text-center">
                <form>
                    <select onChange={(e)=>{setForm({...formData, "campus": Number(e.target.value)})}} className="m-2 p-2 text-center w-[200px] rounded-md cursor-pointer">
                        <option value={PILANI}>Pilani</option>
                        <option value={GOA}>Goa</option>
                        <option value={HYDERABAD}>Hyderabad</option>
                    </select>   
                    <select onChange={(e)=>{setForm({...formData, "scenario": Number(e.target.value)})}} className="m-2 p-2 text-center w-[200px] rounded-md cursor-pointer">
                        <option value={BEST}>Best Case</option>
                        <option value={AVG}>Average Case</option>
                        <option value={WORST}>Worst Case</option>
                    </select>
                    <br/>
                    <button type="button" onClick={loadData} className="m-2 cursor-pointer">Submit</button>  
                </form>
                <Plot
                    data = {graph.data}
                    layout = {graph.layout}
                    config = {{responsive : true}}
                    style = {{width:"100%", height:"100%"}}
                />
            </div>
        </>
    )
}

export default GraphPlot
