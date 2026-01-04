# 🔀 Guía de GitFlow - Sistema Truekealo

## 📋 Descripción de GitFlow

GitFlow es un modelo de ramificación que proporciona un marco robusto para gestionar cambios en proyectos de software. Organiza el trabajo en diferentes ramas según su propósito.

---

## 🌳 Estructura de Ramas

### Ramas Principales

```
main (production)
  ↓
  └─→ Rama de despliegue a producción
      Tags: v1.0.0, v1.1.0, etc.
      
develop (integración)
  ↓
  └─→ Rama de integración de features
      Siempre funcional
      Pre-producción
```

### Ramas de Soporte

```
feature/* (nuevas funcionalidades)
  Ejemplo: feature/authentication-jwt
  Origen: develop
  Merge: develop
  
bugfix/* (correcciones de bugs)
  Ejemplo: bugfix/login-validation
  Origen: develop
  Merge: develop
  
release/* (preparación para lanzamiento)
  Ejemplo: release/1.0.0
  Origen: develop
  Merge: main + develop
  Tags: v1.0.0
  
hotfix/* (arreglos urgentes en producción)
  Ejemplo: hotfix/security-patch
  Origen: main
  Merge: main + develop
  Tags: v1.0.1
```

---

## 🚀 Flujo de Trabajo Paso a Paso

### 1️⃣ Inicializar el repositorio

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/SistemaTrueque-Personal.git
cd SistemaTrueque-Personal

# Crear rama develop si no existe
git checkout -b develop origin/main

# Verificar ramas
git branch -a
```

### 2️⃣ Crear una rama de feature

**Pasos para desarrollar una nueva funcionalidad:**

```bash
# 1. Asegurar que develop está actualizado
git checkout develop
git pull origin develop

# 2. Crear rama de feature
git checkout -b feature/nueva-funcionalidad

# Ejemplo real:
git checkout -b feature/sistema-propuestas
git checkout -b feature/filtrado-articulos
git checkout -b feature/notificaciones-email
```

### 3️⃣ Desarrollar y hacer commits

```bash
# Realizar cambios en los archivos
# Ejemplo: crear nuevo router para propuestas

# Ver estado de cambios
git status

# Agregar archivos al staging
git add app/routers/propuestas.py
git add app/schemas/propuesta.py

# O agregar todos los cambios
git add .

# Realizar commit con mensaje descriptivo
git commit -m "feat: implementar sistema de propuestas de intercambio"
```

### 4️⃣ Pushear la rama

```bash
# Enviar rama al repositorio remoto
git push origin feature/nueva-funcionalidad

# Configurar upstream (primera vez)
git push --set-upstream origin feature/nueva-funcionalidad
```

### 5️⃣ Crear Pull Request (PR)

En GitHub:
1. Ir a "Pull Requests" → "New Pull Request"
2. Seleccionar: `base: develop` ← `compare: feature/nueva-funcionalidad`
3. Llenar título y descripción
4. Solicitar revisores
5. Crear PR

### 6️⃣ Code Review y Merge

```bash
# Una vez aprobado el PR, mergear a develop

# En la rama develop:
git checkout develop
git pull origin develop

# Mergear feature
git merge --no-ff feature/nueva-funcionalidad

# Opcionalmente: eliminar rama local
git branch -d feature/nueva-funcionalidad

# Eliminar rama remota
git push origin --delete feature/nueva-funcionalidad
```

---

## 📝 Convención de Commits

### Formato

```
<tipo>(<alcance>): <descripción breve>

<descripción detallada (opcional)>

<referencias a issues (opcional)>
```

### Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **feat** | Nueva funcionalidad | `feat: agregar sistema de propuestas` |
| **fix** | Corrección de bug | `fix: validar email en login` |
| **docs** | Documentación | `docs: actualizar README` |
| **style** | Formato de código (sin cambios lógicos) | `style: formatear con PEP8` |
| **refactor** | Refactorización de código | `refactor: mejorar estructura de modelos` |
| **perf** | Mejora de performance | `perf: optimizar consulta SQL` |
| **test** | Tests y cobertura | `test: agregar tests de autenticación` |
| **chore** | Tareas sin código de producción | `chore: actualizar dependencias` |
| **ci** | Cambios en CI/CD | `ci: configurar GitHub Actions` |

### Ejemplos Completos

**✅ Buenos commits:**

```bash
# Feature simple
git commit -m "feat: implementar endpoint GET /articulos"

