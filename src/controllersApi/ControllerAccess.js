import fetch from 'node-fetch';


async function controllerAccess(endpoint) {
  try {
    const resFetch = await fetch(`https://swapi.dev/api/${endpoint}`);
    return await resFetch.json();
  } catch (error) {
    throw error
  }

};

export default controllerAccess
