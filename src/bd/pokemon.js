// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'

export class PokemonS {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, nombre = null, tipo = null, pokedex = null, created_at = null, imagen = null) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.created_at = created_at
    this.pokedex = pokedex
    this.imagen = imagen
  }

  // leer todos en orden descendiente a como se han creado
  static async getAll () {
    const { data: pokemon, error } = await supabase
      .from('pokemons')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return pokemon.map(({ id, created_at, nombre, tipo, pokedex, imagen }) => {
      return new PokemonS(id, created_at, nombre, tipo, pokedex, imagen)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: pokemon, error } = await supabase
      .from('pokemons')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new PokemonS(pokemon.id, pokemon.created_at, pokemon.nombre, pokemon.tipo, pokemon.pokedex, pokemon.imagen)
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getByUserId (id) {
    const { data: pokemon, error } = await supabase
      .from('pokemons')
      .select('*')
      .eq('user_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new PokemonS(pokemon.id, pokemon.created_at, pokemon.nombre, pokemon.tipo, pokemon.pokedex, pokemon.imagen)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (perfilData) {
    const { error } = await supabase
      .from('pokemons')
      .insert(perfilData)
      .select()
      // console.log('nuevo perfil ',error);
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  //   async update () {
  //     const { error } = await supabase
  //       .from('perfiles')
  //       .update({
  //         nombre: this.nombre,
  //         apellidos: this.apellidos,
  //         avatar: this.avatar
  //       })
  //       .eq('id', this.id)
  //       .single()

  //     if (error) {
  //       throw new Error(error.message)
  //     }
  //     return true
  //   }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('pokemons')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
