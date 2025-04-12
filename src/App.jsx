import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";

function App() {
   return (
      <main className="overflow-hidden">
         <Header />
         <Hero />
         <Features />
         <Pricing />
         <Faq />
         <Testimonials />
      </main>
   );
}
export default App;
