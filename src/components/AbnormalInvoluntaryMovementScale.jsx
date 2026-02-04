import React, { useState } from 'react';

const AbnormalInvoluntaryMovementScale = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientID: '',
        examinerName: '',
        medication1: '',
        totalMgDay1: '',
        medication2: '',
        totalMgDay2: '',
        scores: {}, // Object to store scores for items 1-10. Key: item number, Value: 0-4
        dentalProblems: null, // null, 'yes', or 'no'
        wearDentures: null,   // null, 'yes', or 'no'
        comments: '',
        examinerSignature: '',
        date: '',
        nextExamDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleScoreChange = (itemNumber, score) => {
        setFormData(prev => ({
            ...prev,
            scores: {
                ...prev.scores,
                [itemNumber]: score
            }
        }));
    };

    const handleDentalChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field] === value ? null : value
        }));
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].focus();
        }
    };

    const logData = () => {
        console.log('AbnormalInvoluntaryMovementScale Data:', formData);
    };

    const renderScoreRow = (n, text) => (
        <tr key={n}>
            <td className="border border-black p-1 w-[50%] md:w-[60%]">
                {n}. {text}
            </td>
            {[0, 1, 2, 3, 4].map((v) => (
                <td key={v} className="border border-black text-center">
                    <input
                        type="checkbox"
                        checked={formData.scores[n] === v}
                        onChange={() => handleScoreChange(n, v)}
                        className="cursor-pointer"
                    />
                </td>
            ))}
        </tr>
    );

    return (
        <div className="w-full bg-white text-black font-serif text-[9px] md:text-[13px] flex justify-center mt-4 mb-4">
            <div className="w-[98%] md:w-[85%] lg:w-[60%]">
                <form>
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
                        <input
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="w-[20%] md:w-[25%] border-b-2 border-black outline-none mr-6"
                        />

                        <span className="font-semibold mr-2">
                            Patient&apos;s ID Information:
                        </span>
                        <input
                            name="patientID"
                            value={formData.patientID}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="w-[25%] md:w-[30%] border-b-2 border-black outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <span className="font-semibold mr-2">
                            Examiner&apos;s Name:
                        </span>
                        <input
                            name="examinerName"
                            value={formData.examinerName}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="flex-1 min-w-0 border-b-2 border-black outline-none"
                        />
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
                        <input
                            name="medication1"
                            value={formData.medication1}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="flex-1 min-w-0 border-b-2 border-black outline-none mr-6"
                        />

                        <span className="font-semibold mr-2">
                            Total mg/Day:
                        </span>
                        <input
                            name="totalMgDay1"
                            value={formData.totalMgDay1}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="w-[80px] md:w-[120px] border-b-2 border-black outline-none"
                        />
                    </div>

                    <div className="flex items-center">
                        <span className="font-semibold mr-2 w-[80px] md:w-[120px]">
                            Medication #2:
                        </span>
                        <input
                            name="medication2"
                            value={formData.medication2}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="flex-1 min-w-0 border-b-2 border-black outline-none mr-6"
                        />

                        <span className="font-semibold mr-2">
                            Total mg/Day:
                        </span>
                        <input
                            name="totalMgDay2"
                            value={formData.totalMgDay2}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            className="w-[80px] md:w-[120px] border-b-2 border-black outline-none"
                        />
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
                                    text: "Muscles of Facial Expression e.g. movements of forehead, eyebrows, periorbital area, cheeks; include frowning, blinking, smiling, grimacing.",
                                },
                                {
                                    n: 2,
                                    text: "Lips and Perioral Area e.g. puckering, pouting, smacking",
                                },
                                {
                                    n: 3,
                                    text: "Jaw e.g. biting, clenching, chewing, mouth opening, lateral movement",
                                },
                                {
                                    n: 4,
                                    text: "Tongue. Rate only increases in movement both in and out of mouth, NOT inability to sustain movement.",
                                },
                            ].map((row) => renderScoreRow(row.n, row.text))}

                            {/* Extremity Movements */}
                            <tr>
                                <td className="border border-black p-1 font-semibold" colSpan={6}>
                                    Extremity Movements
                                </td>
                            </tr>

                            {[
                                {
                                    n: 5,
                                    text: "Upper (arms, wrists, hands, fingers). Include choreic movements (i.e. rapid, objective purposeless, irregular, spontaneous); athetoid movements (i.e. repetitive, regular, rhythmic).",
                                },
                                {
                                    n: 6,
                                    text: "Lower (legs, knees, ankles, toes). E.g. lateral knee movement, foot tapping, heel dropping, foot squirming, inversion and eversion of foot.",
                                },
                            ].map((row) => renderScoreRow(row.n, row.text))}

                            {/* Trunk Movements */}
                            <tr>
                                <td className="border border-black p-1 font-semibold" colSpan={6}>
                                    Trunk Movements
                                </td>
                            </tr>

                            {renderScoreRow(7, "Neck, shoulders, hip. E.g. rocking, twisting, squirming, pelvic gyrations")}

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
                            ].map((text, i) => renderScoreRow(8 + i, text))}

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
                                    <label className="flex items-center justify-center gap-1 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.dentalProblems === 'yes'}
                                            onChange={() => handleDentalChange('dentalProblems', 'yes')}
                                        /> Yes
                                    </label>
                                </td>
                                <td className="border border-black text-center" colSpan={3}>
                                    <label className="flex items-center justify-center gap-1 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.dentalProblems === 'no'}
                                            onChange={() => handleDentalChange('dentalProblems', 'no')}
                                        /> No
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-black p-1">
                                    12. Does patient usually wear dentures?
                                </td>
                                <td className="border border-black text-center" colSpan={2}>
                                    <label className="flex items-center justify-center gap-1 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.wearDentures === 'yes'}
                                            onChange={() => handleDentalChange('wearDentures', 'yes')}
                                        /> Yes
                                    </label>
                                </td>
                                <td className="border border-black text-center" colSpan={3}>
                                    <label className="flex items-center justify-center gap-1 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.wearDentures === 'no'}
                                            onChange={() => handleDentalChange('wearDentures', 'no')}
                                        /> No
                                    </label>
                                </td>
                            </tr>

                            {/* Footer */}
                            <tr>
                                <td className="border border-black p-1" colSpan={6}>
                                    Comments:
                                    <textarea
                                        name="comments"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className="w-full h-16 outline-none resize-none mt-1"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-black p-1" colSpan={2}>
                                    Examiner&apos;s Signature:
                                    <input
                                        name="examinerSignature"
                                        value={formData.examinerSignature}
                                        onChange={handleChange}
                                        onKeyDown={handleEnter}
                                        className="w-full border-b border-black outline-none mt-2"
                                    />
                                </td>
                                <td className="border border-black p-1" colSpan={2}>
                                    Date:
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        onKeyDown={handleEnter}
                                        className="w-full border-b border-black outline-none mt-2"
                                    />
                                </td>
                                <td className="border border-black p-1" colSpan={2}>
                                    Next Exam Date:
                                    <input
                                        type="date"
                                        name="nextExamDate"
                                        value={formData.nextExamDate}
                                        onChange={handleChange}
                                        onKeyDown={handleEnter}
                                        className="w-full border-b border-black outline-none mt-2"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/*<div className="mt-4 flex justify-center no-print">
                        <button
                            type="button"
                            onClick={logData}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Log Data
                        </button>
                    </div>*/}
                </form>
            </div>
        </div>
    );

};

export default AbnormalInvoluntaryMovementScale;
