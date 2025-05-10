# lightcoral
        
# Programación 

### 1. Elementos Fundamentales del Código
- **Variables:**
  - Variables de estado: `currentTool`, `isDrawing`, `startX`, `startY`, `currentElement`
  - Variables de selección: `selectedElement`, `bboxRect`, `rotateHandle`, `scaleHandle`
  - Variables de transformación: `isMoving`, `isRotating`, `isScaling`
  - Objetos de transformación: `startTransform`, `center`

- **Constantes:**
  - Referencias DOM: `svg`, `selectBtn`, `eraseBtn`, `rectBtn`, etc.
  - Inputs de color: `fillColorInput`, `strokeColorInput`

- **Tipos de Datos:**
  - Strings: para identificadores y valores de atributos
  - Numbers: para coordenadas y dimensiones
  - Booleanos: para estados de dibujo y transformación
  - Objetos: para almacenar transformaciones y posiciones

### 2. Estructuras de Control
- **Selección:**
  - `switch/case` en `createShape()` y `updateShape()` para diferentes herramientas
  - Condicionales `if/else` para manejar eventos del mouse y estados
  
- **Repetición:**
  - Eventos del mouse que se repiten continuamente (`mousemove`)
  
- **Saltos:**
  - `return` en funciones para control de flujo
  - `break` en estructuras switch

### 3. Control de Excepciones
- Validaciones de existencia:
  ```javascript
  if (!selectedElement || !bboxRect) return;
  ```
- Comprobaciones de tipo y estado antes de operaciones
- No se implementan try-catch explícitos

### 4. Documentación
- Comentarios descriptivos para secciones principales
- Comentarios explicativos para funcionalidades complejas
- Documentación de funciones con descripciones breves

### 5. Paradigma de Programación
- **Programación Estructurada:**
  - Funciones modulares con propósitos específicos
  - Organización clara del código en archivos separados
  - No se utiliza POO explícitamente

### 6. Clases y Objetos
- No se utilizan clases explícitas
- Objetos literales para datos:
  ```javascript
  let startTransform = { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 };
  ```

### 7. Conceptos Avanzados
- No se implementa herencia o polimorfismo
- Se utiliza el patrón de eventos y callbacks
- Manipulación del DOM y SVG

### 8. Gestión de Información
- **Interfaz Gráfica:**
  - Interfaz SVG interactiva
  - Controles de usuario (botones, inputs de color)
- **Archivos:**
  - Función `saveSVG()` para exportar el dibujo
  - Carga modular de archivos JavaScript

### 9. Estructuras de Datos
- Arrays implícitos en manipulación de puntos
- Objetos para coordenadas y transformaciones
- DOM como estructura de datos principal

### 10. Técnicas Avanzadas
- Manipulación SVG
- Transformaciones geométricas
- Gestión de eventos del mouse
- Manipulación del DOM
- No se utilizan expresiones regulares
- Flujos de entrada/salida mediante eventos del navegador

          
# Sistemas Informáticos

### 1. Características del Hardware
Basado en el análisis del proyecto, podemos observar que:
- **Entorno de Desarrollo:**
  - Se está utilizando XAMPP como servidor local
  - La aplicación está alojada en la ruta `c:\xampp\htdocs\lightcoral`
  - Es una aplicación web que maneja gráficos SVG, lo que requiere un navegador moderno
  - No se observan requisitos específicos de hardware más allá de un ordenador capaz de ejecutar XAMPP y un navegador web moderno

- **Entorno de Producción:**
  - No se observa configuración específica para producción en el código actual
  - Al ser una aplicación web basada en SVG, los requisitos serían similares al entorno de desarrollo

### 2. Sistema Operativo
- **Desarrollo:**
  - Windows (evidenciado por la ruta `c:\xampp`)
  - XAMPP como stack de desarrollo local
  - Seleccionado probablemente por su facilidad de configuración y uso extendido en desarrollo web

