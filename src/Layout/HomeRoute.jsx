import Footer from "../components/Footer";
import Home from "../components/pages/Home";
import Navbar from "../components/Navbar";
import AboutPage from "../components/pages/AboutPages";
import ProjectPage from "../components/pages/Project";
import ContactPage from "../components/pages/ContactPage";

export default function HomeRoute() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutPage></AboutPage>
      <ProjectPage/>
      <ContactPage></ContactPage>
      <Footer />
    </div>
  );
}
