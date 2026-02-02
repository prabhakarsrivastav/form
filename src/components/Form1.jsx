import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Form1 = () => {
    // Client info state
    const [clientInfo, setClientInfo] = useState({
        name: '',
        dob: '',
        address: '',
        phone: '',
        allergies: '',
        diagnosis: '',
        lpnRN: '',
        signatureDate: ''
    });

    // Medication table state (20 rows)
    const [medications, setMedications] = useState(
        Array.from({ length: 20 }, () => ({
            drug: '',
            dose: '',
            route: '',
            frequency: '',
        }))
    );

    // Handle client info change
    const handleClientChange = (e) => {
        const { name, value } = e.target;
        setClientInfo(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle medication change
    const handleMedicationChange = (index, field, value) => {
        const updated = [...medications];
        updated[index][field] = value;
        setMedications(updated);
    };

    // Submit handler
    const handleSubmit = () => {
        const formData = {
            clientInfo,
            medications,
        };

        console.log('FULL FORM DATA 👉', formData);
    };

    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-base leading-snug basic-form-container">

                {/* Header */}
                <div className="flex flex-col items-center mb-6 md:mb-8">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-10 md:h-24 object-contain mb-2 md:mb-4" />
                    <h1 className="text-sm md:text-2xl font-serif text-center">
                        Patient Medication Record
                    </h1>
                </div>

                {/* Client Information */}
                <div className="mb-6 md:mb-8 border border-black">

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Client Name:
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={clientInfo.name}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Date of Birth (DOB):
                        </div>
                        <input
                            type="date"
                            name="dob"
                            value={clientInfo.dob}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Address:
                        </div>
                        <input
                            type="text"
                            name="address"
                            value={clientInfo.address}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Phone:
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={clientInfo.phone}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex border-b border-black">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Allergies:
                        </div>
                        <input
                            type="text"
                            name="allergies"
                            value={clientInfo.allergies}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>

                    <div className="flex">
                        <div className="w-[30%] p-1 font-bold border-r border-black bg-gray-50 flex items-center">
                            Diagnosis:
                        </div>
                        <input
                            type="text"
                            name="diagnosis"
                            value={clientInfo.diagnosis}
                            onChange={handleClientChange}
                            className="w-[70%] p-1 outline-none bg-transparent"
                        />
                    </div>
                </div>

                {/* Medication Table */}
                <div className="mb-8 md:mb-12 border border-black">
                    <div className="grid grid-cols-4 bg-gray-200 border-b border-black font-bold text-center">
                        <div className="p-1 border-r border-black">Medication/Drug</div>
                        <div className="p-1 border-r border-black">Dose</div>
                        <div className="p-1 border-r border-black">Route</div>
                        <div className="p-1">Frequency</div>
                    </div>

                    {medications.map((row, index) => (
                        <div key={index} className={`grid grid-cols-4 ${index !== 19 ? 'border-b border-black' : ''}`}>
                            <input
                                value={row.drug}
                                onChange={(e) => handleMedicationChange(index, 'drug', e.target.value)}
                                className="p-1 border-r border-black outline-none bg-transparent"
                            />
                            <input
                                value={row.dose}
                                onChange={(e) => handleMedicationChange(index, 'dose', e.target.value)}
                                className="p-1 border-r border-black outline-none bg-transparent"
                            />
                            <input
                                value={row.route}
                                onChange={(e) => handleMedicationChange(index, 'route', e.target.value)}
                                className="p-1 border-r border-black outline-none bg-transparent"
                            />
                            <input
                                value={row.frequency}
                                onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                                className="p-1 outline-none bg-transparent"
                            />
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between mt-8 md:mt-12 pt-4 md:pt-8 gap-4">
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold">LPN/RN Signature:</span>
                        <input
                            type="text"
                            name="lpnRN"
                            value={clientInfo.lpnRN}
                            onChange={handleClientChange}
                            className="border-b border-black flex-grow outline-none bg-transparent"
                        />                    </div>
                    <div className="flex items-end gap-2 w-1/2">
                        <span className="font-bold">Date:</span>
                        <input
                            type="date"
                            name="signatureDate"
                            value={clientInfo.signatureDate}
                            onChange={handleClientChange}
                            className="border-b border-black flex-grow outline-none bg-transparent"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-black text-white text-sm rounded hover:opacity-80"
                    >
                        Console Log Form Data
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Form1;
