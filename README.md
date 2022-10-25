# user-verificator

# Dependencias instaladas:

* Express: Usado para crear una API, encargado de detalles vitales del backend, como las sesiones, gestion de errores y enrutamiento.

* Dotenv: Utilizado para manejar eficientemente las variables de entorno.

* Nodemon: Sirve para vigilar el sistema de archivos y reiniciar automaticamente el proceso al detectar un cambio.

* Jest: Libreria utilizada para escribir y ejecutar test.

* esLint: es un linter que filtra nuestro codigo javascript/typescript con el objetivo de escribir un codigo mas limpio/optimo, bajo X normas

* Webpack: Sirve para gestion de modulos y tambien es usado para concatenacion de codigo, minimizacion y ofucacion.

* Cors: Sirve para controlar los accesos HTTP, dando o denegando acceso a ciertas rutas

* Helmet: Sirve para establecer cabeceras HTTP relacionadas con la seguridad.

# Variables de entoro:

PORT: Es la variable de entorno que utilizamos para indicarle a la app que puerto usar.

# Scrips creados:

* start: ejecutamos con node la direccion seleccionada.

* build: Sirve para transpilar el codigo ts a js.

* dev: sirve para observar los cambios en el repositorio y al detectarlos ejecutar el script build para transpilar y finalmente ejecutar nodemon para ejecutar la carpeta en la que es transpilado el ts.

* test: Ejecuta los tests con jest.

* serve:coverage: 

