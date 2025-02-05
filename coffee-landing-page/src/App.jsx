import "./App.css";
import logo from "./assets/logo.png"; // Ensure the correct path
// import searchlogo from "./assets/search-icon.svg"

function App() {
  return (
    <div className="body">
      <section className="hero relative flex flex-col justify-between h-dvh">
        <header className="head flex justify-between sticky">
          <div className="logo cursor-pointer">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex gap-10">
            <ul className="nav flex gap-5 items-center">
              <li className="li-hover-color transition duration-300 ease-in-out">
                <a id="page-1" href="#">
                  about
                </a>
              </li>
              <li className="li-hover-color transition duration-300 ease-in-out">
                <a id="page-2" href="#">
                  download
                </a>
              </li>
              <li className="li-hover-color transition duration-300 ease-in-out">
                <a id="page-3" href="#">
                  pricing
                </a>
              </li>
              <li className="li-hover-color transition duration-300 ease-in-out">
                <a id="page-4" href="#">
                  features
                </a>
              </li>
              <li className="li-hover-color transition duration-300 ease-in-out">
                <a id="page-5" href="#">
                  contact
                </a>
              </li>
            </ul>
            <div className="btns flex gap-5">
              <button
                type="button"
                className="btn btn-color m-2.5 rounded-2xl transition duration-300 hover:scale-105 ease-in-out"
                id="sign-in"
              >
                <a href="#" className="text-small m-3">
                  sign in
                </a>
              </button>
              <button type="button" id="theme-switch">
                Toggle Theme
              </button>
            </div>
          </div>
        </header>
        <section className="hero flex justify-between">
          <section className="left-section flex flex-co justify-evenly items-center">
            <div className="flex flex-col gap-3">
              <h1
                className="text-small font-bold text-9xl w-dvh flex "
                id="welcome"
              >
                <p className="cursor-default">
                  wel
                  <a className="thr-color">
                    come<a className="sec-color">.</a>
                  </a>
                </p>
              </h1>
              <div className="search flex border justify-between rounded-2xl items-center mr-30">
                <input
                  type="text"
                  className="search-space items-center m-1.5"
                />
                <div className="flex justify-center mr-1.5">
                  <box-icon name="search-alt" color="#fff"></box-icon>
                </div>
              </div>
              <div className="btns flex gap-5 ml-3 mt-2">
                <button
                  type="button"
                  className="btn btn-color rounded-2xl transition duration-300 hover:scale-105 ease-in-out"
                  id="free-trial"
                >
                  <a href="#" className="text-small m-3">
                    Free Trial
                  </a>
                </button>
                <button
                  className="btn flex justify-center items-center rounded-2xl border bg-transparent transition duration-300 hover:scale-105 ease-in-out"
                  id="see-more"
                >
                  <a href="#" className="m-1 ml-2 mr-2">
                    see more
                  </a>
                </button>
              </div>
            </div>
          </section>

          <section className="right-section">
            <div className="right-data">
              <div className="hero-img">
                <img src="./src/assets/hero.png" alt="coffy-pic" />
              </div>
            </div>
          </section>
        </section>
        <div className="scroll-icon flex items-center justify-center sticky">
          <svg
            className="h-12 w-12 scale-0.75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="undifined"
          >
            <path d="M12.8589 2H11.1411C9.12721 2 8.04724 2.27848 7.06946 2.8014C6.09169 3.32432 5.32432 4.09169 4.8014 5.06946C4.27848 6.04724 4 7.12721 4 9.14111V14.8589C4 16.8728 4.27848 17.9528 4.8014 18.9305C5.32432 19.9083 6.09169 20.6757 7.06946 21.1986C8.04724 21.7215 9.12721 22 11.1411 22H12.8589C14.8728 22 15.9528 21.7215 16.9305 21.1986C17.9083 20.6757 18.6757 19.9083 19.1986 18.9305C19.7215 17.9528 20 16.8728 20 14.8589V9.14111C20 7.12721 19.7215 6.04724 19.1986 5.06946C18.6757 4.09169 17.9083 3.32432 16.9305 2.8014C15.9528 2.27848 14.8728 2 12.8589 2ZM11 11V6H13V11H11ZM7.75781 13.758L9.17203 12.3438L12.0005 15.1722L14.8289 12.3438L16.2431 13.758L12.0005 18.0006L7.75781 13.758Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default App;
