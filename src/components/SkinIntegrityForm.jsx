import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import bodyDiagram from '../assets/body_diagram.png';

const SkinIntegrityForm = () => {
    const [formData, setFormData] = useState({
        clientInfo: {
            name: '',
            date: '',
            staffName: '',
            timeShift: '',
            skinIntact: '',
            skinNotIntact: ''
        },
        description: {
            markOnBody: false,
            broken: false,
            scratched: false,
            lesions: false,
            ulcers: false,
            other: false,
            otherText: ''
        },
        color: {
            normal: false,
            pink: false,
            red: false,
            purpleBlue: false,
            yellow: false,
            black: false
        },
        size: {
            quarter: false,
            dime: false,
            nickel: false,
            other: false,
            otherText: ''
        },
        assistance: {
            ambulation: { yes: '', no: '' },
            transfer: { yes: '', no: '' },
            toileting: { yes: '', no: '' }
        },
        status: {
            independent: '',
            dependent: '',
            continence: '',
            incontinence: ''
        },
        comments: ''
    });

    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    };

    const handleNestedChange = (section, subsection, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [subsection]: { ...prev[section][subsection], [field]: value }
            }
        }));
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            if (form) {
                const index = Array.prototype.indexOf.call(form, e.target);
                if (form.elements[index + 1]) form.elements[index + 1].focus();
            }
        }
    };

    const logData = () => {
        console.log('SkinIntegrityForm Data:', formData);
    };

    return (
        <div className="w-full max-w-[21cm] mx-auto p-2 md:p-8 bg-white min-h-screen text-black font-serif text-sm md:text-base leading-tight relative">
            {/* Log Data Button */}
            <div className="absolute top-2 right-2 no-print">
                <button
                    type="button"
                    onClick={logData}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs"
                >
                    Log Data
                </button>
            </div>

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
                        <input
                            type="text"
                            className="flex-grow border-b border-black outline-none min-w-[50px] mr-4"
                            value={formData.clientInfo.name}
                            onChange={(e) => handleChange('clientInfo', 'name', e.target.value)}
                            onKeyDown={handleEnter}
                        />

                        <span className="whitespace-nowrap mr-2">Date:</span>
                        <input
                            type="date"
                            className="w-32 border-b border-black outline-none"
                            value={formData.clientInfo.date}
                            onChange={(e) => handleChange('clientInfo', 'date', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    {/* Row 2: Staff Name, Time, Shift */}
                    <div className="flex items-end mb-2">
                        <span className="whitespace-nowrap mr-2">Staff Name:</span>
                        <input
                            type="text"
                            className="flex-grow border-b border-black outline-none min-w-[50px] mr-4"
                            value={formData.clientInfo.staffName}
                            onChange={(e) => handleChange('clientInfo', 'staffName', e.target.value)}
                            onKeyDown={handleEnter}
                        />

                        <div className="flex items-end">
                            <span className="whitespace-nowrap mr-2">Time/ Shift:</span>
                            <input
                                type="text"
                                className="w-32 border-b border-black outline-none"
                                value={formData.clientInfo.timeShift}
                                onChange={(e) => handleChange('clientInfo', 'timeShift', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                        </div>
                    </div>

                    {/* Row 3: Skin Intact */}
                    <div className="flex items-end mb-2">
                        <span className="whitespace-nowrap mr-2">Skin Intact:</span>
                        <input
                            type="text"
                            className="flex-grow border-b border-black outline-none min-w-[50px] mr-4"
                            value={formData.clientInfo.skinIntact}
                            onChange={(e) => handleChange('clientInfo', 'skinIntact', e.target.value)}
                            onKeyDown={handleEnter}
                        />

                        <span className="whitespace-nowrap mr-2">Skin Not Intact:</span>
                        <input
                            type="text"
                            className="flex-grow border-b border-black outline-none min-w-[50px]"
                            value={formData.clientInfo.skinNotIntact}
                            onChange={(e) => handleChange('clientInfo', 'skinNotIntact', e.target.value)}
                            onKeyDown={handleEnter}
                        />
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
                            <input type="checkbox" className="mr-2" checked={formData.description.markOnBody} onChange={(e) => handleChange('description', 'markOnBody', e.target.checked)} />
                            <span>Mark on Body on the back sheet</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.description.broken} onChange={(e) => handleChange('description', 'broken', e.target.checked)} />
                            <span>Skin Broken/ Open</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.description.scratched} onChange={(e) => handleChange('description', 'scratched', e.target.checked)} />
                            <span>Skin Scratched (Skin Tear)</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.description.lesions} onChange={(e) => handleChange('description', 'lesions', e.target.checked)} />
                            <span>Unusual Lesions (scars, rash, etc.)</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.description.ulcers} onChange={(e) => handleChange('description', 'ulcers', e.target.checked)} />
                            <span>Pressure Ulcers</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <input type="checkbox" className="mr-2" checked={formData.description.other} onChange={(e) => handleChange('description', 'other', e.target.checked)} />
                            <span className="whitespace-nowrap mr-1">Other:</span>
                            <input
                                type="text"
                                className="flex-grow border-b border-black outline-none min-w-0"
                                value={formData.description.otherText}
                                onChange={(e) => handleChange('description', 'otherText', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                        </div>
                    </div>

                    {/* Color Column */}
                    <div className="w-1/3 border-r border-black p-1 md:p-2">
                        <div className="font-bold mb-2">COLOR:</div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.normal} onChange={(e) => handleChange('color', 'normal', e.target.checked)} />
                            <span>Normal</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.pink} onChange={(e) => handleChange('color', 'pink', e.target.checked)} />
                            <span>Pink</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.red} onChange={(e) => handleChange('color', 'red', e.target.checked)} />
                            <span>Red</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.purpleBlue} onChange={(e) => handleChange('color', 'purpleBlue', e.target.checked)} />
                            <span>Purple/ Blue</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.yellow} onChange={(e) => handleChange('color', 'yellow', e.target.checked)} />
                            <span>Yellow</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.color.black} onChange={(e) => handleChange('color', 'black', e.target.checked)} />
                            <span>Black</span>
                        </div>
                    </div>

                    {/* Size Column */}
                    <div className="w-1/3 p-1 md:p-2">
                        <div className="font-bold mb-2">SIZE:</div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.size.quarter} onChange={(e) => handleChange('size', 'quarter', e.target.checked)} />
                            <span>Quarter Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.size.dime} onChange={(e) => handleChange('size', 'dime', e.target.checked)} />
                            <span>Dime Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.size.nickel} onChange={(e) => handleChange('size', 'nickel', e.target.checked)} />
                            <span>Nickel Size</span>
                        </div>
                        <div className="flex items-center mb-1 md:mb-2">
                            <input type="checkbox" className="mr-2" checked={formData.size.other} onChange={(e) => handleChange('size', 'other', e.target.checked)} />
                            <span>Other:</span>
                        </div>
                        <input
                            type="text"
                            className="w-full border-b border-black outline-none mt-2"
                            value={formData.size.otherText}
                            onChange={(e) => handleChange('size', 'otherText', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>
                </div>

                {/* Assistance Checklist */}
                <div className="border-b border-black p-2 mb-0 text-xs md:text-sm">
                    <div className="mb-2">Check all that apply below: Person Needs Assistance with:</div>

                    <div className="flex flex-col gap-2">
                        {/* Ambulation */}
                        <div className="flex items-end">
                            <span className="w-24 shrink-0">Ambulation:</span>
                            <span className="mx-1">Yes</span>
                            <input
                                type="text"
                                className="w-12 border-b border-black mb-[2px] outline-none"
                                value={formData.assistance.ambulation.yes}
                                onChange={(e) => handleNestedChange('assistance', 'ambulation', 'yes', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                            <span className="mx-2">No</span>
                            <input
                                type="text"
                                className="w-12 border-b border-black mb-[2px] outline-none"
                                value={formData.assistance.ambulation.no}
                                onChange={(e) => handleNestedChange('assistance', 'ambulation', 'no', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                        </div>

                        {/* Transfer */}
                        <div className="flex items-end">
                            <span className="w-24 shrink-0">Transfer:</span>
                            <span className="mx-1">Yes</span>
                            <input
                                type="text"
                                className="w-12 border-b border-black mb-[2px] outline-none"
                                value={formData.assistance.transfer.yes}
                                onChange={(e) => handleNestedChange('assistance', 'transfer', 'yes', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                            <span className="mx-2">No</span>
                            <input
                                type="text"
                                className="w-12 border-b border-black mb-[2px] outline-none"
                                value={formData.assistance.transfer.no}
                                onChange={(e) => handleNestedChange('assistance', 'transfer', 'no', e.target.value)}
                                onKeyDown={handleEnter}
                            />
                        </div>

                        {/* Toileting & Right Block */}
                        <div className="flex flex-col md:flex-row gap-y-2">
                            <div className="flex items-start w-full md:w-auto">
                                <span className="w-24 shrink-0">Toileting:</span>
                                <span className="mx-1">Yes</span>
                                <input
                                    type="text"
                                    className="w-12 border-b border-black mb-[2px] outline-none"
                                    value={formData.assistance.toileting.yes}
                                    onChange={(e) => handleNestedChange('assistance', 'toileting', 'yes', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                                <span className="mx-2">No</span>
                                <input
                                    type="text"
                                    className="w-12 border-b border-black mb-[2px] outline-none"
                                    value={formData.assistance.toileting.no}
                                    onChange={(e) => handleNestedChange('assistance', 'toileting', 'no', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </div>

                            {/* Right Block aligned with Toileting */}
                            <div className="flex flex-col gap-2 md:ml-12">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                    <div className="flex items-end">
                                        <span className="mr-1">Independent:</span>
                                        <input
                                            type="text"
                                            className="w-20 border-b border-black mb-[2px] outline-none"
                                            value={formData.status.independent}
                                            onChange={(e) => handleChange('status', 'independent', e.target.value)}
                                            onKeyDown={handleEnter}
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <span className="mr-1">Dependent:</span>
                                        <input
                                            type="text"
                                            className="w-20 border-b border-black mb-[2px] outline-none"
                                            value={formData.status.dependent}
                                            onChange={(e) => handleChange('status', 'dependent', e.target.value)}
                                            onKeyDown={handleEnter}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                    <div className="flex items-end">
                                        <span className="mr-1">Continence:</span>
                                        <input
                                            type="text"
                                            className="w-20 border-b border-black mb-[2px] outline-none"
                                            value={formData.status.continence}
                                            onChange={(e) => handleChange('status', 'continence', e.target.value)}
                                            onKeyDown={handleEnter}
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <span className="mr-1">Incontinence:</span>
                                        <input
                                            type="text"
                                            className="w-20 border-b border-black mb-[2px] outline-none"
                                            value={formData.status.incontinence}
                                            onChange={(e) => handleChange('status', 'incontinence', e.target.value)}
                                            onKeyDown={handleEnter}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments */}
                <div className="p-2 h-40">
                    <span className="font">Comments:</span>
                    <textarea
                        className="w-full h-full bg-transparent outline-none resize-none mt-1"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    ></textarea>
                </div>
            </div>

        </div>
    );
};

export default SkinIntegrityForm;
