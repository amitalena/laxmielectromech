import { useEffect, useRef } from "react";

const HTMLLoad = ({
    htmlData = ''
}) => {
    const htmlRef = useRef(null);

    useEffect(() => {
        if (htmlRef.current) {
            htmlRef.current.innerHTML = htmlData;
        }
    }, [htmlData]);

    return <>
        <div ref={htmlRef} className="main-size"></div>
    </>
}

export default HTMLLoad;