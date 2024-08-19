import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firestore } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; // Importar las funciones necesarias desde Firestore

const RegisterScreen: React.FC<any> = ({ navigation }) => {  // Usar "any" aquí para evitar conflictos de tipado
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [ingresos, setIngresos] = useState('');

  const handleRegister = async () => {
    try {
      await addDoc(collection(firestore, 'usuarios'), {
        nombre,
        correo,
        edad: parseInt(edad),
        ingresosMensuales: parseFloat(ingresos),
      });
      navigation.navigate('MainScreen'); // Navegar a la pantalla principal después del registro
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput 
        placeholder="Nombre" 
        onChangeText={setNombre} 
        value={nombre} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Correo" 
        onChangeText={setCorreo} 
        value={correo} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Edad" 
        keyboardType="numeric" 
        onChangeText={setEdad} 
        value={edad} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Ingresos Mensuales" 
        keyboardType="numeric" 
        onChangeText={setIngresos} 
        value={ingresos} 
        style={styles.input} 
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;
