import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const SocialIcons = lazy(() => import("./components/SocialIcons"));
const NavBar = lazy(() => import("./components/NavBar"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <HelmetProvider>
        <section id="experience">
          <Experience />
        </section>
      </HelmetProvider>

      <section id="contact">
        <Contact />
      </section>
      <SocialIcons />
    </Suspense>
  );
}
export default App;
