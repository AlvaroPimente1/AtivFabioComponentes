import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';

export default function ListaAtividades() {
    const [listaItems, setListaItems] = useState([]);
    const [inputAtiv, setInputAtiv] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [date, setDate] = useState('');
    
    const addItemToList = () => {
    setListaItems([
            ...listaItems, 
            `Nome da atividade:\n${inputAtiv}\n\nDescrição:\n${inputDescricao}\n\nData de Conclusão:\n${date}`
        ]);
}

    const limparLista = () => {
        setListaItems([]);
    }

    return (
    <SafeAreaView style={styles.conteiner}>
        <Text style={styles.titulo}>Lista de atividades</Text>
        <TextInput
            value={inputAtiv}
            onChangeText={setInputAtiv}
            style={styles.input}
            placeholder={'Nome da atividade'}
            placeholderTextColor={"#FFF"}
        />

        <TextInput
            value={inputDescricao}
            onChangeText={setInputDescricao}
            style={styles.input}
            placeholder={'Descrição da atividade'}
            placeholderTextColor={"#FFF"}
        />
        
        <TextInput
            value={date}
            onChangeText={setDate}
            style={styles.input}
            placeholder={'Data de conclusão'}
            placeholderTextColor={"#FFF"}
        /> 

        <FlatList
            data={listaItems}
            renderItem=
            {({ item }) =>
            <View>
                <Text style={styles.item}>
                    {item}
                </Text>
                <View style={styles.line}/>
            </View>
            }
        />
        <Button
            title='Adicionar'
            onPress={addItemToList} 
        />
        <View style={{marginTop:2, marginBottom: 2}}/>
        <Button
            title='Limpar'
            onPress={limparLista}
        />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#5946B2"
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },

    subtitulo: {
        fontSize: 25,
        justifyContent: 'center',
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold'
    },

    input: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#7F77D3',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        paddingLeft: 10,
        color: "#FFF"
    },

    item: {
        padding: 10,
        fontSize: 15,
        color: "#FFF"
    },

    line: {
        width: '100%',
        backgroundColor: '#000',
        height: 1.5
    },

    button: {
        marginTop: 2
    }
});