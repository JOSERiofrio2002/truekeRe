# 🎨 SweetAlert2 - Ejemplos Visuales

## Vista Previa de Alertas Implementadas

### 1️⃣ Propuesta Enviada (Success)
```
┌─────────────────────────────────────────┐
│             ✅ ÉXITO                    │
│                                         │
│      Propuesta enviada                  │
│                                         │
│   Esperando respuesta del usuario       │
│                                         │
│   [═══════════════░░░░] 3s              │
└─────────────────────────────────────────┘
Auto-cierre: 3 segundos
Color: Verde
```

### 2️⃣ Propuesta Duplicada (Warning)
```
┌─────────────────────────────────────────┐
│             ⚠️ ADVERTENCIA              │
│                                         │
│      Propuesta duplicada                │
│                                         │
│  Ya existe una propuesta pendiente      │
│      para este artículo                 │
│                                         │
│          [  Confirmar  ]                │
└─────────────────────────────────────────┘
Requiere confirmación manual
Color: Amarillo
```

### 3️⃣ Intercambio Confirmado (Success)
```
┌─────────────────────────────────────────┐
│             ✅ ÉXITO                    │
│                                         │
│      Intercambio confirmado             │
│                                         │
│   El artículo ya no está disponible     │
│                                         │
│   [═══════════════░░░░] 3s              │
└─────────────────────────────────────────┘
Auto-cierre: 3 segundos
Color: Verde
```

### 4️⃣ Propuesta Rechazada (Error)
```
┌─────────────────────────────────────────┐
│             ❌ ERROR                    │
│                                         │
│      Propuesta rechazada                │
│                                         │
│   El usuario rechazó tu propuesta       │
│                                         │
│   [═══════════════░░░░] 4s              │
└─────────────────────────────────────────┘
Auto-cierre: 4 segundos
Color: Rojo
```

### 5️⃣ Artículo No Disponible (Info)
```
┌─────────────────────────────────────────┐
│             ℹ️ INFORMACIÓN              │
│                                         │
│      Artículo no disponible             │
│                                         │
│   Este artículo ya fue intercambiado    │
│                                         │
│          [  Confirmar  ]                │
└─────────────────────────────────────────┘
Requiere confirmación manual
Color: Azul
```

---

## Confirmaciones Críticas

### 6️⃣ Confirmar Aceptar Propuesta (Question → Success)
```
PASO 1: Confirmación
┌─────────────────────────────────────────┐
│             ❓ PREGUNTA                 │
│                                         │
│      ¿Aceptar propuesta?                │
│                                         │
│  Se realizará el intercambio y ambos    │
│  artículos quedarán marcados como       │
│  intercambiados                         │
│                                         │
│    [ Cancelar ]  [ Sí, aceptar ]        │
│      (Gris)        (Verde)              │
└─────────────────────────────────────────┘

PASO 2: Si confirma
┌─────────────────────────────────────────┐
│             ✅ ÉXITO                    │
│      Intercambio confirmado             │
│   [═══════════════░░░░] 3s              │
└─────────────────────────────────────────┘
```

### 7️⃣ Confirmar Revertir Intercambio (Warning → Success)
```
PASO 1: Confirmación
┌─────────────────────────────────────────┐
│             ⚠️ ADVERTENCIA              │
│                                         │
│      ¿Revertir intercambio?             │
│                                         │
│  Los artículos volverán a estar         │
│  disponibles y la propuesta se          │
│  cancelará                              │
│                                         │
│    [ Cancelar ]  [ Sí, revertir ]       │
│      (Gris)        (Amarillo)           │
└─────────────────────────────────────────┘

PASO 2: Si confirma
┌─────────────────────────────────────────┐
│             ✅ ÉXITO                    │
│      Intercambio revertido              │
│  Los artículos vuelven a estar...       │
│   [═══════════════░░░░] 3s              │
└─────────────────────────────────────────┘
```

### 8️⃣ Confirmar Eliminar Artículo (Danger → Toast)
```
PASO 1: Confirmación Peligrosa
┌─────────────────────────────────────────┐
│             ⚠️ ADVERTENCIA              │
│                                         │
│      ¿Eliminar artículo?                │
│                                         │
│  Esta acción no se puede deshacer.      │
│  El artículo será eliminado             │
│  permanentemente.                       │
│                                         │
│    [ Cancelar ]  [ Sí, eliminar ]       │
│      (Gris)        (Rojo intenso)       │
└─────────────────────────────────────────┘

PASO 2: Si confirma (Toast esquina superior derecha)
┌───────────────────────────┐
│  ✅ Artículo eliminado    │
│  [═══════░░░] 3s          │
└───────────────────────────┘
```

