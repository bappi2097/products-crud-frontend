import axios from "axios";
export default ({
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {
    //
  },
  actions: {
    async signIn(_, credentials){
      let response = await axios.post('auth/login', credentials);
      console.log(response.data);
    }
  },
});
