import { useContext } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../../components/textInput';
import colors from '../../consts/colors';
import useTextInput from '../../hooks/useTextInput';
import { SelectionContext } from '../../store/SelectionProvider';
import SafeView from '../../components/safeview';
import SelectItem from '../../components/selectItem/SelectItem';

const SelectScreen = ({ navigation }) => {
  const selectionContext = useContext(SelectionContext);
  const searchInput = useTextInput({ placeholder: 'search placeholder' });

  const renderItem = ({ item }) => (
    <SelectItem
      id={item.id}
      title={item.title}
      handleOnPress={() => {
        selectionContext.updateSelected.current(item.id);
        navigation.goBack();
      }}
    />
  );

  return (
    <SafeView style={styles.container}>
      <TextInput {...searchInput.getInputProps()} />
      <FlatList
        data={selectionContext.items ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
      />
    </SafeView>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
    width: '100%',
    padding: 8,
  },
});
