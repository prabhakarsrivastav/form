import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import Form5 from './components/Form5';
import Form6 from './components/Form6';
import Form7 from './components/Form7';
import Form8 from './components/Form8';
import Form9 from './components/Form9';
import Form10 from './components/Form10';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-8">Medical Forms</h1>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Link to="/form1" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-blue-600">
                Go to Form 1 (Medication Record)
              </Link>
              <Link to="/form2" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-green-600">
                Go to Form 2 (Nursing Assessment)
              </Link>
              <Link to="/form3" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-purple-600">
                Go to Form 3 (Skin Integrity)
              </Link>
              <Link to="/form4" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-red-600">
                Go to Form 4 (AIMS)
              </Link>
              <Link to="/form5" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-orange-600">
                Go to Form 5 (Safety Risk)
              </Link>
              <Link to="/form6" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-teal-600">
                Go to Form 6 (Photograph Authorization)
              </Link>
              <Link to="/form7" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-indigo-700">
                Go to Form 7 (Transportation & Funds Policy)
              </Link>
              <Link to="/form8" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-pink-700">
                Go to Form 8 (Code of Ethics Policy)
              </Link>
              <Link to="/form9" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-cyan-700">
                Go to Form 9 (Client Rights)
              </Link>
              <Link to="/form10" className="bg-white p-6 rounded shadow hover:shadow-lg transition text-xl font-semibold text-center text-amber-900">
                Go to Form 10 (Auth for Release of Info)
              </Link>
            </div>
          </div>
        } />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/form6" element={<Form6 />} />
        <Route path="/form7" element={<Form7 />} />
        <Route path="/form8" element={<Form8 />} />
        <Route path="/form9" element={<Form9 />} />
        <Route path="/form10" element={<Form10 />} />
      </Routes>
    </Router>
  );
}

export default App;
