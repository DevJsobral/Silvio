import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';


export default function MenuGarcom() {
  
return (
<View style={styles.containerGeral}>
    <Text style={styles.tituloPagina}>Área do Garçom</Text>
    <View style={styles.container}> 
        <View style={styles.containerMesas}>
            <Text style={styles.title}>Acessar suas mesas em atendimento</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verificar Mesas</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.containerPedidos}>      
            <Text style={styles.title}>Acessar Pedidos</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verificar Pedidos</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.fazerPedido}>
            <Text style={styles.label}>Novo pedido:</Text>
                <TextInput style={styles.inputStyle}
                placeholder='Nome ou código do prato...'
                />
            <View style={styles.containerNMesa}>    
            <Text style={styles.label}>Número da mesa:</Text>    
                <TextInput style={styles.inputNumero}
                keyboardType='numeric'/>
            </View>
            <TouchableOpacity style={styles.enviarButton}>
            <Text style={styles.buttonText}>Enviar pedido</Text>
            </TouchableOpacity>    
        </View>     
    </View>
</View>
  );
}