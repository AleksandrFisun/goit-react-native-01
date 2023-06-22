import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import image from '../../assets/img/User.jpg';

import IconFeather from 'react-native-vector-icons/Feather';
import styles from './PostsScreenStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const PostsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const onPressCommentsPost = () => {
    if (route.params === undefined) {
      return;
    }
    const postPhoto = route.params.dataPost.postPhoto;
    navigation.navigate('Comments', { postPhoto });
  };
  const onPressLocationPost = () => {
    if (route.params === undefined) {
      return;
    }
    const location = route.params.dataPost.location.coords;
    navigation.navigate('Map', { location });
  };
  return (
    <View style={styles.wrapperPost}>
      <View style={styles.wrapperPostBody}>
        <Image source={image} style={styles.imagePostBody} />
        <View>
          <Text style={styles.userFullNamePostBody}>Natali Romanova</Text>
          <Text style={styles.userEmailPostBody}>email@example.com</Text>
        </View>
      </View>

      <SafeAreaView style={styles.containerPost}>
        <ScrollView>
          {route.params !== undefined && (
            <View>
              <View style={styles.cardPostImageWrapper}>
                <Image
                  source={{ uri: route.params.dataPost.postPhoto }}
                  style={styles.cardPostImg}
                />
                <Text>{route.params.dataPost.namePost}</Text>
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
                      color="#BDBDBD"
                    />
                    <Text style={styles.cardPostFooterText}>0</Text>
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
                    {route.params.dataPost.locationPost}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default PostsScreen;
