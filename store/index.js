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
          bio:
            'Had a brief careerwith jack-in-the-boxes in Phoenix, AZ. Spent several months managing squirt guns and implementing toy elephants.',
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
