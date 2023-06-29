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
    height: 240,
    marginBottom: 32,
  },

  commentsListMessageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
  },
  commentAvatarWrapper: {
    width: '10%',
  },
  commentWrapper: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '90%',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: 'rgba(0,0,0, 0.03)',
  },
  commentAvatarImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  commentMessageText: {
    fontFamily: 'Regular',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18,
    color: '#212121',
    marginBottom: 8,
  },

  commentDataTime: {
    marginLeft: 'auto',
    color: '#BDBDBD',

    fontFamily: 'Regular',
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 11.72,
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
