import React, { useState } from 'react';

const HomeSupervisoryVisitForm = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        date: '',
        services: {
            companionSitter: false,
            personalCare: false,
            skilledNursing: false
        },
        generalCondition: ['', '', ''],
        progressReview: ['', ''],
        problems: ['', ''],
        satisfaction: {
            clientSatisfiedYes: false, clientSatisfiedNo: false,
            appropriatenessYes: false, appropriatenessNo: false,
            clientMFMCYes: false, clientMFMCNo: false
        },
        notes: ['', ''],
        vitals: {
            bp: '', rr: '', temp: '', hr: '', bs: ''
        },
        assessment: {
            respiratory: { wnl: false, rhonchi: false, crackles: false, diminished: false, wheezing: false, rales: false, other: false },
            neurological: { wnl: false, unsteadyGait: false, disoriented: false, confused: false, forgetful: false },
            cardiovascular: { wnl: false, chestPain: false },
            skin: { wnl: false, dry: false, clammy: false, cool: false },
            capRefill: { less3: false, greater3: false },
            wounds: '',
            edema: { pitting: false, plus1: false, plus2: false, plus3: false, plus4: false },
            edemaNotes: ''
        },
        footer: {
            assessorName: '',
            date: ''
        }
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
    const handleArrayInput = (path, index) => (e) => {
        setFormData(prev => {
            const newState = { ...prev };
            const newArray = [...newState[path]];
            newArray[index] = e.target.value;
            newState[path] = newArray;
            return newState;
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

                <h1 className="text-xl md:text-2xl font-bold text-center mb-8">Home Supervisory Visit</h1>

                {/* Header */}
                <div className="flex items-end mb-8">
                    <span className="font-bold mr-2 whitespace-nowrap">Client Name:</span>
                    <input type="text" value={formData.clientName} onChange={handleInput(['clientName'])} onKeyDown={handleEnter} className="flex-grow bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                    <span className="font-bold ml-4 mr-2 whitespace-nowrap">Date:</span>
                    <input type="date" value={formData.date} onChange={handleInput(['date'])} onKeyDown={handleEnter} className="w-24 md:w-32 bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                </div>

                {/* Service Checkboxes */}
                <div className="flex justify-between px-4 md:px-12 mb-8 text-[9px] md:text-sm">
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                        <input type="checkbox" checked={formData.services.companionSitter} onChange={handleCheckbox(['services', 'companionSitter'])} /> Companion Sitter
                    </label>
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                        <input type="checkbox" checked={formData.services.personalCare} onChange={handleCheckbox(['services', 'personalCare'])} /> Personal Care
                    </label>
                    <label className="flex items-center gap-2 font-bold cursor-pointer">
                        <input type="checkbox" checked={formData.services.skilledNursing} onChange={handleCheckbox(['services', 'skilledNursing'])} /> Skilled Nursing Services
                    </label>
                </div>

                {/* Assessment of General Condition */}
                <div className="mb-6 text-[9px] md:text-sm">
                    <div className="flex items-end w-full">
                        <span className="font-bold mr-2 whitespace-nowrap">Assessment of General Condition:</span>
                        <input type="text" value={formData.generalCondition[0]} onChange={handleArrayInput('generalCondition', 0)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                    </div>
                    <input type="text" value={formData.generalCondition[1]} onChange={handleArrayInput('generalCondition', 1)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black mt-4" />
                    <input type="text" value={formData.generalCondition[2]} onChange={handleArrayInput('generalCondition', 2)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black mt-4" />
                </div>

                {/* Review of Progress */}
                <div className="mb-6 text-[9px] md:text-sm">
                    <div className="flex items-end w-full">
                        <span className="font-bold mr-2 whitespace-nowrap">Review of Progress:</span>
                        <input type="text" value={formData.progressReview[0]} onChange={handleArrayInput('progressReview', 0)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                    </div>
                    <input type="text" value={formData.progressReview[1]} onChange={handleArrayInput('progressReview', 1)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black mt-4" />
                </div>

                {/* Problems */}
                <div className="mb-6 text-[9px] md:text-sm">
                    <div className="flex items-end w-full">
                        <span className="font-bold mr-2 whitespace-nowrap">Problems:</span>
                        <input type="text" value={formData.problems[0]} onChange={handleArrayInput('problems', 0)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                    </div>
                    <input type="text" value={formData.problems[1]} onChange={handleArrayInput('problems', 1)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black mt-4" />
                </div>

                {/* Satisfaction Section */}
                <div className="space-y-2 mb-6 text-[9px] md:text-sm font-bold">
                    <div className="flex items-center">
                        <span className="mr-2">Client Satisfied with Services:</span>
                        <label className="flex items-center mr-4 cursor-pointer"><span className="mr-1">Yes</span> <input type="checkbox" checked={formData.satisfaction.clientSatisfiedYes} onChange={handleCheckbox(['satisfaction', 'clientSatisfiedYes'])} /></label>
                        <label className="flex items-center cursor-pointer"><span className="mr-1">No</span> <input type="checkbox" checked={formData.satisfaction.clientSatisfiedNo} onChange={handleCheckbox(['satisfaction', 'clientSatisfiedNo'])} /></label>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Appropriateness of Services:</span>
                        <label className="flex items-center mr-4 cursor-pointer"><span className="mr-1">Yes</span> <input type="checkbox" checked={formData.satisfaction.appropriatenessYes} onChange={handleCheckbox(['satisfaction', 'appropriatenessYes'])} /></label>
                        <label className="flex items-center cursor-pointer"><span className="mr-1">No</span> <input type="checkbox" checked={formData.satisfaction.appropriatenessNo} onChange={handleCheckbox(['satisfaction', 'appropriatenessNo'])} /></label>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-16">Client MF/MC:</span>
                        <label className="flex items-center mr-4 cursor-pointer"><span className="mr-1">Yes</span> <input type="checkbox" checked={formData.satisfaction.clientMFMCYes} onChange={handleCheckbox(['satisfaction', 'clientMFMCYes'])} /></label>
                        <label className="flex items-center cursor-pointer"><span className="mr-1">No</span> <input type="checkbox" checked={formData.satisfaction.clientMFMCNo} onChange={handleCheckbox(['satisfaction', 'clientMFMCNo'])} /></label>
                    </div>
                </div>

                {/* Notes */}
                <div className="mb-8 text-[9px] md:text-sm">
                    <div className="flex items-end w-full">
                        <span className="font-bold mr-2 whitespace-nowrap">Notes:</span>
                        <input type="text" value={formData.notes[0]} onChange={handleArrayInput('notes', 0)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
                    </div>
                    <input type="text" value={formData.notes[1]} onChange={handleArrayInput('notes', 1)} onKeyDown={handleEnter} className="w-full bg-transparent outline-none border-b border-black mt-4" />
                </div>

                {/* Vitals Table */}
                <div className="border border-black mb-2 text-[9px] md:text-sm">
                    <div className="grid grid-cols-5 divide-x divide-black h-8">
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">BP:</span>
                            <input type="text" value={formData.vitals.bp} onChange={handleInput(['vitals', 'bp'])} onKeyDown={handleEnter} className="w-full h-full bg-transparent outline-none text-center text-[9px] md:text-sm" />
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">RR:</span>
                            <input type="text" value={formData.vitals.rr} onChange={handleInput(['vitals', 'rr'])} onKeyDown={handleEnter} className="w-full h-full bg-transparent outline-none text-center text-[9px] md:text-sm" />
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Temp:</span>
                            <input type="text" value={formData.vitals.temp} onChange={handleInput(['vitals', 'temp'])} onKeyDown={handleEnter} className="w-full h-full bg-transparent outline-none text-center text-[9px] md:text-sm" />
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">HR:</span>
                            <input type="text" value={formData.vitals.hr} onChange={handleInput(['vitals', 'hr'])} onKeyDown={handleEnter} className="w-full h-full bg-transparent outline-none text-center text-[9px] md:text-sm" />
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">BS:</span>
                            <input type="text" value={formData.vitals.bs} onChange={handleInput(['vitals', 'bs'])} onKeyDown={handleEnter} className="w-full h-full bg-transparent outline-none text-center text-[9px] md:text-sm" />
                        </div>
                    </div>
                </div>

                {/* Assessment Grid */}
                <div className="border border-black text-[9px] md:text-sm mb-12">
                    <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Respiratory:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">WNL</span><input type="checkbox" checked={formData.assessment.respiratory.wnl} onChange={handleCheckbox(['assessment', 'respiratory', 'wnl'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Rhonchi</span><input type="checkbox" checked={formData.assessment.respiratory.rhonchi} onChange={handleCheckbox(['assessment', 'respiratory', 'rhonchi'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Crackles</span><input type="checkbox" checked={formData.assessment.respiratory.crackles} onChange={handleCheckbox(['assessment', 'respiratory', 'crackles'])} /></label>
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Neurological:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">WNL</span><input type="checkbox" checked={formData.assessment.neurological.wnl} onChange={handleCheckbox(['assessment', 'neurological', 'wnl'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Unsteady gait</span><input type="checkbox" checked={formData.assessment.neurological.unsteadyGait} onChange={handleCheckbox(['assessment', 'neurological', 'unsteadyGait'])} /></label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
                        <div className="p-1 flex flex-wrap gap-x-2 gap-y-1">
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Diminished</span><input type="checkbox" checked={formData.assessment.respiratory.diminished} onChange={handleCheckbox(['assessment', 'respiratory', 'diminished'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Wheezing</span><input type="checkbox" checked={formData.assessment.respiratory.wheezing} onChange={handleCheckbox(['assessment', 'respiratory', 'wheezing'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Rales</span><input type="checkbox" checked={formData.assessment.respiratory.rales} onChange={handleCheckbox(['assessment', 'respiratory', 'rales'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Other</span><input type="checkbox" checked={formData.assessment.respiratory.other} onChange={handleCheckbox(['assessment', 'respiratory', 'other'])} /></label>
                        </div>
                        <div className="p-1 flex flex-wrap gap-x-2 gap-y-1">
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Disoriented</span><input type="checkbox" checked={formData.assessment.neurological.disoriented} onChange={handleCheckbox(['assessment', 'neurological', 'disoriented'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Confused</span><input type="checkbox" checked={formData.assessment.neurological.confused} onChange={handleCheckbox(['assessment', 'neurological', 'confused'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Forgetful</span><input type="checkbox" checked={formData.assessment.neurological.forgetful} onChange={handleCheckbox(['assessment', 'neurological', 'forgetful'])} /></label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Cardiovascular:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">WNL</span><input type="checkbox" checked={formData.assessment.cardiovascular.wnl} onChange={handleCheckbox(['assessment', 'cardiovascular', 'wnl'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Chest pain</span><input type="checkbox" checked={formData.assessment.cardiovascular.chestPain} onChange={handleCheckbox(['assessment', 'cardiovascular', 'chestPain'])} /></label>
                        </div>
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Skin:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">WNL</span><input type="checkbox" checked={formData.assessment.skin.wnl} onChange={handleCheckbox(['assessment', 'skin', 'wnl'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Dry</span><input type="checkbox" checked={formData.assessment.skin.dry} onChange={handleCheckbox(['assessment', 'skin', 'dry'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Clammy</span><input type="checkbox" checked={formData.assessment.skin.clammy} onChange={handleCheckbox(['assessment', 'skin', 'clammy'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Cool</span><input type="checkbox" checked={formData.assessment.skin.cool} onChange={handleCheckbox(['assessment', 'skin', 'cool'])} /></label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-black border-b border-black">
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Cap. Refill:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">&lt;3 sec</span><input type="checkbox" checked={formData.assessment.capRefill.less3} onChange={handleCheckbox(['assessment', 'capRefill', 'less3'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">&gt;3sec</span><input type="checkbox" checked={formData.assessment.capRefill.greater3} onChange={handleCheckbox(['assessment', 'capRefill', 'greater3'])} /></label>
                        </div>
                        <div className="p-1 flex items-center gap-1 min-h-[30px]">
                            <span className="font-bold whitespace-nowrap">Wounds:</span>
                            <input type="text" value={formData.assessment.wounds} onChange={handleInput(['assessment', 'wounds'])} onKeyDown={handleEnter} className="w-full bg-transparent outline-none px-1 text-[9px] md:text-sm" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-black">
                        <div className="p-1 flex items-center gap-1">
                            <span className="font-bold">Edema:</span>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">Pitting</span><input type="checkbox" checked={formData.assessment.edema.pitting} onChange={handleCheckbox(['assessment', 'edema', 'pitting'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">1+</span><input type="checkbox" checked={formData.assessment.edema.plus1} onChange={handleCheckbox(['assessment', 'edema', 'plus1'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">2+</span><input type="checkbox" checked={formData.assessment.edema.plus2} onChange={handleCheckbox(['assessment', 'edema', 'plus2'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">3+</span><input type="checkbox" checked={formData.assessment.edema.plus3} onChange={handleCheckbox(['assessment', 'edema', 'plus3'])} /></label>
                            <label className="flex items-center gap-0.5"><span className="whitespace-nowrap">4+</span><input type="checkbox" checked={formData.assessment.edema.plus4} onChange={handleCheckbox(['assessment', 'edema', 'plus4'])} /></label>
                        </div>
                        <div className="p-1 flex items-center gap-1 min-h-[30px]">
                            <span className="font-bold whitespace-nowrap">Notes:</span>
                            <input type="text" value={formData.assessment.edemaNotes} onChange={handleInput(['assessment', 'edemaNotes'])} onKeyDown={handleEnter} className="w-full bg-transparent outline-none px-1 text-[9px] md:text-sm" />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-end mb-8 text-[9px] md:text-sm">
                    <span className="font-bold mr-2 whitespace-nowrap">Assessor Name:</span>
                    <input type="text" value={formData.footer.assessorName} onChange={handleInput(['footer', 'assessorName'])} onKeyDown={handleEnter} className="flex-grow bg-transparent outline-none border-b border-black min-w-0 text-[9px] md:text-sm" />
                    <span className="font-bold ml-4 mr-2 whitespace-nowrap">Date:</span>
                    <input type="date" value={formData.footer.date} onChange={handleInput(['footer', 'date'])} onKeyDown={handleEnter} className="w-32 bg-transparent outline-none border-b border-black text-[9px] md:text-sm" />
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
export default HomeSupervisoryVisitForm;
