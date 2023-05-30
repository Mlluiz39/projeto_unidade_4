import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'
import * as ImagePicker from 'expo-image-picker'

export default function ProductRegister() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const navigation = useNavigation()

  function handleRegisterProduct() {
    api.post('/products', {
      name,
      code,
      category,
      description,
      price,
      image,
    })

    navigation.navigate('Home')

    async function pickImage() {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      console.log(result)

      if (!result.canceled) {
        setImage(result.assets[0].uri)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.imageProduct} />
        <Button title="Escolher imagem" />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Código"
        value={code}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Preço"
        value={price}
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
    marginTop: 60,
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
