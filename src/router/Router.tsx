import { Routes, Route } from 'react-router-dom';
import { RouteNames } from './route-names';
import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage'));
const BookPage = lazy(() => import('../pages/BookPage'));

const Router = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.BOOK_DETAILS} element={<BookPage />} />
    </Routes>
  );
}

export default Router;
