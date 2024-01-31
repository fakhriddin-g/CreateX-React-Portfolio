import About from "./component/about-us/About";
import Benefits from "./component/benefits/Benefits";
import Courses from "./component/courses/Courses";
import Header from "./component/header/Header";
import Events from "./component/our-events/Events";
import Promo from "./component/promo/Promo";

function App() {
  return (
    <div className="app">
      <Header />
      <Promo />
      <About />
      <Courses />
      <Benefits />
      <Events />
    </div>
  );
}

export default App;
