const scrollContainer = document.querySelector(".pop-section");
const backBtn = document.querySelector(".backward-btn");
const nextBtn = document.querySelector(".forward-btn");

backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});


function Popular() {
  return (
    <div className="pop">
      <div className="pop-text">Popular services</div>
      <div className="pop-top">
        <div className="backward-btn pop-btn-color">
          <svg
            className="arrows"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div className="pop-section">
          <div className="pop-section-data" id="pop-img-1">
            <p className="pop-text capitalize">website development</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-2">
            <p className="pop-text capitalize">logo design</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-3">
            <p className="pop-text capitalize">SEO</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-4">
            <p className="pop-text capitalize">
              architecture & interior design
            </p>
            <img
              className="pop-img "
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-5">
            <p className="pop-text capitalize">social media marketing</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-6">
            <p className="pop-text capitalize">voice over</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
              alt="pop-404"
            />
          </div>
        </div>
        <div className="pop-section">
          <div className="pop-section-data" id="pop-img-7">
            <p className="pop-text capitalize">UGC videos</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-8">
            <p className="pop-text capitalize">software development</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-9">
            <p className="pop-text capitalize">data science & ML</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-10">
            <p className="pop-text capitalize">product photography</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-11">
            <p className="pop-text capitalize">E-Commerce marketing</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png"
              alt="pop-404"
            />
          </div>
          <div className="pop-section-data" id="pop-img-12">
            <p className="pop-text capitalize">video editing</p>
            <img
              className="pop-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png"
              alt="pop-404"
            />
          </div>
        </div>
        <div className="forward-btn pop-btn-color">
          <svg
            className="arrows"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Popular;
