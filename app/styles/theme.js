import Normalize from '~/helpers/escale';

const colors = {
  primary: '#292929',
  background: '#F2F3F3',
  white: '#FFFFFF',
  red: '#D8232A',
  gray: '#979797',
  grayLight: '#C7C8C8',
};

const sizes = {
  h1: Normalize.verticalScale(24),
  h2: Normalize.verticalScale(18),
  h3: Normalize.verticalScale(14),
  base: Normalize.verticalScale(12),
};

const fonts = {
  bold: 'Gilroy-Bold',
  semiBold: 'Gilroy-SemiBold',
  medium: 'Gilroy-Medium',
  regular: 'Gilroy-Regular',
};

export {colors, sizes, fonts};
