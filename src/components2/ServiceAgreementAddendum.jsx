import React, { useState } from 'react';
import logo from '../assets/Picture1.png';

const ServiceAgreementAddendum = () => {
    // Initialize with 3 rows as per original design
    const [rows, setRows] = useState([
        { change: '', reason: '', date: '', acknowledgment: '' },
        { change: '', reason: '', date: '', acknowledgment: '' },
        { change: '', reason: '', date: '', acknowledgment: '' }
    ]);

    const handleRowChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index] = { ...newRows[index], [field]: value };
        setRows(newRows);
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

                {/* Header with Logo */}
                <div className="flex flex-col items-center mb-8">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-12 md:h-20 object-contain mb-4" />
                    <h1 className="font-bold text-center text-sm md:text-xl text-black">Addendum to Service Agreement</h1>
                    <p className="text-center italic mt-1 font-semibold">
                        This form should be completed when there are revisions to the original service agreement.
                    </p>
                </div>

                {/* Table */}
                <div className="border border-black mb-8">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 border-b border-black font-bold text-[8px] md:text-sm leading-tight">
                        <div className="p-1 border-r border-black h-full flex items-center justify-center text-center break-words">Specific Change to be Made</div>
                        <div className="p-1 border-r border-black h-full flex items-center justify-center text-center break-words">Reason for Change/Type of Service</div>
                        <div className="p-1 border-r border-black h-full flex items-center justify-center text-center break-words">Date Change to Begin</div>
                        <div className="p-1 h-full flex items-center justify-center text-center break-words">Client Acknowledgement</div>
                    </div>

                    {/* Dynamic Rows */}
                    {rows.map((row, i) => (
                        <div key={i} className="grid grid-cols-4 border-b border-black min-h-[50px] md:min-h-[100px]">
                            <div className="border-r border-black p-1">
                                <textarea
                                    value={row.change}
                                    onChange={(e) => handleRowChange(i, 'change', e.target.value)}
                                    onKeyDown={handleEnter}
                                    className="w-full h-full bg-transparent outline-none resize-none min-w-0 text-[9px] md:text-sm"
                                ></textarea>
                            </div>
                            <div className="border-r border-black p-1">
                                <textarea
                                    value={row.reason}
                                    onChange={(e) => handleRowChange(i, 'reason', e.target.value)}
                                    onKeyDown={handleEnter}
                                    className="w-full h-full bg-transparent outline-none resize-none min-w-0 text-[9px] md:text-sm"
                                ></textarea>
                            </div>
                            <div className="border-r border-black p-1">
                                <input
                                    type="date"
                                    value={row.date}
                                    onChange={(e) => handleRowChange(i, 'date', e.target.value)}
                                    onKeyDown={handleEnter}
                                    className="w-full bg-transparent outline-none min-w-0 text-[8px] md:text-sm"
                                />
                            </div>
                            <div className="p-1">
                                <textarea
                                    value={row.acknowledgment}
                                    onChange={(e) => handleRowChange(i, 'acknowledgment', e.target.value)}
                                    onKeyDown={handleEnter}
                                    className="w-full h-full bg-transparent outline-none resize-none min-w-0 placeholder:text-gray-400 text-[9px] md:text-sm"
                                    placeholder="Sign/Initial"
                                ></textarea>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center p-4">
                    <button
                        onClick={() => console.log(rows)}
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                    >
                        Log Data
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ServiceAgreementAddendum;
