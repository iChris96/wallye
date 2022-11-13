import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/home';
import AddPurchase from './src/screens/addPurchase';
import SelectScreen from './src/screens/selectScreen';
import WithLoadingResources from './src/components/withLoadingResources';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SelectionProvider from './src/store/SelectionProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <WithLoadingResources>
        <SelectionProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddPurchase" component={AddPurchase} />
              <Stack.Screen name="SelectScreen" component={SelectScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </SelectionProvider>
      </WithLoadingResources>
    </SafeAreaProvider>
  );
}
