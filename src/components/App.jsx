import { Route, Routes} from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy, Suspense } from "react";
import { Wrapper } from 'App.styled';


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Rewievs = lazy(() => import('../components/Rewievs/Rewievs'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));



const App = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="rewievs" element={<Rewievs />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Wrapper>
  );
};

export default App;