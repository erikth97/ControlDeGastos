import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SplashScreen: React.FC<any> = ({ navigation }) => {
  const handlePress = () => {
    // Navegar a la pantalla de registro o inicio según el estado del usuario
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Control de Gastos</Text>
      <Button title="Nuevo Usuario" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Añadir margen inferior para separar el botón del texto
  },
  button: {
    marginTop: 20, // Añadir margen superior para dar espacio al botón
    paddingHorizontal: 20, // Ajuste de padding para el botón
    paddingVertical: 10,
  },
});

export default SplashScreen;
