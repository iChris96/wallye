import { StyleSheet, TextInput, View } from 'react-native';
import { forwardRef } from 'react';
import Text from '../text';
import { defaultInputStyle } from '../../consts/inputs';

const MyTextInput = forwardRef((props, ref) => {
  const renderInputError = () => {
    if (props.error) {
      return (
        <View>
          <Text.caption style={{ color: 'red' }}>{props.error}</Text.caption>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={styles.input}
        {...props}
        placeholderTextColor={defaultInputStyle.placeholderTextColor}
      />
      {renderInputError()}
    </View>
  );
});

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  input: {
    ...defaultInputStyle,
  },
});
