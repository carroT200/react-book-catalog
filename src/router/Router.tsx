import { Routes, Route } from 'react-router-dom';
import { RouteNames } from './route-names';
import { lazy } from 'react';

import Layout from '../components/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
const HomePage = lazy(() => import('../pages/HomePage'));
const BookPage = lazy(() => import('../pages/BookPage'));
const AddBookPage = lazy(() => import('../pages/AddBookPage'))

const Router = () => {
  return (
    <Routes>
       <Route path={RouteNames.HOME} element={<Layout />}>
         <Route index element={<HomePage />} />
        <Route path={RouteNames.BOOK_DETAILS} element={<BookPage />} />
        <Route path={RouteNames.ADD_BOOK} element={<AddBookPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
