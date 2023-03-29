import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Alert, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

const data = [
    { key: '1', image: require('../images/marguerita.png'), name: 'Pizza Marguerita', receita: 'INGREDIENTES:\n 1 (copo) de molho de tomate p\n400 g de mussarela, peça inteira.\n5 tomates.\nManjericão a gosto.\nAzeite o quanto baste'},
    { key: '2', image: require('../images/hotphiladelphia.jpg'), name: 'Hot Sushi', receita: 'INGREDIENTES:\n125 g Gohan (Arroz para sushi)\n1 folha alga nori\n1 fatia salmão, aproximadamente 40g\n1 fatia creamcheese, fatia comprida\ncebolinha a gosto\nmolho tare de shoyu doce' },
    { key: '3', image: require('../images/sushicru.jpeg'), name: 'Sushi', receita: 'INGREDIENTES:\n1 pacote de alga\nSalmão fresco\nPepino Japonês\nCream Cheese\nGergelim' },
    { key: '4', image: require('../images/bolofuba.jpg'), name: 'Bolo de Fubá', receita: 'INGREDIENTES:\n1 xícara de leite de coco\n3 ovos caipiras\n1 xícara de açúcar de coco\n1/2 xícara de óleo de coco\n1/2 xcara de coco seco queimado ralado\n1 pirada de sal\n1/2 xícara de bio' },
    { key: '5', image: require('../images/hamburguer.webp'), name: 'Hamburguer', receita: 'INGREDIENTES:\n3 kg de carne moída (escolha uma carne magra e macia)\n300 g de bacon moído\n1 ovo\n3 colheres (sopa) de farinha de trigo' },
    { key: '6', image: require('../images/bolochoco.jpg'), name: 'Bolo de Chocolate', receita: 'INGREDIENTES:\n2 colheres (sopa) de manteiga\n7 colheres (sopa) de chocolate em pó\n2 latas de creme de leite com soro\n3 colheres (sopa) de açúcar'},
    { key: '7', image: require('../images/pizzacalabresa.png'), name: 'Pizza Calabresa', receita: 'INGREDIENTES:\n300 g de linguiça calabresa defumada\nSem casca e em rodelas finas\n2 cebolas em rodelas finas\n1/2 xícara de chá azeitona preta sem caroço\n1 colher de sopa de azeite de oliva\n1 colher de café de orégano' },
    { key: '8', image: require('../images/chocohot.jpg'), name: 'Chocolate quente', receita: 'INGREDIENTES:\n2 xícaras (chá) de leite\n1 colher (sopa) de amido de milho\n3 colheres (sopa) de chocolate em pó\n4 colheres (sopa) de açúcar\n1 canela em pau\n1 caixinha de creme de leite'},
];



export default function Receitas(){
    const [text, setText] = useState('')
    const [list, setList] = useState('')
    const [items, setItems] = useState('')    

useEffect(()=>{
    setList(data)
    setItems(data)    
},[])  
/*   const renderReceita = () =>{
    return(
        <View>
        </View>
    )
  } */

function FiltroBusca(text) {
    const filterList = items.filter((item) => {  
        const itemFilter = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const newText = text.toUpperCase();
        return itemFilter.indexOf(newText) > -1;
    });
        setList(filterList)
        setText(text)
    }    

    const [isHidden, setIsHidden] = useState(true);

    const handlePress = () => {
        setIsHidden(!isHidden);
    };

    const renderItem = ({item}) =>{
        return(
            <View style={styles.lista}>
                <Image source={item.image} style={{ width: 40, height: 40, borderRadius: 15}}></Image>
                <Text style={{fontSize: 18, color: '#fff', marginLeft: 10, paddingVertical: 9}}>{item.name}</Text>
                {isHidden ? null : (
                    <View style={styles.visu}>
                        <Text style={styles.textVisu}>{item.receita}</Text>
                    </View>
                )}
            </View>
        );
    }


    return(
        <SafeAreaView style={styles.conteiner}>
        <Text style={styles.titulo}>Lista de receitas</Text>
        <TextInput
            style={styles.inputText}
            placeholder={'Pesquise a receita que quiser'}
            onChangeText={(t)=>FiltroBusca(t)} value={text}
        />

        <TouchableOpacity style={styles.button}
            onPress={handlePress}
        >
            <Text style={styles.Text}>Visualizar receitas</Text>
        </TouchableOpacity>

        <FlatList
            data={list}
            renderItem={renderItem}
        />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#5946B2"
    },

    inputText: {
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: '#000',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        marginBottom: 5,
        backgroundColor: '#dcdcdc',
        color: '#000'
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },

    lista: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1.5,
        borderColor: "#000",
        backgroundColor: '#7F77D3',
        borderRadius: 5, 
        marginVertical: 3,
        flexDirection: "row"
    },

    Text: {
        fontSize: 18,
        color: '#fff',
        
    },
    image: {
        resizeMode: "contain"
    },

    button: {
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: '#7F77D3',
        paddingVertical: 5, 
        borderRadius: 20,
        color: "#FFF",
    },

    visu: {
        backgroundColor: '#B4A8D4',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5
    },

    textVisu: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#000'
    }
});