import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabButton: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: '40%',
    right: '40%',
    zIndex: 1000,
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },

  wrapperPostHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  titlePostHeader: {
    fontFamily: 'Medium',
    fontWeight: 500,
    lineHeight: 22,
    fontSize: 17,
    letterSpacing: -0.41,
  },
});
