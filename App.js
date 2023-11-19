import { StyleSheet, Text, View } from 'react-native';
import MenuGarcom from './src/screens/Garcom';
import MesasGarcom from './src/screens/Garcom/verificaMesas';
import PedidosGarcom from './src/screens/Garcom/verificaPedidos';
import MenuGestor from './src/screens/Gestor';
import MesasGestor from './src/screens/Gestor/verificaMesas';

export default function App() {
  return (
//     <MenuGarcom/>
//     <MesasGarcom/>
//     <PedidosGarcom/>
//     <MenuGestor/>
    <MesasGestor/>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
});
