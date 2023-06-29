import { useSelector } from 'react-redux';
import {
  selectIsUserPost,
  selectIsUserAvatar,
  selectIsUser,
} from '../redux/firestore/fireBaseSelectors';

export const useFireBase = () => {
  const userPost = useSelector(selectIsUserPost);
  const userAvatar = useSelector(selectIsUserAvatar);
  const user = useSelector(selectIsUser);
  return {
    userAvatar,
    userPost,
    user,
  };
};
// import { useFireBase } from 'hooks';
// const { isUserPost, isIserAvatar } = useFireBase();
