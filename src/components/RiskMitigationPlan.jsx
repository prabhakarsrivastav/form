import React from 'react';

const RiskMitigationPlan = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-sm leading-snug border-none">

                {/* --- PAGE 1 --- */}

                {/* Header */}
                <h1 className="text-center font-bold text-lg md:text-xl underline uppercase mb-6">RISK MITIGATION PLAN</h1>

                {/* Patient Info Table */}
                <div className="border border-black mb-6 text-[10px] md:text-sm">
                    {/* Row 1 */}
                    <div className="flex border-b border-black">
                        <div className="w-[15%] p-1 font-bold border-r border-black flex items-center">Name:</div>
                        <div className="w-[35%] p-1 border-r border-black"><input type="text" className="w-full bg-transparent outline-none min-w-0" /></div>
                        <div className="w-[50%] p-1 font-bold bg-gray-300 text-center flex items-center justify-center">Address</div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex border-b border-black">
                        <div className="w-[15%] p-1 font-bold border-r border-black flex items-center">Diagnosis:</div>
                        <div className="w-[35%] p-1 border-r border-black"><input type="text" className="w-full bg-transparent outline-none min-w-0" /></div>
                        <div className="w-[50%] p-1"><input type="text" className="w-full bg-transparent outline-none min-w-0" /></div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex border-b border-black">
                        <div className="w-[15%] p-1 font-bold border-r border-black flex items-center">Allergies:</div>
                        <div className="w-[35%] p-1 border-r border-black"><input type="text" className="w-full bg-transparent outline-none min-w-0" /></div>
                        <div className="w-[50%] p-1 flex items-center gap-1">
                            <span className="font-bold">City:</span>
                            <input type="text" className="flex-grow bg-transparent outline-none min-w-0" />
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="flex border-b border-black">
                        <div className="w-[15%] p-1 font-bold border-r border-black flex items-center">Date of Birth:</div>
                        <div className="w-[35%] p-1 border-r border-black"><input type="date" className="w-full bg-transparent outline-none min-w-0" /></div>
                        <div className="w-[50%] p-1 flex items-center gap-1">
                            <span className="font-bold">State:</span>
                            <input type="text" className="flex-grow bg-transparent outline-none min-w-0" />
                        </div>
                    </div>
                    {/* Row 5 */}
                    <div className="flex">
                        <div className="w-[15%] p-1 font-bold border-r border-black flex items-center">Date of Plan:</div>
                        <div className="w-[35%] p-1 border-r border-black"><input type="date" className="w-full bg-transparent outline-none min-w-0" /></div>
                        <div className="w-[50%] p-1 flex items-center gap-1">
                            <span className="font-bold">Zip Code:</span>
                            <input type="text" className="flex-grow bg-transparent outline-none min-w-0" />
                        </div>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="border border-black mb-1 p-1">
                    <label className="flex items-center gap-2 font-bold"><input type="checkbox" /> A Risk Mitigation Plan is developed for this Individual</label>
                    <label className="flex items-center gap-2 font-bold"><input type="checkbox" /> A risk Mitigation plan is not needed for this individual</label>
                </div>

                {/* Rationale */}
                <div className="border border-black p-1 mb-1 text-justify">
                    <span className="font-bold">Plan Rationale:</span> The goal of this plan is to keep the individual and staff working with him/her healthy and safe in the event of a crisis situation. The plan will have a documented review at least 365 days from the date from the last review of effectiveness, applicability, quality of accuracy.
                </div>

                {/* Risk Mitigation Table */}
                <div className="border border-black mb-8">
                    <div className="bg-gray-400 text-center font-bold border-b border-black">RISK MITIGATION PLAN</div>
                    <div className="grid grid-cols-2 border-b border-black">
                        <div className="p-1 font-bold border-r border-black">Statement and Description of known conditions/ risks/ diagnosis/ vulnerabilities</div>
                        <div className="p-1 font-bold">Action steps</div>
                    </div>
                    {/* Rows */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="grid grid-cols-2 border-b border-black min-h-[40px]">
                            <div className="border-r border-black p-1"><textarea className="w-full h-full bg-transparent outline-none resize-none overflow-hidden min-w-0" rows={2}></textarea></div>
                            <div className="p-1"><textarea className="w-full h-full bg-transparent outline-none resize-none overflow-hidden min-w-0" rows={2}></textarea></div>
                        </div>
                    ))}
                </div>

                <div className="text-[10px] mb-8">This risk mitigation plan is reviewed at least annually and promptly revised as my diagnosis/risk status changes.</div>


                {/* --- PAGE 2 (Visually separated by margin if needed, or just flow) --- */}
                <div className="mt-8 border-t-2 border-black pt-8"></div>

                {/* Staff Training Table */}
                <div className="border border-black mb-8 text-[11px] md:text-xs">
                    <div className="p-1 border-b border-black">
                        <span className="font-bold">Staff Training:</span> Individual staff will be trained on how to effectively implement all interventions outlined in this plan. Any new staff should be trained prior to working with individual.
                    </div>
                    <div className="grid grid-cols-2 border-b border-black font-bold text-center">
                        <div className="p-1 border-r border-black">Name</div>
                        <div className="p-1">Signature and date</div>
                    </div>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="grid grid-cols-2 border-b border-black min-h-[30px]">
                            <div className="border-r border-black p-1"><input className="w-full outline-none min-w-0" /></div>
                            <div className="p-1"><input className="w-full outline-none min-w-0" /></div>
                        </div>
                    ))}
                </div>

                {/* Emergency Contacts Table */}
                <div className="border border-black text-[11px] md:text-sm">
                    {/* Header */}
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black font-bold bg-gray-100">
                        <div className="p-1 border-r border-black">Name</div>
                        <div className="p-1 border-r border-black">Address</div>
                        <div className="p-1 border-r border-black">Phone</div>
                        <div className="p-1">Relationship</div>
                    </div>

                    {/* Empty Rows x 5 */}
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="grid grid-cols-[20%_35%_25%_20%] border-b border-black min-h-[24px]">
                            <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                            <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                            <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                            <div className="p-1"><input className="w-full outline-none min-w-0" /></div>
                        </div>
                    ))}

                    {/* Pre-filled Rows */}
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Fire Department</div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">City Police</div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Sheriff Department</div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Ambulance</div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Poison Control</div>
                        <div className="p-1 border-r border-black"></div>
                        <div className="p-1 border-r border-black">1-800-222-1222</div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Closest Hospital</div>
                        <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                        <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                        <div className="p-1">Emergency</div>
                    </div>
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-semibold">Closest Disaster Evacuation Site</div>
                        <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                        <div className="p-1 border-r border-black"><input className="w-full outline-none min-w-0" /></div>
                        <div className="p-1">Emergency</div>
                    </div>

                    {/* Pacific Health Systems Row */}
                    <div className="grid grid-cols-[20%_35%_25%_20%] border-b border-black">
                        <div className="p-1 border-r border-black font-bold ">Pacific Health Systems, LLC</div>
                        <div className="p-1 border-r border-black">
                            303 Corporate Center Dr Suite 325,<br />
                            Stockbridge, GA 30281
                        </div>
                        <div className="p-1 border-r border-black text-[8px] md:text-sm break-words leading-tight">
                            678-782-2474<br />
                            678-751-5183(Text)<br />
                            404-566-0014 (Nurse)
                        </div>
                        <div className="p-1">Provider</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RiskMitigationPlan;
