import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#457b9d',
        borderRadius: 5,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 5,
    },
    item: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});