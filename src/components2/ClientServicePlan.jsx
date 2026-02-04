import React, { useState } from 'react';
import logo from '../assets/Picture1.png';

const ClientServicePlan = () => {
    const [formData, setFormData] = useState({
        header: {
            name: '', telephone: '', address: '', city: '', age: '',
            diagnoses: '', directions: ''
        },
        goals: {
            maintainIndependence: false,
            properNutrition: false,
            personalHygiene: false,
            other: false,
            otherText: ''
        },
        functionalLimitations: {
            unsteadyGait: false, hoh: false, impairedSpeech: false,
            rlWeakness: false, decreasedSensory: false, cognitive: false,
            incontinence: false, other: false, otherText: ''
        },
        equipment: '',
        frequencyDuration: '',
        services: {
            pc: false, cs: false, nursing: false
        },
        tasks: {
            bath: false, oralCare: false, dressing: false, toileting: false, hairCare: false, grooming: false,
            assistAmbulation: false, assistTransfer: false, position: false, positionHrs: '',
            observeSkin: false, assistFeeding: false, mealPrep: false, medicationReminder: false,
            pickUpPrescriptions: false, groceryShopping: false, cleanClientRoom: false,
            laundry: false, vacuum: false, sweepMop: false, removeTrash: false, washDishes: false,
            billPaying: false, other: false
        },
        diet: '',
        specialInstructions: '',
        additionalTasks: {
            dust: false, cleanKitchen: false, accompanyMD: false, watchfulOversight: false,
            cleanBathroom: false, incontinenceCare: false, vitalSigns: false, bloodSugar: false
        },
        signatures: [
            { lDate: '', rSig: '' },
            { lDate: '', rSig: '' },
            { lDate: '', rSig: '' },
            { lDate: '', rSig: '' }
        ]
    });

    const updateState = (path, value) => {
        setFormData(prev => {
            const newState = { ...prev };
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newState;
        });
    };

    const handleInput = (path) => (e) => updateState(path, e.target.value);
    const handleCheckbox = (path) => (e) => updateState(path, e.target.checked);

    const handleSignature = (index, field, value) => {
        setFormData(prev => {
            const newSignatures = [...prev.signatures];
            newSignatures[index] = { ...newSignatures[index], [field]: value };
            return { ...prev, signatures: newSignatures };
        });
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
            const index = inputs.indexOf(e.target);
            if (index > -1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    };

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
                            <input type="text" value={formData.header.name} onChange={handleInput(['header', 'name'])} onKeyDown={handleEnter} className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1">Telephone:</span>
                            <input type="tel" value={formData.header.telephone} onChange={handleInput(['header', 'telephone'])} onKeyDown={handleEnter} className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 2: Address / City / Age */}
                    <div className="flex border-b border-black">
                        <div className="w-[40%] border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1">Address:</span>
                            <input type="text" value={formData.header.address} onChange={handleInput(['header', 'address'])} onKeyDown={handleEnter} className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-[40%] border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1">City:</span>
                            <input type="text" value={formData.header.city} onChange={handleInput(['header', 'city'])} onKeyDown={handleEnter} className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="w-[20%] p-1 flex items-center">
                            <span className="font-bold mr-1">Age:</span>
                            <input type="text" value={formData.header.age} onChange={handleInput(['header', 'age'])} onKeyDown={handleEnter} className="bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 3: Client Diagnoses */}
                    <div className="border-b border-black p-1 flex flex-col min-h-[50px]">
                        <span className="font-bold">Client Diagnoses:</span>
                        <textarea value={formData.header.diagnoses} onChange={handleInput(['header', 'diagnoses'])} onKeyDown={handleEnter} className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                    </div>

                    {/* Row 4: Client Goals / Directions */}
                    <div className="flex border-b border-black min-h-[100px]">
                        <div className="w-1/2 border-r border-black p-1">
                            <span className="font-bold block mb-1">Client Goals:</span>
                            <div className="flex flex-col gap-1">
                                <label className="flex items-start gap-1"><input type="checkbox" checked={formData.goals.maintainIndependence} onChange={handleCheckbox(['goals', 'maintainIndependence'])} className="mt-0.5" /> <span>Maintain optimal level of independence</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" checked={formData.goals.properNutrition} onChange={handleCheckbox(['goals', 'properNutrition'])} className="mt-0.5" /> <span>Proper Nutrition</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" checked={formData.goals.personalHygiene} onChange={handleCheckbox(['goals', 'personalHygiene'])} className="mt-0.5" /> <span>Personal Hygiene</span></label>
                                <label className="flex items-start gap-1"><input type="checkbox" checked={formData.goals.other} onChange={handleCheckbox(['goals', 'other'])} className="mt-0.5" /> <span>Other:</span> <input type="text" value={formData.goals.otherText} onChange={handleInput(['goals', 'otherText'])} onKeyDown={handleEnter} className="border-b border-black outline-none min-w-0 w-12" /></label>
                            </div>
                        </div>
                        <div className="w-1/2 p-1 flex flex-col">
                            <span className="font-bold">Directions to Home:</span>
                            <textarea value={formData.header.directions} onChange={handleInput(['header', 'directions'])} onKeyDown={handleEnter} className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                    </div>

                    {/* Row 5: Functional Limitations */}
                    <div className="border-b border-black p-1">
                        <span className="font-bold mr-2">Functional Limitations:</span>
                        <div className="inline-flex flex-wrap gap-x-3 gap-y-1">
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.unsteadyGait} onChange={handleCheckbox(['functionalLimitations', 'unsteadyGait'])} /> Unsteady gait</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.hoh} onChange={handleCheckbox(['functionalLimitations', 'hoh'])} /> HOH</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.impairedSpeech} onChange={handleCheckbox(['functionalLimitations', 'impairedSpeech'])} /> Impaired Speech</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.rlWeakness} onChange={handleCheckbox(['functionalLimitations', 'rlWeakness'])} /> R/L sided weakness</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.decreasedSensory} onChange={handleCheckbox(['functionalLimitations', 'decreasedSensory'])} /> Decreased Sensory</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.cognitive} onChange={handleCheckbox(['functionalLimitations', 'cognitive'])} /> Cognitive</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.incontinence} onChange={handleCheckbox(['functionalLimitations', 'incontinence'])} /> Incontinence</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.functionalLimitations.other} onChange={handleCheckbox(['functionalLimitations', 'other'])} /> Other: <input type="text" value={formData.functionalLimitations.otherText} onChange={handleInput(['functionalLimitations', 'otherText'])} onKeyDown={handleEnter} className="border-b border-black outline-none w-12 min-w-0" /></label>
                        </div>
                    </div>

                    {/* Row 6: Equipment / Discharge Plans */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 border-r border-black p-1 flex flex-col">
                            <span className="font-bold">Equipment:</span>
                            <textarea value={formData.equipment} onChange={handleInput(['equipment'])} onKeyDown={handleEnter} className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none h-6 md:h-auto"></textarea>
                        </div>
                        <div className="w-1/2 p-1 flex flex-col">
                            <span className="font-bold">Discharge Plans: Until Services Are No Longer Needed</span>
                        </div>
                    </div>

                    {/* Row 7: Frequency / Services */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-2">Frequency and Duration of Services:</span>
                            <input type="text" value={formData.frequencyDuration} onChange={handleInput(['frequencyDuration'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center justify-around">
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.pc} onChange={handleCheckbox(['services', 'pc'])} /> PC</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.cs} onChange={handleCheckbox(['services', 'cs'])} /> C/S</label>
                            <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.nursing} onChange={handleCheckbox(['services', 'nursing'])} /> Nursing</label>
                        </div>
                    </div>

                    {/* Main Tasks Section */}
                    <div className="flex border-b border-black">
                        {/* Left Column: Tasks */}
                        <div className="w-1/2 border-r border-black">
                            <div className="p-1 font-bold border-b border-black">Tasks to be Performed:</div>
                            <div className="p-1 flex flex-col gap-0.5">
                                {[
                                    { label: "Bath", key: "bath" }, { label: "Oral Care", key: "oralCare" }, { label: "Dressing", key: "dressing" },
                                    { label: "Toileting", key: "toileting" }, { label: "Hair Care", key: "hairCare" }, { label: "Grooming", key: "grooming" },
                                    { label: "Assist with ambulation", key: "assistAmbulation" }, { label: "Assist with transfer", key: "assistTransfer" },
                                    { label: "Position q ______ hrs", key: "position" },
                                    { label: "Observe Skin", key: "observeSkin" }, { label: "Assist with feeding", key: "assistFeeding" },
                                    { label: "Meal Prep", key: "mealPrep" }, { label: "Medication Reminder", key: "medicationReminder" },
                                    { label: "Pick up prescriptions", key: "pickUpPrescriptions" }, { label: "Grocery shopping/Errands", key: "groceryShopping" },
                                    { label: "Clean client room/area", key: "cleanClientRoom" }, { label: "Laundry/Change Linen", key: "laundry" },
                                    { label: "Vacuum", key: "vacuum" }, { label: "Sweep/Mop", key: "sweepMop" }, { label: "Remove Trash", key: "removeTrash" },
                                    { label: "Wash Dishes", key: "washDishes" }, { label: "Bill Paying", key: "billPaying" }, { label: "Other:", key: "other" }
                                ].map((task, i) => (
                                    <label key={i} className="flex items-center gap-1 text-[9px] md:text-xs border-b border-black last:border-0 py-0.5">
                                        <input type="checkbox" checked={formData.tasks[task.key]} onChange={handleCheckbox(['tasks', task.key])} />
                                        {task.label.includes("Position q") ? (
                                            <span>Position q <input type="text" value={formData.tasks.positionHrs} onChange={handleInput(['tasks', 'positionHrs'])} className="border-b border-black w-6 outline-none text-center" /> hrs</span>
                                        ) : (
                                            <span>{task.label}</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                            <div className="p-1 border-t border-black font-bold flex items-center">
                                DIET: <input type="text" value={formData.diet} onChange={handleInput(['diet'])} onKeyDown={handleEnter} className="flex-grow ml-2 outline-none min-w-0" />
                            </div>
                        </div>

                        {/* Right Column: Special Instructions + More Tasks */}
                        <div className="w-1/2 flex flex-col">
                            <div className="p-1 font-bold border-b border-black bg-white">Special Instructions:</div>
                            <div className="p-2 border-b border-black h-[250px]">
                                <textarea value={formData.specialInstructions} onChange={handleInput(['specialInstructions'])} className="w-full h-full border-2 border-green-500 p-1 resize-none outline-none min-w-0"></textarea>
                            </div>
                            <div className="flex-grow p-1 flex flex-col gap-0.5">
                                {[
                                    { label: "Dust", key: "dust" }, { label: "Clean kitchen", key: "cleanKitchen" },
                                    { label: "Accompany to MD appointment", key: "accompanyMD" }, { label: "Provide watchful oversight", key: "watchfulOversight" },
                                    { label: "Clean Bathroom", key: "cleanBathroom" }, { label: "Incontinence Care", key: "incontinenceCare" },
                                    { label: "Vital Signs (Range):", key: "vitalSigns" }, { label: "Blood Sugar (Range):", key: "bloodSugar" }
                                ].map((task, i) => (
                                    <label key={i} className="flex items-center gap-1 text-[9px] md:text-xs border-b border-black last:border-0 py-0.5">
                                        <input type="checkbox" checked={formData.additionalTasks[task.key]} onChange={handleCheckbox(['additionalTasks', task.key])} /> {task.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Signatures */}
                    {["Initial Plan Date:", "Update Plan:", "Update Plan:", "Update Plan:"].map((label, i) => (
                        <div key={i} className={`flex ${i !== 3 ? 'border-b border-black' : ''}`}>
                            <div className="w-[40%] border-r border-black p-1 flex items-center">
                                <span className="font-bold mr-1">{label}</span>
                                <input
                                    type={label.includes("Date") ? "date" : "text"}
                                    value={formData.signatures[i].lDate}
                                    onChange={(e) => handleSignature(i, 'lDate', e.target.value)}
                                    className="flex-grow outline-none bg-transparent min-w-0"
                                />
                            </div>
                            <div className="w-[60%] p-1 flex items-center">
                                <span className="font-bold mr-1">Signature:</span>
                                <input
                                    type="text"
                                    value={formData.signatures[i].rSig}
                                    onChange={(e) => handleSignature(i, 'rSig', e.target.value)}
                                    className="flex-grow outline-none bg-transparent min-w-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center p-4">
                    <button
                        onClick={() => console.log(formData)}
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                    >
                        Log Data
                    </button>
                </div>

            </div>
        </div>
    );
};
export default ClientServicePlan;
