import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../consts/colors';

const SelectItem = ({ title, id, handleOnPress }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={handleOnPress}
  >
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.mainDark,
        height: 80,
        width: '100%',
        marginVertical: 2,
        padding: 8,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: colors.white, fontSize: 20 }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default SelectItem;

const styles = StyleSheet.create({});
