import React, { useState } from 'react';

const IncidentReportingForm = () => {
    const [formData, setFormData] = useState({
        incidentTypes: {
            abuse: { physical: false, verbal: false, sexual: false, mental: false, staffToClient: false },
            death: { unexpected: false, waiverRequestPending: false, hospiceProvided: false, called911: false, time911: '' },
            cprStaff: '',
            seriousInjury: { resultedInDeath: false, hospitalAdmission: false, erVisit: false, mdVisit: false },
            externalDisaster: { fire: false, flood: false, physicalPlantDamage: false, clientsRelocated: false },
            missingResident: { policeNotifiedDate: '', policeNotifiedTime: '' },
            memoryImpairment: false,
            other: { neglect: false, exploitation: false, criminalRecord: false, insuranceWill: false, specify: '' }
        },
        details: {
            residentNames: '',
            dateOfIncident: '',
            timeOfIncident: '',
            incidentDetails: ['', '', '']
        },
        notifications: {
            residentName: '',
            familyGuardian: '',
            physician: '',
            police: '',
            otherNotify: '',
            perpetratorName: '',
            relationshipToResident: '',
            currentAddress: '',
            phone: '',
            cityStateZip: '',
            witnessNames: '',
            witnessAddress: '',
            witnessPhone: '',
            witnessRelationship: ''
        },
        mitigationSteps: ['', '', '', ''],
        footer: {
            reporter: '',
            title: '',
            dateOfReport: '',
            timeOfReport: ''
        }
    });

    const handleChange = (e, section, key, index = null) => {
        const { type, checked, value } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prev => {
            const newData = { ...prev };
            if (section) {
                if (index !== null) {
                    const newArray = [...prev[section][key]];
                    newArray[index] = val;
                    newData[section][key] = newArray;
                } else if (key) {
                    if (typeof prev[section][key] === 'object' && !Array.isArray(prev[section][key])) {
                        // This handles nested object updates if needed, though most logic is flat per section
                    } else {
                        // simple nested key update
                    }
                }
            }
            return newData;
        });
    };

    // Simplified handler for deep nested updates
    const updateState = (path, value) => {
        setFormData(prev => {
            const newState = { ...prev };
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newState;
        });
    };

    const handleCheckbox = (path) => (e) => updateState(path, e.target.checked);
    const handleInput = (path) => (e) => updateState(path, e.target.value);
    const handleArrayInput = (path, index) => (e) => {
        setFormData(prev => {
            const newState = { ...prev };
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            const newArray = [...current[path[path.length - 1]]];
            newArray[index] = e.target.value;
            current[path[path.length - 1]] = newArray;
            return newState;
        });
    };


    // Helper function for Enter key navigation
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
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-8 bg-white text-[9px] md:text-sm leading-snug border-2 border-black">

                <h1 className="text-xl md:text-2xl font-bold text-center mb-6 uppercase">INCIDENT REPORTING FORM</h1>

                {/* Header Table */}
                <div className="border-2 border-black mb-6">
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] border-b border-black">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">Agency Address</div>
                        <div className="p-1">303 Corporate Center Dr. Suite 325 Stockbridge GA 30281</div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] border-b border-black">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">County</div>
                        <div className="p-1">Henry</div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] border-b border-black">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">Phone</div>
                        <div className="p-1">678-7782-2473</div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] border-b border-black">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">Fax</div>
                        <div className="p-1">678-669-1693</div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] border-b border-black">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">Email</div>
                        <div className="p-1 text-blue-600 underline cursor-pointer">Claudia.campbell@pacifichealthsystems.net</div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr]">
                        <div className="bg-gray-300 p-1 border-r border-black font-bold">Administrator</div>
                        <div className="p-1">Clauda Campbell</div>
                    </div>
                </div>

                {/* Type of Incident */}
                <div className="mb-4 font-bold">Type of Incident (check all that apply):</div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <input type="checkbox" className="mr-1" />
                    <span className="font-bold">Abuse:</span>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.abuse.physical} onChange={handleCheckbox(['incidentTypes', 'abuse', 'physical'])} /> Physical</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.abuse.verbal} onChange={handleCheckbox(['incidentTypes', 'abuse', 'verbal'])} /> Verbal</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.abuse.sexual} onChange={handleCheckbox(['incidentTypes', 'abuse', 'sexual'])} /> Sexual</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.abuse.mental} onChange={handleCheckbox(['incidentTypes', 'abuse', 'mental'])} /> mental</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.abuse.staffToClient} onChange={handleCheckbox(['incidentTypes', 'abuse', 'staffToClient'])} /> Staff to Client</label>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <input type="checkbox" className="mr-1" />
                    <span className="font-bold">Death:</span>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.death.unexpected} onChange={handleCheckbox(['incidentTypes', 'death', 'unexpected'])} /> Unexpected</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.death.waiverRequestPending} onChange={handleCheckbox(['incidentTypes', 'death', 'waiverRequestPending'])} /> Waiver request pending</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.death.hospiceProvided} onChange={handleCheckbox(['incidentTypes', 'death', 'hospiceProvided'])} /> Hospice provided</label>
                    <label className="flex items-center gap-1 ml-2"><input type="checkbox" checked={formData.incidentTypes.death.called911} onChange={handleCheckbox(['incidentTypes', 'death', 'called911'])} /> 911 called (Time <input type="text" value={formData.incidentTypes.death.time911} onChange={handleInput(['incidentTypes', 'death', 'time911'])} onKeyDown={handleEnter} className="border-b border-black w-16 outline-none text-center text-[9px] md:text-sm" />)</label>
                </div>

                <div className="flex items-end gap-2 mb-2">
                    <span>CPR by (Staff Name:</span>
                    <input type="text" value={formData.incidentTypes.cprStaff} onChange={handleInput(['incidentTypes', 'cprStaff'])} onKeyDown={handleEnter} className="border-b border-black flex-grow outline-none text-[9px] md:text-sm" />
                    <span>)</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <input type="checkbox" className="mr-1" />
                    <span className="font-bold">Serious Injury:</span>
                    <label className="ml-2 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.seriousInjury.resultedInDeath} onChange={handleCheckbox(['incidentTypes', 'seriousInjury', 'resultedInDeath'])} /> resulted in death</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.seriousInjury.hospitalAdmission} onChange={handleCheckbox(['incidentTypes', 'seriousInjury', 'hospitalAdmission'])} /> Hospital admission</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.seriousInjury.erVisit} onChange={handleCheckbox(['incidentTypes', 'seriousInjury', 'erVisit'])} /> ER visit</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.seriousInjury.mdVisit} onChange={handleCheckbox(['incidentTypes', 'seriousInjury', 'mdVisit'])} /> MD visit</label>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-bold">External Disaster:</span>
                    <label className="ml-2 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.externalDisaster.fire} onChange={handleCheckbox(['incidentTypes', 'externalDisaster', 'fire'])} /> Fire</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.externalDisaster.flood} onChange={handleCheckbox(['incidentTypes', 'externalDisaster', 'flood'])} /> Flood</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.externalDisaster.physicalPlantDamage} onChange={handleCheckbox(['incidentTypes', 'externalDisaster', 'physicalPlantDamage'])} /> Damage to physical plant</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.externalDisaster.clientsRelocated} onChange={handleCheckbox(['incidentTypes', 'externalDisaster', 'clientsRelocated'])} /> Clients relocated</label>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-bold">Missing Resident:</span>
                    <span className="ml-2">Police notified (Date <input type="date" value={formData.incidentTypes.missingResident.policeNotifiedDate} onChange={handleInput(['incidentTypes', 'missingResident', 'policeNotifiedDate'])} onKeyDown={handleEnter} className="border-b border-black w-24 outline-none text-center text-[9px] md:text-sm" /> Time <input type="text" value={formData.incidentTypes.missingResident.policeNotifiedTime} onChange={handleInput(['incidentTypes', 'missingResident', 'policeNotifiedTime'])} onKeyDown={handleEnter} className="border-b border-black w-16 outline-none text-center text-[9px] md:text-sm" />)</span>
                </div>

                <div className="mb-2 flex items-center gap-1">
                    <input type="checkbox" checked={formData.incidentTypes.memoryImpairment} onChange={handleCheckbox(['incidentTypes', 'memoryImpairment'])} /> Client has memory impairment
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-bold">Other:</span>
                    <label className="ml-2 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.other.neglect} onChange={handleCheckbox(['incidentTypes', 'other', 'neglect'])} /> Neglect</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.other.exploitation} onChange={handleCheckbox(['incidentTypes', 'other', 'exploitation'])} /> Exploitation</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.other.criminalRecord} onChange={handleCheckbox(['incidentTypes', 'other', 'criminalRecord'])} /> Owner/staff acquires criminal record</label>
                    <label className="ml-4 flex items-center gap-1"><input type="checkbox" checked={formData.incidentTypes.other.insuranceWill} onChange={handleCheckbox(['incidentTypes', 'other', 'insuranceWill'])} /> Insurance/will</label>
                </div>

                <div className="flex items-end mb-6">
                    <span className="font-bold mr-2">Other: (specify)</span>
                    <input type="text" value={formData.incidentTypes.other.specify} onChange={handleInput(['incidentTypes', 'other', 'specify'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                </div>

                {/* Details Section */}
                <div className="space-y-4 mb-6">
                    <div className="flex items-end">
                        <span className="mr-2">Residents Name(s):</span>
                        <input type="text" value={formData.details.residentNames} onChange={handleInput(['details', 'residentNames'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Date of Incident:</span>
                        <input type="date" value={formData.details.dateOfIncident} onChange={handleInput(['details', 'dateOfIncident'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Time of Incident:</span>
                        <input type="text" value={formData.details.timeOfIncident} onChange={handleInput(['details', 'timeOfIncident'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mb-2">Details of Incident: (attach a page for additional details, if needed)</div>
                    <input type="text" value={formData.details.incidentDetails[0]} onChange={handleArrayInput(['details', 'incidentDetails'], 0)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 text-[9px] md:text-sm" />
                    <input type="text" value={formData.details.incidentDetails[1]} onChange={handleArrayInput(['details', 'incidentDetails'], 1)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 text-[9px] md:text-sm" />
                    <input type="text" value={formData.details.incidentDetails[2]} onChange={handleArrayInput(['details', 'incidentDetails'], 2)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 text-[9px] md:text-sm" />
                </div>

                {/* Notifications Section */}
                <div className="font-bold mb-2">Notifications Date Time</div>
                <div className="font-bold mb-4">(AM or PM)</div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-end">
                        <span className="mr-2">Residents Name:</span>
                        <input type="text" value={formData.notifications.residentName} onChange={handleInput(['notifications', 'residentName'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Family/guardian/responsible party:</span>
                        <input type="text" value={formData.notifications.familyGuardian} onChange={handleInput(['notifications', 'familyGuardian'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Physician:</span>
                        <input type="text" value={formData.notifications.physician} onChange={handleInput(['notifications', 'physician'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Police:</span>
                        <input type="text" value={formData.notifications.police} onChange={handleInput(['notifications', 'police'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Other (specify)</span>
                        <input type="text" value={formData.notifications.otherNotify} onChange={handleInput(['notifications', 'otherNotify'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Alleged Perpetrator Name:</span>
                        <input type="text" value={formData.notifications.perpetratorName} onChange={handleInput(['notifications', 'perpetratorName'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Relationship to Resident:</span>
                        <input type="text" value={formData.notifications.relationshipToResident} onChange={handleInput(['notifications', 'relationshipToResident'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Current Address:</span>
                        <input type="text" value={formData.notifications.currentAddress} onChange={handleInput(['notifications', 'currentAddress'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Phone:</span>
                        <input type="text" value={formData.notifications.phone} onChange={handleInput(['notifications', 'phone'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">City: State: Zip:</span>
                        <input type="text" value={formData.notifications.cityStateZip} onChange={handleInput(['notifications', 'cityStateZip'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Witness Names:</span>
                        <input type="text" value={formData.notifications.witnessNames} onChange={handleInput(['notifications', 'witnessNames'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Address:</span>
                        <input type="text" value={formData.notifications.witnessAddress} onChange={handleInput(['notifications', 'witnessAddress'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Phone Number:</span>
                        <input type="text" value={formData.notifications.witnessPhone} onChange={handleInput(['notifications', 'witnessPhone'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Relationship to Resident:</span>
                        <input type="text" value={formData.notifications.witnessRelationship} onChange={handleInput(['notifications', 'witnessRelationship'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                </div>

                {/* Mitigation Steps */}
                <div className="mb-4">
                    <div className="mb-2">Immediate correction or steps taken to prevent further incidents:</div>
                    <input type="text" value={formData.mitigationSteps[0]} onChange={handleArrayInput(['mitigationSteps'], 0)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 h-6 text-[9px] md:text-sm" />
                    <input type="text" value={formData.mitigationSteps[1]} onChange={handleArrayInput(['mitigationSteps'], 1)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 h-6 text-[9px] md:text-sm" />
                    <input type="text" value={formData.mitigationSteps[2]} onChange={handleArrayInput(['mitigationSteps'], 2)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 h-6 text-[9px] md:text-sm" />
                    <input type="text" value={formData.mitigationSteps[3]} onChange={handleArrayInput(['mitigationSteps'], 3)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none mb-2 h-6 text-[9px] md:text-sm" />
                </div>

                {/* Footer */}
                <div className="space-y-4 mt-8">
                    <div className="flex items-end">
                        <span className="mr-2">Reporter:</span>
                        <input type="text" value={formData.footer.reporter} onChange={handleInput(['footer', 'reporter'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Title:</span>
                        <input type="text" value={formData.footer.title} onChange={handleInput(['footer', 'title'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Signature:</span>
                        <div className="flex-grow border-b border-black h-6"></div>
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Date of Report:</span>
                        <input type="date" value={formData.footer.dateOfReport} onChange={handleInput(['footer', 'dateOfReport'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end">
                        <span className="mr-2">Time of Report:</span>
                        <input type="text" value={formData.footer.timeOfReport} onChange={handleInput(['footer', 'timeOfReport'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                </div>
                {/*
                <button
                    onClick={() => console.log(formData)}
                    className="mt-8 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                >
                    Log Data
                </button>*/}

            </div>
        </div>
    );
};

export default IncidentReportingForm;
