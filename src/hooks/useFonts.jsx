import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    Inconsolata: require('../../assets/fonts/Inconsolata/static/Inconsolata/Inconsolata-Regular.ttf'),
    InconsolataBold: require('../../assets/fonts/Inconsolata/static/Inconsolata/Inconsolata-Bold.ttf'),
  });

export default useFonts;
