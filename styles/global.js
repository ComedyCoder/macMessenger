import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'coral',
        padding: 20
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        color: 'white'
    },
    logoText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20
    },
    input:{
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 30,
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    loginButton:{
        height: 32,
        marginRight: 50,
        marginLeft: 50,
        marginBottom:20,
        marginTop: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 3,
       
    },
    loginButtonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    registerButton: {
        alignSelf: "center",
        marginBottom: 20,
        padding: 4,
    },
    registerText: {
        color: '#eee',
        fontWeight: 'bold',
        fontSize: 13,
    },
    modalToggle:{
        marginBottom: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        backgroundColor: 'coral',
        color: 'white',
        borderRadius: 100,
        alignSelf: "center",
    },

})


