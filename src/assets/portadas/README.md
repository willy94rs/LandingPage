# Cómo agregar tus imágenes de portadas

## Paso 1: Coloca tus imágenes aquí
Copia tus imágenes de portadas en esta carpeta: `src/assets/portadas/`

**Formatos recomendados:** `.jpg`, `.png`, `.webp`

**Nombres sugeridos:** 
- `portada1.jpg`
- `portada2.jpg`
- `portada3.jpg`
- etc.

## Paso 2: Edita el archivo Portadas.tsx

Abre el archivo: `src/app/pages/Portadas.tsx`

### 2.1 Descomenta e importa tus imágenes

En la parte superior del archivo, busca estas líneas y descoméntalas (quita las `//`):

```tsx
// import portada1 from '../../assets/portadas/portada1.jpg';
// import portada2 from '../../assets/portadas/portada2.jpg';
// import portada3 from '../../assets/portadas/portada3.jpg';
```

Cambia a:

```tsx
import portada1 from '../../assets/portadas/portada1.jpg';
import portada2 from '../../assets/portadas/portada2.jpg';
import portada3 from '../../assets/portadas/portada3.jpg';
```

**IMPORTANTE:** Ajusta los nombres según tus archivos reales.

### 2.2 Activa las imágenes en el array

Busca el array `portadas` y descomenta la línea `image`:

```tsx
const portadas = [
  {
    id: 1,
    image: portada1, // ← Quita el // de esta línea
    title: 'Portada 1',
    description: 'Diseño de miniatura profesional'
  },
  // ...
];
```

## Ejemplo completo

```tsx
// Imports
import portada1 from '../../assets/portadas/portada1.jpg';
import portada2 from '../../assets/portadas/portada2.jpg';

export function Portadas() {
  const portadas = [
    {
      id: 1,
      image: portada1,
      title: 'Mi Primera Portada',
      description: 'Video de YouTube sobre tecnología'
    },
    {
      id: 2,
      image: portada2,
      title: 'Segunda Portada',
      description: 'Tutorial de edición'
    },
    // ... resto de portadas
  ];
  
  // ...resto del código
}
```

## Tips

- Puedes personalizar el `title` y `description` de cada portada
- Si no tienes imagen para una portada, simplemente no agregues la línea `image:`
- Las imágenes deben estar optimizadas para web (máximo 500KB recomendado)
- Aspect ratio recomendado: 16:9 (1920x1080px o 1280x720px)
