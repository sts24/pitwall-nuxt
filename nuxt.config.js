import axios from 'axios'

export default {
  target: 'static',
  mode: 'spa',
  head: {
    title: 'The Pitwall',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  loading: { color: '#fff' },
  plugins: [],
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
        'assets/css/pitwall.scss'
    ]
},
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  },

  generate: {
    routes () {
      return axios.get('https://ergast.com/api/f1/seasons.json?limit=1000')
        .then((res) => {
          return res.data.MRData.SeasonTable.Seasons.map((year) => {
            return {
              route: '/' + year.season,
              payload: year.season
            }
          })
        })
    }
  }
}
