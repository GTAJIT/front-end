import "./hero.css";
import Presents from "./elements/present";

function hero() {
  return (
    <div className="hero-container w-full flex justify-center rounded-2xl">
      <div className="hero h-[600px] w-full max-w-[1400px] rounded-2xl flex items-start pt-[150px] justify-center">
        <div className="hero-data">
          <div className="hero-data-text flex flex-col justify-center items-center">
            <div className="text-center">
              {/* Changed to h1 for semantic HTML and added responsive text sizing */}
              <h1 className="text-[40px] md:text-[60px] font-normal tracking-tight leading-[1.1] max-w-[800px] px-4">
                Scale your Professional
                <br />
                workforce with freelancers
              </h1>
            </div>
            {/* Made search bar responsive with max-width and padding */}
            <div className="search-bg rounded-md flex justify-between mt-5 w-full max-w-[700px] mx-4">
              <input
                className="search z-10 m-3 w-full border-none outline-none"
                placeholder="Search for any services..."
              ></input>
              <button
                className="search-btn p-3 m-1.5 rounded-md cursor-pointer"
                type="button"
              >
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 25 25"
                className="btn-icon"
              >
                <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
              </svg>
              </button>
            </div>
            <div className="w-full">
              <Presents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default hero;
