import React, {useState, setState} from "react";
import {View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker'
import MyDatePicker from './js/tempo.js'
import {style} from './css/css'
var sexo = [
    {label:'Masculino', value: 0 },
    {label: 'Feminino', value: 1 },
    {label: 'Outro', value: 2}
  ];
export default function cadastro(props){  
    const [display, setdisplay]= useState('none') 
    return(
        <SafeAreaView style={style.safe}>
            <ScrollView>
                <View style={style.head}>
                    <Text style={style.titulo}>Criar Conta</Text>
                </View>
                <View style={style.formulario}>
                     <Text style={style.formtitulo}>Nome</Text>
                     <TextInput style={style.forminput} placeholder="Insira seu Nome Completo"></TextInput>
                     <Text style={style.texterror(display)}>Nome Incorreto: nao pode ter caracteres especiais/numeros</Text>
                     <Text style={style.formtitulo}>Nome de usuario</Text>
                     <TextInput style={style.forminput} placeholder="Username"></TextInput>
                     <Text style={style.texterror(display)}>Nome de usuario invalido: nao pode contar caracteres especiais</Text>
                     <Text style={style.formtitulo}>E-mail</Text>
                     <TextInput style={style.forminput} placeholder="Insira Seu Email"></TextInput>
                     <Text style={style.texterror(display)}>Email invalido: tem que conter o '@' e sem espaço</Text>
                     <Text style={style.formtitulo}>Senha</Text>
                     <TextInput style={style.forminput} placeholder="Senha(minimo de 6 caracteres)"></TextInput>
                     <Text style={style.texterror(display)}>Senha invalida: precisa no minimo 6 caracteres</Text>
                     <Text style={style.formtitulo}>Confirmar Senha</Text>
                     <TextInput style={style.forminput} placeholder="Escreva novamente Sua Senha"></TextInput>
                     <Text style={style.texterror(display)}>Senha nao correspondendo</Text>
                     <View style={style.formradio}>
                      <Text style={style.tituloradio}>Gênero</Text>
                    <RadioForm radio_props={sexo} onPress={() => {} } initial={-1}  formHorizontal={true} buttonColor = {'#FFB703'}  buttonSize ={8}/>
                    <Text style={style.texterror(display)}>Por favor escolha 1</Text>
                    <Text style={style.titulodata}>Data de Nascimento</Text>
                     <View style={style.formdata}>
                     <TextInput keyboardType = 'numeric' maxLength={2} style={style.numberdata} ></TextInput><Text style={style.barrinha}> / </Text><TextInput keyboardType = 'numeric' maxLength={2}  style={style.numberdata}></TextInput><Text style={style.barrinha}>/</Text><TextInput keyboardType = 'numeric' maxLength={4} style={style.number_data}></TextInput>
                     </View>
                     </View>
                     <View style={style.formbutao}>
                     <TouchableOpacity style={style.butao} onPress={() =>props.navigation.navigate('login')}>
                             <Text style={style.btntext}>Começar a aprender</Text>
                    </TouchableOpacity>
                     <View style={style.formentrar}>
                     <Text style={style.textconta}>Ja tem uma conta?</Text>
                         <TouchableOpacity style={style.btnentrar} onPress={() =>props.navigation.navigate('login')}><Text style={style.textentrar}>Entrar</Text></TouchableOpacity>
                         </View> 
                     </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
