📊 CalorieTracker - Tu Contador Inteligente de Calorías y Actividad

¡Bienvenido a CalorieTracker, tu compañero personal para llevar un control detallado de tu ingesta calórica y tus actividades físicas! Este proyecto es una aplicación web intuitiva que te permite registrar tanto las comidas consumidas como los ejercicios realizados, calculando automáticamente tu balance calórico diario.

Desarrollada con React, TypeScript y Tailwind CSS, esta aplicación permite manejar el estado de aplicaciones complejas de forma eficiente y aplicar buenas prácticas de desarrollo front-end. En este proyecto personal profundizo en patrones de gestión de estado avanzados como useReducer y he consolidado mi experiencia con herramientas modernas.

🚀 ¡Explora el Proyecto!
Aunque este proyecto aún no está desplegado en un entorno público, te invito a explorar el código y, si lo deseas, a ejecutarlo localmente para ver todas sus funcionalidades.

(Opcional: Si en el futuro lo despliegas en Netlify/Vercel, añade aquí el enlace:
👉 CalorieTracker en Netlify/Vercel 👈)

✨ Características Principales (MVP - Minimum Viable Product)
Esta primera versión del CalorieTracker se enfoca en proporcionar una experiencia completa de registro y seguimiento de calorías, utilizando características avanzadas de React:

📝 Formulario Dinámico de Registro:

Un formulario intuitivo con tres campos: Categoría (select entre Comida/Ejercicio), Actividad (texto) y Calorías (numérico).
El texto del botón Guardar cambia dinámicamente según la categoría seleccionada (ej. "Guardar Comida" o "Guardar Ejercicio").

➕➖ Gestión de Actividades:

Registra nuevas actividades (comidas o ejercicios) con sus respectivas calorías.
Edición y Eliminación: Cada actividad registrada puede ser editada o eliminada individualmente, con actualizaciones en tiempo real.

📊 Resumen de Calorías en Tiempo Real:

Una sección de estadísticas que muestra las Calorías Consumidas, Calorías Quemadas (ejercicio) y la Diferencia neta.
Optimización con useMemo: Los cálculos de las estadísticas están optimizados con useMemo para evitar recálculos innecesarios y asegurar un rendimiento óptimo.

🔄 Reiniciar Aplicación: Un botón "Reiniciar App" para borrar todas las actividades y el estado, permitiendo empezar de nuevo.

💾 Persistencia de Datos con Local Storage: Todas las actividades registradas persisten en el localStorage del navegador, asegurando que tus datos no se pierdan al cerrar o recargar la página.

💡 Gestión de Estado con useReducer: La lógica central de manejo del estado de las actividades (añadir, editar, eliminar, reiniciar) está centralizada y gestionada eficientemente utilizando el hook useReducer. Esto demuestra un enfoque avanzado en el manejo de estado, facilitando la escalabilidad y mantenibilidad.

🛠️ Custom Hooks: Utilización de custom hooks para encapsular lógica relacionada, promoviendo la reutilización de código y manteniendo los componentes limpios y enfocados en la UI.

🛡️ Tipado Estricto con TypeScript: Todo el proyecto está completamente tipado con TypeScript, lo que mejora la legibilidad, la robustez del código y previene errores comunes de JavaScript en tiempo de desarrollo.

🎨 Estilizado con Tailwind CSS: Interfaz de usuario moderna y responsiva construida con el framework de CSS de utilidad, lo que permite un desarrollo rápido y un diseño consistente.

⚙️ Tecnologías Utilizadas

React: Biblioteca de JavaScript para construir interfaces de usuario.
TypeScript: Superset de JavaScript que añade tipado estático.
Tailwind CSS: Framework CSS de utilidad para un estilizado rápido y responsivo.
Vite: Herramienta de construcción rápida y ligera para proyectos React.

💻 Cómo Ejecutar el Proyecto Localmente
Si quieres explorar el código o probar la aplicación, sigue estos pasos:

Clona el repositorio:

npm install

npm run dev

El proyecto se abrirá automáticamente en tu navegador en http://localhost:5173 (o un puerto similar).

💡 Próximas Funcionalidades (Roadmap)
Este proyecto está diseñado para crecer. En futuras versiones, planeo agregar las siguientes funcionalidades para mejorar la experiencia del usuario y expandir sus capacidades:

🧑‍💻 Conéctate Conmigo

¡Gracias por visitar mi proyecto! Estoy activamente buscando oportunidad en el mundo del desarrollo web. Este proyecto, junto con mis anteriores, demuestra mi pasión por construir soluciones con tecnologías modernas. Si tienes alguna pregunta, comentario o una oportunidad interesante, no dudes en contactarme:

GitHub: https://github.com/luisgoweb
LinkedIn: https://www.linkedin.com/in/luis-gonzalez-dev-full-stack/
Correo Electrónico: luisgocodev@gmail.com
