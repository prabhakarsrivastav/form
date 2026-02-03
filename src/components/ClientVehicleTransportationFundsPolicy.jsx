import React from 'react';
import logo from '../assets/logo.jpg';

const ClientVehicleTransportationFundsPolicy = () => {
    return (
        <div className="w-full bg-white min-h-screen text-black font-serif flex justify-center mt-4 mb-8">
            <div className="w-[98%] md:w-[85%] lg:w-[60%] p-2 md:p-12 text-[9px] md:text-base leading-snug">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Pacific Health Systems Logo" className="h-10 md:h-20 object-contain mb-2" />
                    <h1 className="text-sm md:text-xl font-bold text-center mt-2">Client Vehicle, Transportation & Funds Policy</h1>
                </div>

                {/* Policy Overview */}
                <div className="mb-4">
                    <h2 className="font-bold mb-1">Policy Overview</h2>
                    <p className="text-justify">
                        Pacific Health Systems LLC is committed to ensuring the safety, dignity, and protection of all clients while minimizing
                        risk and maintaining regulatory compliance. This policy establishes clear rules regarding transportation and the handling of
                        client funds.
                    </p>
                </div>

                {/* Client Vehicle & Transportation Policy */}
                <div className="mb-4">
                    <h2 className="font-bold mb-1">Client Vehicle & Transportation Policy</h2>
                    <p className="text-justify mb-2">
                        Pacific Health Systems LLC strictly prohibits any employee, contractor, or affiliated personnel from operating, using, or
                        driving any vehicle owned, leased, or provided by a client under any circumstances.
                    </p>
                    <p className="mb-1">This includes:</p>
                    <ul className="list-disc pl-8 mb-2">
                        <li>Standard vehicles</li>
                        <li>Specialized or adaptive vehicles</li>
                        <li>Medically modified vehicles</li>
                    </ul>
                    <p className="mb-1">
                        Staff are <span className="font-bold">not permitted to drive clients or operate client-owned vehicles for any reason</span>, regardless of:
                    </p>
                    <ul className="list-disc pl-8 mb-2">
                        <li>The purpose of the trip</li>
                        <li>The client’s physical or medical condition</li>
                        <li>The service being provided</li>
                    </ul>
                    <p className="font-bold">This rule applies to all programs, staff roles, and service settings.</p>
                </div>

                {/* Approved Transportation Methods */}
                <div className="mb-4">
                    <h2 className="font-bold mb-1">Approved Transportation Methods</h2>
                    <p className="text-justify mb-2">
                        When transportation is required as part of a client’s authorized services, Pacific Health Systems LLC will arrange
                        transportation through approved third-party providers such as:
                    </p>
                    <ul className="list-disc pl-8 mb-2">
                        <li>Non-Emergency Medical Transportation (NEMT)</li>
                        <li>Licensed medical transportation vendors</li>
                        <li>Public transportation (when appropriate)</li>
                        <li>Program-approved rideshare services (e.g., Uber Health, Lyft Healthcare)</li>
                    </ul>
                    <p className="text-justify">
                        Staff shall not personally transport clients or operate any vehicle for client transportation purposes.
                    </p>
                </div>

                {/* Prohibited Conduct */}
                <div className="mb-4">
                    <h2 className="font-bold mb-1">Prohibited Conduct</h2>
                    <p className="mb-1">Under no circumstances shall staff or contractors:</p>
                    <ul className="list-disc pl-8 mb-2">
                        <li>Drive a client in any vehicle</li>
                        <li>Operate a client-owned vehicle</li>
                        <li>Arrange unauthorized transportation</li>
                        <li>Accept requests from clients or families for personal transport</li>
                    </ul>
                    <p className="text-justify">
                        Violations may result in disciplinary action, up to and including termination and personal liability.
                    </p>
                </div>

                {/* Client Funds Policy */}
                <div className="mb-4">
                    <h2 className="font-bold mb-1">Client Funds Policy</h2>
                    <p className="text-justify mb-2">
                        Pacific Health Systems LLC does <span className="font-bold">not manage, handle, or use client funds</span> under any circumstances.
                    </p>
                    <p className="mb-1">Employees and contractors are strictly prohibited from:</p>
                    <ul className="list-disc pl-8 mb-2">
                        <li>Holding client money</li>
                        <li>Making purchases on behalf of clients using client funds</li>
                        <li>Managing financial transactions for clients</li>
                    </ul>
                    <p className="text-justify">
                        All financial matters remain the sole responsibility of the client or their legal representative.
                    </p>
                </div>

                {/* Client Acknowledgment */}
                <div className="mb-8">
                    <h2 className="font-bold mb-1">Client Acknowledgment</h2>
                    <p className="text-justify mb-1">
                        I acknowledge that I have received, read, and understand the Pacific Health Systems LLC Client Vehicle, Transportation &
                        Funds Policy.
                    </p>
                    <p className="text-justify">
                        I agree to abide by this policy and understand that staff are not permitted to drive me, use my vehicle, or manage my
                        personal funds.
                    </p>
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-4 md:gap-16 mt-8 md:mt-12">
                    <div>
                        <input type="text" className="w-full border-b-2 border-black outline-none mb-1 font-bold" />
                        <div className="flex justify-between font-bold italic">
                            <span>Client Representative Signature</span>
                            <span className="mr-4 md:mr-8">Date</span>
                        </div>
                    </div>
                    <div>
                        <input type="text" className="w-full border-b-2 border-black outline-none mb-1 font-bold" />
                        <div className="flex justify-between font-bold italic">
                            <span>Admission Representative Signature</span>
                            <span className="mr-4 md:mr-8">Date</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientVehicleTransportationFundsPolicy;
