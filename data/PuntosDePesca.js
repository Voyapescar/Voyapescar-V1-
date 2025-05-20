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
      latitude: -37.8515,
      longitude: -73.6700,
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
      latitude: -37.5830,
      longitude: -73.6558,
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
    }
  ];