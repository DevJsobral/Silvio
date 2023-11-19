import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from './style';


export default function PedidosGarcom() {
    const data = [
        { id: '1', title: 'Risotto Camarão', mesa: '2', status:'Pronto'},
        { id: '2', title: 'Caldinho', mesa: '18', status:'Em preparo'},
        { id: '3', title: 'Cerveja Heineken', mesa: '26', status:'Pronto'},
        { id: '4', title: 'Caldeirada', mesa: '22', status:'Em preparo'},
        { id: '5', title: 'Galeto Desossado', mesa: '34', status:'Não iniciado'},
      ];

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={{ fontSize:17, fontWeight:'bold', }}>Mesa: {item.mesa}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{item.title}</Text><Text style={{ fontStyle:'italic', color:'gray'}}>{item.status}</Text>
        </View>
      );

    return (
        <View style={styles.containerGeral}>
        <Text style={styles.tituloPagina}>Área do Garçom</Text>
        <View style={styles.container}>
            <Text style={styles.title}>Pedidos do Salão</Text>
            <FlatList
                style={styles.listStyle}        
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />        
        </View>
    </View>   
    )
}