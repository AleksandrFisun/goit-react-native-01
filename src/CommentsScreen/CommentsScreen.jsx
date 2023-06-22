import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
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
} from 'react-native';
import image from '../../assets/img/HomeBG.jpg';
import { styles } from './CommentsScreenStyles';
const COMMENTS = [
  {
    id: '1',
    comments:
      '1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '2',
    comments:
      '2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '3',
    comments:
      '3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '4',
    comments:
      '4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '5',
    comments:
      '5 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '6',
    comments:
      '6 - Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
  {
    id: '7',
    comments:
      '7 -Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nam explicabo optio repellat necessitatibus odit a non reiciendis minus architecto, suscipit voluptatum autem nostrum quas doloribus, earum praesentium eveniet totam.',
  },
];

const ResponseComments = ({ comments, id }) => (
  <>
    <View style={styles.commentsListMessageWrapper}>
      <Text key={id}>{comments}</Text>
    </View>
  </>
);
const CommentsScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const {
    params: { postPhoto },
  } = useRoute();

  const onPressButtonSend = () => {
    alert('Click onPressButtonSend');
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
          <View style={styles.commentsImageWrapper}>
            <Image
              source={{ uri: postPhoto }}
              style={[{ width: '100%', height: '100%', borderRadius: 8 }]}
            />
          </View>
          <View>{!COMMENTS ? <Text>Коментарів немає</Text> : ''}</View>
          <FlatList
            data={COMMENTS}
            renderItem={({ item }) => (
              <ResponseComments comments={item.comments} id={item.id} />
            )}
            keyExtractor={item => item.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '62%',
            }}
          />
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
              // onChangeText={setLocationPost}
              // value={locationPost}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;
