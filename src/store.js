const axios = require('axios')
module.exports = {
  guardarFicha: async (payload) => {
    const {data} = await axios.default.post(
      'http://localhost:4000/fichas',
      payload
    );
    return data;
  }
}