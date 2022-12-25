import { Route, Routes} from 'react-router-dom';
import Home  from '../pages/Home/Home';
import  {Movies}  from '../pages/Movies/Movies';
//import MovieSet from './MoviesSet/MoviesSet';
import NotFound from '../pages/NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import SharedLayout from './SharedLayout/SharedLayout';
import Cast from '../components/Cast/Cast';
import Rewievs from '../components/Rewievs/Rewievs';



const App = () => {
  return (
    <div
      style={{
        height: '100hv',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="movies" element={<Movies />}></Route>
         <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Rewievs />} />
          </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;