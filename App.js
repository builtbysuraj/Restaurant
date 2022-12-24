import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import {View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';

function App() {
  const [term, setTerm] = useState('Burger')
  const commonCategories = [
    {
      name: 'Burger',
      imageUrl: require('./src/assests/images/burger.png')
    },
    {
      name: 'Pizza',
      imageUrl: require('./src/assests/images/pizza.png')
    },
    {
      name: 'Dessert',
      imageUrl: require('./src/assests/images/cake.png')
    },
    {
      name: 'Drink',
      imageUrl: require('./src/assests/images/smoothies.png')
    },
    {
      name: 'Steak',
      imageUrl: require('./src/assests/images/steak.png')
    },
    {
      name: 'Pasta',
      imageUrl: require('./src/assests/images/pasta.png')
    },
  ]

  return (
    <View>
      <Header />
      <Search 
      setTerm = {setTerm}
      />
      <Categories 
        categories={commonCategories} setTerm={setTerm} term = {term}
      />
      <Restaurants term={term}/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App