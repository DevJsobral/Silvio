import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerGeral: {
        height: '100%',
        paddingTop: 30,
        backgroundColor: '#ff0000'
    },
    tituloPagina: {
        alignSelf:'center',
        marginTop: 40,
        marginBottom: 80,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        backgroundColor: '#FFF',
    },
    title: {
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
    },
    containerMesas: {
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    fazerPromocao: {
        paddingTop: 70,
    },
    label: {
        fontSize: 18, 
    },
    containerNMesa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
    },
    inputStyle: {
        textAlign: 'center',
        padding: 30,
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    },
    inputNumero: {
        textAlign: 'center',
        verticalAlign:'top',
        alignSelf: 'flex-end',
        marginRight: 40,
        width: '60%',
        padding: 7,
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    },
    enviarButton: {
        marginTop: 100,
        alignSelf: 'center',
        width: 140,
        padding: 15,
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
    },
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    alertarButton: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 40,
    }
})

export default styles;