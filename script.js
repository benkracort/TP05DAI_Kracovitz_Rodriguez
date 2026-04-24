const inputBuscar = document.getElementById("inputBuscar")
const botonBuscar = document.getElementById("botonBuscar")
const loading = document.getElementById("loading")
const error = document.getElementById("error")
const resultado = document.getElementById("resultado")

botonBuscar.addEventListener("click", buscador)

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
 
    const nombre   = data.name
    const imagen  = data.sprites.other["official-artwork"].front_default || data.sprites.front_default
    const tipos  = data.types.map(t => t.type.name).join(", ")
    const peso = (data.weight / 10).toFixed(1)
    const altura = (data.height / 10).toFixed(1)
 
    resultado.innerHTML = `
        <div class="pokemon-card">
            <img src="${imagen}" alt="${nombre}" class="pokemon-img">
            <h2 class="pokemon-name">${nombre}</h2>
            <ul class="pokemon-info">
                <li><span class="label">Tipo(s):</span> ${tipos}</li>
                <li><span class="label">Peso:</span> ${peso} kg</li>
                <li><span class="label">Altura:</span> ${altura} m</li>
            </ul>
        </div>
    `
}

function mensajeLoading() {
    loading.innerHTML = `Cargando...`
    error.style.color = "#ffbb00"
    loading.style.display = "block"
    error.style.display = "none"
    resultado.innerHTML = ""

}

function mensajeError(mensaje) {
    error.innerHTML = `ERROR - ${mensaje}`
    error.style.color = "#ff0000"
    error.style.display = "block"
    resultado.innerHTML = ""
}