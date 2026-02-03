import React from 'react';
import logo from '../assets/Picture1.png';

const ClientServicePlan = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-sm leading-snug">

                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-12 md:h-20 object-contain mb-4" />
                    <h1 className="text-xl md:text-2xl font-bold text-center">Client Service Plan</h1>
                </div>

                <div className="border border-black">
                    {/* Row 1: Name / Telephone */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1">Name:</span>
                            <input type="text" className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1">Telephone:</span>
                            <input type="tel" className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 2: Address / City / Age */}
                    <div className="flex border-b border-black">
                        <div className="w-[40%] border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1">Address:</span>
                            <input type="text" className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-[40%] border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1">City:</span>
                            <input type="text" className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-[20%] p-1 flex items-center">
                            <span className="font-bold mr-1">Age:</span>
                            <input type="text" className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 3: Client Diagnoses */}
                    <div className="border-b border-black p-1 flex flex-col min-h-[50px]">
                        <span className="font-bold">Client Diagnoses:</span>
                        <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                    </div>

                    {/* Row 4: Client Goals / Directions */}
                    <div className="flex border-b border-black min-h-[100px]">
                        <div className="w-1/2 border-r border-black p-1">
                            <span className="font-bold block mb-1">Client Goals:</span>
                            <div className="flex flex-col gap-1">
                                <label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /> <span>Maintain optimal level of independence</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /> <span>Proper Nutrition</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /> <span>Personal Hygiene</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" className="mt-0.5" /> <span>Other:</span> <input type="text" className="border-b border-black outline-none min-w-0 w-12" /></label>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 flex flex-col">
                            <span className="font-bold">Directions to Home:</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                    </div>

                    {/* Row 5: Functional Limitations */}
                    <div className="border-b border-black p-1">
                        <span className="font-bold mr-2">Functional Limitations:</span>
                        <div className="inline-flex flex-wrap gap-x-3 gap-y-1">
                            <label className="flex items-center gap-1"><input type="checkbox" /> Unsteady gait</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> HOH</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Impaired Speech</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> R/L sided weakness</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Decreased Sensory</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Cognitive</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Incontinence</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Other: <input type="text" className="border-b border-black outline-none w-12 min-w-0" /></label>
                        </div>
                    </div>

                    {/* Row 6: Equipment / Discharge Plans */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 border-r border-black p-1 flex flex-col">
                            <span className="font-bold">Equipment:</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none h-6 md:h-auto"></textarea>
                        </div>
                        <div className="w-1/2 p-1 flex flex-col">
                            <span className="font-bold">Discharge Plans: Until Services Are No Longer Needed</span>
                        </div>
                    </div>

                    {/* Row 7: Frequency / Services */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-2">Frequency and Duration of Services:</span>
                            <input type="text" className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center justify-around">
                            <label className="flex items-center gap-1"><input type="checkbox" /> PC</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> C/S</label>
                            <label className="flex items-center gap-1"><input type="checkbox" /> Nursing</label>
                        </div>
                    </div>

                    {/* Main Tasks Section */}
                    <div className="flex border-b border-black">
                        {/* Left Column: Tasks */}
                        <div className="w-1/2 border-r border-black">
                            <div className="p-1 font-bold border-b border-black">Tasks to be Performed:</div>
                            <div className="p-1 flex flex-col gap-0.5">
                                {[
                                    "Bath", "Oral Care", "Dressing", "Toileting", "Hair Care", "Grooming",
                                    "Assist with ambulation", "Assist with transfer", "Position q ______ hrs",
                                    "Observe Skin", "Assist with feeding", "Meal Prep", "Medication Reminder",
                                    "Pick up prescriptions", "Grocery shopping/Errands", "Clean client room/area",
                                    "Laundry/Change Linen", "Vacuum", "Sweep/Mop", "Remove Trash", "Wash Dishes",
                                    "Bill Paying", "Other:"
                                ].map((task, i) => (
                                    <label key={i} className="flex items-center gap-1 text-[9px] md:text-xs border-b border-black last:border-0 py-0.5">
                                        <input type="checkbox" />
                                        {task.includes("Position q") ? (
                                            <span>Position q <input type="text" className="border-b border-black w-6 outline-none text-center" /> hrs</span>
                                        ) : (
                                            <span>{task}</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                            <div className="p-1 border-t border-black font-bold flex items-center">
                                DIET: <input type="text" className="flex-grow ml-2 outline-none min-w-0" />
                            </div>
                        </div>

                        {/* Right Column: Special Instructions + More Tasks */}
                        <div className="w-1/2 flex flex-col">
                            <div className="p-1 font-bold border-b border-black bg-white">Special Instructions:</div>
                            <div className="p-2 border-b border-black h-[250px]">
                                <textarea className="w-full h-full border-2 border-green-500 p-1 resize-none outline-none min-w-0"></textarea>
                            </div>
                            <div className="flex-grow p-1 flex flex-col gap-0.5">
                                {[
                                    "Dust", "Clean kitchen", "Accompany to MD appointment", "Provide watchful oversight",
                                    "Clean Bathroom", "Incontinence Care", "Vital Signs (Range):", "Blood Sugar (Range):"
                                ].map((task, i) => (
                                    <label key={i} className="flex items-center gap-1 text-[9px] md:text-xs border-b border-black last:border-0 py-0.5">
                                        <input type="checkbox" /> {task}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Signatures */}
                    {[
                        { l: "Initial Plan Date:", r: "Signature:" },
                        { l: "Update Plan:", r: "Signature:" },
                        { l: "Update Plan:", r: "Signature:" },
                        { l: "Update Plan:", r: "Signature:" }
                    ].map((row, i) => (
                        <div key={i} className={`flex ${i !== 3 ? 'border-b border-black' : ''}`}>
                            <div className="w-[40%] border-r border-black p-1 flex items-center">
                                <span className="font-bold mr-1">{row.l}</span>
                                <input type={row.l.includes("Date") ? "date" : "text"} className="flex-grow outline-none bg-transparent min-w-0" />
                            </div>
                            <div className="w-[60%] p-1 flex items-center">
                                <span className="font-bold mr-1">{row.r}</span>
                                <input type="text" className="flex-grow outline-none bg-transparent min-w-0" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ClientServicePlan;
