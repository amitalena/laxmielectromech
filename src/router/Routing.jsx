import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import pages from "./pages";

const Routing = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
                {pages.map(({ path, element, meta, children }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <MetaWrapper title={meta?.title} description={meta?.description}>
                                {element}
                            </MetaWrapper>
                        }
                    >
                        {children &&
                            children.map((child) => (
                                <Route
                                    key={child.path}
                                    path={child.path}
                                    element={
                                        <MetaWrapper title={child.meta?.title} description={child.meta?.description}>
                                            {child.element}
                                        </MetaWrapper>
                                    }
                                />
                            ))}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
};

const MetaWrapper = ({ title, description, children }) => {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            const metaDescription = document.querySelector("meta[name='description']");
            if (metaDescription) {
                metaDescription.setAttribute("content", description);
            } else {
                const meta = document.createElement("meta");
                meta.name = "description";
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description]);

    return <>{children}</>;
};

export default Routing;
