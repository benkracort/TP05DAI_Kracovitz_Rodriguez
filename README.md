# Parte 1

**¿Cómo dedujeron la estructura de las URLs?**<br>
La mayoria fueron prueba y error jugando con el link a ver si devolvia algo y volviendo a ver la teoria de "HTTP ¿Que es?"<br>

**¿Qué devuelve cada endpoint?**<br>
Obtener por Nombre: devuelve toda la información del Pokemón en base a su nombre<br>
Obtener por ID: devuelve toda la información del Pokemón en base a su ID<br>
Lista limitada: devuelve una lista limitada de x pokemones segun el parametro que le envies<br>
Obtener por Tipo: devuelve todos los pokemones de ese tipo<br>
Error: un error 404<br>

**¿Qué ocurre ante un error?**<br>
Devuelve el tipo de error con su descripcion<br>

# Parte 2
**Endpoints utilizados**<br>
Unicamente fueron utilizados los de obtener por nombre y error<br>
**Estructura del proyecto**<br>
Es un simple proyecto de HTML, CSS y JavaScript en el que el usuario envia un pokemon por parametro y el JavaScript verifica si ese pokemon existe y si existe lo muestra.<br>
**Decisiones tomadas**<br>
?<br>
**Dificultades encontradas**<br>
Solamente nos parecio un tanto dificil la parte del JavaScript con el uso de fetch y a la hora de mostrar los datos del pokemon, pero no tanto.<br>
