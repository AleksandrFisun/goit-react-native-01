import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  createPostKeyboar: {
    flex: 1,
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
