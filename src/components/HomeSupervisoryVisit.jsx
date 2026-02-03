import React from 'react';
import logo from '../assets/logo.jpg';
import bodyDiagram from '../assets/body_diagram.png';

const HomeSupervisoryVisit = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-xs leading-snug">

                {/* --- PAGE 1: Home Supervisory Visit --- */}

                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-2" />
                    <h1 className="text-xl md:text-2xl font-bold uppercase text-center text-black">Home Supervisory Visit</h1>
                </div>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row gap-2 mb-4 text-[9px] md:text-sm">
                    <div className="w-full md:flex-[3] flex gap-2 items-end">
                        <span className="font-bold whitespace-nowrap">Client Name:</span>
                        <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                    </div>
                    <div className="w-full md:flex-1 flex gap-2 items-end">
                        <span className="font-bold">DOB:</span>
                        <input type="date" className="border-b border-black flex-grow outline-none bg-transparent min-w-[50px]" />
                    </div>
                    <div className="hidden md:flex md:flex-1 gap-2 items-end">
                        <span className="font-bold">Date:</span>
                        <input type="date" className="border-b border-black flex-grow outline-none bg-transparent min-w-[50px]" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-4 text-[9px] md:text-sm">
                    <div className="w-full md:flex-[3] flex gap-2 items-end">
                        <span className="font-bold">Address:</span>
                        <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                    </div>
                    <div className="w-full md:flex-1 flex gap-2 items-end">
                        <span className="font-bold">Phone:</span>
                        <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                    </div>
                </div>

                <div className="flex gap-2 items-end mb-4 text-[9px] md:text-sm">
                    <span className="font-bold whitespace-nowrap">Diagnosis:</span>
                    <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                </div>

                <div className="flex gap-2 items-end mb-6 text-[9px] md:text-sm">
                    <span className="font-bold whitespace-nowrap">Allergies:</span>
                    <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />

                    <div className="flex md:hidden gap-2 items-end">
                        <span className="font-bold">Date:</span>
                        <input type="date" className="border-b border-black w-[85px] outline-none bg-transparent text-[9px]" />
                    </div>
                </div>

                {/* Service Checkboxes */}
                <div className="flex flex-col md:flex-row justify-between md:justify-center gap-2 md:gap-16 mb-6 font-bold text-[9px] md:text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="mx-1" /> Companion Sitter
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="mx-1" /> Personal Care
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="mx-1" /> Skilled Nursing Services
                    </label>
                </div>

                {/* Assessment Text Areas */}
                <div className="mb-4 text-[9px] md:text-sm">
                    <label className="font-bold block mb-1">Assessment of General Condition:</label>
                    <textarea rows="5" className="w-full border-b border-black outline-none bg-transparent resize-none leading-relaxed" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 95%, black 95%)', backgroundSize: '100% 1.5em', lineHeight: '1.5em' }}></textarea>
                </div>

                <div className="mb-4 text-[9px] md:text-sm">
                    <label className="font-bold block mb-1">Review of Progress:</label>
                    <textarea rows="3" className="w-full border-b border-black outline-none bg-transparent resize-none leading-relaxed" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 95%, black 95%)', backgroundSize: '100% 1.5em', lineHeight: '1.5em' }}></textarea>
                </div>

                <div className="mb-6 text-[9px] md:text-sm">
                    <label className="font-bold block mb-1">Problems:</label>
                    <textarea rows="4" className="w-full border-b border-black outline-none bg-transparent resize-none leading-relaxed" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 95%, black 95%)', backgroundSize: '100% 1.5em', lineHeight: '1.5em' }}></textarea>
                </div>

                {/* Satisfaction Questions */}
                <div className="mb-6 font-bold text-[9px] md:text-xs">
                    <div className="flex items-center justify-between md:justify-start md:gap-12 mb-2">
                        <span>Client Satisfied with Services:</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-1">Yes <input type="checkbox" className="mx-1" /></label>
                            <label className="flex items-center gap-1">No <input type="checkbox" className="mx-1" /></label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-start md:gap-11 mb-2">
                        <span>Appropriateness of Services:</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-1">Yes <input type="checkbox" className="mx-1" /></label>
                            <label className="flex items-center gap-1">No <input type="checkbox" className="mx-1" /></label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-start md:gap-24 mb-2">
                        <span>Client MF/MC:</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-1">Yes <input type="checkbox" className="mx-1" /></label>
                            <label className="flex items-center gap-1">No <input type="checkbox" className="mx-1" /></label>
                        </div>
                    </div>
                </div>

                {/* Vitals Table */}
                <div className="border border-black mb-8 text-[9px] md:text-xs">
                    <div className="grid grid-cols-5 border-b border-black divide-x divide-black">
                        <div className="p-1 font-bold flex items-center">BP: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">RR: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">Temp: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">HR: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">BS: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                    </div>
                    <div className="grid grid-cols-5 divide-x divide-black">
                        <div className="p-1 font-bold flex items-center">Height: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">Weight: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 font-bold flex items-center">BMI: <input type="text" className="ml-1 w-full min-w-0 outline-none bg-transparent" /></div>
                        <div className="p-1 bg-gray-100"><input type="text" className="ml-1 w-full outline-none bg-transparent" /></div>
                        <div className="p-1 bg-gray-100"><input type="text" className="ml-1 w-full outline-none bg-transparent" /></div>
                    </div>
                </div>

                {/* --- PAGE 2: Assessment Grid --- */}
                <div className="border-t-4 border-black my-8 pt-8 text-[9px] md:text-xs">
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-2" />
                    </div>

                    <div className="grid grid-cols-2 border border-black">
                        {/* Row 1 */}
                        <div className="border-b border-black border-r p-1 min-h-[160px]">
                            <span className="font-bold">Diet & Nutrition:</span><br />
                            <span className="font-bold">Appetite:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>
                        <div className="border-b border-black p-1 min-h-[160px]">
                            <span className="font-bold">Respiratory: WNL <input type="checkbox" className="mx-1" /></span><br />
                            <span className="font-bold">Breath Sounds:</span><br />
                            <span className="font-bold">02 Therapy:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>

                        {/* Row 2 */}
                        <div className="border-b border-black border-r p-1 min-h-[160px]">
                            <span className="font-bold">Abdomen:</span><br />
                            <span className="font-bold">Last BM:</span><br />
                            <span className="font-bold">Bowel sounds:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>
                        <div className="border-b border-black p-1 min-h-[160px]">
                            <span className="font-bold">Cardiovascular: Chest pain <input type="checkbox" className="mx-1" /> Yes <input type="checkbox" className="mx-1" /> No</span><br />
                            <span className="font-bold">Heart Rate:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>

                        {/* Row 3 */}
                        <div className="border-b border-black border-r p-1 min-h-[160px]">
                            <span className="font-bold">Skin: intact YES <input type="checkbox" className="mx-1" /> NO <input type="checkbox" className="mx-1" /> [Check Skin Assessment Sheet]</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-28 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>
                        <div className="border-b border-black p-1 min-h-[160px]">
                            <span className="font-bold">Cap refill: <input type="checkbox" className="mx-1" />&lt; 3 sec <input type="checkbox" className="mx-1" /> &gt;3 sec</span><br />
                            <span className="font-bold">Edema: NO <input type="checkbox" className="mx-1" /> YES <input type="checkbox" className="mx-1" /> pitting: +1 +2 +3 +4</span>
                        </div>

                        {/* Row 4 */}
                        <div className="border-b border-black border-r p-1 min-h-[160px]">
                            <span className="font-bold">Neuro: Pain Sensation:</span><br />
                            <span className="font-bold">LOC: Awake <input type="checkbox" className="mx-0.5" /> Alert <input type="checkbox" className="mx-0.5" /> Oriented x <input type="text" className="border-b border-black w-8 min-w-0 outline-none bg-transparent" /></span><br />
                            <span className="font-bold">Communication:</span><br />
                            <span className="font-bold">Seizures:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-16 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>
                        <div className="border-b border-black p-1 min-h-[160px]">
                            <span className="font-bold">Behavior: Calm <input type="checkbox" className="mx-1" /> Lethargic <input type="checkbox" className="mx-1" /> Angry <input type="checkbox" className="mx-1" /> Aggressive <input type="checkbox" className="mx-1" /></span><br />
                            <span className="font-bold">Sleep Patterns:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>

                        {/* Row 5 */}
                        <div className="border-b border-black border-r p-2 min-h-[60px] flex items-center">
                            <span className="font-bold">Incontinent: <input type="checkbox" className="mx-1" /> YES <input type="checkbox" className="mx-1" /> NO</span>
                        </div>
                        <div className="border-b border-black p-2 min-h-[60px]">
                            <span className="font-bold">Vision:</span><br />
                            <span className="font-bold">Hearing:</span><br />
                            <span className="font-bold">Dental:</span>
                        </div>

                        {/* Row 6 */}
                        <div className="p-2 min-h-[160px] border-r border-black">
                            <span className="font-bold">Mobility: Ambulatory <input type="checkbox" className="mx-1" /> Gait: Steady <input type="checkbox" className="mx-1" /> Impaired <input type="checkbox" className="mx-1" /></span><br />
                            <span className="font-bold">Assistive Devices:</span><br />
                            <span className="font-bold">Notes:</span>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none leading-normal"></textarea>
                        </div>
                        <div className="p-2 min-h-[160px]"></div>
                    </div>

                    <div className="mt-8">
                        <span className="font-bold">Visit Notes:</span>
                        <textarea rows="6" className="w-full border-b border-black outline-none bg-transparent resize-none leading-[2em]" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 95%, black 95%)', backgroundSize: '100% 2em' }}></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-12 items-end font-bold gap-4 md:gap-0">
                        <div className="flex gap-2 items-end w-full md:w-1/2">
                            <span className="whitespace-nowrap">Assessor Name:</span>
                            <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="flex gap-2 items-end w-full md:w-1/3">
                            <span>Date:</span>
                            <input type="date" className="border-b border-black flex-grow outline-none bg-transparent min-w-[50px]" />
                        </div>
                    </div>
                </div>


                {/* --- PAGE 3: Skin Integrity Form --- */}
                {/* --- PAGE 3: Skin Integrity Form --- */}
                <div className="border-t-4 border-black my-8 pt-8 break-before-page">
                    <div className="flex flex-col items-center mb-4">
                        <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-2" />
                        <h1 className="text-xl font-bold font-sans text-center mt-2">Skin Integrity Form</h1>
                    </div>

                    <div className="border border-black">
                        <div className="p-2 border-b border-black text-xs">
                            Please describe the individuals skin integrity. Fill out one sheet for each site.
                        </div>

                        <div className="p-2 space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:flex-1 flex gap-2 items-end">
                                    <span className="font-bold whitespace-nowrap">Individual's Name:</span>
                                    <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                                </div>
                                <div className="w-full md:w-1/3 flex gap-2 items-end">
                                    <span className="font-bold">Date:</span>
                                    <input type="date" className="border-b border-black flex-grow outline-none bg-transparent min-w-[50px]" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:flex-1 flex gap-2 items-end">
                                    <span className="font-bold whitespace-nowrap">Staff Name:</span>
                                    <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                                </div>
                                <div className="w-full md:w-1/3 flex gap-2 items-end">
                                    <span className="font-bold text-xs whitespace-nowrap">Time/ Shift:</span>
                                    <input type="text" className="border-b border-black w-1/2 flex-grow-0 md:flex-grow outline-none bg-transparent min-w-0" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                                <div className="w-full md:flex-1 flex gap-2 items-end">
                                    <span className="font-bold whitespace-nowrap">Skin Intact:</span>
                                    <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                                </div>
                                <div className="w-full md:flex-1 flex gap-2 items-end">
                                    <span className="font-bold whitespace-nowrap">Skin Not Intact:</span>
                                    <input type="text" className="border-b border-black w-1/2 flex-grow-0 md:flex-grow outline-none bg-transparent min-w-0" />
                                </div>
                            </div>
                        </div>

                        {/* Body Diagram */}
                        <div className="flex justify-center mb-4 border-b border-black pb-4">
                            <img src={bodyDiagram} alt="Body Diagram" className="max-w-full h-auto max-h-[300px]" />
                        </div>

                        {/* Description Table */}
                        <div className="grid grid-cols-3 border-b border-black text-xs md:text-sm">
                            <div className="border-r border-black p-2">
                                <h3 className="font-bold mb-2">DESCRIBE:</h3>
                                <div className="space-y-4">
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Mark on Body on the back sheet</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Skin Broken/ Open</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Skin Scratched (Skin Tear)</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Unusual Lesions (scars, rash, etc.)</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Pressure Ulcers</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Other: <input className="border-b border-black flex-1 min-w-0 outline-none bg-transparent" /></label>
                                </div>
                            </div>
                            <div className="border-r border-black p-2">
                                <h3 className="font-bold mb-2">COLOR:</h3>
                                <div className="space-y-4">
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Normal</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Pink</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Red</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Purple/ Blue</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Yellow</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Black</label>
                                </div>
                            </div>
                            <div className="p-2">
                                <h3 className="font-bold mb-2">SIZE:</h3>
                                <div className="space-y-4">
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Quarter Size</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Dime Size</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Nickel Size</label>
                                    <label className="flex items-end gap-1"><span className="border-b border-black w-8 inline-block"></span> Other:</label>
                                    <input className="border-b border-black w-full outline-none bg-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-black p-2 bg-gray-100 text-xs font-bold">
                            Check all that apply below: Person Needs Assistance with:
                        </div>

                        <div className="grid grid-cols-2 text-xs md:text-sm">
                            <div className="p-2 space-y-2 border-r border-black">
                                <div className="grid grid-cols-[30%_1fr_1fr] items-center gap-1">
                                    <span>Ambulation:</span>
                                    <label className="flex items-center whitespace-nowrap">Yes <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                    <label className="flex items-center whitespace-nowrap">No <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                </div>
                                <div className="grid grid-cols-[30%_1fr_1fr] items-center gap-1">
                                    <span>Transfer:</span>
                                    <label className="flex items-center whitespace-nowrap">Yes <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                    <label className="flex items-center whitespace-nowrap">No <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                </div>
                                <div className="grid grid-cols-[30%_1fr_1fr] items-center gap-1">
                                    <span>Toileting:</span>
                                    <label className="flex items-center whitespace-nowrap">Yes <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                    <label className="flex items-center whitespace-nowrap">No <input type="text" className="border-b border-black w-6 ml-0.5 outline-none bg-transparent" /></label>
                                </div>
                            </div>

                            <div className="p-2 space-y-2">
                                <div className="flex items-center gap-2 justify-between">
                                    <span>Independent:</span>
                                    <input type="text" className="border-b border-black flex-1 min-w-0 outline-none bg-transparent" />
                                </div>
                                <div className="flex items-center gap-2 justify-between">
                                    <span>Continence:</span>
                                    <input type="text" className="border-b border-black flex-1 min-w-0 outline-none bg-transparent" />
                                </div>
                                <div className="flex items-center gap-2 justify-between">
                                    <span>Dependent:</span>
                                    <input type="text" className="border-b border-black flex-1 min-w-0 outline-none bg-transparent" />
                                </div>
                                <div className="flex items-center gap-2 justify-between">
                                    <span>Incontinence:</span>
                                    <input type="text" className="border-b border-black flex-1 min-w-0 outline-none bg-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-black p-2 min-h-[100px]">
                            <p className="font-bold mb-1">Comments:</p>
                            <textarea className="w-full h-24 outline-none bg-transparent resize-none"></textarea>
                        </div>
                    </div>
                </div>


                {/* --- PAGE 4: Medication --- */}
                <div className="border-t-4 border-black my-8 pt-8 break-before-page">
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-2" />
                        <h1 className="text-xl font-bold font-sans text-center mt-4">Medication</h1>
                    </div>

                    <div className="border border-black">
                        <div className="grid grid-cols-[14%_14%_1fr_10%_12%_10%_15%] border-b border-black font-bold text-center bg-gray-100 text-[9px] md:text-[10px]">
                            <div className="p-1 border-r border-black">Start Date</div>
                            <div className="p-1 border-r border-black">Stop Date:</div>
                            <div className="p-1 border-r border-black">Medication Names</div>
                            <div className="p-1 border-r border-black">Dose</div>
                            <div className="p-1 border-r border-black">Frequency</div>
                            <div className="p-1 border-r border-black">Route</div>
                            <div className="p-1">New/Change (circle)</div>
                        </div>

                        {[...Array(15)].map((_, i) => (
                            <div key={i} className={`grid grid-cols-[14%_14%_1fr_10%_12%_10%_15%] border-b border-black text-[9px] md:text-[10px] items-center min-h-[40px] ${i === 14 ? '' : ''}`}>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 border-r border-black h-full"><input className="w-full h-full bg-transparent outline-none" /></div>
                                <div className="p-1 flex flex-col justify-center text-[9px] leading-tight">
                                    <label><input type="checkbox" /> New</label>
                                    <label><input type="checkbox" /> Change</label>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 items-end mt-8">
                        <span className="font-bold">RN Signature:</span>
                        <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                        <span className="font-bold">Date:</span>
                        <input type="date" className="border-b border-black w-[30%] min-w-[50px] outline-none bg-transparent" />
                    </div>
                </div>


                {/* --- PAGE 5: Client Satisfaction Survey --- */}
                <div className="border-t-4 border-black my-8 pt-8 break-before-page">
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="Pacific Health Systems" className="h-16 object-contain mb-2" />
                        <h1 className="text-xl font-bold uppercase text-center text-black mt-2">CLIENT SATISFACTION SURVEY</h1>
                    </div>

                    <div className="mb-4 text-xs font-bold">
                        <p>Scale:</p>
                        <ol className="list-decimal list-inside ml-2">
                            <li>Not Applicable</li>
                            <li>Disagree</li>
                            <li>Agree</li>
                            <li>Strongly Agree</li>
                        </ol>
                    </div>

                    <div className="border border-black text-xs md:text-sm">
                        <div className="grid grid-cols-[1fr_40px_40px_40px_40px] border-b border-black font-bold bg-gray-100">
                            <div className="p-1 border-r border-black">How do you agree or disagree with the following?</div>
                            <div className="p-1 border-r border-black text-center">1</div>
                            <div className="p-1 border-r border-black text-center">2</div>
                            <div className="p-1 border-r border-black text-center">3</div>
                            <div className="p-1 text-center">4</div>
                        </div>

                        {[
                            "My Aide is responsive to my needs and is helpful",
                            "My Aide reports to work on time",
                            "If given a choice, I would like to try another aide",
                            "I believe my Aide is competent in what he/she does",
                            "My Aide or Nurse tells me his/her personal issues or challenges",
                            "I know how to contact the office if I have a problem or complaint",
                            "The admin office staff is courteous and respectful",
                            "Whenever I call the admin office, they respond to me promptly",
                            "Overall, I am satisfied with the services provided by PHS",
                            "Overall, I would recommend PHS to a family member or friend",
                            "I know how to contact my Case Manager if I have a complaint",
                            "I know how to contact DCH if I have an issue or a complaint"
                        ].map((q, i) => (
                            <div key={i} className="grid grid-cols-[1fr_40px_40px_40px_40px] border-b border-black">
                                <div className="p-1 border-r border-black pl-2">{i + 1}. {q}</div>
                                <div className="p-1 border-r border-black text-center flex justify-center items-center"><input type="checkbox" /></div>
                                <div className="p-1 border-r border-black text-center flex justify-center items-center"><input type="checkbox" /></div>
                                <div className="p-1 border-r border-black text-center flex justify-center items-center"><input type="checkbox" /></div>
                                <div className="p-1 text-center flex justify-center items-center"><input type="checkbox" /></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <p className="font-bold underline mb-1">Additional Comments:</p>
                        <div className="border border-black h-24 p-2">
                            <textarea className="w-full h-full outline-none bg-transparent resize-none"></textarea>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSupervisoryVisit;
