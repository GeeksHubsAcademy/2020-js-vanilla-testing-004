# 2020-js-vanilla-testing-004

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


## Temario

* [Automatizando Tests en la nube](https://github.com/GeeksHubsAcademy/2020-js-vanilla-004/blob/master/README.md#)
* [Qué es un SaaS](https://github.com/GeeksHubsAcademy/2020-js-vanilla-004/blob/master/README.md#)
* [Travis-CI](https://github.com/GeeksHubsAcademy/2020-js-vanilla-004/blob/master/README.md#travis-ci)
* [Arquitectura del proyecto](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-004/blob/master/README.md#arquitectura-del-proyecto)
* [Convenio de trabajo](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-004/blob/master/README.md#convenio-de-trabajo)
* [Haciendo una PR al repositorio base](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-004/blob/master/README.md#haciendo-una-pr-al-repo-base-de-geekshubs)
* [Conclusiones](https://github.com/GeeksHubsAcademy/2020-js-vanilla-004/blob/master/README.md#conclusiones)
* [Referencias](https://github.com/GeeksHubsAcademy/2020-js-vanilla-004/blob/master/README.md#referencias)

### Automatizando Tests en la nube
```
Con el paso del tiempo, la evolución del Testing ha crecido mucho. El uso de herramientas para automatizar 
este paso de validación de código ha migrado del escenario local a la nube.

Muchas empresas otorgan servicios online gratuitos/pago para poder tener un entorno de pruebas continuado.
Permite que un proyecto desarrollado por un equipo, pueda sincronizar con un 'push' en git el lanzamiento
de las pruebas de manera automática en la nube.

Éste un paso muy rápido para validar el ciclo de vida de la aplicación y en resumidas cuentas es el inicio de
la integración continua aka CI.
```


### Qué es un SaaS
```
Es el acrónimo de 'Software as a Service'.
Un modelo de negocio que permite dar soporte lógico y de datos a traves de software ubicado en la nube.

Consiste en poder utilizar una aplicación desde nuestro cliente alojada en un servidor central.
Se delega toda la lógica y computación de datos en ésta última.

En resumidas palabras, la ejecución de una aplicación de nuestro local pero en la nube sin tener que
instalar nada y que se integra con otras aplicaciones online.

```

### Travis-CI

```
Es un sistema de Integración Continua, gratuita para proyectos Open-Source y de pago para proyectos privados.
Permite integrar sin problemas GitHub con la automáticamente de un 'pipeline' (test y build) en cada push o 
pull requests que hagamos al repositorio. 

Podemos decir que es una opción similar a Jenkins, pero tiene sus diferencias. No utiliza tareas programadas,
no tiene costos de mantenimiento (es un SaaS <[^_^]>! ) y su configuración es bastante fácil.
```

### Arquitectura del proyecto
```
La paquetería del proyecto ya esta definida por nosotros.

La raiz del repositorio contiene estos elementos:

/test
.gitignore
.travis.yml
package.json
package-lock.json
README.MD

En la carpeta 'test' encontrás 5 ficheros.

package.json
package-lock.json
suite.test.js
test04-toFixed.js
test04-toString.js

A nosotros solo nos interesan 

test04-toFixed.js
test04-toString.js
suite.test.js

El tercer fichero es la suite de Test que debemos de analizar.

 * test('toFixed(123456.52,5)  to equals "123456.52000" )', () => { ... }
 
 * test('toString(789) to equals "789" )', () => { ... }


Los dos primeros ficheros continene las funciones vacías que debemos implementar.

 * function toString(param) { return null; }

 * function toFixed(param,indice) { return null; }
 
```

### Convenio de trabajo
```
El proyecto ya está preparado para usar Travis automáticamente.

Cada alumno debe de tener una rama develop predefinida por el profesor para que puedas hacer PR's en ella.
Esto quiere decir, que si yo me llamo "T-1000", este repositorio debe de tener un rama 'develop_T-1000'.
Ésta servirá para subir los cambios de cada alumno.

A Master no se va poder hacer PR's.
```


### Haciendo una PR al repo base de Geekshubs
```
'Forkeate' el repo para que se genere una copia en tu cuenta local y puedas trabajar desde el mismo.
Arriba a la derecha, pulsa el botón 'Fork'.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/F00.png)


```
Una vez realizada la copia, ya puedes trabajar desde tu repositorio. 
Aplica los cambios necesarios a las funciones :

 * function toString(param) { return [...]  }
 * function toFixed(param,indice) { return [...] } 
 
 Estas deben tener un sentido lógico respecto a la descripción de la suite de Test.
 
 * test('toFixed(123456.52,5)  to equals "123456.52000" )', () => { ... }
 * test('toString(789) to equals "789" )', () => { ... }
 
 
Unas pequeñas observaciones son el input y el output de los tests.
A las funciones siempre entra como input un numerador y obtenemos una String a la salida.
 
Recuedas el termino 'Ingeniería Inversa' ?

Debemos de ser capaces de poder generar hipótesis de resultados simplemente leyendo los
títulos de las cabeceras de los Tests.

Primero diseñamos y luego implementamos.

Para probar si la implementación es correcta, debes de hacer una PR a la rama 'develop_{USER}' 
de GeekshubsAcademy.

Para esta guía he hecho un simple cambio para que hayan diferencias y pueda realizar la PR.
He añadido un 0 a la devolución de la función:

function toString(param) {
	return 0;
}

Pulsamos botón 'New Pull request'.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/PR.png)

```
A continuación visualizamos la comparación de las ramas y buscamos la rama con el convenio 'develop_{USER}'.
Para mi caso de uso es 'develop_vicboma1'.
En caso de que el profesor no haya añadido la rama de nuestro usuario, hay creado un plan b.

Se puede observar una rama 'feature'.
Podéis usarla para hacer la PR sobre dicha rama. 
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/PR_changes.png)


```
Seguidamente, aparecerá un diálogo para efectuar la PR al repositorio de 
GeekshubsAcademy (base) [rama 'develop_vicboma1'] desde nuestro repositorio [ rama 'master'].

Añadimos un título y pulsamos el botón de 'Create pull request'.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/PR_open.png)

```
Automáticamente, aparecerá un diálogo con el check de la disponibilidad del mergeo de la rama.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/102.png)

```
Segundos después, el checking de Travis lanzando en su servidor nuestros 2 tests.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/000.PNG)

```
Posteriormente, aparece el fallo de la ejecución de los Tests.
Si queremos saber el origen del fallo, pulsamos el enlace 'Details'.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/100.PNG)

```
Accedemos a una página que da el reporte de la ejecución.
Buscamos los 'Jobs' (ejecuciones aisladas) de nuestros Test y pulsamos sobre una de ellas.
Esto nos permitirá acceder a la traza de logs del servicio de Travis.
```
![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/2020-js-vanilla-testing-004/101.PNG)

```
Una vez abierta la página de despliegues de Travis, hacemos un poco de scroll hacia abajo 
y observaremos los resultados de los Tests.
```

![](https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/gif/2020-js-vanilla-testing-004/travis-ci.gif)

```
Los errores que nos dice la traza son los siguientes :

	● toFixed(123456.52,5)  to equals "123456.52000" )
	 
	   Expected: "123456.52000"
    	   Received: 0
	 
 	● toString(789) to equals "789" )
	
	   Expected: "789"
	   Received: null
	   
	   
	Test Suites: 1 failed, 1 total
	Tests:       2 failed, 2 total
	Snapshots:   0 total
	Time:        1.048s
	Ran all test suites.
	  

La pull-request la podemos descartar debido a que los Tests no están bien.
Pulsamos el botón 'Close pull request'.

Ahora debemos de iterar en esta secuencia de instrucciones y darle la implementación correcta a 
nuestras funciones.
```


### Conclusiones
```
Participar en un proyecto es una experiencia bastante interesante que permite conocer nuevas personas
y aprender mucho en el proceso. La capacidad de adoptar hábitos desde el inicio del aprendizaje 
es algo muy importante.

Si has llegado hacer una PR y el check de Travis salió en verde, enhorabuena.
Nosotros te mergearemos la rama al repositorio de Geekshubs y contarás con tu primera PR oficial!
Has dado pasitos de gigante!

Si te has quedado por el camino y no llegastes a ver el check de Travis en verde, no te preocupes,
nos ha pasado a todos...  Poquito a poquito.
Solo con haberlo intentado,  ya es una experiencia que nadie te va a quitar.
Con nuestra ayuda lo lograrás!

```


### Referencias
  * [Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html)
  * [SaaS](https://es.wikipedia.org/wiki/Software_como_servicio)
  * [Travis-CI](https://docs.travis-ci.com/user/for-beginners/)

<div>
    <p align="center">
        <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/pixel.png" >	
    </p>
  </div>
  
  <footer>
     <div>
        <a href="https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-003"><< Atrás</a>
         <a href="https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-004/blob/master/README.md#referencias">
        <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/pixel.png" align="center"                  height="10" width="714"/>
         </a>
         <a href="https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-004/blob/master/README.md#referencias">Siguiente >></a>   
    </div>
