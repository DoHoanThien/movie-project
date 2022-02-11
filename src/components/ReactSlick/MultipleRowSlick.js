import React from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import "./MultipleRowSlick.css";

export default function MultipleRowSlick(props) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
    };

    const renderFilms = () =>
        props.arrFilm.map((item, index) => (
            <div key={index} className="width-film-item film-slick-slider">
                <Film film={item} />
            </div>
        ));

    return (
        <div>
            <h2 className="text-white text-5xl m-0">Danh Sách Phim</h2>
            <Slider {...settings}>
                {renderFilms()}
                {renderFilms()}
                {renderFilms()}
                {renderFilms()}
                {renderFilms()}
            </Slider>
        </div>
    );
}
