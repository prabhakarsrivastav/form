import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const PatientMedicationRecord = () => {
    const [formData, setFormData] = useState({
        clientInfo: {
            name: '',
            dob: '',
            address: '',
            phone: '',
            allergies: '',
            diagnosis: ''
        },
        medications: Array(20).fill({ name: '', dose: '', route: '', freq: '' }),
        footer: {
            rnSignature: '',
            date: ''
        }
    });

    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    };

    const handleMedicationChange = (index, field, value) => {
        setFormData(prev => {
            const newMeds = [...prev.medications];
            newMeds[index] = { ...newMeds[index], [field]: value };
            return { ...prev, medications: newMeds };
        });
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
        console.log('PatientMedicationRecord Data:', formData);
    };

    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-base leading-snug basic-form-container relative">
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
                        <input
                            type="text"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.name}
                            onChange={(e) => handleChange('clientInfo', 'name', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Date of Birth (DOB):
                        </div>
                        <input
                            type="date"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.dob}
                            onChange={(e) => handleChange('clientInfo', 'dob', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Address:
                        </div>
                        <input
                            type="text"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.address}
                            onChange={(e) => handleChange('clientInfo', 'address', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Phone:
                        </div>
                        <input
                            type="tel"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.phone}
                            onChange={(e) => handleChange('clientInfo', 'phone', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Allergies:
                        </div>
                        <input
                            type="text"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.allergies}
                            onChange={(e) => handleChange('clientInfo', 'allergies', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Diagnosis:
                        </div>
                        <input
                            type="text"
                            className="w-[70%] p-1 outline-none bg-transparent"
                            value={formData.clientInfo.diagnosis}
                            onChange={(e) => handleChange('clientInfo', 'diagnosis', e.target.value)}
                            onKeyDown={handleEnter}
                        />
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
                        {formData.medications.map((row, index) => (
                            <div key={index} className={`grid grid-cols-4 ${index !== 19 ? 'border-b border-black' : ''}`}>
                                <input
                                    type="text"
                                    className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent"
                                    value={row.name}
                                    onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                                <input
                                    type="text"
                                    className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent"
                                    value={row.dose}
                                    onChange={(e) => handleMedicationChange(index, 'dose', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                                <input
                                    type="text"
                                    className="p-1 border-r border-black outline-none w-full min-w-0 bg-transparent"
                                    value={row.route}
                                    onChange={(e) => handleMedicationChange(index, 'route', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                                <input
                                    type="text"
                                    className="p-1 outline-none w-full min-w-0 bg-transparent"
                                    value={row.freq}
                                    onChange={(e) => handleMedicationChange(index, 'freq', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-row justify-between mt-8 md:mt-12 pt-4 md:pt-8 gap-4 md:gap-8">
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold whitespace-nowrap">LPN/RN Signature:</span>
                        <input
                            type="text"
                            className="border-b border-black flex-grow h-4 md:h-6 outline-none bg-transparent"
                            value={formData.footer.rnSignature}
                            onChange={(e) => handleChange('footer', 'rnSignature', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold">Date:</span>
                        <input
                            type="date"
                            className="border-b border-black flex-grow outline-none bg-transparent min-w-0"
                            value={formData.footer.date}
                            onChange={(e) => handleChange('footer', 'date', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientMedicationRecord;
