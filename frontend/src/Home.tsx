// import { useState, useEffect } from "react";
// import {Frown, HeartCrack} from "lucide-react"
import GraphPlot from "./components/ui/GraphPlot";
import PredictTable from "./components/ui/PredictTable";

// const InputStates = {
//     VALID: 0,
//     INVALID: 1,
//     LOW: 2,
//     HIGH: 3
// } as const;

// type InputState = typeof InputStates[keyof typeof InputStates];

// interface Data {
//     campus: string;
//     branch: string;
//     marks: number;
//     year: number;
// }

function Home() {
    // const [input, setInput] = useState("");
    // const [data, setData] = useState<Data[]>([]);
    // const [inputValidity, setInputValidity] = useState<InputState>(InputStates.VALID);
    // const [result, setResult] = useState<Data[]>([]);

//     useEffect(() => {
//         fetch("/most_likely_case.csv")
//         .then((res) => res.text())
//         .then((text) => {
//             console.log(text);
//             const rows = text.trim().split("\n").slice(1);

//             const parsed = rows.map((row) => {
//                 const [campus, branch, marks, year] = row.split(",")
//                 return {
//                         campus: campus.trim(),
//                         branch: branch.trim(),
//                         marks: parseInt(marks.trim()),
//                         year: parseInt(year.trim()),
//                     };
//             });
//             console.log(parsed);
//             parsed.sort((a, b) => b.marks - a.marks);
//             setData(parsed);
//       })
//   } , []);

//     const handlePredict = () => {
//         const score = Number(input);

//         if (isNaN(score) || score < 0) {    
//             setInputValidity(InputStates.INVALID);
//             return;
//         }

//         if(score > 426){
//             setInputValidity(InputStates.HIGH);
//             return;
//         }

//         const matches = data.filter((row) => score >= row.marks);

//         if (matches.length === 0) {
//             setInputValidity(InputStates.LOW);
//         } 
//         else {
//             setInputValidity(InputStates.VALID);
//             setResult(matches);
//         }
//     };

    return (
    <main className="min-h-screen h-fit flex flex-col items-center px-8 pt-24">
        {/* <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl text-blue-100 mb-6 font-mono font-semibold text-center">
                    Enter Score
                </h2>

                <input 
                    type="number" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg text-black mb-4" 
                    placeholder="Score"
                />

                <button 
                    onClick={handlePredict} 
                    className="w-full px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition font-bold"
                >
                    Predict
                </button>
                
                <div className="mt-6 text-blue-200 text-lg space-y-2 text-center overflow-y-auto max-h-[400px]">
                    {(()=>{
                            switch(inputValidity){
                                case InputStates.VALID:
                                    return (
                                        <>
                                            {result.map((item, index) => (
                                                <p key={index} className="py-1">
                                                    {item.branch} - {item.campus}
                                                </p>
                                            ))}
                                        </>
                                    )
                                case InputStates.INVALID:
                                    return (<p>Enter a valid positive score.</p>)
                                case InputStates.HIGH:
                                    return (<p>Max Score attainable is 426.</p>)
                                case InputStates.LOW:
                                    return (<p className="flex justify-center items-center gap-2">Score too low for any branch <Frown/></p>)
                                default:
                                    return (<p className="flex justify-center items-center gap-2">Dawg how did you even reach here? <HeartCrack/></p>)
                            }
                    })()}
                </div>
            </div> */}
            <br/>
            <div className="mt-10 mb-8">
                <PredictTable/>
            </div>
            <div className="mt-10 mb-8">
                <GraphPlot/>
            </div>
        </main>
    );
}

export default Home;
