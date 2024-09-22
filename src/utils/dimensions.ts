import {Dimensions as DimensionsRN} from 'react-native';
import {isTablet} from 'react-native-device-info';
export class Dimensions {
  static get(type: 'window' | 'screen' = 'window') {
    const {width, height} = DimensionsRN.get(type);
    if (isTablet()) {
      return {
        width: width,
        height: height,
      };
    } else {
      return {
        width: width > height ? height : width,
        height: width > height ? width : height,
      };
    }
  }
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const FULL_SCREEN_HEIGHT = Dimensions.get('screen').height;
