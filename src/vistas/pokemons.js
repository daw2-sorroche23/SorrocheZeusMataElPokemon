import { Perfil } from '../bd/perfil'
import { PokemonS } from '../bd/pokemon'

export default {
  template: `
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5">Perfiles</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Created</th>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Pokedex</th>
        <th>Imagen</th>
      </tr>
    </thead>
    <tbody id="pokemon">
    
    </tbody>
  </table>

      `,
  script: async () => {
    const pokemons = await PokemonS.getAll()
    let tabla = ''
    for (const pokemon of pokemons) {
      tabla += `<tr id="${pokemon.id}">
        <td>${pokemon.created_at}</td>
        <td>${pokemon.nombre}</td>
        <td>${pokemon.tipo}</td>
        <td>${pokemon.pokedex}</td>
        <td style="width: 200px;"><img class="w-100" src="${pokemon.imagen}" alt="Pokemon"></td>
        </tr>`
    }
    const tablaPokemon = document.querySelector('#pokemon')
    tablaPokemon.innerHTML = tabla
  }
}
