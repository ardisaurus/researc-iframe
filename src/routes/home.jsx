import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

const Home = () => {
  const context = useContext(MyContext);
  const { changeStr, str } = context;

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the main content of the app.</p>
      <ul>
        <li>
          <Link to="/embedded-youtube">View Embedded Youtube</Link>
        </li>
        <li>
          <div>
            <input
              value={str}
              onChange={(ev) => changeStr(ev.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <Link to="/embedded-custom-url">View Embedded Custom url</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
