import Google from '@/services/google'

export const state = () => ({
  store: {
    messages: [],
    page: 1,
    lastQuery: ''
  },
  loading: false
  // engine: 'google'
})

export const mutations = {
  pushMessage(state, message) {
    const time = new Date()

    message.meta = {
      ...message.meta,
      time
    }
    state.store.messages.push(message)
  },
  setLoader(state, status) {
    state.loading = status
  },
  updateLastMessage(state, message) {
    const length = state.store.messages.length - 1

    state.store.messages[length] = Object.assign(
      state.store.messages[length],
      message
    )
  },
  setLastQuery(state, query) {
    state.store.lastQuery = query
  },
  addPage(state) {
    state.store.page = ++state.store.page
  },
  clearPage(state) {
    state.store.page = 1
  }
}

export const actions = {
  init({ state, commit }) {
    if (state.store.messages.length > 0) return
    const welcomeMessage = {
      me: false,
      id: 'welcome-message',
      type: 'lang'
    }

    commit('pushMessage', welcomeMessage)
  },
  async addMessage({ commit, dispatch }, message) {
    commit('pushMessage', message)

    const { text } = message

    // После того как сообщение добавлено в стор, обратимся к воркеру
    await dispatch('searchWorker', text)
  },
  // Валера
  async searchWorker({ commit, state }, searchText) {
    // beta :)
    // todo: добавить поддержку i18n

    // Проверяем, что пользователь может попросить другую страницу
    if (searchText === 'еще' || searchText === 'ещё' || searchText === 'more') {
      if (state.store.lastQuery) {
        commit('addPage')
        searchText = state.store.lastQuery
      } else {
        // если до этого запросов не было
        commit('pushMessage', {
          me: false,
          text: 'Сначала нужно что-то найти',
          type: 'text'
        })
        return
      }
    } else {
      // Если интерес пользователя к запросу прошел, вернемся к 1 странице
      commit('clearPage')
    }

    // Начинаем загрузку и выводим сообщение о загрузке
    commit('setLoader', true)
    const loaderMessage = {
      me: false,
      type: 'loading'
    }
    commit('pushMessage', loaderMessage)
    // Запомним последний запрос
    commit('setLastQuery', searchText)

    // Делаем запрос к Google
    // по заданию только Google,
    // но систему можно расширять
    // todo: добавить другие поисковые системы
    const result = await Google({ q: searchText, start: state.store.page })
    const fetchMessage = {
      me: false,
      ...result
    }

    // Обновляем последнее сообщение, потому что пользователь
    // не сможет отправить сообщение во время загрузки
    await commit('updateLastMessage', fetchMessage)

    // Загрузка завершена
    commit('setLoader', false)
  }
}

export const getters = {
  messages: state => state.store.messages,
  loading: state => state.loading
}
