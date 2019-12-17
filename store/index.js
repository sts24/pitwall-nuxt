/* eslint-disable no-console */
import axios from 'axios'

export const state = () => ({
  f1data: {
    races: [],
    seasons: [],
    driverStandings: [],
    constructorStandings: []
  },
  viewOptions: {
    seasonSelect: '',
    selectedTab: 'races',
    loading: true,
    error: false
  }
})

export const mutations = {
  setSeasons (state, payload) { state.f1data.seasons = payload },
  setRaces (state, payload) { state.f1data.races = payload },
  setDrivers (state, payload) { state.f1data.driverStandings = payload },
  setConstructors (state, payload) { state.f1data.constructorStandings = payload },
  setSeasonSelect (state, payload) { state.viewOptions.seasonSelect = payload },
  setLoading (state, payload) { state.viewOptions.loading = payload },
  setTab (state, payload) { state.viewOptions.selectedTab = payload }
}

export const actions = {
  reverseSort (state) {
    state.state.f1data.races.reverse()
  },
  getData ({ commit }, loadYear) {
    console.log(loadYear)
    // const currentYear = new Date().getFullYear()

    commit('setLoading', true)

    function getRaceData (loadYear) {
      return axios.get('https://ergast.com/api/f1/' + loadYear + '/results.json?limit=1000')
        .then((response) => {
          const races = response.data.MRData.RaceTable.Races
          return races
        })
    }

    function getDriversData (loadYear) {
      return axios.get('https://ergast.com/api/f1/' + loadYear + '/driverStandings.json?limit=1000')
        .then((response) => {
          const driversData = (response.data.MRData.StandingsTable.StandingsLists.length > 0) ? response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings : []
          return driversData
        })
    }

    function getConstructorsData (loadYear) {
      return axios.get('https://ergast.com/api/f1/' + loadYear + '/constructorStandings.json?limit=1000')
        .then((response) => {
          const constructorsData = (response.data.MRData.StandingsTable.StandingsLists.length > 0) ? response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings : []
          return constructorsData
        })
    }

    axios.all([
      getRaceData(loadYear),
      getDriversData(loadYear),
      getConstructorsData(loadYear)
    ])
      .then(axios.spread(function (raceData, driversData, constructorsData) {
        commit('setRaces', raceData)
        commit('setDrivers', driversData)
        commit('setConstructors', constructorsData)
      }))
      .then(function () {
        commit('setSeasonSelect', loadYear)
        commit('setLoading', false)
      })
  }
}
