import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import {
   Roboto_400Regular,
   Roboto_500Medium,
   Roboto_700Bold,
   useFonts,
} from '@expo-google-fonts/roboto';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { New } from './src/screens/New';
import { Find } from './src/screens/Find';

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold,
   });

   return (
      <NativeBaseProvider theme={THEME}>
         <AuthContextProvider>
            <StatusBar
               barStyle={'light-content'}
               backgroundColor={'transparent'}
               translucent
            />
            {fontsLoaded ? <Find /> : <Loading />}
         </AuthContextProvider>
      </NativeBaseProvider>
   );
}
