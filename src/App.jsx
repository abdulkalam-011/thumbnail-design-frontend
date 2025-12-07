import "./App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/Hero";
import ImageComprison from "./components/ImageComprison";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkGrid from "./components/workDrawer/WorkGrid";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <>
      <div className="px-4 sm:px-10 md:px-15 lg:px-20 overflow-x-hidden">
        <Header />
        <section id="hero" className=""><Hero /></section>
        <div id="hero" className="h-fit mt-10"><ImageComprison/></div>
        <section id="work" className="">
          <WorkGrid />
        </section>
        <div id="contact" className="w-full h-fit"><Contact /></div>
        <section id="testimonials" className="bg-red-300"></section>
        <Footer />

        <div className="fixed bottom-10 lg:right-20 md:right-10 right-5 bg-green-500 text-white p-2 rounded-full z-99 md:p-5">
          <a aria-label="chat on whatsapp" name="whatsapp" href="https://wa.me/+918303778433?text=Hey%20I%20saw%20your%20portfolio%20and%20need%20a%20thumbnail" target="blank"><IoLogoWhatsapp color="white" className="text-3xl md:text-6xl"/></a>
        </div>
      </div>
    </>
  );
}

export default App;
