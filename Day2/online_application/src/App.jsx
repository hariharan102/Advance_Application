import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AdminPage from './Pages/Admin/AdminPage';
import Register from './Pages/Register/Register';
import Adminlogin from './Pages/AdminLogin/Adminlogin';
import Job from './Pages/Job/job';
import CompanionshipServices from './Pages/cam/Cam';
import MedicationManagementServices from './Pages/Medical/Medical';
import PersonalCareServices from './Pages/Personalcare/PersonalCare';
import Approve from './Pages/Approve/Approve';
import FeedbackPage from './Pages/feedback/feedback';
import FAQPage from './Pages/faq/faq';
import TermsAndConditions from './Pages/terms/terms';
import PrivacyPolicy from './Pages/policy/policy';
import Confirm from './Pages/payment/conform';
import PaymentForm from './Pages/payment/PaymentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/job" element={<Job />} />
        <Route path="/com" element={<CompanionshipServices />} />
        <Route path="/medical" element={<MedicationManagementServices/>} />
        <Route path="/personal" element={<PersonalCareServices/>} />
        <Route path="/Approve" element={<Approve/>} />
        <Route path="/newfeed" element={<FeedbackPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/Payment" element={<PaymentForm/>} />

      </Routes>
    </Router>
  );
}

export default App;
