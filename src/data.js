
const pokemons = [];
const requests = [];

for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const prom = fetch(url).then((r) => r.json());
  
    requests.push(prom);
}

new Promise((resolve) => {
    Promise.all(requests)
    .then((proms) =>
        proms.forEach((p) => pokemons.push({
            id: p.id,
            name: p.name,
            height: p.height,
            weight: p.weight,
            type: p.types[0].type.name,
            ability: p.abilities[0].ability.name
        }))
    )
    .then(() => resolve(pokemons));
});

export default pokemons;
