import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <BounceLoader color="#36d7b7" size={60} />
        </div>
    );
};

export default Loading;
