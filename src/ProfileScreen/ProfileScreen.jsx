import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import image from '../../assets/img/HomeBG.jpg';
import userImg from '../../assets/img/User.jpg';

import { styles } from './ProfileScreenStyles';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const onPressCommentsPost = () => {
    navigation.navigate('Comments');
  };
  const onPressLocationPost = () => {
    navigation.navigate('Map');
  };
  const handleChoosePhoto = () => {
    alert('Click photo...');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.profilePostWrapper}>
        <View style={styles.photoWrapper}>
          <View style={styles.photoUser}>
            {userImg ? (
              <Image source={userImg} style={styles.photoUser} />
            ) : (
              <View style={styles.photoUser}></View>
            )}
            {userImg ? (
              <TouchableOpacity
                onPress={handleChoosePhoto}
                style={styles.photoUserButton}
              >
                <Icon name="closecircleo" size={25} color="#E8E8E8" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleChoosePhoto}
                style={styles.photoUserButton}
              >
                <Icon name="pluscircleo" size={25} color="#FF6C00" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.profileTitle}>Natali Romanova</Text>

        <SafeAreaView style={styles.containerPost}>
          <ScrollView>
            <View>
              <View style={styles.cardPostImageWrapper}>
                <Image source={image} style={styles.cardPostImg} />
                <Text>Ліс</Text>
              </View>
              <View style={styles.cardPostFooter}>
                <View style={styles.cardPostGrade}>
                  <TouchableOpacity
                    onPress={onPressCommentsPost}
                    style={[styles.cardPostGradeButton, { marginRight: 30 }]}
                  >
                    <IconFeather
                      name="message-circle"
                      style={styles.cardPostFooterIcon}
                      color="#FF6C00"
                    />
                    <Text style={styles.cardPostFooterText}>8</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleChoosePhoto}
                    style={styles.cardPostGradeButton}
                  >
                    <IconFeather
                      name="thumbs-up"
                      style={styles.cardPostFooterIcon}
                      color="#FF6C00"
                    />
                    <Text style={styles.cardPostFooterText}>153</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={onPressLocationPost}
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
                      { textDecorationLine: 'underline' },
                    ]}
                  >
                    Ukraine
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ProfileScreen;
