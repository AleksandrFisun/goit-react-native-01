import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  createPostWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 32,

    backgroundColor: '#FFFFFF',
  },
  createPostKeyboar: {
    flex: 1,
  },
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
  },
  createPostInputWrapper: {
    marginBottom: 32,
  },
  createPostInput: {
    paddingVertical: 15,
    marginBottom: 17,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  createPostInputLocation: {
    paddingVertical: 15,
    paddingLeft: 28,
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  createPostInputIcon: {
    position: 'absolute',
    top: 13,
    fontSize: 24,
    color: '#BDBDBD',
  },
  buttonCreatePostActive: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 16,
    paddingHorizontal: 32,

    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  buttonCreatePostDisabled: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 16,
    paddingHorizontal: 32,

    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },

  buttonCreatePostText: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  buttonCreatePostTextDisabled: {
    fontFamily: 'Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  createPostButtonDeleteWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
  },
  createPostButtonDelete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 70,
    height: 40,

    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#F6F6F6',

    backgroundColor: '#F6F6F6',
  },
  createPostIconDelete: {
    fontSize: 20,
    color: '#BDBDBD',
  },

  //
  camera: { flex: 1, width: '100%' },
  photoView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
  },

  button: { alignSelf: 'center' },
});
