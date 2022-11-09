import { StyleSheet, TextInput } from 'react-native';
import { forwardRef } from 'react';
import colors from '../../consts/colors';

const MyTextInput = forwardRef((props, ref) => {
  return <TextInput ref={ref} style={styles.input} {...props}></TextInput>;
});

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    color: colors.white,
    placeholderTextColor: 'gray',
    height: 40,
    padding: 2,
    borderRadius: 4,
    marginVertical: 8,
    backgroundColor: colors.mainDark,
  },
});
