import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Benefits from "../pages/More/Benefits";

const Main = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    );
};

export default Main;