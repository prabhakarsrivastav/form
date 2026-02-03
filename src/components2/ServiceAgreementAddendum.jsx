import React from 'react';
import logo from '../assets/Picture1.png';

const ServiceAgreementAddendum = () => {
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

                    {/* Empty Rows (3 rows as per image + standard placeholders) */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="grid grid-cols-4 border-b border-black min-h-[50px] md:min-h-[100px]">
                            <div className="border-r border-black p-1">
                                <textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0 text-[9px] md:text-sm"></textarea>
                            </div>
                            <div className="border-r border-black p-1">
                                <textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0 text-[9px] md:text-sm"></textarea>
                            </div>
                            <div className="border-r border-black p-1">
                                <input type="date" className="w-full bg-transparent outline-none min-w-0 text-[8px] md:text-sm" />
                            </div>
                            <div className="p-1">
                                <textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0 placeholder:text-gray-400 text-[9px] md:text-sm" placeholder="Sign/Initial"></textarea>
                            </div>
                        </div>
                    ))}
                    {/* Closing border for visual consistency if needed, but the loop border-b works. 
                        Actually, last row border-b is fine. 
                    */}
                </div>

            </div>
        </div>
    );
};

export default ServiceAgreementAddendum;
