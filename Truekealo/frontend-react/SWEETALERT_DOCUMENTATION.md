# Sistema de Alertas con SweetAlert2

## 📋 Resumen

Se ha implementado **SweetAlert2** como el sistema único de notificaciones para todo el proyecto, reemplazando completamente las alertas nativas del navegador (`alert()`, `confirm()`) y el sistema anterior de `DialogContext`.

## ✅ Ventajas Implementadas

- ✨ **Interfaz consistente y moderna** en todas las alertas
- 🎨 **Personalización completa** con colores y iconos del sistema de trueque
- 🚫 **Sin alertas nativas** del navegador
- ⚡ **Funciones reutilizables** para casos comunes
- 🎯 **Confirmaciones explícitas** para acciones críticas
- ⏱️ **Auto-cierre automático** para alertas de éxito
- 🔄 **Manejo automático de errores** del backend

## 📂 Archivos Modificados

### Frontend

#### Nuevo archivo de utilidades
- ✅ `src/utils/sweetAlert.js` - Sistema completo de alertas

#### Componentes actualizados
- ✅ `src/pages/PropuestasRecibidas.jsx`
- ✅ `src/pages/PropuestasEnviadas.jsx`
- ✅ `src/pages/ArticuloDetalle.jsx`
- ✅ `src/pages/MisArticulos.jsx`
- ✅ `src/pages/Perfil.jsx`
- ✅ `src/pages/Configuracion.jsx`

#### Configuración
- ✅ `src/App.jsx` - Eliminado `DialogProvider`
- ✅ `src/main.jsx` - Importado CSS de SweetAlert2

## 🎯 Funciones Disponibles

### Funciones Básicas

```javascript
import { showAlert, showConfirm, showToast } from '../utils/sweetAlert';

// Alerta simple
showAlert('success', 'Título', 'Mensaje descriptivo');
showAlert('error', 'Error', 'Algo salió mal');
showAlert('warning', 'Advertencia', 'Ten cuidado');
showAlert('info', 'Información', 'Dato importante');

// Confirmación
const confirmed = await showConfirm('Título', 'Mensaje de confirmación');
if (confirmed) {
  // Usuario confirmó
}

// Toast (notificación pequeña)
showToast('success', 'Operación exitosa');
showToast('error', 'Error en la operación');
```

### Funciones Predefinidas para el Sistema de Trueque

```javascript
import { alertas } from '../utils/sweetAlert';

// Propuestas
await alertas.propuestaEnviada();
await alertas.propuestaDuplicada();
await alertas.propuestaAceptada();
await alertas.propuestaRechazada();
await alertas.articuloNoDisponible();

// Confirmaciones críticas
const confirmar = await alertas.confirmarAceptarPropuesta();
const confirmar = await alertas.confirmarRevertirIntercambio();
const confirmar = await alertas.confirmarRechazarPropuesta();
const confirmar = await alertas.confirmarEliminarArticulo();
const confirmar = await alertas.confirmarCancelarPropuesta();

// Éxitos generales
alertas.perfilActualizado();
alertas.articuloPublicado();
alertas.articuloActualizado();
alertas.articuloEliminado();
alertas.mensajeEnviado();
alertas.intercambioRevertido();

// Errores generales
alertas.errorGeneral('Mensaje de error personalizado');
alertas.errorCarga();
alertas.errorConexion();

// Información
alertas.sesionCerrada();
alertas.camposRequeridos();
```

## 🎨 Ejemplos de Uso

### Ejemplo 1: Enviar Propuesta con Validaciones

```javascript
const handleSubmitPropuesta = async (e) => {
  e.preventDefault();

  try {
    await createPropuesta(propuestaData);
    alertas.propuestaEnviada(); // ✅ "Propuesta enviada - Esperando respuesta del usuario"
    await loadArticulo();
  } catch (err) {
    const errorMsg = err.response?.data?.detail || 'Error al enviar propuesta';
    
    if (errorMsg.includes('ya existe una propuesta')) {
      alertas.propuestaDuplicada(); // ⚠️ "Ya existe una propuesta pendiente para este artículo"
    } else if (errorMsg.includes('no disponible')) {
      alertas.articuloNoDisponible(); // ℹ️ "Este artículo ya fue intercambiado"
    } else {
      showAlert('error', 'Error', errorMsg, { showConfirmButton: true });
    }
  }
};
```

### Ejemplo 2: Aceptar Propuesta con Confirmación

```javascript
const handleAceptar = async (propuestaId) => {
  // Mostrar confirmación
  const confirmed = await alertas.confirmarAceptarPropuesta();
  if (!confirmed) return;

  try {
    await updatePropuesta(propuestaId, { estado: 'aceptada' });
    alertas.propuestaAceptada(); // ✅ "Intercambio confirmado - El artículo ya no está disponible"
  } catch (err) {
    alertas.errorGeneral('Error al aceptar propuesta');
  }
};
```

### Ejemplo 3: Eliminar Artículo

```javascript
const handleDelete = async (id) => {
  const confirmed = await alertas.confirmarEliminarArticulo();
  if (!confirmed) return;

  try {
    await deleteArticulo(id);
    alertas.articuloEliminado(); // Toast: "Artículo eliminado"
  } catch (error) {
    alertas.errorGeneral('Error al eliminar el artículo');
  }
};
```

