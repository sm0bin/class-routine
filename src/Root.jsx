import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;