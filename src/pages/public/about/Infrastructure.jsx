const Infrastructure = () => {
    return <>
        <div className="px-4 lg:px-12 flex flex-col justify-center my-3 w-full items-center gap-y-4">
            <h2 className="font-semibold text-[32px] text-blue-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40%] after:h-[3px] after:bg-blue-800">Infrastructure</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        // src="https://ambit.in/ambitImages/infra/1.jpg"
                        src="/images/product-images/fabrication-plant/1.png"
                        alt="image"
                        className="object-contain"
                    />
                    <p className="font-medium text-black capitalize">laser cutting</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        // src="https://ambit.in/ambitImages/infra/4.jpg"
                        src="/images/product-images/fabrication-plant/2.png"
                        alt="image"
                        className="object-contain"
                    />
                    <p className="font-medium text-black capitalize">cnc welding machine/cnc press brake</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        // src="https://ambit.in/ambitImages/infra/2.jpg"
                        src="/images/product-images/fabrication-plant/3.png"
                        alt="image"
                        className="object-contain"
                    />
                    <p className="font-medium text-black capitalize">metal shaving machine</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img
                        // src="https://ambit.in/ambitImages/infra/3.jpg"
                        src="/images/product-images/fabrication-plant/7.png"
                        alt="image"
                        className="object-contain"
                    />
                    <p className="font-medium text-black capitalize">boulder coating plant machine</p>
                </div>
            </div>
        </div>
    </>
}

export default Infrastructure;