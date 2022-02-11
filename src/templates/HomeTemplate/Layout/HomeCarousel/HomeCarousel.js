import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "antd";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import "./HomeCarousel.css";

const contentStyle = {
    height: "650px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPoition: "center",
};

export default function HomeCarousel(props) {
    const { arrCarousel } = useSelector((state) => state.CarouselReducer);

    const dispatch = useDispatch();

    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return (
                <div key={index}>
                    <div
                        style={{
                            ...contentStyle,
                            backgroundImage: `url(${item.hinhAnh})`,
                        }}
                    >
                        <img
                            src={item.hinhAnh}
                            className="opacity-0"
                            alt={item.maBaner}
                        />
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        const action = getCarouselAction();
        dispatch(action);
    }, []);

    return <Carousel effect="fade">{renderCarousel()}</Carousel>;
}
