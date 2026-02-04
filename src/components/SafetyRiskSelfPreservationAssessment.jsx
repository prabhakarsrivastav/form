import React, { useState } from 'react';

const SafetyRiskSelfPreservationAssessment = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        q1: { yes: false, no: false, type: '', lastSeizureDate: '' },
        q2: {
            bulimia: false, anorexia: false, gorging: false, rapidEating: false,
            choking: false, excessiveWater: false, difficultySwallowing: false,
            takesFood: false, other: ''
        },
        q3: { yes: false, no: false, whenWhere: '' },
        riskFactorsANE: Array(11).fill({ yes: false, explain: '' }),
        q4: { yes: false, no: false, explain: '' },
        q5: { yes: false, no: false, explain: '' },
        q6: { yes: false, no: false, explain: '' },
        q7: { yes: false, no: false, explain: '' },
        q8: {
            yes: false, no: false,
            incontinence: false, contractures: false, limitedMobility: false,
            other: '', explain: ''
        },
        q9: { yes: false, no: false },
        q10: { yes: false, no: false },
        q11: {
            trespassing: false, misdemeanor: false, felony: false,
            disturbance: false, other: false, explain: ''
        },
        q12: { yes: false, no: false },
        q13: { yes: false, no: false, explain: '' },
        q14: { yes: false, no: false, explain: '' },
        q15: { yes: false, no: false, explain: '' },
        medicalRiskFactors: {
            headaches: false, ulcers: false, arthritis: false, pain: false, allergies: '',
            hypertension: false, heartDisease: false, bleeding: false, medSideEffects: false, other: false
        },
        doctorsVisits: '',
        q16: { evacuatesIndependently: false, needsSupport: false, refuses: false, other: '' },
        additionalComments: '',
        signatures: { homeRep: '', homeRepDate: '', guardian: '', guardianDate: '' }
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNestedChange = (parent, field, value) => {
        setFormData(prev => ({
            ...prev,
            [parent]: { ...prev[parent], [field]: value }
        }));
    };

    const handleRiskFactorANEChange = (index, field, value) => {
        setFormData(prev => {
            const newRisks = [...prev.riskFactorsANE];
            newRisks[index] = { ...newRisks[index], [field]: value };
            return { ...prev, riskFactorsANE: newRisks };
        });
    };

    // Helper for Yes/No checkboxes to ensure mutual exclusivity
    const handleYesNoChange = (parent, field, value) => {
        setFormData(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                yes: field === 'yes' ? value : (field === 'no' && value ? false : prev[parent].yes),
                no: field === 'no' ? value : (field === 'yes' && value ? false : prev[parent].no)
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
        console.log('SafetyRiskSelfPreservationAssessment Data:', formData);
    };

    const aneRiskLabels = [
        "Above average need for personal space",
        "Has no known family",
        "Aggressive behavior toward others",
        "Aggressive behavior toward self",
        "Property destruction",
        "Unable to defend self against others",
        "Non-verbal",
        "Overly cooperative with strangers",
        "Solicitous of strangers/others",
        "Physical exposure of genitalia",
        "Other",
    ];

    return (
        <div className="w-full bg-white text-black text-[9px] md:text-[12px] font-serif flex justify-center mt-4">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] relative">
                {/* Log Data Button */}
                <div className="absolute top-0 right-0 no-print">
                    <button
                        type="button"
                        onClick={logData}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs"
                    >
                        Log Data
                    </button>
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="font-bold text-sm md:text-lg uppercase">
                        Annual
                    </h1>
                    <h2 className="font-bold text-sm md:text-lg uppercase tracking-wide">
                        Safety Risk/Self Preservation Assessment
                    </h2>
                </div>

                <p className="leading-relaxed mb-6 text-center text-[9px] md:text-[12px]">
                    The initial information gathering phase of enrollment with Pacific Health Systems
                    includes assessing for safety/ risk factors, and other incidents or historical factors
                    which are of special concern or require extra resources. The following list of factors
                    is to be addressed with the person and/or person(s) who knows him/her best. In
                    gathering the information, please explain all findings with examples, and give dates
                    of the last occurrence.
                </p>

                {/* Name / Date */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center w-[50%]">
                        <span className="font-semibold mr-2">NAME:</span>
                        <input
                            className="flex-1 border-b-2 border-black outline-none bg-transparent"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                    <div className="flex items-center w-[30%] ml-2">
                        <span className="font-semibold mr-2">Date:</span>
                        <input
                            type="date"
                            className="flex-1 min-w-0 border-b-2 border-black outline-none bg-transparent"
                            value={formData.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>

                </div>


                {/* Main Table */}
                <table className="w-full border border-black border-collapse text-[9px] md:text-[12px]">
                    <tbody>

                        {/* 1. Seizures */}
                        <tr>
                            <td className="border border-black p-1 w-[5%]">1.</td>
                            <td className="border border-black p-1 w-[25%]">Seizures</td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q1.yes} onChange={(e) => handleYesNoChange('q1', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q1.no} onChange={(e) => handleYesNoChange('q1', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                Type:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q1.type} onChange={(e) => handleNestedChange('q1', 'type', e.target.value)} />
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                Date of last seizure:
                                <input type="date" className="w-full border-b border-black outline-none bg-transparent" value={formData.q1.lastSeizureDate} onChange={(e) => handleNestedChange('q1', 'lastSeizureDate', e.target.value)} />
                            </td>
                        </tr>

                        {/* 2. Eating concerns */}
                        <tr>
                            <td className="border border-black p-1">2.</td>
                            <td className="border border-black p-1">Eating concerns:</td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.bulimia} onChange={(e) => handleNestedChange('q2', 'bulimia', e.target.checked)} /> Bulimia
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.anorexia} onChange={(e) => handleNestedChange('q2', 'anorexia', e.target.checked)} /> Anorexia
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.gorging} onChange={(e) => handleNestedChange('q2', 'gorging', e.target.checked)} /> Gorging
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.rapidEating} onChange={(e) => handleNestedChange('q2', 'rapidEating', e.target.checked)} /> Rapid Eating
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.choking} onChange={(e) => handleNestedChange('q2', 'choking', e.target.checked)} /> Choking
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.excessiveWater} onChange={(e) => handleNestedChange('q2', 'excessiveWater', e.target.checked)} /> Drinks excessive water
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.difficultySwallowing} onChange={(e) => handleNestedChange('q2', 'difficultySwallowing', e.target.checked)} /> Difficulty swallowing
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q2.takesFood} onChange={(e) => handleNestedChange('q2', 'takesFood', e.target.checked)} /> Takes food from others
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                Other, please explain:
                            </td>
                            <td className="border border-black p-1" colSpan={4}>
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q2.other} onChange={(e) => handleNestedChange('q2', 'other', e.target.value)} />
                            </td>
                        </tr>

                        {/* 3. Abuse / Neglect */}
                        <tr>
                            <td className="border border-black p-1">3.</td>
                            <td className="border border-black p-1" colSpan={3}>
                                Previous confirmed incidents of Abuse/Neglect/Exploitation
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q3.yes} onChange={(e) => handleYesNoChange('q3', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q3.no} onChange={(e) => handleYesNoChange('q3', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                When and where?
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q3.whenWhere} onChange={(e) => handleNestedChange('q3', 'whenWhere', e.target.value)} />
                            </td>
                        </tr>

                        {/* Risk factors header */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1 " colSpan={3}>
                                Risk factors for A/N/E
                            </td>
                            <td className="border border-black p-1">No</td>
                            <td className="border border-black p-1">Unknown</td>
                        </tr>

                        {aneRiskLabels.map((label, idx) => (
                            <tr key={idx}>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1" colSpan={3}>
                                    {label}
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center gap-1">
                                        <input type="checkbox" checked={formData.riskFactorsANE[idx].yes} onChange={(e) => handleRiskFactorANEChange(idx, 'yes', e.target.checked)} /> Yes
                                    </label>
                                </td>
                                <td className="border border-black p-1">
                                    Explain:
                                    <input className="w-full border-b border-black outline-none bg-transparent" value={formData.riskFactorsANE[idx].explain} onChange={(e) => handleRiskFactorANEChange(idx, 'explain', e.target.value)} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <table className="w-full border border-black border-t-0 border-collapse text-[9px] md:text-[12px]">
                    <tbody>

                        {/* 4 */}
                        <tr>
                            <td className="border border-black p-1 w-[5%]">4.</td>
                            <td className="border border-black p-1 w-[65%]">
                                Previous or current incident of falls?
                            </td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q4.yes} onChange={(e) => handleYesNoChange('q4', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q4.no} onChange={(e) => handleYesNoChange('q4', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q4.explain} onChange={(e) => handleNestedChange('q4', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 5 */}
                        <tr>
                            <td className="border border-black p-1">5.</td>
                            <td className="border border-black p-1">
                                Previous episodes of elopement, missing, or running away?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q5.yes} onChange={(e) => handleYesNoChange('q5', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q5.no} onChange={(e) => handleYesNoChange('q5', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q5.explain} onChange={(e) => handleNestedChange('q5', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 6 */}
                        <tr>
                            <td className="border border-black p-1">6.</td>
                            <td className="border border-black p-1">
                                Has impulsive, explosive, or unpredictable behavior?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q6.yes} onChange={(e) => handleYesNoChange('q6', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q6.no} onChange={(e) => handleYesNoChange('q6', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q6.explain} onChange={(e) => handleNestedChange('q6', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 7 */}
                        <tr>
                            <td className="border border-black p-1">7.</td>
                            <td className="border border-black p-1">
                                Previous episodes of setting fire, arson attempts, use of matches?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q7.yes} onChange={(e) => handleYesNoChange('q7', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q7.no} onChange={(e) => handleYesNoChange('q7', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q7.explain} onChange={(e) => handleNestedChange('q7', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 8 */}
                        <tr>
                            <td className="border border-black p-1">8.</td>
                            <td className="border border-black p-1">
                                Previous incident of skin breakdown?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q8.yes} onChange={(e) => handleYesNoChange('q8', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q8.no} onChange={(e) => handleYesNoChange('q8', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>

                        {/* Risk factors for skin breakdown */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Risk factors for skin breakdown:</td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q8.incontinence} onChange={(e) => handleNestedChange('q8', 'incontinence', e.target.checked)} /> Incontinence
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q8.contractures} onChange={(e) => handleNestedChange('q8', 'contractures', e.target.checked)} /> Contractures
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={2}>
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q8.limitedMobility} onChange={(e) => handleNestedChange('q8', 'limitedMobility', e.target.checked)} /> Limited ability to move self
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                Other:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q8.other} onChange={(e) => handleNestedChange('q8', 'other', e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q8.explain} onChange={(e) => handleNestedChange('q8', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 9 */}
                        <tr>
                            <td className="border border-black p-1">9.</td>
                            <td className="border border-black p-1">
                                Previous or current weight gain/loss concerns?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q9.yes} onChange={(e) => handleYesNoChange('q9', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q9.no} onChange={(e) => handleYesNoChange('q9', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>

                        {/* 10 */}
                        <tr>
                            <td className="border border-black p-1">10.</td>
                            <td className="border border-black p-1">
                                Previous or current concerns about stealing or failure to pay for items?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q10.yes} onChange={(e) => handleYesNoChange('q10', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q10.no} onChange={(e) => handleYesNoChange('q10', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>

                        {/* 11 */}
                        <tr>
                            <td className="border border-black p-1">11.</td>
                            <td className="border border-black p-1">
                                History of convictions for illegal activity?
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" checked={formData.q11.trespassing} onChange={(e) => handleNestedChange('q11', 'trespassing', e.target.checked)} /> Trespassing
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" checked={formData.q11.misdemeanor} onChange={(e) => handleNestedChange('q11', 'misdemeanor', e.target.checked)} /> Misdemeanor
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" checked={formData.q11.felony} onChange={(e) => handleNestedChange('q11', 'felony', e.target.checked)} /> Felony
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" checked={formData.q11.disturbance} onChange={(e) => handleNestedChange('q11', 'disturbance', e.target.checked)} /> Disturbance
                                </label>
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q11.other} onChange={(e) => handleNestedChange('q11', 'other', e.target.checked)} /> Other
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q11.explain} onChange={(e) => handleNestedChange('q11', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 12 */}
                        <tr>
                            <td className="border border-black p-1">12.</td>
                            <td className="border border-black p-1">
                                Previous or current incidents of imaginative fabrication, exaggeration, or falsification of information?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q12.yes} onChange={(e) => handleYesNoChange('q12', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q12.no} onChange={(e) => handleYesNoChange('q12', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>

                        {/* 13 */}
                        <tr>
                            <td className="border border-black p-1">13.</td>
                            <td className="border border-black p-1">
                                Previous incidents of suicide threats or attempts?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q13.yes} onChange={(e) => handleYesNoChange('q13', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q13.no} onChange={(e) => handleYesNoChange('q13', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q13.explain} onChange={(e) => handleNestedChange('q13', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 14 */}
                        <tr>
                            <td className="border border-black p-1">14.</td>
                            <td className="border border-black p-1">
                                Previous incidents of homicide threats or attempts?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q14.yes} onChange={(e) => handleYesNoChange('q14', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q14.no} onChange={(e) => handleYesNoChange('q14', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q14.explain} onChange={(e) => handleNestedChange('q14', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* 15 */}
                        <tr>
                            <td className="border border-black p-1">15.</td>
                            <td className="border border-black p-1">
                                Previous or current medical conditions of concern?
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q15.yes} onChange={(e) => handleYesNoChange('q15', 'yes', e.target.checked)} /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q15.no} onChange={(e) => handleYesNoChange('q15', 'no', e.target.checked)} /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Medical Risk Factors (Please explain below):
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.q15.explain} onChange={(e) => handleNestedChange('q15', 'explain', e.target.value)} />
                            </td>
                        </tr>

                        {/* Medical risk factors list */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.headaches} onChange={(e) => handleNestedChange('medicalRiskFactors', 'headaches', e.target.checked)} /> Headaches
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.ulcers} onChange={(e) => handleNestedChange('medicalRiskFactors', 'ulcers', e.target.checked)} /> Ulcers
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.arthritis} onChange={(e) => handleNestedChange('medicalRiskFactors', 'arthritis', e.target.checked)} /> Arthritis
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.pain} onChange={(e) => handleNestedChange('medicalRiskFactors', 'pain', e.target.checked)} /> Pain
                                </label>
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Allergies
                                <input className="w-full border-b border-black outline-none bg-transparent" value={formData.medicalRiskFactors.allergies} onChange={(e) => handleNestedChange('medicalRiskFactors', 'allergies', e.target.value)} />
                            </td>
                        </tr>


                    </tbody>
                </table>


                <table className="w-full border border-black border-t-0 border-collapse text-[9px] md:text-[12px] mb-4">
                    <tbody>

                        {/* Medical risk factor headers */}
                        <tr>
                            <td className="border border-black border-t-0 p-1 w-[5%]"></td>
                            <td className="border border-black border-t-0 p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.hypertension} onChange={(e) => handleNestedChange('medicalRiskFactors', 'hypertension', e.target.checked)} /> Hypertension
                                </label>
                            </td>
                            <td className="border border-black border-t-0 p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.heartDisease} onChange={(e) => handleNestedChange('medicalRiskFactors', 'heartDisease', e.target.checked)} /> Heart disease
                                </label>
                            </td>
                            <td className="border border-black border-t-0 p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.bleeding} onChange={(e) => handleNestedChange('medicalRiskFactors', 'bleeding', e.target.checked)} /> Bleeding
                                </label>
                            </td>
                            <td className="border border-black border-t-0 p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.medSideEffects} onChange={(e) => handleNestedChange('medicalRiskFactors', 'medSideEffects', e.target.checked)} /> Medication side effects
                                </label>
                            </td>
                            <td className="border border-black border-t-0 p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.medicalRiskFactors.other} onChange={(e) => handleNestedChange('medicalRiskFactors', 'other', e.target.checked)} /> Other
                                </label>
                            </td>
                        </tr>

                        {/* Empty rows for writing */}
                        {[...Array(2)].map((_, i) => (
                            <tr key={i}>
                                <td className="border border-black p-2"></td>
                                <td className="border border-black p-2" colSpan={5}></td>
                            </tr>
                        ))}

                        {/* Doctors visit */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                Concerns regarding doctors’ visits?
                                <input className="w-full border-b border-black outline-none mt-1 bg-transparent" value={formData.doctorsVisits} onChange={(e) => handleChange('doctorsVisits', e.target.value)} />
                            </td>
                        </tr>

                        {/* 16 */}
                        <tr>
                            <td className="border border-black p-1">16.</td>
                            <td className="border border-black p-1" colSpan={5}>
                                Concerns regarding evacuation during fire drills?
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q16.evacuatesIndependently} onChange={(e) => handleNestedChange('q16', 'evacuatesIndependently', e.target.checked)} /> Evacuates independently
                                </label>
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q16.needsSupport} onChange={(e) => handleNestedChange('q16', 'needsSupport', e.target.checked)} /> Needs support
                                </label>
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" checked={formData.q16.refuses} onChange={(e) => handleNestedChange('q16', 'refuses', e.target.checked)} /> Refuses to evacuate
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                Other, please explain:
                                <input className="w-full border-b border-black outline-none mt-1 bg-transparent" value={formData.q16.other} onChange={(e) => handleNestedChange('q16', 'other', e.target.value)} />
                            </td>
                        </tr>

                        {/* Additional comments */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                Additional comments or concerns
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                <textarea
                                    className="w-full h-24 outline-none resize-none bg-transparent"
                                    value={formData.additionalComments}
                                    onChange={(e) => handleChange('additionalComments', e.target.value)}
                                ></textarea>
                            </td>
                        </tr>

                        {/* Signature – Home Rep */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Signature/title of person completing this form (Home Representative)
                                <input
                                    className="w-full border-b border-black outline-none mt-2 bg-transparent"
                                    value={formData.signatures.homeRep}
                                    onChange={(e) => handleNestedChange('signatures', 'homeRep', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Date
                                <input
                                    type="date"
                                    className="w-full border-b border-black outline-none mt-2 bg-transparent"
                                    value={formData.signatures.homeRepDate}
                                    onChange={(e) => handleNestedChange('signatures', 'homeRepDate', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </td>
                        </tr>

                        {/* Signature – Family/Guardian */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Signature/title of person completing this form (Individual/Family/Guardian)
                                <input
                                    className="w-full border-b border-black outline-none mt-2 bg-transparent"
                                    value={formData.signatures.guardian}
                                    onChange={(e) => handleNestedChange('signatures', 'guardian', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Date
                                <input
                                    type="date"
                                    className="w-full border-b border-black outline-none mt-2 bg-transparent"
                                    value={formData.signatures.guardianDate}
                                    onChange={(e) => handleNestedChange('signatures', 'guardianDate', e.target.value)}
                                    onKeyDown={handleEnter}
                                />
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );

};

export default SafetyRiskSelfPreservationAssessment;
