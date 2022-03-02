import { useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props; //path, exact, Component

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                return (
                    <div className="bg-black/90">
                        <Header {...propsRoute} />
                        <Component {...propsRoute} />
                        <Footer />
                    </div>
                );
            }}
        />
    );
};
