import { useState } from "react";
import Hero from "./components/partials/Hero";
import Nav from "./components/partials/Nav";
import FoodMenu from "./components/FoodMenu";
import Contact from "./components/Contact";

function App() {
  const [isReservationActive, setIsReservationActive] = useState(false);

  return (
    <div>
      <Nav />
      {!isReservationActive && <Hero />}
      <FoodMenu onReservationStateChange={setIsReservationActive} />
      {!isReservationActive && <Contact />}
    </div>
  );
}

export default App;
