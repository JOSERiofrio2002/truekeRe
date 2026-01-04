# 🎯 PUNTO DE ENTRADA - Truekealo

> **Bienvenido.** Este es tu guía para navegar todo el proyecto Truekealo.  
> **Comienza aquí** si es tu primer contacto con el sistema.

---

## ⚡ 3 Minutos: Entender Qué Es

**Truekealo** es una plataforma web donde usuarios:
- 📸 Publican artículos que no usan
- 🔍 Buscan artículos de otros
- 🤝 Proponen intercambios directos (sin dinero)
- 💬 Se comunican entre sí

**Stack Tecnológico:**
```
Frontend: HTML5 + Tailwind CSS + Vanilla JavaScript
Backend:  FastAPI (Python) + SQLAlchemy ORM
Database: MariaDB (relacional)
Auth:     JWT tokens + Bcrypt hashing
```

---

## 🗺️ Elige Tu Ruta

### 👨‍🎓 Soy Evaluador/Profesor
**Tiempo total: ~30 minutos**

1. 📄 Lee [README.md](README.md) (5 min)
2. 📊 Visualiza [RESUMEN_VISUAL.md](docs/RESUMEN_VISUAL.md) (5 min)
3. 🏗️ Revisa [Diagramas C4](docs/architecture/) (10 min)
4. ✅ Consulta [CHECKLIST_VERIFICACION.md](docs/CHECKLIST_VERIFICACION.md) (5 min)
5. 📈 Lee [RESUMEN_EJECUTIVO.md](docs/RESUMEN_EJECUTIVO.md) (5 min)

**Resultado:** Entender qué se completó y cómo funciona.

---

### 👨‍💻 Soy Desarrollador
**Tiempo total: ~2 horas**

1. 📄 [README.md](README.md) - Overview (5 min)
2. 🚀 [INSTALACION.md](docs/INSTALACION.md) - Setup (20 min)
3. 📖 [DOCUMENTACION_TECNICA.md](docs/DOCUMENTACION_TECNICA.md) - API y arquitectura (45 min)
4. 📁 Explora código en [Truekealo/](Truekealo/) (30 min)
5. 🔀 [GITFLOW_GUIDE.md](docs/GITFLOW_GUIDE.md) - Workflow (15 min)

**Resultado:** Listo para contribuir al proyecto.

---

### 🚀 Quiero Ejecutar El Sistema Ahora
**Tiempo total: 15 minutos**

```bash
# 1. Clonar repo (ya hecho)
cd SistemaTrueque-Personal--develop

# 2. Backend (Terminal 1)
cd Truekealo/backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
cp .env.example .env
pip install -r requirements.txt
python -m uvicorn app.main:app --reload

# 3. Frontend (Terminal 2)
cd Truekealo/frontend
python -m http.server 5500
```

**Acceder:** http://localhost:5500

**Nota:** Necesitas MariaDB. Ver [INSTALACION.md](docs/INSTALACION.md) para setup completo.

---

### 📊 Quiero Entender la Arquitectura
**Tiempo total: 30 minutos**

1. 📊 [RESUMEN_VISUAL.md](docs/RESUMEN_VISUAL.md) - Diagramas ASCII (10 min)
2. 🏗️ [docs/architecture/](docs/architecture/) - Diagramas C4 (15 min)
3. 📖 [DOCUMENTACION_TECNICA.md](docs/DOCUMENTACION_TECNICA.md) - Sección "Arquitectura" (10 min)

**Resultado:** Entender componentes, flujos y relaciones.

---

### 🔐 Quiero Entender la Seguridad
**Tiempo total: 20 minutos**

