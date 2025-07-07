import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import HandleLoadingComponent from "./components/HandleLoadingComponent";
import ScrollComponent from "./components/ScrollComponent";

function App() {
  return (
    <div className="bg-white dark:bg-dark">
      <HandleLoadingComponent>
        <ScrollComponent />
        <NavBar />
        <Outlet />
        <Footer />
      </HandleLoadingComponent>
    </div>
  );
}

export default App;
