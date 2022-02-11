import React from "react";

export default function Film(props) {
    const filmStyle = {
        height: "350px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="h-full mx-2 mt-6 bg-black/40 bg-opacity-75 pb-16 rounded-lg overflow-hidden text-center relative">
            <div
                style={{
                    ...filmStyle,
                    backgroundImage: `url(${props.film.hinhAnh})`,
                }}
            ></div>
            <div className="px-3">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 h-6">
                    {props.film.tenPhim.length > 30 ? (
                        <span>{props.film.tenPhim.slice(0, 30)}...</span>
                    ) : (
                        <span>{props.film.tenPhim}</span>
                    )}
                </h1>
                <p className="leading-relaxed mb-3 h-14">
                    {props.film.moTa.length > 100 ? (
                        <span>{props.film.moTa.slice(0, 100)}...</span>
                    ) : (
                        <span>{props.film.moTa}</span>
                    )}
                </p>
                <button className="mr-3 cursor-pointer transition-all inline-flex items-center bg-amber-600 border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 rounded text-base text-black mt-3">
                    Đặt Vé
                </button>
                <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                    </span>
                </div>
            </div>
        </div>
    );
}
