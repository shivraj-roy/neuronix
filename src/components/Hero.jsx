import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../ui/Button";

const Hero = () => {
   return (
      <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
         <Element name="hero">
            <div className="container">
               <div className="relative z-2 max-w-512 max-lg:max-w-388">
                  <div className="caption small-2 uppercase text-p3">
                     Video Editing
                  </div>
                  <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                     Remarkably Easy
                  </h1>
                  <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                     We have created a Neuronix AI video editor that is easy to
                     use and easily understandable. You can edit videos in
                     minutes, not hours.
                  </p>
                  <LinkScroll to="features" offset={-100} smooth spy>
                     <Button icon="/images/zap.svg">Try It Now</Button>
                  </LinkScroll>
               </div>
               <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
                  <img
                     src="/images/hero.png"
                     alt="hero"
                     className="object-contain w-full h-auto"
                  />
               </div>
            </div>
         </Element>
      </section>
   );
};
export default Hero;
