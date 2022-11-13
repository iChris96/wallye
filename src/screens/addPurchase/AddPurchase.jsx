import { StyleSheet } from 'react-native';
import colors from '../../consts/colors';
import Form from '../../components/form';
import Text from '../../components/text';
import TextInput from '../../components/textInput/';
import SafeView from '../../components/safeview';
import useTextInput from '../../hooks/useTextInput';
import useNumericInput from '../../hooks/useNumericInput';
import Selector from '../../components/selector';
import mockCoins from '../../data/mockCoins';
import { useState, useEffect } from 'react';
import useSelector from '../../hooks/useSelector';

const AddPurchase = ({ navigation }) => {
  const amountInput = useNumericInput({ placeholder: 'Amount' });
  const priceInput = useNumericInput({ placeholder: 'Price' });
  const [coins, setCoins] = useState([]);
  const { selectorItem } = useSelector({ placeholder: 'coin', items: coins });
  const xSelector = useSelector({
    placeholder: 'color',
    items: [{ id: 50, title: 'red' }],
  });

  useEffect(() => {
    const getCoins = () => {
      setCoins(mockCoins);
    };
    getCoins();
  }, []);

  return (
    <SafeView style={styles.container}>
      <Text textStyle="title">new purchase</Text>
      <Form>
        <Text>What did you buy?</Text>
        {selectorItem()}
        {xSelector.selectorItem()}
        <TextInput {...amountInput.getInputProps()} />
        <TextInput {...priceInput.getInputProps()} />
      </Form>
    </SafeView>
  );
};

export default AddPurchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
  },
});
