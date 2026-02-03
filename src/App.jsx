import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientMedicationRecord from './components/PatientMedicationRecord';
import ComprehensiveNursingAssessment from './components/ComprehensiveNursingAssessment';
import SkinIntegrityForm from './components/SkinIntegrityForm';
import SafetyRiskSelfPreservationAssessment from './components/SafetyRiskSelfPreservationAssessment';
import AbnormalInvoluntaryMovementScale from './components/AbnormalInvoluntaryMovementScale';
import PhotographAuthorization from './components/PhotographAuthorization';
import ClientVehicleTransportationFundsPolicy from './components/ClientVehicleTransportationFundsPolicy';
import CodeOfEthicsPolicy from './components/CodeOfEthicsPolicy';
import ClientRightsResponsibilities from './components/ClientRightsResponsibilities';
import AuthorizationForReleaseOfInformation from './components/AuthorizationForReleaseOfInformation';
import HomeSupervisoryVisit from './components/HomeSupervisoryVisit';
import TableOfContents from './components/TableOfContents';
import DetailedTableOfContents from './components/DetailedTableOfContents';
import RiskMitigationPlan from './components/RiskMitigationPlan';
import PrivateHomeCare from './components2/PrivateHomeCare';
import ServiceAgreementAddendum from './components2/ServiceAgreementAddendum';
import ClientBasicInfo from './components2/ClientBasicInfo';
import ClientServicePlan from './components2/ClientServicePlan';
import ServiceAgreementForm from './components2/ServiceAgreementForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-8">Medical Forms</h1>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Link to="/patient-medication-record" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-blue-600">
                Patient Medication Record
              </Link>
              <Link to="/comprehensive-nursing-assessment" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-green-600">
                Comprehensive Initial Nursing Assessment
              </Link>
              <Link to="/skin-integrity-form" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-purple-600">
                Skin Integrity Form
              </Link>
              <Link to="/safety-risk-self-preservation-assessment" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-red-600">
                Annual Safety Risk/Self Preservation Assessment
              </Link>
              <Link to="/abnormal-involuntary-movement-scale" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-orange-600">
                Abnormal Involuntary Movement Scale (AIMS)
              </Link>
              <Link to="/photograph-authorization" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-teal-600">
                Photograph Authorization
              </Link>
              <Link to="/client-vehicle-transportation-funds-policy" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-indigo-700">
                Client Vehicle, Transportation & Funds Policy
              </Link>
              <Link to="/code-of-ethics-policy" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-pink-700">
                Code of Ethics Policy
              </Link>
              <Link to="/client-rights-responsibilities" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-cyan-700">
                Client Rights and Responsibilities
              </Link>
              <Link to="/authorization-for-release-of-information" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-amber-900">
                Authorization for Release of Information
              </Link>
              <Link to="/home-supervisory-visit" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-lime-700">
                Home Supervisory Visit
              </Link>
              <Link to="/table-of-contents" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-fuchsia-700">
                Table of Contents
              </Link>
              <Link to="/detailed-table-of-contents" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-yellow-600">
                Detailed Table of Contents
              </Link>
              <Link to="/risk-mitigation-plan" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-gray-800">
                Risk Mitigation Plan
              </Link>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Component 2 Forms</h2>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Link to="/private-home-care" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-teal-800">
                Go to Private Home Care (Rights & Responsibilities)
              </Link>
              <Link to="/service-agreement-addendum" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-blue-800">
                Go to Service Agreement Addendum
              </Link>
              <Link to="/client-basic-info" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-red-800">
                Go to Client Basic Info
              </Link>
              <Link to="/client-service-plan" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-indigo-800">
                Go to Client Service Plan
              </Link>
              <Link to="/service-agreement-form" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-cyan-800">
                Go to Service Agreement Form
              </Link>
            </div>
          </div>
        } />
        <Route path="/patient-medication-record" element={<PatientMedicationRecord />} />
        <Route path="/comprehensive-nursing-assessment" element={<ComprehensiveNursingAssessment />} />
        <Route path="/skin-integrity-form" element={<SkinIntegrityForm />} />
        <Route path="/safety-risk-self-preservation-assessment" element={<SafetyRiskSelfPreservationAssessment />} />
        <Route path="/abnormal-involuntary-movement-scale" element={<AbnormalInvoluntaryMovementScale />} />
        <Route path="/photograph-authorization" element={<PhotographAuthorization />} />
        <Route path="/client-vehicle-transportation-funds-policy" element={<ClientVehicleTransportationFundsPolicy />} />
        <Route path="/code-of-ethics-policy" element={<CodeOfEthicsPolicy />} />
        <Route path="/client-rights-responsibilities" element={<ClientRightsResponsibilities />} />
        <Route path="/authorization-for-release-of-information" element={<AuthorizationForReleaseOfInformation />} />
        <Route path="/home-supervisory-visit" element={<HomeSupervisoryVisit />} />
        <Route path="/table-of-contents" element={<TableOfContents />} />
        <Route path="/detailed-table-of-contents" element={<DetailedTableOfContents />} />
        <Route path="/risk-mitigation-plan" element={<RiskMitigationPlan />} />
        <Route path="/private-home-care" element={<PrivateHomeCare />} />
        <Route path="/service-agreement-addendum" element={<ServiceAgreementAddendum />} />
        <Route path="/client-basic-info" element={<ClientBasicInfo />} />
        <Route path="/client-service-plan" element={<ClientServicePlan />} />
        <Route path="/service-agreement-form" element={<ServiceAgreementForm />} />
      </Routes>
    </Router>
  );
}

export default App;
