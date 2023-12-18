// import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('dashboard') || location.pathname.includes('login') || location.pathname.includes('signup');
    // console.log(window.location.pathname);
    return (
        <>
            {/* {noHeaderFooter || <Header></Header>} */}
            <Header></Header>
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}




        </>
    );
};

export default Root;