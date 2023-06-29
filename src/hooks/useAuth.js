import { useSelector } from 'react-redux';
import {
  selectIsUserAuth,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsMessageErrorLogin,
  selectIsMessageErrorReg,
  selectIsUserDataReg,
  selectIsUserReg,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userAuth = useSelector(selectIsUserAuth);
  const userReg = useSelector(selectIsUserReg);

  const messageErrorLogIn = useSelector(selectIsMessageErrorLogin);
  const messageErrorReg = useSelector(selectIsMessageErrorReg);
  const userDataReg = useSelector(selectIsUserDataReg);

  return {
    isLoggedIn,
    isRefreshing,
    userAuth,
    messageErrorLogIn,
    messageErrorReg,
    userDataReg,
    userReg,
  };
};
// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn,user } = useAuth();
