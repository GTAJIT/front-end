import "./home.css";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import Hero from "../components/hero/hero.jsx";

function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
export default Home;
