import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import image from '../../assets/img/User.jpg';
import testImage from '../../assets/img/HomeBG.jpg';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './PostsScreenStyles';
const PostsScreen = () => {
  const handleChoosePhoto = () => {
    alert('Click photo...');
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
          <View>
            <View style={styles.cardPostImageWrapper}>
              <Image source={testImage} style={styles.cardPostImg} />
              <Text>Ліс</Text>
            </View>

            <View style={styles.cardPostFooter}>
              <View style={styles.cardPostGrade}>
                <TouchableOpacity
                  onPress={handleChoosePhoto}
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
                onPress={handleChoosePhoto}
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
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default PostsScreen;
