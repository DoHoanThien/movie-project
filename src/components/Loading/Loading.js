import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Loading() {
    const { isLoading } = useSelector((state) => state.LoadingReducer);

    return (
        <Fragment>
            {isLoading ? (
                <div className="fixed flex min-h-screen min-w-full justify-center items-center z-50 bg-slate-900/70">
                    <h1 className="text-5xl text-white drop-shadow-xl">
                        Loading...
                    </h1>
                </div>
            ) : (
                ""
            )}
        </Fragment>
    );
}
