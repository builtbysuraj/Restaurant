import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer xDn_dG84s8HpYUJ9MjlUMfrCp8D0bT4zAjmZvZQ_EQ2KqM_NocITCeejYXsaBCT-QdvJ1LEjbEFRpZQGaxqSA7OxwCITYSzNjqEYXLA8Lpc3t9u8S0nIX95zzwSfY3Yx"
  }
})