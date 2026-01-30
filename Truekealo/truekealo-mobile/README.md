# Truekealo Mobile App

Aplicación móvil del sistema de trueque Truekealo, desarrollada con React Native y Expo.

## 🚀 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Instalar Expo CLI globalmente (si no lo tienes):
```bash
npm install -g expo-cli
```

## 📱 Ejecutar la aplicación

### Desarrollo
```bash
npm start
```

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## 📋 Requisitos previos

- Node.js 18 o superior
- Expo Go app instalada en tu dispositivo móvil
- Para iOS: Mac con Xcode
- Para Android: Android Studio

## 🏗️ Estructura del proyecto

```
truekealo-mobile/
├── app/                    # Pantallas principales (Expo Router)
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── services/          # Servicios API
│   ├── context/           # Context API
│   ├── hooks/             # Custom hooks
│   ├── navigation/        # Configuración de navegación
│   ├── utils/             # Utilidades
│   └── constants/         # Constantes
├── assets/                # Imágenes, fuentes, etc.
└── app.json              # Configuración de Expo
```

## 🔧 Configuración

Edita el archivo `src/constants/config.js` para configurar la URL del backend:

```javascript
export const API_URL = 'http://tu-servidor:8000';
```

## 📦 Características

- ✅ Autenticación de usuarios
- ✅ Navegación por pestañas
- ✅ Publicar artículos con imágenes
- ✅ Explorar artículos disponibles
- ✅ Sistema de mensajería
- ✅ Gestión de propuestas de trueque
- ✅ Perfil de usuario

## 🛠️ Tecnologías

- React Native
- Expo
- React Navigation
- Axios
- Expo Image Picker
- Expo Secure Store
