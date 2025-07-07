import { useSelector } from "react-redux";
import SubscribeComponent from "../components/SubscribeComponent";
import TitleComponent from "../components/TitleComponent";
import { selectFirstThreePosts } from "../redux/slice/PostsSlice";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const firstThreePosts = useSelector(selectFirstThreePosts);
  const navigate = useNavigate();

  return (
    <div>
      <SubscribeComponent style="pt-[92px] md:pt-[152px] px-8" />
      <div className="px-8 xl:px-28 pt-[50px] md:pt-[60px]">
        <TitleComponent title="Recent blog post" aos="fade-right" />
        <div className="flex justify-between items-start max-lg:flex-wrap gap-8 mt-8">
          <div className="flex justify-between items-start gap-8 max-md:flex-wrap ">
            <CardComponent
              key={firstThreePosts[0].id}
              onClick={() => navigate(`/blog/${firstThreePosts[0].id}`)}
              aos="zoom-out-down"
              mainImg={firstThreePosts[0].mainImg}
              mainImgStyle="h-[240px]"
              date={firstThreePosts[0].date}
              title={firstThreePosts[0].title}
              desc_1={firstThreePosts[0].desc_1}
              categories={firstThreePosts[0].categories}
            />
            <CardComponent
              key={firstThreePosts[1].id}
              onClick={() => navigate(`/blog/${firstThreePosts[1].id}`)}
              aos="zoom-out-down"
              cardStyle="flex flex-col gap-6 max-md:w-full"
              mainImg={firstThreePosts[1].mainImg}
              mainImgStyle="h-[240px] max-md:w-full"
              date={firstThreePosts[1].date}
              title={firstThreePosts[1].title}
              desc_1={firstThreePosts[1].desc_1}
              categories={firstThreePosts[1].categories}
            />
          </div>
          <div className="max-md:w-full">
            <CardComponent
              key={firstThreePosts[2].id}
              onClick={() => navigate(`/blog/${firstThreePosts[2].id}`)}
              aos="zoom-out-down"
              mainImg={firstThreePosts[2].mainImg}
              mainImgStyle="h-[240px]"
              date={firstThreePosts[2].date}
              title={firstThreePosts[2].title}
              desc_1={firstThreePosts[2].desc_1}
              categories={firstThreePosts[2].categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
