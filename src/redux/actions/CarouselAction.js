import { quanlyPhimServices } from "../../services/QuanLyPhimServices";
import { GET_CAROUSEL } from "./CarouselTypes/CarouselTypes";

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimServices.layDanhSachBanner();
            dispatch({
                type: GET_CAROUSEL,
                arrCarousel: result.data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