### 3. Configuración de Redes
- **Tipo de Red:**
  - Red local para desarrollo (localhost)
  - Protocolo HTTP/HTTPS a través de XAMPP
  - No se observan configuraciones de red específicas en el código

### 4. Copias de Seguridad
- No se observa implementación de sistema de copias de seguridad
- El proyecto incluye una función de guardado local (`saveSVG()`) que permite exportar los dibujos como archivos SVG

### 5. Seguridad de Datos
- No se observan medidas específicas de seguridad implementadas
- Los datos se manejan localmente en el navegador
- La función de guardado utiliza el API de File System del navegador

### 6. Configuración de Usuarios y Permisos
- No se observa sistema de usuarios implementado
- Los permisos son los predeterminados del sistema de archivos local
- El acceso a archivos se realiza a través de XAMPP

### 7. Documentación Técnica
- El código incluye comentarios descriptivos para las funciones principales
- La estructura del proyecto está organizada en carpetas:
  - `/funciones/`: Contiene los archivos JavaScript modulares
  - Archivos principales en la raíz

# Entornos de Desarrollo

### 1. Entorno de Desarrollo (IDE)
- Se utiliza un entorno de desarrollo basado en XAMPP para PHP
- La estructura del proyecto está organizada en carpetas específicas:
  - `/funciones/`: Contiene archivos JavaScript modulares
  - Archivos principales en la raíz del proyecto
- El código está separado en módulos funcionales para mejor mantenimiento

### 2. Automatización de Tareas
- No se observa implementación de herramientas de automatización de tareas
- La modularización del código se realiza mediante includes de PHP
- Los eventos y funcionalidades se manejan a través de JavaScript vanilla

### 3. Control de Versiones
- No se observa implementación explícita de control de versiones en el código
- La estructura del proyecto permitiría fácilmente implementar un sistema de control de versiones como Git

### 4. Estrategia de Refactorización
- El código está organizado en funciones modulares
- Cada funcionalidad está separada en archivos individuales
- Se utiliza un enfoque de responsabilidad única para cada función
- La nomenclatura es clara y descriptiva

### 5. Documentación Técnica
- Se utiliza documentación en forma de comentarios en el código
- Los archivos JavaScript incluyen documentación de funciones
- Se mantiene un README.md con información del proyecto
- Los comentarios explican la funcionalidad de secciones importantes

### 6. Diagramas y Modelado
- No se observan diagramas de clases o comportamiento
- El proyecto sigue un modelo de programación estructurada
- La interacción entre componentes se realiza mediante eventos del DOM

# Bases de Datos
- No se implementa un sistema de base de datos
- Los datos se manejan en memoria durante la ejecución
- Se permite guardar el trabajo como archivo SVG

# Lenguajes de Marcas y Frontend
- **HTML**: 
  - Estructura semántica clara
  - Uso de elementos HTML5
  - Organización lógica de componentes

- **CSS**:
  - Estilos modulares y organizados
  - Uso de flexbox para layouts
  - Diseño responsive

- **JavaScript**:
  - Manipulación del DOM
  - Gestión de eventos
  - Transformaciones SVG
  - No se observa uso de frameworks

### 9. Gestión de Información
- La aplicación maneja datos en formato SVG
- Permite exportar el trabajo en formato SVG
- No implementa conversión entre diferentes formatos
- No interactúa con sistemas de gestión empresarial

# Proyecto Intermodular
- **Objetivo**: Crear y editar gráficos vectoriales en el navegador
- **Necesidad**: Herramienta de dibujo vectorial accesible vía web
- **Stack Tecnológico**:
  - Frontend: HTML5, CSS3, JavaScript
  - Backend: PHP (para inclusión de archivos)
  - Servidor: XAMPP
- **Desarrollo por Versiones**: 
  - Versión actual incluye funcionalidades básicas de dibujo y edición
  - Implementación modular que permite expansión futura

              
        