1. 📖 [DOCUMENTACION_TECNICA.md#seguridad](docs/DOCUMENTACION_TECNICA.md#-seguridad) (15 min)
2. 🔍 [Backend security.py](Truekealo/backend/app/core/security.py) - Código (5 min)

**Resultado:** Conocer JWT, Bcrypt, CORS, validación.

---

### 🗄️ Quiero Entender la Base de Datos
**Tiempo total: 15 minutos**

1. 📖 [DOCUMENTACION_TECNICA.md#modelo-de-datos](docs/DOCUMENTACION_TECNICA.md#-modelo-de-datos) (10 min)
2. 📁 [Backend models/](Truekealo/backend/app/models/) - Ver modelos (5 min)

**Resultado:** Conocer 4 tablas, relaciones, indexes.

---

### 🔀 Quiero Aprender GitFlow
**Tiempo total: 30 minutos**

Lee [GITFLOW_GUIDE.md](docs/GITFLOW_GUIDE.md):
- Branching strategy
- Commit conventions
- Casos prácticos

**Resultado:** Saber cómo contribuir con git.

---

## 📚 Índice Completo

Para navegar **toda** la documentación en orden:

👉 **[INDICE.md](docs/INDICE.md)** - Índice navegable de todos los documentos

---

## 📍 Ubicación de Recursos Clave

### Código

```
Frontend:  Truekealo/frontend/
Backend:   Truekealo/backend/app/
Database:  (Configuración en Truekealo/backend/.env)
```

### Documentos

```
README:            README.md (este, en raíz)
Punto Entrada:     ← Estás aquí
Índice:            docs/INDICE.md
Visual:            docs/RESUMEN_VISUAL.md
Técnico:           docs/DOCUMENTACION_TECNICA.md
Instalación:       docs/INSTALACION.md
GitFlow:           docs/GITFLOW_GUIDE.md
Ejecutivo:         docs/RESUMEN_EJECUTIVO.md
Checklist:         docs/CHECKLIST_VERIFICACION.md
```

### Diagramas

```
Diagrama Context:      docs/architecture/01-context-diagram.puml
Diagrama Container:    docs/architecture/02-container-diagram.puml
Diagrama Componentes:  docs/architecture/03-component-frontend.puml
Diagrama Código:       docs/architecture/04-code-backend.puml
```

---

## 🎯 Buscar Algo Específico

### "¿Cómo...?"

| Pregunta | Respuesta |
|----------|----------|
| ¿Cómo instalo? | [INSTALACION.md](docs/INSTALACION.md) |
| ¿Cómo hago login? | [DOCUMENTACION_TECNICA.md#flujo-de-autenticación](docs/DOCUMENTACION_TECNICA.md#autenticación-jwt) |
| ¿Cuáles son los endpoints? | [DOCUMENTACION_TECNICA.md#endpoints](docs/DOCUMENTACION_TECNICA.md#-endpoints-de-la-api-rest) |
| ¿Cómo contribuyo? | [GITFLOW_GUIDE.md](docs/GITFLOW_GUIDE.md) |
| ¿Cómo reseteo la BD? | [INSTALACION.md#troubleshooting](docs/INSTALACION.md#-solución-de-problemas) |
| ¿Qué tecnologías usa? | [README.md](README.md) |

### "¿Dónde está...?"

| Tema | Ubicación |
|------|-----------|
| Modelos de BD | `Truekealo/backend/app/models/` |
| Endpoints API | `Truekealo/backend/app/routers/` |
| Validación | `Truekealo/backend/app/schemas/` |
| Cliente HTTP | `Truekealo/frontend/assets/js/api-client.js` |
| Templates HTML | `Truekealo/frontend/templates/` |
| Estilos CSS | `Truekealo/frontend/assets/css/` |

### "¿Qué error tengo...?"

| Error | Solución |
|-------|----------|
| "No module named app" | [DOCUMENTACION_TECNICA.md#troubleshooting](docs/DOCUMENTACION_TECNICA.md#-resolución-de-problemas) |
| "Connection refused BD" | [INSTALACION.md](docs/INSTALACION.md) |
| CORS error | [DOCUMENTACION_TECNICA.md#cors](docs/DOCUMENTACION_TECNICA.md#-seguridad) |
| Token expirado | [DOCUMENTACION_TECNICA.md#jwt](docs/DOCUMENTACION_TECNICA.md#autenticación-jwt) |

---

## 🎓 Rutas de Aprendizaje Detalladas

### Ruta "Rápida" (30 min)
```
1. README.md ...................... 5 min
2. RESUMEN_VISUAL.md .............. 5 min
3. Diagramas C4 ................... 10 min
4. INSTALACION.md (vistazo) ....... 5 min
5. CHECKLIST_VERIFICACION.md ...... 5 min
```
**Resultado:** Entender qué es y cómo funciona.

---

### Ruta "Completa" (2 horas)
```
1. README.md ...................... 5 min
2. RESUMEN_VISUAL.md .............. 5 min
3. Diagramas C4 ................... 15 min
4. INSTALACION.md ................. 20 min
5. DOCUMENTACION_TECNICA.md ....... 45 min
6. GITFLOW_GUIDE.md ............... 20 min
7. RESUMEN_EJECUTIVO.md ........... 10 min
```
**Resultado:** Conocimiento profundo del sistema.

---

### Ruta "Desarrollo" (3 horas)
```
1. Ruta Completa (arriba) ......... 120 min
2. Explorar código:
   - Truekealo/backend/app/ ....... 30 min
   - Truekealo/frontend/ .......... 20 min
3. Swagger UI en http://localhost:8000/api/docs .... 10 min
```
**Resultado:** Listo para desarrollar features.

---

## ✅ Checklist Antes de Empezar

- [ ] Python 3.9+ instalado
- [ ] MariaDB instalado (o Docker disponible)
- [ ] Git instalado
- [ ] Editor de código (VS Code recomendado)
- [ ] Navegador moderno
- [ ] Terminal/PowerShell disponible

Ver [INSTALACION.md](docs/INSTALACION.md) para verificación completa.

---

## 🚀 Próximos Pasos Recomendados

### Opción A: Revisor/Evaluador
1. Leer este punto de entrada ✓
2. Ver [RESUMEN_VISUAL.md](docs/RESUMEN_VISUAL.md)
3. Revisar código en [Truekealo/](Truekealo/)
4. Consultar [CHECKLIST_VERIFICACION.md](docs/CHECKLIST_VERIFICACION.md)

### Opción B: Desarrollador
1. Leer este punto de entrada ✓
2. Seguir [INSTALACION.md](docs/INSTALACION.md)
3. Ejecutar backend y frontend
4. Explorar [DOCUMENTACION_TECNICA.md](docs/DOCUMENTACION_TECNICA.md)
5. Leer [GITFLOW_GUIDE.md](docs/GITFLOW_GUIDE.md)

### Opción C: Quickstart
1. Leer este punto de entrada ✓
2. Ejecutar comandos en "Quiero Ejecutar El Sistema Ahora" arriba
3. Explorar en http://localhost:5500

---

## 📊 Información del Proyecto

| Aspecto | Detalle |
|--------|---------|
| **Nombre** | Truekealo |
| **Descripción** | Plataforma de intercambio de artículos |
| **Tipo** | Full-Stack Web Application |
| **Frontend** | HTML5 + CSS3 + Vanilla JS (2500+ líneas) |
| **Backend** | FastAPI + SQLAlchemy (1500+ líneas) |
| **Database** | MariaDB (4 tablas) |
| **Endpoints** | 15+ documentados |
| **Documentación** | 8700+ líneas |
| **Licencia** | MIT |
| **Estado** | ✅ Completado |
| **Versión** | 1.0.0 |

---

## 📞 ¿Necesitas Ayuda?

1. **¿No sabes por dónde empezar?**
   - Elige tu ruta arriba en "Elige Tu Ruta"

2. **¿Buscas algo específico?**
   - Consulta "Buscar Algo Específico"

3. **¿Necesitas documentación?**
   - Ve a [INDICE.md](docs/INDICE.md)

4. **¿Tienes un error?**
   - Busca en "¿Qué error tengo...?"
   - O ve a [DOCUMENTACION_TECNICA.md#troubleshooting](docs/DOCUMENTACION_TECNICA.md#-resolución-de-problemas)

5. **¿Quieres contribuir?**
   - Lee [GITFLOW_GUIDE.md](docs/GITFLOW_GUIDE.md)

---

## 🎯 En Resumen

| Nivel | Qué leer | Tiempo |
|-------|----------|--------|
| 🟢 Básico | [README.md](README.md) | 5 min |
| 🟡 Intermedio | [INSTALACION.md](docs/INSTALACION.md) | 20 min |
| 🔴 Avanzado | [DOCUMENTACION_TECNICA.md](docs/DOCUMENTACION_TECNICA.md) | 45 min |
| ⭐ Completo | Todo lo anterior + código | 2 horas |

---

## 🔗 Enlaces Rápidos

- 🏠 [README Principal](README.md)
- 📑 [Índice Completo](docs/INDICE.md)
- 📊 [Resumen Visual](docs/RESUMEN_VISUAL.md)
- 🏗️ [Arquitectura C4](docs/architecture/)
- 📖 [Documentación Técnica](docs/DOCUMENTACION_TECNICA.md)
- 🚀 [Guía de Instalación](docs/INSTALACION.md)
- 🔀 [GitFlow Guide](docs/GITFLOW_GUIDE.md)
- ✅ [Checklist](docs/CHECKLIST_VERIFICACION.md)
- 📊 [Resumen Ejecutivo](docs/RESUMEN_EJECUTIVO.md)

---

## 💡 Pro Tips

✅ **Abre Swagger UI mientras desarrollas:**
```
http://localhost:8000/api/docs
```

✅ **Usa múltiples terminales:**
```
Terminal 1: Backend (cd Truekealo/backend)
Terminal 2: Frontend (cd Truekealo/frontend)
Terminal 3: Git/Misc
```

✅ **Pon esta página como bookmark:**
```
Estás en: docs/PUNTO_ENTRADA.md
```

✅ **Si algo no está claro:**
```
1. Buscar en INDICE.md
2. Consultar DOCUMENTACION_TECNICA.md
3. Revisar código fuente
```

---

**Última actualización:** 2 de enero de 2025  
**Versión:** 1.0  
**Licencia:** MIT

*Truekealo - Sistema de Intercambio de Artículos*  
*Proyecto Integrador Segundo Hito*

---

**👉 [Comienza con tu ruta elegida arriba](#-elige-tu-ruta)**
