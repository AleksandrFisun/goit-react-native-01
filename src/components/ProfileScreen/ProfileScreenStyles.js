import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '110%',
    width: '100%',
  },
  profilePostWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160,
    paddingHorizontal: 16,
    width: '100%',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  //
  photoWrapper: {
    position: 'relative',
    height: 60,
    width: 120,
    marginBottom: 32,
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
  //
  buttonLogOut: {
    position: 'absolute',
    right: 0,
    top: 14,
  },
  //
  profileTitle: {
    marginBottom: 32,
    fontFamily: 'Medium',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  //
  containerPost: {
    flex: 1,
    width: '100%',
  },
  cardPostWrapper: {
    marginBottom: 32,
  },
  cardPostNamePost: {
    fontFamily: 'Medium',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 18.75,
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
