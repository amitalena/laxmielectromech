import { useMemo } from "react"
import { menuData } from "../Appbar/menuData"
import { Link, useLocation } from "react-router-dom";

const ProductSidebar = ({
    links = [],
}) => {
    const { pathname } = useLocation();

    const products = useMemo(() => menuData.filter((item) => item.product), []);
    // const links = useMemo(() => {
    //     let category = pathname.split('/')[2];
    //     return products.filter((item) => item.id === category)?.[0]?.subMenu || null;
    // }, [pathname]);

    const SideLink = ({
        name = "",
        route = "",
    }) => {
        return <>
            <Link to={`${route}`} className="w-full">
                <div className={`w-full px-2 py-1 transition-all ${pathname === route ? "bg-[#2457AA] text-white" : "text-black hover:bg-blue-500 hover:text-white"} duration-300`}>
                    <h2>{name}</h2>
                </div>
            </Link>
        </>
    }

    return <>
        <aside className="w-full border border-solid border-gray-400">
            <div className="w-full flex justify-center bg-gray-200 text-gray-900 items-center py-2 border-b border-solid border-b-gray-400">
                <h2 className="font-semibold text-[18px]">Our Manufacturing Ranges</h2>
            </div>
            <div className="w-full">
                {
                    links.map((item, index) => (
                        <SideLink key={index} {...item} />
                    ))
                }
            </div>
        </aside>
    </>
}

export default ProductSidebar;