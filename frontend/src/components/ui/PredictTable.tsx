import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gotoButtonStyle } from "@/lib/utils";
import DynamicDropdownForm from "@/components/ui/Dropdown";

const PILANI = 0, GOA = 1, HYDERABAD = 2;
const BEST = 0, AVG = 1, WORST = 2;

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
  {
    key: "scenario",
    placeholder: "Select Scenario",
    options: [
      { label: "Best Case", value: BEST },
      { label: "Average Case", value: AVG },
      { label: "Worst Case", value: WORST },
    ],
  },
] as const;


function PredictTable(){
    const [formData, setForm] = useState({"campus":PILANI, "scenario":BEST});
    const [table, setTable] = useState<string[][]>([[]]);
    const [tableRange, setRange] = useState<number[]>([0, 4]);
    const [activePage, setActivePage] = useState<number>(1)

    async function handleSubmit(){
        const url = `${import.meta.env.VITE_API_URL}/table?campus=${formData.campus}&scenario=${formData.scenario}`
        await fetch(url)
        .then(res => {
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
            return res.json()
        })
        .then(data => {
            setTable(data.length==0? [[]] : data );
            setRange([0,4]);
            setActivePage(1);
        })
        .catch(err => {
            console.error("Failed to load table data. Error: ", err);
        });
    }

    function goNext(){
        setRange([tableRange[0]+5, tableRange[1]+5]);
        setActivePage(activePage+1);
    }

    function goPrev(){
        setRange([tableRange[0]-5, tableRange[1]-(tableRange[1]-tableRange[0]+1)]);
        setActivePage(activePage-1);
    }

    function goToPage(pageNumber: number){
        setRange([pageNumber*5-5, pageNumber*5-1]);
        setActivePage(pageNumber);
    }

    return (
        <>
            <h1 className="text-center text-3xl mb-5">Check Predictions</h1>
            <div className="text-center">
                <div className="flex justify-center gap-5">
                    <p className="w-[180px]">Select Campus: </p>
                    <p className="w-[180px]">Select Case: </p>
                </div>
                <DynamicDropdownForm
                    configs={formConfig}
                    formData={formData}
                    setForm={setForm}
                    handleSubmit={handleSubmit}
                />
            </div>
            {table[0].length>0 && 
                <div>
                    <table className="w-full m-2 mt-4 block border-collapse table-fixed">
                        <thead>
                            <tr className="bg-slate-800 text-slate-200">
                                <th className="px-4 py-3 w-[150px] text-left font-medium">Campus</th>
                                <th className="px-4 py-3 w-[400px] text-left font-medium">Branch</th>
                                <th className="px-4 py-3 text-right font-medium">Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(Array.from({length: tableRange[1]-tableRange[0]+1 }, (_, i)=>i+tableRange[0])).map((e, key)=>(
                                <tr key={key} className="border-b border-slate-700">
                                    <td className="px-4 h-[50px]">{e<table.length?table[e][0]:""}</td>
                                    <td className="px-4 h-[50px]">{e<table.length?table[e][1]:""}</td>
                                    <td className="px-4 text-right h-[50px]">{e<table.length?table[e][2]:""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <button 
                                onClick={goPrev} 
                                disabled={tableRange[0]===0} 
                                className={gotoButtonStyle}>
                                    <ArrowLeft/>
                            </button>
                            <button 
                                onClick={goNext} 
                                disabled={tableRange[1]>=table.length-1} 
                                className={gotoButtonStyle}>
                                    <ArrowRight/>
                            </button>
                        </div>
                        <div>
                            {[1,2,3].map((e, key)=>(
                                <button key={key}
                                    onClick={()=>{goToPage(e)}}
                                    className={`w-[30px] h-[30px] rounded-md mx-1 border-purple-600 transition-opacity border-2 ${e!=activePage?"opacity-40":"bg-purple-600 text-black"}`}>
                                    {e}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PredictTable;
