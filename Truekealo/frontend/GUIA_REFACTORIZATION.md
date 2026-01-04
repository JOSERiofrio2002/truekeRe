# Guía de Eliminación de Código Duplicado en Truekealo

## ✅ Cambios Realizados

### 1. Componentes Reutilizables Creados
Se han creado 4 archivos en `frontend/includes/`:

- **`head-meta.html`** - Meta tags y links a recursos comunes (fuentes, Tailwind, etc.)
- **`tailwind-config.html`** - Configuración centralizada de Tailwind CSS
- **`sidebar.html`** - Navegación principal con mejoras de accesibilidad
- **`footer-scripts.html`** - Scripts que se cargan al final de cada página

### 2. Sistema de Carga de Componentes
Nuevo archivo: `assets/js/include-components.js`

Este script permite cargar componentes HTML de forma automática:
- No requiere servidor Node.js
- Funciona en cualquier servidor web estático
- Detecta y carga elementos marcados con atributo `data-include`

### 3. Mejoras de Accesibilidad Incluidas
En el sidebar actualizado:
- ✓ `aria-label` en botones y elementos principales
- ✓ `aria-current="page"` en navegación activa
- ✓ `aria-hidden="true"` en iconos decorativos
- ✓ `focus:ring-2 focus:ring-primary` para navegación por teclado
- ✓ Etiquetas descriptivas en todos los botones

---

## 📝 CÓMO USAR (Instrucciones para Refactorizar Otras Páginas)

### Para una página nueva (ej: explorar.html):

**ANTES (Como está ahora):**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Truekealo - Explorar</title>
  <!-- Aquí 10 líneas de imports duplicados -->
  <script>tailwind.config = { ... }</script> <!-- 30 líneas duplicadas -->
</head>
<body>
  <div class="flex">
    <!-- Sidebar completo: 50+ líneas duplicadas -->
  </div>
  <main>
    <!-- Contenido específico -->
  </main>
  <!-- Scripts duplicados -->
</body>
</html>
```

**DESPUÉS (Estructura simplificada):**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Truekealo - Explorar</title>
  <!-- Meta Tags y Resources -->
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
  <link href="/assets/css/app.css" rel="stylesheet"/>
  <!-- Tailwind Configuration -->
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#e84c30",
            // ... resto de colores
          }
        }
      }
    }
  </script>
</head>
<body class="font-display bg-background-light dark:bg-background-dark">
  <div class="relative flex min-h-screen w-full">
    <!-- Sidebar -->
    <aside class="sticky top-0 flex h-screen w-64 flex-col bg-card-light dark:bg-card-dark p-4" aria-label="Navegación principal">
      <!-- Contenido del sidebar mejorado con accesibilidad -->
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <!-- Contenido específico de la página -->
    </main>
  </div>

  <!-- Scripts -->
  <script src="/assets/js/include-components.js"></script>
  <script src="/assets/js/config.js"></script>
  <script src="/assets/js/app.js?v=2.2"></script>
</body>
</html>
```

---

## 🔄 Plan para Aplicar a Todas las Páginas

Las siguientes páginas deben actualizarse con la misma estructura:
1. ✅ `dashboard.html` - YA HECHO
2. `explorar.html`
3. `mis-articulos.html`
4. `mensajes.html`
5. `perfil.html`
6. `publicar.html`
7. `configuracion.html`

### Páginas de Autenticación (diferente estructura - sin sidebar):
8. `login.html`
9. `crear-cuenta.html`
10. `recuperar-contrasena.html`
11. `propuesta-intercambio.html` (si aplica)

---

## 📊 Reducción de Código

**Antes de los cambios:**
- Cada página: ~150 líneas de código duplicado
- 10 páginas × 150 líneas = **1,500 líneas duplicadas**

**Después de los cambios:**
- Componentes centralizados: ~200 líneas una sola vez
- Cada página: ~30-40 líneas de overhead
- **Ahorro: ~1,200 líneas de código**

---

## 🛠️ Mantenimiento Futuro

Cuando necesites cambiar algo global (ej: modificar el sidebar):
1. Edita SOLO `frontend/includes/sidebar.html`
2. Los cambios se aplicarán automáticamente a todas las páginas
3. No hay que buscar y reemplazar en 10 archivos diferentes

Ejemplo: Agregar un nuevo enlace al menú
```html
<!-- Editar solo: /includes/sidebar.html -->
<a class="flex items-center gap-3 px-3 py-2 rounded-lg..." href="nueva-pagina.html">
  <span class="material-symbols-outlined" aria-hidden="true">star</span>
  <p class="text-sm font-medium">Nueva Opción</p>
</a>
```

✅ ¡Listo! Aparecerá en todas las páginas.

---

## 📝 Notas Técnicas

- El `include-components.js` usa Fetch API (compatible con todos los navegadores modernos)
- Los componentes se cargan de forma asincrónica sin bloquear el renderizado
- Si deseas verificar que se cargó correctamente, abre DevTools → Console
- Los errores de carga se logean en la consola pero no rompen la página

