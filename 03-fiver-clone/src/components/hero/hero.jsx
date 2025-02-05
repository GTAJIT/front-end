import "./hero.css";
import Presents from "./elements/present";
import Search from "./elements/search";

function hero() {
  return (
    <div className="hero-container w-full flex justify-center rounded-2xl">
      <div className="hero h-[600px] w-full max-w-[1400px] rounded-2xl flex items-stat pt-[150px] justify-center">
        <div className="hero-data">
          <div className="hero-data-text flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-[40px] md:text-[60px] font-normal tracking-tight leading-[1.1] max-w-[800px] px-4">
                Scale your Professional
                <br />
                workforce with freelancers
              </h1>
            </div>
            <Search />
            <Presents />
          </div>
        </div>
      </div>
    </div>
  );
}
export default hero;
