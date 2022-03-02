import { DISPLAY_LOADING, HIDDEN_LOADING } from "../types/LoadingTypes";

const initialState = {
    isLoading: false,
};

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADING: {
            state.isLoading = true;
            return { ...state };
        }

        case HIDDEN_LOADING: {
            state.isLoading = false;
            return { ...initialState };
        }

        default:
            return { ...state };
    }
};
