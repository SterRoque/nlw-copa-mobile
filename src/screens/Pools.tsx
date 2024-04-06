import { VStack, Icon } from 'native-base';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Octicons } from '@expo/vector-icons';

export function Pools() {
   return (
      <VStack
         flex={1}
         bg='gray.900'>
         <Header title='Meus bolões' />
         <VStack
            mt={6}
            mx={5}
            borderBottomWidth={1}
            borderBottomColor='gray.600'
            pb={4}
            mb={5}>
            <Button
               title='BUSCAR BOLÃO POR CÓDIGO'
               leftIcon={
                  <Icon
                     as={Octicons}
                     name='search'
                     size='md'
                  />
               }
            />
         </VStack>
      </VStack>
   );
}
