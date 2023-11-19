import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from './style';


export default function MesasGestor() {
    const data = [
        { id: '1', title: 'Mesa 2', tempo: '30min'},
        { id: '2', title: 'Mesa 34', tempo: '20min'},
        { id: '3', title: 'Mesa 26', tempo: '50min' },
        { id: '4', title: 'Mesa 22', tempo: '1 Hora'},
        { id: '5', title: 'Mesa 18', tempo: '5min'},
      ];

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={styles.rowItem}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', }}>{item.title}</Text>
                <TouchableOpacity style={styles.alertarButton}><Text style={{ color: 'white', fontWeight:'bold' }}>Alertar Garçons</Text></TouchableOpacity>
            </View>
            <Text>Tempo sem realizar pedidos: <Text style={{fontSize:15, fontWeight:'bold', }}>{item.tempo}</Text></Text>
        </View>
      );
    
return(
<View style={styles.containerGeral}>
    <Text style={styles.tituloPagina}>Área do Gestor</Text>
    <View style={styles.container}>
        <Text style={styles.title}>Mesas no salão</Text>
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