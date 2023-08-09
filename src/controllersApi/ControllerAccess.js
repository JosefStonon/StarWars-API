import fetch from "node-fetch";

async function fetchApi(req, res) {

  const feth = await fetch(`https://swapi.dev/api/people`);

  const data = await feth.json();
return data
}

export default fetchApi;