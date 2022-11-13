import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import colors from '../consts/colors';
import { SelectionContext } from '../store/SelectionProvider';
import { useNavigation } from '@react-navigation/native';
import SelectorInput from '../components/selector/';

const useSelector = ({ items = [], placeholder = 'item' }) => {
  const selectionContext = useContext(SelectionContext);
  const navigation = useNavigation();
  const [selected, setSelected] = useState();

  const handleSelected = (id) => {
    const selectedItem = items.find((it) => it.id === id);
    setSelected(selectedItem);
  };

  const selectorItem = () => {
    const handleOnPress = () => {
      selectionContext.setItems(items);
      selectionContext.updateSelected.current = (id) => handleSelected(id);
      navigation.navigate('SelectScreen');
    };
    return (
      <SelectorInput
        selectedText={selected?.title}
        placeholder={`Select a ${placeholder}`}
        onPress={handleOnPress}
      />
    );
  };

  useEffect(() => {}, [items]);

  useEffect(() => {}, []);
  return {
    selectorItem,
    selected,
  };
};

export default useSelector;
