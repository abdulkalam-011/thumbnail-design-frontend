import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkGrid from "./components/workDrawer/WorkGrid";
import { IoLogoWhatsapp } from "react-icons/io";
import About from "./components/About";
import ThumbnailCaseStudy from "./components/ui/CaseStudy";
import FAQ from "./components/FAQs";
import Hero from "./components/homeDrawer/Hero";
import MyProcess from "./components/homeDrawer/MyProcess";
import ContactForm from "./components/contact/Connect";

function App() {
  const [showMobileWarning, setShowMobileWarning] = useState(() =>
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );

  useEffect(() => {
    if (!showMobileWarning) return;
    const t = setTimeout(() => setShowMobileWarning(false), 3000); // hide after 3s
    return () => clearTimeout(t);
  }, [showMobileWarning]);

  return (
    <>
      {showMobileWarning && (
        <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white text-center p-4 z-999">
          <button
            aria-label="dismiss"
            onClick={() => setShowMobileWarning(false)}
            className="absolute right-3 top-2 text-white"
          >
            ✕
          </button>
          <p className="font-bold">
            For the best experience, please view this portfolio on a desktop or
            laptop device.
          </p>
        </div>
      )}
     
        <Header />
        <section id="hero" className="">
         <Hero />
        </section>
        <div id="about" className=" mt-10">
          <About/>
        </div>
        {/* <div id="compare-images" className="h-fit mt-10">
          <ThumbnailCaseStudy />
        </div> */}
        
        <section id="work" className="px-4 md:px-10 lg:px-20">
          <WorkGrid />
        </section>

        <MyProcess />
        <div id="contact" className="w-full h-fit font-montserrat">
         <ContactForm />
        </div>

        <section id="testimonials" className="px-4 md:px-10 lg:px-20"><FAQ /></section>
        <Footer />

        <div className="fixed bottom-10 lg:right-20 md:right-10 right-5 bg-green-500 text-white p-2 rounded-full z-99 md:p-5">
          <a
            aria-label="chat on whatsapp"
            name="whatsapp"
            href="https://wa.me/+918303778433?text=Hey%20I%20saw%20your%20portfolio%20and%20need%20a%20thumbnail"
            target="blank"
          >
            <IoLogoWhatsapp color="white" className="text-3xl md:text-6xl" />
          </a>
        </div>
      </>
  );
}

export default App;
