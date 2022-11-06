import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/home';
import AddPurchase from './src/screens/addPurchase';
import WithLoadingResources from './src/components/withLoadingResources';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <WithLoadingResources>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddPurchase" component={AddPurchase} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </WithLoadingResources>
    </SafeAreaProvider>
  );
}
