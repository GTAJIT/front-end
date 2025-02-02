import "./App.css";
import logo from "./assets/logo.png"; // Ensure the correct path
// import searchlogo from "./assets/search-icon.svg"

function App() {
  return (
    <>
      <header className="head flex justify-between ">
        <div className="logo cursor-pointer">
          <a href="#"><img src={logo} alt="logo" /></a>
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
            <button type="button" className="btn btn-color m-2.5 rounded-2xl transition duration-300 hover:scale-105 ease-in-out" id="sign-in">
            <a href="#" className="text-small m-3">sign in</a>
            </button>
            <button type="button" id="theme-switch">
              Toggle Theme
            </button>
          </div>
        </div>
      </header>

      <section className="hero relative flex justify-between h-dvh">
        <section className="left-section flex flex-col justify-evenly">
          <div className="flex flex-col gap-3">
            <h1 className="text-small font-bold text-9xl w-dvh flex " id="welcome">
              <p className="cursor-default" >wel<a className="thr-color">come<a className="sec-color">.</a></a></p>
            </h1>
            <div className="search flex border justify-between rounded-2xl items-center mr-30">
              <input
                type="text"
                className="search-space items-center m-1.5"
                />
              <div className="flex justify-center mr-1.5">
              <box-icon name='search-alt' color='#fff'></box-icon>
              </div>
            </div>
            <div className="btns flex gap-5 ml-3 mt-2">
              <button type="button" className="btn btn-color rounded-2xl transition duration-300 hover:scale-105 ease-in-out" id="free-trial">
                <a href="#" className="text-small m-3">Free Trial</a>
              </button>
              <button className="btn flex justify-center items-center rounded-2xl border bg-transparent transition duration-300 hover:scale-105 ease-in-out" id="see-more">
              <a href="#" className="m-1 ml-2 mr-2">see more</a>
              </button>
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="right-data">
            <img src="" alt="right-logo" className="right-logo" />
            <p className="text-small" id="mid-text">
              Landing Page
            </p>
            <p className="text-small" id="small-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              itaque maxime corporis, natus praesentium possimus. Sunt
              exercitationem, quo sint illo enim veniam? Sequi nobis atque
              beatae, unde quo temporibus.
            </p>
          </div>
        </section>
      </section>
      <div><i className="ri-scroll-to-bottom-fill"></i><i className="ri-scroll-to-bottom-fill"></i></div>
    </>
  );
}

export default App;
