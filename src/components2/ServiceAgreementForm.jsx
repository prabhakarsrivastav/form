import React, { useState } from 'react';
import logo from '../assets/Picture1.png';

const ServiceAgreementForm = () => {
    const [formData, setFormData] = useState({
        client: { firstName: '', middleName: '', lastName: '' },
        address: { full: '', street: '', city: '', state: '', zip: '' },
        referral: { source: '', date: '', initialContactDate: '', startDate: '' },
        services: {
            personalCare: false, companion: false, nursing: false, cls: false,
            cai: false, sms: false, respite: false,
            description: '',
            clientDescription: ['', '', ''],
            frequency: '', paidBy: ''
        },
        payment: {
            medicaid: false, insurance: false, privatePay: false,
            charges: '',
            nowComp: false,
            nowCompServices: {
                cls: false, cai: false, respiteDay1: false, respiteDay2: false, respiteHourly: false,
                nursing: false, supplies: false, staffing: false
            },
            source: false, icwp: false, gapp: false, ccsp: false,
            privatePayHourly: false, privatePayRate: '',
            structuredFamily: false
        },
        authorization: {
            funds: { yes: false, no: false },
            vehicle: { yes: false, no: false },
            rights: { yes: false, no: false }
        },
        signatures: {
            client: '', clientDate: '',
            agency: '', agencyDate: ''
        }
    });

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

    const handleInput = (path) => (e) => updateState(path, e.target.value);
    const handleCheckbox = (path) => (e) => updateState(path, e.target.checked);
    const handleArrayInput = (path, index) => (e) => {
        setFormData(prev => {
            // Handle nested array updates if needed, although current structure puts arrays at specific paths
            // Simplified for specific known arrays like clientDescription
            const newDesc = [...prev.services.clientDescription];
            newDesc[index] = e.target.value;
            return { ...prev, services: { ...prev.services, clientDescription: newDesc } };
        });
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

                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-12 md:h-20 object-contain mb-4" />
                    <h1 className="text-xl md:text-2xl font-bold text-center underline mb-6">Service Agreement Form</h1>
                </div>

                <p className="text-left text-[10px] md:text-sm mb-4">
                    This agreement is between Pacific Health Systems LLC (hereafter, “Provider”) located at 303 Corporate Center Dr. Suite 325 Stockbridge Georgia 30281
                </p>

                {/* Client Name */}
                <div className="mb-4 flex items-end">
                    <span className="font-bold whitespace-nowrap mr-2 mb-4 text-[9px] md:text-sm">Client Name:</span>
                    <div className="flex-grow">
                        <div className="flex w-full border-b border-black">
                            <input type="text" value={formData.client.firstName} onChange={handleInput(['client', 'firstName'])} onKeyDown={handleEnter} className="w-1/3 bg-transparent outline-none px-1 text-center" />
                            <input type="text" value={formData.client.middleName} onChange={handleInput(['client', 'middleName'])} onKeyDown={handleEnter} className="w-1/3 bg-transparent outline-none px-1 text-center" />
                            <input type="text" value={formData.client.lastName} onChange={handleInput(['client', 'lastName'])} onKeyDown={handleEnter} className="w-1/3 bg-transparent outline-none px-1 text-center" />
                        </div>
                        <div className="flex w-full text-[7px] md:text-[10px] mt-0.5">
                            <div className="w-1/3 text-left pl-4">First</div>
                            <div className="w-1/3 text-center">Middle</div>
                            <div className="w-1/3 text-right pr-4">Last</div>
                        </div>
                    </div>
                </div>

                {/* Address Box */}
                <div className="border border-black mb-4">
                    <div className="p-1 border-b border-black flex items-center">
                        <span className="font-bold mr-2 text-[9px] md:text-sm">Address:</span>
                        <input type="text" value={formData.address.full} onChange={handleInput(['address', 'full'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-1/2 border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Street:</span>
                            <input type="text" value={formData.address.street} onChange={handleInput(['address', 'street'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">City:</span>
                            <input type="text" value={formData.address.city} onChange={handleInput(['address', 'city'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">State:</span>
                            <input type="text" value={formData.address.state} onChange={handleInput(['address', 'state'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Zip Code:</span>
                            <input type="text" value={formData.address.zip} onChange={handleInput(['address', 'zip'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                    </div>
                </div>

                {/* Referral Box */}
                <div className="border border-black mb-6">
                    <div className="flex border-b border-black">
                        <div className="w-1/2 border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Referral Source:</span>
                            <input type="text" value={formData.referral.source} onChange={handleInput(['referral', 'source'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Referral Date:</span>
                            <input type="date" value={formData.referral.date} onChange={handleInput(['referral', 'date'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0 text-[9px] md:text-sm" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 border-r border-black p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Initial Contact Date:</span>
                            <input type="date" value={formData.referral.initialContactDate} onChange={handleInput(['referral', 'initialContactDate'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0 text-[9px] md:text-sm" />
                        </div>
                        <div className="w-1/2 p-1 flex items-center">
                            <span className="font-bold mr-1 text-[9px] md:text-sm">Start Date:</span>
                            <input type="date" value={formData.referral.startDate} onChange={handleInput(['referral', 'startDate'])} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent min-w-0 text-[9px] md:text-sm" />
                        </div>
                    </div>
                </div>

                {/* Assurances List */}
                <p className="mb-2 text-[9px] md:text-sm">Provider assures the Client or Client’s Representatives that Provider will:</p>
                <ol className="list-decimal pl-4 mb-6 space-y-2 text-[9px] md:text-sm">
                    <li className="pl-2">Not discriminate or permit discrimination against any person or group of people on the grounds of age, race, sex, color, religion, national origin, disability, or client’s failure to execute advance directives.</li>
                    <li className="pl-2">No discrimination, coerce or otherwise cause reprisal for complaints/grievance filed by the Client/Client Representative.</li>
                    <li className="pl-2">Provider will be able to provide In-Home Services 24 hours a day, 7 days a week, Monday through Sunday and on holidays if required by the clients on the client care plan.</li>
                    <li className="pl-2">Respond to questions from the Client or Client’s Representative with 30 minutes after they call 678-228-4931 (Client Care Coordinator).</li>
                    <li className="pl-2">Hired qualified Personal Support Aides (PSA) to provide In- Home Services.</li>
                    <li className="pl-2">Not accept clients when Provider does not have the capacity to meet the needs of the Client.</li>
                    <li className="pl-2">Keep client’s information confidential and will not release the client’s information without the Client/ Client’s Representative written consent.</li>
                </ol>

                {/* Services */}
                <h3 className="font-bold underline text-[10px] md:text-lg mb-2">Services</h3>
                <p className="mb-2 text-[9px] md:text-sm">Provider will deliver the following services and service plan:</p>
                <div className="flex flex-wrap gap-4 mb-4 text-[9px] md:text-sm">
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.personalCare} onChange={handleCheckbox(['services', 'personalCare'])} /> Personal Care Service</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.companion} onChange={handleCheckbox(['services', 'companion'])} /> Companion Sitter Services</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.nursing} onChange={handleCheckbox(['services', 'nursing'])} /> Nursing Services</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.cls} onChange={handleCheckbox(['services', 'cls'])} /> CLS</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.cai} onChange={handleCheckbox(['services', 'cai'])} /> CAI</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.sms} onChange={handleCheckbox(['services', 'sms'])} /> SMS</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.services.respite} onChange={handleCheckbox(['services', 'respite'])} /> Respite</label>
                </div>

                <p className="mb-2 text-[9px] md:text-sm">Please list the type of services you would need the caregiver to provide for you in your own word</p>
                <p className="mb-1 text-[9px] md:text-sm">Description of services as stated by Client:</p>
                <div className="mb-6 border border-black">
                    <input type="text" value={formData.services.clientDescription[0]} onChange={handleArrayInput(['services', 'clientDescription'], 0)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none px-1 h-8" />
                    <input type="text" value={formData.services.clientDescription[1]} onChange={handleArrayInput(['services', 'clientDescription'], 1)} onKeyDown={handleEnter} className="w-full border-b border-black outline-none px-1 h-8" />
                    <input type="text" value={formData.services.clientDescription[2]} onChange={handleArrayInput(['services', 'clientDescription'], 2)} onKeyDown={handleEnter} className="w-full outline-none px-1 h-8" />
                </div>

                <div className="flex items-end mb-8">
                    <span className="whitespace-nowrap mr-2 text-[9px] md:text-sm">Frequency and Duration of Services:</span>
                    <input type="text" value={formData.services.frequency} onChange={handleInput(['services', 'frequency'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none min-w-0" />
                    <span className="whitespace-nowrap ml-2 text-[9px] md:text-sm">Services are</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4 text-[9px] md:text-sm">
                    <span>paid by reimbursement to the provider through:</span>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.medicaid} onChange={handleCheckbox(['payment', 'medicaid'])} /> Medicaid</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.insurance} onChange={handleCheckbox(['payment', 'insurance'])} /> Insurance</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.privatePay} onChange={handleCheckbox(['payment', 'privatePay'])} /> Private Pay</label>
                </div>

                <div className="flex flex-wrap items-end gap-1 mb-6">
                    <div className="flex items-end gap-1">
                        <span className="whitespace-nowrap text-[8px] md:text-sm">Charges for services (hourly or daily rate):</span>
                        <input type="text" value={formData.payment.charges} onChange={handleInput(['payment', 'charges'])} onKeyDown={handleEnter} className="w-16 md:w-32 border-b border-black outline-none text-center text-[7px] md:text-sm" />
                    </div>
                    <span className="whitespace-nowrap text-[8px] md:text-sm w-full md:w-auto mt-1 md:mt-0">to be billed monthly and due by the 15th of each month.</span>
                </div>

                <p className="mb-4 text-justify text-[9px] md:text-sm">
                    Client agrees and covenants that for a period of twelve (12) months following the termination of this Agreement, whether such termination is voluntary or involuntary, Client will not hire any of Company employees. If Client hires a Company employee, Client agrees to pay Company a recruitment and training fee of three thousand ($3,000.00) dollars per employee.
                </p>

                <p className="mb-6 text-justify text-[9px] md:text-sm">
                    If Undersigned or Client wishes to interrupt or terminate the Services provided under this agreement for any reason, Undersigned agrees to give Provider at least seven (7) days advance notice, or if seven (7) days advance notice is not possible under the circumstances, to provide notice as soon as possible. However, the Client or Undersigned may cancel services at any time. Provider may terminate the Services for any reason upon twenty-four (24) hour notice to Client.
                </p>

                {/* Authorization Table */}
                <div className="mb-8 text-[9px] md:text-sm">
                    <div className="grid grid-cols-[1fr_50px_50px] font-bold border-b border-black mb-2">
                        <div></div>
                        <div className="text-center">Yes</div>
                        <div className="text-center">No</div>
                    </div>
                    {[
                        { text: "Authorization for access to client’s personal funds for home management.", key: "funds" },
                        { text: "Authorization for access to client’s personal vehicle.", key: "vehicle" },
                        { text: "Client has received a copy of the Bill of Rightsand Responsibilities", key: "rights" }
                    ].map((item, i) => (
                        <div key={i} className="grid grid-cols-[1fr_50px_50px] mb-2 items-center">
                            <div className="pr-2">{item.text}</div>
                            <div className="flex justify-center"><input type="checkbox" checked={formData.authorization[item.key].yes} onChange={handleCheckbox(['authorization', item.key, 'yes'])} /></div>
                            <div className="flex justify-center"><input type="checkbox" checked={formData.authorization[item.key].no} onChange={handleCheckbox(['authorization', item.key, 'no'])} /></div>
                        </div>
                    ))}
                </div>

                <p className="mb-2 text-[9px] md:text-sm">For information, questions, or complaints about services provided by Pacific Health Systems please call the Administrator @ 678-782-2474.</p>
                <p className="mb-8 text-[9px] md:text-sm">In the event there is a complaint or problem that we have been made aware of that cannot be resolved, you may contact Healthcare Facility Regulation Division, Health Care Section at 404-657-5850 or for information call 404-657-5700.</p>

                {/* Payment of Services */}
                <h3 className="font-bold underline text-[10px] md:text-lg mb-2">Payment of Services</h3>
                <p className="mb-4 text-[9px] md:text-sm">Source of Payment: (Please check all that apply)</p>

                <div className="space-y-2 mb-8 text-[9px] md:text-sm">
                    <div>
                        <label className="flex items-center gap-1 font-bold"><input type="checkbox" checked={formData.payment.nowComp} onChange={handleCheckbox(['payment', 'nowComp'])} /> NOW/COMP:</label>
                        <div className="ml-6 flex flex-col gap-1 mt-1">
                            <label className="flex items-start gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.cls} onChange={handleCheckbox(['payment', 'nowCompServices', 'cls'])} className="mt-1" /> Community Living Supports (Medicaid will be billed $6.35/unit of 15-clock minute)</label>
                            <label className="flex items-start gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.cai} onChange={handleCheckbox(['payment', 'nowCompServices', 'cai'])} className="mt-1" /> Community Access individual (Medicaid will be billed $7.41/unit of 15-clock minute)</label>
                            <label className="flex items-start gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.respiteDay1} onChange={handleCheckbox(['payment', 'nowCompServices', 'respiteDay1'])} className="mt-1" /> Respite daily Category 1: (Medicaid will be billed $153.41 daily for 8 hours or more)</label>
                            <label className="flex items-start gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.respiteDay2} onChange={handleCheckbox(['payment', 'nowCompServices', 'respiteDay2'])} className="mt-1" /> Respite daily Category 2: (Medicaid will be billed $209.51 daily for 8 hours or more)</label>
                            <label className="flex items-start gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.respiteHourly} onChange={handleCheckbox(['payment', 'nowCompServices', 'respiteHourly'])} className="mt-1" /> Respite Hourly: ( Medicaid will be billed $4.83/unity of 15-clock minutes)</label>
                            <div className="flex gap-4 flex-wrap">
                                <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.nursing} onChange={handleCheckbox(['payment', 'nowCompServices', 'nursing'])} /> Nursing Services</label>
                                <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.supplies} onChange={handleCheckbox(['payment', 'nowCompServices', 'supplies'])} /> Specialized Medical Supplies</label>
                                <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.nowCompServices.staffing} onChange={handleCheckbox(['payment', 'nowCompServices', 'staffing'])} /> Additional Staffing</label>
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.source} onChange={handleCheckbox(['payment', 'source'])} /> SOURCE (Medicaid will be billed $9.02/unit of 30-clock minutes)</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.icwp} onChange={handleCheckbox(['payment', 'icwp'])} /> ICWP (Medicaid will be billed $17.96/unit of 60-clock minutes)</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.gapp} onChange={handleCheckbox(['payment', 'gapp'])} /> GAPP (Medicaid will be billed $10.63/unit for RN, $37.28/Unit for LPN and $5.00/Unit for CNA. A unit is 15 minutes)</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.ccsp} onChange={handleCheckbox(['payment', 'ccsp'])} /> CCSP (Medicaid will be billed $4.51/unity of 15-clock)</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.privatePayHourly} onChange={handleCheckbox(['payment', 'privatePayHourly'])} /> Private Pay @ $ <input type="text" value={formData.payment.privatePayRate} onChange={handleInput(['payment', 'privatePayRate'])} onKeyDown={handleEnter} className="border-b border-black w-16 outline-none text-center" /> / hour</label>
                    <label className="flex items-center gap-1"><input type="checkbox" checked={formData.payment.structuredFamily} onChange={handleCheckbox(['payment', 'structuredFamily'])} /> Structured Family Caregiving (Medicaid will be billed $90.20 per unit)</label>
                </div>

                <p className="mb-8 font-semibold text-[9px] md:text-sm">
                    The Service Agreement will become effective and bind the Provider and the Client/ Client representative to the terms in the Service Agreement when they each sign the agreement
                </p>

                {/* Signatures */}
                <div className="space-y-4">
                    <div className="flex items-end gap-2">
                        <span className="whitespace-nowrap font-bold text-[9px] md:text-sm">Client/Representative Signature:</span>
                        <input type="text" value={formData.signatures.client} onChange={handleInput(['signatures', 'client'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none min-w-0" />
                        <span className="whitespace-nowrap font-bold text-[9px] md:text-sm">Date:</span>
                        <input type="date" value={formData.signatures.clientDate} onChange={handleInput(['signatures', 'clientDate'])} onKeyDown={handleEnter} className="w-24 md:w-32 border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="whitespace-nowrap font-bold text-[9px] md:text-sm">Agency Representative:</span>
                        <input type="text" value={formData.signatures.agency} onChange={handleInput(['signatures', 'agency'])} onKeyDown={handleEnter} className="flex-grow border-b border-black outline-none min-w-0" />
                        <span className="whitespace-nowrap font-bold text-[9px] md:text-sm">Date:</span>
                        <input type="date" value={formData.signatures.agencyDate} onChange={handleInput(['signatures', 'agencyDate'])} onKeyDown={handleEnter} className="w-24 md:w-32 border-b border-black outline-none text-[9px] md:text-sm" />
                    </div>
                </div>

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

export default ServiceAgreementForm;
