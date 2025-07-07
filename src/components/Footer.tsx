import { Link } from "react-router-dom";
import { FooterLinksData } from "../data/FooterLinksData";

const Footer = () => {
  return (
    <div
      className="flex max-md:flex-col-reverse gap-3.5 
    px-5 xl:px-28 py-[30px]
    text-center text-sm font-normal leading-6
     text-primary dark:text-white "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <span className="max-md:mt-4"> © 2023 </span>
      <div className="flex gap-3.5 max-md:flex-col">
        {FooterLinksData.map((link, index) => (
          <Link
            to={link.to}
            key={index}
            className="duration-300 hover:text-purple-01"
          >
            {link.linkName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
