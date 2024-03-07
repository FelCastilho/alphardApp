import { StatusBar, SafeAreaView } from 'react-native';
import Home from './src/pages/home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#141414" barStyle="light-content" />
      <Home />
    </>
  );
}

