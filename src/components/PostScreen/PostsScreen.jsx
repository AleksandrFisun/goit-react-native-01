import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, { useEffect } from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './PostsScreenStyles';
import authOperations from '../../redux/auth/authOperations';
import fireBaseOperations from '../../redux/firestore/fireBaseOperations';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { useFireBase } from '../../hooks/useFireBase';

const PostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userDataReg, userAuth, userReg } = useAuth();
  const { userAvatar, userPost } = useFireBase();

  useEffect(() => {
    dispatch(fireBaseOperations.getDataFromFirestore());

    if (userDataReg.login !== null) {
      dispatch(authOperations.changeUserProfile());
      if (userReg) {
        dispatch(
          authOperations.updateUserProfile({
            displayName: userDataReg.login,
          })
        );
        dispatch(
          fireBaseOperations.writeDataToFirestore({
            img: userDataReg.img,
            name: userDataReg.login,
          })
        );
        dispatch(fireBaseOperations.getDataFromFirestore());
      }
    }
  }, []);

  const onPressCommentsPost = (photo, coments, key) => {
    navigation.navigate('Comments', { photo, coments, key });
  };
  const onPressLocationPost = location => {
    navigation.navigate('Map', { location });
  };
  return (
    <View style={styles.wrapperPost}>
      {userAuth && (
        <View style={styles.wrapperPostBody}>
          {userAvatar !== undefined ? (
            <Image source={{ uri: userAvatar }} style={styles.imagePostBody} />
          ) : (
            ''
          )}
          <View>
            <Text style={styles.userFullNamePostBody}>
              {userAuth.displayName ? userAuth.displayName : ''}
            </Text>
            <Text style={styles.userEmailPostBody}>{userAuth.email}</Text>
          </View>
        </View>
      )}

      <SafeAreaView style={styles.containerPost}>
        <ScrollView>
          {userPost &&
            userPost.map(data => {
              return (
                <View key={data.key} style={styles.cardPostWrapper}>
                  <View style={styles.cardPostImageWrapper}>
                    <Image
                      source={{ uri: data.postPhoto }}
                      style={styles.cardPostImg}
                    />

                    <Text style={styles.cardPostNamePost}>{data.namePost}</Text>
                  </View>

                  <View style={styles.cardPostFooter}>
                    <View style={styles.cardPostGrade}>
                      <TouchableOpacity
                        onPress={() => {
                          if (data.postPhoto) {
                            onPressCommentsPost(
                              data.postPhoto,
                              data.comments,
                              data.key
                            );
                          }
                        }}
                        style={[
                          styles.cardPostGradeButton,
                          { marginRight: 30 },
                        ]}
                      >
                        <IconFeather
                          name="message-circle"
                          style={[
                            styles.cardPostFooterIcon,
                            ,
                            data.comments.length === 0
                              ? {
                                  color: '#BDBDBD',
                                }
                              : { color: '#FF6C00' },
                          ]}
                        />
                        <Text style={styles.cardPostFooterText}>
                          {data.comments ? data.comments.length : 0}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        if (data.location !== null) {
                          onPressLocationPost(data.location);
                        } else {
                          onPressLocationPost({
                            coords: {
                              latitude: 50.450001,
                              longitude: 30.523333,
                            },
                          });
                        }
                      }}
                      style={styles.cardPostLocationButton}
                    >
                      <IconFeather
                        name="map-pin"
                        style={styles.cardPostFooterIcon}
                        color="#BDBDBD"
                      />
                      <Text
                        style={[
                          styles.cardPostFooterText,
                          { textDecorationLine: 'underline', maxWidth: 200 },
                        ]}
                      >
                        {data.locationPost}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default PostsScreen;
