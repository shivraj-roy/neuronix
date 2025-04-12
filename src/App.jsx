import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";

function App() {
   return (
      <main className="overflow-hidden">
         <Header />
         <Hero />
         <Features />
         <Pricing />
         <Faq />
         <Testimonials />
         <Download />
      </main>
   );
}
export default App;
