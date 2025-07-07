import type React from "react";
import type { examples } from "../data/PostsData";
import { Link } from "react-router-dom";

const ExampleComponent: React.FC<examples> = ({
  exampleTitle,
  exampleDesc_1,
  exampleLink,
  exampleDesc_2,
  exampleImg,
  exampleImgDesc,
}) => {
  return (
    <div>
      <h6
        className="text-base font-bold leading-6
       text-gray-01 dark:text-gray-03"
      >
        {exampleTitle}
      </h6>
      <p
        className="text-base font-norma leading-6
      text-gray-01 dark:text-gray-03
       py-3"
      >
        {exampleDesc_1}
        <Link to="" className="underline">
          {exampleLink}
        </Link>
        {exampleDesc_2}
      </p>
      <img src={exampleImg} alt="blog details" />
      <p
        className="text-base font-norma leading-6 text-center
      text-gray-01 dark:text-gray-03
       py-3 mx-auto w-full min-[834px]:w-[412px] lg:w-[567px]"
      >
        {exampleImgDesc}
      </p>
    </div>
  );
};

export default ExampleComponent;
