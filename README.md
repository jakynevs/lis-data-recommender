# LIS Data Recommender

## Visión General del Proyecto

El Recomendador de Datos LIS es una aplicación frontend basada en React diseñada para recomendar productos a usuarios según sus selecciones en varias categorías, subcategorías y colores. Esta aplicación consume una API predefinida para obtener datos y ofrece un proceso de selección intuitivo paso a paso, que culmina en una lista de productos que pueden ser filtrados y ordenados.

## Características

- Recomendaciones de productos paso a paso
- Filtrado dinámico basado en preferencias de usuario
- Ordenación de productos por calificación, precio, entrega gratuita y disponibilidad
- Diseño responsivo para una experiencia sin fisuras en dispositivos

## Cómo Empezar

Para obtener una copia local en funcionamiento, sigue estos simples pasos.

### Prerrequisitos

- Node.js instalado en tu máquina local
- NPM o Yarn para manejar paquetes

### Instalación

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/jakynevs/lis-data-recommender
    ```

2. **Navegar al Directorio del Proyecto**
    ```
    cd LIS-DATA-RECOMMENDER
    ```

3. **Instalar los paquetes de NPM**
    ```
    npm install
    ```

4. **Crear un archivo .env en el directorio raíz y agregar la clave API**
    ```
    REACT_APP_API_KEY=your_api_key_here
    ```


## Ejecutar la Aplicación

Iniciar el servidor de desarrollo:

```
    npm start
```
La aplicación se abrirá en tu navegador web predeterminado en http://localhost:3000.

## Uso

Navega a través de los pasos de la aplicación para seleccionar categorías, subcategorías y colores. El último paso muestra una lista de productos adaptados a tus selecciones, que puedes filtrar y ordenar adicionalmente.

## Estado de Finalización del Proyecto

Este proyecto cumple con éxito todos los requisitos funcionales y no funcionales planteados, con la excepción de las pruebas unitarias y la opción de cambiar el idioma. Aunque el desarrollo de alguna forma de pruebas en el frontend y la localización de idiomas mejoraría la robustez de la aplicación y la experiencia del usuario, estas características se consideraron opcionales y no se han implementado en esta etapa.

### Características Implementadas

- Un sistema de recomendación de productos en múltiples pasos basado en categorías, subcategorías y colores.
- Una lista dinámica de productos con filtros para precio y opciones de envío gratuito.
- Capacidades de ordenación de productos por calificación y precio (ascendente y descendente).

### Consideraciones Futuras

Las siguientes funcionalidades opcionales pueden considerarse para ciclos de desarrollo futuros:

- Agregar pruebas unitarias para asegurar la fiabilidad y estabilidad de la aplicación frontend.
- Implementar la internacionalización para permitir cambiar el idioma en el sitio web.

La decisión de omitir estas características opcionales se tomó para alinearse con el alcance inicial del proyecto y el cronograma. Los esfuerzos se centraron en asegurar una interfaz completamente funcional, bien diseñada y amigable para el usuario que se adhiere a las especificaciones de la API proporcionada y las mejores prácticas establecidas en el desarrollo frontend.

---

# Esfuerzos de Cumplimiento de Licencias

## Antecedentes

En mi compromiso por mantener un proyecto de código abierto que se adhiere estrictamente a los estándares de licenciamiento de código abierto, me encontré con un problema de licencia con una de nuestras dependencias indirectas, `fs-monkey`, que se incluyó en el proyecto a través de `react-scripts` y sus dependencias.

## Pasos Tomados para el Cumplimiento

### 1. Auditoría de Dependencias

Realicé una auditoría de las dependencias del proyecto usando `license-checker` para identificar posibles problemas de licenciamiento. Esta auditoría reveló que `fs-monkey`, una dependencia indirecta, estaba marcada como "UNLICENSED".

### 2. Investigación y Análisis

Al descubrir el problema de licencia con `fs-monkey`:
- Revisé el uso de `fs-monkey` dentro del proyecto para entender su rol e importancia.
- Realicé investigaciones para verificar el estado de la licencia de `fs-monkey`, encontrando que efectivamente no tenía licencia, lo cual podría potencialmente entrar en conflicto con la naturaleza de código abierto del proyecto.

### 3. Actualización de Dependencias

Actualicé regularmente las dependencias a las últimas versiones ejecutando `npm update`, con la esperanza de que las nuevas versiones de `react-scripts` o sus dependencias resolvieran el problema de licencia eliminando o reemplazando `fs-monkey`.

### 4. Documentación y Transparencia

He documentado mis esfuerzos y hallazgos respecto a este problema de licencia en el README de nuestro proyecto para mantener la transparencia, destacando la importancia del cumplimiento de licencias de código abierto en el proyecto.