# Cómo agregar tus videos a las galerías de los paquetes

## Estructura de carpetas

```
src/assets/videos/
├── paquete1/     ← Videos del Paquete Básico
├── paquete2/     ← Videos del Paquete Profesional
└── paquete3/     ← Videos del Paquete Premium
```

## Paso 1: Coloca tus videos en las carpetas correspondientes

**Formatos soportados:** `.mp4`, `.webm`, `.mov`

**Nombres sugeridos:**
- Paquete 1: `video1.mp4`, `video2.mp4`, etc.
- Paquete 2: `video1.mp4`, `video2.mp4`, etc.
- Paquete 3: `video1.mp4`, `video2.mp4`, etc.

## Paso 2: Edita los archivos de cada paquete

### Para Paquete 1 (Básico)

Abre: `src/app/pages/Paquete1.tsx`

1. **Descomenta e importa tus videos** (parte superior del archivo):

```tsx
// Cambia de:
// import video1 from '../../assets/videos/paquete1/video1.mp4';
// import video2 from '../../assets/videos/paquete1/video2.mp4';

// A:
import video1 from '../../assets/videos/paquete1/video1.mp4';
import video2 from '../../assets/videos/paquete1/video2.mp4';
```

2. **Activa los videos en el array**:

```tsx
const videos = [
  {
    id: 1,
    video: video1, // ← Descomenta esta línea
    title: 'Proyecto Básico 1',
    description: 'Edición · 30 seg'
  },
  // ...
];
```

### Para Paquete 2 y 3

Sigue los mismos pasos en:
- `src/app/pages/Paquete2.tsx`
- `src/app/pages/Paquete3.tsx`

## Ejemplo completo

```tsx
// Imports
import video1 from '../../assets/videos/paquete1/video1.mp4';
import video2 from '../../assets/videos/paquete1/video2.mp4';

export function Paquete1() {
  const videos = [
    {
      id: 1,
      video: video1,
      title: 'Mi primer video',
      description: 'Tutorial de edición'
    },
    {
      id: 2,
      video: video2,
      title: 'Mi segundo video',
      description: 'Video promocional'
    },
    // ... resto de videos
  ];
  
  // ...resto del código
}
```

## Tips

- **Tamaño recomendado:** Máximo 10-20MB por video para optimizar carga
- **Resolución:** 1080x1920 (vertical 9:16) o menor
- **Duración:** 10-60 segundos recomendado
- Si no tienes video para un slot, simplemente no agregues la línea `video:`
- Puedes personalizar `title` y `description` de cada video
