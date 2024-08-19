import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SplashScreen: React.FC<any> = ({ navigation }) => {  // Usar "any" aquí para evitar conflictos de tipado
  const handlePress = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
