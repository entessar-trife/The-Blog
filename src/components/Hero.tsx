import heroImage_light from "../assets/images/heroImage_light.png";
import heroImage_dark from "../assets/images/heroImage_dark.png";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Hero = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <section
      className="px-5 xl:px-28 pt-[92px] md:pt-[110px] xl:pt-[140px]"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      {isDarkMode ? (
        <img src={heroImage_dark} alt="hero image" />
      ) : (
        <img src={heroImage_light} alt="hero image" />
      )}
    </section>
  );
};

export default Hero;
