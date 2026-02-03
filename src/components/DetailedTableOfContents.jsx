import React from 'react';

const DetailedTableOfContents = () => {
    const chapters = [
        {
            title: "Chapter I - Admission Packet-Nursing",
            rows: [
                { name: "Client Information Form", number: "1", desc: "Provide a placeholder for user to enter data in this form" },
                { name: "Service Agreement", number: "2", desc: "Make a fillable form" },
                { name: "Service Agreement Addendum", number: "3", desc: "Make a fillable form" },
                { name: "Service Care Plan", number: "4", desc: "Make a fillable form" },
                { name: "Initial Comprehensive Assessment", number: "5", desc: "Make a fillable form" },
                { name: "Risk Mitigation Plan", number: "6", desc: "Make a fillable form" },
                { name: "Self-Preservation", number: "7", desc: "Make a fillable form" },
                { name: "Medication List", number: "8", desc: "Make a fillable form" },
                { name: "Doctor's Orders", number: "9", desc: "Provide opportunity to upload form" },
                { name: "Abnormal Involuntary Movement Scale (AIMS)", number: "10", desc: "Provide opportunity to upload form" },
            ]
        },
        {
            title: "Chapter II - Admission Packet-Others",
            rows: [
                { name: "Client's Rights and Responsibilities", number: "11", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Code of Ethics", number: "12", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Release of Information", number: "13", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Vehicle/ Funds Policy", number: "14", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "My Human Rights (Claudia to supply the most recent form)", number: "15", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Freedom of Choice (Provide opportunity to upload)", number: "16", desc: "Provide opportunity to upload form" },
                { name: "Advance Directives (Give opportunity to upload)", number: "17", desc: "Provide opportunity to upload form" },
                { name: "HIPAA/ Confidentiality", number: "18", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Complaints and Grievances", number: "19", desc: "Present the information in this form to the user to sign at the bottom" },
                { name: "Abuse & Neglect", number: "20", desc: "Present the information in this form to the user to sign at the bottom" },
            ]
        },
        {
            title: "Chapter III - Tracking",
            extraText: "These forms are after onboarding",
            extraTextColor: "text-red-600",
            rows: [
                { name: "ISP/ Training Sign-off", number: "21", desc: "" },
                { name: "HRST/ Training Sign-off", number: "22", desc: "" },
                { name: "Behavior Support Plan (BSP)-(Optional)", number: "23", desc: "" },
                { name: "BSP Tracking/Progress Notes (Optional)", number: "24", desc: "" },
                { name: "Health Care Plan/ Protocols/ Training Sign-Off", number: "25", desc: "" },
                { name: "Medication Admin. Record (MAR)Training Sign-Off (Optional)", number: "26", desc: "" },
            ]
        },
        {
            title: "Chapter IV - Documentation",
            rows: [
                { name: "Visitor Log", number: "27", desc: "" },
                { name: "Rights Training/ Monthly Review", number: "28", desc: "" },
                { name: "Doctor's Appointment Log", number: "29", desc: "" },
                { name: "Chapter VI- Continuity of Medical Treatment", number: "", desc: "" },
                { name: "Supervisory Visit Documentation", number: "30", desc: "" },
                { name: "Annuals (Physical, TB, Dental, Vision)", number: "31", desc: "" },
            ]
        }
    ];

    const renderInput = (desc) => {
        if (!desc) return <input type="text" className="w-full bg-transparent border-b border-black outline-none min-w-0" />;
        const lowerDesc = desc.toLowerCase();

        if (lowerDesc.includes("upload")) {
            return (
                <div className="flex items-center w-full">
                    <input type="file" className="text-[9px] w-full min-w-0" />
                </div>
            );
        } else if (lowerDesc.includes("sign")) {
            return <input type="text" placeholder="Sign/Date" className="w-full bg-transparent border-b border-black outline-none min-w-0 flex-shrink" />;
        } else if (lowerDesc.includes("placeholder") || lowerDesc.includes("enter data")) {
            return <input type="text" placeholder="Enter Data" className="w-full bg-transparent border-b border-black outline-none min-w-0 flex-shrink" />;
        } else if (lowerDesc.includes("fillable")) {
            return <input type="text" placeholder="Fillable" className="w-full bg-transparent border-b border-black outline-none min-w-0 flex-shrink" />;
        } else {
            return <input type="text" className="w-full bg-transparent border-b border-black outline-none min-w-0 flex-shrink" />;
        }
    };

    return (
        <div className="w-full bg-white min-h-screen text-black font-sans flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-1 md:p-5 bg-white text-[9px] md:text-sm border-2 border-black">

                {/* Header */}
                <h1 className="text-xl md:text-2xl font-bold uppercase text-center mb-6">TABLE OF CONTENTS</h1>

                {/* Table */}
                <div className="border-2 border-black">
                    {chapters.map((chapter, chapterIndex) => (
                        <React.Fragment key={chapterIndex}>
                            {/* Chapter Header */}
                            <div className="grid grid-cols-[50%_10%_40%] border-b border-black font-bold">
                                <div className="bg-yellow-400 p-1 border-r border-black flex items-center justify-between px-2">
                                    <span>{chapter.title}</span>
                                </div>
                                <div className="bg-yellow-400 p-1 border-r border-black text-center flex items-center justify-center">
                                    PAGE #
                                </div>
                                <div className="p-1 flex items-center justify-center bg-gray-300 md:bg-transparent">
                                    {chapter.extraText && <span className={`${chapter.extraTextColor} text-[8px] md:text-xs leading-none`}>{chapter.extraText}</span>}
                                </div>
                            </div>

                            {/* Column Headers */}
                            {chapterIndex === 0 && (
                                <div className="grid grid-cols-[50%_10%_40%] border-b border-black font-bold bg-gray-300 text-center">
                                    <div className="p-1 border-r border-black">Form Description</div>
                                    <div className="p-1 border-r border-black">Number</div>
                                    <div className="p-1">Design Description</div>
                                </div>
                            )}

                            {/* Rows */}
                            {chapter.rows.map((row, rowIndex) => (
                                <div key={rowIndex} className="grid grid-cols-[50%_10%_40%] border-b border-black text-[9px] md:text-sm min-h-[30px]">
                                    <div className="p-1 border-r border-black pl-2 flex items-center">{row.name}</div>
                                    <div className="p-1 border-r border-black text-center flex items-center justify-center">{row.number}</div>
                                    <div className="p-1 pl-2 flex items-center w-full">{renderInput(row.desc)}</div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailedTableOfContents;
