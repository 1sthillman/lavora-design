import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Products = lazy(() => import('../pages/products/page'));
const Gallery = lazy(() => import('../pages/gallery/page'));
const SourceCode = lazy(() => import('../pages/source-code/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const BlogDetail = lazy(() => import('../pages/blog/detail'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/products/:category', element: <Products /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/:slug', element: <BlogDetail /> },
    { path: '/gallery', element: <Gallery /> },
    { path: '/source-code', element: <SourceCode /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
