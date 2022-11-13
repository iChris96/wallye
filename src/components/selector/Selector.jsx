import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../consts/colors';
import { defaultInputStyle } from '../../consts/inputs';

const SelectorInput = ({ selectedText, placeholder, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
      style={{ marginVertical: 8 }}
    >
      <View
        style={{
          ...defaultInputStyle,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: selectedText
              ? colors.white
              : defaultInputStyle.placeholderTextColor,
            fontSize: 20,
          }}
        >
          {selectedText ?? placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectorInput;
