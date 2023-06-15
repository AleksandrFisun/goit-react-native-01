import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from './src/components/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import PostsScreen from './src/PostsScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
      <StatusBar style="auto" />
    </>
  );
}
