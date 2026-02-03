import React from 'react';

const TableOfContents = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-sans flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-1 md:p-5 bg-white text-[9px] md:text-sm border-2 border-black">

                {/* Header */}
                <h1 className="text-xl md:text-2xl font-bold uppercase text-center mb-6">TABLE OF CONTENTS</h1>

                <div className="flex flex-col gap-4 mb-6 font-bold">
                    <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap">Name:</span>
                        <input type="text" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                    </div>

                    <div className="flex flex-nowrap items-center justify-between gap-1 w-full">
                        <span>Service(s):</span>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> CLS</label>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> CAG</label>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> CAI</label>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> SMS</label>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> CRA</label>
                        <label className="flex items-center gap-1"><input type="checkbox" className="mx-0.5" /> RESPITE</label>
                    </div>
                </div>

                {/* Table */}
                <div className="border border-black">
                    <div className="bg-[#bc78f0] text-[#f5e211] font-bold text-center p-1 border-b border-black">
                        Chapter I - Admission Packet
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black font-bold text-center">
                        <div className="p-1 border-r border-black flex items-center justify-center"></div>
                        <div className="p-1 border-r border-black flex items-center justify-center">YES</div>
                        <div className="p-1 border-r border-black flex items-center justify-center">NO</div>
                        <div className="p-1 border-r border-black flex items-center justify-center">N/A</div>
                        <div className="p-1 flex items-center justify-center">PAGE #</div>
                    </div>

                    {/* Chapter I */}

                    {[
                        "Client Information Form",
                        "Service Agreement",
                        "Service Agreement Addendum",
                        "Service Care Plan",
                        "Initial Comprehensive Assessment",
                        "Risk Mitigation Plan",
                        "Self-Preservation",
                        "Medication List",
                        "Doctor's Orders",
                        "Abnormal Involuntary Movement Scale (AIMS)"
                    ].map((doc, index) => (
                        <div key={`ch1-${index}`} className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black text-xs md:text-sm">
                            <div className="p-1 border-r border-black pl-2 flex items-center break-words leading-tight">{doc}</div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 flex items-center justify-center"><input type="text" className="w-full min-w-0 text-center outline-none bg-transparent" /></div>
                        </div>
                    ))}

                    {/* Chapter II */}
                    <div className="bg-[#bc78f0] text-[#f5e211] font-bold text-center p-1 border-b border-black">
                        Chapter II - Admission Packet (Continued)
                    </div>
                    {[
                        "Client's Rights and Responsibilities",
                        "Code of Ethics",
                        "Release of Information",
                        "Vehicle/ Funds Policy",
                        "My Human Rights",
                        "Freedom of Choice",
                        "Advance Directives",
                        "HIPAA/ Confidentiality",
                        "Complaints and Grievances",
                        "Abuse & Neglect"
                    ].map((doc, index) => (
                        <div key={`ch2-${index}`} className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black text-xs md:text-sm">
                            <div className="p-1 border-r border-black pl-2 flex items-center break-words leading-tight">{doc}</div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 flex items-center justify-center"><input type="text" className="w-full min-w-0 text-center outline-none bg-transparent" /></div>
                        </div>
                    ))}

                    {/* Chapter III */}
                    <div className="bg-[#bc78f0] text-[#f5e211] font-bold text-center p-1 border-b border-black">
                        Chapter III - Tracking
                    </div>
                    {[
                        "ISP/ Training Sign-off",
                        "HRST/ Training Sign-off",
                        "Behavior Support Plan (BSP) (Optional)",
                        "BSP Tracking/Progress Notes (Optional)",
                        "Health Care Plan/ Protocols/ Training Sign-Off",
                        "Medication Admin. Record (MAR) Training Sign-Off (Optional)"
                    ].map((doc, index) => (
                        <div key={`ch3-${index}`} className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black text-xs md:text-sm">
                            <div className="p-1 border-r border-black pl-2 flex items-center break-words leading-tight">{doc}</div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 flex items-center justify-center"><input type="text" className="w-full min-w-0 text-center outline-none bg-transparent" /></div>
                        </div>
                    ))}

                    {/* Chapter IV */}
                    <div className="bg-[#bc78f0] text-[#f5e211] font-bold text-center p-1 border-b border-black">
                        Chapter IV - Documentation
                    </div>
                    {[
                        "Visitor Log",
                        "Rights Training/ Monthly Review",
                        "Doctor's Appointment Log"
                    ].map((doc, index) => (
                        <div key={`ch4-${index}`} className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black text-xs md:text-sm">
                            <div className="p-1 border-r border-black pl-2 flex items-center break-words leading-tight">{doc}</div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 flex items-center justify-center"><input type="text" className="w-full min-w-0 text-center outline-none bg-transparent" /></div>
                        </div>
                    ))}

                    {/* Chapter VI (Skipping V as per request usually matching image) */}
                    <div className="bg-[#bc78f0] text-[#f5e211] font-bold text-center p-1 border-b border-black">
                        Chapter VI - Continuity of Medical Treatment
                    </div>
                    {[
                        "Supervisory Visit Documentation",
                        "Annuals (Physical, TB, Dental, Vision)"
                    ].map((doc, index) => (
                        <div key={`ch6-${index}`} className="grid grid-cols-[45%_12%_12%_12%_19%] md:grid-cols-[1fr_60px_60px_60px_80px] border-b border-black text-xs md:text-sm">
                            <div className="p-1 border-r border-black pl-2 flex items-center break-words leading-tight">{doc}</div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 border-r border-black flex items-center justify-center"><input type="checkbox" className="mx-0.5" /></div>
                            <div className="p-1 flex items-center justify-center"><input type="text" className="w-full min-w-0 text-center outline-none bg-transparent" /></div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default TableOfContents;
