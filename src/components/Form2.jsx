import React from 'react';
import logo from '../assets/logo.jpg';

export default function Form2() {
    return (
        <div className="w-full bg-white text-black text-[9px] md:text-[12px] font-serif flex justify-center mt-5">
            <div className="w-[98%] md:w-[85%] lg:w-[60%]">

                {/* Title */}
                <div className="text-center mb-5">
                    <h1 className="font-bold text-sm uppercase text-blue-500">
                        Comprehensive Initial Nursing Assessment
                    </h1>
                    <p className="text-[12px]">
                        Assessment has to be done by RN on all agency clients to determine that they are not medically frail or medically fragile
                    </p>
                    <p className="mt-2 text-[11px] font-bold">
                        Type of assessment: (circle one)
                        1. Initial &nbsp; 2. Annual &nbsp; 3. Change of Services and condition
                    </p>
                    <p className="text-[10px] mt-2">
                        To be completed at the time of initial assessment prior to the delegation of any nursing tasks or services being offered or if there is a significant change in the client's condition
                    </p>
                </div>

                {/* Client Info */}
                <table className="w-full border border-black border-collapse mt-3">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[30%]">
                                Client&apos;s Name:
                                <input className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                DOB:
                                <input type="date" className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1 w-[20%]">
                                Date Completed:
                                <input type="date" className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1 w-[30%]">
                                <input className="w-[60%] outline-none" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                Client&apos;s Address:
                                <input className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                Phone:
                                <input className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-[60%] outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-[60%] outline-none" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1" colSpan={4}>
                                RN Initiating Assessment:
                                <input className="w-[60%] outline-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Allergies / Diagnoses */}
                <table className="w-full border border-black border-collapse mt-3">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[18%]">
                                ALLERGIES:
                            </td>
                            <td className="border border-black p-1" colSpan={5}>
                                DIAGNOSES:
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1 align-top">
                                <textarea className="w-full h-full outline-none resize-none" />
                            </td>

                            <td className="border border-black p-1 align-top w-[22%]">
                                Vital Signs:<input className="w-12 border-b border-black outline-none" /><br />
                                Ht in inches:
                                <input className="w-12 border-b border-black outline-none" /><br />
                                Wt in lbs:
                                <input className="w-12 border-b border-black outline-none" />
                            </td>

                            <td className="border border-black p-1 align-top w-[15%]">
                                T = <input className="w-12 border-b border-black outline-none" /><br />
                                P = <input className="w-12 border-b border-black outline-none" />
                            </td>

                            <td className="border border-black p-1 align-top w-[15%]">
                                R = <input className="w-12 border-b border-black outline-none" /><br />
                                BP = <input className="w-16 border-b border-black outline-none" />
                            </td>

                            <td className="border border-black p-1 align-top w-[15%]">
                                Blood Glucose or n/a
                                <input className="w-full border-b border-black outline-none mt-1" />
                            </td>

                            <td className="border border-black p-1 align-top w-[15%]">
                                O2 admin or n/a
                                <input className="w-full border-b border-black outline-none mt-1" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none" />
                            </td>
                            <td className="border border-black p-1">
                                O2 Sats or n/a
                                <input className="w-full border-b border-black outline-none mt-1" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Nutrition */}
                <table className="w-full border border-black border-collapse mt-3">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[10%]">
                                NUTRITION
                            </td>
                            <td className="border border-black p-1 w-[65%]">
                                Assessment – Explain ALL answers that are not within normal limits
                            </td>
                            <td className="border border-black p-1 w-[25%]">
                                COMMENTS:

                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none p-1" />
                            </td>

                            <td className="border border-black p-1 leading-tight">
                                Diet:
                                <label><input type="checkbox" className="mx-1" /> Regular</label>
                                <label><input type="checkbox" className="mx-1" /> ADA</label>
                                <label><input type="checkbox" className="mx-1" /> Low Sodium</label>
                                <label><input type="checkbox" className="mx-1" /> Mechanical Soft</label>
                                <label><input type="checkbox" className="mx-1" /> Pureed</label>
                                <br />

                                Recent weight changes:
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                <label><input type="checkbox" className="mx-1" /> YES</label><br />

                                Supplements:
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                <label><input type="checkbox" className="mx-1" /> YES</label><br />

                                Conditions affecting eating, chewing or swallowing:
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                <label><input type="checkbox" className="mx-1" /> YES</label><br />

                                Monitoring Required at mealtimes:
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                <label><input type="checkbox" className="mx-1" /> YES</label><br />

                                Fluids, Monitoring:
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                <label><input type="checkbox" className="mx-1" /> YES</label>
                                <label><input type="checkbox" className="mx-1" /> Increased</label>
                                <label><input type="checkbox" className="mx-1" /> Restricted</label><br />

                                Mucous Membranes:
                                <label><input type="checkbox" className="mx-1" /> Moist</label>
                                <label><input type="checkbox" className="mx-1" /> Dry</label><br />

                                Skin Turgor:
                                <label><input type="checkbox" className="mx-1" /> Good</label>
                                <label><input type="checkbox" className="mx-1" /> Fair</label>
                                <label><input type="checkbox" className="mx-1" /> Poor</label>
                            </td>

                            <td className="border border-black p-1">
                                <textarea className="w-full h-full outline-none resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Notes */}
                <div className="mt-3">
                    <p className="">Notes:</p>
                    <textarea className="w-full border border-black h-24 p-1  outline-none resize-none"></textarea>
                </div>


                {/* Elimination*/}

                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Elimination:
                            </td>

                            <td className="border border-black p-1 w-[60%] leading-tight">
                                Bladder Incontinence:
                                <label><input type="checkbox" className="mx-1" /> None</label>
                                <label><input type="checkbox" className="mx-1" /> Occasional (less than daily)</label>
                                <label><input type="checkbox" className="mx-1" /> Daily</label><br />

                                Bowel Incontinence:
                                <label><input type="checkbox" className="mx-1" /> None</label>
                                <label><input type="checkbox" className="mx-1" /> Occasional (less than daily)</label>
                                <label><input type="checkbox" className="mx-1" /> Daily</label><br />

                                Incontinent Management Techniques:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                Bowel sounds present:
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                <label><input type="checkbox" className="mx-1" /> No</label><br />

                                Constipation:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                Ostomies:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>

                            <td className="border border-black p-1 w-[25%] align-top">
                                Comments:
                                <textarea className="w-full h-full outline-none resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>



                {/*Sensory */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%]">
                                Sensory:
                            </td>

                            <td className="border border-black p-1 w-[60%]">
                                Vision:
                                <label><input type="checkbox" className="mx-1" /> Normal</label>
                                <label><input type="checkbox" className="mx-1" /> Impaired</label>
                                &nbsp; Corrective Device:
                                <input className="border-b border-black outline-none w-40" /><br />

                                Hearing:
                                <label><input type="checkbox" className="mx-1" /> Normal</label>
                                <label><input type="checkbox" className="mx-1" /> Impaired</label>
                                &nbsp; Hearing Aid:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>

                            <td className="border border-black p-1 w-[25%]"></td>
                        </tr>
                    </tbody>
                </table>

                {/* MUSCULOSKELETAL*/}

                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Musculoskeletal:
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                Mobility:
                                <label><input type="checkbox" className="mx-1" /> Normal</label>
                                <label><input type="checkbox" className="mx-1" /> Impaired</label>
                                &nbsp; Assistive Devices:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                ROM:
                                <label><input type="checkbox" className="mx-1" /> Full</label>
                                <label><input type="checkbox" className="mx-1" /> Limited</label><br />

                                Motor Development:
                                <label><input type="checkbox" className="mx-1" /> Head control</label>
                                <label><input type="checkbox" className="mx-1" /> Sits</label>
                                <label><input type="checkbox" className="mx-1" /> Walks</label>
                                <label><input type="checkbox" className="mx-1" /> Hemiparesis</label>
                                <label><input type="checkbox" className="mx-1" /> Tremors</label><br />

                                ADL's:
                                [S=self], [A=assist], [T=total]
                                &nbsp; Eating:
                                <input className="border-b border-black outline-none w-12" />
                                &nbsp; Bathing:
                                <input className="border-b border-black outline-none w-12" />
                                &nbsp; Dressing:
                                <input className="border-b border-black outline-none w-12" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Skin*/}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%]">
                                SKIN:
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                <label><input type="checkbox" className="mx-1" /> Normal</label>
                                <label><input type="checkbox" className="mx-1" /> Pale</label>
                                <label><input type="checkbox" className="mx-1" /> Red</label>
                                <label><input type="checkbox" className="mx-1" /> Irritation</label>
                                <label><input type="checkbox" className="mx-1" /> Abrasion</label>
                                <label><input type="checkbox" className="mx-1" /> Other</label><br />

                                Skin Intact:
                                <label><input type="checkbox" className="mx-1" /> YES</label>
                                <label><input type="checkbox" className="mx-1" /> NO</label>
                                (If no, a wound assessment MUST be completed)<br />

                                Special Care or Monitoring:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*Neuro */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Neuro
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                Sensation:
                                <label><input type="checkbox" className="mx-1" /> Intact</label>
                                <label><input type="checkbox" className="mx-1" /> Diminished/Absent</label><br />

                                Pain Level (0=none – 10=excruciating):
                                <input className="border-b border-black outline-none w-12" />
                                <label><input type="checkbox" className="mx-1" /> Less than Daily</label>
                                <label><input type="checkbox" className="mx-1" /> Daily</label><br />

                                If there is pain, indicate the site, cause & treatment:
                                <input className="border-b border-black outline-none w-full" /><br />

                                Verbal Response:
                                <label><input type="checkbox" className="mx-1" /> A/O x <input className="border-b border-black outline-none w-8" /></label>
                                <label><input type="checkbox" className="mx-1" /> Confused</label>
                                <label><input type="checkbox" className="mx-1" /> Inappropriate</label>
                                <label><input type="checkbox" className="mx-1" /> Incomprehensible</label>
                                <label><input type="checkbox" className="mx-1" /> No Response</label><br />

                                Aphasia:
                                <label><input type="checkbox" className="mx-1" /> None</label>
                                <label><input type="checkbox" className="mx-1" /> Expressive</label>
                                <label><input type="checkbox" className="mx-1" /> Receptive</label><br />

                                Memory Deficits:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                &nbsp; Impaired Decision making:
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                <label><input type="checkbox" className="mx-1" /> No</label><br />

                                Sleep pattern:
                                <input className="border-b border-black outline-none w-full" /><br />

                                Sleep Aids:
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                <label><input type="checkbox" className="mx-1" /> No</label><br />

                                Seizures:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Comments */}
                <div className="mt-3">
                    <p className="">Comments:</p>
                    <textarea className="w-full border border-black h-24 p-1 outline-none resize-none"></textarea>
                </div>

                {/*Circulation */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Circulation
                            </td>

                            <td className="border border-black p-1 w-[60%] leading-tight">
                                History of:
                                <label><input type="checkbox" className="mx-1" /> Arrhythmia</label>
                                <label><input type="checkbox" className="mx-1" /> Hypertension</label>
                                <label><input type="checkbox" className="mx-1" /> Hypotension</label>
                                <label><input type="checkbox" className="mx-1" /> N/A</label><br />

                                Pulse:
                                <label><input type="checkbox" className="mx-1" /> Regular</label>
                                <label><input type="checkbox" className="mx-1" /> Irregular</label><br />

                                Skin:
                                <label><input type="checkbox" className="mx-1" /> Pink</label>
                                <label><input type="checkbox" className="mx-1" /> Cyanotic</label>
                                <label><input type="checkbox" className="mx-1" /> Pale</label>
                                <label><input type="checkbox" className="mx-1" /> Mottled</label><br />

                                <label><input type="checkbox" className="mx-1" /> Warm</label>
                                <label><input type="checkbox" className="mx-1" /> Cool</label>
                                <label><input type="checkbox" className="mx-1" /> Dry</label>
                                <label><input type="checkbox" className="mx-1" /> Diaphoretic</label><br />

                                Edema:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                &nbsp; Pitting:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>

                            <td className="border border-black p-1 w-[25%] align-top">
                                Comments:
                                <textarea className="w-full h-full outline-none p-1 resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>


                {/*Respiration */}

                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Respiration
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                Respirations:
                                <label><input type="checkbox" className="mx-1" /> Regular</label>
                                <label><input type="checkbox" className="mx-1" /> Unlabored</label>
                                <label><input type="checkbox" className="mx-1" /> Irregular</label>
                                <label><input type="checkbox" className="mx-1" /> Labored</label><br />

                                Breath Sounds:
                                (Right:
                                <label><input type="checkbox" className="mx-1" /> Clear</label>
                                <label><input type="checkbox" className="mx-1" /> Rales</label>)
                                (Left:
                                <label><input type="checkbox" className="mx-1" /> Clear</label>
                                <label><input type="checkbox" className="mx-1" /> Rales</label>)<br />

                                Shortness of breath:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                                (If yes indicate triggers)
                                <input className="border-b border-black outline-none w-full" /><br />

                                Respiratory Treatments:
                                Oxygen
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                If yes indicate amount and administration:
                                <input className="border-b border-black outline-none w-full" /><br />

                                O2 Sats:
                                <input className="border-b border-black outline-none w-24" /><br />

                                <label><input type="checkbox" className="mx-1" /> Aerosol</label>
                                <label><input type="checkbox" className="mx-1" /> Nebulizer</label>
                                <label><input type="checkbox" className="mx-1" /> CPAP</label>
                                <label><input type="checkbox" className="mx-1" /> BIPAP</label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*Dental */}

                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%]">
                                Dental
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                <label><input type="checkbox" className="mx-1" /> Own teeth</label>
                                <label><input type="checkbox" className="mx-1" /> Dentures</label>
                                <label><input type="checkbox" className="mx-1" /> Full</label>
                                <label><input type="checkbox" className="mx-1" /> Partial</label>
                                <label><input type="checkbox" className="mx-1" /> Upper</label>
                                <label><input type="checkbox" className="mx-1" /> Lower</label><br />

                                Dental Hygiene:
                                <label><input type="checkbox" className="mx-1" /> Good</label>
                                <label><input type="checkbox" className="mx-1" /> Fair</label>
                                <label><input type="checkbox" className="mx-1" /> Poor</label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*Psychosocial */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[15%] align-top">
                                Psychosocial
                            </td>

                            <td className="border border-black p-1 w-[85%] leading-tight">
                                Self-injurious Behavior:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                Aggressive Behavior:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label><br />

                                Frequency of disruptive behavior:
                                <input className="border-b border-black outline-none w-full" /><br />

                                Behavior:
                                <label><input type="checkbox" className="mx-1" /> Calm</label>
                                <label><input type="checkbox" className="mx-1" /> Lethargic</label>
                                <label><input type="checkbox" className="mx-1" /> Angry</label>
                                <label><input type="checkbox" className="mx-1" /> Resists Care</label>
                                <label><input type="checkbox" className="mx-1" /> Other</label><br />

                                Answers Questions:
                                <label><input type="checkbox" className="mx-1" /> Readily</label>
                                <label><input type="checkbox" className="mx-1" /> Slowly</label>
                                <label><input type="checkbox" className="mx-1" /> Inappropriately</label><br />

                                Delusions and/or hallucinations:
                                <label><input type="checkbox" className="mx-1" /> No</label>
                                <label><input type="checkbox" className="mx-1" /> Yes</label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*Safety needs */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            {/* Left label */}
                            <td className="border border-black p-1 w-[15%] align-top">
                                Safety Needs
                            </td>

                            {/* Middle content */}
                            <td className="border border-black p-1 w-[60%] leading-tight">
                                Is the environment safe for the resident?
                                <label className="ml-4">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-4">
                                    <input type="checkbox" /> No
                                </label>

                                <div className="mt-1">
                                    (Adequate lighting, open traffic areas, non-skid rugs, appropriate furniture &amp; assistive devices.)
                                </div>
                            </td>

                            {/* Right comments */}
                            <td className="border border-black p-1 w-[25%]">
                                <textarea className="w-full h-full outline-none p-1 resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Notes */}
                <div className="mt-3">
                    <p className="">Notes:</p>
                    <textarea className="w-full border border-black h-72 p-1 outline-none resize-none"></textarea>
                </div>

                {/*MEDICATIONS AND TREATMENTS */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            {/* Left label */}
                            <td className="border border-black p-1 w-[20%] align-top">
                                Medications and Treatments
                            </td>

                            {/* Middle content */}
                            <td className="border border-black p-1 w-[55%] leading-tight">
                                Has a 3-way check (orders, medications and MAR) been conducted for all of the client's medications and treatments, including OTC and PRN&apos;s?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <br />

                                Were any discrepancies identified?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <br />

                                Are medications stored appropriately?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <br />

                                Has the caregiver been instructed on monitoring the effectiveness of drug therapy, drug reactions, side effects and how and when to report problems that may occur?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <br />
                                (If no, please explain)
                                <textarea className="w-full border border-black outline-none resize-none mt-1" rows={2} />

                                Are vital signs required related to a medication or diagnosis?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                (specify)
                                <input className="w-full border-b border-black outline-none mt-1" />

                                Is lab monitoring required related to a medication or diagnosis?
                                (hypoglycemic, anticoagulant, psychotropic, seizure, etc.)
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                (specify)
                                <input className="w-full border-b border-black outline-none mt-1" />

                                Have arrangements been made to obtain these labs?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                (explain)
                                <input className="w-full border-b border-black outline-none mt-1" />
                            </td>

                            {/* Right comments */}
                            <td className="border border-black p-1 w-[25%] align-top">
                                Comments:
                                <textarea className="w-full h-full outline-none resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*High risk Medication */}

                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[20%] align-top">
                                High Risk Medications
                            </td>

                            <td className="border border-black p-1 w-[80%] leading-tight">
                                Is the Client taking any high risk drugs?
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                (specify)
                                <input className="w-full border-b border-black outline-none mt-1" />
                                <br />

                                Has the caregiver received instruction on special precautions for all high risk medications (such as hypoglycemic, anticoagulants, etc.) and how and when to report problems that may occur?
                                <br />
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> Yes
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> No
                                </label>
                                <label className="ml-3 inline-flex items-center gap-1">
                                    <input type="checkbox" /> N/A
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*Review of medications */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[50%]">
                                Review of All Medications
                            </td>
                            <td className="border border-black p-1 w-[50%]">
                                See Attached MAR
                                <input className="ml-2 border-b border-black outline-none w-40" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/*Medically frail or fragile   */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[60%]">
                                Is Client deemed medically frail or fragile? If yes, please explain
                            </td>
                            <td className="border border-black p-1 w-[40%]">
                                <textarea className="w-full h-16 outline-none resize-none" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Final Comments */}
                <table className="w-full border border-black border-collapse mt-4 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1">
                                Comments:
                                <textarea
                                    className="w-full h-20 outline-none resize-none mt-1"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Signature Section */}
                <table className="w-full border border-black border-collapse mt-3 text-[12px]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 w-[50%]">
                                Agency RN&apos;s signature:
                                <input
                                    className="w-full outline-none mt-1"
                                    placeholder=""
                                />
                            </td>
                            <td className="border border-black p-1 w-[50%]">
                                <input className="w-full outline-none mt-1" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                Print Name:
                                <input className="w-full outline-none mt-1" />
                            </td>
                            <td className="border border-black p-1">
                                <input className="w-full outline-none mt-1" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                Date assessment completed:
                                <input
                                    type="date"
                                    className="w-full outline-none mt-1"
                                />
                            </td>
                            <td className="border border-black p-1">
                                <input
                                    type="date"
                                    className="w-full outline-none mt-1"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-3">
                    <p>  </p>
                </div>

            </div>
        </div>
    );
}
