import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Axios from 'axios'
import * as ImagePicker from 'expo-image-picker'

export default function ProductView() {
  const [name, setName] = useState('')
  const [code, setCode] = useState()
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [path, setPath] = useState('')
  const [id, setId] = useState('')

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    const { product } = route.params

    setName(product.name)
    setCode(product.code.toString())
    setCategory(product.category)
    setDescription(product.description)
    setPrice(product.price.toString())
    setPath(product.path)
    setId(product.id)
  }, [])

  async function handleEditProduct() {
    const data = {
      name,
      code,
      category,
      description,
      price,
      path,
    }

    try {
      if (!name || !code || !category || !description || !price || !path) {
        alert('Preencha todos os campos')
        return
      }
      await Axios.patch(`http://localhost:3000/products/${id}`, data)
      alert('Produto editado com sucesso')
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

  async function deleteProduct(id) {
    try {
      await Axios.delete(`http://localhost:3000/products/${id}`)

      alert('Produto deletado com sucesso')
      navigation.navigate('Home')
    } catch (error) {
      alert('Erro ao deletar produto')
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
          <Text style={{ color: 'blue', fontSize: 16 }}>Alterar imagem</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <TextInput
        style={styles.textInput}
        value={category}
        onChangeText={text => setCategory(text)}
      />
      <TextInput
        style={styles.textInput}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.textInput}
        value={price}
        onChangeText={text => setPrice(text)}
      />

      <TouchableOpacity style={styles.buttonRegister}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}
          onPress={handleEditProduct}
        >
          Editar
        </Text>
      </TouchableOpacity>
      <Button
        title="Delete"
        onPress={() => {
          deleteProduct(id)
        }}
      />
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
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 16,
  },
})
