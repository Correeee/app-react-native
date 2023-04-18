import React from 'react'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20
    },
    container__div: {
        marginTop: 70,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    container__div_input: {
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: '#1190CB',
        color: '#222'
    },
    listcontainer:{
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    itemcontainer:{
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#1190CB',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },
    item:{
        fontSize: 15,
        fontWeight: 'bold',
    }
});
