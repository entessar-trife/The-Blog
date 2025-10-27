import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import TitleComponent from "../components/TitleComponent";
import { useNavigate } from "react-router-dom";
import { selectAllPostsWithoutOpenPost } from "../redux/slice/PostsSlice";
import PostsDetailsSection from "../sections/PostsDetailsSection";
import SubscribeComponent from "../components/SubscribeComponent";

const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = parseInt(id!);
  const allPostsWithoutOpenPost = useSelector(
    selectAllPostsWithoutOpenPost(postId)
  );
  return (
    <div
      className="pt-[92px] md:pt-[103px] xl:pt-[120px] px-8 xl:px-36
    flex max-lg:flex-wrap-reverse justify-between gap-y-[70px] md:gap-4 lg:gap-8
    "
    >
      <SubscribeComponent style="lg:hidden pt-8 pb-[42px]" />
      <div
        className="w-full min-[834px]:w-[342px]"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <TitleComponent title="Recent blog posts" />

        <div className="flex flex-col gap-8 pt-8">
          {allPostsWithoutOpenPost.map((post) => (
            <CardComponent
              key={post.id}
              title={post.title}
              onClick={() => navigate(`/The-Blog/blog/${post.id}`)}
              mainImg={post.mainImg}
              date={post.date}
              desc_1={post.desc_1}
              categories={post.categories}
            />
          ))}
        </div>
      </div>

      <div className="w-full min-[834px]:w-[412px] lg:w-[778px]">
        <PostsDetailsSection />
        <SubscribeComponent style="hidden lg:block pt-8 text-center" />
      </div>
    </div>
  );
};

export default Blog;
