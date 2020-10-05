export const state = () => ({
    authToken: '',
    list: [],
    selected: {}
})

export const mutations = {
    setAuth(state, token) {
      state.authToken = token
    },
    set(state, data){
      state.list = data;
    },
    setProblem(state, data){
      state.selected = data;
    }
  }

export const actions = {
    async login({commit}) {
        await this.$axios.post("https://api-test.comunal.co/session", {
          "email_address": "test_comunal@comunal.co", "password": "Test_Comunal123."
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
            commit('setAuth', res.data.token)
        })
        .catch( () => {
          console.error("Imposible loguearse.")
        })
    },
    async get({commit, state}) {
        let headers = { 
          'Authorization': `Bearer ${state.authToken}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
        await this.$axios.get("https://api-test.comunal.co/problem", {
            headers
          })
          .then((res) => {
              if (res.status === 200) {
                  commit('set', res.data.data)
              }
              else{
                console.error("Imposible obtener problemas")
              }
          })
          .catch( () => {
            console.error("Imposible obtener los problemas.")
          })
    },
    async getProblem({commit, state}, id) {
      let headers = { 
        'Authorization': `Bearer ${state.authToken}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
      await this.$axios.get("https://api-test.comunal.co/problem/"+id, {
          headers
        })
        .then((res) => {
            if (res.status === 200) {
              commit('setProblem', res.data)
            }
            else{
              console.error("Imposible obtener problema")
            }
        })
        .catch( () => {
          console.error("Imposible obtener los problemas.")
        })
  },
}