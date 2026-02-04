import React, { useState } from 'react';

const SourceCCSPPrograms = () => {
    const [formData, setFormData] = useState({
        clientInformationForm: '',
        serviceAgreement: '',
        serviceAgreementAddendum: '',
        serviceCarePlan: '',
        medicationList: '',
        comprehensiveAssessment: '',
        rightsSignature: '',
        codeOfEthicsSignature: '',
        supervisoryVisits: '',
        incidenceReportForm: '',
        clientComplaintForm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
            const index = inputs.indexOf(e.target);
            if (index > -1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    };

    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex flex-col items-center mt-8 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center uppercase">SOURCE/CCSP PROGRAMS</h1>

            <div className="w-[98%] md:w-[85%] lg:w-[60%] border-2 border-black">
                <table className="w-full border-collapse text-[9px] md:text-sm leading-snug">
                    <thead>
                        {/* Chapter I Header */}
                        <tr className="bg-[#660099] text-[#FFFF00]">
                            <th colSpan="2" className="border border-black p-2 text-left bg-[#660099] font-bold">Chapter I- Admission Packet</th>
                            <th className="border border-black p-2 bg-[#660099]"></th>
                        </tr>
                        {/* Column Headers */}
                        <tr className="bg-gray-400">
                            <th className="border border-black p-2 font-bold w-[35%] text-center">Form Name</th>
                            <th className="border border-black p-2 font-bold w-[15%] text-center">Number</th>
                            <th className="border border-black p-2 font-bold w-[50%] text-left pl-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Chapter I Rows */}
                        <tr>
                            <td className="border border-black p-2 text-center">Client Information Form</td>
                            <td className="border border-black p-2 text-center">1</td>
                            <td className="border border-black p-2 text-left">
                                <input name="clientInformationForm" value={formData.clientInformationForm} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Enter data" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Service Agreement</td>
                            <td className="border border-black p-2 text-center">2</td>
                            <td className="border border-black p-2 text-center">
                                <input name="serviceAgreement" value={formData.serviceAgreement} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Service Agreement Addendum</td>
                            <td className="border border-black p-2 text-center">3</td>
                            <td className="border border-black p-2 text-center">
                                <input name="serviceAgreementAddendum" value={formData.serviceAgreementAddendum} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Service Care Plan</td>
                            <td className="border border-black p-2 text-center">4</td>
                            <td className="border border-black p-2 text-center">
                                <input name="serviceCarePlan" value={formData.serviceCarePlan} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Medication List</td>
                            <td className="border border-black p-2 text-center">5</td>
                            <td className="border border-black p-2 text-center">
                                <input name="medicationList" value={formData.medicationList} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Comprehensive Assessment</td>
                            <td className="border border-black p-2 text-center">6</td>
                            <td className="border border-black p-2 text-center">
                                <input name="comprehensiveAssessment" value={formData.comprehensiveAssessment} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Client's Rights and Responsibilities</td>
                            <td className="border border-black p-2 text-center">7</td>
                            <td className="border border-black p-2 text-left">
                                <input name="rightsSignature" value={formData.rightsSignature} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Signature" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Code of Ethics</td>
                            <td className="border border-black p-2 text-center">8</td>
                            <td className="border border-black p-2 text-left">
                                <input name="codeOfEthicsSignature" value={formData.codeOfEthicsSignature} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Signature" />
                            </td>
                        </tr>

                        {/* Chapter II Header */}
                        <tr>
                            <th colSpan="2" className="border border-black p-2 text-left bg-[#AA66CC] text-[#FFFF00] font-bold">Chapter II- Service Documentation</th>
                            <th className="border border-black p-2 text-center text-red-600 font-bold bg-white">
                                These forms are after onboarding
                            </th>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Supervisory Visits</td>
                            <td className="border border-black p-2 text-center">9</td>
                            <td className="border border-black p-2 text-center">
                                <input name="supervisoryVisits" value={formData.supervisoryVisits} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Incidence Report Form</td>
                            <td className="border border-black p-2 text-center">10</td>
                            <td className="border border-black p-2 text-center">
                                <input name="incidenceReportForm" value={formData.incidenceReportForm} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 text-center">Client Complaint Form</td>
                            <td className="border border-black p-2 text-center">11</td>
                            <td className="border border-black p-2 text-center">
                                <input name="clientComplaintForm" value={formData.clientComplaintForm} onChange={handleChange} onKeyDown={handleEnter} type="text" className="w-full bg-transparent outline-none border-b border-black text-[9px] md:text-sm" placeholder="Fillable form" />
                            </td>
                        </tr>
                    </tbody>
                </table>
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

export default SourceCCSPPrograms;
