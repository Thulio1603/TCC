import React, { useState, createContext } from "react";
import firebase from "../firebaseConnection/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function cadastrar(email, password, nome) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            nome: nome,
            email: email,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };
            setUser(data);
          })
          .catch((error) => {
            alert(error.code);
          });
      });
  }

  async function logar(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
            setUser(data);
          })
          .catch((error) => {
            alert(error.code);
          });
      });
  }

  async function sair() {
    await firebase.auth().signOut();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, cadastrar, logar, sair }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
