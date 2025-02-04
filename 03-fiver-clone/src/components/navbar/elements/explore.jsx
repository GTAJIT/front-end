// style-files are in navbar.css
// import { Link } from "react-router-dom";

function explore() {
  return (
    <div className="dropdown">
      <div className="bgHover ">
        <button className="dropbtn capitalize">explore </button>
      </div>
      <div className="dropdown-content w-[375px]">
        <div className="dropdown-content-a">
          <p className="">Answers</p>
          <a href="#" className="about">
            Powered by AI, answered by fiverr freelancers
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Community</p>
          <a href="#" className="about">
            Connect with Fiverr&apos;s team and community
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Guides</p>
          <a href="#" className="about">
            In-depth guides convering business topics
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Podcast</p>
          <a href="#" className="about">
            Inside tips from top business minds
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Learn</p>
          <a href="#" className="about">
            Professional online courses, led by experts
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Blog</p>
          <a href="#" className="about">
            News, information and comuunity stories
          </a>
        </div>
        <div className="dropdown-content-a">
          <p className="">Logo Maker</p>
          <a href="#" className="about">
            Create your logo instantly
          </a>
        </div>
      </div>
    </div>
  );
}

export default explore;