# Feature con descripción
git commit -m "feat(auth): agregar autenticación JWT

- Implementar token generation
- Crear middleware de validación
- Agregar refresh token
- Fixes #42"

# Bugfix
git commit -m "fix(articulos): corregir validación de categoría"

# Refactoring
git commit -m "refactor: mejorar estructura de schemas

- Separar schemas en módulos
- Estandarizar validaciones
- Mejorar reutilización de código"
```

**❌ Malos commits:**

```bash
git commit -m "cambios"                    # ✗ Poco descriptivo
git commit -m "ARREGLAR ERRORES"           # ✗ Sin minúsculas
git commit -m "feat: fix: agregar cosas"   # ✗ Tipo confuso
git commit -m "actualización de archivos"  # ✗ Sin contexto
```

---

## 🔄 Casos de Uso Prácticos

### Caso 1: Desarrollar Feature de Artículos

```bash
# 1. Crear rama desde develop
git checkout develop
git pull origin develop
git checkout -b feature/crud-articulos

# 2. Desarrollar la funcionalidad
# - Crear modelos
# - Crear schemas
# - Crear routers
# - Crear tests

# 3. Hacer commits organizados
git add app/models/articulo.py
git commit -m "feat(models): crear modelo Articulo"

git add app/schemas/articulo.py
git commit -m "feat(schemas): crear validadores de articulo"

git add app/routers/articulos.py
git commit -m "feat(api): implementar endpoints CRUD para articulos"

git add tests/test_articulos.py
git commit -m "test: agregar tests para endpoints de articulos"

# 4. Pushear
git push origin feature/crud-articulos

# 5. Crear PR en GitHub
# 6. Una vez aprobado y merged, eliminar rama
git branch -d feature/crud-articulos
```

### Caso 2: Corregir Bug en Login

```bash
# 1. Crear rama bugfix desde develop
git checkout develop
git pull origin develop
git checkout -b bugfix/validacion-email

# 2. Arreglar el bug
# Editar archivo app/routers/auth.py

# 3. Hacer commit descriptivo
git add app/routers/auth.py
git commit -m "fix(auth): validar formato de email correctamente

Fixes #125
- Agregar validación de dominio
- Mejorar mensajes de error
- Agregar tests para validación"

# 4. Pushear y crear PR
git push origin bugfix/validacion-email
```

### Caso 3: Preparar Lanzamiento v1.0.0

```bash
# 1. Crear rama release desde develop
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# 2. Hacer cambios finales (versión, changelog, etc.)
# Editar version en app/core/config.py
# Actualizar CHANGELOG.md

# 3. Hacer commit
git commit -m "chore(release): preparar v1.0.0

- Actualizar números de versión
- Actualizar CHANGELOG
- Revisar dependencias"

# 4. Mergear a main
git checkout main
git pull origin main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main
git push origin v1.0.0

# 5. Mergear también a develop
git checkout develop
git pull origin develop
git merge --no-ff release/1.0.0
git push origin develop

# 6. Eliminar rama release
git branch -d release/1.0.0
git push origin --delete release/1.0.0
```

### Caso 4: Hotfix de Seguridad en Producción

```bash
# 1. Crear rama hotfix desde main
git checkout main
git pull origin main
git checkout -b hotfix/security-patch

# 2. Arreglar vulnerabilidad
# Editar archivo afectado

# 3. Hacer commit
git commit -m "fix(security): parchear vulnerabilidad XSS

Fixes critical security issue where user input
was not properly sanitized in articulos module"

# 4. Mergear a main
git checkout main
git merge --no-ff hotfix/security-patch
git tag -a v1.0.1 -m "Security patch v1.0.1"
git push origin main
git push origin v1.0.1

# 5. Mergear también a develop
git checkout develop
git merge --no-ff hotfix/security-patch
git push origin develop

