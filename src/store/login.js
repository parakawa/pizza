export const state = () => ({
    email: 'paty@paty.com',
    pass: '123',
  })
  
export const mutations = {

}

export const actions = {
    validateEmailandPass({ state, commit }, {email, pass}) {
        return state.email == email && state.pass == pass
    }
}