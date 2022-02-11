import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRowSlick from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";

export default function Home(props) {
    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, []);
    return (
        <div className="container mx-auto">
            <section className="text-gray-600 body-font">
                <div className="py-10 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>
            <HomeMenu />
        </div>
    );
}
