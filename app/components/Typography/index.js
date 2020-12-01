import React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as theme from '~/styles/theme';

import Normalize from '~/helpers/escale';

export default function Typography({
  children,
  marginLeft,
  marginTop,
  bold,
  medium,
  semiBold,
  gray,
  h1,
  h2,
  h3,
  flex1,
  flex2,
  center,
  base,
}) {
  const textStyles = [
    styles.text,
    marginLeft && styles.marginLeft,
    marginTop && styles.marginTop,
    bold && styles.bold,
    medium && styles.medium,
    semiBold && styles.semiBold,
    gray && styles.gray,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    flex1 && styles.flex1,
    flex2 && styles.flex2,
    center && styles.center,
    base && styles.base,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.h3,
    color: theme.colors.primary,
  },
  bold: {
    fontFamily: theme.fonts.bold,
  },
  medium: {
    fontFamily: theme.fonts.medium,
  },
  semiBold: {
    fontFamily: theme.fonts.semiBold,
  },
  gray: {
    color: theme.colors.gray,
  },
  h1: {
    fontSize: theme.sizes.h1,
  },
  h2: {
    fontSize: theme.sizes.h2,
  },
  h3: {
    fontSize: theme.sizes.h3,
  },
  base: {
    fontSize: theme.sizes.base,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  center: {
    textAlign: 'center',
  },
  marginLeft: {
    marginLeft: Normalize.verticalScale(20),
  },
  marginTop: {
    marginTop: Normalize.verticalScale(20),
  },
});
