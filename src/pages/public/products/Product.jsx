import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from 'react-head';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ProductSidebar from '../../../components/sidebar/ProductSidebar';
import allProducts from '../../../data/allProducts';
import electricalAutomation from '../../../data/electricalAutomation';
import panelManufacturing from '../../../data/panelManufacturing';
import epcContracts from '../../../data/epcContracts';
import TuneIcon from '@mui/icons-material/Tune';
import manufacturingRanges from '../../../data/manufacturingRanges';

const Product = () => {
    const { pathname } = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    useEffect(() => {
        // Close drawer on route change
        setIsDrawerOpen(false);
    }, [pathname]);

    const category = useMemo(() => pathname.split('/')[2]?.split('-').join(' ') || '', [pathname]);
    const subCategory = useMemo(() => pathname.split('/')[2]?.split('-').join(' ') || '', [pathname]);

    const filteredData = useMemo(() => {
        const categorySlug = pathname.split('/')[2];
        return allProducts.find((item) => item.category === categorySlug) || null;
    }, [pathname]);

    const productData = useMemo(() => {
        let category = pathname.split('/')[2];
        let subcategory = pathname.split('/')[2];
        return manufacturingRanges.find((item) => item.category === subcategory) || null;

        // if (category === "electrical-automation") {
        //     return electricalAutomation.find((item) => item.category === subcategory)?.description || null;
        // } else if (category === "panel-manufacturing") {
        //     return panelManufacturing.find((item) => item.category === subcategory)?.description || null;
        // } else if (category === "epc-contracts") {
        //     return epcContracts.find((item) => item.category === subcategory)?.description || null;
        // }
        return null;
    }, [pathname]);

    const [pageTitle, setPageTitle] = useState('');
    useEffect(() => {
        setPageTitle(`${subCategory} - ${category}`.trim());
    }, [category, subCategory]);

    // const links = useMemo(() => [
    //     { name: "PLC Control Panel", route: "/category/electrical-automation/plc-control-panel" },
    //     { name: "HMI Touch Panel", route: "/category/electrical-automation/hmi-touch-panel" },
    //     { name: "SCADA System", route: "/category/electrical-automation/scada-system" },
    //     { name: "Motor Control Centre", route: "/category/electrical-automation/motor-control-centre" },
    //     { name: "VFD Drive", route: "/category/electrical-automation/vfd-drive" },
    //     { name: "Soft Starter", route: "/category/electrical-automation/soft-starter" },
    //     { name: "Electrical Control Panel", route: "/category/electrical-automation/electrical-control-panel" },
    //     { name: "Automation Control Panel", route: "/category/electrical-automation/automation-control-panel" },
    //     { name: "Remote I/O Module", route: "/category/electrical-automation/remote-io-module" },
    // ], [pathname]);
    const links = useMemo(() => [
        { name: "Power Control Centre", route: "/manufacturing-ranges/power-control-centre" },
        { name: "MCC Panels", route: "/manufacturing-ranges/mcc-panels" },
        { name: "Intelligent MCC Panels", route: "/manufacturing-ranges/intelligent-mcc-panels" },
        { name: "DG Synchronization Panel", route: "/manufacturing-ranges/dg-synchronization-panel" },
        { name: "AMF Panels", route: "/manufacturing-ranges/auto-mains-failure-panels" },
        { name: "APFC Panels", route: "/manufacturing-ranges/automatic-power-factor-control-panels" },
        { name: "VFD Panels", route: "/manufacturing-ranges/vfd-panels" },
        { name: "LV/MV Soft Starter Panels", route: "/manufacturing-ranges/lv-mv-soft-starter-panels" },
        { name: "PLC Panel/ SCADA Panel", route: "/manufacturing-ranges/plc-panel-scada-panel" },
        { name: "Distribution Boards", route: "/manufacturing-ranges/distribution-boards" },
        { name: 'Air Insulated Bus Duct', route: '/manufacturing-ranges/air-insulated-bus-duct' },
    ], [pathname]);

    return (
        <>
            <Title>{pageTitle}</Title>
            <main>
                <div className='w-full'>
                    <img
                        // src={filteredData?.banner || '/banners/default.png'}
                        // src={'/banners/electrical-control-panel.png'}
                        src={productData?.banner || '/banners/defult.png'}
                        alt={category}
                        className='w-full'
                    />
                </div>

                <div className='w-full flex justify-end items-center px-4 pt-2 cursor-pointer md:hidden' onClick={toggleDrawer(true)}>
                    <span className='text-[16px]'>Filter</span>
                    <IconButton>
                        <TuneIcon />
                    </IconButton>
                </div>

                <div className='w-full px-4 lg:px-8 py-3 flex justify-start items-start gap-x-4'>
                    <div className='md:w-[20%] hidden md:block sticky top-24 left-0'>
                        <ProductSidebar links={links} />
                    </div>
                    <div className='w-full md:w-[80%] product-description'>
                        <div dangerouslySetInnerHTML={{ __html: productData?.description }} className='w-full border border-solid border-blue-700 py-3 px-2 main-size'></div>
                    </div>
                </div>
            </main>

            {/* Sidebar Drawer */}
            <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <div className='w-64 p-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-semibold'>Filter</h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ProductSidebar links={links} />
                </div>
            </Drawer>
        </>
    );
};

export default Product;
