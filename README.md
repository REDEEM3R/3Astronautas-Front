## Arrancar servicio NestJS en el puerto 3000. (Default)
## Arrancar servicion AngularJS en el puerto 4200. (Default)

Se configura un archivo `proxy.conf.json` en la raíz del front (AngularJS).

Se configura en el archivo `package.json` el script *'Start'* para que ejecute el enrutamiento por medio del *proxy* para las peticiones HTTP cuando sea ejecutado el comando  npm start.

"start": "ng serve --proxy-config proxy.conf.json"

## Estructura de carpetas en el front (NG).

Carpeta individual para los módulos/componentes y otra para los servicios.

## Ruta para hacer las peticiones HTTP. 

El servicio `PlanetasService` implementa una instancia del módulo *HTTPClient* de Angular para de esta forma con una peticion HTTP por método GET obtener una respuesta del REST API desarrollado en NestJS que escucha en la ruta `localhost:3000/planeta` para devolver el archivo JSON con los datos requeridos para la aplicación.


Estructura de carpetas en el API

Estructura básica de NestJS con un sólo módulo y un único servicio.


##Frontend

# 3astronautas
