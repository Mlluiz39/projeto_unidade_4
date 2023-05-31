import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Axios from 'axios'
import * as ImagePicker from 'expo-image-picker'

export default function ProductRegister() {
  const [name, setName] = useState('')
  const [code, setCode] = useState(Number)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(Number)
  const [path, setPath] = useState('')

  const navigation = useNavigation()

  async function handleRegisterProduct() {
    const data = {
      name,
      code,
      category,
      description,
      price,
      path,
    }

    try {
      await Axios.post('http://localhost:3000/products', data)
      navigation.navigate('Home')
    } catch (error) {
     alert('Erro ao cadastrar produto')
    }
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setPath(result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageProduct}
          source={{ uri: path ? path : null }}
        />

        <TouchableOpacity onPress={pickImage}>
          <Text style={{ color: 'blue', fontSize: 16 }}>Escolher imagem</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Nome do produto"
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Código"
        onChangeText={setCode}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Categoria"
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Descrição"
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Preço"
        onChangeText={setPrice}
      />

      <TouchableOpacity style={styles.buttonRegister}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}
          onPress={handleRegisterProduct}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageProduct: {
    width: 200,
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    marginTop: 10,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 8,
    height: 50,
  },
  buttonRegister: {
    marginTop: 30,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 16,
  },
})
