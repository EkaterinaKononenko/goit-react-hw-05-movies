import { Outlet} from 'react-router-dom';
import { NotFoundMain, BtnBack } from './NotFund.styled';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoBackClick = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <div>
      <NotFoundMain style={{ textAlign: 'center' }}>
        <b style={{ fontSize: 64 }}>404</b>
        <p>Sorry, we couldn't find that page</p>
        <div>
          <BtnBack type="button" onClick={onGoBackClick}>
            &#11013; GO BACK
          </BtnBack>
        </div>
      </NotFoundMain>
      <Outlet />
    </div>
  );
};

export default NotFound;