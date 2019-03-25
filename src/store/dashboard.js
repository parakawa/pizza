export const state = () => ({
    sidebar: {
    	visible: true,
    }
  })
  
export const mutations = {
    updateSidebar(state,options) {
    	state.sidebar = Object.assign({}, options)
    }
}

export const actions = {
	updateSidebar ({ commit }, options) {
		commit('updateSidebar', options)
	},
}