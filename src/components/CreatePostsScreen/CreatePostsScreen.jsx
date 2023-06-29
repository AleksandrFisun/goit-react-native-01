import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { styles } from './CreatePostsScreenStyles';
import fireBaseOperations from '../../redux/firestore/fireBaseOperations';
import CreatePostCamera from './CreatePostCamera/CreatePostCamera';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import { useFireBase } from '../../hooks/useFireBase';

const CreatePostsScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [postPhoto, setPostPhot] = useState(null);
  const [postData, setPostData] = useState({});
  const [removePost, setRemovePost] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userPost } = useFireBase();

  useEffect(() => {
    dispatch(fireBaseOperations.getDataFromFirestore());
    setRemovePost(false);
  }, [removePost]);
  const deletePost = () => {
    alert('Delete');
  };
  const keyBordStat = newKeybord => {
    setKeyboardStatus(newKeybord);
  };

  const createPost = () => {
    const { namePost, locationPost, location } = postData;
    if (
      namePost.length === 0 ||
      locationPost.length === 0 ||
      postPhoto === null
    ) {
      alert('Заполните все поля');
      return;
    }
    const data = userPost.map(post => {
      return post;
    });
    const rand = 2320 + Math.random() * (22 - 1310);
    const newData = [
      ...data,
      {
        key: rand,
        postPhoto,
        namePost,
        locationPost,
        location,
        comments: [],
        like: 0,
      },
    ];
    dispatch(fireBaseOperations.updateDataInFirestore(newData));
    navigation.navigate('Posts');
    dispatch(fireBaseOperations.getDataFromFirestore());
    setRemovePost(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.createPostWrapper}>
        <CreatePostCamera
          keyboardStatus={keyboardStatus}
          userPhoto={data => setPostPhot(data)}
          removePost={removePost}
        />
        <CreatePostForm
          newStatusKeybord={keyBordStat}
          postPhoto={postPhoto}
          postData={data => setPostData(data)}
          createPost={createPost}
          removePost={removePost}
        />

        <View style={styles.createPostButtonDeleteWrapper}>
          <Pressable style={styles.createPostButtonDelete} onPress={deletePost}>
            <IconFeather name="trash-2" style={styles.createPostIconDelete} />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
