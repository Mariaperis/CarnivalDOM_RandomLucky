
# Proyecto: Ruleta de la Suerte Dinámica

## 1. Objetivo General
Desarrollar una aplicación web interactiva que gestione una lista de participantes mediante una ruleta giratoria. Al detenerse, la app asignará un mensaje de fortuna aleatorio, mostrará información contextual (clima/noticias) y eliminará al ganador de la lista para la siguiente ronda.

## 2. Estructura del Proyecto

###  index.html: Estructura semántica (input de nombres, lista visible, botón de sorteo y área de resultado).
### style.css: Diseño tipo "feria" (colores vivos, tipografías llamativas y responsive).
### script.js: Lógica del juego.
### Estado: Un array para nombres y otro para mensajesSuerte.
### Funciones: Añadir nombre, renderizar lista, elegir aleatorio, mostrar mensaje y eliminar nombre usado.
/
├── index.html          # Interfaz principal (HTML)
├── style.css           # Estilos visuales de la feria (CSS)
├── main.js             # Lógica de interacción con el DOM
├── src/                
│   └── scripts/        
│       ├── data.js     # Colección de mensajes con suerte
│       └── logic.js    # Funciones de selección y eliminación
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Documentación del proyecto


##  3. Herramientas
1) Editor: Visual Studio Code.
2) GitHub: Repositorio centralizado para el control de versiones y trabajo colaborativo mediante branches.
3) Iconos: FontAwesome para los iconos de clima (sol, nubes, termómetro).


## 4. Recursos Técnicos
### HTML5: Uso de ul para la lista, input para entrada de datos y section para el resultado.
### CSS3: Flexbox o Grid para el layout, y transitions para que el aviso de suerte aparezca con estilo.
JavaScript (vanila):
querySelector / getElementById para capturar elementos.
addEventListener para los botones.
Math.random() y Math.floor() para la selección aleatoria.
splice() para eliminar el nombre de la lista tras mostrar su suerte.

# Participantes 

Roles:
- Maria Luisa Peris (Product Owner)
- Doris Guerra (Scrum Master)
- Lia Fernandez (Development Team)
- Kharla Quevedo (Development Team)
