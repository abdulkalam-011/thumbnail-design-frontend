import "./App.css";
import Hero from "./components/Hero";
import ImageComprison from "./components/ImageComprison";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkGrid from "./components/workDrawer/WorkGrid";

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
        <section id="contact" className="bg-blue-400"></section>
        <section id="testimonials" className="bg-yellow-400"></section>
        <Footer />
      </div>
    </>
  );
}

export default App;
