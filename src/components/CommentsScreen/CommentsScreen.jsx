import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from './CommentsScreenStyles';
import fireBaseOperations from '../../redux/firestore/fireBaseOperations';
import { useFireBase } from '../../hooks/useFireBase';

const CommentsScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { userAvatar, userPost } = useFireBase();
  const {
    params: { photo, coments, key },
  } = useRoute();
  const filterCommentsPost = userPost.filter(data => data.key === key);
  const commentsPost = filterCommentsPost[0];

  const currentDate = new Date();
  const currentTime = new Date();
  const optionsDate = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const optionsTime = {
    hours: 'short',
  };
  const newDatePost = currentDate.toLocaleDateString('de-DE', optionsDate);
  const newTimePost = currentTime.toLocaleTimeString('de-DE', optionsTime);

  const onPressButtonSend = () => {
    if (message.length === 0) {
      alert('Поле');
      return;
    }
    const newData = userPost.map(data => {
      if (data.key !== key) {
        return data;
      }
      const rand = 2320 + Math.random() * (22 - 1310);
      return {
        comments: [
          ...data.comments,
          {
            key: rand,
            userAvatar: userAvatar,
            message: message,
            dateComment: newDatePost,
            timeComment: newTimePost,
          },
        ],
        key: data.key,
        like: data.like,
        location: data.location,
        locationPost: data.locationPost,
        postPhoto: data.postPhoto,
        namePost: data.namePost,
      };
    });
    dispatch(fireBaseOperations.updateDataComments(newData));
    dispatch(fireBaseOperations.getDataFromFirestore());
    setMessage('');
  };
  const onKeyboard = () => {
    setKeyboardStatus(true);
  };
  const onBlur = () => {
    setKeyboardStatus(false);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.commentsWrapper}>
        <SafeAreaView>
          <ScrollView
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <View style={styles.commentsImageWrapper}>
              <Image
                source={{ uri: photo }}
                style={[{ width: '100%', height: '100%', borderRadius: 8 }]}
              />
            </View>
            {commentsPost && (
              <>
                <View>
                  {commentsPost.comments.length === 0 ? (
                    <>
                      <Text>Коментарів немає</Text>
                    </>
                  ) : (
                    <></>
                  )}
                </View>
                {commentsPost.comments.length > 0 &&
                  commentsPost.comments.map(comment => {
                    return (
                      <View
                        key={comment.key}
                        style={styles.commentsListMessageWrapper}
                      >
                        <View style={styles.commentAvatarWrapper}>
                          <Image
                            source={{ uri: comment.userAvatar }}
                            style={styles.commentAvatarImage}
                          />
                        </View>
                        <View style={styles.commentWrapper}>
                          <Text
                            key={comment.key}
                            style={styles.commentMessageText}
                          >
                            {comment.message}
                          </Text>
                          <View>
                            <Text style={styles.commentDataTime}>
                              {comment.dateComment} | {comment.timeComment}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </>
            )}
          </ScrollView>
        </SafeAreaView>

        <View
          style={[
            styles.commentsMessageWrapper,
            keyboardStatus ? { marginBottom: 100 } : { marginBottom: 32 },
          ]}
        >
          <View style={styles.commentsMessageContaner}>
            <Pressable
              onPress={onPressButtonSend}
              style={styles.commentsButtonSendMessage}
            >
              <Ionicons
                name="arrow-up-circle"
                style={styles.commentsIconSendMessage}
              />
            </Pressable>
            <TextInput
              placeholder={'Коментувати...'}
              inputMode="text"
              onFocus={onKeyboard}
              onBlur={onBlur}
              style={styles.commentsMessageInput}
              onChangeText={setMessage}
              value={message}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;
