# Hotel-nexus

***
## Integrantes: 
  * Alejandro Peñaranda Agudelo - 1941008
  * Alejandro Escobar Tafurt - 1941378
  * Juan Camilo Santa Gomez - 1943214
  * Diego Fernando Chaverra Castillo - 1940322
***
## Pipeline

Consta de tres partes principales: Desarrollo del Código, Integración Continua y Despliegue Continuo. 

Comenzando con el Desarrollo del Código, despues de realizar un push a un repositorio de GitHub, ya sea al repositorio que  contiene el código del frontend o el backend, el código del repositorio pasa por una serie de procesos de prueba y verificación.

En la siguiente etapa, la Integración Continua, primero se ejecutan pruebas unitarias para asegurarnos de que cada parte del código funcione correctamente por sí sola. 

Luego, se ejecutan las pruebas de integración. Estas pruebas verifican que todas las partes del código trabajen juntas de manera armoniosa y sin conflictos. Tanto si las pruebas pasan exitosamente o si fallan, por medio de la aplicación Slack se notifica a los miembros del equipo de trabajo.

Además, en esta etapa de Integración Continua, también realizamos el proceso de refactorización del código, donde optimizamos y mejoramos su calidad y eficiencia. Si llegase a haber un error se solucionaría.

Después de pasar exitosamente por las pruebas de integración, el código se envía al repositorio principal por medio de un trigger, que actúa como una versión estable y confiable de nuestra aplicación.

Desde el repositorio principal, utilizamos una imagen almacenada en DockerHub para la ejecución de las pruebas funcionales. Estas pruebas las ejecutamos en un contenedor para verificar que nuestra aplicación no sea dependiente de la máquina del usuario.

Finalmente, cuando las pruebas funcionales son exitosas, llegamos a la etapa del Despliegue Continuo.  Aquí, el código se implementa en un entorno de producción, utilizando servicios de Amazon Web Services (AWS) como Serverless, Lambda y Amplify. Estos servicios nos permiten desplegar nuestra aplicación de manera eficiente y escalable.

Una vez que la aplicación está en funcionamiento, utilizamos herramientas de monitoreo para supervisar su rendimiento y estado. Esto nos permite detectar y solucionar cualquier problema que pueda surgir rápidamente.

## Pruebas unitarias y de integracion Backend

Las pruebas unitarias del backend se ejecutan mediante un workflow, el cual se activa cada vez que se abre un pull request dentro del repositorio backend para realizar un merge, ya sea desde una nueva rama de historia
de usuario a la rama develop o de la rama develop a la rama master, este workflow se encarga de preparar un entorno de pruebas, posteriormente ejecuta las pruebas unitarias del modulo test de django y genera un reporte
de coverage el cual es tomado por la herramienta sonarCloud para llevar un monitoreo de la calidad del codigo que se añade al proyecto.

## Pruebas unitarias y de integracion Frontend

Las pruebas unitarias del frontend se ejecutan mediante un workflow, el cual se activa cada vez que se abre un pull request dentro del repositorio frontend para realizar un merge, ya sea desde una nueva rama de historia
de usuario a la rama develop o de la rama develop a la rama master, este workflow se encarga de preparar un entorno de pruebas, posteriormente ejecuta las pruebas unitarias con Jest y la librería testing-library, esta generan un reporte
de coverage el cual es tomado por la herramienta SonarCloud para llevar un monitoreo de la calidad del codigo que se añade al proyecto.
Las principales pruebas realizadas son de renderizado y funcionamiento de botones, entre otros.

## Pruebas funcionales

Las pruebas funcionales del proyecto se realizan mediante un workflow y un script en python, este workflow se ejecuta cada vez que hay alguna modificacion en el frontend o el backend dentro del repositorio principal y se encarga de preparar un entorno de pruebas el cual levanta contenedores de Docker con la imagen del proyecto y dentro de estos se corre el script de pruebas funcionales que esta hecho con la herramienta Selenium.

## Despliegue

Los despliegues del proyecto se realizan mediante un workflow, el cual se activa cada vez que hay alguna modificacion en el frontend o el backend dentro del repositorio principal y todas las pruebas han sido ejecutadas exitosamente, se realiza el despligue (para el backend se utiliza zappa para subir los cambios a una funcion lambda en AWS y para el frontend se suben los cambios a la herramienta amplify en AWS, estos servicios estan vinculado con el repositorio principal)

## Monitoreo

El monitoreo de la aplicacion se divide en 2 partes, preproduccion y produccion, en la primera etapa tenemos todo lo referente a notificaciones en slack cuando las pruebas unitarias o de integracion fallan para tener un conocimiento de los errores en la aplicacion, tenemos el flujo de trabajo en trello para conocer como va el avance de los 2 grupos de trabajo y el burndown chart para saber si estamos atrasados con el desarrollo del proyecto o no. La segunda etapa consiste del monitoreo que nos ofrece amazon tanto para nuestra funcion lambda (el backend) como en amplify (frontend) brindandonos datos de errores, flujo de consultas, actividad, etc. 
