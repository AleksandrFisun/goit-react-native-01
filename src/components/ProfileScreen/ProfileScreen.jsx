import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { useFireBase } from '../../hooks/useFireBase';
import fireBaseOperations from '../../redux/firestore/fireBaseOperations';
import IconFeather from 'react-native-vector-icons/Feather';
import image from '../../../assets/img/HomeBG.jpg';
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut';
import ProfileUserPhoto from './ProfileUserPhoto/ProfileUserPhoto';
import { styles } from './ProfileScreenStyles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { userPost } = useFireBase();
  const { userAuth } = useAuth();
  const dispatch = useDispatch();
  const onPressCommentsPost = (photo, coments, key) => {
    navigation.navigate('Comments', { photo, coments, key });
  };
  const onPressLocationPost = location => {
    navigation.navigate('Map', { location });
  };

  const onClickLikePhoto = data => {
    const newData = userPost.map(res => {
      if (res.key !== data.key) {
        return res;
      }
      return {
        comments: res.comments,
        key: res.key,
        like: res.like + 1,
        location: res.location,
        locationPost: res.locationPost,
        postPhoto: res.postPhoto,
        namePost: res.namePost,
      };
    });

    dispatch(fireBaseOperations.updateDataComments(newData));
    dispatch(fireBaseOperations.getDataFromFirestore());
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.profilePostWrapper}>
        <View style={styles.photoWrapper}>
          <View style={styles.photoUser}>
            <ProfileUserPhoto />
          </View>
        </View>
        <View style={styles.buttonLogOut}>
          <ButtonLogOut />
        </View>
        <Text style={styles.profileTitle}>
          {userAuth ? userAuth.displayName : ''}
        </Text>

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
                      <Text style={styles.cardPostNamePost}>
                        {data.namePost}
                      </Text>
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
                            {data.comments.length}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            onClickLikePhoto(data);
                          }}
                          style={styles.cardPostGradeButton}
                        >
                          <IconFeather
                            name="thumbs-up"
                            style={[
                              styles.cardPostFooterIcon,
                              data.like === 0
                                ? {
                                    color: '#BDBDBD',
                                  }
                                : { color: '#FF6C00' },
                            ]}
                            color="#FF6C00"
                          />
                          <Text style={styles.cardPostFooterText}>
                            {data.like >= 0 ? data.like : 0}
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
    </View>
  );
};

export default ProfileScreen;
