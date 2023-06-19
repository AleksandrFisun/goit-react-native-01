import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperPost: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  wrapperPostBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  containerPost: {
    flex: 1,
    width: '100%',
  },
  cardPostImageWrapper: {
    marginBottom: 10,
  },
  cardPostImg: {
    marginBottom: 8,
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  cardPostFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPostGrade: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardPostGradeButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPostFooterIcon: {
    fontSize: 24,
    marginRight: 6,
  },
  cardPostFooterText: {
    fontFamily: 'Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  cardPostLocationButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
