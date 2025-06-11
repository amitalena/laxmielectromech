import { lazy } from "react";
import PublicRouter from "./routes/PublicRouter";

const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/about/AboutUs"));
const Contact = lazy(() => import("../pages/public/contact/ContactUs"));
const Blogs = lazy(() => import("../pages/public/blogs/Blogs"));
const SingleBlogPage = lazy(() => import("../pages/public/blogs/SingleBlog"));
const Login = lazy(() => import("../pages/validations/Login"));

// products
const Product = lazy(() => import("../pages/public/products/Product"));
const ProductCategory = lazy(() => import("../pages/public/products/ProductCategory"));
const ProductDetails = lazy(() => import('../pages/public/products/ProductDetails'));

const pages = [
    {
        path: "/",
        // element: <Home />,
        element: (
            <PublicRouter />
        ),
        children: [
            {
                path: '',
                element: <Home />,
                meta: {
                    title: 'LAXMI ELECTROMECH PVT. LTD.'
                }
            },
            {
                path: "about",
                element: <About />,
                meta: {
                    title: 'About Us'
                }
            },
            {
                path: "contact-us",
                element: <Contact />,
                meta: {
                    title: 'Contact Us',
                }
            },
            {
                path: "blogs",
                element: <Blogs />,
                meta: {
                    title: 'Blogs'
                }
            },
            {
                path: "singleblog/:id",
                element: <SingleBlogPage />,
                meta: {
                    title: 'Single Blog'
                }
            },
            {
                path: 'category/*',
                element: <Product />,
                meta: {
                    title: 'Products',
                }
            },
            {
                path: 'product-category/*',
                element: <ProductCategory />,
                meta: {
                    title: 'Product Category'
                }
            },
            {
                path: 'product-details/*',
                element: <ProductDetails />,
                meta: {
                    title: 'Product Details'
                }
            },
        ],
        meta: {
            title: 'LAXMI ELECTROMECH PVT. LTD.'
        }
    },
    {
        path: '/login',
        element: <Login />,
        meta: {
            title: 'Login Page'
        }
    }
];

export default pages;