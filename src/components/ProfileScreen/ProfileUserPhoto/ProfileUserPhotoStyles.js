import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  photoWrapper: {
    position: 'relative',
    height: 60,
    width: 120,
  },
  photoUser: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  photoUserButton: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },



  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },




});
