import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { elevation } from '../common/styles'

const CategoryItem = ({ name, imageUrl, index, active, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, elevation, index === 0 ? { marginLeft: 25 } : { marginLeft: 15 }, active ? { backgroundColor: 'rgb(241,186,87)' } : { backgroundColor: 'white' }]}>
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={imageUrl} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 35,
    height: 35
  },
  imagecontainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 5
  },
  header: {
    fontWeight: 'bold',
    fontSize: 12
  }
})