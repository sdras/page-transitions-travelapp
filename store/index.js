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
          trips: ['Honolulu', 'Burmuda', 'Los Cabos', 'San Antonio']
        }
      ],
      places: [
        {
          name: 'Honululu',
          stars: 4,
          rating: 8.9,
          img: '/honolulu.jpg',
          description:
            'Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Ko olau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.'
        },
        {
          name: 'Santorini',
          stars: 4,
          rating: 7.8,
          img: '/santorini.jpg',
          description:
            'With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in places, spilling like icy cornices down the terraced rock.'
        },
        {
          name: 'Cusco',
          stars: 3,
          rating: 7.4,
          img: '/peru.jpg',
          description:
            'Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.'
        }
      ]
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      },
      addFollower(state) {
        state.users[0].followers++
      },
      removeFollower(state) {
        state.users[0].followers--
      }
    }
  })
}

export default createStore
