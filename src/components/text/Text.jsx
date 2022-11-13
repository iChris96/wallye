import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import colors from '../../consts/colors';
import font from '../../consts/fonts';

const MyText = ({ textStyle, children }) => {
  return <Text style={styles[textStyle ?? 'regular']}>{children}</Text>;
};

MyText.caption = ({ style = {}, children }) => {
  return <Text style={{ ...styles.caption, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  regular: {
    fontSize: font.sizes.font20,
    color: colors.white,
    fontFamily: 'Inconsolata',
  },
  title: {
    fontSize: font.sizes.font24,
    color: colors.white,
    fontFamily: 'InconsolataBold',
  },
  caption: {
    fontSize: font.sizes.font12,
    color: colors.white,
    fontFamily: 'Inconsolata',
  },
});

export default MyText;

MyText.propTypes = {
  textStyle: PropTypes.oneOf(['regular', 'title']),
};
