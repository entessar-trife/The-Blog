import { Link } from "react-router-dom";

interface SubscribeComponentProps {
  style?: string;
}

const SubscribeComponent: React.FC<SubscribeComponentProps> = ({ style }) => {
  return (
    <div
      className={`flex flex-col items-center w-full ${style}`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h6 className="text-purple-03 font-semibold leading-6 text-base">
        Newlatters
      </h6>
      <h5 className="text-primary dark:text-white font-semibold text-5xl leading-[60px] mt-3 mb-6">
        Stories and interviews
      </h5>
      <p className="text-gray-01 dark:text-gray-03 font-normal text-xl leading-[30px] max-[560px]:text-start text-center mb-10 w-full md:w-[90%] mx-auto">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="w-full md:w-[494px] mx-auto">
        <div className="flex max-lg:flex-wrap justify-between gap-4 mb-2">
          <input
            type="emil"
            placeholder="Enter your email"
            className="w-full md:w-[360px] border-[1px] border-gray-04 rounded-[8px] bg-white placeholder-gray-01 text-base font-normal leading-6 py-3 px-4 cursor-pointer duration-500 hover:outline-1 outline-purple-01"
          />
          <button className="text-white text-base font-medium leading-6 bg-purple-03 rounded-[8px] py-3 px-5 cursor-pointer transform duration-300 hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>

        <span className="text-sm font-normal leading-5 text-gray-01 dark:text-gray-03">
          We care about your data in our
          <Link to="/" className="underline duration-300 hover:text-purple-01">
            {" "}
            privacy policy{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SubscribeComponent;
