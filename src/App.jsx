import { useState } from "react";

import Main from "./components/Sections/Main";
import Header from "./components/Header/Header";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const cartModalHandler = () => {
    setIsVisible((prevView) => !prevView);
  };

  return (
    <>
      <Header cartModalHandler={cartModalHandler} />
      <Main isVisible={isVisible} />
    </>
  );
}

export default App;