# 6. Eliminar rama hotfix
git branch -d hotfix/security-patch
git push origin --delete hotfix/security-patch
```

---

## 📊 Ejemplos de Commits Reales

### Backend - Feature de Autenticación

```bash
commit abc123def456
Author: John Doe <john@example.com>
Date:   Wed Jan 02 10:30:00 2025 -0500

feat(auth): implementar autenticación JWT con refresh tokens

- Agregar soporte para refresh tokens
- Implementar endpoint /auth/refresh
- Mejorar seguridad con token rotation
- Agregar validación de token expirado
- Crear tests para flujo de autenticación

El sistema ahora genera un access_token con duración corta
(30 min) y un refresh_token de larga duración (7 días) para
mejorar la seguridad sin afectar la UX.

Implements: #32
Related-To: #28, #45
```

### Frontend - Feature de Dark Mode

```bash
commit xyz789abc123
Author: Jane Smith <jane@example.com>
Date:   Tue Jan 01 15:45:00 2025 -0500

feat(ui): implementar modo oscuro persistente

- Agregar DarkModeManager class
- Persistir preferencia en localStorage
- Actualizar todos los templates
- Agregar CSS variables para temas
- Mejorar accesibilidad con prefers-color-scheme

Fixes: #18
```

### Bugfix - Validación de Artículos

```bash
commit mnop456qrs789
Author: Bob Wilson <bob@example.com>
Date:   Mon Dec 31 09:20:00 2024 -0500

fix(articulos): validar descripción no vacía

La validación anterior no capturaba descripciones con
solo espacios en blanco. Ahora se valida correctamente.

- Mejorar validador de descripción
- Agregar trimming de whitespace
- Actualizar tests

Fixes: #67
```

---

## 📈 Estadísticas de Commits

```bash
# Ver cantidad de commits por autor
git shortlog -sn

# Ver commits últimos 7 días
git log --since="7 days ago" --oneline

# Ver commits en rama actual
git log --oneline

# Ver cambios en un archivo
git log -p app/models/user.py

# Ver commits de un autor específico
git log --author="John" --oneline
```

---

## 🔐 Mejores Prácticas

### ✅ Hacer

- ✅ Hacer commits pequeños y enfocados
- ✅ Escribir mensajes descriptivos en inglés
- ✅ Referenciar issues en los commits
- ✅ Hacer rebase antes de hacer merge a main
- ✅ Usar tags semver (v1.0.0)
- ✅ Sincronizar regularmente con main
- ✅ Hacer code review antes de merge
- ✅ Ejecutar tests antes de pushear

### ❌ No Hacer

- ❌ Hacer commits enormes con muchos cambios
- ❌ Usar mensajes genéricos ("fix", "update")
- ❌ Commitear archivos sin revisar cambios
- ❌ Hacer merge directo sin PR
- ❌ Forzar push (git push --force)
- ❌ Mergear a main sin tests pasando
- ❌ Dejar ramas sin usar colgadas
- ❌ Commitear credenciales o archivos sensibles

---

## 🛠️ Comandos Útiles

### Gestión de Ramas

```bash
# Listar ramas locales
git branch

# Listar todas las ramas (incluyendo remotas)
git branch -a

# Eliminar rama local
git branch -d feature/nombre

# Eliminar rama remota
git push origin --delete feature/nombre

# Renombrar rama
git branch -m nombre-viejo nombre-nuevo

# Ver última rama usada
git checkout -
```

### Rebase e Integración

```bash
# Rebase feature sobre develop
git checkout feature/nombre
git rebase develop

# Rebase interactivo (agrupar/reordenar commits)
git rebase -i develop

# Abortar rebase
git rebase --abort

# Continuar rebase tras resolver conflictos
git rebase --continue

# Squash de commits
git rebase -i HEAD~3  # Últimos 3 commits
```

### Sincronización

```bash
# Traer cambios de remoto sin mergear
git fetch origin

# Pull = fetch + merge
git pull origin develop

# Sincronizar fork con upstream
git fetch upstream
git rebase upstream/main

# Ver diferencias antes de mergear
git diff develop feature/nombre
```

---

## 📚 Recursos Adicionales

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

**Última actualización: 2 de enero de 2025**

Para consultas o problemas con Git, contacta al equipo de DevOps.
