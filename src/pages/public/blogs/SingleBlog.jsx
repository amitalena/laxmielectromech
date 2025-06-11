import { useEffect, useMemo, useState } from "react";
import { blogData } from "./blogData";
import BlogComponent from "../../../utils/BlogComponent";
import { useLocation } from "react-router-dom";

const SingleBlog = () => {
    const { pathname } = useLocation();
    const filterBlog = (id = 1) => {
        return blogData.filter((item) => item.id === id)[0];
    }
    const singleBlog = useMemo(() => {
        return filterBlog(parseInt(pathname.split('/')[2]));
    }, [pathname]);

    const [mainBlog, setMainBlog] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);
    const sortedBlogs = useMemo(() =>
        [...blogData].sort((a, b) => new Date(b.createDate) - new Date(a.createDate)).slice(0, 4)
        , [blogData]);
    useEffect(() => {
        // Retrieve the saved furniture data from localStorage
        const savedFurniture = localStorage.getItem("latestblog");

        if (savedFurniture) {
            // Parse the data back to an object
            const parsedFurniture = JSON.parse(savedFurniture);

            // Set the main blog (selected furniture)
            setMainBlog(parsedFurniture);

            // Set the latest blogs (all other furniture items except the selected one)
            const filteredLatestBlogs = blogData.filter(
                (item) => item.id !== parsedFurniture.id
            );
            setLatestBlogs(filteredLatestBlogs);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainBlog = blogData.find((blog) => blog.id === 1);
            const defaultLatestBlogs = sortedBlogs.filter((blog) => blog.id !== 1);

            setMainBlog(defaultMainBlog);
            setLatestBlogs(defaultLatestBlogs);
        }
    }, []);

    if (!mainBlog) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <BlogComponent
                // blog={mainBlog}
                blog={singleBlog}
                latestBlogs={latestBlogs}
            />
        </>
    );
};

export default SingleBlog;