import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={[styles.container, elevation]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.price}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    alignSelf: 'stretch',
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: 'gold',
  },
}) 