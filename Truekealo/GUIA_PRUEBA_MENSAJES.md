# Guía de Prueba de Mensajería

## Problema Resuelto
Se corrigieron los siguientes errores en el sistema de mensajería:

### ❌ Errores Encontrados:
1. **Campo incorrecto**: Frontend enviaba `receptor_id` pero el backend esperaba `destinatario_id`
2. **Estructura de respuesta**: Frontend esperaba `data.mensajes` pero el backend retorna directamente el array
3. **Campo de fecha**: Frontend usaba `fecha_envio` pero el backend retorna `created_at`

### ✅ Correcciones Aplicadas:
1. Cambiado `receptor_id` → `destinatario_id` en [Mensajes.jsx](frontend-react/src/pages/Mensajes.jsx#L62)
2. Ajustado el manejo de la respuesta para aceptar directamente el array de mensajes
3. Cambiado `fecha_envio` → `created_at` para mostrar las fechas correctamente

---

## Cómo Probar el Sistema de Mensajería

### Paso 1: Asegúrate que el Backend esté corriendo
```powershell
cd Truekealo\backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload
```

Deberías ver: `INFO: Uvicorn running on http://localhost:8000`

### Paso 2: Asegúrate que el Frontend esté corriendo
```powershell
cd Truekealo\frontend-react
npm run dev
```

Deberías ver: `Local: http://localhost:5173/`

### Paso 3: Crear dos usuarios para probar

#### Usuario 1 (tu usuario actual):
- Ya estás registrado con tu cuenta

#### Usuario 2 (usuario de prueba):
1. Abre una ventana de incógnito en tu navegador
2. Ve a http://localhost:5173/register
3. Registra un nuevo usuario:
   - Nombre: Usuario Prueba
   - Email: prueba@test.com
   - Password: Test123!

### Paso 4: Crear artículos para ambos usuarios

#### Con el Usuario 1 (ventana normal):
1. Ve a "Mis Artículos"
2. Crea un artículo (ej: "Bicicleta antigua")

#### Con el Usuario 2 (ventana incógnito):
1. Ve a "Mis Artículos"
2. Crea un artículo (ej: "Reloj vintage")

### Paso 5: Probar el Sistema de Mensajes

#### Opción A: Iniciar conversación desde una propuesta

1. **Usuario 2 (incógnito)**: Ve a "Explorar"
2. Busca el artículo del Usuario 1 ("Bicicleta antigua")
3. Haz clic en el artículo
4. Presiona "Hacer Propuesta de Intercambio"
5. Selecciona tu artículo y envía la propuesta

6. **Usuario 1 (ventana normal)**: Ve a "Propuestas"
7. Verás la propuesta recibida
8. Acepta o rechaza la propuesta
9. Después de aceptar/rechazar, podrás ver un botón de "Mensajes" para contactar

#### Opción B: Enviar mensaje directo (si tienes el feature implementado)

1. Ve a la sección "Mensajes" en el navbar
2. Si ya hay una conversación iniciada, verás la lista
3. Selecciona una conversación
4. Escribe un mensaje y presiona "Enviar"

### Paso 6: Verificar que funcione

✅ **Lo que deberías ver:**
- El mensaje aparece inmediatamente en la conversación
- El contador de mensajes no leídos se actualiza
- Los mensajes propios aparecen a la derecha (azul)
- Los mensajes recibidos aparecen a la izquierda (gris)
- La fecha se muestra debajo de cada mensaje

❌ **Si ves errores:**
- Error 422: Verifica que los cambios se hayan guardado correctamente
- Error 401: Asegúrate de estar autenticado
- Error 404: Verifica que el usuario destinatario exista
- "No tienes conversaciones": Necesitas iniciar una conversación primero

---

## Estructura de Datos

### Enviar Mensaje (POST /api/v1/mensajes)
```json
{
  "destinatario_id": 2,
  "contenido": "Hola, me interesa tu artículo"
}
```

### Respuesta del Backend (MensajeResponse)
```json
{
  "id": 1,
  "remitente_id": 1,
  "destinatario_id": 2,
  "contenido": "Hola, me interesa tu artículo",
  "leido": false,
  "created_at": "2026-01-29T10:30:00"
}
```

---

## Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/mensajes` | Enviar un nuevo mensaje |
| GET | `/api/v1/mensajes/conversacion/{usuario_id}` | Obtener mensajes con un usuario |
| GET | `/api/v1/mensajes/conversaciones` | Listar todas las conversaciones |
| PUT | `/api/v1/mensajes/{mensaje_id}/leer` | Marcar mensaje como leído |
| GET | `/api/v1/mensajes/unread-count` | Contador de mensajes no leídos |

---

## Archivos Modificados

- [frontend-react/src/pages/Mensajes.jsx](frontend-react/src/pages/Mensajes.jsx)
  - Línea 62: Cambio de `receptor_id` a `destinatario_id`
  - Línea 37: Manejo correcto del array de mensajes
  - Línea 146: Uso de `created_at` en lugar de `fecha_envio`

---

## Próximos Pasos (Opcional)

### Mejoras sugeridas:
1. **Botón de contactar**: Agregar un botón "Contactar Vendedor" en ArticuloDetalle.jsx
2. **Notificaciones en tiempo real**: Implementar WebSockets para mensajes instantáneos
3. **Búsqueda de conversaciones**: Agregar un buscador en la lista de conversaciones
4. **Adjuntar imágenes**: Permitir enviar imágenes en los mensajes
5. **Emoticones**: Agregar soporte para emojis

---

## Soporte Técnico

Si encuentras algún problema:
1. Verifica la consola del navegador (F12)
2. Revisa los logs del backend
3. Asegúrate que ambos servidores estén corriendo
4. Verifica que los usuarios existan en la base de datos
