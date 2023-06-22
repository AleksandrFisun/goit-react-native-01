import React, { useState } from 'react';
import {
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { styles } from './CreatePostsScreenStyles';
import CreatePostCamera from './CreatePostCamera/CreatePostCamera';
import CreatePostForm from './CreatePostForm/CreatePostForm';

const CreatePostsScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [postPhoto, setPostPhot] = useState(null);

  const deletePost = () => {
    alert('Delete');
  };
  const keyBordStat = newKeybord => {
    setKeyboardStatus(newKeybord);
  };
  const onUserpostPhoto = data => {
    setPostPhot(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.createPostWrapper}>
        <CreatePostCamera
          keyboardStatus={keyboardStatus}
          userPhoto={onUserpostPhoto}
        />
        <CreatePostForm newStatusKeybord={keyBordStat} postPhoto={postPhoto} />

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
