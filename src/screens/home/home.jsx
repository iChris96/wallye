import { StyleSheet, View, Button } from 'react-native';
import colors from '../../consts/colors';
import Text from '../../components/text';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text textStyle="title">Welcome</Text>
      </View>
      <View style={styles.mid}>
        <Button title="Go to wallet"></Button>
        <Button
          title="Add a purchase"
          onPress={() => navigation.navigate('AddPurchase')}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 29,
  },
  top: {
    flex: 1,
  },
  mid: {
    gap: 10,
    flex: 5,
  },
});
