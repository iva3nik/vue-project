import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailure(state) {
    state.isSubmitting = false
  },
}

const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          console.log(response)
          context.commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch((err) => {
          context.commit('registerFailure', err.response.data.errors)
          console.log(err)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
