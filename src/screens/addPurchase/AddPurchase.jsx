import { StyleSheet, View, Button } from 'react-native';
import Text from '../../components/text';
import colors from '../../consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPurchase = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>new purchase</Text>
      <Text textStyle={'title'}>new purchase</Text>
    </SafeAreaView>
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
