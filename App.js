import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';


export default function App() {
  const[valor1, setValor1] = useState();
  const[valor2, setValor2] = useState();
  const[resultado, setResultado] = useState();
  const[resposta, setResposta] = useState();


  
  

  function dividir(){
   let diferenca = (parseFloat(valor1) / parseFloat(valor2));
   setResultado (diferenca.toFixed(2));

    if(diferenca <= 0.70){
       setResposta("Abasteça com álcool");
    }else{
      setResposta("Abasteça com gasolina");
    }
  } 

  //faltando a mascara
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Álcool, ou gasolina?</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do litro do alcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do litro da gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
          >
            <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textoResultado}>
            <Text style={styles.textoBloco}>Resultado: {resultado} {resposta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:30,
    color: '#39b1b8',
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  textoResultado:{
    marginLeft:`03%`,
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#39b1b8',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});