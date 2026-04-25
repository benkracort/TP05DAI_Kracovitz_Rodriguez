const inputBuscar = document.getElementById("inputBuscar")
const botonBuscar = document.getElementById("botonBuscar")
const loading = document.getElementById("loading")
const error = document.getElementById("error")
const resultado = document.getElementById("resultado")
const form = document.getElementById("form")

error.style.display = "none"
loading.style.display = "none"

function buscador() {
    const query = inputBuscar.value.trim().toLowerCase()

    if (!validarPokemon(query)) return

    fetchPokemon(query)
}

function validarPokemon(query) {
    if (query === "") {
        mensajeError("Ingresá el nombre de un pokemon")
        return false
    }
    if (/[^a-z0-9\-]/.test(query)) {
        mensajeError("Ingresa un nombre valido")
        return false
    }
    return true
}

async function fetchPokemon(nombre) {
    mensajeLoading()

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                throw new Error(`No se encontró ningún Pokémon llamado "${nombre}".`)
            }
            throw new Error("Ocurrió un error al contactar la API. Intentá de nuevo.")
        }

        const data = await respuesta.json()
        mostrarPokemon(data);

    } catch (err) {
        mensajeError(err.message)
    } finally {
        loading.style.display = "none"
    }
}

function mostrarPokemon(data) {
    error.style.display = "none"

    const nombre = data.name
    const imagen = data.sprites.other["official-artwork"].front_default || data.sprites.front_default
    const tipos = data.types.map(t => t.type.name).join(", ")
    const peso = (data.weight / 10).toFixed(1)
    const altura = (data.height / 10).toFixed(1)

    resultado.innerHTML = `
        <div class="cardPokemon">
            <h1>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h1>
            <img src="${imagen}" alt="${nombre}" class="pokemonImg">
            <p>Tipo(s): ${tipos}</p>
            <p>Peso: ${peso} kg</p>
            <p>Altura: ${altura} m</p>
        </div>
        
        <a href="index.html">Buscar otro Pokémon</a>
    `
    form.style.display = "none"
}

function mensajeLoading() {
    loading.innerHTML = `Cargando...`
    error.style.color = "#ffbb00"
    error.style.fontWeight = "bold"
    loading.style.display = "block"
    error.style.display = "none"
    resultado.innerHTML = ""

}

function mensajeError(mensaje) {
    error.innerHTML = `ERROR - ${mensaje}`
    error.style.display = "block"
    resultado.innerHTML = ""
}