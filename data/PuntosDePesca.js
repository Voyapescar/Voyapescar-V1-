  // Voyapescar/data/PuntosDePesca.js

  export const puntosDePesca = [
    {
      id: 1,
      nombre: 'Embalse La Paloma',
      latitude: -30.6710,
      longitude: -70.9650,
      tipo: 'Embalse', // Capitalizado
      region: 'Coquimbo',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Pejerrey Argentino',
          nombreCientifico: 'Odontesthes bonariensis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido lateralmente, tonos plateados con dorso verdoso/azulado y franja plateada lateral nítida. Boca protráctil. Principal objetivo en embalses de la zona.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gusanos de tebo, lombrices pequeñas, corazón de pollo, filet de pejerrey (si permitido).'],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ['Masa', 'Pellet'],
          carnadas: ['Maíz, lombriz de tierra, boilies, masillas diversas.'],
        }
      ],
    },
    {
      id: 2,
      nombre: 'Lago Caburgua',
      latitude: -39.1277,
      longitude: -71.7733,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-caburgua.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 3,
      nombre: 'Lago Chungará',
      latitude: -18.2386,
      longitude: -69.1530,
      tipo: 'Lago', // Capitalizado
      region: 'Arica y Parinacota',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Mosca'],
          carnadas: ['En parques nacionales, usualmente se restringe o prohíbe carnada natural. Priorizar señuelo.'],
        }
      ],
    },
    {
      id: 4,
      nombre: 'Lago Cochrane (o Pueyrredón)',
      latitude: -47.2025,
      longitude: -72.0000,
      tipo: 'Lago', // Capitalizado
      region: 'Aysén',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-cochrane.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 5,
      nombre: 'Lago Colico',
      latitude: -39.0855,
      longitude: -71.9728,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-colico.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        }
      ],
    },
    {
      id: 6,
      nombre: 'Lago General Carrera',
      latitude: -46.4375,
      longitude: -71.7150,
      tipo: 'Lago', // Capitalizado
      region: 'Aysén',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-general-carrera.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 7,
      nombre: 'Lago Lanalhue',
      latitude: -37.9250,
      longitude: -73.3000,
      tipo: 'Lago', // Capitalizado
      region: 'Biobío',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-lanalhue.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Tebos, gusanos pequeños. Consultar SERNAPESCA.'],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ['Masa', 'Pellet'],
          carnadas: ['Maíz, lombrices, masillas especiales para carpa.'],
        }
      ],
    },
    {
      id: 8,
      nombre: 'Lago Llanquihue',
      latitude: -41.1333,
      longitude: -72.7833,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/lago-llanquihue-textura.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['USO DE CARNADA VIVA PROHIBIDO para salmónidos. Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña. Gran saltador.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Perca Trucha (Criolla)',
          nombreCientifico: 'Percichthys trucha',
          imageAsset: require('../imagenes/perca-trucha.png'),
          caracteristicas: 'Cuerpo robusto, cabeza pequeña, boca protráctil. Coloración variable, dorso oliváceo a verde grisáceo, vientre pálido, con manchas oscuras irregulares. Aleta dorsal con porción espinosa.',
          senuelos: ['Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Señuelo artificial preferente. Para carnada natural (lombrices, insectos), consultar SERNAPESCA para zonas específicas y si está permitido.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Spinner', 'Mosca', 'Aparejo de pejerrey'],
          carnadas: ['Tebos, gusanos pequeños, trocitos de corazón de pollo, masilla a base de harina. Consultar regulaciones sobre carnada viva.'],
        }
      ],
    },
    {
      id: 9,
      nombre: 'Lago Lleu Lleu',
      latitude: -38.1580,
      longitude: -73.3160,
      tipo: 'Lago', // Capitalizado
      region: 'Biobío',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-lleu-lleu.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Aparejo de pejerrey'],
          carnadas: ['Tebos, gusanos pequeños. Consultar SERNAPESCA.'],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ['Masa', 'Pellet'],
          carnadas: ['Maíz, lombrices, masillas especiales para carpa.'],
        }
      ],
    },
    {
      id: 10,
      nombre: 'Lago Pirihueico',
      latitude: -39.9280,
      longitude: -71.7500,
      tipo: 'Lago', // Capitalizado
      region: 'Los Ríos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-pirihueico.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 11,
      nombre: 'Lago Puyehue',
      latitude: -40.6655,
      longitude: -72.4633,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-puyehue.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial para salmónidos.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial para salmónidos.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Tebos, gusanos pequeños. Consultar SERNAPESCA.'],
        }
      ],
    },
    {
      id: 12,
      nombre: 'Lago Ranco',
      latitude: -40.2705,
      longitude: -72.3746,
      tipo: 'Lago', // Capitalizado
      region: 'Los Ríos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-ranco.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['USO DE CARNADA VIVA PROHIBIDO para salmónidos. Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['USO DE CARNADA VIVA PROHIBIDO para salmónidos. Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña. Gran saltador.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial para salmónidos.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Spinner', 'Mosca', 'Aparejo de pejerrey'],
          carnadas: ['Tebos, gusanos pequeños, trocitos de corazón de pollo, masilla. Consultar regulaciones.'],
        }
      ],
    },
    {
      id: 13,
      nombre: 'Lago Rupanco',
      latitude: -40.8205,
      longitude: -72.4797,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-rupanco.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial para salmónidos.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial para salmónidos.'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial para salmónidos.'],
        }
      ],
    },
    {
      id: 14,
      nombre: 'Lago Todos los Santos',
      latitude: -41.0912,
      longitude: -72.2345,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-todos-los-santos.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 15,
      nombre: 'Lago Villarrica',
      latitude: -39.2667,
      longitude: -72.0833,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-villarrica.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Tebos, gusanos pequeños. Consultar SERNAPESCA.'],
        }
      ],
    },
    {
      id: 16,
      nombre: 'Lago Yelcho',
      latitude: -43.3036,
      longitude: -72.3103,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-yelcho.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 17,
      nombre: 'Desembocadura Río Loa',
      latitude: -21.4275,
      longitude: -70.0550,
      tipo: 'Desembocadura', // Capitalizado
      region: 'Tarapacá / Antofagasta',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ['Chispa', 'Minnow', 'Jig'],
          carnadas: ['Pejerrey', 'Nape'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ['Vinilo', 'Pejerrey artificial'],
          carnadas: ['Pejerrey vivo/fresco'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Pluma brillante'],
          carnadas: ['Gueple de mar', 'Camarón'],
        }
      ],
    },
    {
      id: 18,
      nombre: 'Desembocadura Río Maipo (Zona Santo Domingo / Lloleo)',
      latitude: -33.6000,
      longitude: -71.6280,
      tipo: 'Desembocadura', // Capitalizado
      region: 'Valparaíso',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Vinilo', 'Minnow', 'Popper'],
          carnadas: ['Pulga de mar', 'Macha', 'Sardina', 'Pejerrey'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey vivo o fresco (principalmente)', 'Sardina'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Camarón'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Camarón pequeño', 'Machita'],
        }
      ],
    },
    {
      id: 19,
      nombre: 'Río Grande (Tierra del Fuego)',
      latitude: -53.7850,
      longitude: -68.7500,
      tipo: 'Río', // Capitalizado
      region: 'Magallanes',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Trucha marrón (Sea-run Brown Trout / Trucha de Mar)',
          nombreCientifico: 'Salmo trutta (forma anádroma)',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Grandes truchas marrones que migran al mar para alimentarse y vuelven al río a desovar. Muy plateadas en el mar, toman coloración más oscura y moteada en el río. Extremadamente fuertes.',
          senuelos: ['Mosca (streamers grandes, oscuros, imitaciones de alevines o pancoras)', 'Cucharilla', 'Minnow'],
          carnadas: ['Pesca con mosca y devolución es la norma y a menudo obligatoria. Señuelo artificial exclusivamente.'],
        },
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Puede haber poblaciones residentes y formas anádromas (Steelhead). Franja lateral rosada/rojiza característica, cuerpo plateado.',
          senuelos: ['Mosca (ninfas, egg patterns, streamers pequeños)', 'Spinner', 'Cucharilla'],
          carnadas: ['Señuelo artificial. Pesca con devolución muy practicada.'],
        }
      ],
    },
    {
      id: 20,
      nombre: 'Río Petrohué (Sector La Poza / Desembocadura Lago Todos los Santos)',
      latitude: -41.1311,
      longitude: -72.4030,
      tipo: 'Río', // Capitalizado
      region: 'Los Lagos',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'],
          carnadas: ['Generalmente pesca con devolución y señuelo artificial. Consultar.'],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca'],
          carnadas: ['Pesca con devolución y señuelo artificial es común. Consultar.'],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Exclusivamente señuelo artificial. Consultar temporada.'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Señuelo artificial. Consultar temporada.'],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Señuelo artificial. Consultar.'],
        }
      ],
    },
    {
      id: 21,
      nombre: 'Río Simpson',
      latitude: -45.5160,
      longitude: -72.1500,
      tipo: 'Río', // Capitalizado
      region: 'Aysén',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial, busca cobertura.',
          senuelos: ['Minnow', 'Cucharilla', 'Mosca (streamers, ninfas, secas)'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca (ninfas, secas, streamers)'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Priorizar señuelo artificial.'],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ['Cucharilla', 'Minnow', 'Mosca'],
          carnadas: ['Carnada viva PROHIBIDA para salmónidos. Uso exclusivo de señuelo artificial.'],
        }
      ],
    },
    {
      id: 22,
      nombre: 'Caleta Constitución, Antofagasta',
      latitude: -23.4330,
      longitude: -70.6050,
      tipo: 'Caleta', // Capitalizado
      region: 'Antofagasta',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Vinilo'],
          carnadas: ['Sardina', 'Anchoa', 'Calamar'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Erizo pequeño', 'Choro'],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: null,
          caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas oscuras. Vive en fondos rocosos, cazador de emboscada.',
          senuelos: ['Jig', 'Vinilo', 'Cucharilla'],
          carnadas: ['Trozo de pescado', 'Camarón', 'Pulga de mar'],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: null,
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ['Jig', 'Vinilo'],
          carnadas: ['Cangrejo pequeño', 'Gusano de mar', 'Lapa'],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomus philippii',
          imageAsset: null,
          caracteristicas: 'Peces de cuerpo alargado, cirros presentes alrededor de los ojos. Dimorfismo sexual en color y tamaño; machos más grandes y robustos.',
          senuelos: ['Micro jig', 'Vinilo'],
          carnadas: ['Pulga de mar', 'Pequeños mariscos'],
        }
      ],
    },
    {
      id: 23,
      nombre: 'Playa Cavancha, Iquique',
      latitude: -20.2350,
      longitude: -70.1455,
      tipo: 'Playa', // Capitalizado
      region: 'Tarapacá',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ['Chispa', 'Jig', 'Vinilo', 'Minnow'],
          carnadas: ['Sardina', 'Anchoa', 'Calamar', 'Pulga de mar'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey fresco', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Machitas', 'Camarón de roca'],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: null,
          caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas oscuras. Vive en fondos rocosos, cazador de emboscada.',
          senuelos: ['Jig', 'Vinilo', 'Cucharilla'],
          carnadas: ['Trozos de pescado', 'Camarón', 'Calamar'],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: null,
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ['Jig', 'Vinilo'],
          carnadas: ['Cangrejos pequeños (jaibitas)', 'Gusanos de mar', 'Piures'],
        }
      ],
    },
    {
      id: 24,
      nombre: 'Playa de Constitución (Zona Piedra de la Iglesia)',
      latitude: -35.3220,
      longitude: -72.4175,
      tipo: 'Playa', // Capitalizado
      region: 'Maule',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Vinilo', 'Minnow', 'Jig'],
          carnadas: ['Pulga de mar', 'Macha', 'Sardina', 'Nape'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey (principalmente)', 'Sardina fresca'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Machitas', 'Piures'],
        },
        {
          nombreComun: 'Jerguilla Común',
          nombreCientifico: 'Aplodactylus punctatus',
          imageAsset: null,
          caracteristicas: 'Color verde con puntos más oscuros, aunque existe variedad amarilla (reina). Herbívora, habita roqueríos sublitorales y vive en comunidad.',
          senuelos: ['Difícil con señuelo, principalmente carnada'],
          carnadas: ['Algas (luche)', 'Piures', 'Pequeños crustáceos'],
        }
      ],
    },
    {
      id: 25,
      nombre: 'Playa de Matanzas',
      latitude: -33.9630,
      longitude: -71.8750,
      tipo: 'Playa', // Capitalizado
      region: 'O\'Higgins',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Vinilo'],
          carnadas: ['Pulga de mar', 'Macha', 'Anchoa'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig'],
          carnadas: ['Pulga de mar', 'Machita'],
        },
        {
          nombreComun: 'Bilagay / Pintacha (Breca)',
          nombreCientifico: 'Cheilodactylus variegatus',
          imageAsset: null,
          caracteristicas: 'Cuerpo robusto, levemente comprimido, cubierto por escamas ctenoides. Pequeña boca con labios notorios. Habita rocas con algas.',
          senuelos: ['Jig', 'Vinilo'],
          carnadas: ['Gueple de mar', 'Pulga de mar'],
        }
      ],
    },
    {
      id: 26,
      nombre: 'Playa de Morhuilla',
      latitude: -37.72829179327564, // Actualizado
    longitude: -73.65172046525569, // Actualizado
      tipo: 'Playa', // Capitalizado
      region: 'Biobío',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Nape (ocasional)', 'Pejerrey (ocasional)', 'Pulga de mar'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Señuelo artificial', 'Vinilo', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Pejerrey (principalmente)', 'Sardina fresca'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Se pesca principalmente con señuelo. Carnada natural poco usual en playa para esta especie.'],
        }
      ],
    },
    {
      id: 27,
      nombre: 'Playa Pichidangui',
      latitude: -32.1330,
      longitude: -71.5300,
      tipo: 'Playa', // Capitalizado
      region: 'Coquimbo',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Minnow'],
          carnadas: ['Pulga de mar', 'Macha', 'Sardina', 'Anchoa'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey fresco o vivo', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Machita', 'Erizo (trozos)'],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: null,
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ['Jig', 'Vinilo'],
          carnadas: ['Cangrejo pequeño', 'Gusano de mar', 'Piure'],
        },
        {
          nombreComun: 'Pejeperro',
          nombreCientifico: 'Semicossyphus darwini',
          imageAsset: null,
          caracteristicas: 'Cuerpo alargado, perfil cóncavo en la cabeza. Juveniles rojos con mancha amarilla tras la cabeza; adultos gris azulado con mancha amarilla. Mentón blanco.',
          senuelos: ['Jig', 'Vinilo'],
          carnadas: ['Jaiba', 'Erizo', 'Choro zapato', 'Lapa'],
        }
      ],
    },
    {
      id: 28,
      nombre: 'Playa El Laucho, Arica',
      latitude: -18.4883,
      longitude: -70.3269,
      tipo: 'Playa', // Capitalizado
      region: 'Arica y Parinacota',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ['Chispa', 'Jig', 'Minnow'],
          carnadas: ['Sardina', 'Anchoa', 'Pulga de mar'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ['Vinilo', 'Señuelo de fondo'],
          carnadas: ['Pejerrey', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Machas pequeñas', 'Camarón'],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: null,
          caracteristicas: 'Cuerpo fusiforme, moderadamente comprimido. Color gris-plateado, dorso más oscuro. Aleta dorsal larga con una profunda incisión en forma de V.',
          senuelos: ['Sabiki', 'Pluma'],
          carnadas: ['Pequeños trozos de camarón o pescado', 'Miga de pan (a veces)'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Camarón de roca', 'Piure'],
        }
      ],
    },
    {
      id: 29,
      nombre: 'Playa Flamenco',
      latitude: -26.8670,
      longitude: -70.7850,
      tipo: 'Playa', // Capitalizado
      region: 'Atacama',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Vinilo', 'Señuelo de superficie'],
          carnadas: ['Sardina', 'Anchoa', 'Calamar', 'Nape'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Spinnerbait'],
          carnadas: ['Pulga de mar', 'Macha', 'Erizo (si está permitido)'],
        },
        {
          nombreComun: 'Cojinova del Norte',
          nombreCientifico: 'Seriolella violacea',
          imageAsset: null,
          caracteristicas: 'Cuerpo fusiforme, dorso azul-negruzco, flancos y vientre plateados. Ojos pequeños rodeados de tejido adiposo (como máscara). Aleta dorsal larga.',
          senuelos: ['Jig metálico', 'Cucharilla'],
          carnadas: ['Sardina entera o trozos grandes', 'Caballa'],
        }
      ],
    },
    {
      id: 30,
      nombre: 'Playa Hornitos',
      latitude: -22.9240,
      longitude: -70.2950,
      tipo: 'Playa', // Capitalizado
      region: 'Antofagasta',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Vinilo', 'Minnow'],
          carnadas: ['Sardina', 'Anchoa', 'Calamar', 'Pulga de mar'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey fresco o vivo', 'Sardina'],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: null,
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ['Jig', 'Imitación de crustáceo'],
          carnadas: ['Pulga de mar', 'Machitas', 'Camarón de roca'],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: null,
          caracteristicas: 'Cuerpo fusiforme, moderadamente comprimido. Color gris-plateado, dorso más oscuro. Aleta dorsal larga con una profunda incisión en forma de V.',
          senuelos: ['Sabiki', 'Pluma'],
          carnadas: ['Pequeños trozos de camarón, anchoveta o calamar'],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomidae spp. / Blenniidae spp.',
          imageAsset: null,
          caracteristicas: 'Peces pequeños de roqueríos, cuerpo alargado, a menudo con cirros o tentáculos en la cabeza. Coloración mimética con el entorno rocoso.',
          senuelos: ['Micro jig', 'Vinilo'],
          carnadas: ['Pulga de mar', 'Pequeños mariscos'],
        }
      ],
    },
    {
      id: 31,
      nombre: 'Playa Larga de Lebu (Caverna Benavides)',
      latitude: -37.58338150166564, // Actualizado
    longitude: -73.64324016953688, // Actualizado
      tipo: 'Playa', // Capitalizado
      region: 'Biobío',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Nape (ocasional)', 'Pejerrey (ocasional)', 'Pulga de mar'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Señuelo artificial', 'Vinilo', 'Minnow', 'Cucharilla'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Pejerrey (principalmente)', 'Sardina fresca'],
        }
      ],
    },
    {
      id: 32,
      nombre: 'Playa Las Brisas, Navidad',
      latitude: -33.9330,
      longitude: -71.8600,
      tipo: 'Playa', // Capitalizado
      region: 'O\'Higgins',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Chispa', 'Jig', 'Minnow'],
          carnadas: ['Pulga de mar', 'Macha', 'Sardina'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Vinilo', 'Jig'],
          carnadas: ['Pejerrey', 'Sardina'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Cucharilla', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Pluma'],
          carnadas: ['Gueple de mar', 'Camarón pequeño', 'Machita'],
        }
      ],
    },
    {
      id: 33,
      nombre: 'Playa Quiapo (Boca Quiapo)',
      latitude: -37.4315,
      longitude: -73.6040,
      tipo: 'Playa', // Capitalizado
      region: 'Biobío',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Nape (ocasional)', 'Pejerrey (ocasional)', 'Pulga de mar'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Señuelo artificial', 'Vinilo', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Pejerrey (principalmente)', 'Sardina fresca'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Se pesca principalmente con señuelo. Carnada natural poco usual en playa para esta especie.'],
        }
      ],
    },
    {
      id: 34,
      nombre: 'Playa Yani (Caleta Yani)',
      latitude: -37.374070,
      longitude: -73.634391,
      tipo: 'Playa', // Capitalizado
      region: 'Biobío',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: null,
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Nape (ocasional)', 'Pejerrey (ocasional)', 'Pulga de mar'],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ['Señuelo artificial', 'Vinilo', 'Minnow'],
          carnadas: ['Gueple de mar', 'Nape', 'Almeja', 'Jibia', 'Pulga de mar'],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ['Aparejo de pejerrey', 'Mosca'],
          carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña'],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ['Minnow', 'Vinilo', 'Chispa', 'Jig'],
          carnadas: ['Pejerrey (principalmente)', 'Sardina fresca'],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ['Cucharilla', 'Spinner', 'Minnow'],
          carnadas: ['Se pesca principalmente con señuelo. Carnada natural poco usual en playa para esta especie.'],
        }
      ],
    },
    
      {
        id: 35,
        nombre: 'Playa Yape',
        latitude: -20.7085, // APROXIMADO - ¡VERIFICAR!
        longitude: -70.1855, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Tarapacá',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti', // Fichas Marinas Sernapesca p.23 [cite: 188]
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos. Muy apetecido en la pesca de orilla.', // Fichas Marinas Sernapesca p.23 [cite: 188]
            senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilos'],
            carnadas: ['Sardina', 'Anchoa', 'Pulga de mar', 'Macha'],
          },
          {
            nombreComun: 'Lenguado Chileno', // Usaremos Paralichthys adspersus, más común para "lenguado" general de playa.
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se mimetiza en fondos arenosos, cazador al acecho.',
            senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos'],
            carnadas: ['Pejerrey vivo o fresco'],
          },
          {
            nombreComun: 'Sargo',
            nombreCientifico: 'Anisotremus scapularis', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            imageAsset: null,
            caracteristicas: 'Cuerpo comprimido y alto, mancha negra en opérculo. Habita fondos rocosos y arenosos.', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            senuelos: ['Jigs pequeños', 'Imitación de pulga de mar'],
            carnadas: ['Pulga de mar', 'Machita', 'Camarón de roca'],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            imageAsset: null,
            caracteristicas: 'Cuerpo alargado, labios gruesos. Habita roqueríos cercanos a la costa y fondos de arena.', // Fichas Marinas Sernapesca p.29 [cite: 249, 254] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ['Jigs de plomo', 'Vinilos con movimiento'],
            carnadas: ['Cangrejo pequeño', 'Piure', 'Lapa', 'Gusanos marinos'], // Fichas Marinas Sernapesca p.29 [cite: 255]
          }
        ],
      },
      {
        id: 36,
        nombre: 'Playa Los Pulpos (Caldera)',
        latitude: -26.8990, // APROXIMADO - ¡VERIFICAR!
        longitude: -70.8175, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Atacama',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Habitual en fondos arenosos de la costa de Atacama.',
            senuelos: ['Vinilos', 'Jigs'],
            carnadas: ['Pejerrey', 'Sardina'],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Buscada en las rompientes y pozones de las playas atacameñas.',
            senuelos: ['Chispas', 'Minnows', 'Jigs pesados'],
            carnadas: ['Pulga de mar', 'Macha', 'Anchoa'],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: null,
            caracteristicas: 'Especie nativa, vive entre fondos rocosos y arena. Cuerpo alargado, labios gruesos.', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ['Jigs de plomo', 'Vinilos que imitan pequeños crustáceos'],
            carnadas: ['Cangrejo pequeño', 'Piure', 'Lapa', 'Gusanos marinos'], // Fichas Marinas Sernapesca p.29 [cite: 255]
          }
        ],
      },
      {
        id: 37,
        nombre: 'Playa Las Machas (Caldera)',
        latitude: -27.1530, // APROXIMADO - ¡VERIFICAR!
        longitude: -70.8640, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Atacama',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Frecuente en playas de arena con oleaje moderado.',
            senuelos: ['Chispas', 'Jigs', 'Cucharillas ondulantes'],
            carnadas: ['Pulga de mar', 'Sardina', 'Anchoa'],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Busca presas en fondos arenosos, excelente camuflaje.',
            senuelos: ['Vinilos imitación pejerrey', 'Señuelos de fondo'],
            carnadas: ['Pejerrey vivo/fresco'],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27 [cite: 233]
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Forma cardúmenes cerca de la orilla, cuerpo plateado con franja lateral.', // Fichas Marinas Sernapesca p.27 [cite: 233, 235]
            senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'],
            carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'],
          }
        ],
      },
      {
        id: 38,
        nombre: 'Playa Socos (Tongoy)',
        latitude: -30.2475, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.4958, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Coquimbo',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Principal objetivo en las playas de Tongoy según PDF de Zonas.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ['Vinilos blancos o plateados', 'Jigs con cola de pluma'],
            carnadas: ['Pejerrey fresco'],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Se captura desde la orilla en las playas de Tongoy según PDF de Zonas.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ['Chispas metálicas', 'Minnows flotantes o de media agua'],
            carnadas: ['Pulga de mar', 'Macha fresca'],
          }
        ],
      },
      {
        id: 39,
        nombre: 'Playa de Guanaqueros',
        latitude: -30.1900, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.4300, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Coquimbo',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Pez plano de fondos arenosos, común en bahías como Guanaqueros.',
            senuelos: ['Vinilos', 'Jigs'],
            carnadas: ['Pejerrey vivo/fresco'],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Presente en la bahía, se acerca a la orilla.',
            senuelos: ['Chispas', 'Minnows'],
            carnadas: ['Pulga de mar', 'Macha'],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Abundante en la zona, ideal para pesca ligera.',
            senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas'],
            carnadas: ['Gueple', 'Camarón'],
          }
        ],
      },
      {
        id: 40,
        nombre: 'Playa Quintay',
        latitude: -33.1927, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.7030, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Vieja Negra (Mulata)',
            nombreCientifico: 'Graus nigra', // Guía Peces Litorales TNC p.8 [cite: 361]
            imageAsset: null,
            caracteristicas: 'Nativa de Chile y Perú, fondos rocosos con cuevas. Longeva. Población disminuida.', // Guía Peces Litorales TNC p.8 [cite: 362, 364, 367]
            senuelos: ['Jigs pesados cerca de rocas', 'Imitaciones de jaiba'],
            carnadas: ['Lapa', 'Jaiba', 'Camarón', 'Erizo'], // Guía Peces Litorales TNC p.8 [cite: 363]
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: null,
            caracteristicas: 'Nativo, habita fondos rocosos y arena. Alim: crustáceos, moluscos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ['Jigs de plomo', 'Vinilos que imitan pequeños crustáceos'],
            carnadas: ['Cangrejo pequeño', 'Piure', 'Lapa', 'Pulga de mar'],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Común en playas con rompientes y pozones.',
            senuelos: ['Chispas', 'Minnows', 'Jigs'],
            carnadas: ['Pulga de mar', 'Macha', 'Sardina'],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Pez plano de fondos arenosos, excelente camuflaje.',
            senuelos: ['Vinilos imitación pejerrey', 'Jigs lentos'],
            carnadas: ['Pejerrey vivo o fresco'],
          }
        ],
      },
      {
        id: 41,
        nombre: 'Playa El Tabo',
        latitude: -33.4530, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.6710, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Pez deportivo popular en la zona.',
            senuelos: ['Chispas', 'Vinilos plateados', 'Jigs'],
            carnadas: ['Macha', 'Pulga de mar'],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se puede encontrar en los sectores más arenosos de la playa.',
            senuelos: ['Señuelos tipo pejerrey', 'Vinilos con cola ágil'],
            carnadas: ['Pejerrey vivo'],
          },
          {
            nombreComun: 'Jerguilla',
            nombreCientifico: 'Aplodactylus punctatus', // Guía Peces Litorales TNC p.13 [cite: 427]
            imageAsset: null,
            caracteristicas: 'Herbívora, habita fondos rocosos con bosques de algas pardas. Variedades de color.', // Guía Peces Litorales TNC p.13 [cite: 428, 429]
            senuelos: ['Difícil con señuelo.'],
            carnadas: ['Algas (luche)', 'Piures', 'Pequeños crustáceos'],
          },
          {
            nombreComun: 'Tomoyo (Chalaco)',
            nombreCientifico: 'Labrisomidae', // Guía Peces Litorales TNC p.11 [cite: 402] (familia)
            imageAsset: null,
            caracteristicas: 'Varias especies difíciles de diferenciar. Fondos rocosos no profundos. Machos cuidan nidos.', // Guía Peces Litorales TNC p.11 [cite: 403, 404]
            senuelos: ['Micro jigs', 'Pequeños vinilos'],
            carnadas: ['Pulga de mar', 'Camarón de roca'],
          }
        ],
      },
      {
        id: 42,
        nombre: 'Playa Las Torpederas (Valparaíso)',
        latitude: -33.0250, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.6370, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Se puede capturar desde el molo o playa, especialmente al atardecer.',
            senuelos: ['Chispa', 'Jig', 'Vinilo pesado'],
            carnadas: ['Sardina', 'Anchoa', 'Pejerrey'],
          },
          {
            nombreComun: 'Róbalo',
            nombreCientifico: 'Eleginops maclovinus',
            imageAsset: require('../imagenes/robalo.png'),
            caracteristicas: 'Habita zonas costeras donde desembocan ríos o esteros, fondos de arena y roca.', // Guía Peces Litorales TNC p.15 [cite: 453]
            senuelos: ['Minnows', 'Cucharillas', 'Spinners'],
            carnadas: ['Gueple de mar', 'Camarón', 'Nape'],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Común en muelles y escolleras, pesca con flotador.',
            senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas'],
            carnadas: ['Gueple de mar', 'Masa de harina y pescado'],
          },
          {
            nombreComun: 'Tomoyo (Chalaco)',
            nombreCientifico: 'Labrisomidae',
            imageAsset: null,
            caracteristicas: 'Habita fondos rocosos y no muy profundos. Varias especies difíciles de diferenciar.', // Guía Peces Litorales TNC p.11 [cite: 402, 403]
            senuelos: ['Micro jigs', 'Vinilos imitación camarón'],
            carnadas: ['Pulga de mar', 'Camarón de roca'],
          }
        ],
      },
      {
        id: 43,
        nombre: 'Desembocadura Río Aconcagua (Concón)',
        latitude: -32.9220, // APROXIMADO - ¡VERIFICAR!
        longitude: -71.5200, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Desembocadura',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Róbalo',
            nombreCientifico: 'Eleginops maclovinus',
            imageAsset: require('../imagenes/robalo.png'),
            caracteristicas: 'Especie principal en desembocaduras, busca la mezcla de agua dulce y salada.',
            senuelos: ['Minnows flotantes o suspending', 'Paseantes', 'Cucharillas'],
            carnadas: ['Nape', 'Gueple de mar', 'Camarón', 'Pejerrey pequeño'],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se acerca a las desembocaduras para alimentarse de peces menores.',
            senuelos: ['Vinilos grandes imitación pejerrey', 'Jigs'],
            carnadas: ['Pejerrey vivo', ],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Ingresa a los estuarios y desembocaduras en busca de alimento.',
            senuelos: ['Chispas', 'Jigs', 'Vinilos con buen peso'],
            carnadas: ['Macha', 'Navajuela', 'Sardina'],
          }
        ],
      },
      {
        id: 44,
        nombre: 'Caleta Rinconada (Cobquecura)',
        latitude: -36.18174781097179,// APROXIMADO - ¡VERIFICAR! -36.18174781097179, -72.81923885753493
        longitude: -72.81923885753493, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Caleta',
        region: 'Ñuble',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: null,
        especies: [
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: null,
            caracteristicas: 'Habita fondos rocosos y arena. Alim: crustáceos, moluscos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ['Jigs de plomo', 'Vinilos imitando pequeños crustáceos'],
            carnadas: ['Cangrejo', 'Piure', 'Lapa'],
          },
          {
            nombreComun: 'Vieja Negra (Mulata)',
            nombreCientifico: 'Graus nigra',
            imageAsset: null,
            caracteristicas: 'Nativa, fondos rocosos con cuevas. Longeva. Alim: lapas, jaibas, locos.', // Guía Peces Litorales TNC p.8 [cite: 362, 363, 364]
            senuelos: ['Jigs pesados para fondo', 'Imitaciones de jaiba grandes'],
            carnadas: ['Lapa', 'Jaiba grande', 'Erizo'],
          },
          {
            nombreComun: 'Cabrilla Común (de roca)',
            nombreCientifico: 'Sebastes capensis', // Fichas Marinas Sernapesca p.20 [cite: 153]
            imageAsset: null,
            caracteristicas: 'Fondos de rocas, color café rojizo. Hembras ovovivíparas.', // Fichas Marinas Sernapesca p.20 [cite: 155, 167]
            senuelos: ['Jigs', 'Vinilos que imiten pequeños peces o camarones'],
            carnadas: ['Jaibas pequeñas', 'Camarones', 'Trozos de pescado'],
          }
        ],
      },
      // COMIENZA A PEGAR DESPUÉS DE TU ÚLTIMO OBJETO EXISTENTE (Y SU COMA)
