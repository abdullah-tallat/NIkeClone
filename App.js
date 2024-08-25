import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { StripeProvider } from '@stripe/stripe-react-native';

const STRIPE_KEY =
  'pk_test_51Nd4T5B7EpPG4rVU7sFBj3MuVlPNelU5whHv3yGMFhpJvqFzVqKMsiYU01BS959yczMzZJ32sP7kJ1BeQzL33LhU009mHB4lEA';

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <Navigation />
      </StripeProvider>

      <StatusBar style="auto" />
    </Provider>
  );
}
