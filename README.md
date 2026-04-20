URL construida:
https://pokeapi.co/api/v2/pokemon/ditto

Método HTTP utilizado:
GET

Status code:
200 OK

Estructura general del JSON:
Objeto con información del Pokémon:

id
name
height
weight
types[]
abilities[]
sprites{}

Propiedades relevantes para mostrar en una interfaz:

name (nombre)
id (número)
sprites.front_default (imagen)
types[].type.name (tipo)
abilities[].ability.name (habilidades)
