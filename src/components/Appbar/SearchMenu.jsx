import { useEffect, useMemo } from "react"
import manufacturingRanges from "../../data/manufacturingRanges"
import { Link, useNavigate } from "react-router-dom"

const Item = ({
    title = "",
    banner = "",
    category = "",
}) => {
    return <>
        <Link to={`/manufacturing-ranges/${category}`} className="w-auto h-auto">
            <div className="w-full py-1.5 px-3 border-b border-solid flex gap-x-4 cursor-pointer group justify-start items-center border-b-[#e0e0e0]">
                <div className="flex justify-center items-center w-12 h-12">
                    <img src={banner} alt="image" className="object-contain" />
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-semibold text-[16px] text-black group-hover:text-blue-700">{title}</h2>
                </div>
            </div>
        </Link>
    </>
}

const SearchMenu = ({
    search = '',
    submitEvent = "",
}) => {
    const navigate = useNavigate();
    const isSearch = useMemo(() => {
        if(submitEvent && submitEvent !== ""){
            let category = manufacturingRanges.filter((item) => (
                item.title.toLowerCase().includes(search.toLowerCase())
            ))?.[0]?.category;
            if(category && category !== ""){
                navigate(`/manufacturing-ranges/${category}`);
                return 0;
            }
        }

        if (search && search !== "") {
            return manufacturingRanges.filter((item) => (
                item.title.toLowerCase().includes(search.toLowerCase())
            ))
        }
        else return [];
    }, [search, submitEvent]);

    return <>
        {
            search && search !== "" ?
                <div className="bg-white shadow-md absolute -bottom-[40vh] px-1 rounded-b-lg overflow-y-scroll left-0 w-full z-50 h-[40vh]">
                    {
                        isSearch && isSearch.length > 0 ? isSearch.map((item, index) => (
                            <Item key={index} {...item} />
                        )) : null
                    }
                </div> : null
        }
    </>
}

export default SearchMenu;