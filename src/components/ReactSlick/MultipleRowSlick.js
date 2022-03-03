import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import {
    SET_PHIM_DANG_CHIEU,
    SET_PHIM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimTypes";
import Film from "../Film/Film";
import "./MultipleRowSlick.css";

export default function MultipleRowSlick(props) {
    const dispatch = useDispatch();

    const settings = {
        infinite: true,
        centerPadding: "0",
        slidesToShow: 4,
        slidesPerRow: 2,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                },
            },
        ],
    };

    const renderFilms = () =>
        props.arrFilm.map((item, index) => (
            <div key={index} className="width-film-item film-slick-slider">
                <Film film={item} />
            </div>
        ));

    return (
        <div>
            <div className="mx-2">
                <button
                    onClick={() => {
                        dispatch(layDanhSachPhimAction());
                    }}
                    type="button"
                    className="px-5 border-r-2 border-black py-1 font-semibold rounded-l-lg bg-gray-600 hover:bg-gray-500 focus:bg-gray-400 transition-all text-gray-800"
                >
                    Danh Sách Phim
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: SET_PHIM_DANG_CHIEU,
                            dangChieu: true,
                        });
                    }}
                    type="button"
                    className="px-5 border-r-2 border-black py-1 font-semibold bg-gray-600 hover:bg-gray-500 focus:bg-gray-400 transition-all text-gray-800"
                >
                    Phim Đang Chiếu
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: SET_PHIM_SAP_CHIEU,
                            sapChieu: true,
                        });
                    }}
                    type="button"
                    className="px-8 py-1 font-semibold rounded-r-lg bg-gray-600 hover:bg-gray-500 focus:bg-gray-400 transition-all text-gray-800"
                >
                    Phim Sắp Chiếu
                </button>
            </div>

            <Slider {...settings}>{renderFilms()}</Slider>
        </div>
    );
}
