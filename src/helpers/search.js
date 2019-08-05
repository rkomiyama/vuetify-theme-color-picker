import axios from 'axios'

export async function searchUsername (username) {
  return await axios.get(`https://api.github.com/search/users?q=user:${username}`)
    .then(response => {
      return response.data.items[0].url
    })
    .catch(e => {
      console.error(e)
    })
}

export async function searchFullName (fullname) {
  const name = fullname.replace(/ /g, "+")
  return await axios.get(`https://api.github.com/search/users?q=fullname:${name}`)
    .then(response => {
      return response.data.items[0].url
    })
    .catch(e => {
      console.error(e)
    })
}

export async function searchUserProfile (userUrl) {
  return await axios.get(userUrl)
    .then(response => {
      const {
        name,
        login,
        avatar_url,
        html_url,
        public_repos,
        created_at
      } = response.data
      return { name, login, avatar_url, html_url, public_repos, created_at }
    })
    .catch(e => {
      console.error(e)
    })
}
