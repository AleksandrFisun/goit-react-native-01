import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  createPostPhotoWrapper: {
    marginBottom: 35,
  },
  createPostPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,

    width: '100%',
    height: 240,

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  createPostPhotoMin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,

    width: '100%',
    height: 100,

    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,

    backgroundColor: '#F6F6F6',
  },
  createPostPhotoIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 60,
    height: 60,

    borderWidth: 1,
    borderRadius: '50%',
    borderColor: '#FFFFFF',

    backgroundColor: '#FFFFFF',
  },
  createPostPhotoText: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: '#BDBDBD',
    backgroundColor: 'transparent',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  photoView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },

  flipContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
  },

  button: {
    position: 'absolute',
    zIndex: 100,
    alignSelf: 'center',
  },
});
