import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerGeral: {
        height: '100%',
        paddingTop: 30,
        backgroundColor:'#ff0000'
    },
    tituloPagina: {
        width: 120,
        paddingTop: 20,
        paddingLeft: 30,
        marginBottom:120,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex:1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding:30,
        backgroundColor: '#FFF',
    },
    title: {
        fontWeight:'bold',
        fontSize: 18,
        width: 180,
        paddingBottom: 10,
    },
    containerMesas: {
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    containerPedidos: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    button: {
        alignSelf: 'flex-end',
        width: 100,
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 10,
     },
     buttonText: {
        fontSize: 12,
        color: '#fff',
         textAlign: 'center',
        fontWeight: 'bold'
    },
    fazerPedido: {
        paddingTop: 90,
    },
    label: {
        fontSize: 18,
        paddingBottom: 20,
    },
    containerNMesa: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    inputStyle: {
        textAlign:'center',
        padding: 30,
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    },
    inputNumero: {
        textAlign:'center',
        alignSelf:'flex-end',
        width: '40%',
        padding: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    },
    enviarButton: {
        marginTop: 50,
        alignSelf: 'center',
        width: 100,
        padding: 10,
        backgroundColor: '#FF0000',
        borderRadius: 10,
    },
    listStyle: {
        paddingTop: 40
    },
    listItem: {
        padding: 10,
        marginBottom:8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc' 
    }
});
  
export default styles;