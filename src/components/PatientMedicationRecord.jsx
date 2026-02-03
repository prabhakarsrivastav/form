import React from 'react';
import logo from '../assets/logo.jpg';

const PatientMedicationRecord = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-base leading-snug basic-form-container">
                {/* Header */}
                <div className="flex flex-col items-center mb-6 md:mb-8">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-10 md:h-24 object-contain mb-2 md:mb-4" />
                    <h1 className="text-sm md:text-2xl font-serif text-center">Patient Medication Record</h1>
                </div>

                {/* Client Information Table */}
                <div className="mb-6 md:mb-8 border border-black">

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Client Name:
                        </div>
                        <input type="text" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Date of Birth (DOB):
                        </div>
                        <input type="date" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Address:
                        </div>
                        <input type="text" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Phone:
                        </div>
                        <input type="tel" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Allergies:
                        </div>
                        <input type="text" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                    <div className="flex">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Diagnosis:
                        </div>
                        <input type="text" className="w-[70%] p-1 outline-none bg-transparent" />
                    </div>

                </div>


                {/* Medication Table */}
                <div className="mb-8 md:mb-12 border border-black">
                    <div className="w-full">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-gray-200 border-b border-black font-bold text-center">
                            <div className="p-1 border-r border-black">Medication/Drug</div>
                            <div className="p-1 border-r border-black">Dose</div>
                            <div className="p-1 border-r border-black">Route</div>
                            <div className="p-1">Frequency</div>
                        </div>

                        {/* Table Rows (20 rows) */}
                        {[...Array(20)].map((_, index) => (
                            <div key={index} className={`grid grid-cols-4 ${index !== 19 ? 'border-b border-black' : ''}`}>
                                <input type="text" className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent" />
                                <input type="text" className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent" />
                                <input type="text" className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent" />
                                <input type="text" className="p-1 outline-none w-full min-w-0 bg-transparent" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-row justify-between mt-8 md:mt-12 pt-4 md:pt-8 gap-4 md:gap-8">
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold whitespace-nowrap">LPN/RN Signature:</span>
                        <div className="border-b border-black flex-grow h-4 md:h-6"></div>
                    </div>
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold">Date:</span>
                        <input type="date" className="border-b border-black flex-grow outline-none bg-transparent min-w-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientMedicationRecord;
