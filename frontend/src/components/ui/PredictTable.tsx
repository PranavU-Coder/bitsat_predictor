import { useState } from "react";

const PILANI = 0, GOA = 1, HYDERABAD = 2;
const BEST = 0, AVG = 1, WORST = 2;

function PredictTable(){
    const [formData, setForm] = useState({"campus":PILANI, "scenario":BEST});
    const [table, setTable] = useState<string[]>([]);

    async function handleSubmit(){
        const url = `http://localhost:8000/table?campus=${formData.campus}&scenario=${formData.scenario}`
        await fetch(url)
        .then(res => res.json())
        .then(data => setTable(data));
    }

    return (
        <>
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
                    <button type="button" onClick={handleSubmit} className="m-2 cursor-pointer">Submit</button>  
            </form>
            <table className={`${table.length==0?"hidden":"block"} w-full border-collapse table-fixed`}>
                <tr className="bg-slate-800 text-slate-200">
                    <th className="px-4 py-3 text-left font-medium">Campus</th>
                    <th className="px-4 py-3 text-left font-medium">Branch</th>
                    <th className="px-4 py-3 text-right font-medium">Marks</th>
                </tr>
                {table.map((e)=>(
                    <tr className="border-b border-slate-700">
                        <td className="px-4 py-3">{e[0]}</td>
                        <td className="px-4 py-3">{e[1]}</td>
                        <td className="px-4 py-3 text-right">{e[2]}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default PredictTable;
