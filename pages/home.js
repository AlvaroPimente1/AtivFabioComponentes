import React from "react";
import { SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, View } from "react-native";

export default function Home({navigation}){

    return(
        <SafeAreaView style={styles.conteiner}>
            <TouchableOpacity  style={styles.button}
                onPress={() => navigation.navigate('To Do List')}
            >
                <Text style={styles.textButton}>Atividade to do list</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.button}
                onPress={() => navigation.navigate('Lista de receitas')}
            >
                <Text style={styles.textButton}>Atividade de receitas</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",    
        backgroundColor: '#5946B2',
    },
    button: {
        marginVertical: 30,
        backgroundColor: '#7F77D3',
        paddingHorizontal: 12,
        paddingVertical: 5, 
        borderRadius: 20
    },


    textButton: {
        fontSize: 25,
        color: '#FFF'
    }
})