import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';


export default function MenuGestor() {
  
return (
<View style={styles.containerGeral}>
    <Text style={styles.tituloPagina}>Gestão do Salão</Text>
    <View style={styles.container}> 
        <View style={styles.containerMesas}>
            <Text style={styles.title}>Acessar mesas do salão</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verificar Mesas</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.fazerPromocao}>
            <Text style={{marginBottom:20, fontSize: 18}}>Adicionar Promoção:</Text>
                <TextInput style={styles.inputStyle}
                placeholder='Exemplo: 20% OFF em petiscos'
                />
            <View style={styles.containerNMesa}>    
                <Text style={styles.label}>Início:</Text>    
                    <TextInput
                        style={styles.inputNumero}
                        keyboardType="numeric"
                        placeholder="Digite a data (DD/MM/AAAA)"
                    />
            </View>
            <View style={styles.containerNMesa}>
                <Text style={styles.label}>Fim:</Text>    
                    <TextInput
                        style={styles.inputNumero}
                        keyboardType="numeric"
                        placeholder="Digite a data (DD/MM/AAAA)"
                    />    
            </View>
            <TouchableOpacity style={styles.enviarButton}>
            <Text style={styles.buttonText}>Adicionar Promoção</Text>
            </TouchableOpacity>    
        </View>     
    </View>
</View>
  );
}