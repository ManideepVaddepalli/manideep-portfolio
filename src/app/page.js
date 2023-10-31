import Header from "@/components/header/Header";
import HomeComponent from "@/components/home/HomeComponent";
import AboutComponent from "@/components/about/AboutComponent";
import ProjectsComponent from "@/components/projectsComponent/ProjectsComponent";
import Contactme from "@/components/contactme/Contactme";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <div className="total-portfolio-container-main">
        <HomeComponent />
        <AboutComponent />
        <ProjectsComponent />
        <Contactme />
      </div>
      <Footer />
    </>
  );
}
