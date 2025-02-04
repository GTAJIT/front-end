// css = navbar.css
// import { Link } from "react-router-dom";
function fiverrPro() {
  return (
    <div className="dropdown">
      <div className="bgHover ">
        <button className="dropbtn capitalize">fiverr pro </button>
      </div>
      <div className="dropdown-content w-[450px]">
        <div className="dropdown-content-part flex border m-5 rounded-md dropdown-content-a">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/hire-freelancer.e3fcf5a.svg"
            className="m-3 "
          />
          <div className="dropdown-text">
            <p className="">I&apos;m looking to hire</p>
            <a className="about">
              My team needs vetted freelance talent and a premium business
              solution.
            </a>
          </div>
        </div>
        <div className="dropdown-content-part flex border m-5 rounded-md dropdown-content-a">
          <img
            className="m-3"
            src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/iam-freelancer.6e3c275.svg"
            alt=" "
          />
          <div className="dropdown-text">
            <p className="">I want to offer Pro services</p>
            <a className="about">
              I&apos;d like to work on business projects as a Pro freelancer or
              arency.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default fiverrPro;