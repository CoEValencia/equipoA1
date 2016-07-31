# equipoA1

![alt tag](https://github.com/CoEValencia/equipoA1/blob/master/UX/chirr-screenshot.png)

## Instrucciones
Clonar el proyecto:
```
git clone https://github.com/CoEValencia/equipoA1.git
```
Importar el proyecto chirr en Eclipse.

### Base de datos
Usando el MySQL del entorno Devon ```entornoFwk```, crear el siguiente esquema y usuario:
```
create schema tutorial;
use tutorial;
create user 'tutorial'@'localhost' identified by 'tutorial';
grant all privileges on tutorial.* to 'tutorial'@'localhost';
flush privileges;
```
Ejecutar el script de creación de tablas y datos iniciales:
```
source equipoA1\chirr\src\main\resources\sql\script_chirr.sql
```
El datasource ya está incluido en el contexto de la aplicación.

### Ejecución
Arrancar el proyecto con un servidor Apache Tomcat 7.0. Se podrá acceder en [localhost:8080/chirr/]

Los usuarios existentes inicialmente son: ```admin/admin``` y ```demo/demo```.

[localhost:8080/chirr/]: <http://localhost:8080/chirr/>
