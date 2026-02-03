import React from 'react';

const ClientBasicInfo = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-sm leading-snug">

                {/* Main Header */}
                <h1 className="font-bold text-center text-sm md:text-xl mb-6 uppercase">CLIENT BASIC INFORMATION SHEET</h1>

                {/* Client Info Grid - 3 Columns */}
                <div className="border border-black mb-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-black">
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Name</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Date of Birth</span>
                            <input type="date" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Sex</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 border-b border-black">
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Last 4 Digits</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Veteran’s Status</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 h-24 flex flex-col">
                            <span className="font-bold mb-1 uppercase">DATE OF REFERRAL</span>
                            <input type="date" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-3 border-b border-black">
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Admitted From (place & address)</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Phone #</span>
                            <input type="tel" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Date Admitted</span>
                            <input type="date" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-3 border-b border-black">
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Referral Source Agency</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 border-r border-black h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Participant’s Address</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 h-24 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Phone #</span>
                            <input type="tel" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-3">
                        <div className="p-1 border-r border-black h-28 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Person’s/Agency Providing Service</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 border-r border-black h-28 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Address/Phone #</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 h-28 flex flex-col">
                            <span className="font-bold mb-1 break-words leading-tight">Program Type: NOW/COMP/ SOURCE/CCSP/GAPP/ICWP</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                    </div>
                </div>

                {/* Family Info Section */}
                <h2 className="font-bold text-sm md:text-base mb-2 uppercase">FAMILY/RESPONSIBLE PARTY INFORMATION</h2>
                <div className="border border-black mb-8">
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b border-black uppercase font-bold bg-white">
                        <div className="p-1 border-r border-black">NEXT OF KIN</div>
                        <div className="p-1 border-r border-black">ADDRESS</div>
                        <div className="p-1">PHONE #</div>
                    </div>
                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-black h-24">
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                    </div>

                    {/* Header 2 */}
                    <div className="grid grid-cols-3 border-b border-black uppercase font-bold bg-white">
                        <div className="p-1 border-r border-black">LEGAL GUARDIAN, SURROGATE, RESPONSIBLE PERSON</div>
                        <div className="p-1 border-r border-black">ADDRESS</div>
                        <div className="p-1">PHONE #</div>
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-3 border-b border-black h-24">
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                    </div>

                    {/* Header 3 */}
                    <div className="grid grid-cols-3 border-b border-black uppercase font-bold bg-white text-[8px] md:text-sm">
                        <div className="p-1 border-r border-black">REPRESENTATIVE PAYEE (if applicable)</div>
                        <div className="p-1 border-r border-black">ADDRESS</div>
                        <div className="p-1">PHONE #</div>
                    </div>
                    {/* Row 3 */}
                    <div className="grid grid-cols-3 h-24">
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1 border-r border-black"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                        <div className="p-1"><textarea className="w-full h-full bg-transparent outline-none resize-none min-w-0"></textarea></div>
                    </div>
                </div>

                {/* Physician Info Section */}
                <div className="border border-black mb-8">
                    <div className="p-1 font-bold border-b border-black uppercase bg-white">CLIENT PERSONAL PHYSICIAN INFORMATION</div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-black min-h-[80px]">
                        <div className="p-1 border-r border-black flex flex-col">
                            <span className="font-bold break-words leading-tight">Client Physician</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" defaultValue="Dr. Peter Nwaizuzu" />
                        </div>
                        <div className="p-1 border-r border-black flex flex-col">
                            <span className="font-bold break-words leading-tight">Physician Address</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none break-words" defaultValue="8 Jonesboro St, McDonough, GA 30253"></textarea>
                        </div>
                        <div className="p-1 flex flex-col">
                            <span className="font-bold break-words leading-tight">Physician Phone #</span>
                            <input type="tel" className="w-full bg-transparent outline-none flex-grow min-w-0" defaultValue="(800) 734-8186" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 min-h-[80px]">
                        <div className="p-1 border-r border-black flex flex-col">
                            <span className="font-bold ">Client Physician</span>
                            <input type="text" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                        <div className="p-1 border-r border-black flex flex-col">
                            <span className="font-bold ">Physician Address</span>
                            <textarea className="w-full bg-transparent outline-none flex-grow min-w-0 resize-none"></textarea>
                        </div>
                        <div className="p-1 flex flex-col">
                            <span className="font-bold ">Physician Phone #</span>
                            <input type="tel" className="w-full bg-transparent outline-none flex-grow min-w-0" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientBasicInfo;
