import envVariables from "../config/envVariables";

var services = {}

services.getTokenResponse = async () => {
  let urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  let authorizationEncode = window
    .btoa(`${envVariables.spotifyClientId}:${envVariables.spotifyClientSecret}`)

  let res = await fetch(envVariables.urlAccessToken, {
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
  let url = `${envVariables.urlSpotifyApi}search?q=@q&type=track&market=US&limit=50`
  url = url.replace("@q", q)

  let res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token") || ""
    }
  })

  return res.json()
}

services.searchTrackById = async (id) => {
  let url = `${envVariables.urlSpotifyApi}tracks/${id}`

  let res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token") || ""
    }
  })

  return res.json()
}

export default services
