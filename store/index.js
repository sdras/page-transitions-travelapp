import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      users: [
        {
          name: 'Sophia Gonzalez',
          img: '/profile2.jpg',
          location: 'San Francisco',
          bio: 'Guerilla art projects and consumer reports',
          following: 789,
          followers: 2748,
          photos: 94,
          days: 32,
          trips: ['Burmuda', 'Los Cabos', 'San Antonio']
        }
      ]
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore
