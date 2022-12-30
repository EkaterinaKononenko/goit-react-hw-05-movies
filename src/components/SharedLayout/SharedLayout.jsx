import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, BtnHomeLink, BtnMovieLink } from './SharedLayout.styled';
 
 const SharedLayout = () => {
   return (
     <div>
       <Header>
         <nav>
           <BtnHomeLink to="/">Home</BtnHomeLink>
           <BtnMovieLink to="/movies">Movies</BtnMovieLink>
         </nav>
       </Header>
       <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
       </Suspense>
     </div>
   );
};

export default SharedLayout;