import React, { Component, useState,useEffect } from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar,ScrollView, Platform,TouchableOpacity, AsyncStorage, YellowBox} from 'react-native';
import styles from './styles/style.js';

import Body from './components/Body';

export default function App() {
  console.disableYellowBox = true; 
  const [estado,setEstado] = useState('leitura');
  const [anotacao,setAnotacao] = useState('');
  const [altera,setAltera] = useState('bla');

  useEffect(()=> {
    // Quando inicializar o app leia a anotação
    (async()=>{
      try{
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setAnotacao(anotacaoLeitura);
    }catch (error){}
    })();
  },[])
  setData = async()=>{
    try{
        await AsyncStorage.setItem('anotacao',anotacao);
    }catch (error){

    }
    alert('tudo ok');
  }
  function atualizarTexto(){
    setEstado('leitura');
    setData();
  }

  if(estado == 'leitura'){
    return(
      <View style={{flex:1}}>
        <View>
          <Text style={styles.headerStyle}>Bloco de notas</Text>
        </View>
        {
          (anotacao != '')?
          <View><Text style={{padding:30}}>{anotacao}</Text></View>
          :
          <View><Text style={{padding:30, opacity:0.4}}>Nenhuma anotação Encontrada ;-(</Text></View>
        }
        <TouchableOpacity onPress={()=>setEstado('atualizando')} style={styles.btnButton}><Text style={styles.btnStyleContent}>+</Text></TouchableOpacity>
      </View>
    )
  }else if(estado == 'atualizando'){
    return(
      <View style={{flex:1}}>
        <View>
        <Text style={styles.headerStyle}>Alterando notas</Text>
        </View>
        <View style={{flex:1}}>
          <TextInput autoFocus={true} onChangeText={(text)=>setAnotacao(text)} style={styles.updateNota} multiline={true} numberOfLines={5} value={anotacao}></TextInput>
        </View>
        <View>
            <TouchableOpacity onPress={()=>atualizarTexto()} style={styles.saveBtn}><Text style={styles.saveTextBtn}>Salvar</Text></TouchableOpacity>
        </View>
    </View>
    )
  }

} 
