import { StatusBar } from 'expo-status-bar';
import "./global.css";
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import Register from './components/Register';
import CreateDelivery from './components/CreateDelivery';
import CourierSelection from './components/CourierSelection';
import TimePicker from './components/TimePicker';
import FindRide from './components/FindRide';
import MyOrder from './components/MyOrder';
import ChatList from './components/ChatList';
import ChatScreen from './components/chatOp';
import Profile from './components/Profile';
import TrackingDetails from './components/OrderPreview';
import LiveTrack from './components/LiveTrack';
import RescheduleDelivery from './components/RescheduleDelivery';
import PaymentUpdates from './components/PaymentUpdates'; 

// Import other components as needed

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Registration" component={RegistrationForm} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
            <Stack.Screen name="CourierSelection" component={CourierSelection} />
            <Stack.Screen name="TimePicker" component={TimePicker} />
            <Stack.Screen name="FindRide" component={FindRide} />
            <Stack.Screen name="MyOrder" component={MyOrder} />
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="OrderPreview" component={TrackingDetails} />
            <Stack.Screen name="LiveTrack" component={LiveTrack} />
            <Stack.Screen name="RescheduleDelivery" component={RescheduleDelivery} />
            <Stack.Screen name="PaymentUpdates" component={PaymentUpdates} />
            {/* Add other screens as needed */}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
});