export default function DashboardPage() {
  const practices = [
    {
      title: "Data Analysis - Customer Analysis",
      description:
        "You will learn how to analyze customers, discover hidden trends, and explore future customer prospects.",
      price: "Rp. 200.000",
    },
    {
      title: "Machine Learning - Classification",
      description:
        "You will learn data preprocessing techniques such as feature engineering, encoding, and labeling. You'll also use packages to build classification models.",
      price: "Rp. 300.000",
    },
    {
      title: "Machine Learning - NLP",
      description:
        "You will learn how to process text data, analyze sentiment, and classify text such as spam detection and similar tasks.",
      price: "Rp. 100.000",
    },
    {
      title: "Machine Learning - Computer Vision",
      description:
        "You will learn how to process images and create classification models from the provided datasets.",
      price: "Rp. 100.000",
    },
    {
      title: "Data Scientist - Churn Prediction",
      description:
        "You will learn how to clean datasets and build models that predict the likelihood of customer churn.",
      price: "Rp. 100.000",
    },
    {
      title: "Machine Learning - Time Series",
      description:
        "You will learn how to preprocess time series data and build both classical and neural network-based models for time series forecasting.",
      price: "Rp. 100.000",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4">
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          Learn by Doing, Not Just Watching
        </h2>
        <p className="text-gray-700 text-lg">
          Boost your skills in data science and machine learning through real-world case studies designed to get you job-ready and confident in solving practical problems.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {practices.map((practice, index) => (
          <div
            key={index}
            className="px-10 py-5 mb-6 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div>
              <a href="#">
                <h5 className="mb-5 text-xl font-semibold tracking-tight text-gray-900">
                  {practice.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 line-clamp-3">
                {practice.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-12">
              <span className="text-3xl font-bold text-gray-900">
                {practice.price}
              </span>
              <a
                href="#"
                className="text-white bg-[#15ae70] hover:bg-[#129761] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
