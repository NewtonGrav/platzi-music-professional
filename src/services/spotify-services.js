import config from "./../config";

var services = {}

services.getTokenResponse = async () => {
  let urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  let authorizationEncode = window.btoa(`${config.spotifyClientId}:${config.spotifyClientSecret}`)

  let res = await fetch(process.env.VUE_APP_TOKEN_URL, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${authorizationEncode}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: urlencoded
  })

  return res
}

services.searchTracks = async (q) => {
  let url = `${config.urlSpotifyApi}search?q=@q&type=track&market=US&limit=50`
  url = url.replace("@q", q)

  let res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token") || ""
    }
  })

  return res.json()
}

// TODO fix
services.searchTrackById = async (id) => {
  let url = `${config.urlSpotifyApi}tracks/${id}`

  let res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token") || ""
    }
  })

  return res.json()
}

export default services