### Ejemplo 4: Actualizar Perfil

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await updateProfile(formData);
    alertas.perfilActualizado(); // Toast: "Perfil actualizado correctamente"
  } catch (err) {
    alertas.errorGeneral(err.response?.data?.detail || 'Error al actualizar perfil');
  }
};
```

## 🎨 Configuración de Colores

```javascript
// Botones
confirmButtonColor: '#4F46E5' (Índigo)
cancelButtonColor: '#6B7280' (Gris)

// Confirmaciones peligrosas (eliminar)
confirmButtonColor: '#DC2626' (Rojo)

// Advertencias (revertir)
confirmButtonColor: '#F59E0B' (Amarillo)

// Éxito (aceptar)
confirmButtonColor: '#10B981' (Verde)
```

## ⏱️ Comportamiento de Auto-Cierre

| Tipo | Timer | Botón Confirmar | Progress Bar |
|------|-------|----------------|--------------|
| `success` | 3000ms | No | ✅ Sí |
| `error` | 4000ms | No | ✅ Sí |
| `warning` | Manual | ✅ Sí | ❌ No |
| `info` | Manual | ✅ Sí | ❌ No |
| `question` | Manual | ✅ Sí | ❌ No |
| Toast | 3000ms | ❌ No | ✅ Sí |

## 🚫 Prohibiciones

**NO usar nunca:**
```javascript
// ❌ PROHIBIDO
window.alert('mensaje');
window.confirm('¿Estás seguro?');
console.log('Mensaje al usuario'); // Solo para debugging, no para UX

// ❌ PROHIBIDO - Sistema anterior eliminado
import { useDialog } from '../context/DialogContext';
const { notify, confirm } = useDialog();
```

**SIEMPRE usar:**
```javascript
// ✅ CORRECTO
import { alertas, showAlert, showToast } from '../utils/sweetAlert';
alertas.propuestaEnviada();
showToast('success', 'Operación exitosa');
```

## 📊 Casos de Uso del Sistema de Trueque

### Propuestas
- ✅ **Envío exitoso** → `alertas.propuestaEnviada()`
- ⚠️ **Propuesta duplicada** → `alertas.propuestaDuplicada()`
- ✅ **Propuesta aceptada** → `alertas.propuestaAceptada()`
- ❌ **Propuesta rechazada** → `alertas.propuestaRechazada()`
- ℹ️ **Artículo no disponible** → `alertas.articuloNoDisponible()`

### Confirmaciones Críticas
- 🔄 **Revertir intercambio** → `await alertas.confirmarRevertirIntercambio()`
- ✅ **Aceptar propuesta** → `await alertas.confirmarAceptarPropuesta()`
- ❌ **Rechazar propuesta** → `await alertas.confirmarRechazarPropuesta()`
- 🗑️ **Eliminar artículo** → `await alertas.confirmarEliminarArticulo()`

### Operaciones Comunes
- 📝 **Perfil actualizado** → `alertas.perfilActualizado()`
- 📦 **Artículo publicado** → `alertas.articuloPublicado()`
- ✏️ **Artículo actualizado** → `alertas.articuloActualizado()`
- 💬 **Mensaje enviado** → `alertas.mensajeEnviado()`
- 🚪 **Sesión cerrada** → `alertas.sesionCerrada()`

## 🔧 Personalización Avanzada

```javascript
// Alerta personalizada con opciones
showAlert('warning', 'Título', 'Mensaje', {
  timer: 5000, // 5 segundos
  showConfirmButton: true,
  confirmButtonText: 'Entendido',
  timerProgressBar: true,
  position: 'top-end' // Esquina superior derecha
});

// Confirmación personalizada
const confirmed = await showConfirm('Título', 'Mensaje', {
  icon: 'warning',
  confirmText: 'Sí, continuar',
  cancelText: 'No, cancelar',
  confirmColor: '#DC2626',
  reverseButtons: true
});

// Toast personalizado
showToast('info', 'Mensaje breve', 5000); // 5 segundos
```

## 📝 Notas Importantes

1. **Todas las confirmaciones devuelven `Promise<boolean>`**
   - `true` si el usuario confirmó
   - `false` si el usuario canceló

2. **Los toasts no bloquean la interfaz**
   - Se muestran en la esquina superior derecha
   - Desaparecen automáticamente
   - Ideal para operaciones no críticas

3. **Las alertas críticas requieren interacción del usuario**
   - No se cierran automáticamente
   - Tienen botón de confirmación visible
   - Usan `showConfirmButton: true`

4. **Manejo de errores del backend**
   - Verificar el `detail` en `err.response?.data?.detail`
   - Usar mensajes específicos cuando sea posible
   - Fallback a mensajes genéricos con `alertas.errorGeneral()`

## 🎯 Checklist de Implementación

- ✅ SweetAlert2 instalado (`npm install sweetalert2`)
- ✅ CSS importado en `main.jsx`
- ✅ Utilidad `sweetAlert.js` creada
- ✅ Todas las páginas actualizadas
- ✅ `DialogContext` eliminado de `App.jsx`
- ✅ Sin errores de compilación
- ✅ Todas las notificaciones funcionan con SweetAlert2
- ✅ Sin uso de `alert()`, `confirm()` o `console.log()` para UX

## 🚀 Próximos Pasos

Si necesitas agregar nuevas alertas:

1. Agrega la función en `src/utils/sweetAlert.js` en el objeto `alertas`
2. Define tipo, título y mensaje apropiados
3. Configura timer y botones según la criticidad
4. Importa y usa: `alertas.tuNuevaAlerta()`

---

**Sistema implementado correctamente ✅**
**Fecha de implementación:** 29 de enero de 2026
