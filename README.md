## Parte 1

**¿Cómo dedujeron la estructura de las URLs?**
La mayoria fueron prueba y error jugando con el link a ver si devolvia algo y volviendo a ver la teoria de "HTTP ¿Que es?"

**¿Qué devuelve cada endpoint?**
Obtener por Nombre: devuelve toda la información del Pokemón en base a su nombre
Obtener por ID: devuelve toda la información del Pokemón en base a su ID
Lista limitada: devuelve una lista limitada de x pokemones segun el parametro que le envies
Obtener por Tipo: devuelve todos los pokemones de ese tipo
Error: un error 404

**¿Qué ocurre ante un error?**
Devuelve el tipo de error con su descripcion

## Parte 2
**Endpoints utilizados**
Unicamente fueron utilizados los de obtener por nombre y error
**Estructura del proyecto**
Es un simple proyecto de HTML, CSS y JavaScript en el que el usuario envia un pokemon por parametro y el JavaScript verifica si ese pokemon existe y si existe lo muestra.
**Decisiones tomadas**
?
**Dificultades encontradas**
Solamente nos parecio un tanto dificil la parte del JavaScript con el uso de fetch y a la hora de mostrar los datos del pokemon, pero no tanto.