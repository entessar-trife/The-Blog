import { useSelector } from "react-redux";
import ExampleComponent from "../components/ExampleComponent";
import { useParams } from "react-router-dom";
import { selectOpenPost } from "../redux/slice/PostsSlice";

const PostsDetailsSection = () => {
  const { id } = useParams();
  const postId = parseInt(id!);
  const openedPost = useSelector(selectOpenPost(postId));

  return (
    <section data-aos="fade-left" data-aos-duration="3000">
      {openedPost && (
        <div>
          <span className="text-sm font-semibold leading-5 text-purple-01">
            {openedPost.date}
          </span>
          <h2 className="text-4xl font-bold leading-8 py-8 text-primary dark:text-white">
            {openedPost.title}
          </h2>
          <img
            src={openedPost.mainImg}
            className="w-full mb-8"
            alt="cover image"
          />
          <p className="text-base font-normal leading-6 text-gray-01 dark:text-gray-03 mb-6">
            {openedPost.desc_1}
          </p>
          <p className="text-base font-normal leading-6 text-gray-01 dark:text-gray-03 mb-6">
            {openedPost.desc_2}
          </p>

          {openedPost.content?.map((content) => (
            <div data-aos="fade-left" data-aos-duration="2000">
              <p
                className="text-base font-bold leading-6 text-center
               text-gray-01 dark:text-gray-03 
              w-full min-[834px]:w-[412px] lg:w-[567px] mx-auto mb-3"
              >
                {content.definition_1}
              </p>
              <img src={content.img_1} />
              <p
                className="text-base font-normal leading-6 text-center
               text-gray-01 dark:text-gray-03 
              w-full min-[834px]:w-[412px] lg:w-[567px] mx-auto my-3"
              >
                {content.definition_1}
              </p>
              {content.content_1.map((e) => (
                <p
                  className="text-base font-normal leading-6
                text-gray-01 dark:text-gray-03
                 mb-3"
                >
                  {e}
                </p>
              ))}
              <h6
                className="text-lg font-bold leading-6
               text-gray-01 dark:text-gray-03
                mb-3"
              >
                {content.contentTitle}
              </h6>
              {content.content_2.map((e) => (
                <p
                  className="text-base font-normal leading-6
                text-gray-01 dark:text-gray-03
                 mb-3"
                >
                  {e}
                </p>
              ))}
              <img src={content.img_2} />
              <p
                className="text-base font-normal leading-6 text-center
               text-gray-01 dark:text-gray-03
               w-full min-[834px]:w-[412px] lg:w-[567px] mx-auto mt-3"
              >
                {content.definition_2}
              </p>
            </div>
          ))}

          <div>
            <h6
              className="text-lg font-bold leading-6
          text-gray-01 dark:text-gray-03
             my-3"
            >
              Examples of Grids in Use
            </h6>
            {openedPost.examples?.map((example, index) => (
              <ExampleComponent
                key={index}
                exampleTitle={example.exampleTitle}
                exampleDesc_1={example.exampleDesc_1}
                exampleLink={example.exampleLink}
                exampleDesc_2={example.exampleDesc_2}
                exampleImg={example.exampleImg}
                exampleImgDesc={example.exampleImgDesc}
              />
            ))}
          </div>

          <div>
            <h6
              className="text-base font-bold leading-6
              text-gray-01 dark:text-gray-03
              my-3"
            >
              Benefits of the Grid
            </h6>
            {openedPost.benefits?.map((benefit, index) => (
              <div key={index}>
                <p className="text-base font-normal leading-6 text-gray-01 dark:text-gray-03">
                  {" "}
                  Using a grid benefits both end users and the designers alike:{" "}
                </p>
                {benefit.benefits.map((e, index) => (
                  <li
                    key={index}
                    className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03"
                  >
                    {e}
                  </li>
                ))}
                <img src={benefit.benefitsImg} className="my-3" />
                <p className="text-base font-normal leading-6 w-full min-[834px]:w-[412px] lg:w-[567px] text-gray-01 dark:text-gray-03 text-center">
                  {benefit.definition}
                </p>

                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03 my-3">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h6
              className="text-lg font-bold leading-6
          text-gray-01 dark:text-gray-03
             my-3"
            >
              Choosing and Setting Up Your Grid
            </h6>
            {openedPost.choosingAndSettingUp?.map((e, index) => (
              <div key={index}>
                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03">
                  {e.desc}{" "}
                </p>
                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03 my-3">
                  <span className="font-bold"> {e.title_1} </span>
                  {e.desc_1}
                </p>
                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03">
                  <span className="font-bold"> {e.title_2} </span>
                  {e.desc_2}
                </p>
                <img src={e.settingUpImg_1} className="my-3" />
                <p className="text-base font-normal leading-6 text-center w-full min-[834px]:w-[412px] lg:w-[567px] text-gray-01 dark:text-gray-03">
                  {e.definition_1}
                </p>
                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03 my-3">
                  <span className="font-bold"> {e.title_3} </span>
                  {e.desc_3}
                </p>
                <img src={e.settingUpImg_2} />
                <p className="text-base font-normal leading-6 text-center my-3 w-full min-[834px]:w-[412px] lg:w-[567px] text-gray-01 dark:text-gray-03">
                  {e.definition_2}
                </p>
                <p className="text-base font-normal leading-6  text-gray-01 dark:text-gray-03">
                  <span className="font-bold"> {e.title_4} </span>
                  {e.desc_4}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h6
              className="text-lg font-bold leading-6
          text-gray-01 dark:text-gray-03
             my-3"
            >
              {" "}
              Conclusion
            </h6>
            <p className="text-base font-normal leading-6 my-3  text-gray-01 dark:text-gray-03 space-x-4">
              {openedPost.Conclusion}
            </p>
          </div>

          {openedPost?.categories?.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium leading-5 py-0.5 px-2.5 mr-2 rounded-2xl ${category.categoryStyle}`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default PostsDetailsSection;
