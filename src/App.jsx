import About from "./component/about-us/About";
import Benefits from "./component/benefits/Benefits";
import Blog from "./component/blog/Blog";
import Courses from "./component/courses/Courses";
import Header from "./component/header/Header";
import Certificate from "./component/our-certificate/Certificate";
import Events from "./component/our-events/Events";
import Promo from "./component/promo/Promo";
import Team from "./component/team/Team";
import Testimonials from "./component/testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <Header />
      <Promo />
      <About />
      <Courses />
      <Benefits />
      <Events />
      <Certificate />
      <Team />
      <Testimonials />
      <Blog />
    </div>
  );
}

export default App;
