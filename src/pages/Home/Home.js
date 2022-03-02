import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MultipleRowSlick from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
        dispatch(layDanhSachHeThongRapAction());
    }, []);
    return (
        <div className="mx-auto mb-16">
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                <div className="container py-10 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>
        </div>
    );
}
