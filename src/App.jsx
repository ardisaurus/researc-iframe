import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import IframeContainer from "./components/IframeContainer";
import MyContext from "./context/MyContext";
function App() {
  const context = useContext(MyContext);
  const { str } = context;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/embedded-youtube"
          element={
            <IframeContainer
              url={"https://www.youtube.com/embed/LDU_Txk06tM"}
              title={"Embedded Youtube"}
            />
          }
        />
        <Route
          path="/embedded-custom-url"
          element={<IframeContainer url={str} title={`Embedded ${str}`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
