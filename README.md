# Proyecto CI/CD en TypeScript

Este proyecto implementa un pipeline de **Integración Continua (CI)** y control de calidad de código para un proyecto en TypeScript. Incluye **linter**, **pruebas unitarias**, **reporte de cobertura**, y **compilación/build**, así como documentación de la ejecución local de workflows mediante `nektos/act`.

---

## Parte 1 – Estrategia y conceptos

### 1. Diferencia entre CI y CD
- **CI (Continuous Integration):** proceso de integración frecuente de cambios de código al repositorio, ejecutando automáticamente pruebas y validaciones para detectar errores de forma temprana.  
- **CD (Continuous Delivery):** proceso que asegura que el código validado en CI pueda desplegarse automáticamente a entornos de producción.  

> Este proyecto se centra en **CI**, validando calidad de código y cobertura antes de cualquier despliegue.

### 2. Lenguaje, linter y herramienta de cobertura
- **Lenguaje:** TypeScript, elegido por su tipado estático, escalabilidad y popularidad en aplicaciones modernas.  
- **Linter:** ESLint, para mantener consistencia de estilo, detectar errores comunes y garantizar calidad de código.  
- **Cobertura:** `jest` con `ts-jest`, generando reportes en `lcov` y `text`, compatible con TypeScript y CI/CD.

### 3. Umbral mínimo de cobertura
- Se establece un **umbral mínimo del 80%**.  
- **Justificación:** asegura una cobertura significativa de pruebas sin ser demasiado restrictivo, equilibrando seguridad y productividad.

---

## Parte 2 – Workflow CI/CD

Se creó el workflow **`.github/workflows/ci-quality.yml`**, activado en `push` y `pull_request`.  

### Pasos del workflow:
1. **Checkout:** obtiene el código del repositorio.  
2. **Instalación de dependencias:** `npm install`.  
3. **Linter:** ejecuta ESLint para verificar estilo y calidad.  
4. **Build:** compila TypeScript con `tsc`.  
5. **Pruebas unitarias:** ejecuta Jest para validar funcionalidad.  
6. **Cobertura:** genera reportes y valida el umbral mínimo.  

> Si alguna etapa falla, el workflow se detiene automáticamente.

---

## Parte 3 – Uso de `nektos/act`

`act` permite **ejecutar workflows de GitHub Actions localmente**, simulando el entorno de CI/CD.

### Requisitos
- **Docker** instalado y corriendo.

### Comando para ejecutar el workflow localmente
`act -j ci-quality` 


## Parte 4 – Validación y logs

En esta sección se explica cómo identificar fallos en el workflow y la diferencia entre un run exitoso y uno fallido.

### Identificación de fallos
- **Linter (ESLint):** los errores de estilo y calidad aparecen como `error` o `warning` en los logs.  
- **Pruebas unitarias (Jest):** los tests fallidos se indican con ❌, mientras que los exitosos se muestran con ✔️.  
- **Cobertura de código:** si el porcentaje de cobertura es menor al umbral configurado (80%), Jest devuelve un error y el job falla.

### Diferencia entre run fallido y exitoso
- **Run exitoso:** todas las etapas del workflow pasan correctamente y la cobertura cumple el umbral mínimo.  
- **Run fallido:** alguna etapa falla (linter detecta errores, tests fallan o cobertura insuficiente), interrumpiendo el pipeline.

> Para verificar, se pueden revisar los logs generados en GitHub Actions o al ejecutar el workflow localmente con `act`.

---

## Parte 5 – IA y Ética

En esta sección se abordan los métodos de detección de código generado por IA, sus limitaciones y políticas recomendadas.

### Métodos para detectar código generado por IA
1. **Análisis de patrones estilísticos:** detecta repeticiones, estructuras poco naturales o consistencia típica de modelos de lenguaje.  
2. **Fingerprinting y análisis de probabilidades de token:** evalúa la probabilidad de que un fragmento de código haya sido generado por un modelo de IA.

### Limitaciones
- **No es posible asegurar al 100% la autoría:** los humanos pueden escribir código similar a IA y viceversa.  
- La detección es aproximada y no definitiva.

### Políticas recomendadas
- Permitir el uso de IA como asistente, siempre con revisión y pruebas del código generado.  
- Declarar explícitamente el uso de IA en proyectos educativos y profesionales.  
- Garantizar calidad, comprensión y documentación del código generado por IA.






