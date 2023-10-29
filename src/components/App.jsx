import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';


const Home = lazy(() => import('../pages/Homepage'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails'))
const Cast = lazy(()=>import('../components/Cast/Cast'));
const Reviews = lazy(()=>import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path={"/movies"} element={<Movies/>} />
          <Route path={"/movies/:movieId"} element={<MovieDetails/>}>
            <Route path={"/movies/:movieId/cast"} element={<Cast/>}/>
            <Route path={"/movies/:movieId/reviews"} element={<Reviews/>}/>
          </Route>
          <Route path={"*"} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
