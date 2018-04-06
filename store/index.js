import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      indexedUser: 0,
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
        },
        {
          name: 'Ben Allen',
          img: '/profile3.jpg',
          location: 'Boston',
          bio:
            'Bacon nerd. Freelance twitter practitioner. Social media nerd. Pop culture junkie. Proud alcohol advocate. Food geek.',
          following: 140,
          followers: 789,
          photos: 32,
          days: 5,
          trips: ['Honolulu', 'Peru', 'San Francisco']
        },
        {
          name: 'Jill Fernandez',
          img: '/profile4.jpg',
          location: 'Seattle',
          bio:
            'Prone to fits of apathy. Writer. Devoted gamer. Web scholar. Hipster-friendly music advocate. Problem solver. Student. Twitter fanatic.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
        },
        {
          name: 'Cynthia Obel',
          img: '/profile5.jpg',
          location: 'Kentucky',
          bio:
            'Producing at the fulcrum of modernism and purpose to craft an inspiring, compelling and authentic brand narrative. My opinions belong to myself.',
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ['Honolulu', 'Tokyo', 'Osaka']
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
    getters: {
      selectedUser: state => {
        return state.users[state.indexedUser]
      }
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
      },
      changeUser(state, i) {
        state.indexedUser = i
      }
    }
  })
}

export default createStore
