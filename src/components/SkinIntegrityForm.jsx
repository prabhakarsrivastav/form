import React from 'react';
import logo from '../assets/logo.jpg';
import bodyDiagram from '../assets/body_diagram.png';

const SkinIntegrityForm = () => {
    return (
        <div className="w-full max-w-[21cm] mx-auto p-2 md:p-8 bg-white min-h-screen text-black font-serif text-sm md:text-base leading-tight">

            {/* Header */}
            <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="Pacific Health Systems Logo" className="h-16 md:h-20 object-contain mb-2" />
                <h1 className="text-xl md:text-2xl font">Skin Integrity Form</h1>
            </div>

            {/* Main Single Border Container */}
            <div className="border-2 border-black">
                {/* Instructions */}
                <div className="p-2 mb-4 text-xs md:text-sm">
                    Please describe the individuals skin integrity. Fill out one sheet for each site.
                </div>

                {/* Client Info - Strict Layout */}
                <div className="px-2 mb-4 text-xs md:text-sm">
                    {/* Row 1: Name and Date */}
                    <div className="flex items-end mb-2">
                        <span className="whitespace-nowrap mr-2">Individual’s Name:</span>
                        <input type="text" className="flex-grow border-b border-black outline-none min-w-[50px] mr-4" />

                        <span className="whitespace-nowrap mr-2">Date:</span>
                        <input type="date" className="w-32 border-b border-black outline-none" />
                    </div>

                    {/* Row 2: Staff Name, Time, Shift */}
                    <div className="flex items-end mb-2">
                        <span className="whitespace-nowrap mr-2">Staff Name:</span>
                        <input type="text" className="flex-grow border-b border-black outline-none min-w-[50px] mr-4" />

                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-2">Time/ Shift:</span>
                            <input type="text" className="w-32 border-b border-black outline-none" />
                        </div>
                    </div>

                    {/* Row 3: Skin Intact */}
                    <div className="flex items-end mb-2">
                        <span className="whitespace-nowrap mr-2">Skin Intact:</span>
                        <input type="text" className="flex-grow border-b border-black outline-none min-w-[50px] mr-4" />

                        <span className="whitespace-nowrap mr-2">Skin Not Intact:</span>
                        <input type="text" className="flex-grow border-b border-black outline-none min-w-[50px]" />
                    </div>
                </div>

                {/* Body Diagram */}
                <div className="mb-0 flex justify-center p-4 min-h-[300px] md:min-h-[400px]">
                    <img src={bodyDiagram} alt="Body Diagram" className="max-w-full h-auto object-contain" />
                </div>

                {/* Description Grid - Forced 3 Columns */}
                <div className="border-t border-b border-black flex flex-row mb-0 text-[10px] md:text-sm">
                    {/* Describe Column */}
                    <div className="w-1/3 border-r border-black p-1 md:p-2">
                        <div className="font-bold mb-2">DESCRIBE:</div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Mark on Body on the back sheet</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Skin Broken/ Open</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Skin Scratched (Skin Tear)</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Unusual Lesions (scars, rash, etc.)</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Pressure Ulcers</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <input type="text" className="w-4 md:w-8 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span className="whitespace-nowrap mr-1">Other:</span>
                            <input type="text" className="flex-grow border-b border-black outline-none min-w-0" />
                        </div>
                    </div>

                    {/* Color Column */}
                    <div className="w-1/3 border-r border-black p-1 md:p-2">
                        <div className="font-bold mb-2">COLOR:</div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Normal</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Pink</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Red</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Purple/ Blue</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Yellow</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Black</span>
                        </div>
                    </div>

                    {/* Size Column */}
                    <div className="w-1/3 p-1 md:p-2">
                        <div className="font-bold mb-2">SIZE:</div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Quarter Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Dime Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Nickel Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="text" className="w-8 md:w-12 border-b border-black mr-1 md:mr-2 shrink-0 outline-none" />
                            <span>Other:</span>
                        </div>
                        <input type="text" className="w-full border-b border-black outline-none mt-2" />
                    </div>
                </div>

                {/* Assistance Checklist */}
                <div className="border-b border-black p-2 mb-0 text-xs md:text-sm">
                    <div className="mb-2">Check all that apply below: Person Needs Assistance with:</div>

                    <div className="flex flex-col gap-2">
                        {/* Ambulation */}
                        <div className="flex items-end">
                            <span className="w-24 shrink-0">Ambulation:</span>
                            <span className="mx-1">Yes</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                            <span className="mx-2">No</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                        </div>

                        {/* Transfer */}
                        <div className="flex items-end">
                            <span className="w-24 shrink-0">Transfer:</span>
                            <span className="mx-1">Yes</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                            <span className="mx-2">No</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                        </div>

                        {/* Toileting & Right Block */}
                        <div className="flex flex-col md:flex-row gap-y-2">
                            <div className="flex items-start w-full md:w-auto">
                                <span className="w-24 shrink-0">Toileting:</span>
                                <span className="mx-1">Yes</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                                <span className="mx-2">No</span> <input type="text" className="w-12 border-b border-black mb-[2px] outline-none" />
                            </div>

                            {/* Right Block aligned with Toileting */}
                            <div className="flex flex-col gap-2 md:ml-12">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                    <div className="flex items-end">
                                        <span className="mr-1">Independent:</span>
                                        <input type="text" className="w-20 border-b border-black mb-[2px] outline-none" />
                                    </div>
                                    <div className="flex items-end">
                                        <span className="mr-1">Dependent:</span>
                                        <input type="text" className="w-20 border-b border-black mb-[2px] outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                    <div className="flex items-end">
                                        <span className="mr-1">Continence:</span>
                                        <input type="text" className="w-20 border-b border-black mb-[2px] outline-none" />
                                    </div>
                                    <div className="flex items-end">
                                        <span className="mr-1">Incontinence:</span>
                                        <input type="text" className="w-20 border-b border-black mb-[2px] outline-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments */}
                <div className="p-2 h-40">
                    <span className="font">Comments:</span>
                    <textarea className="w-full h-full bg-transparent outline-none resize-none mt-1"></textarea>
                </div>
            </div>

        </div>
    );
};

export default SkinIntegrityForm;
