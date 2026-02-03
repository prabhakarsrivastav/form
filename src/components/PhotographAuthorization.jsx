import React from 'react';
import logo from '../assets/logo.jpg';

const PhotographAuthorization = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-12">
                {/* Header */}
                <div className="flex flex-col items-center mb-6 md:mb-8">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-10 md:h-24 object-contain mb-2 md:mb-4" />
                    <h1 className="text-sm md:text-2xl font-bold mt-2 md:mt-4 uppercase tracking-wide text-center">Photograph Authorization</h1>
                </div>

                {/* Content body */}
                <div className="space-y-4 md:space-y-6 text-[9px] md:text-base leading-relaxed text-justify">
                    <p>
                        I, <input type="text" className="border-b border-black w-32 md:w-64 outline-none px-1 inline-block" />, I hereby grant Pacific Health Systems, LLC permission to use my
                        likeness in a photograph, video, or other digital media (“photo”) in their publications, including web-based
                        publications, without payment or other consideration.
                    </p>

                    <p>
                        I understand and agree that all photos will become the property of Pacific Health Systems, LLC and can be
                        duplicated if requested.
                    </p>

                    <p>
                        I hereby irrevocably authorize Pacific Health Systems, LLC to edit, alter, copy, exhibit, publish, or distribute
                        these photos for any lawful purpose. In addition, I waive any right to inspect or approve the finished product
                        wherein my likeness appears. Additionally, I waive any right to royalties or other compensation arising or related
                        to the use of the photo.
                    </p>

                    <p>
                        I hereby hold harmless, release, and forever discharge Pacific Health Systems, LLC from all claims, demands,
                        and causes of action which I, my heirs, representatives, executors, administrators, or any other persons acting on
                        my behalf or on behalf of my estate have or may have by reason of this authorization.
                    </p>
                </div>

                {/* Declaration */}
                <div className="mt-6 md:mt-8 mb-4 md:mb-6 font-bold text-center uppercase text-[9px] md:text-base">
                    I HAVE READ AND UNDERSTAND THE ABOVE PHOTO RELEASE. I AFFIRM THAT I HAVE
                    OBTAINED THE REQUIRED CONSENT AS EVIDENCED BELOW.
                </div>

                {/* Checkboxes */}
                <div className="flex justify-center gap-8 md:gap-20 mb-8 md:mb-12 text-[9px] md:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-3 h-3 md:w-5 md:h-5 border border-black" />
                        <span className="font-semibold">AGREE</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-3 h-3 md:w-5 md:h-5 border border-black" />
                        <span className="font-semibold">DISAGREE</span>
                    </label>
                </div>

                {/* Signatures */}
                <div className="space-y-6 md:space-y-8 mt-6 md:mt-8 text-[9px] md:text-base">
                    {/* Row 1 */}
                    <div className="flex flex-row gap-4 md:gap-16">
                        <div className="flex-1">
                            <input type="text" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">Client/ Responsible Party (Print Name)</div>
                        </div>
                        <div className="w-24 md:w-48">
                            <input type="date" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">Date</div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-row gap-4 md:gap-16">
                        <div className="flex-1">
                            <input type="text" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">Client/ Responsible Party (signature)</div>
                        </div>
                        <div className="w-24 md:w-48">
                            <input type="date" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">Date</div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-row gap-4 md:gap-16">
                        <div className="flex-1">
                            <input type="text" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">RN/ Care Wind Place Representative</div>
                        </div>
                        <div className="w-24 md:w-48">
                            <input type="date" className="w-full border-b border-black outline-none mb-1" />
                            <div className="text-[8px] md:text-sm">Date</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotographAuthorization;
