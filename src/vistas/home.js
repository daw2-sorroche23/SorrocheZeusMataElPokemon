import { Pokemon } from '../bd/Clasepokemon'
import Swal from 'sweetalert2'
import { User } from '../bd/user'
import { Partida } from '../bd/partidas'

export default {
  template: '<div id="boton"><button type="button" class="btn btn-dark playButton" id="comenzar">Jugar</button></div><audio id="audioElement"><source src="../assets/music.mp3" type="audio/mpeg"></audio>'
  
  
  ,
  script: () => {

    const pokemons = []

    const comenzar = document.querySelector('#comenzar')

    comenzar.addEventListener('click', (event) => {
      window.puntos = 0
      comenzar.remove()

      const temporizador = setInterval(logica(), 10000)
      setTimeout(function () {
        clearInterval(temporizador)

        Swal.fire({
          title: 'Se acabó!!',
          text: 'Has hecho un total de ' + window.puntos + '. ¿Deseas guardar la partida?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#5CFF00',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, guárdala!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const usuario = await User.getUser()
              const usuarioLogueado = await User.getUser()
              if (usuarioLogueado) {
                const partida = {
                  puntos: window.puntos,
                  tiempo: 10,
                  usuario_id: usuario.id
                }
                const guardarPartida = await Partida.create(partida)
                console.log(guardarPartida)
                Swal.fire(
                  '¡Guardado!',
                  'Tu partida ha sido guardada.',
                  'success'
                )
              } else {
                window.location = '#/login'
              }
            } catch (error) {
              console.log(error)
            }
          }
        })
      }, 10000)
    })
    function logica () {
      for (let i = 0; i < 20; i++) {
        const nuevoObjeto = new Pokemon(i)
        pokemons.push(nuevoObjeto)
      }

      pokemons.forEach(pokemon => {
        pokemon.insertaPokemon()
      })
    }

    
    var playButton = document.getElementById("playButton");
    var audioElement = document.getElementById("audioElement");

    playButton.addEventListener("click", function() {
      audioElement.play();
});

  }

}
