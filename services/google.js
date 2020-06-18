// https://www.googleapis.com/customsearch/v1?key={apikey}&cx={sid}&q=query
import axios from 'axios'

const apiUrl = 'https://www.googleapis.com/customsearch/v1'

function resultToSnippet(items) {
  return items.map(({ link, htmlTitle, htmlSnippet, displayLink }) => {
    return {
      link,
      htmlTitle,
      htmlSnippet,
      displayLink
    }
  })
}

export default async ({ q, start = 1 }) => {
  let items = []
  await axios
    .get(apiUrl, {
      params: {
        // All params: https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list
        cx: process.env.GOOGLE_API_SEED,
        key: process.env.GOOGLE_API_SEARCH_KEY,
        cr: 'countryRU',
        // lr: 'lang_ru',
        num: process.env.API_COUNT_RESULTS,
        q,
        start
      }
    })
    .then(({ data }) => (items = data.items))
    .catch(err => ({
      error: err
    }))

  // sleep for loader demonstration
  // not production
  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    type: 'google',
    items: resultToSnippet(items)
  }
}
