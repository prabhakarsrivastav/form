import React from 'react';

const Form5 = () => {
    return (
        <div className="w-full bg-white text-black font-serif text-[9px] md:text-[13px] flex justify-center mt-4 mb-4">
            <div className="w-[98%] md:w-[85%] lg:w-[60%]">

                {/* Top thick line */}
                <div className="border-t-4 border-black mb-3"></div>

                {/* Title */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                    ABNORMAL INVOLUNTARY MOVEMENT SCALE (AIMS)
                </h1>

                {/* Patient info */}
                <div className="flex items-center mb-3">
                    <span className="font-semibold mr-2">
                        Patient&apos;s Name (Please Print):
                    </span>
                    <input className="w-[20%] md:w-[25%] border-b-2 border-black outline-none mr-6" />

                    <span className="font-semibold mr-2">
                        Patient&apos;s ID Information:
                    </span>
                    <input className="w-[25%] md:w-[30%] border-b-2 border-black outline-none" />
                </div>

                <div className="flex items-center mb-6">
                    <span className="font-semibold mr-2">
                        Examiner&apos;s Name:
                    </span>
                    <input className="flex-1 min-w-0 border-b-2 border-black outline-none" />
                </div>

                {/* Section title */}
                <h2 className="text-sm md:text-lg font-bold mb-3">
                    CURRENT MEDICATIONS AND TOTAL MG/DAY
                </h2>

                {/* Medication rows */}
                <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2 w-[80px] md:w-[120px]">
                        Medication #1:
                    </span>
                    <input className="flex-1 min-w-0 border-b-2 border-black outline-none mr-6" />

                    <span className="font-semibold mr-2">
                        Total mg/Day:
                    </span>
                    <input className="w-[80px] md:w-[120px] border-b-2 border-black outline-none" />
                </div>

                <div className="flex items-center">
                    <span className="font-semibold mr-2 w-[80px] md:w-[120px]">
                        Medication #2:
                    </span>
                    <input className="flex-1 min-w-0 border-b-2 border-black outline-none mr-6" />

                    <span className="font-semibold mr-2">
                        Total mg/Day:
                    </span>
                    <input className="w-[80px] md:w-[120px] border-b-2 border-black outline-none" />
                </div>
                {/* Top thick line */}
                <div className="border-t-2 border-black mb-3 mt-6"></div>




                <table className="w-full border border-black border-collapse">
                    <tbody>

                        {/* Scale header */}
                        <tr>
                            <td className="border border-black p-1"></td>
                            {["None/Normal", "Minimal", "Mild", "Moderate", "Severe"].map((h, i) => (
                                <td key={i} className="border border-black p-1 text-center font-semibold text-[8px] md:text-[13px]">
                                    {h}
                                </td>
                            ))}
                        </tr>

                        {/* Facial and Oral Movements */}
                        <tr>
                            <td className="border border-black p-1 font-semibold" colSpan={6}>
                                Facial and Oral Movements
                            </td>
                        </tr>

                        {[
                            {
                                n: 1,
                                text:
                                    "Muscles of Facial Expression e.g. movements of forehead, eyebrows, periorbital area, cheeks; include frowning, blinking, smiling, grimacing.",
                            },
                            {
                                n: 2,
                                text:
                                    "Lips and Perioral Area e.g. puckering, pouting, smacking",
                            },
                            {
                                n: 3,
                                text:
                                    "Jaw e.g. biting, clenching, chewing, mouth opening, lateral movement",
                            },
                            {
                                n: 4,
                                text:
                                    "Tongue. Rate only increases in movement both in and out of mouth, NOT inability to sustain movement.",
                            },
                        ].map((row) => (
                            <tr key={row.n}>
                                <td className="border border-black p-1 w-[50%] md:w-[60%]">
                                    {row.n}. {row.text}
                                </td>
                                {[0, 1, 2, 3, 4].map((v) => (
                                    <td key={v} className="border border-black text-center">
                                        <input type="checkbox" />
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Extremity Movements */}
                        <tr>
                            <td className="border border-black p-1 font-semibold" colSpan={6}>
                                Extremity Movements
                            </td>
                        </tr>

                        {[
                            {
                                n: 5,
                                text:
                                    "Upper (arms, wrists, hands, fingers). Include choreic movements (i.e. rapid, objective purposeless, irregular, spontaneous); athetoid movements (i.e. repetitive, regular, rhythmic).",
                            },
                            {
                                n: 6,
                                text:
                                    "Lower (legs, knees, ankles, toes). E.g. lateral knee movement, foot tapping, heel dropping, foot squirming, inversion and eversion of foot.",
                            },
                        ].map((row) => (
                            <tr key={row.n}>
                                <td className="border border-black p-1">
                                    {row.n}. {row.text}
                                </td>
                                {[0, 1, 2, 3, 4].map((v) => (
                                    <td key={v} className="border border-black text-center">
                                        <input type="checkbox" />
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Trunk Movements */}
                        <tr>
                            <td className="border border-black p-1 font-semibold" colSpan={6}>
                                Trunk Movements
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                7. Neck, shoulders, hip. E.g. rocking, twisting, squirming, pelvic gyrations
                            </td>
                            {[0, 1, 2, 3, 4].map((v) => (
                                <td key={v} className="border border-black text-center">
                                    <input type="checkbox" />
                                </td>
                            ))}
                        </tr>

                        {/* Scoring instructions */}
                        <tr>
                            <td className="border border-black p-2 text-[8px] md:text-[13px]" colSpan={6}>
                                <strong>SCORING:</strong>
                                <ul className="list-disc pl-5 mt-1">
                                    <li>
                                        Score the highest amplitude or frequency in a movement on the 0–4 scale, not the average;
                                    </li>
                                    <li>
                                        Score Activated Movements the same way; do not lower those numbers as was proposed at one time;
                                    </li>
                                    <li>
                                        <strong>A POSITIVE AIMS EXAMINATION</strong> IS A SCORE OF 2 IN TWO OR MORE MOVEMENTS OR A SCORE OF 3 OR 4 IN A SINGLE MOVEMENT.
                                    </li>
                                </ul>
                                <p className="mt-1">
                                    Do not sum the scores: e.g. a patient who has scores 1 in four movements DOES NOT have a positive AIMS score of 4.
                                </p>
                            </td>
                        </tr>

                        {/* Overall Severity */}
                        <tr>
                            <td className="border border-black p-1 font-semibold" colSpan={6}>
                                Overall Severity
                            </td>
                        </tr>

                        {[
                            "Severity of abnormal movements",
                            "Incapacitation due to abnormal movements",
                            "Patient's awareness of abnormal movements (rate only patient’s report)",
                        ].map((text, i) => (
                            <tr key={i}>
                                <td className="border border-black p-1">
                                    {8 + i}. {text}
                                </td>
                                {[0, 1, 2, 3, 4].map((v) => (
                                    <td key={v} className="border border-black text-center">
                                        <input type="checkbox" />
                                    </td>
                                ))}
                            </tr>
                        ))}

                        {/* Awareness scale note */}
                        <tr>
                            <td className="border border-black p-1 text-[8px] md:text-[13px]" colSpan={6}>
                                0 = No awareness, 1 = Aware, no distress, 2 = Aware, mild distress, 3 = Aware, moderate distress, 4 = Aware, severe distress
                            </td>
                        </tr>

                        {/* Dental Status */}
                        <tr>
                            <td className="border border-black p-1 font-semibold" colSpan={6}>
                                Dental Status
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                11. Current problems with teeth and/or dentures?
                            </td>
                            <td className="border border-black text-center" colSpan={2}>
                                <input type="checkbox" /> Yes
                            </td>
                            <td className="border border-black text-center" colSpan={3}>
                                <input type="checkbox" /> No
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1">
                                12. Does patient usually wear dentures?
                            </td>
                            <td className="border border-black text-center" colSpan={2}>
                                <input type="checkbox" /> Yes
                            </td>
                            <td className="border border-black text-center" colSpan={3}>
                                <input type="checkbox" /> No
                            </td>
                        </tr>

                        {/* Footer */}
                        <tr>
                            <td className="border border-black p-1" colSpan={6}>
                                Comments:
                                <textarea className="w-full h-16 outline-none resize-none mt-1" />
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-black p-1" colSpan={2}>
                                Examiner&apos;s Signature:
                                <input className="w-full border-b border-black outline-none mt-2" />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Date:
                                <input type="date" className="w-full border-b border-black outline-none mt-2" />
                            </td>
                            <td className="border border-black p-1" colSpan={2}>
                                Next Exam Date:
                                <input type="date" className="w-full border-b border-black outline-none mt-2" />
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );

};

export default Form5;
