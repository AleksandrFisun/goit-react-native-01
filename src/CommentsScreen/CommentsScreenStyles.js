import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  commentsWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 90,

    backgroundColor: '#FFFFFF',
  },
  commentsImageWrapper: {
    width: '100%',
    height: '35%',
    marginBottom: 32,
  },

  commentsListMessageWrapper: {
    marginBottom: 24,
  },
  //
  commentsMessageWrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
  },
  commentsMessageContaner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: 16,
    marginRight: 16,
  },
  commentsMessageInput: {
    paddingLeft: 16,
    paddingRight: 50,
    width: '100%',
    height: '100%',

    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 50,

    fontFamily: 'Medium',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19.36,
  },
  commentsButtonSendMessage: {
    position: 'absolute',
    zIndex: 100,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  commentsIconSendMessage: {
    fontSize: 34,
    color: '#FF6C00',
  },
});
