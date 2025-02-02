import "./styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="body">
        <div className="header">
          <div className="logo">logo</div>
          <div className="right-header">
            <ul className="nav">
              <li className="list" id="list1"></li>
              <li className="list" id="list2"></li>
              <li className="list" id="list3"></li>
              <li className="list" id="list4"></li>
              <li className="list" id="list5">
                <Link to="/Login" className="capitalize">
                  sign in
                </Link>
              </li>
              <li className="list" id="list6">
                <Link to="/Login" className="capitalize">
                  join
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
