import { StatusBar } from 'expo-status-bar';
import "./global.css";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import CreateDelivery from './components/CreateDelivery';
import SenderDetails from './components/SenderDetails';

import MyOrder from './components/MyOrder';
import ResetPassword from './components/ResetPassword';
import OTPVerification from './components/OTPVerification';
import NewPassword from './components/NewPassword';
import TimePicker from './components/TimePicker';
import CourierSelection from './components/CourierSelection';
import OrderPreview from './components/OrderPreview';
import FindRide from './components/FindRide';
import PaymentUpdates from './components/PaymentUpdates';
import AddPaymentMethod from './components/AddPaymentMethod';
import RiderConfirmed from './components/RiderConfirmed';
import DeliveryComplete from './components/DeliveryComplete';
import ProofOfDelevery from './components/ProofOfDelevery';
import LiveTrack from './components/LiveTrack';
import ChatList from './components/ChatList';
import ChatOp from './components/chatOp';
import Profile from './components/Profile';
import Register from './components/Register';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <LoginForm/> */}
        {/* <RegistrationForm/> */}
        {/* <ResetPassword/> */}
        {/* <OTPVerification/> */}
        {/* <NewPassword/> */}
        {/* <HomePage/> */}
        {/* <CreateDelivery /> */}
        {/* <TimePicker/> */}
        {/* <SenderDetails/> */}
        {/* <CourierSelection/> */}

        {/* <FindRide /> */}

        {/* <PaymentUpdates/> */}
        {/* <AddPaymentMethod/> */}
        {/* <RiderConfirmed/> */}
        {/* <DeliveryComplete/> */}

        {/* <MyOrder/> */}
        {/* <OrderPreview/> */}

        {/* <ProofOfDelevery/> */}
        {/* <LiveTrack/> */}
        {/* <ChatList/> */}
        {/* <ChatOp/> */}
        {/* <Profile /> */}

        {/* DRIVER_APP */}
        {/* <Register/> */}


        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
