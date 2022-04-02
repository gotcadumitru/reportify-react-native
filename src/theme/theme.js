import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const COLORS = {
  LIGHT_GRAY: '#faf9fa',
  GRAY: '#b6bccb',
  RED: '#da2236',
  PURPLE: '#5e45d6',
  LIGHT_PURPLE: '#8f87ae',
  GREEN: '#03ac5a',
  DARK: '#3f3839',
};

const SCREEN_SIZE = {
  HEIGHT: windowHeight,
  WIDTH: windowWidth,
};

const APP_STYLES = {
  ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ROW_SPACE: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
};

export {COLORS, SCREEN_SIZE, APP_STYLES};
