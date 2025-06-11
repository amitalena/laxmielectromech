import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRouter from "./routes/PublicRouter";
import Product from "../pages/public/products/Product";
import Login from "../pages/validations/Login";
import Loading from "./Loading";

const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/about/AboutUs"));
const Contact = lazy(() => import("../pages/public/contact/ContactUs"));
const Blogs = lazy(() => import("../pages/public/blogs/Blogs"));
const SingleBlogPage = lazy(() => import("../pages/public/blogs/SingleBlog"));
const ProductCategory = lazy(() => import("../pages/public/products/ProductCategory"));
const ProductDetails = lazy(() => import('../pages/public/products/ProductDetails'));
// Loading fallback componeimport AboutUs from './../pages/public/about/AboutUs';
const ManufacturingFacilityMachinery = lazy(() => import("../pages/public/manufacturingFacility/ManufacturingFacilityMachinery"));
const OurClients = lazy(() => import("../pages/public/clients/OurClients"));
const Quality = lazy(() => import("../pages/public/quality/Quality"));
const Projects = lazy(() => import("../pages/public/projects/Projects"));
const Careers = lazy(() => import("../pages/public/careers/Careers"));

// admin
const Dashboard = lazy(() => import('../admin/dashboard/Dashboard'));
const AdminProducts = lazy(() => import("../admin/products/AdminProducts"));
const AdminBlogs = lazy(() => import("../admin/blogs/AdminBlogs"));

// Define routes
const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "/about", element: <About /> },
    { path: "/contact-us", element: <Contact /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/singleblog/:id", element: <SingleBlogPage /> },
    { path: '/product-category/*', element: <ProductCategory /> },
    { path: '/product-details/*', element: <ProductDetails /> },
    // { path: '/manufacturing-facility-machinery', element: <ManufacturingFacilityMachinery /> },
    { path: '/plant-and-machinery', element: <ManufacturingFacilityMachinery /> },
    { path: '/our-clients', element: <OurClients /> },
    { path: '/quality', element: <Quality /> },
    { path: '/projects', element: <Projects/> },
    { path: '/career', element: <Careers /> },
    {
        path: '/admin',
        element: <Outlet />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'products',
                element: <AdminProducts />,
            },
            {
                path: 'blogs',
                element: <AdminBlogs />,
            }
        ]
    },
    // {
    //     path: '/category/*',
    //     element: <Product />,   
    // }
    {
        path: '/manufacturing-ranges/*',
        element: <Product />,   
    }
];

// Create router
const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <PublicRouter />
            </>
        ),
        children: routes
    },
    {
        path: '/login',
        element: <Login />,
    }
    // {
    //     path: "/admin",
    //     element: <PrivateRoutes />,
    //     // children: [
    //     //     { path: "/", element: <Dashboard /> }
    //     // ]
    // }
]);

// Main Router Component
export default function MainRouter() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routers} />
        </Suspense>
    );
}
