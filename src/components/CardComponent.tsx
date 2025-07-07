import { MdOutlineArrowOutward } from "react-icons/md";
import TitleComponent from "./TitleComponent";
import type React from "react";
import type { PostsData } from "../data/PostsData";

const CardComponent: React.FC<PostsData> = ({
  onClick,
  cardStyle,
  mainImg,
  date,
  title,
  titleSize,
  desc_1,
  categories,
  mainImgStyle,
  aos,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        cardStyle ?? "flex flex-col gap-6"
      } p-2 transition-all duration-500 ease-in-out hover:shadow-lg hover:dark:shadow-[0_0_16px_-5px_gray] hover:p-2 rounded-xl cursor-pointer`}
      data-aos={aos}
      data-aos-duration="2000"
    >
      <img src={mainImg} className={`${mainImgStyle}`} alt="cover image" />
      <div>
        <div>
          <span className="text-sm font-semibold leading-5 text-purple-01">
            {date}
          </span>
          <div className="flex items-center justify-between my-3">
            <TitleComponent title={title} titleSize={titleSize} />
            <MdOutlineArrowOutward className="w-[24px] h-7 text-primary dark:text-white" />
          </div>
          <p className="text-base font-normal leading-6 text-gray-01 dark:text-gray-03 mb-6">
            {desc_1}
          </p>
        </div>
        <div className="flex gap-2">
          {categories?.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium leading-5 py-0.5 px-2.5 rounded-2xl ${category.categoryStyle}`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
