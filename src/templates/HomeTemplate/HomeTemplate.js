import { Route } from "react-router-dom";
import HomeMenu from "../../pages/Home/HomeMenu/HomeMenu";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props; //path, exact, Component

    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                return (
                    <div className="bg-black/90">
                        <Header {...propsRoute} />
                        <HomeCarousel {...propsRoute} />
                        <Component {...propsRoute} />
                        <Footer />
                    </div>
                );
            }}
        />
    );
};
