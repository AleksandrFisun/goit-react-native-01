import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import image from '../assets/img/User.jpg';
import styles from './PostsScreenStyles';
const PostsScreen = () => {
  return (
    <View style={styles.wrapperPost}>
      <View style={styles.wrapperPostHeader}>
        <Text style={styles.titlePostHeader}>Публікації</Text>
        <TouchableOpacity style={styles.buttonLogOut}>
          <IconFeather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.wrapperPostBody}>
          <Image source={image} style={styles.imagePostBody} />
          <View>
            <Text style={styles.userFullNamePostBody}>Natali Romanova</Text>
            <Text style={styles.userEmailPostBody}>email@example.com</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.wrapperPostFooter}>
        <TouchableOpacity>
          <Icon name="appstore-o" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonFooterActiveWrapper}>
            <Icon name="plus" size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFeather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PostsScreen;
