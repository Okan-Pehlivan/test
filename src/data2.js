
const pokemonDes = [];
const requests = [];

for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    const prom = fetch(url).then((r) => r.json());
  
    requests.push(prom);
}

new Promise((resolve) => {
    Promise.all(requests)
    .then((proms) =>
        proms.forEach((p) => pokemonDes.push({
            description: p.flavor_text_entries[0].flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ')
        }))
    )
    .then(() => resolve(pokemonDes));
});

export default pokemonDes;
