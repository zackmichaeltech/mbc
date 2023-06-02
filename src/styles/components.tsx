import {StyleSheet} from 'react-native';
import {backgroundColors} from './variables';

const componentStyles = StyleSheet.create({
  primaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderColor: backgroundColors.terciary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: backgroundColors.terciary,
    borderRadius: 30,
    alignItems: 'center',
  },
  terciaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderColor: backgroundColors.terciary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
  },
  whiteButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: backgroundColors.secondary,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 18,
  },
  navigationContainer: {
    backgroundColor: backgroundColors.terciary,
    position: 'absolute',
    bottom: 23,
    left: 30,
    right: 30,
    borderRadius: 20,
    height: 83,
  },
  paddingRegular: {
    paddingBottom: 14,
  },
  headerContainer: {
    width: '100%',
    height: 90,
    backgroundColor: backgroundColors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    paddingTop: 50,
    paddingBottom: 170,
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 40,
  },
  sectionOptions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 14,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  imageFormat: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    position: 'relative',
  },
  imageDescription: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColors.primary,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottomLableFont: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 14,
    // lineHeight: 21,
    textTransform: 'uppercase',
  },
});

export default componentStyles;
