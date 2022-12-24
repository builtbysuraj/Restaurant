import { useState } from "react"
import yelp from "../api/yelp"

export default () => {
  const [restults, setResults] = useState({
    data: null,
    loading: false,
    error: null
  })

  const searchRestaurants = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term,
          location: 'Toronto'
        }
      })
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null
      })
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong'
      })
    }
  }
  return [restults, searchRestaurants];
}