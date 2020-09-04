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
  let url = process.env.VUE_APP_API_URL + "search?q=@q&type=track&market=US"
  url = url.replace("@q", q)

  let res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token") || ""
    }
  })

  console.log("Rest: ", res);
  return res.json()
}

// searchTrackById

export default services
