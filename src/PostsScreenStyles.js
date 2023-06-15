import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperPost: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  wrapperPostHeader: {
    position: 'relative',
    marginTop: 44,
    paddingHorizontal: 20,
    paddingVertical: 11,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  titlePostHeader: {
    fontFamily: 'Medium',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    color: '#212121',
  },
  buttonLogOut: {
    position: 'absolute',
    top: 10,
    left: '100%',
  },
  wrapperPostBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  imagePostBody: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userFullNamePostBody: {
    fontFamily: 'Bold',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmailPostBody: {
    fontFamily: 'Regular',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },

  wrapperPostFooter: {
    marginBottom: 34,
    paddingHorizontal: 20,
    paddingVertical: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  buttonFooterActiveWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
});
export default styles;