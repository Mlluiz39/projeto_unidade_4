import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'

export default function Home() {
  const [products, setProducts] = useState([])
  const route = useRoute()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await Axios.get('http://localhost:3000/products')
      setProducts(data)
    }

    loadProducts()
  }, [route.params?.data])

  const navigation = useNavigation()

  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc
    }
    return `${desc.substring(0, 25)} ...`
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 16 }}>Controle de Estoque</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={{ fontSize: 14, color: 'blue', fontWeight: '500' }}>
            Adicionar produto
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.textInput} placeholder="Encontrar produto" />

      <FlatList
        style={styles.imageView}
        keyExtractor={(item, index) => item.id.toString()}
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerProduct}
            onPress={() => navigation.navigate('Editar', { product: item })}
          >
            <Image
              style={{ width: 100, height: 100, margin: 10 }}
              source={{ uri: item.path ? item.path : null }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.txtTitle}>{item.name}</Text>
              <Text style={styles.txtInput}>Código produto: {item.code}</Text>
              <Text style={styles.txtInput}>Categoria: {item.category}</Text>
              <Text style={styles.txtInput}>
                Descrição: {filterDesc(item.description)}
              </Text>
              <Text style={styles.txtInput}>Preço: R$ {item.price}</Text>
            </View>
            <View style={{ flexDirection: 'column' }}></View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 16,
    marginBottom: 3,
    marginTop: 5,
  },
  txtInput: {
    fontSize: 12,
    marginBottom: 3,
    fontWeight: '300',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  imageView: {
    width: '100%',
  },
  containerProduct: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
  },
})
