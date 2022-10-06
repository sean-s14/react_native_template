import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import { Navigation } from '~src/routes/exports';
import { AuthProvider } from '~src/contexts/exports';

const App = () => {

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
      console.log(e);
    }
  }
  // useEffect( () => {clearAll();}, []);

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );  
}

export default App;