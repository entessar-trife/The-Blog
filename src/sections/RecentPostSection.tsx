import { useSelector } from "react-redux";
import CardComponent from "../components/CardComponent";
import TitleComponent from "../components/TitleComponent";
import { useNavigate } from "react-router-dom";
import { selectLatestFourPosts } from "../redux/slice/PostsSlice";

const RecentPostSection = () => {
  const latestFourPosts = useSelector(selectLatestFourPosts);
  const navigate = useNavigate();

  return (
    <section className="px-8 xl:px-28 pt-[60px]">
      <TitleComponent title="Recent blog posts" aos="fade-right" />
      <div className="flex max-lg:flex-wrap gap-8 mt-8">
        <CardComponent
          key={latestFourPosts[0].id}
          onClick={() => navigate(`/task_6_adv/blog/${latestFourPosts[0].id}`)}
          cardStyle="flex flex-col flex-wrap gap-8 w-full xl:w-[48.7%]"
          aos="fade-right"
          mainImg={latestFourPosts[0].mainImg}
          date={latestFourPosts[0].date}
          title={latestFourPosts[0].title}
          desc_1={latestFourPosts[0].desc_1}
          categories={latestFourPosts[0].categories}
        />
        <div className="flex flex-col flex-wrap gap-8 w-full xl:w-[48.7%]">
          <CardComponent
            key={latestFourPosts[1].id}
            onClick={() => navigate(`/task_6_adv/blog/${latestFourPosts[1].id}`)}
            aos="fade-left"
            cardStyle="flex gap-6 flex-wrap md:flex-nowrap"
            mainImg={latestFourPosts[1].mainImg}
            mainImgStyle="max-md:w-full"
            date={latestFourPosts[1].date}
            title={latestFourPosts[1].title}
            titleSize={latestFourPosts[1].titleSize}
            desc_1={latestFourPosts[1].desc_1}
            categories={latestFourPosts[1].categories}
          />
          <CardComponent
            key={latestFourPosts[2].id}
            onClick={() => navigate(`/task_6_adv/blog/${latestFourPosts[2].id}`)}
            aos="fade-left"
            cardStyle="flex gap-6 flex-wrap md:flex-nowrap"
            mainImg={latestFourPosts[2].mainImg}
            mainImgStyle="max-md:w-full"
            date={latestFourPosts[2].date}
            title={latestFourPosts[2].title}
            titleSize={latestFourPosts[2].titleSize}
            desc_1={latestFourPosts[2].desc_1}
            categories={latestFourPosts[2].categories}
          />
        </div>
      </div>
      <CardComponent
        key={latestFourPosts[3].id}
        onClick={() => navigate(`/task_6_adv/blog/${latestFourPosts[3].id}`)}
        cardStyle="flex flex-wrap lg:flex-nowrap gap-6 mt-15"
        aos="fade-right"
        mainImg={latestFourPosts[3].mainImg}
        mainImgStyle="w-full"
        date={latestFourPosts[3].date}
        title={latestFourPosts[3].title}
        titleSize={latestFourPosts[3].titleSize}
        desc_1={latestFourPosts[3].desc_1}
        categories={latestFourPosts[3].categories}
      />
    </section>
  );
};

export default RecentPostSection;
