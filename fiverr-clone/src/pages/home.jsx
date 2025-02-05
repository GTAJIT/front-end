import "./home.css";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import Hero from "../components/hero/hero.jsx";
import Main from "../components/main/main_part.jsx";

function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="body-data flex flex-col">
          <Hero />
          <Main/>
        </div>
      </div>
    </>
  );
}
export default Home;
