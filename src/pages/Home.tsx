import Hero from "../components/Hero";
import AllPostsSection from "../sections/AllPostsSection";
import RecentPostSection from "../sections/RecentPostSection";

const Home = () => {
  console.log("home");

  return (
    <div>
      <Hero />
      <RecentPostSection />
      <AllPostsSection />
    </div>
  );
};

export default Home;
