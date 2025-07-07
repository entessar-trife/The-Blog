import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TitleComponent from "../components/TitleComponent";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import CardComponent from "../components/CardComponent";
import {
  selectCurrentPage,
  selectPaginatedPosts,
  selectPostsPerPage,
  setCurrentPage,
} from "../redux/slice/PostsSlice";
import { useNavigate } from "react-router-dom";

const AllPostsSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paginatedPosts = useSelector(selectPaginatedPosts);
  const currentPage = useSelector(selectCurrentPage);
  const postsPerPage = useSelector(selectPostsPerPage) || 1;
  const totalPosts = useSelector(
    (state: RootState) => state.posts.posts.length
  );
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <section className="px-8 xl:px-28 pt-[60px]">
      <TitleComponent title="All blog posts" aos="fade-right" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 mt-8">
        {paginatedPosts.map((post) => (
          <CardComponent
            key={post.id}
            cardStyle={post.cardStyle}
            onClick={() => navigate(`/task_6_adv/blog/${post.id}`)}
            aos="zoom-out-down"
            mainImg={post.mainImg}
            date={post.date}
            title={post.title}
            desc_1={post.desc_1}
            categories={post.categories}
          />
        ))}
      </div>

      <div
        className="flex items-center justify-between gap-5 max-md:flex-col
       mt-[30px] pt-5 max-md:pb-5
        border-t max-md:border-b border-gray-07 dark:border-gray-09"
      >
        <button
          className="text-sm font-normal leading-5
           text-gray-01 dark:text-gray-08
           flex items-center gap-2 cursor-pointer hover:text-primary duration-300"
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          disabled={currentPage == 1}
        >
          <FaArrowLeftLong />
          Previous
        </button>

        <div className="w-[290px] flex justify-center">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`h-10 w-10 text-sm font-medium leading-5
              text-gray-01 dark:text-gray-08
              py-2.5 px-4 cursor-pointer hover:text-primary duration-300
              ${
                currentPage == pageNumber
                  ? "bg-purple-02 rounded-lg text-purple-01 dark:text-primary"
                  : ""
              }`}
                onClick={() => dispatch(setCurrentPage(pageNumber))}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          className="text-sm font-normal leading-5
           text-gray-01 dark:text-gray-08
           flex items-center gap-2 cursor-pointer hover:text-primary duration-300"
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={currentPage == totalPages}
        >
          Next
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default AllPostsSection;
