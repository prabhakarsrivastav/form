import React from 'react';

const SafetyRiskSelfPreservationAssessment = () => {
    // Helper for rendering the 0-4 scale checkboxes
    return (
        <div className="w-full bg-white text-black text-[9px] md:text-[12px] font-serif flex justify-center mt-4">
            <div className="w-[98%] md:w-[85%] lg:w-[60%]">

                {/* Title */}
                {/* ================= HEADER ================= */}
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
                            className="flex-1 border-b-2 border-black outline-none"
                        />
                    </div>

                    <div className="flex items-center w-[30%] ml-2">
                        <span className="font-semibold mr-2">Date:</span>
                        <input
                            type="date"
                            className="flex-1 min-w-0 border-b-2 border-black outline-none"
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                Type:
                                <input className="w-full border-b border-black outline-none" />
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                Date of last seizure:
                                <input type="date" className="w-full border-b border-black outline-none" />
                            </td>
                        </tr>

                        {/* 2. Eating concerns */}
                        <tr>
                            <td className="border border-black p-1">2.</td>
                            <td className="border border-black p-1">Eating concerns:</td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Bulimia
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Anorexia
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Gorging
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Rapid Eating
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Choking
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Drinks excessive water
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Difficulty swallowing
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Takes food from others
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">
                                Other, please explain:
                            </td>
                            <td className="border border-black p-1" colSpan={4}>
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                When and where?
                                <input className="w-full border-b border-black outline-none" />
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

                        {[
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
                        ].map((label, idx) => (
                            <tr key={idx}>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1" colSpan={3}>
                                    {label}
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center gap-1">
                                        <input type="checkbox" /> Yes
                                    </label>
                                </td>
                                <td className="border border-black p-1">
                                    Explain:
                                    <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1 w-[15%]">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>

                        {/* Risk factors for skin breakdown */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Risk factors for skin breakdown:</td>
                            <td className="border border-black p-1">Incontinence</td>
                            <td className="border border-black p-1">Contractures</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={2}>
                                Limited ability to move self
                            </td>
                            <td className="border border-black p-1">
                                Other:
                                <input className="w-full border-b border-black outline-none" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
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
                                    <input type="checkbox" /> Trespassing
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" /> Misdemeanor
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" /> Felony
                                </label>
                                <label className="inline-flex items-center gap-1 mr-4">
                                    <input type="checkbox" /> Disturbance
                                </label>
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> Other
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                If yes, please explain:
                                <input className="w-full border-b border-black outline-none" />
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
                                    <input type="checkbox" /> Yes
                                </label>
                            </td>
                            <td className="border border-black p-1">
                                <label className="inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Medical Risk Factors (Please explain below):
                                <input className="w-full border-b border-black outline-none" />
                            </td>
                        </tr>

                        {/* Medical risk factors list */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Headaches</td>
                            <td className="border border-black p-1">Ulcers</td>
                            <td className="border border-black p-1">Arthritis</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Pain</td>
                            <td className="border border-black p-1" colSpan={2}>
                                Allergies
                                <input className="w-full border-b border-black outline-none" />
                            </td>
                        </tr>


                    </tbody>
                </table>


                <table className="w-full border border-black border-t-0 border-collapse text-[9px] md:text-[12px] mb-4">
                    <tbody>

                        {/* Medical risk factor headers */}
                        <tr>
                            <td className="border border-black border-t-0 p-1 w-[5%]"></td>
                            <td className="border border-black border-t-0 p-1">Hypertension</td>
                            <td className="border border-black border-t-0 p-1">Heart disease</td>
                            <td className="border border-black border-t-0 p-1">Bleeding</td>
                            <td className="border border-black border-t-0 p-1">Medication side effects</td>
                            <td className="border border-black border-t-0 p-1">Other</td>
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
                                <input className="w-full border-b border-black outline-none mt-1" />
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
                            <td className="border border-black p-1">Evacuates independently</td>
                            <td className="border border-black p-1" colSpan={2}>Needs support</td>
                            <td className="border border-black p-1" colSpan={2}>Refuses to evacuate</td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={5}>
                                Other, please explain:
                                <input className="w-full border-b border-black outline-none mt-1" />
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
                                <textarea className="w-full h-24 outline-none resize-none"></textarea>
                            </td>
                        </tr>

                        {/* Signature – Home Rep */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Signature/title of person completing this form (Home Representative)
                                <input className="w-full border-b border-black outline-none mt-2" />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Date
                                <input type="date" className="w-full border-b border-black outline-none mt-2" />
                            </td>
                        </tr>

                        {/* Signature – Family/Guardian */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1" colSpan={3}>
                                Signature/title of person completing this form (Individual/Family/Guardian)
                                <input className="w-full border-b border-black outline-none mt-2" />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Date
                                <input type="date" className="w-full border-b border-black outline-none mt-2" />
                            </td>
                        </tr>

                    </tbody>
                </table>



            </div>
        </div>
    );

};

export default SafetyRiskSelfPreservationAssessment;