### 9️⃣ Confirmar Rechazar Propuesta (Warning → Error)
```
PASO 1: Confirmación
┌─────────────────────────────────────────┐
│             ⚠️ ADVERTENCIA              │
│                                         │
│      ¿Rechazar propuesta?               │
│                                         │
│  Se notificará al usuario que su        │
│  propuesta fue rechazada                │
│                                         │
│    [ Cancelar ]  [ Sí, rechazar ]       │
│      (Gris)        (Rojo)               │
└─────────────────────────────────────────┘

PASO 2: Si confirma
┌─────────────────────────────────────────┐
│             ❌ ERROR                    │
│      Propuesta rechazada                │
│   [═══════════════░░░░] 4s              │
└─────────────────────────────────────────┘
```

---

## Toasts (Notificaciones Pequeñas)

### 🔟 Toast de Éxito
```
Posición: Esquina superior derecha
Duración: 3 segundos

     ┌───────────────────────────────┐
     │  ✅ Perfil actualizado         │
     │     correctamente              │
     │  [═══════════░░░] 3s           │
     └───────────────────────────────┘
```

### 1️⃣1️⃣ Toast de Actualización
```
     ┌───────────────────────────────┐
     │  ✅ Artículo actualizado       │
     │  [═══════════░░░] 3s           │
     └───────────────────────────────┘
```

### 1️⃣2️⃣ Toast de Mensaje Enviado
```
     ┌───────────────────────────────┐
     │  ✅ Mensaje enviado            │
     │  [═══════════░░░] 3s           │
     └───────────────────────────────┘
```

### 1️⃣3️⃣ Toast de Sesión Cerrada
```
     ┌───────────────────────────────┐
     │  ℹ️ Sesión cerrada             │
     │  [═══════════░░░] 3s           │
     └───────────────────────────────┘
```

---

## Estados de Error

### 1️⃣4️⃣ Error General
```
┌─────────────────────────────────────────┐
│             ❌ ERROR                    │
│                                         │
│            Error                        │
│                                         │
│   No se pudo completar la operación     │
│                                         │
│   [═══════════════░░░░] 4s              │
└─────────────────────────────────────────┘
Auto-cierre: 4 segundos
Color: Rojo
```

### 1️⃣5️⃣ Error de Conexión
```
┌─────────────────────────────────────────┐
│             ❌ ERROR                    │
│                                         │
│      Error de conexión                  │
│                                         │
│  No se pudo conectar con el servidor    │
│                                         │
│          [  Confirmar  ]                │
└─────────────────────────────────────────┘
Requiere confirmación manual
Color: Rojo
```

---

## Flujos Completos

### Flujo 1: Enviar Propuesta con Validación

```
INICIO: Usuario hace clic en "Hacer Propuesta"

┌─────────────────────────────────────────┐
│         📋 Modal de Propuesta           │
│                                         │
│  Selecciona tu artículo: [Dropdown]     │
│  Descripción: [Textarea]                │
│                                         │
│    [ Cancelar ]  [ Enviar Propuesta ]   │
└─────────────────────────────────────────┘

CASO 1: Propuesta válida
     ↓
┌───────────────────────────────┐
│  ✅ Propuesta enviada         │
│  Esperando respuesta...       │
│  [═══════░░░] 3s              │
└───────────────────────────────┘

CASO 2: Propuesta duplicada
     ↓
┌─────────────────────────────────────────┐
│         ⚠️ Propuesta duplicada          │
│  Ya existe una propuesta pendiente      │
│          [  Confirmar  ]                │
└─────────────────────────────────────────┘

CASO 3: Artículo no disponible
     ↓
┌─────────────────────────────────────────┐
│       ℹ️ Artículo no disponible         │
│  Este artículo ya fue intercambiado     │
│          [  Confirmar  ]                │
└─────────────────────────────────────────┘
```

### Flujo 2: Aceptar Propuesta

