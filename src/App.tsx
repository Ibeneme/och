import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import HomePage from "./pages/home/page";
import NotFound from "./components/navbar/NotFound";
import { CustomCursor } from "./CustomCursor";
import AboutPage from "./pages/about/About";
import Leadership from "./pages/leader/Leadership";
import CareersPage from "./components/careers/page";
import InsurancePaymentOptionsPage from "./components/insurance/InsurancePaymentOptionsPage";
import WhoWeServe from "./pages/who_we_server/page";
import Resources from "./pages/resources/Page";
import Contact from "./pages/contact/Contact";
import EmployeeResourcesPage from "./components/resources/EmployeeResourcesPage";
import CareerCNA from "./pages/career/career_cna";
import Referral from "./pages/referral/referral";
import SkilledNursingPage from "./pages/services/skilled-nursing/page";
import PhysicalTherapyPage from "./pages/services/physical_therapy/page";
import OccupationalTherapy from "./pages/services/occupational-therapy/page";
import SpeechTherapyPage from "./pages/services/speech-therapy/page";
import MedicalSocialServicesPage from "./pages/services/medical-social-services/page";
import HomeHealthAide from "./pages/services/home-health-aide/page";
import WoundCarePage from "./pages/services/wound-care/page";
import ChronicDiseaseManagementPage from "./pages/services/chronic-disease-management/ChronicDiseaseManagementPage";
import MedicationManagementPage from "./pages/services/medication-management/MedicationManagementPage";
import FallPreventionPage from "./pages/services/fall-prevention/FallPreventionPage";
import PostSurgicalCarePage from "./pages/services/post-surgical-care/PostSurgicalCarePage";

// New supportive care service pages
import CompanionCarePage from "./pages/services/companion-care/CompanionCarePage";
import RespiteCarePage from "./pages/services/respite-care/respitecare";
import DailyLifestyleSupportPage from "./pages/services/daily-lifestyle-support/DailyLifestyleSupportPage";
import VeteranCarePage from "./pages/services/veteran-care/veterancare";
import AdultsWithDisabilitiesPage from "./pages/services/adults-with-disabilities/AWD";
import PediatricServicesPage from "./pages/services/pediatric-services/pediatric-services";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ScrollToTopOnRouteChange } from "./components/ScrollToTop/ScrollToTopOnRouteChange";

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#3A4657]">
        <ScrollToTopOnRouteChange />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-us/leadership" element={<Leadership />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/referrals" element={<Referral />} />
            <Route
              path="/insurance-payment-options"
              element={<InsurancePaymentOptionsPage />}
            />
            <Route
              path="/employee-resources"
              element={<EmployeeResourcesPage />}
            />
            <Route
              path="/careers/cna-home-health-aide-application"
              element={<CareerCNA />}
            />

            <Route path="/who-we-serve/seniors" element={<WhoWeServe />} />
            <Route path="/resources" element={<Resources />} />

            {/* Existing clinical services */}
            <Route
              path="/services/skilled-nursing"
              element={<SkilledNursingPage />}
            />
            <Route
              path="/services/physical-therapy"
              element={<PhysicalTherapyPage />}
            />
            <Route
              path="/services/occupational-therapy"
              element={<OccupationalTherapy />}
            />
            <Route
              path="/services/speech-therapy"
              element={<SpeechTherapyPage />}
            />
            <Route
              path="/services/medical-social-services"
              element={<MedicalSocialServicesPage />}
            />
            <Route
              path="/services/home-health-aide"
              element={<HomeHealthAide />}
            />
            <Route
              path="/services/chronic-disease-management"
              element={<ChronicDiseaseManagementPage />}
            />
            <Route
              path="/services/medication-management"
              element={<MedicationManagementPage />}
            />
            <Route
              path="/services/post-surgical-care"
              element={<PostSurgicalCarePage />}
            />
            <Route
              path="/services/fall-prevention"
              element={<FallPreventionPage />}
            />
            <Route path="/services/wound-care" element={<WoundCarePage />} />

            {/* New supportive care services */}
            <Route
              path="/services/companion-care"
              element={<CompanionCarePage />}
            />
            <Route
              path="/services/respite-care"
              element={<RespiteCarePage />}
            />
            <Route
              path="/services/daily-lifestyle-support"
              element={<DailyLifestyleSupportPage />}
            />
            <Route
              path="/services/veteran-care"
              element={<VeteranCarePage />}
            />
            <Route
              path="/services/adults-with-disabilities"
              element={<AdultsWithDisabilitiesPage />}
            />
            <Route
              path="/services/pediatric-services"
              element={<PediatricServicesPage />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
