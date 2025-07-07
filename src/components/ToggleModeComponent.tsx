import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { toggleMode } from "../redux/slice/themeSlice";

const ToggleModeComponent = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className="relative w-24 flex justify-between items-center gap-4 px-4 py-2 rounded-[29px] bg-dark dark:bg-white cursor-pointer"
      onClick={() => dispatch(toggleMode())}
    >
      <div
        className={`bg-white dark:bg-dark w-6 h-6 rounded-full absolute
      transition-transform duration-500
        ${isDarkMode ? "translate-x-10" : "translate-x-0"}`}
      ></div>
      <IoMoonOutline className="text-white dark:text-dark h-6 w-6" />
      <MdOutlineWbSunny className="text-white dark:text-dark h-6 w-6" />
    </div>
  );
};

export default ToggleModeComponent;