// Asumiendo que el último ID que tienes es 41.

  {
    id: 45,
    nombre: 'Playa La Pancora (Pichilemu)',
    latitude: -34.3980, // APROXIMADO - ¡VERIFICAR!
    longitude: -72.0350, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa',
    region: "O'Higgins",
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso. Buscada en rompientes y pozones.',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilos grandes'],
        carnadas: ['Pulga de mar', 'Macha', 'Sardina', 'Anchoa'],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Habita zonas costeras, desembocaduras, fondos de arena y roca.', // Guía Peces Litorales TNC p.15
        senuelos: ['Minnows', 'Cucharillas', 'Spinners'],
        carnadas: ['Gueple de mar', 'Camarón', 'Nape'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Pez plano que se camufla en fondos arenosos.',
        senuelos: ['Vinilos imitación pejerrey', 'Jigs lentos'],
        carnadas: ['Pejerrey vivo o fresco'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Forma cardúmenes cerca de la orilla, cuerpo plateado con franja lateral.', // Fichas Marinas Sernapesca p.27
        senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas y brillantes'],
        carnadas: ['Gueple de mar', 'Camarón de mar'],
      }
    ],
  },
  {
    id: 46,
    nombre: 'Playa Grande de Bucalemu',
    latitude: -34.6430, // APROXIMADO - ¡VERIFICAR!
    longitude: -72.0550, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa',
    region: "O'Higgins",
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Principal objetivo de pesca de orilla en extensas playas arenosas.',
        senuelos: ['Chispas grandes', 'Jigs metálicos', 'Vinilos con peso'],
        carnadas: ['Macha', 'Pulga de mar', 'Sardina'],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Se acerca a la orilla en busca de alimento, especialmente en zonas con movimiento de agua.',
        senuelos: ['Minnows tipo suspending', 'Cucharillas', 'Poppers pequeños'],
        carnadas: ['Nape', 'Gueple de mar', 'Camarón'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Prefiere fondos de arena donde puede emboscar a sus presas.',
        senuelos: ['Vinilos imitación pejerrey', 'Jigs planos'],
        carnadas: ['Pejerrey vivo', 'Filete de sardina'],
      },
      { // Sargo es plausible aquí dada la pesca submarina mencionada para Bucalemu y su distribución norte/centro.
        nombreComun: 'Sargo',
        nombreCientifico: 'Anisotremus scapularis',
        imageAsset: null,
        caracteristicas: 'Común en sectores rocosos adyacentes a playas. Cuerpo alto y gris plateado.',
        senuelos: ['Jigs pequeños', 'Micro vinilos'],
        carnadas: ['Pulga de mar', 'Machita'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Forma cardúmenes cerca de la orilla.',
        senuelos: ['Aparejo de pejerrey', 'Plumas'],
        carnadas: ['Gueple de mar', 'Camarón'],
      }
    ],
  },
  {
    id: 47, // Anteriormente Playa Las Torpederas, ahora corregido
    nombre: 'Playa Buchupureo',
    latitude: -36.0840, // APROXIMADO - ¡VERIFICAR!
    longitude: -72.7880, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa',
    region: 'Ñuble',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Frecuente en playas con buenas rompientes y pozones.',
        senuelos: ['Chispas', 'Jigs pesados', 'Minnows'],
        carnadas: ['Pulga de mar', 'Macha', 'Sardina'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Se encuentra en los sectores de arena, a menudo cerca de estructuras rocosas o desembocaduras.',
        senuelos: ['Vinilos imitación pejerrey', 'Jigs con carnada'],
        carnadas: ['Pejerrey vivo/fresco'],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Común en la zona, busca la influencia de esteros cercanos.',
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows'],
        carnadas: ['Gueple de mar', 'Nape', 'Camarón'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Cardúmenes presentes en la orilla.',
        senuelos: ['Aparejo de pejerrey', 'Moscas pequeñas'],
        carnadas: ['Gueple', 'Trozo de pescado'],
      }
    ],
  },
  {
    id: 48, // Anteriormente Playa Escuadrón, ahora corregido
    nombre: 'Playa Perales (Coelemu)',
    latitude: -36.42602028651095,  // APROXIMADO - ¡VERIFICAR! -36.42602028651095, -72.87340044644809
    longitude: -72.87340044644809, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa', // Cerca de desembocadura Río Itata
    region: 'Ñuble',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy común cerca de desembocaduras de ríos importantes como el Itata.',
        senuelos: ['Minnows de superficie y media agua', 'Cucharillas', 'Vinilos'],
        carnadas: ['Nape', 'Gueple de mar', 'Camarón de río/mar'],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Se acerca a las desembocaduras en busca de alimento.',
        senuelos: ['Chispas', 'Jigs', 'Grandes vinilos'],
        carnadas: ['Macha', 'Sardina', 'Pejerrey'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Presente en los fondos arenosos de la playa y la zona de la desembocadura.',
        senuelos: ['Vinilos imitación pejerrey ', 'Jigs'],
        carnadas: ['Pejerrey vivo'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Frecuente en aguas salobres y costeras.',
        senuelos: ['Aparejo tradicional', 'Plumas'],
        carnadas: ['Gueple', 'Camarón'],
      }
    ],
  },
  {
    id: 49, //Tolten
    nombre: 'Playa Barra del Toltén ',
    latitude: -39.25976098093461,  // APROXIMADO - ¡VERIFICAR! (Costa de Toltén, cerca de Queule y desembocadura Toltén)
    longitude: -73.22367575207505, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa', // Influencia de desembocadura
    region: 'La Araucanía',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // Fichas Dulceacuícolas p.27
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'Grandes ejemplares pueden ser capturados cerca de la desembocadura del Toltén en temporada.', // Fichas Dulceacuícolas p.27
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados'],
        carnadas: ['Principalmente señuelo, a veces con carnada en el río.'],
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // Fichas Dulceacuícolas p.29
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'También presente en la zona del Toltén, remonta ríos para desovar.', // Fichas Dulceacuícolas p.29
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos'],
        carnadas: ['Principalmente señuelo.'],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy común en desembocaduras y playas sureñas.',
        senuelos: ['Cucharillas', 'Minnows'],
        carnadas: ['Nape', 'Gueple'],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Habitual en las playas del sur con buenas rompientes.',
        senuelos: ['Chispas', 'Jigs'],
        carnadas: ['Macha', 'Sardina'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'En fondos arenosos, a menudo cerca de la rompiente y desembocaduras.',
        senuelos: ['Vinilos', 'Jigs'],
        carnadas: ['Pejerrey vivo'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Presente en la zona costera.',
        senuelos: ['Aparejo de pejerrey'],
        carnadas: ['Gueple', 'Camarón'],
      }
    ],
  },
  {
    id: 50, // Playa Chaihuín, ahora con Pejerrey de Mar
    nombre: 'Playa y Desembocadura Chaihuín',
    latitude: -39.9470, // APROXIMADO - ¡VERIFICAR!
    longitude: -73.5750, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa', // También 'Desembocadura'
    region: 'Los Ríos',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy presente en desembocaduras de ríos sureños como el Chaihuín.',
        senuelos: ['Minnows', 'Cucharillas', 'Vinilos imitación pejerrey'],
        carnadas: ['Nape', 'Pancora de río/mar', 'Gueple'],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Busca alimento en la zona de mezcla de aguas y en la playa adyacente.',
        senuelos: ['Vinilos', 'Jigs'],
        carnadas: ['Pejerrey vivo', 'Sardina'],
      },
      {
        nombreComun: 'Corvina', // Menos común tan al sur, pero posible
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Puede ingresar a las zonas costeras cercanas a desembocaduras.',
        senuelos: ['Chispas', 'Jigs', 'Cucharillas grandes'],
        carnadas: ['Macha', 'Navajuela', 'Sardina'],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Común en estuarios y playas del sur.',
        senuelos: ['Aparejo de pejerrey', 'Plumas'],
        carnadas: ['Gueple de mar', 'Camarón'],
      }
    ],
  },
 
  {
    id: 52,
    nombre: 'Playa Maule (Puerto Saavedra)',
    latitude: -38.812374813130454,
    longitude: -73.4018133507681,
    tipo: 'Playa',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar, especialmente para salmónidos en desembocaduras.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos.', // [cite: 239, 453]
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // [cite: 454] (TNC), Sernapesca no especifica señuelos.
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // [cite: 454] (TNC), Sernapesca no especifica carnadas.
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // [cite: 188, 195]
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'],
        carnadas: ['Pulga de mar', 'Macha', 'Sardina', 'Pejerrey'], // [cite: 195] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus', // Consistent with user's array
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla en fondos arenosos, cazador al acecho. El lado oculado de color café oscuro homogéneo, sin manchas. El lado ciego de color cremoso. Siente especial predilección por los pejerreyes.', // [cite: 214, 221] (Adaptado de Lenguado de Ojos Chicos, ya que P. adspersus no está en Sernapesca PDF marinas)
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos'],
        carnadas: ['Pejerrey vivo o fresco'], // [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.', // [cite: 233, 237]
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'],
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Sernapesca PDF menciona dieta de anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236, 237]
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. Machos adultos reproductivos con cabeza grande y mandíbula ganchuda.', // [cite: 687, 691, 693]
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados'],
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes.'], // Regulaciones suelen ser estrictas para salmónidos.
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. Machos adultos con mandíbula deformada.', // [cite: 710, 713, 715]
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos'],
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes.'],
      }
    ],
  },
  {
    id: 53,
    nombre: 'Río Imperial (Puerto Saavedra)',
    latitude: -38.754622655712254,
    longitude: -73.36680096757267,
    tipo: 'Rio',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas del Río Imperial, especialmente para salmónidos y pejerrey.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras donde desembocan los ríos, también remonta los ríos.', //
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // (TNC), Sernapesca no especifica señuelos para esta especie.
        carnadas: ['Gueple de mar', 'Camarón de río/mar', 'Nape', 'Pejerrey pequeño'], // (TNC), Sernapesca no especifica carnadas.
      },
      
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante. Habita en aguas de ríos y lagos.', //
        senuelos: ['Aparejo de pejerrey', 'Spinner', 'Mosca'], // (Adaptado de array original y Sernapesca)
        carnadas: ['Tebos', 'Gusanos pequeños. Consultar SERNAPESCA.', 'Trocitos de corazón de pollo, masilla a base de harina.'], // (Adaptado de array original y Sernapesca)
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. Remonta ríos para desovar.', //
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados', 'Mosca (streamers)'], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ['Uso exclusivo de señuelo artificial. Prohibida carnada viva según regulaciones generales para salmónidos en ríos.'], // Sernapesca PDF (p.7, p.28)
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. Remonta ríos para desovar.', //
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos', 'Mosca'], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ['Uso exclusivo de señuelo artificial. Prohibida carnada viva según regulaciones generales para salmónidos en ríos.'], // Sernapesca PDF (p.7, p.30)
      }
    ]
  },
  {
    id: 54,
    nombre: 'Río Moncul (Puerto Saavedra)',
    latitude: -38.669122559133356,
    longitude: -73.40135358028255,
    tipo: 'Rio',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas del Río Moncul, especialmente para salmónidos, carpa y pejerrey.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado[cite: 243]. Escamas evidentes[cite: 240]. Frecuenta estuarios y puede remontar ríos.',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Basado en TNC [cite: 455] y prácticas comunes.
        carnadas: ['Gueple de mar', 'Camarón de río/mar', 'Nape', 'Pejerrey pequeño'], // Basado en TNC [cite: 455] y prácticas comunes.
      },
      {
        nombreComun: 'Carpa Común',
        nombreCientifico: 'Cyprinus carpio', //
        imageAsset: require('../imagenes/carpa-comun.png'),
        caracteristicas: 'Cuerpo cubierto de grandes escamas lisas, dorso gris oscuro con tonalidades verde oliva, vientre blanco amarillento[cite: 563, 564]. Habitante de ríos, lagos y lagunas con aguas calmas y fondo fangoso[cite: 569, 570].',
        senuelos: ['Masa', 'Pellet'], // Basado en array original.
        carnadas: ['Maíz, lombriz de tierra, boilies, masillas diversas.'], // Basado en array original.
      },
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'),
        caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva[cite: 590, 594]. Se encuentra en aguas bien oxigenadas, con velocidades bajas y transparentes[cite: 599].',
        senuelos: ['Aparejo de pejerrey', 'Spinner', 'Mosca'], // Basado en array original. Sernapesca PDF indica que se permite carnada viva[cite: 604].
        carnadas: ['Tebos, gusanos pequeños, trocitos de corazón de pollo, masilla[cite: 603]. Consultar regulaciones[cite: 604].'], // Basado en array original y dieta[cite: 603].
      },
      {
        nombreComun: 'Trucha Arcoiris',
        nombreCientifico: 'Oncorhynchus mykiss', //
        imageAsset: require('../imagenes/trucha-arcoiris.png'),
        caracteristicas: 'Cuerpo robusto, comprimido. Parte superior verde brillante a café, inferior plateado. Franja rojo-violácea iridiscente lateral[cite: 636, 637]. Pequeñas manchas negras en cabeza, cuerpo y aletas[cite: 638]. Habita ríos, lagos y lagunas de aguas frías, limpias y cristalinas[cite: 642].',
        senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'], // Sernapesca PDF menciona señuelo artificial[cite: 649].
        carnadas: ['Uso de carnada viva prohibido para salmónidos según regulaciones generales[cite: 649]. Priorizar señuelo artificial. Consultar SERNAPESCA.'],
      },
      {
        nombreComun: 'Trucha Marrón (Fario)',
        nombreCientifico: 'Salmo trutta', //
        imageAsset: require('../imagenes/trucha-fario.png'),
        caracteristicas: 'Color predominantemente café, con grandes puntos negros y algunos rojos. Vientre más claro[cite: 606]. Se alimenta de insectos acuáticos y terrestres, crustáceos y peces (adultos)[cite: 612].',
        senuelos: ['Minnow', 'Cucharilla', 'Mosca (streamers)'], // Sernapesca PDF menciona señuelo artificial[cite: 614].
        carnadas: ['Uso de carnada viva prohibido para salmónidos según regulaciones generales[cite: 614]. Priorizar señuelo artificial. Consultar SERNAPESCA.'],
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'),
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados[cite: 688, 691]. Machos adultos reproductivos con cabeza grande y mandíbula ganchuda[cite: 689]. Usualmente desovan en grandes ríos o tributarios[cite: 702].',
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados', 'Mosca (streamers)'], // Sernapesca PDF menciona señuelo artificial[cite: 708].
        carnadas: ['Uso exclusivo de señuelo artificial. Prohibida carnada viva según regulaciones generales para salmónidos en ríos[cite: 708].'],
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados[cite: 710, 715]. Machos adultos con mandíbula deformada[cite: 713]. Carnívoro anádromo de aguas frías[cite: 720].',
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos', 'Mosca'], // Sernapesca PDF menciona señuelo artificial[cite: 726].
        carnadas: ['Uso exclusivo de señuelo artificial. Prohibida carnada viva según regulaciones generales para salmónidos en ríos[cite: 726].'],
      }
    ]
  },
  {
    id: 55,
    nombre: 'Playa Lobería - Coi Coi',
    latitude: -38.62293866088649,
    longitude: -73.4889631218896,
    tipo: 'Playa',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas, especialmente para salmónidos.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. [cite: 243] Habita zonas costeras, playas y desembocaduras.',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. [cite: 188] Aletas anaranjadas. [cite: 190] Se alimenta de pequeños peces e invertebrados de playas arenosas. [cite: 196]',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // [cite: 196] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general, Sernapesca PDF detalla O. insignis [cite: 214]
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'],
        carnadas: ['Pejerrey vivo o fresco', ], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. [cite: 233] Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas. [cite: 237]',
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Sernapesca PDF menciona dieta variada [cite: 237]
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'),
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. [cite: 691] Machos adultos reproductivos con cabeza grande y mandíbula ganchuda. [cite: 689] Puede ser capturado en playas cercanas a desembocaduras de ríos que remonta.',
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados'], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes, usualmente se prohíbe carnada viva para salmónidos.'], // [cite: 708]
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. [cite: 715] Machos adultos con mandíbula deformada. [cite: 713] Puede ser capturado en playas cercanas a desembocaduras.',
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos'], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes, usualmente se prohíbe carnada viva para salmónidos.'], // [cite: 726]
      }
    ]
  },
  {
    id: 56,
    nombre: 'Playa Casa de Piedra (Tirúa)',
    latitude: -38.479197645021124,
    longitude: -73.51695355096724,
    tipo: 'Playa',
    region: 'Biobío',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC [cite: 455] (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 196].',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes (no especificados en Sernapesca PDF para esta especie, basado en uso general)
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'], // Genéricos para lenguado de playa
        carnadas: ['Pejerrey vivo o fresco'], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes (Sernapesca PDF no detalla señuelos específicos para esta especie)
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filete de pescado'], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 237]
      }
    ]
  },
  {
    id: 57,
    nombre: 'Playa Quidico',
    latitude: -38.244109369776766,
    longitude: -73.48074552474316,
    tipo: 'Playa',
    region: 'Biobío',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras, playas rocosas y arenosas, y desembocaduras de ríos.', // (Sernapesca PDF Marinas p.28)
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23)
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas (Sernapesca PDF Marinas p.23)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general.
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'], // Genéricos para lenguado de playa
        carnadas: ['Pejerrey vivo o fresco'], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña"
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.', // (Sernapesca PDF Marinas p.27)
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27)
      },
      
    ]
  }, {
    id: 58,
    nombre: 'Playa Horcones (Arauco)',
    latitude: -37.21413935346053,
    longitude: -73.25114185693334,
    tipo: 'Playa',
    region: 'Biobío',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 195].',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido[cite: 239]. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos [cite: 248]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'], // Genéricos para lenguado de playa
        carnadas: ['Pejerrey vivo o fresco'], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes[cite: 221].
      }
    ]
  },
  {
    id: 59,
    nombre: 'Playa Maule (Coronel)',
    latitude: -37.00237909174546,
    longitude: -73.18781572536605,
    tipo: 'Playa',
    region: 'Biobío',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido[cite: 239]. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 195].',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre[cite: 233]. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos) con características similares de hábitat.
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'], // Genéricos para lenguado de playa
        carnadas: ['Pejerrey vivo o fresco'], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) [cite: 221] para O. insignis menciona predilección por pejerreyes.
      }
    ]
  },
  {
    id: 60,
    nombre: 'Playa Curiñanco',
    latitude: -39.74897151563126,
    longitude: -73.39242915110124,
    tipo: 'Playa',
    region: 'Los Ríos',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas, especialmente para salmónidos.',
    imagenFondoSecciones: null,
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. [cite: 188] Aletas anaranjadas. [cite: 191] Se alimenta de pequeños peces de las aguas costeras como sardinas y anchovetas e invertebrados como pulguillas de mar. [cite: 196]',
        senuelos: ['Chispa', 'Jig', 'Minnow', 'Vinilo'], // Aparejos comunes
        carnadas: ['Pulga de mar (Emerita análoga)', 'Macha', 'Sardina', 'Pejerrey'], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Siente especial predilección por los pejerreyes. [cite: 222]', // Descripción general, Sernapesca PDF (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos) [cite: 213] con características similares.
        senuelos: ['Vinilos tipo pejerrey', 'Jigs blandos', 'Señuelos de fondo'], // Genéricos para lenguado de playa
        carnadas: ['Pejerrey vivo o fresco'], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF para O. insignis menciona predilección por pejerreyes[cite: 222].
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. [cite: 240] Las escamas que cubren el cuerpo son evidentes. [cite: 240] Color marrón, azulado en el dorso y amarillo plateado en el vientre. [cite: 243] Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos. [cite: 453]',
        senuelos: ['Minnows', 'Cucharillas', 'Spinners', 'Vinilos'], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ['Gueple de mar', 'Camarón', 'Nape', 'Pejerrey pequeño'], // Recomendaciones generales y de TNC[cite: 455]. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos[cite: 248].
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. [cite: 234] Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios, playas y fondos fangosos. [cite: 238]',
        senuelos: ['Aparejo de pejerrey', 'Plumas brillantes'], // Aparejos comunes
        carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filet de pescado'], // Dieta incluye anfípodos y poliquetos (bentos) y copépodos y larvas zoeas (plancton), además de plantas[cite: 237].
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto. [cite: 688] Color azul verdoso con pequeñas manchas o brillos dorados en la parte dorsal y cabeza, lados plateados y vientre blanco. [cite: 692] Machos adultos reproductivos con cabeza grande y mandíbula ganchuda. [cite: 690] Puede ser capturado en playas cercanas a desembocaduras de ríos que remonta.',
        senuelos: ['Cucharillas grandes y brillantes', 'Minnows tipo Rapala', 'Spinners pesados'], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes, usualmente se prohíbe carnada viva para salmónidos en ríos. [cite: 708]'],
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido lateralmente. [cite: 711] Manchas negras en el dorso y lóbulo superior de la cola, y una coloración plateada en los costados y región abdominal. [cite: 715] Machos adultos con mandíbula deformada. [cite: 713] Puede ser capturado en playas cercanas a desembocaduras.',
        senuelos: ['Cucharillas ondulantes', 'Spinners', 'Minnows de colores vivos'], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ['Principalmente señuelo artificial. Consultar regulaciones de SERNAPESCA para pesca en desembocaduras y playas adyacentes, usualmente se prohíbe carnada viva para salmónidos en ríos. [cite: 726]'],
      }
    ]
  },
  // ... (tus puntos de pesca existentes) ...
  // ... (Punto id: 60 para Playa Curiñanco previamente agregado) ...
 // ... (otros puntos de pesca) ...
 {
  id: 61,
  nombre: 'Playa Huicha (Ancud)',
  latitude: -41.845268777141285, // Actualizado
  longitude: -73.72912093228436, // Actualizado
  tipo: 'Playa',
  region: 'Los Lagos', // Chiloé
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas y regulaciones específicas.',
  imagenFondoSecciones: null,
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Abundante en la costa de Chiloé, especialmente en playas con oleaje y desembocaduras. Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado.',
      senuelos: ['Cucharillas pesadas', 'Minnows tipo Rapala', 'Vinilos'],
      carnadas: ['Nape', 'Gueple de mar', 'Sardina'],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'En fondos arenosos, a menudo cerca de la rompiente. Pez plano que se camufla excelentemente. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.',
      senuelos: ['Vinilos imitación pejerrey', 'Jigs'],
      carnadas: ['Pejerrey vivo o fresco'], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Cardúmenes en la zona costera, buena pesca de orilla. Color gris pizarra, plateado oscuro en lomo, claro en vientre. Franja plateada lateral notoria.',
      senuelos: ['Aparejo de pejerrey', 'Plumas'],
      carnadas: ['Gueple de mar', 'Camarón pequeño'],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: null,
      caracteristicas: 'Común en ambientes costeros rocosos y mixtos del sur. Cuerpo alargado, frente aplastada, labios gruesos de color amarillo.',
      senuelos: ['Jigs de plomo', 'Vinilos robustos'],
      carnadas: ['Jaiba pequeña', 'Lapa', 'Piure'],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en las playas expuestas del sur de Chile. Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos.',
      senuelos: ['Chispas', 'Jigs grandes', 'Cucharillas ondulantes'],
      carnadas: ['Macha', 'Navajuela'],
    }
  ]
},
{
  id: 62,
  nombre: 'Playa La Ventana', // Asumiendo esta es la Playa Mar Brava cerca de Ancud con nuevas coordenadas
  latitude: -41.74246382753621, 
  longitude: -73.7320390029074, // Nota: Las coordenadas que diste en el prompt son -74.00861635386474. Usaré esas.
  // Corrijo la longitud según tu última indicación en el prompt para este id:
  // longitude: -74.00861635386474,
  // Sin embargo, el prompt actual dice: -73.74402161213023. Voy a usar las del prompt actual:
  longitude: -73.74402161213023, // Mantengo la que escribiste en el último prompt. Por favor, verifica cuál es la correcta.
                                    // Si te refieres a -74.00861635386474, la cambiaré.
  tipo: 'Playa',
  region: 'Los Lagos', // Chiloé
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas y regulaciones específicas.',
  imagenFondoSecciones: null,
  especies: [ // Usando un perfil de especies similar al de ID 51 (Playa Mar Brava, Ancud)
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Abundante en la costa de Chiloé, especialmente en playas con oleaje fuerte y desembocaduras. Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado.',
      senuelos: ['Cucharillas pesadas', 'Minnows tipo Rapala', 'Vinilos'],
      carnadas: ['Nape', 'Gueple de mar', 'Sardina', 'Pancora'],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, presente en playas con rompientes fuertes. Color azul en el dorso, celeste en los flancos.',
      senuelos: ['Chispas', 'Jigs grandes', 'Cucharillas ondulantes'],
      carnadas: ['Macha', 'Navajuela', 'Pulga de mar'],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Se encuentra en fondos arenosos, especialmente cerca de la rompiente. Pez plano de excelente camuflaje.',
      senuelos: ['Vinilos imitación pejerrey', 'Jigs'],
      carnadas: ['Pejerrey vivo o fresco'], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: null,
      caracteristicas: 'Habita roqueríos cercanos a la costa y fondos de arena. Cuerpo alargado, labios gruesos de color amarillo.',
      senuelos: ['Jigs de plomo', 'Vinilos que imitan pequeños crustáceos'],
      carnadas: ['Cangrejo pequeño', 'Piure', 'Lapa'],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera. Color gris pizarra, plateado oscuro en lomo, claro en vientre.',
      senuelos: ['Aparejo de pejerrey', 'Plumas'],
      carnadas: ['Gueple de mar', 'Camarón pequeño'],
    }
  ]
},
{
  id: 63,
  nombre: 'Playa y Desembocadura Río Llico (Los Muermos)',
  latitude: -41.29110357532348, // APROXIMADO - ¡VERIFICAR! -41.29110357532348, -73.84366713965349
  longitude: -73.84366713965349, // APROXIMADO - ¡VERIFICAR!
  tipo: 'Playa', // También podría ser 'Desembocadura'
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, especialmente para salmónidos cerca de la desembocadura.',
  imagenFondoSecciones: null,
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto. Común en desembocaduras y playas del sur de Chile.',
      senuelos: ['Minnows', 'Cucharillas', 'Vinilos'],
      carnadas: ['Nape', 'Gueple de mar', 'Pancora'],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, frecuente cerca de desembocaduras.',
      senuelos: ['Vinilos imitación pejerrey', 'Jigs'],
      carnadas: ['Pejerrey vivo o fresco'], // Manteniendo tu corrección
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Cardúmenes costeros, especialmente en aguas más tranquilas de bahías o desembocaduras.',
      senuelos: ['Aparejo de pejerrey', 'Plumas'],
      carnadas: ['Gueple de mar', 'Camarón'],
    },
    {
      nombreComun: 'Salmón Chinook', // Posible cerca de desembocaduras importantes
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'El más grande de los salmones del Pacífico, remonta ríos para desovar.',
      senuelos: ['Cucharillas grandes', 'Minnows'],
      carnadas: ['Principalmente señuelo artificial. Consultar SERNAPESCA.'],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, puede encontrarse en playas con rompientes.',
      senuelos: ['Chispas', 'Jigs'],
      carnadas: ['Macha', 'Sardina'],
    }
  ]
},
{
  id: 64,
  nombre: 'Playa Brava (Maullín)',
  latitude: -41.5800, // APROXIMADO - ¡VERIFICAR!
  longitude: -73.7800, // APROXIMADO - ¡VERIFICAR!
  tipo: 'Playa',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA.',
  imagenFondoSecciones: null,
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Común en playas con oleaje y sectores rocosos adyacentes.',
      senuelos: ['Minnows', 'Cucharillas', 'Spinners'],
      carnadas: ['Nape', 'Gueple de mar', 'Sardina'],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, se acerca a la orilla para cazar.',
      senuelos: ['Vinilos imitación pejerrey', 'Jigs'],
      carnadas: ['Pejerrey vivo o fresco'],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en playas expuestas, busca alimento en la rompiente.',
      senuelos: ['Chispas', 'Jigs grandes'],
      carnadas: ['Macha', 'Navajuela', 'Pulga de mar'],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera.',
      senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas'],
      carnadas: ['Gueple de mar', 'Camarón'],
    }
  ]
},
{
  id: 65,
  nombre: 'Playa Desembocadura Río Llesquehue (San Juan de la Costa)',
  latitude: -40.53662650214893, // APROXIMADO - ¡VERIFICAR! (Cerca de Pucatrihue)
  longitude: -73.71433364781943, // APROXIMADO - ¡VERIFICAR! -40.53662650214893, -73.71433364781943
  tipo: 'Playa', // También podría ser 'Desembocadura'
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, especialmente para salmónidos cerca de la desembocadura.',
  imagenFondoSecciones: null,
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie común en desembocaduras y playas adyacentes en el sur.',
      senuelos: ['Minnows', 'Cucharillas', 'Vinilos'],
      carnadas: ['Nape', 'Pancora', 'Gueple de mar'],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Busca alimento en la mezcla de aguas dulces y saladas.',
      senuelos: ['Vinilos', 'Jigs con carnada'],
      carnadas: ['Pejerrey vivo o fresco'],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Frecuente en estuarios y la zona costera cercana.',
      senuelos: ['Aparejo de pejerrey'],
      carnadas: ['Gueple de mar', 'Camarón'],
    },
    {
      nombreComun: 'Salmón Coho', // Posible por la desembocadura
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Remonta ríos para desovar; puede capturarse en la aproximación costera.',
      senuelos: ['Cucharillas', 'Spinners'],
      carnadas: ['Principalmente señuelo artificial. Consultar SERNAPESCA.'],
    }
  ]
}

];

  

  
  