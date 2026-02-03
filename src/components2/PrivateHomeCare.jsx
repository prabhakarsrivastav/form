import React from 'react';

const PrivateHomeCare = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-12 bg-white text-[10px] md:text-sm leading-relaxed border-2 border-black">

                {/* Header */}
                <div className="text-center font-bold text-lg md:text-xl uppercase mb-8">
                    <div>PRIVATE HOME CARE</div>
                    <div>CLIENTS RIGHTS & RESPONSIBILITIES FORM</div>
                </div>

                <p className="mb-6 font-bold text-justify uppercase">
                    ALL CLIENTS RIGHTS WILL BE GIVEN TO ALL AGENCY CLIENTS AT THE TIME OF SERVICE AND ANY COMPLAINTS WILL BE HANDLED BY
                </p>

                {/* Highlighted Administrator Section */}
                {/* Highlighted Administrator Section */}
                <div className="mb-6">
                    <div className="flex items-center">
                        <span className="font-bold bg-yellow-300 px-1 mr-2 whitespace-nowrap text-[9px] md:text-sm">THE AGENCY ADMINISTRATOR:</span>
                        <input type="text" className="border-b-2 border-black flex-grow outline-none min-w-0 w-full" />
                    </div>
                </div>

                <p className="mb-6 text-justify">
                    All clients will receive a written notice of the address and telephone number of the state licensing authority, i.e. The department, which further explains that the department is charged with the responsibility of Licensing the provider and investigating client complaints which appear to violate licensing regulations;
                </p>

                {/* Highlighted Phone Section */}
                <div className="mb-6">
                    <div className="flex items-center">
                        <span className="font-bold bg-yellow-300 px-1 mr-2 whitespace-nowrap text-[9px] md:text-sm">This agencies contact phone number is:</span>
                        <input type="text" className="border-b-2 border-black flex-grow outline-none min-w-0 w-full" />
                    </div>
                </div>

                <p className="mb-6">
                    To make complaints only call: (404-657-5700, 404-657-5726 & 1 800 878-6442).
                </p>

                <p className="mb-8 text-justify">
                    The Department that regulates this agency is: <span className="underline font">Department of Community Health /Healthcare Facility Regulation/Home Care Unit for information about licensing requirements: (404-657-1509)</span>. @ 2 Peachtree Street, Suite 31-447 Atlanta, Georgia 30303
                </p>

                {/* Rights List */}
                <div className="space-y-4 mb-8 text-justify">
                    <p>(a)Right to be informed about plan of service and to participate in the planning;</p>
                    <p>(b) Right to be promptly and fully informed of any changes in the plan of service</p>
                    <p>(c) Right to accept or refuse services;</p>
                    <p>(d) Right to be fully informed of the charges for services;</p>
                    <p>(e) Right to be informed of the name, business telephone number and business address of the person supervising the services and how to contact that person; ...</p>
                    <p>(f) Right to be informed of the complaint procedures and the right to submit complaints without fear of discrimination or retaliation and to have them investigated by the provider within a reasonable period of time. The complaint procedure provided shall include the name, business address and telephone number of the person designated by the provider to handle complaints and questions; ...</p>
                    <p>(g) Right of confidentiality of client record;</p>
                    <p>(h) Right to have property and residence treated with respect;</p>
                    <p>(i) Right to receive a written notice of the address and telephone number of the state licensing authority, i.e. the department, which further explains that the department is charged with the responsibility of licensing the provider and investigating client complaints which appear to violate licensing regulations;</p>
                    <p>(j) Right to obtain a copy of the provider's most recent completed report of licensure inspection from the provider upon written request. The provider is not required to release the report of licensure inspection until the provider has had an opportunity to file a written plan of correction for the violations, if any, identified. The facility may charge the client reasonable photocopying charges;</p>
                    <p>(k) Right to be advised that the client and the responsible party, if applicable, must advise the provider of any changes in the client's condition or any events that affect the client's service needs.</p>
                </div>

                {/* Acknowledgement/Signature */}
                <div className="mb-8 font-bold leading-loose text-justify">
                    I <input type="text" className="border-b-2 border-black w-[150px] md:w-64 outline-none inline-block mx-2 bg-transparent text-center" />
                    acknowledge the rights listed above have been shared and or explained to me and I fully understand what those rights are. I have also been given a copy of the right
                </div>

                <div className="flex gap-4 items-end font-bold">
                    <div className="flex-1 flex items-end">
                        <span className="mr-2 whitespace-nowrap">Client Signature:</span>
                        <input type="text" className="border-b-2 border-black flex-grow outline-none min-w-0" />
                    </div>
                    <div className="w-[30%] flex items-end">
                        <span className="mr-2">Date:</span>
                        <input type="date" className="border-b-2 border-black flex-grow outline-none min-w-0" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivateHomeCare;
