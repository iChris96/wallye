import { View, StyleSheet } from 'react-native';

const Form = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    padding: 12,
    width: '95%',
    margin: 8,
  },
});
