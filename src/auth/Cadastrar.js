import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/auth";

console.disableYellowBox = true;

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { cadastrar } = useContext(AuthContext);

  async function Cadastrar() {
    cadastrar(email, password, nome);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/atomo.png")}
        style={styles.img}
        accessible={true}
        accessibilityLabel="Imagem do átomo"
        accessibilityHint="Esta é a imagem de um átomo"
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setNome(text)}
        value={nome}
        placeholder="Digite seu Nome"
        accessible={true}
        accessibilityLabel="Campo de nome"
        accessibilityHint="Digite aqui seu nome completo"
        accessibilityRole="text"
        accessibilityAutoFocus={true}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Digite seu e-mail"
        accessible={true}
        accessibilityLabel="Campo de e-mail"
        accessibilityHint="Digite aqui seu e-mail"
        accessibilityRole="text"
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Crie sua senha"
        secureTextEntry={true}
        accessible={true}
        accessibilityLabel="Campo de senha"
        accessibilityHint="Digite aqui sua senha"
        accessibilityRole="text"
      />

      <TouchableOpacity onPress={Cadastrar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTxt}>Cadastrar</Text>
        </View>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35aafc",
  },
  img: {
    width: 150,
    height: 150,
    marginTop: -100,
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "transparent",
    margin: 10,
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  btnArea: {
    margin: 10,
    padding: 10,
    width: 300,
    height: 50,
    backgroundColor: "#3095db",
    borderRadius: 5,
  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
  },
});