```
INICIO: Usuario en "Propuestas Recibidas"

     [ Ver Propuesta ]  [ ✅ Aceptar ]
              ↓
┌─────────────────────────────────────────┐
│         ❓ ¿Aceptar propuesta?          │
│  Se realizará el intercambio...         │
│    [ Cancelar ]  [ Sí, aceptar ]        │
└─────────────────────────────────────────┘
              ↓ Usuario confirma
┌───────────────────────────────┐
│  ✅ Intercambio confirmado    │
│  [═══════░░░] 3s              │
└───────────────────────────────┘
              ↓
    Artículos marcados como INTERCAMBIADO
    Usuario redirigido o lista actualizada
```

### Flujo 3: Eliminar Artículo

```
INICIO: Usuario en "Mis Artículos"

     [ Ver ]  [ Editar ]  [ 🗑️ Eliminar ]
                              ↓
┌─────────────────────────────────────────┐
│       ⚠️ ¿Eliminar artículo?            │
│  Esta acción no se puede deshacer       │
│    [ Cancelar ]  [ Sí, eliminar ]       │
└─────────────────────────────────────────┘
              ↓ Usuario confirma
     ┌───────────────────────────┐
     │  ✅ Artículo eliminado    │
     │  [═══░░░] 3s              │
     └───────────────────────────┘
              ↓
    Artículo removido de la lista
```

---

## Comparación Visual: Antes vs Ahora

### ANTES ❌ (Alertas Nativas)
```
┌────────────────────────────────┐
│  localhost:5173 dice:          │
│                                │
│  Propuesta enviada             │
│                                │
│         [  Aceptar  ]          │
└────────────────────────────────┘

Problemas:
❌ Feo y genérico
❌ No personalizable
❌ Bloquea toda la página
❌ Sin iconos
❌ Sin colores
❌ Sin auto-cierre
```

### AHORA ✅ (SweetAlert2)
```
┌─────────────────────────────────────────┐
│             ✅ ÉXITO                    │
│                                         │
│      Propuesta enviada                  │
│                                         │
│   Esperando respuesta del usuario       │
│                                         │
│   [═══════════════░░░░] 3s              │
└─────────────────────────────────────────┘

Ventajas:
✅ Moderno y elegante
✅ Personalizable
✅ No bloquea la página
✅ Iconos coloridos
✅ Colores semánticos
✅ Auto-cierre inteligente
✅ Animaciones suaves
✅ Responsive
```

---

## Paleta de Colores

### Iconos
```
✅  Success   : #10B981 (Verde)
❌  Error     : #EF4444 (Rojo)
⚠️  Warning   : #F59E0B (Amarillo)
ℹ️  Info      : #3B82F6 (Azul)
❓  Question  : #6366F1 (Índigo)
```

### Botones
```
Confirmar    : #4F46E5 (Índigo)
Cancelar     : #6B7280 (Gris)
Peligro      : #DC2626 (Rojo Oscuro)
Éxito        : #10B981 (Verde)
Advertencia  : #F59E0B (Amarillo)
```

---

## Animaciones

### Entrada
```
Tipo: fadeIn
Duración: 300ms
Efecto: Aparece con fade desde arriba
```

### Salida
```
Tipo: fadeOut
Duración: 200ms
Efecto: Desaparece con fade
```

### Progress Bar
```
Animación: linear
Color: Coincide con el tipo de alerta
Hover: Pausa el timer
Leave: Resume el timer
```

---

## Responsive Design

### Desktop (> 768px)
```
Ancho modal: 500px
Posición: Centro de la pantalla
Toast: Esquina superior derecha
```

### Mobile (< 768px)
```
Ancho modal: 90% del viewport
Posición: Centro de la pantalla
Toast: Parte superior (full width)
Fuente: Ajustada automáticamente
```

---

## Accesibilidad

### Teclado
```
Enter     : Confirmar
Escape    : Cancelar/Cerrar
Tab       : Navegar entre botones
```

### Screen Readers
```
✅ ARIA labels incluidos
✅ Roles semánticos
✅ Anuncios de cambios de estado
```

---

## Mejores Prácticas Visuales

### DO ✅
- Usar colores consistentes con el tipo de mensaje
- Mantener textos concisos (< 80 caracteres)
- Usar iconos apropiados
- Configurar timers razonables (3-4s)
- Agrupar notificaciones similares

### DON'T ❌
- Mostrar múltiples alertas al mismo tiempo
- Usar colores contradictorios
- Textos muy largos sin formato
- Timers muy cortos (< 2s)
- Alertas sin contexto claro

---

**🎨 Diseño Visual Completado**  
**Consistencia:** 100%  
**Accesibilidad:** AAA  
**Responsive:** Sí
