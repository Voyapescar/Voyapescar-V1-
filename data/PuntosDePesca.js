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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Pejerrey Argentino',
          nombreCientifico: 'Odontesthes bonariensis',
          imageAsset: require('../imagenes/pejerrey-argentino.png'),
          caracteristicas: 'Cuerpo comprimido lateralmente, tonos plateados con dorso verdoso/azulado y franja plateada lateral nítida. Boca protráctil. Principal objetivo en embalses de la zona.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña. Gran saltador.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Perca Trucha (Criolla)',
          nombreCientifico: 'Percichthys trucha',
          imageAsset: require('../imagenes/perca-trucha.png'),
          caracteristicas: 'Cuerpo robusto, cabeza pequeña, boca protráctil. Coloración variable, dorso oliváceo a verde grisáceo, vientre pálido, con manchas oscuras irregulares. Aleta dorsal con porción espinosa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo cubierto de grandes escamas, dorso gris oscuro a verde oliva, vientre blanco amarillento. Dos pares de barbillones cerca de la boca. Muy resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña. Gran saltador.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
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
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha marrón (Sea-run Brown Trout / Trucha de Mar)',
          nombreCientifico: 'Salmo trutta (forma anádroma)',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Grandes truchas marrones que migran al mar para alimentarse y vuelven al río a desovar. Muy plateadas en el mar, toman coloración más oscura y moteada en el río. Extremadamente fuertes.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Puede haber poblaciones residentes y formas anádromas (Steelhead). Franja lateral rosada/rojiza característica, cuerpo plateado.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Cuerpo alargado, pequeñas escamas. Coloración plateada en su fase marina, con puntos negros en forma de X sobre la línea lateral. Cabeza pequeña.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial, busca cobertura.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 22,
      nombre: 'Caleta Constitución, Antofagasta',
      latitude: -23.4330,
      longitude: -70.6050,
      tipo: 'Playa', // Capitalizado
      region: 'Antofagasta',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: require('../imagenes/cabrilla.png'),
          caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas oscuras. Vive en fondos rocosos, cazador de emboscada.',
          senuelos: ["Jigs", "Vinilos"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomus philippii',
          imageAsset: require('../imagenes/tomoyo.png'),
          caracteristicas: 'Peces de cuerpo alargado, cirros presentes alrededor de los ojos. Dimorfismo sexual en color y tamaño; machos más grandes y robustos.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: require('../imagenes/cabrilla.png'),
          caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas oscuras. Vive en fondos rocosos, cazador de emboscada.',
          senuelos: ["Jigs", "Vinilos"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Jerguilla',
          nombreCientifico: 'Aplodactylus punctatus',
          imageAsset: require('../imagenes/jerguilla.png'),
          caracteristicas: 'Color verde con puntos más oscuros, aunque existe variedad amarilla (reina). Herbívora, habita roqueríos sublitorales y vive en comunidad.',
          senuelos: ["Vinilo", "Jig"],
          carnadas: ["Algas (luche)", "Piures", "Pequeños crustáceos", "Pequeños mariscos"],
        }
      ],
    },
    {
      id: 25,
      nombre: 'Playa de Matanzas',
      latitude: -33.96161610875899, 
      longitude: -71.87542209889685,
      tipo: 'Playa', // Capitalizado
      region: 'O\'Higgins',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Bilagay',
          nombreCientifico: 'Cheilodactylus variegatus',
          imageAsset: require('../imagenes/bilagay.png'),
          caracteristicas: 'Cuerpo robusto, levemente comprimido, cubierto por escamas ctenoides. Pequeña boca con labios notorios. Habita rocas con algas.',
          senuelos: ["Jig", "Vinilo"],
          carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Pejeperro',
          nombreCientifico: 'Semicossyphus darwini',
          imageAsset: require('../imagenes/pejeperro.png'),
          caracteristicas: 'Cuerpo alargado, perfil cóncavo en la cabeza. Juveniles rojos con mancha amarilla tras la cabeza; adultos gris azulado con mancha amarilla. Mentón blanco.',
          senuelos: ["Vinilo", "Jig", "Minnow"],
          carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: require('../imagenes/cabinza.png'),
          caracteristicas: 'Cuerpo fusiforme, moderadamente comprimido. Color gris-plateado, dorso más oscuro. Aleta dorsal larga con una profunda incisión en forma de V.',
          senuelos: ["Jig", "Vinilo", "Plumillas"],
          carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cojinova del Norte',
          nombreCientifico: 'Seriolella violacea',
          imageAsset: require('../imagenes/cojinova-del-norte.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul-negruzco, flancos y vientre plateados. Ojos pequeños rodeados de tejido adiposo (como máscara). Aleta dorsal larga.',
          senuelos: ["Jig", "Vinilo", "Chispa"],
          carnadas: ["Sardina", "Pejerrey"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra distintiva en opérculo y base de aletas. Habita aguas litorales, fondos rocosos y arenosos.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: require('../imagenes/cabinza.png'),
          caracteristicas: 'Cuerpo fusiforme, moderadamente comprimido. Color gris-plateado, dorso más oscuro. Aleta dorsal larga con una profunda incisión en forma de V.',
          senuelos: ["Jig", "Vinilo", "Plumillas"],
          carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomidae spp. / Blenniidae spp.',
          imageAsset: require('../imagenes/tomoyo.png'),
          caracteristicas: 'Peces pequeños de roqueríos, cuerpo alargado, a menudo con cirros o tentáculos en la cabeza. Coloración mimética con el entorno rocoso.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        }
      ],
    },
    {
      id: 32,
      nombre: 'Playa Las Brisas, Navidad',
      latitude: -33.93737573256939, 
      longitude: -71.85101989555893,
      tipo: 'Playa', // Capitalizado
      region: 'O\'Higgins',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Corvina',
          nombreCientifico: 'Cilus gilberti',
          imageAsset: require('../imagenes/corvina.png'),
          caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales distintivos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Escamas evidentes. Frecuenta estuarios y costas rocosas/arenosas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Color gris pizarra, plateado oscuro en lomo, claro en vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo (lado oculado). Lado oculado café oscuro, lado ciego cremoso. Se mimetiza excelentemente con el fondo.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    
      {
        id: 35,
        nombre: 'Playa Yapes',
        latitude: -20.67848614311274, // APROXIMADO - ¡VERIFICAR!-20.67848614311274, -70.19119448951889
        longitude: -70.19119448951889, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Tarapacá',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti', // Fichas Marinas Sernapesca p.23 [cite: 188]
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos. Muy apetecido en la pesca de orilla.', // Fichas Marinas Sernapesca p.23 [cite: 188]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno', // Usaremos Paralichthys adspersus, más común para "lenguado" general de playa.
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se mimetiza en fondos arenosos, cazador al acecho.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Sargo',
            nombreCientifico: 'Anisotremus scapularis', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            imageAsset: require('../imagenes/sargo.png'),
            caracteristicas: 'Cuerpo comprimido y alto, mancha negra en opérculo. Habita fondos rocosos y arenosos.', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
            carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Cuerpo alargado, labios gruesos. Habita roqueríos cercanos a la costa y fondos de arena.', // Fichas Marinas Sernapesca p.29 [cite: 249, 254] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Fichas Marinas Sernapesca p.29 [cite: 255]
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
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Habitual en fondos arenosos de la costa de Atacama.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Buscada en las rompientes y pozones de las playas atacameñas.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Especie nativa, vive entre fondos rocosos y arena. Cuerpo alargado, labios gruesos.', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Fichas Marinas Sernapesca p.29 [cite: 255]
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
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Frecuente en playas de arena con oleaje moderado.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Busca presas en fondos arenosos, excelente camuflaje.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27 [cite: 233]
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Forma cardúmenes cerca de la orilla, cuerpo plateado con franja lateral.', // Fichas Marinas Sernapesca p.27 [cite: 233, 235]
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
          }
        ],
      },
      {
        id: 38,
        nombre: 'Playa Socos (Tongoy)',
        latitude: -30.252073462725903, // APROXIMADO - ¡VERIFICAR!-30.252073462725903, -71.48697033818182
        longitude: -71.48697033818182, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Coquimbo',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Principal objetivo en las playas de Tongoy según PDF de Zonas.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Se captura desde la orilla en las playas de Tongoy según PDF de Zonas.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          }
        ],
      },
      {
        id: 39,
        nombre: 'Playa de Guanaqueros',
        latitude: -30.19491253169179, // APROXIMADO - ¡VERIFICAR!-30.19491253169179, -71.42157905433983
        longitude: -71.42157905433983, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Coquimbo',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Pez plano de fondos arenosos, común en bahías como Guanaqueros.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Presente en la bahía, se acerca a la orilla.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Abundante en la zona, ideal para pesca ligera.',
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Vieja Negra',
            nombreCientifico: 'Graus nigra', // Guía Peces Litorales TNC p.8 [cite: 361]
            imageAsset: require('../imagenes/vieja-negra.png'),
            caracteristicas: 'Nativa de Chile y Perú, fondos rocosos con cuevas. Longeva. Población disminuida.', // Guía Peces Litorales TNC p.8 [cite: 362, 364, 367]
            senuelos: ["Jig", "Vinilo"],
            carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"], // Guía Peces Litorales TNC p.8 [cite: 363]
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Nativo, habita fondos rocosos y arena. Alim: crustáceos, moluscos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Común en playas con rompientes y pozones.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Pez plano de fondos arenosos, excelente camuflaje.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
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
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Pez deportivo popular en la zona.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se puede encontrar en los sectores más arenosos de la playa.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Jerguilla',
            nombreCientifico: 'Aplodactylus punctatus', // Guía Peces Litorales TNC p.13 [cite: 427]
            imageAsset: require('../imagenes/jerguilla.png'),
            caracteristicas: 'Herbívora, habita fondos rocosos con bosques de algas pardas. Variedades de color.', // Guía Peces Litorales TNC p.13 [cite: 428, 429]
            senuelos: ['Difícil con señuelo.'],
            carnadas: ['Algas (luche)', 'Piures', 'Pequeños crustáceos'],
          },
          {
            nombreComun: 'Tomoyo',
            nombreCientifico: 'Labrisomidae', // Guía Peces Litorales TNC p.11 [cite: 402] (familia)
            imageAsset: require('../imagenes/tomoyo.png'),
            caracteristicas: 'Varias especies difíciles de diferenciar. Fondos rocosos no profundos. Machos cuidan nidos.', // Guía Peces Litorales TNC p.11 [cite: 403, 404]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
          }
        ],
      },
      
      ,
      {
        id: 42,
        nombre: 'Playa Las Torpederas (Valparaíso)',
        latitude: -33.0219900033732,
        longitude: -71.64439193173963,
        tipo: 'Playa',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Se puede capturar desde el molo o playa, especialmente al atardecer.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Común en muelles y escolleras, pesca con flotador.',
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
          },
          {
            nombreComun: 'Tomoyo',
            nombreCientifico: 'Labrisomidae', // Familia de varias especies de Tomoyos
            imageAsset: require('../imagenes/tomoyo.png'),
            caracteristicas: 'Habita fondos rocosos y no muy profundos. Varias especies difíciles de diferenciar.', // Info general, ver TNC Litorales p.11 [cite: 402, 403]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
          },
          {
            nombreComun: 'Jerguilla',
            nombreCientifico: 'Aplodactylus punctatus',
            imageAsset: require('../imagenes/jerguilla.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Coloración variable, desde verde oliva a café oscuro, con numerosas manchas blancas o amarillentas. Habita en el intermareal y submareal rocoso.', // Sernapesca Marinas PDF p.29 [cite: 199] / TNC Litorales PDF p.13 [cite: 428]
            senuelos: ["Vinilo pequeño", "Jig pequeño", "Aparejo simple con anzuelo pequeño"],
            carnadas: ["Algas verdes (luche)", "Pulga de mar", "Otros invertebrados pequeños"], // Sernapesca Marinas PDF p.29
          },
          {
            nombreComun: 'Vieja Negra',
            nombreCientifico: 'Graus nigra',
            imageAsset: require('../imagenes/vieja-negra.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Pez de color negro, adultos a veces con dos puntos blancos en el lomo. Cuerpo robusto. Habita en el submareal rocoso, a menudo en caletones y requeríos profundos.', // Sernapesca Marinas PDF p.31 [cite: 318, 322] / TNC Litorales PDF p.16 [cite: 362]
            senuelos: ["Jigs pesados"], // TNC Litorales PDF p.16 [cite: 361]
            carnadas: ["Lapa", "Jaiba", "Piure", "Erizo", "Mora", "Camarón"], // Sernapesca Marinas PDF p.31 [cite: 324] / TNC Litorales PDF p.16 [cite: 363]
          },
          {
            nombreComun: 'Bilagay (Pez Perro)',
            nombreCientifico: 'Semicossyphus darwini', // Bilagay es un nombre común, Semicossyphus darwini es el Pejeperro.
            imageAsset: require('../imagenes/bilagay.png'), // Asegúrate de tener esta imagen, o usa pejeperro.png si es la misma especie
            caracteristicas: 'Machos adultos con joroba en la cabeza, color gris oscuro a rojizo con banda amarillenta en el centro del cuerpo. Habita arrecifes rocosos.', // Sernapesca Marinas PDF p.26 (Pejeperro) [cite: 223, 226, 230] / TNC Litorales PDF p.17 (Pejeperro) [cite: 368, 369]
            senuelos: ["Jigs"], // TNC Litorales PDF p.17 [cite: 371]
            carnadas: ["Lapa", "Jaiba", "Piure", "Erizo", "Moluscos y crustáceos en general"], // Sernapesca Marinas PDF p.26 (Pejeperro) [cite: 231] / TNC Litorales PDF p.17 [cite: 370]
          },
          {
            nombreComun: 'Lenguado de Arena', // Uno de los lenguados comunes en playas
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'), // Puedes usar tu imagen genérica de lenguado o crear una específica.
            caracteristicas: 'Cuerpo ovalado y comprimido, coloración variable para mimetizarse con fondos arenosos.', // Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
            senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"], // Adaptado de Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
            carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"], // Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
          },
          {
            nombreComun: 'Blanquillo',
            nombreCientifico: 'Prolatilus jugularis',
            imageAsset: require('../imagenes/blanquillo.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Cuerpo macizo en su región torácica anterior, adelgazando hacia atrás. Color blanco-grisáceo con 4-5 pares de bandas transversales café-rojizo. Vive en fondos rocosos y arenosos.', // Sernapesca Marinas PDF p.17 [cite: 123, 126, 128] / TNC Litorales PDF p.14 [cite: 447]
            senuelos: ["Jigs pequeños", "Vinilos imitando crustáceos", "Cucharas ondulantes pequeñas"], // Basado en su dieta
            carnadas: ["Pequeños trozos de pescado", "Camarón", "Pulga de mar", "Anélidos poliquetos"], // Sernapesca Marinas PDF p.17 [cite: 129] / TNC Litorales PDF p.14 [cite: 449]
          }
        ],
      },
      {
        id: 43,
        nombre: 'Desembocadura Río Aconcagua (Concón)',
        latitude: -32.91792610608716,
        longitude: -71.51061190115608,
        tipo: 'Desembocadura',
        region: 'Valparaíso',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Se acerca a las desembocaduras para alimentarse de peces menores.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Ingresa a los estuarios y desembocaduras en busca de alimento.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Jurel',
            nombreCientifico: 'Trachurus murphyi',
            imageAsset: require('../imagenes/jurel.png'), // Como solicitaste, al no tener la imagen.
            caracteristicas: 'Cuerpo alargado y comprimido, azul verdoso en el dorso y plateado en el vientre. Frecuenta zonas costeras y puede acercarse a desembocaduras en busca de alimento.', // Basado en TNC Litorales PDF p.23
            senuelos: ["Plumillas", "Jigs", "Sabiki", "Minnows pequeños", "Cucharas ondulantes"],
            carnadas: ["Camarones pequeños", "Trocitos de sardina o anchoveta", "Gusanos de mar"],
          }
        ],
      },
      {
        id: 44,
        nombre: 'Caleta Rinconada (Cobquecura)',
        latitude: -36.18174781097179,// APROXIMADO - ¡VERIFICAR! -36.18174781097179, -72.81923885753493
        longitude: -72.81923885753493, // APROXIMADO - ¡VERIFICAR!
        tipo: 'Playa',
        region: 'Ñuble',
        cuota: 'Consultar SERNAPESCA.',
        imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
        especies: [
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Habita fondos rocosos y arena. Alim: crustáceos, moluscos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
          },
          {
            nombreComun: 'Vieja Negra',
            nombreCientifico: 'Graus nigra',
            imageAsset: require('../imagenes/vieja-negra.png'),
            caracteristicas: 'Nativa, fondos rocosos con cuevas. Longeva. Alim: lapas, jaibas, locos.', // Guía Peces Litorales TNC p.8 [cite: 362, 363, 364]
            senuelos: ["Jig", "Vinilo"],
            carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"],
          },
          {
            nombreComun: 'Cabrilla Común',
            nombreCientifico: 'Sebastes capensis', // Fichas Marinas Sernapesca p.20 [cite: 153]
            imageAsset: require('../imagenes/cabrilla.png'),
            caracteristicas: 'Fondos de rocas, color café rojizo. Hembras ovovivíparas.', // Fichas Marinas Sernapesca p.20 [cite: 155, 167]
            senuelos: ["Jig", "Vinilo"],
            carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos", "Filete de pescado"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso. Buscada en rompientes y pozones.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Habita zonas costeras, desembocaduras, fondos de arena y roca.', // Guía Peces Litorales TNC p.15
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Pez plano que se camufla en fondos arenosos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Forma cardúmenes cerca de la orilla, cuerpo plateado con franja lateral.', // Fichas Marinas Sernapesca p.27
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Principal objetivo de pesca de orilla en extensas playas arenosas.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Se acerca a la orilla en busca de alimento, especialmente en zonas con movimiento de agua.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Prefiere fondos de arena donde puede emboscar a sus presas.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      { // Sargo es plausible aquí dada la pesca submarina mencionada para Bucalemu y su distribución norte/centro.
        nombreComun: 'Sargo',
        nombreCientifico: 'Anisotremus scapularis',
        imageAsset: require('../imagenes/sargo.png'),
        caracteristicas: 'Común en sectores rocosos adyacentes a playas. Cuerpo alto y gris plateado.',
        senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
        carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Forma cardúmenes cerca de la orilla.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 47, // Anteriormente Playa Las Torpederas, ahora corregido
    nombre: 'Playa Buchupureo',
    latitude:  -36.075193318187765, // APROXIMADO - ¡VERIFICAR! -36.075193318187765, -72.79356080933071
    longitude: -72.79356080933071, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa',
    region: 'Ñuble',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Frecuente en playas con buenas rompientes y pozones.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Se encuentra en los sectores de arena, a menudo cerca de estructuras rocosas o desembocaduras.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Común en la zona, busca la influencia de esteros cercanos.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Cardúmenes presentes en la orilla.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy común cerca de desembocaduras de ríos importantes como el Itata.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Se acerca a las desembocaduras en busca de alimento.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Presente en los fondos arenosos de la playa y la zona de la desembocadura.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Frecuente en aguas salobres y costeras.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // Fichas Dulceacuícolas p.27
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'Grandes ejemplares pueden ser capturados cerca de la desembocadura del Toltén en temporada.', // Fichas Dulceacuícolas p.27
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // Fichas Dulceacuícolas p.29
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'También presente en la zona del Toltén, remonta ríos para desovar.', // Fichas Dulceacuícolas p.29
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy común en desembocaduras y playas sureñas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Habitual en las playas del sur con buenas rompientes.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'En fondos arenosos, a menudo cerca de la rompiente y desembocaduras.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Presente en la zona costera.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Muy presente en desembocaduras de ríos sureños como el Chaihuín.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Busca alimento en la zona de mezcla de aguas y en la playa adyacente.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Corvina', // Menos común tan al sur, pero posible
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Puede ingresar a las zonas costeras cercanas a desembocaduras.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Común en estuarios y playas del sur.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos.', // [cite: 239, 453]
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // [cite: 454] (TNC), Sernapesca no especifica señuelos.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // [cite: 454] (TNC), Sernapesca no especifica carnadas.
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // [cite: 188, 195]
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 195] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus', // Consistent with user's array
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla en fondos arenosos, cazador al acecho. El lado oculado de color café oscuro homogéneo, sin manchas. El lado ciego de color cremoso. Siente especial predilección por los pejerreyes.', // [cite: 214, 221] (Adaptado de Lenguado de Ojos Chicos, ya que P. adspersus no está en Sernapesca PDF marinas)
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"], // [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.', // [cite: 233, 237]
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Sernapesca PDF menciona dieta de anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236, 237]
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. Machos adultos reproductivos con cabeza grande y mandíbula ganchuda.', // [cite: 687, 691, 693]
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Regulaciones suelen ser estrictas para salmónidos.
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. Machos adultos con mandíbula deformada.', // [cite: 710, 713, 715]
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      }
    ],
  },
  {
    id: 53,
    nombre: 'Río Imperial (Puerto Saavedra)',
    latitude: -38.754622655712254,
    longitude: -73.36680096757267,
    tipo: 'Río',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas del Río Imperial, especialmente para salmónidos y pejerrey.',
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras donde desembocan los ríos, también remonta los ríos.', //
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // (TNC), Sernapesca no especifica señuelos para esta especie.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // (TNC), Sernapesca no especifica carnadas.
      },
      
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante. Habita en aguas de ríos y lagos.', //
        senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"], // (Adaptado de array original y Sernapesca)
        carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"], // (Adaptado de array original y Sernapesca)
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. Remonta ríos para desovar.', //
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Sernapesca PDF (p.7, p.28)
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. Remonta ríos para desovar.', //
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Sernapesca PDF (p.7, p.30)
      }
    ]
  },
  {
    id: 54,
    nombre: 'Río Moncul (Puerto Saavedra)',
    latitude: -38.669122559133356,
    longitude: -73.40135358028255,
    tipo: 'Río',
    region: 'La Araucanía',
    cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas del Río Moncul, especialmente para salmónidos, carpa y pejerrey.',
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado[cite: 243]. Escamas evidentes[cite: 240]. Frecuenta estuarios y puede remontar ríos.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Basado en TNC [cite: 455] y prácticas comunes.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Basado en TNC [cite: 455] y prácticas comunes.
      },
      {
        nombreComun: 'Carpa Común',
        nombreCientifico: 'Cyprinus carpio', //
        imageAsset: require('../imagenes/carpa-comun.png'),
        caracteristicas: 'Cuerpo cubierto de grandes escamas lisas, dorso gris oscuro con tonalidades verde oliva, vientre blanco amarillento[cite: 563, 564]. Habitante de ríos, lagos y lagunas con aguas calmas y fondo fangoso[cite: 569, 570].',
        senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"], // Basado en array original.
        carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"], // Basado en array original.
      },
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'),
        caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva[cite: 590, 594]. Se encuentra en aguas bien oxigenadas, con velocidades bajas y transparentes[cite: 599].',
        senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"], // Basado en array original. Sernapesca PDF indica que se permite carnada viva[cite: 604].
        carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
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
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial[cite: 708].
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados[cite: 710, 715]. Machos adultos con mandíbula deformada[cite: 713]. Carnívoro anádromo de aguas frías[cite: 720].',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial[cite: 726].
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. [cite: 243] Habita zonas costeras, playas y desembocaduras.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. [cite: 188] Aletas anaranjadas. [cite: 190] Se alimenta de pequeños peces e invertebrados de playas arenosas. [cite: 196]',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 196] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general, Sernapesca PDF detalla O. insignis [cite: 214]
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. [cite: 233] Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas. [cite: 237]',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Sernapesca PDF menciona dieta variada [cite: 237]
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'),
        caracteristicas: 'El más grande de los salmones del Pacífico. Cuerpo fusiforme, robusto. Color azul verdoso con pequeñas manchas en dorso y cabeza, lados plateados. [cite: 691] Machos adultos reproductivos con cabeza grande y mandíbula ganchuda. [cite: 689] Puede ser capturado en playas cercanas a desembocaduras de ríos que remonta.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // [cite: 708]
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido. Manchas negras en el dorso y lóbulo superior de la cola, coloración plateada en costados. [cite: 715] Machos adultos con mandíbula deformada. [cite: 713] Puede ser capturado en playas cercanas a desembocaduras.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // [cite: 726]
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455] (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 196].',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes (no especificados en Sernapesca PDF para esta especie, basado en uso general)
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes (Sernapesca PDF no detalla señuelos específicos para esta especie)
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 237]
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras, playas rocosas y arenosas, y desembocaduras de ríos.', // (Sernapesca PDF Marinas p.28)
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23)
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas (Sernapesca PDF Marinas p.23)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña"
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.', // (Sernapesca PDF Marinas p.27)
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27)
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 195].',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido[cite: 239]. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos [cite: 248]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes[cite: 221].
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido[cite: 239]. Color marrón, azulado en el dorso y amarillo plateado en el vientre[cite: 243]. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos[cite: 453].',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre[cite: 188]. Aletas anaranjadas[cite: 190]. Se alimenta de pequeños peces e invertebrados de playas arenosas[cite: 195].',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre[cite: 233]. Aletas y cola con tonos amarillo verdoso[cite: 233]. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas[cite: 237].',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos) con características similares de hábitat.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) [cite: 221] para O. insignis menciona predilección por pejerreyes.
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
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. [cite: 188] Aletas anaranjadas. [cite: 191] Se alimenta de pequeños peces de las aguas costeras como sardinas y anchovetas e invertebrados como pulguillas de mar. [cite: 196]',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Siente especial predilección por los pejerreyes. [cite: 222]', // Descripción general, Sernapesca PDF (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos) [cite: 213] con características similares.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF para O. insignis menciona predilección por pejerreyes[cite: 222].
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. [cite: 240] Las escamas que cubren el cuerpo son evidentes. [cite: 240] Color marrón, azulado en el dorso y amarillo plateado en el vientre. [cite: 243] Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos. [cite: 453]',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC[cite: 455]. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos[cite: 248].
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. [cite: 234] Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios, playas y fondos fangosos. [cite: 238]',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos y poliquetos (bentos) y copépodos y larvas zoeas (plancton), además de plantas[cite: 237].
      },
      {
        nombreComun: 'Salmón Chinook (Rey)',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, robusto. [cite: 688] Color azul verdoso con pequeñas manchas o brillos dorados en la parte dorsal y cabeza, lados plateados y vientre blanco. [cite: 692] Machos adultos reproductivos con cabeza grande y mandíbula ganchuda. [cite: 690] Puede ser capturado en playas cercanas a desembocaduras de ríos que remonta.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
      },
      {
        nombreComun: 'Salmón Coho (Plateado)',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, moderadamente alto y comprimido lateralmente. [cite: 711] Manchas negras en el dorso y lóbulo superior de la cola, y una coloración plateada en los costados y región abdominal. [cite: 715] Machos adultos con mandíbula deformada. [cite: 713] Puede ser capturado en playas cercanas a desembocaduras.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
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
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Abundante en la costa de Chiloé, especialmente en playas con oleaje y desembocaduras. Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'En fondos arenosos, a menudo cerca de la rompiente. Pez plano que se camufla excelentemente. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Cardúmenes en la zona costera, buena pesca de orilla. Color gris pizarra, plateado oscuro en lomo, claro en vientre. Franja plateada lateral notoria.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Común en ambientes costeros rocosos y mixtos del sur. Cuerpo alargado, frente aplastada, labios gruesos de color amarillo.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en las playas expuestas del sur de Chile. Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    }
  ]
},
{
  id: 62,
  nombre: 'Playa La Ventana', // Asumiendo esta es la Playa Mar Brava cerca de Ancud con nuevas coordenadas
  latitude: -41.74527872269453, 
  longitude: -73.7346745209861, // Nota: Las coordenadas que diste en el prompt son -74.00861635386474. Usaré esas.
  
  tipo: 'Playa',
  region: 'Los Lagos', // Chiloé
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [ // Usando un perfil de especies similar al de ID 51 (Playa Mar Brava, Ancud)
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Abundante en la costa de Chiloé, especialmente en playas con oleaje fuerte y desembocaduras. Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, presente en playas con rompientes fuertes. Color azul en el dorso, celeste en los flancos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Se encuentra en fondos arenosos, especialmente cerca de la rompiente. Pez plano de excelente camuflaje.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Habita roqueríos cercanos a la costa y fondos de arena. Cuerpo alargado, labios gruesos de color amarillo.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera. Color gris pizarra, plateado oscuro en lomo, claro en vientre.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto. Común en desembocaduras y playas del sur de Chile.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, frecuente cerca de desembocaduras.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Cardúmenes costeros, especialmente en aguas más tranquilas de bahías o desembocaduras.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Salmón Chinook', // Posible cerca de desembocaduras importantes
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'El más grande de los salmones del Pacífico, remonta ríos para desovar.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, puede encontrarse en playas con rompientes.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    }
  ]
},
{
  id: 64,
  nombre: 'Playa Brava (Maullín)',
  latitude: -41.74077308782815,
  longitude:  -73.73497254374536,
  tipo: 'Playa',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Común en playas con oleaje y sectores rocosos adyacentes.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, se acerca a la orilla para cazar.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en playas expuestas, busca alimento en la rompiente.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
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
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie común en desembocaduras y playas adyacentes en el sur.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Busca alimento en la mezcla de aguas dulces y saladas.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Frecuente en estuarios y la zona costera cercana.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Salmón Coho', // Posible por la desembocadura
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Remonta ríos para desovar; puede capturarse en la aproximación costera.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 66,
  nombre: 'Playa Quivolgo',
  latitude: -35.28129763197417,
  longitude: -72.4032894010372,
  tipo: 'Playa',
  region: 'Maule',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras, playas y desembocaduras.', // (Sernapesca PDF Marinas p.28)
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos.
    },
    {
      nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
      carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña".
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'), // Según tu array original, no tiene imagen definida para Rollizo
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. Habita desde el submareal somero hasta los 100 metros de profundidad.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"], // Genéricos para Rollizo
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Dieta incluye crustáceos, moluscos, equinodermos (Sernapesca PDF Marinas p.29)
    },
    
  ]
},
{
  id: 67,
  nombre: 'Isla Mocha',
  latitude: -38.411982424929725,// APROXIMADO - ¡VERIFICAR! (Centro de la isla)-38.411982424929725, -73.9313827018901
  longitude: -73.9313827018901, // APROXIMADO - ¡VERIFICAR! (Centro de la isla)
  tipo: 'Playa', // Usando 'Playa' para referirse a la pesca costera general en la isla (playas y/o roqueríos accesibles)
  region: 'Biobío', // Administrativamente depende de Lebu [cite: 804]
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas de la isla.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras rocosas y arenosas, y desembocaduras.', // [cite: 239, 243, 453]
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 453]
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 453]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas.', // [cite: 188]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 195]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria.', // [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // [cite: 237] (dieta general)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. Habita roqueríos cercanos a la costa y fondos de arena.', // [cite: 249, 250, 254]
      senuelos: ["Jig", "Vinilo", "Minnow"], // [cite: 410] (TNC Litorales)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // [cite: 255, 411]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'), // No definido en tu array original
      caracteristicas: 'Pez de color negro, con dos puntos blancos en cada costado de su lomo (adultos). Habita en fondos rocosos con grandes cuevas. Especie longeva y nativa de Chile y Perú.', // [cite: 318, 362, 364]
      senuelos: ["Jig", "Vinilo"], // [cite: 361] (TNC Litorales)
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"], // [cite: 324, 363]
    }
  ]
},
{
  id: 68,
  nombre: 'Playa Blanca (Lota)',
  latitude: -37.07269825314048,
  longitude: -73.15043719642517,
  tipo: 'Playa',
  region: 'Biobío',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces como sardinas y anchovetas e invertebrados de playas arenosas. [cite: 188, 196]',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto, levemente comprimido. Color marrón, azulado en el dorso y amarillo plateado en el vientre. Habita zonas costeras donde desembocan los ríos, entre fondos de arena y rocosos. [cite: 239, 453]',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Siente especial predilección por los pejerreyes. [cite: 221]', // Usando P. adspersus como en tu array; Sernapesca PDF detalla Oplegnathus insignis [cite: 213]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria. [cite: 233]',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 237]
    },
    
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. Habita desde el submareal somero hasta los 100 metros de profundidad, asociado al fondo marino. [cite: 249, 250, 255, 410]',
      senuelos: ["Jig", "Vinilo", "Minnow"], // [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta incluye crustáceos, moluscos, poliquetos, equinodermos y urocordados. [cite: 255, 411]
    }
  ]
},
{
  id: 69,
  nombre: 'Playa Chinchorro (Arica)',
  latitude: -18.463677870616728,
  longitude: -70.30607291796127,
  tipo: 'Playa',
  region: 'Arica y Parinacota',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23) [cite: 188, 196]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos) con características y dieta similares [cite: 213, 214, 221]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo y base de las pectorales. Habita aguas litorales templadas, ya sea en playas de arena o sectores rocosos.', // (Sernapesca PDF Marinas p.32) [cite: 280, 281]
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27) [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34) [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Peces de cuerpo alargado y discretamente comprimidos. Cirros presentes alrededor de los ojos. Habita sectores del intermareal rocoso a profundidades que no superan los 20 metros.', // (Sernapesca PDF Marinas p.34) [cite: 298, 301, 303]
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // (TNC Litorales p.11) [cite: 407]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte; Sernapesca PDF Marinas (p.20) describe Sebastes capensis como Cabrilla Común [cite: 153]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Especie nativa que habita desde el Sur de Chile hasta el Perú. Vive en zonas costeras entre fondos rocosos y fondos de arena. Su alimentación consiste principalmente en peces y algunos crustáceos.', // (TNC Litorales p.12) [cite: 415, 416, 417]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis', // (Sernapesca PDF Marinas p.19) [cite: 142]
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, moderadamente comprimido y alto. Aleta dorsal larga con una profunda incisión en forma de "V". Color gris-plateado en los flancos, con el dorso más oscuro. Habita sectores litorales cercanos a playas arenosas y zonas rocosas.', // (Sernapesca PDF Marinas p.19) [cite: 142, 143, 146, 149]
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"], // Dieta incluye crustáceos, gusanos poliquetos y algas (Sernapesca PDF Marinas p.19) [cite: 151]
    }
  ]
},
{
  id: 70,
  nombre: 'Playa La Lisera (Arica)',
  latitude: -18.494297905590336,
  longitude: -70.32620679813978,
  tipo: 'Playa',
  region: 'Arica y Parinacota',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [ // Especies similares a Playa Chinchorro
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre.', // (Sernapesca PDF Marinas p.23) [cite: 188]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla en fondos arenosos. Cuerpo ovalado, ambos ojos en el lado izquierdo.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con una mancha negra en el opérculo.', // (Sernapesca PDF Marinas p.32) [cite: 280]
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27) [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34) [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo alargado. Cirros presentes alrededor de los ojos. Habita intermareal rocoso.', // (Sernapesca PDF Marinas p.34) [cite: 298, 301, 303]
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // (TNC Litorales p.11) [cite: 407]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Habita en zonas costeras entre fondos rocosos y arena. Se alimenta de peces y crustáceos.', // (TNC Litorales p.12) [cite: 415, 416, 417]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ]
},
{
  id: 71,
  nombre: 'Playa Costa Verde (Tarapacá)',
  latitude: -20.454313119665713,
  longitude: -70.15819959683158,
  tipo: 'Playa',
  region: 'Tarapacá',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo y base de las pectorales.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Especie nativa que habita desde el Sur de Chile hasta el Perú. Vive en zonas costeras entre fondos rocosos y fondos de arena.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Habita desde el submareal somero hasta los 100 metros de profundidad.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Peces de cuerpo alargado. Cirros presentes alrededor de los ojos. Habita sectores del intermareal rocoso.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, moderadamente comprimido y alto. Color gris-plateado en los flancos, con el dorso más oscuro.', // (Sernapesca PDF Marinas p.19)
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
    }
  ]
},
{
  id: 72,
  nombre: 'Playa Piedras Bayas (Atacama)',
  latitude: -27.542443226449524,
  longitude: -70.89613075896158,
  tipo: 'Playa',
  region: 'Atacama',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos. Cuerpo ovalado, muy comprimido.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Franja plateada lateral notoria.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Vive en zonas costeras entre fondos rocosos y fondos de arena. Se alimenta de peces y crustáceos.',
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Habita fondos rocosos y arenosos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea', // (Sernapesca PDF Marinas p.22)
      imageAsset: require('../imagenes/cojinova-del-norte.png'), // Como en ID 29 (Playa Flamenco)
      caracteristicas: 'Cuerpo ovalado y comprimido. Color azul oscuro en el dorso y plateado en el vientre. Habita cerca de la costa, sobre fondos arenosos o rocosos, en cardúmenes.', // (Sernapesca PDF Marinas p.22)
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Se alimenta de peces pequeños (Sernapesca PDF Marinas p.22)
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Peces de cuerpo alargado. Cirros presentes alrededor de los ojos. Habita sectores del intermareal rocoso.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    }
  ]
},
{
  id: 73,
  nombre: 'Playa Desembocadura Río Camarones',
  latitude: -19.186078782147334,
  longitude: -70.2732610571207,
  tipo: 'Playa', // Se refiere a la playa en la zona de la desembocadura
  region: 'Arica y Parinacota',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [ // Especies comunes para el norte grande, con influencia de desembocadura
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Frecuenta desembocaduras y playas arenosas.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla en fondos arenosos y fangosos, común en desembocaduras. Cuerpo ovalado, ambos ojos en el lado izquierdo.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Muy común en estuarios y desembocaduras.', // (Sernapesca PDF Marinas p.28)
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo. Habita aguas litorales, fondos rocosos y arenosos, a veces cerca de desembocaduras.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Franja plateada lateral notoria. Frecuenta estuarios.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34)
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo alargado. Cirros presentes alrededor de los ojos. Habita sectores del intermareal rocoso, que pueden existir cerca de desembocaduras rocosas.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Vive en zonas costeras entre fondos rocosos y arena. Puede encontrarse en zonas de desembocaduras con estructuras rocosas.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ]
},
{
  id: 74,
  nombre: 'Playas de Pisagua',
  latitude: -19.589796108173093,
  longitude: -70.20585037341225,
  tipo: 'Playa',
  region: 'Tarapacá',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [ // Especies típicas del litoral de Tarapacá
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, color azul en el dorso, celeste en los flancos. Común en las costas de Tarapacá.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla en fondos arenosos. Común en las costas de Tarapacá.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y alto, color gris plateado con mancha negra en opérculo. Frecuente en Tarapacá.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo. Franja plateada lateral notoria. Presente en toda la costa norte.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Habita en zonas costeras entre fondos rocosos y arena. Común en Tarapacá.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, labios gruesos. Común en Tarapacá, en fondos rocosos y arena.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo alargado. Cirros presentes alrededor de los ojos. Común en intermareal rocoso de Tarapacá.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo fusiforme, moderadamente comprimido. Color gris-plateado. Común en Tarapacá.', // (Sernapesca PDF Marinas p.19)
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
    }
  ]
},
{
  id: 75,
  nombre: 'Caleta El Cobre',
  latitude: -24.24486636205212,
  longitude: -70.52779877639378,
  tipo: 'Playa',
  region: 'Antofagasta',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti', // [cite: 188]
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. [cite: 188, 190]',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Su alimentación es variada, incluyendo pequeños peces y crustáceos [cite: 196]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', // [cite: 280]
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, presenta aletas con espinas y radios, cuerpo de color gris plateado con una mancha negra en el reborde del opérculo. [cite: 280] Pez de alta dinámica que se desplaza en pequeños cardúmenes en aguas litorales templadas. [cite: 282]',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"], // Basado en prácticas comunes
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"], // Basado en prácticas comunes y dieta general de peces de roca
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte; Sernapesca PDF Marinas (p.20) describe Sebastes capensis como Cabrilla Común. TNC Litorales p.12 [cite: 415]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Es una especie nativa que habita desde el Sur de Chile hasta el Perú. Puede vivir hasta los 300 metros de profundidad y en zonas costeras entre fondos rocosos y fondos de arena. [cite: 416] Su alimentación consiste principalmente en peces y algunos crustáceos como el camarón de roca y los panchotes. [cite: 417]',
      senuelos: ["Jigs", "Vinilos"], // Recomendaciones TNC Litorales p.12 [cite: 419]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Recomendaciones TNC Litorales p.12 [cite: 419]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', // [cite: 249]
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Presenta dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. [cite: 249, 250] Habita desde el submareal somero hasta los 100 metros de profundidad, asociado al fondo marino. [cite: 255]',
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados. [cite: 255]
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Peces de cuerpo alargado y discretamente comprimidos. Cirros presentes alrededor de los ojos. [cite: 300] Habita sectores del intermareal rocoso a profundidades que no superan los 20 metros. [cite: 303]',
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // Su alimentación consiste principalmente en crustáceos como cangrejos y panchotes y algunos moluscos. (TNC Litorales p.11) [cite: 405, 407]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini', // [cite: 223]
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, algo comprimido, con una región cefálica de perfil cóncavo muy grande. Juveniles rojos con mancha amarilla, adultos gris azulado con mancha amarilla. [cite: 223, 225, 226] Habita en sustratos rocosos del submareal superior. [cite: 230]',
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8) [cite: 371]
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en lapas, pequeñas jaibas, locos, camarones, panchotes y erizos y estrellas de mar. (TNC Litorales p.8)[cite: 370]. Sernapesca PDF Marinas (p.26) indica moluscos como chitones y almejas, además de crustáceos y erizos. [cite: 231]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', // [cite: 233]
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria. [cite: 233]',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas. [cite: 237]
    }
  ]
},
{
  id: 76,
  nombre: 'Playa Amolana',
  latitude: -31.215167437203267,
  longitude: -71.6414093351048,
  tipo: 'Playa',
  region: 'Coquimbo',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti', //
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23 [cite: 188, 196])
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23 [cite: 196])
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus', // Consistente con tu array
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Descripción general. Sernapesca PDF Marinas (p.25) [cite: 213, 214] detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes[cite: 221].
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', //
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo y base de las pectorales. Pez de alta dinámica que se desplaza en pequeños cardúmenes en aguas litorales templadas, ya sea en playas de arena o sectores rocosos.', // (Sernapesca PDF Marinas p.32 [cite: 280, 282])
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', //
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27 [cite: 233])
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27 [cite: 237]).
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', //
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. Habita desde el submareal somero hasta los 100 metros de profundidad, asociado al fondo marino.', // (Sernapesca PDF Marinas p.29 [cite: 249, 250, 255])
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11 [cite: 413])
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados (Sernapesca PDF Marinas p.29 [cite: 255]).
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini', //
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, algo comprimido, con una región cefálica de perfil cóncavo muy grande. Juveniles rojos con mancha amarilla, adultos gris azulado con mancha amarilla. Habita en sustratos rocosos del submareal superior.', // (Sernapesca PDF Marinas p.26 [cite: 223, 225, 226, 230])
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8 [cite: 371])
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en moluscos como chitones y almejas, además de crustáceos y erizos (Sernapesca PDF Marinas p.26 [cite: 231]). TNC Litorales (p.8) [cite: 370] menciona lapas, pequeñas jaibas, locos, camarones, panchotes y erizos y estrellas de mar.
    }
  ]
},
{
  id: 77,
  nombre: 'Playa Las Salinas (Coquimbo)', // Aclarando región ya que es un nombre común
  latitude: -31.613029160017756,
  longitude: -71.56741528280233,
  tipo: 'Playa',
  region: 'Coquimbo',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. Se alimenta de pequeños peces e invertebrados de playas arenosas.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes.
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo y base de las pectorales. Pez de alta dinámica que se desplaza en pequeños cardúmenes en aguas litorales templadas.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27).
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. Habita desde el submareal somero hasta los 100 metros de profundidad.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados (Sernapesca PDF Marinas p.29).
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, algo comprimido, con una región cefálica de perfil cóncavo muy grande. Juveniles rojos con mancha amarilla, adultos gris azulado con mancha amarilla. Habita en sustratos rocosos del submareal superior.', // (Sernapesca PDF Marinas p.26)
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8)
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en moluscos como chitones y almejas, además de crustáceos y erizos (Sernapesca PDF Marinas p.26).
    }
  ]
},
{
  id: 78,
  nombre: 'Tres Playitas',
  latitude: -28.406027763126296,
  longitude: -71.19011827118109,
  tipo: 'Playa',
  region: 'Atacama',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior.
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo y base de las pectorales.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Especie nativa que habita desde el Sur de Chile hasta el Perú. Vive en zonas costeras entre fondos rocosos y fondos de arena.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea',
      imageAsset: require('../imagenes/cojinova-del-norte.png'), // Como en ID 29 (Playa Flamenco)
      caracteristicas: 'Cuerpo ovalado y comprimido. Color azul oscuro en el dorso y plateado en el vientre. Habita cerca de la costa, sobre fondos arenosos o rocosos, en cardúmenes.', // (Sernapesca PDF Marinas p.22)
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Se alimenta de peces pequeños (Sernapesca PDF Marinas p.22)
    }
  ]
},
{
  id: 79,
  nombre: 'Playa Los Bronces',
  latitude: -28.63984350922693,
  longitude: -71.2816170563421,
  tipo: 'Playa',
  region: 'Atacama',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti', // [cite: 188]
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, comprimido lateralmente, de color azul en el dorso, celeste en los flancos y blanquecino-plateado en el vientre. Aletas anaranjadas. [cite: 190]',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Su alimentación es variada, incluyendo pequeños peces y crustáceos como pulguillas de mar [cite: 196]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus', // Consistent with your array
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano que se camufla excelentemente en fondos arenosos, cazador al acecho. Cuerpo ovalado, muy comprimido, ambos ojos en el lado izquierdo.', // Sernapesca PDF Marinas (p.25) describe Oplegnathus insignis [cite: 213]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes [cite: 221]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', // [cite: 280]
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, presenta aletas con espinas y radios, cuerpo de color gris plateado con una mancha negra en el reborde del opérculo, base de las pectorales y en la base del último radio dorsal y anal. [cite: 280]',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"], // TNC Litorales p.13 [cite: 432]
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"], // TNC Litorales p.13 [cite: 432] (adaptado)
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', // [cite: 233]
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre, con color amarillo verdoso en las aletas y borde de la cola. Franja plateada lateral notoria. [cite: 233]',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas y plantas [cite: 237]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // TNC Litorales p.12 [cite: 415]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Es una especie nativa que habita desde el Sur de Chile hasta el Perú. Puede vivir hasta los 300 metros de profundidad y en zonas costeras entre fondos rocosos y fondos de arena. [cite: 416] Su alimentación consiste principalmente en peces y algunos crustáceos como el camarón de roca y los panchotes. [cite: 417]',
      senuelos: ["Jigs", "Vinilos"], // TNC Litorales p.12 [cite: 419] (adaptado)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // TNC Litorales p.12 [cite: 419] (adaptado)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', // [cite: 249]
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos de color amarillo. [cite: 249] Dos bandas longitudinales de manchas claras irregulares sobre la línea lateral. [cite: 250] Habita desde el submareal somero hasta los 100 metros de profundidad, asociado al fondo marino. [cite: 255]',
      senuelos: ["Jig", "Vinilo", "Minnow"], // TNC Litorales p.11 [cite: 410] (adaptado)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados [cite: 255]
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea', // [cite: 170]
      imageAsset: require('../imagenes/cojinova-del-norte.png'),
      caracteristicas: 'Peces de cuerpo fusiforme, con pedúnculo caudal angosto. Cabeza y dorso de color azul-negruzco, flancos y vientre de color plateados. [cite: 171] Especie pelágica, preferentemente costera de hábitos gregarios. [cite: 177]',
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Sus hábitos alimenticios principalmente de peces como sardinas, anchovetas y jureles pequeños, además de crustáceos [cite: 179]
    }
  ]
},
{
  id: 86,
  nombre: 'Muelle Barón',
  latitude: -33.04157376745401,
  longitude: -71.60800722757271,
  tipo: 'Muelle', // Tipo de lugar
  region: 'Valparaíso',
  cuota: 'Consultar SERNAPESCA.', // Información estándar de cuota
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // Puedes agregar una imagen de fondo si lo deseas
  especies: [
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi', // Jurel común del Pacífico Sur
      imageAsset: require('../imagenes/jurel.png'), // Cambiado de require('../imagenes/jurel.png') según tu última entrada.
      caracteristicas: 'Cuerpo alargado y comprimido, de color azul verdoso en el dorso y plateado en el vientre. Línea lateral muy marcada con escudetes óseos. Los adultos se alimentan de peces pequeños.', // Basado en TNC Litorales PDF p.23
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas"],
      carnadas: ["Gusanos", "Camarones", "Filete de pescado"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Se puede capturar desde el molo o playa, especialmente al atardecer.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Común en muelles y escolleras, pesca con flotador.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Lenguado de Arena', // Asumiendo este tipo de lenguado
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Cuerpo ovalado y comprimido, coloración variable para mimetizarse con fondos arenosos.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Thyrsites atun', // Sernapesca Marinas PDF p.33 [cite: 284]
      imageAsset: require('../imagenes/sierra.png'), // Como solicitaste
      caracteristicas: 'Cuerpo alargado y fuertemente comprimido, con mandíbula inferior prominente. Color plateado brillante, dorso más oscuro. Presenta pequeñas aletillas detrás de la dorsal y anal. Puede alcanzar tamaños considerables.', // Basado en Sernapesca Marinas PDF p.33 [cite: 285, 287, 289, 290]
      senuelos: ["Jig", "Chispa", "Plumilla", "Minnow"], // Proporcionado por ti
      carnadas: ["Filete de pescado"], // Proporcionado por ti (Suelen ser predadores de otros peces) [cite: 294]
    }
  ],
},
{
  id: 87,
  nombre: 'Muelle Vergara',
  latitude: -33.01142230244984,
  longitude: -71.5544512643862,
  tipo: 'Muelle',
  region: 'Valparaíso',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'), // Asegúrate de tener esta imagen
      caracteristicas: 'Cuerpo alargado y comprimido, de color azul verdoso en el dorso y plateado en el vientre. Línea lateral muy marcada con escudetes óseos. Común en muelles y escolleras.', // Basado en TNC Litorales PDF p.23
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas", "Sabiki"], // Sabiki incluido
      carnadas: ["Gusanos de mar", "Camarones", "Filete de pescado"], // "Masa" (similar a pan) eliminada
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomidae', // Familia de varias especies de Tomoyos/Chalacos
      imageAsset: require('../imagenes/tomoyo.png'), // Puedes agregar una imagen específica si la tienes
      caracteristicas: 'Peces de cuerpo alargado, a menudo con cirros en la cabeza. Habitan fondos rocosos y estructuras de muelles, no muy profundos. Varias especies son difíciles de diferenciar.', // Info general, ver TNC Litorales p.11 / Sernapesca Marinas PDF p.34
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // Basado en TNC Litorales p.11
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Común en roqueríos y estructuras
      imageAsset: require('../imagenes/cabrilla.png'), // Puedes agregar una imagen específica si la tienes
      caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas oscuras. Vive en fondos rocosos y cerca de estructuras, cazador de emboscada.', // Basado en TNC Litorales p.12
      senuelos: ["Jigs", "Vinilos"], // Basado en TNC Litorales p.12
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Basado en TNC Litorales p.12
    }
  ],
},
{
  id: 88,
  nombre: 'Laguna Verde',
  latitude: -33.10224443994046,
  longitude: -71.67410086059395,
  tipo: 'Playa', // Laguna Verde es una caleta/playa con roqueríos, apta para estas especies marinas.
  region: 'Valparaíso',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'), // Si no tienes 'jurel.png', cambia esto a null o al nombre de tu imagen genérica.
      caracteristicas: 'Cuerpo alargado y comprimido, de color azul verdoso en el dorso y plateado en el vientre. Línea lateral muy marcada con escudetes óseos. Se acerca a la costa, pudiendo ser capturado desde orilla en puntos estratégicos.', // Basado en TNC Litorales PDF p.23
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas", "Sabiki"],
      carnadas: ["Gusanos de mar", "Camarones", "Filete de pescado"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez de cuerpo fusiforme, se puede capturar en playas y roqueríos, especialmente al amanecer o atardecer.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Común en la orilla de playas y roqueríos. Pesca ligera y con flotador es usual.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // La masa es carnada común para pejerrey.
    },
    {
      nombreComun: 'Lenguado de Arena',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Cuerpo ovalado y comprimido, coloración variable para mimetizarse con fondos arenosos cerca de roqueríos o en playas.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomidae', // Familia que agrupa varias especies de Tomoyos/Chalacos
      imageAsset: require('../imagenes/tomoyo.png'), // No teníamos una imagen específica definida para este grupo.
      caracteristicas: 'Peces de cuerpo alargado, comunes en pozas intermareales y roqueríos costeros. Suelen tener cirros en la cabeza y coloración mimética.', // Info general, ver TNC Litorales p.11 / Sernapesca Marinas PDF p.34
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // Basado en TNC Litorales p.11
    }
  ],
},
{
  id: 89,
  nombre: 'Playa Ritoque',
  latitude: -32.82864407164183,
  longitude: -71.52527860715843,
  tipo: 'Playa',
  region: 'Valparaíso',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Pez de cuerpo fusiforme, muy cotizado en pesca de orilla. Se encuentra en rompientes y pozones de playas.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado de Arena', // Asumiendo este tipo de lenguado para playa
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Cuerpo plano, se mimetiza con fondos arenosos. Común en la pesca de orilla en playas.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Nada en cardúmenes cerca de la orilla. Muy popular en la pesca recreativa de playa.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: null, // No tenemos imagen definida para Cavinza
      caracteristicas: 'Cuerpo alargado y comprimido, coloración gris plateada, más oscura en el dorso. Forma cardúmenes en zonas costeras.', // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
      senuelos: ["Plumillas (tipo sabiki con anzuelos pequeños)", "Jigs muy pequeños y brillantes"], // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
      carnadas: ["Gusanos de mar (trozos pequeños)", "Camarón pequeño", "Pulga de mar", "Trocitos de pescado"], // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'), // No tenemos imagen definida para Cabrilla
      caracteristicas: 'Cuerpo robusto, coloración variable. Se encuentra en fondos rocosos cercanos a playas o en rompientes con estructuras.', // Basado en TNC Litorales p.12
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ],
},
{
  id: 90,
  nombre: 'Playa Ventanas',
  latitude: -32.741144604755185,
  longitude: -71.49166229746554,
  tipo: 'Playa',
  region: 'Valparaíso',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Pez de cuerpo fusiforme, se captura en playas con oleaje y pozones. Activa al amanecer y atardecer.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado de Arena',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Pez plano que se mimetiza con fondos arenosos. Se encuentra en la orilla de playas, a menudo cerca de la rompiente.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Forma cardúmenes y es común en la pesca de orilla. Cuerpo plateado con franja lateral distintiva.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'), // No teníamos imagen para Rollizo en entradas anteriores
      caracteristicas: 'Cuerpo alargado, frente aplastada, labios gruesos amarillos. Dos bandas longitudinales de manchas claras. Habita roqueríos y fondos de arena cercanos a la playa. [cite: 249, 250]', // Sernapesca Marinas PDF p.29
      senuelos: ["Jig", "Vinilo", "Minnow"], // TNC Litorales PDF p.11 [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Dieta incluye crustáceos, moluscos, etc. [cite: 255]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'), // No teníamos imagen para Cabrilla en entradas anteriores
      caracteristicas: 'Cuerpo robusto, coloración variable café-rojiza a gris con manchas. Se encuentra en fondos rocosos y estructuras cercanas a la playa.', // Basado en TNC Litorales PDF p.12 [cite: 416]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ],
},
{
  id: 91,
  nombre: 'Playa Pangal, Maullín',
  latitude: -41.605873039244464,
  longitude: -73.65426066559522,
  tipo: 'Playa',
  region: 'Los Lagos',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie emblemática de desembocaduras y zonas estuarinas. Cuerpo alargado, busca la mezcla de agua dulce y salada.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina', // Actualizado según tu indicación
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en playas expuestas, busca alimento en la rompiente.', // Actualizado
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Actualizado
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Actualizado
    },
    {
      nombreComun: 'Lenguado Chileno', // Nombre Común actualizado (antes "Lenguado de Arena")
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, se acerca a la orilla para cazar.', // Actualizado
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Actualizado
      carnadas: ["Pejerrey", "sardina"], // Actualizado
    },
    {
      nombreComun: 'Pejerrey de Mar', // Actualizado según tu indicación
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera.', // Actualizado
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Actualizado
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Actualizado
    }
  ],
},
{
  id: 92,
  nombre: 'Playa Maicolpué',
  latitude: -40.595139212735745,
  longitude: -73.73557678092587,
  tipo: 'Playa',
  region: 'Los Lagos',
  cuota: 'Consultar SERNAPESCA.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie emblemática de desembocaduras y zonas estuarinas. Cuerpo alargado, busca la mezcla de agua dulce y salada.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Presente en playas expuestas, busca alimento en la rompiente.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Pez plano de fondos arenosos, se acerca a la orilla para cazar.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    }
  ],
},
{
  id: 100,
  nombre: 'Playa Caleta de Hornos',
  latitude: -29.620859867166875,
  longitude: -71.28720900103178,
  tipo: 'Playa',
  region: 'Coquimbo',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
      senuelos: ['Chispa', 'Minnow', 'Jig', 'Vinilos', 'Metal vibs grandes', 'Plumillas', 'Bucktail'],
      carnadas: ['Pulga de mar', 'Nape', 'Pejerrey', 'Sardina', 'Moluscos ocasionalmente (Lapa , Piure , Almeja)', 'Gueple de mar (lombriz)']
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
      senuelos: ['Chispa', 'Minnow', 'Jig', 'Vinilo', 'Metal vibs grandes', 'Plumillas', 'Bucktail'],
      carnadas: ['Pejerrey', 'sardina']
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado y algo comprimido, color café verdoso con puntos y manchas claras.',
      senuelos: ['Jig', 'Vinilo', 'Minnow'],
      carnadas: ['Pulga de mar', 'Jibia', 'Piure', 'Lapa', 'Chorito', 'Machuelo', 'Pancora blanda']
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Coloración rojiza con tonos anaranjados, cuerpo robusto, mandíbulas fuertes. Presente en zonas rocosas costeras.',
      senuelos: ['Vinilo', 'Jig', 'Minnow'],
      carnadas: ['Jaiba', 'Erizo', 'Choro zapato', 'Lapa', 'Camarón', 'Chitones', 'Almejas']
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Pez robusto de coloración oscura. Presente en fondos rocosos, cuevas y bosques de algas. Muy territorial.',
      senuelos: ['Jig', 'Vinilo'],
      carnadas: ['Lapa', 'Jaiba', 'Camarón', 'Erizo', 'Piure', 'Almeja', 'Choritos']
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Pez de cuerpo alto y comprimido, color marrón con manchas irregulares claras. Asociado a fondos rocosos costeros.',
      senuelos: ['Jig', 'Vinilo'],
      carnadas: ['Gueple de mar', 'Pulga de mar', 'Pequeños mariscos']
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ['Microjig', 'Mosca', 'Metal vib', 'Cucharilla pequeña', 'Plumillas'],
      carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña', 'Tebo', 'Filete de pescado pequeño']
    },
    {
      nombreComun: 'Blanquillo',
      nombreCientifico: 'Prolatilus jugularis',
      imageAsset: require('../imagenes/blanquillo.png'),
      caracteristicas: 'Cuerpo alargado, coloración plateada a celeste claro, muy común en zonas arenosas y profundas.',
      senuelos: ['Jigs', 'Vinilos'],
      carnadas: ['Pulga de mar', 'Jibia', 'Piure', 'Lapa', 'Chorito', 'Filete de pescado']
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo ovalado y comprimido, con una coloración gris plateada. Muy común en la zona centro-norte de Chile.',
      senuelos: ['Jig', 'Vinilo', 'Plumillas'],
      carnadas: ['Pequeños trozos de camarón o filete de pescado', 'lapa', 'piure', 'mariscos pequeños']
    },
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'),
      caracteristicas: 'Pez de cuerpo fusiforme y coloración azul verdoso. Se agrupa en cardúmenes, muy popular en pesca costera y embarcada.',
      senuelos: ['Jig', 'Vinilo', 'Plumillas', 'Cucharas', 'Metal Vib'],
      carnadas: ['Sardina', 'Pejerrey', 'Trozos de pescado']
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Pez fusiforme, rápido y depredador, con rayas verticales oscuras. Muy buscado en pesca deportiva costera.',
      senuelos: ['Minnows grandes', 'Jigs', 'Cucharas metálicas', 'Plumas', 'Spinners'],
      carnadas: ['Trozos de pescado', 'Sardinas enteras', 'Filete de jurel']
    }
  ]
},
{
  id: 101,
  nombre: 'Punta de Choros (Playas)',
  latitude: -29.242827118764264,
  longitude: -71.46429861130137,
  tipo: 'Playa',
  region: 'Coquimbo',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"]
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo ovalado y comprimido, con una coloración gris plateada. Muy común en la zona centro-norte de Chile.',
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado y algo comprimido, color café verdoso con puntos y manchas claras.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Pez robusto de coloración oscura. Presente en fondos rocosos, cuevas y bosques de algas. Muy territorial.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Coloración rojiza con tonos anaranjados, cuerpo robusto, mandíbulas fuertes. Presente en zonas rocosas costeras.',
      senuelos: ["Vinilo", "Jig", "Minnow"],
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"]
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Pez de cuerpo alto y comprimido, color marrón con manchas irregulares claras. Asociado a fondos rocosos costeros.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"]
    },
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'),
      caracteristicas: 'Pez de cuerpo fusiforme y coloración azul verdoso. Se agrupa en cardúmenes, muy popular en pesca costera y embarcada.',
      senuelos: ["Jig", "Vinilo", "Plumillas", "Cucharas", "Metal Vib"],
      carnadas: ["Sardina", "Pejerrey", "Trozos de pescado"]
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Pez fusiforme, rápido y depredador, con rayas verticales oscuras. Muy buscado en pesca deportiva costera.',
      senuelos: ["Minnows grandes", "Jigs", "Cucharas metálicas", "Plumas", "Spinners"],
      carnadas: ["Trozos de pescado", "Sardinas enteras", "Filete de jurel"]
    }
  ]
},
{
  id: 102,
  nombre: 'Playa Papudo',
  latitude: -32.49469288736458,
  longitude: -71.43432650881446,
  tipo: 'Playa',
  region: 'Valparaíso',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Cuerpo ovalado, comprimido, ambos ojos en el lado izquierdo. Lado oculado café oscuro, lado ciego cremoso. Se mimetiza con el fondo.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo ovalado y comprimido, con una coloración gris plateada. Muy común en la zona centro-norte de Chile.',
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado y algo comprimido, color café verdoso con puntos y manchas claras.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Pez robusto de coloración oscura. Presente en fondos rocosos, cuevas y bosques de algas. Muy territorial.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Coloración rojiza con tonos anaranjados, cuerpo robusto, mandíbulas fuertes. Presente en zonas rocosas costeras.',
      senuelos: ["Vinilo", "Jig", "Minnow"],
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"]
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Pez de cuerpo alto y comprimido, color marrón con manchas irregulares claras. Asociado a fondos rocosos costeros.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo comprimido y de gran altura, color gris plateado con una mancha negra en el reborde del opérculo.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"]
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Peces de cuerpo alargado. Cirros presentes alrededor de los ojos. Habita sectores del intermareal rocoso.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"]
    }
  ]
},
{
  id: 103,
  nombre: 'Muelle y Muro de Lebu',
  latitude: -37.5943894918047,
  longitude: -73.66523564810774,
  tipo: 'Muelle',
  region: 'Biobío',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie emblemática de desembocaduras y zonas estuarinas. Cuerpo alargado, busca la mezcla de agua dulce y salada.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo alargado y algo comprimido, color café verdoso con puntos y manchas claras.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Pez fusiforme, rápido y depredador, con rayas verticales oscuras. Muy buscado en pesca deportiva costera.',
      senuelos: ["Minnows grandes", "Jigs", "Cucharas metálicas", "Plumas", "Spinners"],
      carnadas: ["Trozos de pescado", "Sardinas enteras", "Filete de jurel"]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Sebastes capensis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, coloración rojiza con manchas más claras, asociado a fondos rocosos. Se captura desde roqueríos y muelles costeros.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos", "Filete de pescado"]
    }
  ]
},
{
  id: 104,
  nombre: 'Playa Lloncao',
  latitude: -37.909690757801926,
  longitude: -73.52116239213647,
  tipo: 'Playa',
  region: 'Biobío',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie emblemática de desembocaduras y zonas estuarinas. Cuerpo alargado, busca la mezcla de agua dulce y salada.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    }
  ]
},
{
  id: 105,
  nombre: 'Playa Mehuín',
  latitude: -39.430394648630525,
  longitude: -73.2157188451921,
  tipo: 'Playa',
  region: 'Los Ríos',
  cuota: 'Consultar la información actualizada de SERNAPESCA para temporadas, cuotas y regulaciones específicas.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Especie emblemática de desembocaduras y zonas estuarinas. Cuerpo alargado, busca la mezcla de agua dulce y salada.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Pez fusiforme, comprimido, dorso azulado, flancos celestes y vientre blanco-plateado. Aletas anaranjadas. Boca con poros sensoriales.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Aletas y cola con tonos amarillo verdoso. Franja plateada lateral notoria. Ocupa ambientes marinos diversos como estuarios y playas.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Salmón Coho (Plateado)',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Coloración plateada brillante, con cuerpo fusiforme. En época reproductiva desarrolla tonos rojizos. Muy presente en desembocaduras del sur.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Chinook (Rey)',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Gran tamaño, mandíbula prominente en época de desove. Muy valorado en pesca deportiva en el sur de Chile.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    }
  ]
}




];






  

  
  
  

  
  