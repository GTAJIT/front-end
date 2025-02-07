function Pro() {
    return (
      <div className="p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="34" fill="none">
              <g fill="#222325">
                <path d="M81.646 13.112h-3.151c-2.029 0-3.115 1.547-3.115 4.124v9.318h-5.977V13.112h-2.535c-2.029 0-3.115 1.547-3.115 4.124v9.318h-5.977V8.14h5.977v2.8c.977-2.174 2.317-2.8 4.31-2.8h7.317v2.8c.977-2.174 2.318-2.8 4.31-2.8h1.956z" />
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">
            The <span className="">premium</span> freelance solution for businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Dedicated hiring experts",
                description:
                  "Count on an account manager to find you the right talent and see to your project’s every need."
              },
              {
                title: "Satisfaction guarantee",
                description:
                  "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries."
              },
              {
                title: "Quality talent pool",
                description:
                  "Access a vetted network of top freelancers with proven expertise."
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#003912"
                    className="mr-2"
                  >
                    <path d="M8.203.432a1.89 1.89 0 0 0-2.406 0l-1.113.912a1.9 1.9 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.98 1.98 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.91 1.91 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.91 1.91 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a2 2 0 0 1-.194-.863l.006-1.456a1.95 1.95 0 0 0-1.5-1.915L10.1 1.728a1.9 1.9 0 0 1-.784-.384z" />
                  </svg>
                  <h6 className="text-lg font-semibold">{item.title}</h6>
                </div>
                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Pro;  