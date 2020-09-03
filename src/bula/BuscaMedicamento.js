import React, { useState, createContext, Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import PDFReader from 'rn-pdf-reader-js'
import base64 from 'react-native-base64'
import utf8 from 'utf8'

class BuscaMedicamento extends Component{

    constructor(props){
        super(props);
        this.state = {
            htmlMedicamento: null,
            apoio: [],
            apoioBula: [],
            medicamento: [],
            numBula: [],
            bula: ''
        };
        this.aleatorio = this.aleatorio.bind(this);
    }

    async aleatorio(){
        //async componentDidMount(){

      //  }
        let params = new URLSearchParams();
        params.append('txtMedicamento', 'paracetamol');
        params.append('txtEmpresa', '');

        const response = await axios({
            method: 'POST',
            url: 'http://www.anvisa.gov.br/datavisa/fila_bula/frmResultado.asp',
            data: params,
        });
        this.setState({
            htmlMedicamento: response.data
        })

        try{
            const cheerio = require('react-native-cheerio');
            const $ = cheerio.load(this.state.htmlMedicamento)

            console.log('deu certo')
            let medicamentos = [];
            let i = 0;
            $('td').each (function() {
                medicamentos[i] = $(this).text();
                i += 1;
            });       
            i = 0;
            medicamentos.map( (medicamentoss) =>{
                this.state.apoio.push(medicamentoss.trim())
            })
            
            console.log(this.state.apoio);
            this.setState({
                medicamento: this.state.apoio
            });

            let numBulas = [];
            let limpar = '';
            $("#tblResultado > tbody > tr > td > a").each(function(){
                limpar = $(this).attr("onclick");
                limpar = limpar.substr(17,22);
                numBulas[i] = limpar;
                i += 1;
            })
            i = 0;
            console.log(numBulas);
            numBulas.map( (numBulass) =>{
                this.state.apoioBula.push(numBulass.trim())
            })

            //console.log(this.state.apoioBula[5].substr(1,9));
           // console.log('fim');
            this.setState({
                numBula: this.state.apoioBula
            });

            let numeros = this.state.apoioBula[3];
            numeros = numeros.split(',');
            numeros[0] = numeros[0].replace("'", '');
            numeros[0] = numeros[0].replace(' ', '');
            numeros[1] = numeros[1].replace("'", '');
            numeros[1] = numeros[1].replace(' ', '');
            console.log(numeros[0]+', '+numeros[1]);
    
            const response = await axios({
                method: 'POST',
                url: 'http://www.anvisa.gov.br/datavisa/fila_bula/frmVisualizarBula.asp',
                data: 'pNuTransacao='+parseInt(numeros[0])+'&pIdAnexo='+parseInt(numeros[1]),
                ContentType: 'x-www-form-urlendcoded'
            });

            let bulaCompleta = '';
            bulaCompleta = response.data;
            //console.log(bulaCompleta);c
            bulaCompleta = utf8.encode(bulaCompleta);
            //console.log(bulaCompleta);
            this.setState({
                bula: base64.encode(bulaCompleta)
            });
            console.log(this.state.bula)
            console.log("fim")


        }catch(err){

        }
        return true; 
    }
  //  }
  
    render(){

        return(
            <View>
                <PDFReader
                    source={{
                        uri: 'file:/// Armazenamento interno/bula.pdf'
                    }}
                />
                <TouchableOpacity onPress={this.aleatorio}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTxt}>
                            Cadastrar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#35aafc',
    },
    btnArea: {
      margin: 10,
      padding: 10,
      width: 300,
      height: 50,
      backgroundColor: '#3095db',
      borderRadius: 5,
    },
    btnTxt: {
      color: '#fff',
      textAlign: 'center',
      paddingTop: 5,
    }
  });

export default BuscaMedicamento;