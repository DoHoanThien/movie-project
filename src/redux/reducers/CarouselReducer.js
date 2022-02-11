import { GET_CAROUSEL } from "../actions/CarouselTypes/CarouselTypes";

const initialState = {
    arrCarousel: [],
};

export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAROUSEL: {
            state.arrCarousel = action.arrCarousel;
            return { ...state };
        }

        default:
            return { ...state };
    }
};
