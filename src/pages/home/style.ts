import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black_light,
    },
    imageContainer:{
        alignItems: 'center',
        marginVertical: 20
    },
    title:{
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 60
    },
    recordArea:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    recordButtonContainer:{
        marginTop: 50,
    },
    iconButtonContainer:{
        backgroundColor: '#3A3A3A',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    },
    input:{
        alignSelf: 'center',
        backgroundColor: '#3A3A3A',
        padding: 20,
        width: '80%',
        borderRadius: 10,
        marginTop: 50,
        color: 'white',
        maxHeight: 120,
    },
    responseContainer:{
        alignSelf: 'center',
        backgroundColor: '#3A3A3A',
        padding: 20,
        width: '80%',
        borderRadius: 10,
        marginTop: 30,
        color: 'white',
        maxHeight: 200,
    },
    response:{
        color: 'white',
        fontSize: 18
    }
});
