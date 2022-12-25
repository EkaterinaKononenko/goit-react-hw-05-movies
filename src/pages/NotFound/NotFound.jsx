import { Outlet } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <main style={{ textAlign: 'center' }}>
        <b style={{ fontSize: 64 }}>404</b>
              <p>Sorry, we couldn't find that page</p>
      </main>
      <Outlet />
    </div>
  );
};

export default NotFound;