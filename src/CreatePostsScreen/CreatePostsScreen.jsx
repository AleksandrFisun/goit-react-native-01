import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from './CreatePostsScreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const CreatePostsScreen = () => {
  const [namePost, setNamePost] = useState('');
  const [locationPost, setLocationPost] = useState('');
  const [buttonCreatePostStyle, setButtonCreatePostStyle] = useState(
    styles.buttonCreatePostDisabled
  );
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [buttonTextCreatePostStyle, setButtonTextCreatePostStyle] = useState(
    styles.buttonCreatePostTextDisabled
  );
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (namePost.length === 0 || locationPost.length === 0) {
      setButtonCreatePostStyle(styles.buttonCreatePostDisabled);
      setButtonTextCreatePostStyle(styles.buttonCreatePostTextDisabled);
      return;
    }
    setButtonCreatePostStyle(styles.buttonCreatePostActive);
    setButtonTextCreatePostStyle(styles.buttonCreatePostText);
  }, [namePost, locationPost]);

  const onKeyboard = () => {
    setKeyboardStatus(true);
  };
  const onBlur = () => {
    setKeyboardStatus(false);
  };
  const createPost = () => {
    alert('Create');
  };
  const deletePost = () => {
    alert('Delete');
  };
  const handleChoosePhoto = () => {
    alert('Click photo...');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.createPostWrapper}>
        <View style={styles.createPostPhotoWrapper}>
          <TouchableOpacity
            onPress={handleChoosePhoto}
            style={
              keyboardStatus
                ? styles.createPostPhotoMin
                : styles.createPostPhoto
            }
          >
            {photo ? (
              <Image source={{ uri: photo }} />
            ) : (
              <View style={styles.createPostPhotoIcon}>
                <Icon name="photo-camera" size={24} color="#BDBDBD" />
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.createPostPhotoText}>
            {photo ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>
        </View>
        <KeyboardAvoidingView
          style={styles.createPostKeyboar}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.createPostInputWrapper}>
            <TextInput
              placeholder="Назва..."
              inputMode="text"
              onFocus={onKeyboard}
              onBlur={onBlur}
              style={styles.createPostInput}
              onChangeText={setNamePost}
              value={namePost}
            />
            <View>
              <IconFeather name="map-pin" style={styles.createPostInputIcon} />
              <TextInput
                placeholder="Місцевість..."
                inputMode="text"
                onFocus={onKeyboard}
                onBlur={onBlur}
                style={styles.createPostInputLocation}
                onChangeText={setLocationPost}
                value={locationPost}
              />
            </View>
          </View>
          <Pressable
            style={buttonCreatePostStyle}
            disabled={namePost.length === 0 || locationPost.length === 0}
            onPress={createPost}
          >
            <Text style={buttonTextCreatePostStyle}>Опубліковати</Text>
          </Pressable>
        </KeyboardAvoidingView>

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
