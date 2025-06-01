  // Voyapescar/data/PuntosDePesca.js

  export const puntosDePesca = [
    {
      id: 1,
      nombre: 'Embalse La Paloma',
      descripcionLugar: 'Espejo de agua artificial en el corazón del Valle del Limarí, Coquimbo. Sus aguas tranquilas y el paisaje semiárido circundante ofrecen un espacio de calma y conexión con la naturaleza.',
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
          caracteristicas: 'Cuerpo esbelto, plateado con dorso azul. Aletas pequeñas. Habita lagos, lagunas y desembocaduras. Se mueve en cardúmenes, alimentándose de insectos y peces pequeños.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo ovalado, escamas grandes doradas o bronceadas. Habita lagos, lagunas y ríos lentos con vegetación. Es omnívora, busca alimento en el fondo y tiene comportamiento sociable y resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
        }
      ],
    },
    {
      id: 2,
      nombre: 'Lago Caburgua (Sector Playa Negra)',
      descripcionLugar: 'Tesoro lacustre de La Araucanía, de aguas notablemente cristalinas y playas de arena volcánica, enmarcado por bosques nativos y la silueta de volcanes. Un destino de serena belleza para disfrutar de sus aguas.',
      latitude: -39.19712137504378, 
      longitude: -71.80789305114823,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-caburgua.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 3,
      nombre: 'Lago Chungará',
      descripcionLugar: 'Joya del altiplano en Arica y Parinacota, uno de los lagos a mayor altitud del mundo, custodiado por imponentes volcanes. Un santuario natural de belleza extrema y paz sobrecogedora, un desafío para los aventureros.',
      latitude: -18.2386,
      longitude: -69.1530,
      tipo: 'Lago', // Capitalizado
      region: 'Arica y Parinacota',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 4,
      nombre: 'Lago Cochrane (o Pueyrredón)',
      descripcionLugar: 'Impresionante lago patagónico de aguas profundas y turquesas en Aysén, rodeado de montañas majestuosas y naturaleza indómita. Un escenario perfecto para la aventura y la búsqueda de experiencias memorables en sus aguas.',
      latitude: -47.242489261233665, 
      longitude: -72.43538308246877,
      tipo: 'Lago', // Capitalizado
      region: 'Aysén',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-cochrane.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 5,
      nombre: 'Lago Colico',
      descripcionLugar: 'Refugio de aguas claras y apacibles en La Araucanía, abrazado por densa vegetación nativa. Su entorno sereno es una invitación a la desconexión y al disfrute del paisaje lacustre, perfecto para una tranquila jornada.',
      latitude: -39.0855,
      longitude: -71.9728,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-colico.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 6,
      nombre: 'Lago General Carrera',
      descripcionLugar: 'El lago más grande de Chile, deslumbrante con sus aguas color calipso y formaciones geológicas únicas como la Capilla de Mármol. Un vasto escenario patagónico para explorar y maravillarse, ofreciendo experiencias acuáticas inolvidables.',
      latitude: -46.4375,
      longitude: -71.7150,
      tipo: 'Lago', // Capitalizado
      region: 'Aysén',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-general-carrera.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 7,
      nombre: 'Lago Lanalhue',
      descripcionLugar: 'Lago costero de aguas cálidas en la provincia de Arauco, un ecosistema singular rodeado de historia y verdor. Sus riberas ofrecen un espacio de tranquilidad para conectar con la naturaleza y disfrutar de sus aguas.',
      latitude: -37.9250,
      longitude: -73.3000,
      tipo: 'Lago', // Capitalizado
      region: 'Biobío',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-lanalhue.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo ovalado, escamas grandes doradas o bronceadas. Habita lagos, lagunas y ríos lentos con vegetación. Es omnívora, busca alimento en el fondo y tiene comportamiento sociable y resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
        }
      ],
    },
    {
      id: 8,
      nombre: 'Lago Llanquihue',
      descripcionLugar: 'Majestuoso lago del sur de Chile, con vistas privilegiadas a los volcanes Osorno y Calbuco. Sus pintorescas riberas y vastedad invitan a la contemplación y a disfrutar de jornadas memorables en sus aguas.',
      latitude: -41.1333,
      longitude: -72.7833,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/lago-llanquihue-textura.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Perca Trucha (Criolla)',
          nombreCientifico: 'Percichthys trucha',
          imageAsset: require('../imagenes/perca-trucha.png'),
          caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        }
      ],
    },
    {
      id: 9,
      nombre: 'Lago Lleu Lleu',
      descripcionLugar: 'Considerado uno de los lagos más puros del continente, este remanso de paz en Biobío, rodeado de naturaleza virgen, es perfecto para una jornada de profunda conexión con el entorno y sus aguas.',
      latitude: -38.1580,
      longitude: -73.3160,
      tipo: 'Lago', // Capitalizado
      region: 'Biobío',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-lleu-lleu.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        },
        {
          nombreComun: 'Carpa Común',
          nombreCientifico: 'Cyprinus carpio',
          imageAsset: require('../imagenes/carpa-comun.png'),
          caracteristicas: 'Cuerpo ovalado, escamas grandes doradas o bronceadas. Habita lagos, lagunas y ríos lentos con vegetación. Es omnívora, busca alimento en el fondo y tiene comportamiento sociable y resistente.',
          senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"],
          carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"],
        }
      ],
    },
    {
      id: 10,
      nombre: 'Lago Pirihueico',
      descripcionLugar: 'Tesoro cordillerano de origen glaciar en Los Ríos, envuelto por la exuberante selva valdiviana. Sus tranquilas aguas reflejan un paisaje sobrecogedor, ideal para la contemplación y una serena actividad acuática.',
      latitude: -39.9280,
      longitude: -71.7500,
      tipo: 'Lago', // Capitalizado
      region: 'Los Ríos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-pirihueico.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 11,
      nombre: 'Lago Puyehue',
      descripcionLugar: 'Enmarcado por un parque nacional y la imponente presencia del volcán homónimo, este lago de Los Lagos es un destino de belleza escénica y aguas termales, ideal para el relajo y la aventura en sus aguas.',
      latitude: -40.6655,
      longitude: -72.4633,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-puyehue.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        }
      ],
    },
    {
      id: 12,
      nombre: 'Lago Ranco',
      descripcionLugar: 'Vasto lago de la Región de Los Ríos, adornado con numerosas islas y bahías. Su privilegiado entorno natural y la quietud de sus aguas invitan a la exploración y a disfrutar de sus rincones.',
      latitude: -40.2705,
      longitude: -72.3746,
      tipo: 'Lago', // Capitalizado
      region: 'Los Ríos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-ranco.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        }
      ],
    },
    {
      id: 13,
      nombre: 'Lago Rupanco',
      descripcionLugar: 'De aguas profundas y cristalinas, rodeado de bosques nativos y la silueta de volcanes, este lago de Los Lagos es un escenario de gran belleza, perfecto para encontrar la serenidad y disfrutar de sus aguas.',
      latitude: -40.8205,
      longitude: -72.4797,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-rupanco.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 14,
      nombre: 'Lago Todos los Santos',
      descripcionLugar: 'Célebre por el intenso color esmeralda de sus aguas y la majestuosa vista del Volcán Osorno. Un rincón icónico del Parque Nacional Vicente Pérez Rosales para una experiencia acuática inolvidable.',
      latitude: -41.0912,
      longitude: -72.2345,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-todos-los-santos.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 15,
      nombre: 'Lago Villarrica',
      descripcionLugar: 'Popular destino turístico de La Araucanía, a los pies del activo Volcán Villarrica. Sus playas y entorno ofrecen un vibrante ambiente para actividades al aire libre y el disfrute de sus aguas.',
      latitude: -39.2667,
      longitude: -72.0833,
      tipo: 'Lago', // Capitalizado
      region: 'La Araucanía',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-villarrica.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Pejerrey Chileno',
          nombreCientifico: 'Basilichthys australis',
          imageAsset: require('../imagenes/pejerrey-chileno.png'),
          caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
          senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"],
          carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
        }
      ],
    },
    {
      id: 16,
      nombre: 'Lago Yelcho',
      descripcionLugar: 'Impresionante lago de la Patagonia chilena, alimentado por el Río Futaleufú. Sus aguas color verde intenso y el sobrecogedor entorno montañoso prometen una jornada memorable para los amantes de la naturaleza.',
      latitude: -43.3036,
      longitude: -72.3103,
      tipo: 'Lago', // Capitalizado
      region: 'Los Lagos',
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-lago-yelcho.jpg'),
      especies: [
          // ... (mantén tus especies como estaban)
          {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 17,
      nombre: 'Desembocadura Río Loa',
      descripcionLugar: 'Punto de encuentro del río más largo de Chile con el Océano Pacífico, un paisaje singular donde el desierto se funde con el mar, ofreciendo un espectáculo natural único y la posibilidad de sentir la brisa costera.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        }
      ],
    },
    {
      id: 18,
      nombre: 'Desembocadura Río Maipo (Zona Santo Domingo / Lloleo)',
      descripcionLugar: 'Importante zona estuarina en el litoral central, donde las aguas del Maipo se encuentran con el Pacífico. Un ecosistema dinámico, perfecto para observar aves y disfrutar la actividad del borde costero.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        }
      ],
    },
    {
      id: 19,
      nombre: 'Río Grande (Tierra del Fuego)',
      descripcionLugar: 'Un río icónico que serpentea por los vastos paisajes fueguinos, ofreciendo un desafío memorable en un entorno patagónico salvaje y de belleza indómita.',
      latitude: -53.89278858917105, 
      longitude: -68.88110595258479,
      tipo: 'Río', // Capitalizado
      region: 'Magallanes',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta (forma anádroma)',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 20,
      nombre: 'Río Petrohué (Sector La Poza / Desembocadura Lago Todos los Santos)',
      descripcionLugar: 'Famoso por sus aguas cristalinas color turquesa y espectaculares saltos, este río ofrece un entorno de volcanes y bosques nativos, un paraíso para los amantes de la naturaleza y las actividades fluviales.',
      latitude: -41.13980942751949, 
      longitude: -72.40269713228567,
      tipo: 'Río', // Capitalizado
      region: 'Los Lagos',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón del Atlántico (Salar)',
          nombreCientifico: 'Salmo salar',
          imageAsset: require('../imagenes/salmon-salar.png'),
          caracteristicas: 'Plateado con pocas marcas. Cuerpo alargado. Presente en ríos y mar del sur, muchas veces de origen cultivado. Muy resistente.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 21,
      nombre: 'Río Simpson',
      descripcionLugar: 'Emblemático río que atraviesa Coyhaique, conocido por sus accesibles orillas y hermosos paisajes patagónicos. Un lugar para disfrutar de la naturaleza fluvial y una tranquila jornada junto al agua.',
      latitude: -45.57758350219341, 
      longitude: -72.08005020620818,
      tipo: 'Río', // Capitalizado
      region: 'Aysén',
      // ... (resto igual)
      cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
      imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
      especies: [
        {
          nombreComun: 'Trucha Marrón (Fario)',
          nombreCientifico: 'Salmo trutta',
          imageAsset: require('../imagenes/trucha-fario.png'),
          caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Trucha Arcoiris',
          nombreCientifico: 'Oncorhynchus mykiss',
          imageAsset: require('../imagenes/trucha-arcoiris.png'),
          caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
          senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        },
        {
          nombreComun: 'Salmón Chinook',
          nombreCientifico: 'Oncorhynchus tshawytscha',
          imageAsset: require('../imagenes/salmon-chinook.png'),
          caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 22,
      nombre: 'Caleta Constitución, Antofagasta',
      descripcionLugar: 'Tradicional caleta en la costa de Antofagasta, donde se respira la tradición local y se disfruta del paisaje desértico junto al mar. Ideal para una experiencia costera auténtica.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: require('../imagenes/cabrilla.png'),
          caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
          senuelos: ["Jigs", "Vinilos"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomus philippii',
          imageAsset: require('../imagenes/tomoyo.png'),
          caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
        }
      ],
    },
    {
      id: 23,
      nombre: 'Playa Cavancha, Iquique',
      descripcionLugar: 'Vibrante playa urbana en el corazón de Iquique, con palmeras y un extenso borde costero. Un lugar perfecto para disfrutar del sol, el mar y la animada actividad nortina, quizás probando suerte desde la orilla.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabrilla Común',
          nombreCientifico: 'Paralabrax humeralis',
          imageAsset: require('../imagenes/cabrilla.png'),
          caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
          senuelos: ["Jigs", "Vinilos"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        }
      ],
    },
    {
      id: 24,
      nombre: 'Playa de Constitución (Zona Piedra de la Iglesia)',
      descripcionLugar: 'Extensa playa en la Región del Maule, con imponentes formaciones rocosas como la Piedra de la Iglesia. Un paisaje costero con carácter, ideal para caminatas y contemplar la fuerza del mar.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Jerguilla',
          nombreCientifico: 'Aplodactylus punctatus',
          imageAsset: require('../imagenes/jerguilla.png'),
          caracteristicas: 'Cuerpo ovalado, colores oscuros con patrones punteados o bandas. Vive en costas rocosas, especialmente en zonas de fuerte oleaje. Se alimenta de algas y pequeños invertebrados.',
          senuelos: ["Vinilo", "Jig"],
          carnadas: ["Algas (luche)", "Piures", "Pequeños crustáceos", "Pequeños mariscos"],
        }
      ],
    },
    {
      id: 25,
      nombre: 'Playa de Matanzas',
      descripcionLugar: 'Conocida por sus vientos y olas, esta playa de OHiggins es un destino para deportes náuticos y para quienes disfrutan del desafío de las aguas costeras en un entorno natural dinámico.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Bilagay',
          nombreCientifico: 'Cheilodactylus variegatus',
          imageAsset: require('../imagenes/bilagay.png'),
          caracteristicas: 'Cuerpo alargado, comprimido lateralmente, con tonalidades grises o pardas, a menudo moteado. Vive en costas rocosas del litoral central y norte, en zonas con abundante sustrato duro. Es bentónico, gregario y se alimenta de pequeños invertebrados y materia vegetal. Muy territorial.',
          senuelos: ["Jig", "Vinilo"],
          carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"],
        }
      ],
    },
    {
      id: 26,
      nombre: 'Playa de Morhuilla',
      descripcionLugar: 'Amplia playa en la provincia de Arauco, cercana a la desembocadura del río Tirúa. Un entorno natural extenso para largas caminatas y disfrutar de la brisa marina y el sonido de las olas.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 27,
      nombre: 'Playa Pichidangui',
      descripcionLugar: 'Hermosa bahía protegida en Coquimbo, de aguas tranquilas y entorno familiar. Perfecta para el descanso, actividades náuticas y disfrutar de la serenidad de sus costas.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Rollizo',
          nombreCientifico: 'Pinguipes chilensis',
          imageAsset: require('../imagenes/rollizo.png'),
          caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
        },
        {
          nombreComun: 'Pejeperro',
          nombreCientifico: 'Semicossyphus darwini',
          imageAsset: require('../imagenes/pejeperro.png'),
          caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.',
          senuelos: ["Vinilo", "Jig", "Minnow"],
          carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"],
        }
      ],
    },
    {
      id: 28,
      nombre: 'Playa El Laucho, Arica',
      descripcionLugar: 'Popular playa en Arica, con aguas templadas y un ambiente animado. Ideal para disfrutar del sol del norte y las actividades recreativas que ofrece el borde costero.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: require('../imagenes/cabinza.png'),
          caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.',
          senuelos: ["Jig", "Vinilo", "Plumillas"],
          carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        }
      ],
    },
    {
      id: 29,
      nombre: 'Playa Flamenco',
      descripcionLugar: 'Deslumbrante playa de arenas blancas y aguas de un intenso turquesa en Atacama. Un verdadero paraíso costero en medio del desierto, ideal para el asombro, la fotografía y una tranquila espera junto al mar.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cojinova del Norte',
          nombreCientifico: 'Seriolella violacea',
          imageAsset: require('../imagenes/cojinova-del-norte.png'),
          caracteristicas: 'Coloración azul metálica a gris, cuerpo alargado y cabeza puntiaguda. Vive en zonas costeras y mar abierto, especialmente en el norte. Forma cardúmenes y se alimenta de peces pequeños. Muy rápida.',
          senuelos: ["Jig", "Vinilo", "Chispa"],
          carnadas: ["Sardina", "Pejerrey"],
        }
      ],
    },
    {
      id: 30,
      nombre: 'Playa Hornitos',
      descripcionLugar: 'Popular balneario en Antofagasta, con extensas playas y singulares formaciones rocosas. Un lugar para disfrutar del paisaje donde el desierto se une al océano y sentir la brisa marina.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Sargo',
          nombreCientifico: 'Anisotremus scapularis',
          imageAsset: require('../imagenes/sargo.png'),
          caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
          senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
          carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
        },
        {
          nombreComun: 'Cabinza',
          nombreCientifico: 'Isacia conceptionis',
          imageAsset: require('../imagenes/cabinza.png'),
          caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.',
          senuelos: ["Jig", "Vinilo", "Plumillas"],
          carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
        },
        {
          nombreComun: 'Tomoyo',
          nombreCientifico: 'Labrisomidae spp. / Blenniidae spp.',
          imageAsset: require('../imagenes/tomoyo.png'),
          caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
          senuelos: ["Jig", "Vinilo", "Minnow"],
          carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
        }
      ],
    },
    {
      id: 31,
      nombre: 'Playa Larga de Lebu (Caverna Benavides)',
      descripcionLugar: 'Extensa playa en la provincia de Arauco, con atractivos naturales como la Caverna Benavides. Un espacio amplio para explorar la costa, disfrutar de la naturaleza y  lanzar una línea de pesca.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        }
      ],
    },
    {
      id: 32,
      nombre: 'Playa Las Brisas, Navidad',
      descripcionLugar: 'Conocida por su belleza natural y ambiente sereno en OHiggins, esta playa es un refugio ideal para desconectarse y disfrutar de la tranquilidad del Océano Pacífico.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        }
      ],
    },
    {
      id: 33,
      nombre: 'Playa Quiapo (Boca Quiapo)',
      descripcionLugar: 'Playa de la Región del Biobío, marcada por la desembocadura de un estero. Un lugar interesante para observar la dinámica entre el agua dulce y el mar en un entorno natural y apacible.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    {
      id: 34,
      nombre: 'Playa Yani (Caleta Yani)',
      descripcionLugar: 'Ubicada en la costa de Arauco, esta caleta y playa ofrecen un paisaje costero auténtico, donde se puede apreciar la vida ligada al mar y la tranquilidad de la Región del Biobío.',
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
          caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
        },
        {
          nombreComun: 'Róbalo',
          nombreCientifico: 'Eleginops maclovinus',
          imageAsset: require('../imagenes/robalo.png'),
          caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
          senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
          carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
        },
        {
          nombreComun: 'Pejerrey de Mar',
          nombreCientifico: 'Odontesthes regia',
          imageAsset: require('../imagenes/pejerrey-de-mar.png'),
          caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
          senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
          carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
        },
        {
          nombreComun: 'Lenguado Chileno',
          nombreCientifico: 'Paralichthys adspersus',
          imageAsset: require('../imagenes/lenguado.png'),
          caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
          senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
          carnadas: ["Pejerrey", "sardina"],
        },
        {
          nombreComun: 'Salmón Coho',
          nombreCientifico: 'Oncorhynchus kisutch',
          imageAsset: require('../imagenes/salmon-coho.png'),
          caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
          senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
          carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
        }
      ],
    },
    
      {
        id: 35,
        nombre: 'Playa Yapes',
        descripcionLugar: 'Playa de la Región de Tarapacá, enclavada en un entorno desértico característico del norte grande. Un lugar para experimentar la inmensidad del paisaje costero y la fuerza del Pacífico.',
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
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // Fichas Marinas Sernapesca p.23 [cite: 188]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno', // Usaremos Paralichthys adspersus, más común para "lenguado" general de playa.
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Sargo',
            nombreCientifico: 'Anisotremus scapularis', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            imageAsset: require('../imagenes/sargo.png'),
            caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // Fichas Marinas Sernapesca p.32 [cite: 280] / Guía Peces Litorales TNC p.13 [cite: 433]
            senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
            carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // Fichas Marinas Sernapesca p.29 [cite: 249, 254] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Fichas Marinas Sernapesca p.29 [cite: 255]
          }
        ],
      },
      {
        id: 36,
        nombre: 'Playa Los Pulpos (Caldera)',
        descripcionLugar: 'Playa de Atacama, cercana a Caldera, ofrece un paisaje costero árido y aguas tranquilas. Un rincón apacible para quienes buscan disfrutar del litoral nortino y su calma.',
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
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // Fichas Marinas Sernapesca p.29 [cite: 249] / Guía Peces Litorales TNC p.11 [cite: 410]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Fichas Marinas Sernapesca p.29 [cite: 255]
          }
        ],
      },
      {
        id: 37,
        nombre: 'Playa Las Machas (Caldera)',
        descripcionLugar: 'Extensa playa al sur de Caldera, Atacama. Su amplio frente costero invita a largas caminatas y a disfrutar de la inmensidad del paisaje desértico junto al mar.',
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
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27 [cite: 233]
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // Fichas Marinas Sernapesca p.27 [cite: 233, 235]
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
          }
        ],
      },
      {
        id: 38,
        nombre: 'Playa Socos (Tongoy)',
        descripcionLugar: 'Ubicada en la protegida bahía de Tongoy, Coquimbo, esta playa es conocida por sus aguas relativamente calmas y su entorno familiar, ideal para el disfrute costero y una tranquila jornada.',
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
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // PDF de Zonas p.8 [cite: 771]
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          }
        ],
      },
      {
        id: 39,
        nombre: 'Playa de Guanaqueros',
        descripcionLugar: 'Popular balneario en Coquimbo, con una extensa playa en forma de herradura y aguas tranquilas. Ofrece un ambiente agradable para actividades familiares y el descanso junto al mar.',
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
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
          }
        ],
      },
      {
        id: 40,
        nombre: 'Playa Quintay',
        descripcionLugar: 'Pintoresca caleta y playa en Valparaíso, con una rica historia ballenera. Su entorno de roqueríos y belleza natural ofrecen un escape costero con mucho carácter e historia, y rincones para explorar.',
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
            caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.', // Guía Peces Litorales TNC p.8 [cite: 362, 364, 367]
            senuelos: ["Jig", "Vinilo"],
            carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"], // Guía Peces Litorales TNC p.8 [cite: 363]
          },
          {
            nombreComun: 'Rollizo',
            nombreCientifico: 'Pinguipes chilensis',
            imageAsset: require('../imagenes/rollizo.png'),
            caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          }
        ],
      },
      {
        id: 41,
        nombre: 'Playa El Tabo',
        descripcionLugar: 'Tradicional balneario del litoral central, con playas familiares y roqueríos que invitan a la exploración. Un destino costero clásico de la Región de Valparaíso, ideal para una escapada junto al mar.',
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
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Lenguado Chileno',
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'),
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Jerguilla',
            nombreCientifico: 'Aplodactylus punctatus', // Guía Peces Litorales TNC p.13 [cite: 427]
            imageAsset: require('../imagenes/jerguilla.png'),
            caracteristicas: 'Cuerpo ovalado, colores oscuros con patrones punteados o bandas. Vive en costas rocosas, especialmente en zonas de fuerte oleaje. Se alimenta de algas y pequeños invertebrados.', // Guía Peces Litorales TNC p.13 [cite: 428, 429]
            senuelos: ['Difícil con señuelo.'],
            carnadas: ['Algas (luche)', 'Piures', 'Pequeños crustáceos'],
          },
          {
            nombreComun: 'Tomoyo',
            nombreCientifico: 'Labrisomidae', // Guía Peces Litorales TNC p.11 [cite: 402] (familia)
            imageAsset: require('../imagenes/tomoyo.png'),
            caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // Guía Peces Litorales TNC p.11 [cite: 403, 404]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
          }
        ],
      },
      
      
      {
        id: 42,
        nombre: 'Playa Las Torpederas (Valparaíso)',
        descripcionLugar: 'Playa urbana histórica de Valparaíso, con vistas al puerto y los coloridos cerros. Un punto accesible para disfrutar del borde costero y la brisa marina en la ciudad patrimonial.',
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
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Pejerrey de Mar',
            nombreCientifico: 'Odontesthes regia',
            imageAsset: require('../imagenes/pejerrey-de-mar.png'),
            caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
            senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
            carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
          },
          {
            nombreComun: 'Tomoyo',
            nombreCientifico: 'Labrisomidae', // Familia de varias especies de Tomoyos
            imageAsset: require('../imagenes/tomoyo.png'),
            caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // Info general, ver TNC Litorales p.11 [cite: 402, 403]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
          },
          {
            nombreComun: 'Jerguilla',
            nombreCientifico: 'Aplodactylus punctatus',
            imageAsset: require('../imagenes/jerguilla.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Cuerpo ovalado, colores oscuros con patrones punteados o bandas. Vive en costas rocosas, especialmente en zonas de fuerte oleaje. Se alimenta de algas y pequeños invertebrados.', // Sernapesca Marinas PDF p.29 [cite: 199] / TNC Litorales PDF p.13 [cite: 428]
            senuelos: ["Vinilo pequeño", "Jig pequeño", "Aparejo simple con anzuelo pequeño"],
            carnadas: ["Algas verdes (luche)", "Pulga de mar", "Otros invertebrados pequeños"], // Sernapesca Marinas PDF p.29
          },
          {
            nombreComun: 'Vieja Negra',
            nombreCientifico: 'Graus nigra',
            imageAsset: require('../imagenes/vieja-negra.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.', // Sernapesca Marinas PDF p.31 [cite: 318, 322] / TNC Litorales PDF p.16 [cite: 362]
            senuelos: ["Jigs pesados"], // TNC Litorales PDF p.16 [cite: 361]
            carnadas: ["Lapa", "Jaiba", "Piure", "Erizo", "Mora", "Camarón"], // Sernapesca Marinas PDF p.31 [cite: 324] / TNC Litorales PDF p.16 [cite: 363]
          },
          {
            nombreComun: 'Bilagay',
            nombreCientifico: 'Semicossyphus darwini', // Bilagay es un nombre común, Semicossyphus darwini es el Pejeperro.
            imageAsset: require('../imagenes/bilagay.png'), // Asegúrate de tener esta imagen, o usa pejeperro.png si es la misma especie
            caracteristicas: 'Cuerpo alargado, comprimido lateralmente, con tonalidades grises o pardas, a menudo moteado. Vive en costas rocosas del litoral central y norte, en zonas con abundante sustrato duro. Es bentónico, gregario y se alimenta de pequeños invertebrados y materia vegetal. Muy territorial.', // Sernapesca Marinas PDF p.26 (Pejeperro) [cite: 223, 226, 230] / TNC Litorales PDF p.17 (Pejeperro) [cite: 368, 369]
            senuelos: ["Jigs"], // TNC Litorales PDF p.17 [cite: 371]
            carnadas: ["Lapa", "Jaiba", "Piure", "Erizo", "Moluscos y crustáceos en general"], // Sernapesca Marinas PDF p.26 (Pejeperro) [cite: 231] / TNC Litorales PDF p.17 [cite: 370]
          },
          {
            nombreComun: 'Lenguado Chileno', // Uno de los lenguados comunes en playas
            nombreCientifico: 'Paralichthys adspersus',
            imageAsset: require('../imagenes/lenguado.png'), // Puedes usar tu imagen genérica de lenguado o crear una específica.
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
            senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"], // Adaptado de Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
            carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"], // Sernapesca Marinas PDF p.20 / TNC Litorales PDF p.20
          },
          {
            nombreComun: 'Blanquillo',
            nombreCientifico: 'Prolatilus jugularis',
            imageAsset: require('../imagenes/blanquillo.png'), // Asegúrate de tener esta imagen
            caracteristicas: 'Cuerpo cilíndrico, pálido con tonalidades azuladas o plateadas, mandíbula prominente. Habita fondos arenosos o mixtos en zonas costeras. Es solitario o se agrupa en pequeños grupos, y se alimenta de crustáceos y peces pequeños.', // Sernapesca Marinas PDF p.17 [cite: 123, 126, 128] / TNC Litorales PDF p.14 [cite: 447]
            senuelos: ["Jigs pequeños", "Vinilos imitando crustáceos", "Cucharas ondulantes pequeñas"], // Basado en su dieta
            carnadas: ["Pequeños trozos de pescado", "Camarón", "Pulga de mar", "Anélidos poliquetos"], // Sernapesca Marinas PDF p.17 [cite: 129] / TNC Litorales PDF p.14 [cite: 449]
          }
        ],
      },
      {
        id: 43,
        nombre: 'Desembocadura Río Aconcagua (Concón)',
        descripcionLugar: 'Zona de confluencia del río Aconcagua con el mar en Concón. Un dinámico ecosistema estuarino, ideal para observar aves y la naturaleza costera de Valparaíso, y probar suerte en sus aguas.',
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
            caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pejerrey", "sardina"],
          },
          {
            nombreComun: 'Corvina',
            nombreCientifico: 'Cilus gilberti',
            imageAsset: require('../imagenes/corvina.png'),
            caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
            senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
            carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
          },
          {
            nombreComun: 'Jurel',
            nombreCientifico: 'Trachurus murphyi',
            imageAsset: require('../imagenes/jurel.png'), // Como solicitaste, al no tener la imagen.
            caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.', // Basado en TNC Litorales PDF p.23
            senuelos: ["Plumillas", "Jigs", "Sabiki", "Minnows pequeños", "Cucharas ondulantes"],
            carnadas: ["Camarones pequeños", "Trocitos de sardina o anchoveta", "Gusanos de mar"],
          }
        ],
      },
      {
        id: 44,
        nombre: 'Caleta Rinconada (Cobquecura)',
        descripcionLugar: 'Pintoresca caleta y playa en la costa de Ñuble, rodeada de imponentes formaciones rocosas como la Iglesia de Piedra. Un lugar para apreciar la fuerza del mar y la belleza natural del litoral.',
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
            caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // Guía Peces Litorales TNC p.11 [cite: 410, 411]
            senuelos: ["Jig", "Vinilo", "Minnow"],
            carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
          },
          {
            nombreComun: 'Vieja Negra',
            nombreCientifico: 'Graus nigra',
            imageAsset: require('../imagenes/vieja-negra.png'),
            caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.', // Guía Peces Litorales TNC p.8 [cite: 362, 363, 364]
            senuelos: ["Jig", "Vinilo"],
            carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"],
          },
          {
            nombreComun: 'Cabrilla Común',
            nombreCientifico: 'Sebastes capensis', // Fichas Marinas Sernapesca p.20 [cite: 153]
            imageAsset: require('../imagenes/cabrilla.png'),
            caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // Fichas Marinas Sernapesca p.20 [cite: 155, 167]
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
    descripcionLugar: 'Playa en la capital del surf, Pichilemu, conocida por sus olas y su ambiente relajado. Un lugar para disfrutar del mar, las extensas arenas y la cultura costera de OHiggins.',
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
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // Guía Peces Litorales TNC p.15
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // Fichas Marinas Sernapesca p.27
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // Fichas Marinas Sernapesca p.27
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 46,
    nombre: 'Playa Grande de Bucalemu',
    descripcionLugar: 'Extensa playa en la Región de OHiggins, un vasto tramo de costa ideal para largas caminatas y disfrutar de la inmensidad y tranquilidad del Océano Pacífico.',
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
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      { // Sargo es plausible aquí dada la pesca submarina mencionada para Bucalemu y su distribución norte/centro.
        nombreComun: 'Sargo',
        nombreCientifico: 'Anisotremus scapularis',
        imageAsset: require('../imagenes/sargo.png'),
        caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
        senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
        carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 47, // Anteriormente Playa Las Torpederas, ahora corregido
    nombre: 'Playa Buchupureo',
    descripcionLugar: 'Conocida por su belleza y olas para el surf en Ñuble, esta playa también es un excelente destino para conectar con la naturaleza costera y su ambiente sereno y revitalizante.',
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
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 48, // Anteriormente Playa Escuadrón, ahora corregido
    nombre: 'Playa Perales (Coelemu)',
    descripcionLugar: 'Ubicada cerca de la desembocadura del río Itata en Ñuble, esta playa ofrece un paisaje donde el campo se encuentra con el mar, ideal para quienes buscan un entorno tranquilo y natural.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 49, //Tolten
    nombre: 'Playa Barra del Toltén ',
    descripcionLugar: 'Zona de desembocadura del Río Toltén en La Araucanía, un lugar de gran belleza natural donde el río se une al mar, creando un ecosistema rico y dinámico, y atardeceres memorables.',
    latitude: -39.25976098093461,  // APROXIMADO - ¡VERIFICAR! (Costa de Toltén, cerca de Queule y desembocadura Toltén)
    longitude: -73.22367575207505, // APROXIMADO - ¡VERIFICAR!
    tipo: 'Playa', // Influencia de desembocadura
    region: 'La Araucanía',
    cuota: 'Consultar SERNAPESCA.',
    imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
    especies: [
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', // Fichas Dulceacuícolas p.27
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.', // Fichas Dulceacuícolas p.27
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', // Fichas Dulceacuícolas p.29
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo que tienes esta imagen
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.', // Fichas Dulceacuícolas p.29
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus',
        imageAsset: require('../imagenes/robalo.png'),
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
  {
    id: 50, // Playa Chaihuín, ahora con Pejerrey de Mar
    nombre: 'Playa y Desembocadura Chaihuín',
    descripcionLugar: 'Hermosa playa y desembocadura en la costa de Los Ríos, un lugar para disfrutar de la naturaleza en un entorno tranquilo, donde el río y el mar se encuentran entre bosques sureños.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"],
      },
      {
        nombreComun: 'Corvina', // Menos común tan al sur, pero posible
        nombreCientifico: 'Cilus gilberti',
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia',
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
      }
    ],
  },
 
  {
    id: 52,
    nombre: 'Playa Maule (Puerto Saavedra)',
    descripcionLugar: 'Extensa playa en Puerto Saavedra, cercana a la desembocadura del Río Imperial. Un lugar donde se puede sentir la fuerza del Pacífico y la influencia del gran río en el paisaje costero.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // [cite: 239, 453]
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // [cite: 454] (TNC), Sernapesca no especifica señuelos.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // [cite: 454] (TNC), Sernapesca no especifica carnadas.
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // [cite: 188, 195]
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 195] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno',
        nombreCientifico: 'Paralichthys adspersus', // Consistent with user's array
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // [cite: 214, 221] (Adaptado de Lenguado de Ojos Chicos, ya que P. adspersus no está en Sernapesca PDF marinas)
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"], // [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // [cite: 233, 237]
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Sernapesca PDF menciona dieta de anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236, 237]
      },
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.', // [cite: 687, 691, 693]
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Regulaciones suelen ser estrictas para salmónidos.
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.', // [cite: 710, 713, 715]
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      }
    ],
  },
  {
    id: 53,
    nombre: 'Río Imperial (Puerto Saavedra)',
    descripcionLugar: 'Importante río de La Araucanía que desemboca en Puerto Saavedra. Sus aguas ofrecen un recorrido por paisajes campestres hasta su encuentro con el mar, un lugar con historia y encanto natural.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', //
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // (TNC), Sernapesca no especifica señuelos para esta especie.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // (TNC), Sernapesca no especifica carnadas.
      },
      
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.', //
        senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"], // (Adaptado de array original y Sernapesca)
        carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"], // (Adaptado de array original y Sernapesca)
      },
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.', //
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Sernapesca PDF (p.7, p.28)
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.', //
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Sernapesca PDF (p.7, p.30)
      }
    ]
  },
  {
    id: 54,
    nombre: 'Río Moncul (Puerto Saavedra)',
    descripcionLugar: 'Afluente del Río Imperial, este río serpentea por un entorno natural de La Araucanía, ofreciendo parajes tranquilos para conectar con la naturaleza fluvial y el paisaje sureño.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Basado en TNC [cite: 455] y prácticas comunes.
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Basado en TNC [cite: 455] y prácticas comunes.
      },
      {
        nombreComun: 'Carpa Común',
        nombreCientifico: 'Cyprinus carpio', //
        imageAsset: require('../imagenes/carpa-comun.png'),
        caracteristicas: 'Cuerpo ovalado, escamas grandes doradas o bronceadas. Habita lagos, lagunas y ríos lentos con vegetación. Es omnívora, busca alimento en el fondo y tiene comportamiento sociable y resistente.',
        senuelos: ["Vinilos", "Señuelos minnow", "Moscas (streamer , imitación odonatos , ninfas)"], // Basado en array original.
        carnadas: ["Pan", "Maiz", "Masas preparadas", "Lombriz de tierra"], // Basado en array original.
      },
      {
        nombreComun: 'Pejerrey Chileno',
        nombreCientifico: 'Basilichthys australis', //
        imageAsset: require('../imagenes/pejerrey-chileno.png'),
        caracteristicas: 'Similar al argentino pero más delgado, color plateado con línea lateral marcada. Presente en lagos y ríos andinos. Muy activo y gregario.',
        senuelos: ["Minnow pequeño", "Vinilos pequeños", "Spinner en numeración pequeña", "Microjigs", "Moscas"], // Basado en array original. Sernapesca PDF indica que se permite carnada viva[cite: 604].
        carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequeños de pez", "Masas preparadas"],
      },
      {
        nombreComun: 'Trucha Arcoiris',
        nombreCientifico: 'Oncorhynchus mykiss', //
        imageAsset: require('../imagenes/trucha-arcoiris.png'),
        caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
        senuelos: ['Cucharilla', 'Spinner', 'Minnow', 'Mosca'], // Sernapesca PDF menciona señuelo artificial[cite: 649].
        carnadas: ['Uso de carnada viva prohibido para salmónidos según regulaciones generales[cite: 649]. Priorizar señuelo artificial. Consultar SERNAPESCA.'],
      },
      {
        nombreComun: 'Trucha Marrón (Fario)',
        nombreCientifico: 'Salmo trutta', //
        imageAsset: require('../imagenes/trucha-fario.png'),
        caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
        senuelos: ['Minnow', 'Cucharilla', 'Mosca (streamers)'], // Sernapesca PDF menciona señuelo artificial[cite: 614].
        carnadas: ['Uso de carnada viva prohibido para salmónidos según regulaciones generales[cite: 614]. Priorizar señuelo artificial. Consultar SERNAPESCA.'],
      },
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'),
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial[cite: 708].
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Sernapesca PDF menciona señuelo artificial[cite: 726].
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
      }
    ]
  },
  {
    id: 55,
    nombre: 'Playa Lobería - Coi Coi',
    descripcionLugar: 'Playa de la costa de La Araucanía, conocida por sus loberías y belleza escénica agreste. Un lugar para observar fauna marina y disfrutar de un paisaje costero imponente y natural.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', // [cite: 188]
        imageAsset: require('../imagenes/corvina.png'),
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 196] (menciona Emerita analoga, misydaceos)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'),
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general, Sernapesca PDF detalla O. insignis [cite: 214]
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
        carnadas: ["Pejerrey", "sardina"], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'),
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Sernapesca PDF menciona dieta variada [cite: 237]
      },
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', // [cite: 687]
        imageAsset: require('../imagenes/salmon-chinook.png'),
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // [cite: 708]
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', // [cite: 710]
        imageAsset: require('../imagenes/salmon-coho.png'),
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // [cite: 726]
      }
    ]
  },
  {
    id: 56,
    nombre: 'Playa Casa de Piedra (Tirúa)',
    descripcionLugar: 'Playa en la zona de Tirúa, Biobío, caracterizada por sus interesantes formaciones rocosas y un entorno costero con una marcada identidad local y belleza natural.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455] (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes (no especificados en Sernapesca PDF para esta especie, basado en uso general)
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Sernapesca PDF para O. insignis menciona predilección por pejerreyes [cite: 221]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes (Sernapesca PDF no detalla señuelos específicos para esta especie)
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 237]
      }
    ]
  },
  {
    id: 57,
    nombre: 'Playa Quidico',
    descripcionLugar: 'Balneario costero en la provincia de Arauco, Biobío. Sus playas son un buen destino para disfrutar del mar y la tranquilidad de la costa sur, con un ambiente familiar.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // (Sernapesca PDF Marinas p.28)
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC (Sernapesca PDF no especifica)
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas (Sernapesca PDF Marinas p.23)
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña"
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27)
      },
      
    ]
  }, {
    id: 58,
    nombre: 'Playa Horcones (Arauco)',
    descripcionLugar: 'Playa ubicada en la bahía de Arauco, Biobío. Un lugar donde se mezcla el entorno industrial con la belleza costera, ofreciendo una perspectiva particular del dinámico litoral.',
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
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', // [cite: 239]
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos [cite: 248]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', // [cite: 233]
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes[cite: 221].
      }
    ]
  },
  {
    id: 59,
    nombre: 'Playa Maule (Coronel)',
    descripcionLugar: 'Playa en la comuna de Coronel, Biobío. Un espacio costero para disfrutar del mar y la brisa, con la historia minera de la zona como particular telón de fondo.',
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
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 455]
      },
      {
        nombreComun: 'Corvina',
        nombreCientifico: 'Cilus gilberti', //
        imageAsset: require('../imagenes/corvina.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 195]
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 236]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) [cite: 213] detalla Oplegnathus insignis (Lenguado de ojos chicos) con características similares de hábitat.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF Marinas (p.25) [cite: 221] para O. insignis menciona predilección por pejerreyes.
      }
    ]
  },
  {
    id: 60,
    nombre: 'Playa Curiñanco',
    descripcionLugar: 'Extensa playa en la costa de Valdivia, Los Ríos, con un oleaje característico y un entorno natural que invita a la exploración y al contacto directo con el Océano Pacífico.',
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
        caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
        carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas [cite: 196]
      },
      {
        nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
        nombreCientifico: 'Paralichthys adspersus',
        imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general, Sernapesca PDF (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos) [cite: 213] con características similares.
        senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
        carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña". Sernapesca PDF para O. insignis menciona predilección por pejerreyes[cite: 222].
      },
      {
        nombreComun: 'Róbalo',
        nombreCientifico: 'Eleginops maclovinus', //
        imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
        senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 455]
        carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC[cite: 455]. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos[cite: 248].
      },
      {
        nombreComun: 'Pejerrey de Mar',
        nombreCientifico: 'Odontesthes regia', //
        imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
        senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
        carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos y poliquetos (bentos) y copépodos y larvas zoeas (plancton), además de plantas[cite: 237].
      },
      {
        nombreComun: 'Salmón Chinook',
        nombreCientifico: 'Oncorhynchus tshawytscha', //
        imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
        senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Señuelos comunes para pesca desde costa o desembocadura.
        carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
      },
      {
        nombreComun: 'Salmón Coho',
        nombreCientifico: 'Oncorhynchus kisutch', //
        imageAsset: require('../imagenes/salmon-coho.png'), // Asumiendo ruta de tu array original
        caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
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
  descripcionLugar: 'Amplia playa en la costa norte de Chiloé, cerca de Ancud. Ofrece un paisaje característico de la isla, con extensas arenas y la bruma marina, un lugar para conectar con el entorno insular.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    }
  ]
},
{
  id: 62,
  nombre: 'Playa La Ventana', // Asumiendo esta es la Playa Mar Brava cerca de Ancud con nuevas coordenadas
  descripcionLugar: 'Playa en la costa de Chiloé, probablemente un sector de Mar Brava o similar, que ofrece vistas imponentes y la fuerza del Pacífico en un entorno sureño y natural, ideal para aventureros.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo la corrección de no incluir "Lisa pequeña"
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    }
  ]
},
{
  id: 63,
  nombre: 'Playa y Desembocadura Río Llico (Los Muermos)',
  descripcionLugar: 'Zona de playa y desembocadura en Los Muermos, Región de Los Lagos. Un lugar donde el río se encuentra con el mar, creando un hábitat dinámico y paisajes costeros atractivos.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Salmón Chinook', // Posible cerca de desembocaduras importantes
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    }
  ]
},
{
  id: 64,
  nombre: 'Playa Brava (Maullín)',
  descripcionLugar: 'Playa extensa y expuesta en Maullín, Los Lagos. Conocida por su belleza natural y la fuerza del mar, ideal para quienes buscan un paisaje costero más salvaje y estimulante.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    }
  ]
},
{
  id: 65,
  nombre: 'Playa Desembocadura Río Llesquehue (San Juan de la Costa)',
  descripcionLugar: 'Playa y desembocadura en San Juan de la Costa, Los Lagos. Un bello rincón donde el río se une al mar, rodeado de la exuberante vegetación costera del sur de Chile.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Salmón Coho', // Posible por la desembocadura
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 66,
  nombre: 'Playa Quivolgo',
  descripcionLugar: 'Playa cercana a Constitución, en la Región del Maule. Ofrece un paisaje costero atractivo con formaciones rocosas y extensas arenas para el disfrute y el descanso.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Aparejos comunes
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Dieta incluye Emerita análoga, misydaceos, sardinas, anchovetas (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // (Sernapesca PDF Marinas p.28)
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales. Sernapesca PDF Marinas (p.28) menciona que se alimenta de peces e invertebrados bentónicos y pequeños crustáceos.
    },
    {
      nombreComun: 'Lenguado Chileno', // Asumiendo Paralichthys adspersus por consistencia
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Genéricos para lenguado de playa
      carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior para no incluir "Lisa pequeña".
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo ruta de tu array original
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Aparejos comunes
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'), // Según tu array original, no tiene imagen definida para Rollizo
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"], // Genéricos para Rollizo
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Dieta incluye crustáceos, moluscos, equinodermos (Sernapesca PDF Marinas p.29)
    },
    
  ]
},
{
  id: 67,
  nombre: 'Isla Mocha',
  descripcionLugar: 'Isla legendaria frente a las costas de Arauco, un paraíso natural con bosques prístinos, acantilados imponentes y una rica historia. Destino ideal para el ecoturismo y la aventura.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // [cite: 239, 243, 453]
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"], // Recomendaciones generales y de TNC [cite: 453]
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"], // Recomendaciones generales y de TNC [cite: 453]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // [cite: 188]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // [cite: 195]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Modificado según tu solicitud anterior
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // [cite: 237] (dieta general)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // [cite: 249, 250, 254]
      senuelos: ["Jig", "Vinilo", "Minnow"], // [cite: 410] (TNC Litorales)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // [cite: 255, 411]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'), // No definido en tu array original
      caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.', // [cite: 318, 362, 364]
      senuelos: ["Jig", "Vinilo"], // [cite: 361] (TNC Litorales)
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"], // [cite: 324, 363]
    }
  ]
},
{
  id: 68,
  nombre: 'Playa Blanca (Lota)',
  descripcionLugar: 'Popular playa en Lota, Biobío, con arenas claras y un entorno que mezcla la historia minera de la zona con la belleza costera. Ideal para un día de esparcimiento y relajo.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Usando P. adspersus como en tu array; Sernapesca PDF detalla Oplegnathus insignis [cite: 213]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas [cite: 237]
    },
    
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"], // [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta incluye crustáceos, moluscos, poliquetos, equinodermos y urocordados. [cite: 255, 411]
    }
  ]
},
{
  id: 69,
  nombre: 'Playa Chinchorro (Arica)',
  descripcionLugar: 'La playa más extensa y popular de Arica, ideal para disfrutar del sol y las cálidas aguas del norte. Ofrece un vibrante ambiente costero y es perfecta para actividades recreativas.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23) [cite: 188, 196]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos) con características y dieta similares [cite: 213, 214, 221]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32) [cite: 280, 281]
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27) [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34) [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // (Sernapesca PDF Marinas p.34) [cite: 298, 301, 303]
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // (TNC Litorales p.11) [cite: 407]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte; Sernapesca PDF Marinas (p.20) describe Sebastes capensis como Cabrilla Común [cite: 153]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12) [cite: 415, 416, 417]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis', // (Sernapesca PDF Marinas p.19) [cite: 142]
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.', // (Sernapesca PDF Marinas p.19) [cite: 142, 143, 146, 149]
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"], // Dieta incluye crustáceos, gusanos poliquetos y algas (Sernapesca PDF Marinas p.19) [cite: 151]
    }
  ]
},
{
  id: 70,
  nombre: 'Playa La Lisera (Arica)',
  descripcionLugar: 'Playa tradicional de Arica, con aguas más calmas y un ambiente familiar. Un lugar para relajarse, disfrutar del entorno costero de la ciudad y sus atardeceres.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23) [cite: 188]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32) [cite: 280]
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27) [cite: 233]
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34) [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // (Sernapesca PDF Marinas p.34) [cite: 298, 301, 303]
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // (TNC Litorales p.11) [cite: 407]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12) [cite: 415, 416, 417]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ]
},
{
  id: 71,
  nombre: 'Playa Costa Verde (Tarapacá)',
  descripcionLugar: 'Playa en la región de Tarapacá, parte del extenso litoral desértico del norte de Chile. Ofrece un paisaje impactante donde el árido desierto se encuentra con el vasto océano.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.', // (Sernapesca PDF Marinas p.19)
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
    }
  ]
},
{
  id: 72,
  nombre: 'Playa Piedras Bayas (Atacama)',
  descripcionLugar: 'Hermosa playa de la Región de Atacama, con aguas claras y singulares formaciones rocosas. Un rincón tranquilo para disfrutar del paisaje costero y la naturaleza en su estado puro.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea', // (Sernapesca PDF Marinas p.22)
      imageAsset: require('../imagenes/cojinova-del-norte.png'), // Como en ID 29 (Playa Flamenco)
      caracteristicas: 'Coloración azul metálica a gris, cuerpo alargado y cabeza puntiaguda. Vive en zonas costeras y mar abierto, especialmente en el norte. Forma cardúmenes y se alimenta de peces pequeños. Muy rápida.', // (Sernapesca PDF Marinas p.22)
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Se alimenta de peces pequeños (Sernapesca PDF Marinas p.22)
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    }
  ]
},
{
  id: 73,
  nombre: 'Playa Desembocadura Río Camarones',
  descripcionLugar: 'Zona de desembocadura en la Región de Arica y Parinacota, donde el río del valle de Camarones se une al mar. Un lugar para apreciar la naturaleza y la confluencia de ecosistemas.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.', // (Sernapesca PDF Marinas p.28)
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // (Sernapesca PDF Marinas p.34)
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ]
},
{
  id: 74,
  nombre: 'Playas de Pisagua',
  descripcionLugar: 'Conjunto de playas y caletas en la histórica localidad de Pisagua, Tarapacá. Un lugar con un profundo pasado histórico y un entorno costero desértico y solitario, lleno de carácter.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // (Sernapesca PDF Marinas p.34)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.', // (Sernapesca PDF Marinas p.19)
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"],
    }
  ]
},
{
  id: 75,
  nombre: 'Caleta El Cobre',
  descripcionLugar: 'Pequeña caleta en la Región de Antofagasta, rodeada de un paisaje árido y acantilados costeros. Un lugar para experimentar la vida costera en el desierto y la tranquilidad del mar.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Su alimentación es variada, incluyendo pequeños peces y crustáceos [cite: 196]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', // [cite: 280]
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"], // Basado en prácticas comunes
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"], // Basado en prácticas comunes y dieta general de peces de roca
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte; Sernapesca PDF Marinas (p.20) describe Sebastes capensis como Cabrilla Común. TNC Litorales p.12 [cite: 415]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
      senuelos: ["Jigs", "Vinilos"], // Recomendaciones TNC Litorales p.12 [cite: 419]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Recomendaciones TNC Litorales p.12 [cite: 419]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', // [cite: 249]
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados. [cite: 255]
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii', // [cite: 298]
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11) [cite: 407]
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // Su alimentación consiste principalmente en crustáceos como cangrejos y panchotes y algunos moluscos. (TNC Litorales p.11) [cite: 405, 407]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini', // [cite: 223]
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.',
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8) [cite: 371]
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en lapas, pequeñas jaibas, locos, camarones, panchotes y erizos y estrellas de mar. (TNC Litorales p.8)[cite: 370]. Sernapesca PDF Marinas (p.26) indica moluscos como chitones y almejas, además de crustáceos y erizos. [cite: 231]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', // [cite: 233]
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas. [cite: 237]
    }
  ]
},
{
  id: 76,
  nombre: 'Playa Amolana',
  descripcionLugar: 'Playa de la Región de Coquimbo, ofrece un entorno costero con roqueríos y zonas de arena, ideal para explorar la diversidad del litoral y disfrutar de una jornada tranquila.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23 [cite: 188, 196])
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23 [cite: 196])
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus', // Consistente con tu array
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) [cite: 213, 214] detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes[cite: 221].
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', //
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32 [cite: 280, 282])
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', //
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27 [cite: 233])
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27 [cite: 237]).
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', //
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29 [cite: 249, 250, 255])
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11 [cite: 413])
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados (Sernapesca PDF Marinas p.29 [cite: 255]).
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini', //
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.', // (Sernapesca PDF Marinas p.26 [cite: 223, 225, 226, 230])
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8 [cite: 371])
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en moluscos como chitones y almejas, además de crustáceos y erizos (Sernapesca PDF Marinas p.26 [cite: 231]). TNC Litorales (p.8) [cite: 370] menciona lapas, pequeñas jaibas, locos, camarones, panchotes y erizos y estrellas de mar.
    }
  ]
},
{
  id: 77,
  nombre: 'Playa Las Salinas (Coquimbo)', // Aclarando región ya que es un nombre común
  descripcionLugar: 'Playa en la Región de Coquimbo, un lugar para disfrutar del mar y la arena, con la posibilidad de explorar sus roqueríos en busca de una experiencia costera completa y diversa.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes.
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas, plantas (Sernapesca PDF Marinas p.27).
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"], // (TNC Litorales p.11)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados (Sernapesca PDF Marinas p.29).
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.', // (Sernapesca PDF Marinas p.26)
      senuelos: ["Vinilo", "Jig", "Minnow"], // (TNC Litorales p.8)
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"], // Su alimentación consiste en moluscos como chitones y almejas, además de crustáceos y erizos (Sernapesca PDF Marinas p.26).
    }
  ]
},
{
  id: 78,
  nombre: 'Tres Playitas',
  descripcionLugar: 'Conjunto de pequeñas y atractivas playas en la Región de Atacama, ideales para disfrutar de la tranquilidad del desierto costero, sus aguas claras y la belleza natural.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // (Sernapesca PDF Marinas p.23)
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // (Sernapesca PDF Marinas p.23)
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Descripción general. Sernapesca PDF Marinas (p.25) detalla Oplegnathus insignis (Lenguado de ojos chicos).
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior.
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.', // (Sernapesca PDF Marinas p.32)
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // (Sernapesca PDF Marinas p.27)
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // Consistente con tu array para el norte
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // (TNC Litorales p.12)
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // (Sernapesca PDF Marinas p.29)
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea',
      imageAsset: require('../imagenes/cojinova-del-norte.png'), // Como en ID 29 (Playa Flamenco)
      caracteristicas: 'Coloración azul metálica a gris, cuerpo alargado y cabeza puntiaguda. Vive en zonas costeras y mar abierto, especialmente en el norte. Forma cardúmenes y se alimenta de peces pequeños. Muy rápida.', // (Sernapesca PDF Marinas p.22)
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Se alimenta de peces pequeños (Sernapesca PDF Marinas p.22)
    }
  ]
},
{
  id: 79,
  nombre: 'Playa Los Bronces',
  descripcionLugar: 'Playa de Atacama, un lugar para disfrutar del sol y el mar en un entorno costero árido, característico del norte de Chile, donde se puede buscar la tranquilidad y la conexión con la naturaleza.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Su alimentación es variada, incluyendo pequeños peces y crustáceos como pulguillas de mar [cite: 196]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus', // Consistent with your array
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Sernapesca PDF Marinas (p.25) describe Oplegnathus insignis [cite: 213]
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"], // Manteniendo tu corrección anterior. Sernapesca PDF Marinas (p.25) para O. insignis menciona predilección por pejerreyes [cite: 221]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis', // [cite: 280]
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"], // TNC Litorales p.13 [cite: 432]
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"], // TNC Litorales p.13 [cite: 432] (adaptado)
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia', // [cite: 233]
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Su dieta incluye anfípodos, poliquetos, copépodos, larvas zoeas y plantas [cite: 237]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis', // TNC Litorales p.12 [cite: 415]
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
      senuelos: ["Jigs", "Vinilos"], // TNC Litorales p.12 [cite: 419] (adaptado)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // TNC Litorales p.12 [cite: 419] (adaptado)
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis', // [cite: 249]
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"], // TNC Litorales p.11 [cite: 410] (adaptado)
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Su dieta está constituida por especies bentónicas como crustáceos, moluscos, poliquetos, equinodermos y urocordados [cite: 255]
    },
    {
      nombreComun: 'Cojinova del Norte',
      nombreCientifico: 'Seriolella violacea', // [cite: 170]
      imageAsset: require('../imagenes/cojinova-del-norte.png'),
      caracteristicas: 'Coloración azul metálica a gris, cuerpo alargado y cabeza puntiaguda. Vive en zonas costeras y mar abierto, especialmente en el norte. Forma cardúmenes y se alimenta de peces pequeños. Muy rápida.',
      senuelos: ["Jig", "Vinilo", "Chispa"],
      carnadas: ["Sardina", "Pejerrey"], // Sus hábitos alimenticios principalmente de peces como sardinas, anchovetas y jureles pequeños, además de crustáceos [cite: 179]
    }
  ]
},
{
  id: 86,
  nombre: 'Muelle Barón',
  descripcionLugar: 'Histórico muelle de Valparaíso, ofrece vistas panorámicas del puerto y los cerros. Un punto de encuentro tradicional para pasear, sentir la brisa marina y observar la actividad portuaria.',
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
      caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.', // Basado en TNC Litorales PDF p.23
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas"],
      carnadas: ["Gusanos", "Camarones", "Filete de pescado"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Lenguado Chileno', // Asumiendo este tipo de lenguado
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Thyrsites atun', // Sernapesca Marinas PDF p.33 [cite: 284]
      imageAsset: require('../imagenes/sierra.png'), // Como solicitaste
      caracteristicas: 'Cuerpo alargado, dientes afilados, color plateado con líneas. Vive en aguas costeras del norte. Depredador veloz.', // Basado en Sernapesca Marinas PDF p.33 [cite: 285, 287, 289, 290]
      senuelos: ["Jig", "Chispa", "Plumilla", "Minnow"], // Proporcionado por ti
      carnadas: ["Filete de pescado"], // Proporcionado por ti (Suelen ser predadores de otros peces) [cite: 294]
    }
  ],
},
{
  id: 87,
  nombre: 'Muelle Vergara',
  descripcionLugar: 'Emblemático muelle de Viña del Mar, reconstruido y moderno. Ideal para paseos sobre el mar, con vistas a la costa y la ciudad jardín, un lugar para sentir la brisa del Pacífico.',
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
      imageAsset: require('../imagenes/jurel.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.',
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas", "Sabiki"],
      carnadas: ["Gusanos de mar", "Camarones", "Filete de pescado"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomidae',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"],
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    }
  ],
},

{
  id: 88,
  nombre: 'Laguna Verde',
  descripcionLugar: 'Pintoresca caleta y playa al sur de Valparaíso, rodeada de cerros y naturaleza. Un escape costero que ofrece tranquilidad, paisajes con carácter y la posibilidad de una serena jornada junto al mar.',
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
      caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.', // Basado en TNC Litorales PDF p.23
      senuelos: ["Vinilos", "Jigs", "Minnow", "Plumillas", "Sabiki"],
      carnadas: ["Gusanos de mar", "Camarones", "Filete de pescado"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // La masa es carnada común para pejerrey.
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomidae', // Familia que agrupa varias especies de Tomoyos/Chalacos
      imageAsset: require('../imagenes/tomoyo.png'), // No teníamos una imagen específica definida para este grupo.
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.', // Info general, ver TNC Litorales p.11 / Sernapesca Marinas PDF p.34
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"], // Basado en TNC Litorales p.11
    }
  ],
},
{
  id: 89,
  nombre: 'Playa Ritoque',
  descripcionLugar: 'Extensa playa de fuerte oleaje en la Región de Valparaíso, con un impresionante campo dunar y el humedal de Mantagua. Un paraíso para el surf, caminatas y la conexión con la naturaleza salvaje.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno', // Asumiendo este tipo de lenguado para playa
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'), // No tenemos imagen definida para Cavinza
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.', // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
      senuelos: ["Plumillas (tipo sabiki con anzuelos pequeños)", "Jigs muy pequeños y brillantes"], // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
      carnadas: ["Gusanos de mar (trozos pequeños)", "Camarón pequeño", "Pulga de mar", "Trocitos de pescado"], // Sernapesca Marinas PDF p.39 / TNC Litorales PDF p.22
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'), // No tenemos imagen definida para Cabrilla
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // Basado en TNC Litorales p.12
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ],
},
{
  id: 90,
  nombre: 'Playa Ventanas',
  descripcionLugar: 'Playa en la bahía de Quintero, Valparaíso, con un entorno que combina actividad industrial y espacios costeros. Un lugar para observar la dinámica del litoral y disfrutar de su borde marítimo.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Vinilos que imiten peces pequeños", "Jigs ligeros", "Señuelos tipo pejerrey"],
      carnadas: ["Pejerrey (vivo o muerto)", "Sardina", "Filete de pescado"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'), // No teníamos imagen para Rollizo en entradas anteriores
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.', // Sernapesca Marinas PDF p.29
      senuelos: ["Jig", "Vinilo", "Minnow"], // TNC Litorales PDF p.11 [cite: 413]
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"], // Dieta incluye crustáceos, moluscos, etc. [cite: 255]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Paralabrax humeralis',
      imageAsset: require('../imagenes/cabrilla.png'), // No teníamos imagen para Cabrilla en entradas anteriores
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.', // Basado en TNC Litorales PDF p.12 [cite: 416]
      senuelos: ["Jigs", "Vinilos"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"],
    }
  ],
},
{
  id: 91,
  nombre: 'Playa Pangal, Maullín',
  descripcionLugar: 'Playa en la zona de Maullín, Región de Los Lagos, influenciada por la desembocadura del río. Un lugar donde se aprecia la rica biodiversidad estuarina y la belleza serena del sur de Chile.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina', // Actualizado según tu indicación
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.', // Actualizado
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"], // Actualizado
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"], // Actualizado
    },
    {
      nombreComun: 'Lenguado Chileno', // Nombre Común actualizado (antes "Lenguado de Arena")
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.', // Actualizado
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"], // Actualizado
      carnadas: ["Pejerrey", "sardina"], // Actualizado
    },
    {
      nombreComun: 'Pejerrey de Mar', // Actualizado según tu indicación
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.', // Actualizado
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"], // Actualizado
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"], // Actualizado
    }
  ],
},
{
  id: 92,
  nombre: 'Playa Maicolpué',
  descripcionLugar: 'Hermosa playa y balneario en la costa de Osorno, Los Lagos, rodeada de bosques nativos y con el río Contaco desembocando en sus cercanías. Ideal para el descanso y la conexión con la naturaleza.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"],
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"],
    }
  ],
},
{
  id: 100,
  nombre: 'Playa Caleta de Hornos',
  descripcionLugar: 'Caleta y playa en la Región de Coquimbo, una zona rica en biodiversidad marina y con paisajes costeros notables. Ideal para explorar la costa y disfrutar de la tranquilidad del norte chico.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ['Chispa', 'Minnow', 'Jig', 'Vinilos', 'Metal vibs grandes', 'Plumillas', 'Bucktail'],
      carnadas: ['Pulga de mar', 'Nape', 'Pejerrey', 'Sardina', 'Moluscos ocasionalmente (Lapa , Piure , Almeja)', 'Gueple de mar (lombriz)']
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ['Chispa', 'Minnow', 'Jig', 'Vinilo', 'Metal vibs grandes', 'Plumillas', 'Bucktail'],
      carnadas: ['Pejerrey', 'sardina']
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ['Jig', 'Vinilo', 'Minnow'],
      carnadas: ['Pulga de mar', 'Jibia', 'Piure', 'Lapa', 'Chorito', 'Machuelo', 'Pancora blanda']
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.',
      senuelos: ['Vinilo', 'Jig', 'Minnow'],
      carnadas: ['Jaiba', 'Erizo', 'Choro zapato', 'Lapa', 'Camarón', 'Chitones', 'Almejas']
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.',
      senuelos: ['Jig', 'Vinilo'],
      carnadas: ['Lapa', 'Jaiba', 'Camarón', 'Erizo', 'Piure', 'Almeja', 'Choritos']
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Cuerpo alargado, comprimido lateralmente, con tonalidades grises o pardas, a menudo moteado. Vive en costas rocosas del litoral central y norte, en zonas con abundante sustrato duro. Es bentónico, gregario y se alimenta de pequeños invertebrados y materia vegetal. Muy territorial.',
      senuelos: ['Jig', 'Vinilo'],
      carnadas: ['Gueple de mar', 'Pulga de mar', 'Pequeños mariscos']
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ['Microjig', 'Mosca', 'Metal vib', 'Cucharilla pequeña', 'Plumillas'],
      carnadas: ['Gueple de mar', 'Jibia', 'Piure', 'Almeja pequeña', 'Tebo', 'Filete de pescado pequeño']
    },
    {
      nombreComun: 'Blanquillo',
      nombreCientifico: 'Prolatilus jugularis',
      imageAsset: require('../imagenes/blanquillo.png'),
      caracteristicas: 'Cuerpo cilíndrico, pálido con tonalidades azuladas o plateadas, mandíbula prominente. Habita fondos arenosos o mixtos en zonas costeras. Es solitario o se agrupa en pequeños grupos, y se alimenta de crustáceos y peces pequeños.',
      senuelos: ['Jigs', 'Vinilos'],
      carnadas: ['Pulga de mar', 'Jibia', 'Piure', 'Lapa', 'Chorito', 'Filete de pescado']
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.',
      senuelos: ['Jig', 'Vinilo', 'Plumillas'],
      carnadas: ['Pequeños trozos de camarón o filete de pescado', 'lapa', 'piure', 'mariscos pequeños']
    },
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.',
      senuelos: ['Jig', 'Vinilo', 'Plumillas', 'Cucharas', 'Metal Vib'],
      carnadas: ['Sardina', 'Pejerrey', 'Trozos de pescado']
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Cuerpo alargado, dientes afilados, color plateado con líneas. Vive en aguas costeras del norte. Depredador veloz.',
      senuelos: ['Minnows grandes', 'Jigs', 'Cucharas metálicas', 'Plumas', 'Spinners'],
      carnadas: ['Trozos de pescado', 'Sardinas enteras', 'Filete de jurel']
    }
  ]
},
{
  id: 101,
  nombre: 'Punta de Choros (Playas)',
  descripcionLugar: 'Zona de playas y caletas frente a la Reserva Nacional Pingüino de Humboldt, Coquimbo. Famosa por su excepcional vida marina, avistamiento de fauna y un entorno natural protegido y prístino.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa , Piure , Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"]
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.',
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.',
      senuelos: ["Vinilo", "Jig", "Minnow"],
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"]
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Cuerpo alargado, comprimido lateralmente, con tonalidades grises o pardas, a menudo moteado. Vive en costas rocosas del litoral central y norte, en zonas con abundante sustrato duro. Es bentónico, gregario y se alimenta de pequeños invertebrados y materia vegetal. Muy territorial.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"]
    },
    {
      nombreComun: 'Jurel',
      nombreCientifico: 'Trachurus murphyi',
      imageAsset: require('../imagenes/jurel.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, línea lateral con escudetes. Color azul verdoso en el dorso. Presente en aguas costeras y pelágicas del Pacífico. Forma cardúmenes y es depredador activo.',
      senuelos: ["Jig", "Vinilo", "Plumillas", "Cucharas", "Metal Vib"],
      carnadas: ["Sardina", "Pejerrey", "Trozos de pescado"]
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Cuerpo alargado, dientes afilados, color plateado con líneas. Vive en aguas costeras del norte. Depredador veloz.',
      senuelos: ["Minnows grandes", "Jigs", "Cucharas metálicas", "Plumas", "Spinners"],
      carnadas: ["Trozos de pescado", "Sardinas enteras", "Filete de jurel"]
    }
  ]
},
{
  id: 102,
  nombre: 'Playa Papudo',
  descripcionLugar: 'Tradicional balneario de Valparaíso, con una bahía protegida y un ambiente familiar. Sus playas y roqueríos invitan al descanso, los paseos y a disfrutar de la costa con serenidad.',
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
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Lenguado Chileno',
      nombreCientifico: 'Paralichthys adspersus',
      imageAsset: require('../imagenes/lenguado.png'),
      caracteristicas: 'Plano y asimétrico, ojos en un solo lado del cuerpo. Tonos marrones o arenosos. Habita fondos blandos y arenosos de la costa chilena. Cazador de emboscada que se entierra en la arena.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilo", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pejerrey", "sardina"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Cabinza',
      nombreCientifico: 'Isacia conceptionis',
      imageAsset: require('../imagenes/cabinza.png'),
      caracteristicas: 'Cuerpo alargado y comprimido, cabeza prominente. Coloración oscura con reflejos plateados. Se encuentra en zonas costeras rocosas y arenosas del centro y norte de Chile. Es un cazador oportunista de peces pequeños y crustáceos.',
      senuelos: ["Jig", "Vinilo", "Plumillas"],
      carnadas: ["Pequeños trozos de camarón o filete de pescado", "lapa", "piure", "mariscos pequeños"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Vieja Negra',
      nombreCientifico: 'Graus nigra',
      imageAsset: require('../imagenes/vieja-negra.png'),
      caracteristicas: 'Cuerpo alto y fuerte, color oscuro. Vive en roqueríos del litoral central y sur. Territorial y agresiva, se alimenta de moluscos y crustáceos.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos"]
    },
    {
      nombreComun: 'Pejeperro',
      nombreCientifico: 'Semicossyphus darwini',
      imageAsset: require('../imagenes/pejeperro.png'),
      caracteristicas: 'Cuerpo alargado, fuerte mandíbula. Colores rojizos o cobrizos. Frecuenta fondos rocosos y se alimenta de moluscos, crustáceos y equinodermos. Muy combativo.',
      senuelos: ["Vinilo", "Jig", "Minnow"],
      carnadas: ["Jaiba", "Erizo", "Choro zapato", "Lapa", "Camarón", "Chitones", "Almejas"]
    },
    {
      nombreComun: 'Bilagay',
      nombreCientifico: 'Cheilodactylus variegatus',
      imageAsset: require('../imagenes/bilagay.png'),
      caracteristicas: 'Cuerpo alargado, comprimido lateralmente, con tonalidades grises o pardas, a menudo moteado. Vive en costas rocosas del litoral central y norte, en zonas con abundante sustrato duro. Es bentónico, gregario y se alimenta de pequeños invertebrados y materia vegetal. Muy territorial.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Gueple de mar", "Pulga de mar", "Pequeños mariscos"]
    },
    {
      nombreComun: 'Sargo',
      nombreCientifico: 'Anisotremus scapularis',
      imageAsset: require('../imagenes/sargo.png'),
      caracteristicas: 'Cuerpo ovalado, escamas plateadas brillantes. Habita roqueríos costeros y fondos mixtos. Omnívoro que se alimenta de invertebrados.',
      senuelos: ["Jigs", "Vinilos", "Plumillas", "Minnows"],
      carnadas: ["Pulga de mar", "Erizo", "Choro", "Machita", "Camarón de roca", "Piures", "Almeja"]
    },
    {
      nombreComun: 'Tomoyo',
      nombreCientifico: 'Labrisomus philippii',
      imageAsset: require('../imagenes/tomoyo.png'),
      caracteristicas: 'Cuerpo delgado, presencia de cirros en la cabeza. Colores crípticos. Habita roqueríos y pozas intermareales. Territorial y cazador de invertebrados.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Pequeños mariscos", "Camarón de roca"]
    }
  ]
},
{
  id: 103,
  nombre: 'Muelle y Muro de Lebu',
  descripcionLugar: 'Estructuras portuarias en Lebu, capital de la provincia de Arauco. Ofrecen un punto de vista privilegiado para observar el mar, la actividad de los pescadores artesanales y sentir la brisa costera.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "Jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    },
    {
      nombreComun: 'Sierra',
      nombreCientifico: 'Scomberomorus spp.',
      imageAsset: require('../imagenes/sierra.png'),
      caracteristicas: 'Cuerpo alargado, dientes afilados, color plateado con líneas. Vive en aguas costeras del norte. Depredador veloz.',
      senuelos: ["Minnows grandes", "Jigs", "Cucharas metálicas", "Plumas", "Spinners"],
      carnadas: ["Trozos de pescado", "Sardinas enteras", "Filete de jurel"]
    },
    {
      nombreComun: 'Cabrilla Común',
      nombreCientifico: 'Sebastes capensis',
      imageAsset: require('../imagenes/cabrilla.png'),
      caracteristicas: 'Cuerpo robusto, color café a gris con manchas oscuras dispersas. Se halla en roqueríos y estructuras submarinas del litoral. Territorial y emboscador, se alimenta de peces y crustáceos, escondiéndose entre grietas.',
      senuelos: ["Jig", "Vinilo"],
      carnadas: ["Lapa", "Jaiba", "Camarón", "Erizo", "Piure", "Almeja", "Choritos", "Filete de pescado"]
    }
  ]
},
{
  id: 104,
  nombre: 'Playa Lloncao',
  descripcionLugar: 'Playa de la Región del Biobío, ofrece un entorno costero tranquilo y natural, ideal para caminatas y disfrutar de la brisa marina, alejado del bullicio.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    }
  ]
},
{
  id: 105,
  nombre: 'Playa Mehuín',
  descripcionLugar: 'Caleta y playa en la costa de la Región de Los Ríos, cercana a la desembocadura del río Lingue. Un lugar con fuerte identidad local y hermosos paisajes sureños y actividad pesquera artesanal.',
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
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Corvina',
      nombreCientifico: 'Cilus gilberti',
      imageAsset: require('../imagenes/corvina.png'),
      caracteristicas: 'Cuerpo alargado, plateado, con aletas puntiagudas. Habita playas arenosas y estuarios. Se acerca a la costa al amanecer y atardecer para cazar peces y moluscos.',
      senuelos: ["Chispa", "Minnow", "Jig", "Vinilos", "Metal vibs grandes", "Plumillas", "Bucktail"],
      carnadas: ["Pulga de mar", "Nape", "Pejerrey", "Sardina", "Moluscos ocasionalmente (Lapa", "Piure", "Almeja)", "Gueple de mar (lombriz)"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    }
  ]
},
{
  id: 106,
  nombre: 'Estero Reloncaví',
  descripcionLugar: 'El primer fiordo de la Patagonia chilena, en Los Lagos. Un paisaje imponente de montañas que se sumergen en el mar, aguas profundas y una naturaleza sobrecogedora, ideal para la aventura.',
  latitude: -41.74489147402331,
  longitude: -72.56634164583079,
  tipo: 'Río',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo largo, escamas grandes. Tonos plateados y verdosos. Vive en estuarios y playas del sur. Cazador activo que prefiere aguas oxigenadas.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"]
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Alargado y comprimido, línea lateral bien definida. Tonalidad plateada. Común en playas y roqueríos. Nada en aguas superficiales y se alimenta de larvas y peces pequeños.',
      senuelos: ["Microjig", "Mosca", "Metal vib", "Cucharilla pequeña", "Plumillas"],
      carnadas: ["Gueple de mar", "Jibia", "Piure", "Almeja pequeña", "Tebo", "Filete de pescado pequeño"]
    },
    {
      nombreComun: 'Rollizo',
      nombreCientifico: 'Pinguipes chilensis',
      imageAsset: require('../imagenes/rollizo.png'),
      caracteristicas: 'Cuerpo macizo y cilíndrico, cabeza ancha. Coloración marrón claro a oscuro. Se mantiene cerca del fondo cazando pequeños organismos bentónicos.',
      senuelos: ["Jig", "Vinilo", "Minnow"],
      carnadas: ["Pulga de mar", "jibia", "Piure", "Lapa", "Chorito", "Machuelo", "Pancora blanda"]
    }
  ]
},
{
  id: 107,
  nombre: 'Río Puelo',
  descripcionLugar: 'Río caudaloso de aguas color turquesa en Los Lagos, rodeado de un paisaje montañoso espectacular. Un destino de renombre para la aventura y el contacto con la naturaleza virgen y majestuosa.',
  latitude: -41.64752640295007, 
  longitude: -72.29331529864962,
  tipo: 'Río',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-rio-puelo.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Perca Trucha (Criolla)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    }
  ]
},
{
  id: 108,
  nombre: 'Río Baker (Parte alta)',
  descripcionLugar: 'El río más caudaloso de Chile, en Aysén. Su parte alta ofrece paisajes patagónicos de belleza sobrecogedora, con aguas prístinas y un entorno salvaje, ideal para exploradores.',
  latitude: -47.05127342467681, 
  longitude: -72.81325689806921,
  tipo: 'Río',
  region: 'Aysén',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grande y robusto, color plata con puntos negros. Mandíbula fuerte. Presente en ríos y fiordos del sur. Anádromo, cazador poderoso.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jigs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Perca Trucha (Criolla)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    }
  ]
},
{
  id: 109,
  nombre: 'Río Aysén',
  descripcionLugar: 'Importante río patagónico que nace de la unión del Simpson y Mañihuales. Fluye por valles de exuberante vegetación y montañas, un escenario ideal para la contemplación y actividades al aire libre.',
  latitude: -45.40558811916953, // Corregido
  longitude: -72.68483301427375,
  tipo: 'Río',
  region: 'Aysén',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // Manteniendo la imagen de fondo que tenías
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo alargado, franja rosa lateral y dorso moteado. Habita aguas frías y oxigenadas. Cazadora activa y muy combativa.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color dorado-amarillo, con manchas oscuras y rojas. Vive en ríos y lagos fríos. Territorial y cazadora de emboscada.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, plateado con reflejos metálicos. Vive en fiordos, desembocaduras y ríos. Anádromo, muy combativo.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    },
    {
      nombreComun: 'Perca Trucha (Criolla)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"] // Aunque no es salmónido, la restricción de carnada viva puede aplicar en algunos cuerpos de agua o ser una buena práctica general que has adoptado.
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'), // Asumiendo que tienes esta imagen como otros salmones
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.', // Basado en "parte 2 dulceacuicolas.pdf" p.23
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"], // Señuelos robustos para una especie grande
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"]
    }
  ]
},
{
  id: 110,
  nombre: 'Río Serrano',
  latitude: -51.23333599164483,
  longitude: -73.04241795072487,
  tipo: 'Río',
  region: 'Magallanes',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O null si prefieres
  especies: [
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
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
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ],
},
{
  id: 111,
  nombre: 'Río Palena',
  latitude: -43.8105400506704,
  longitude: -72.35491465457123,
  tipo: 'Río',
  region: 'Aysén', // El PDF "Zonas Pesca" lo lista bajo Aysén, aunque su desembocadura es más hacia Los Lagos.
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O null si prefieres
  especies: [
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
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
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
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
  id: 112,
  nombre: 'Río Cisnes',
  latitude: -44.720202215390195,
  longitude: -72.13588432461816,
  tipo: 'Río',
  region: 'Aysén',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O null si prefieres
  especies: [
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
    // Podría haber salmones dependiendo de la época y cercanía al mar.
  ],
},
{
  id: 113,
  nombre: 'Río Pascua',
  latitude: -48.23263029038172,
  longitude: -73.17161880843275,
  tipo: 'Río',
  region: 'Aysén',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O null si prefieres
  especies: [
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
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
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ],
},
{
  id: 114,
  nombre: 'Río Rubens', // Actualizado
  latitude: -51.908287261029486, // Actualizado
  longitude: -71.60928636679468, // Actualizado
  tipo: 'Río',
  region: 'Magallanes',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O null si prefieres
  especies: [
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
   
  ],
},
{
  id: 115, // O el siguiente ID que te corresponda
  nombre: 'Río Calle Calle (Sector Valdivia-Niebla)',
  latitude: -39.87176064716549,
  longitude: -73.38127375422644,
  tipo: 'Río', // O 'Rio' si así lo tienes estandarizado
  region: 'Los Ríos',
  descripcionLugar: 'Emblemático río que serpentea a través de la ciudad de Valdivia, ofreciendo un paisaje fluvial urbano único, con costaneras, puentes y una rica vida ribereña. Un lugar ideal para conectar con la naturaleza sin salir de la ciudad.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: null, // O la que prefieras
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus', // Asegúrate que este sea el científico que usas
      imageAsset: require('../imagenes/robalo.png'), // Si tienes la imagen
      caracteristicas: 'Pez robusto de agua salobre y marina, color grisáceo con flancos plateados. Gran luchador, apreciado por su carne. Frecuenta desembocaduras y zonas costeras.',
      senuelos: ["Minnows hundidos", "Vinilos con jighead", "Cucharas ondulantes", "Poppers pequeños"],
      carnadas: ["Pejerrey", "Sardina", "Camarón", "Pulpitos"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Odontesthes regia', // Asegúrate que este sea el científico que usas
      imageAsset: require('../imagenes/pejerrey-chileno.png'), // Si tienes la imagen
      caracteristicas: 'Cuerpo alargado y plateado, con una franja oscura lateral. Común en aguas dulces y salobres del sur de Chile. Se mueve en cardúmenes.',
      senuelos: ["Spinners pequeños", "Microjigs", "Moscas pequeñas y brillantes"],
      carnadas: ["Lombriz de mar", "Gusano de tebo", "Trozos de pescado", "Masas"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'), // Usar la imagen que tengas para salmones
      caracteristicas: 'Lomo azul oscuro a negro, flancos plateados y vientre blanco. Pequeñas manchas negras en el lomo y aleta dorsal superior. Mandíbula ganchuda en machos reproductores.', // Basado en "parte 2 dulceacuicolas.pdf" p.25
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas tipo streamer"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'), // Usar la imagen que tengas para salmones
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas negras en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.', // Basado en "parte 2 dulceacuicolas.pdf" p.23
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'), // Usar tu imagen existente
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.', // Usar tu descripción existente
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos existentes
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Usar tu info existente
    },
    {
      nombreComun: 'Trucha Fario (Marrón)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'), // Usar tu imagen existente
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.', // Usar tu descripción existente
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos existentes
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Usar tu info existente
    }
  ]
},
{
  id: 116, // O el siguiente ID que te corresponda
  nombre: 'Río Quinchilca',
  latitude: -39.859050362407494,
  longitude: -72.75280677690283,
  tipo: 'Río',
  region: 'Los Ríos',
  descripcionLugar: 'Afluente del sistema del Río Valdivia, este curso de aguas claras fluye entre paisajes campestres y boscosos de la Región de Los Ríos, ofreciendo rincones de tranquilidad y belleza natural, ideales para una jornada junto al agua.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // Manteniendo consistencia con otros ríos
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'), // Usar tu imagen existente
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'), // Usar tu imagen existente
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'), // Usar tu imagen existente
      caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva, a veces con borde inferior plateado brillante.', // Usar tu descripción estándar
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequenos de pez", "Masas preparadas"], // Permitida carnada viva para pejerrey según regulación general, verificar localmente.
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'), // Usar tu imagen existente
      caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'), // Usar tu imagen existente
      caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.', // Usar tu descripción estándar
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 117, 
  nombre: 'Río Enco',
  latitude: -39.8820842367547,
  longitude: -72.14333104417418,
  tipo: 'Río',
  region: 'Los Ríos',
  descripcionLugar: 'Conecta los lagos Panguipulli y Riñihue, este río es famoso por sus aguas prístinas y la belleza del bosque nativo que lo rodea. Un destino privilegiado para una jornada en un entorno natural sobrecogedor.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // Manteniendo consistencia
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Encías claras en la mandíbula inferior.', // Usar tu descripción estándar
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Machos reproductores con mandíbula ganchuda pronunciada.', // Usar tu descripción estándar
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"], // Usar tus señuelos estándar
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis', // O 'Odontesthes regia' si prefieres ese para Pejerrey Chileno de río/lago. Basilichthys australis es más común en ríos.
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva. Habita ríos y lagos del sur.', // Usar tu descripción estándar o ajustar
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas"], // Usar tus señuelos estándar
      carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequenos de pez", "Masas preparadas"], // Permitida carnada viva para pejerrey según regulación general, verificar localmente.
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'), // Asumiendo que tienes esta imagen
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.', // Tomado de tu PuntosDePesca.js (ID 15)
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"], // Tomado de tu PuntosDePesca.js (ID 15)
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Adaptado de tu PuntosDePesca.js (ID 15), considera si aplica o si se puede usar insectos/peces pequeños.
    }
  ]
},
{
  id: 118, // O el siguiente ID que te corresponda
  nombre: 'Río Rahue (Sector Osorno)', // Puedes ajustar el nombre si estas coordenadas corresponden a un sector más específico.
  latitude: -40.76283994868393,   // Actualizado
  longitude: -72.97106837107225,  // Actualizado
  tipo: 'Río',
  region: 'Los Lagos',
  descripcionLugar: 'Emblemático río que atraviesa la ciudad de Osorno y sus alrededores, ofreciendo diversos sectores para la pesca en un entorno que mezcla lo urbano con paisajes campestres sureños.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // Manteniendo consistencia
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
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
      caracteristicas: 'Cuerpo alargado y fusiforme, cubierto de escamas pequeñas. Tonalidad general plateada con una banda oscura longitudinal distintiva. Común en ríos y lagos del sur.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas"],
      carnadas: ["Tebo", "Lombriz", "Mojarra o Gambusia", "Trozos pequenos de pez", "Masas preparadas"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Puede remontar desde el Río Bueno en temporada.',
      senuelos: ["Cucharas", "Spinners grandes", "Minnows", "Jiggs", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 119, // O el ID que corresponda para el Río Maullín
  nombre: 'Río Maullín',
  latitude: -41.325833599794336,  // Actualizado
  longitude: -73.03180331657045, // Actualizado
  tipo: 'Río',
  region: 'Los Lagos',
  descripcionLugar: 'Nace del majestuoso Lago Llanquihue, este río recorre fértiles paisajes sureños y humedales de importancia ecológica. Sus variados tramos son muy apreciados y ofrecen una experiencia fluvial diversa y gratificante.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Muy combativa y presente en gran parte del río.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Moscas (ninfas, streamers, secas)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos. Ejemplares de gran tamaño pueden encontrarse en este río.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Moscas (streamers grandes, imitaciones de peces)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro o verdoso con manchas negras irregulares, flancos muy plateados. Remonta el río desde el mar en temporada.',
      senuelos: ["Cucharas voladoras", "Spinners grandes", "Minnows coloridos", "Moscas (streamers llamativos)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'El más grande de los salmones del Pacífico. Dorso azul verdoso con puntos negros, flancos plateados. Puede ingresar desde el lago en su migración.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 120,
  nombre: 'Río Llanquihue (Cabeceras Andinas / Hua-Hum)',
  latitude: -39.82696820152896,
  longitude: -72.04150067389234,
  tipo: 'Río',
  region: 'Los Ríos (Zona Fronteriza AR/CL)', // Refleja la ubicación de las coordenadas
  descripcionLugar: 'Río cordillerano de aguas prístinas en la zona fronteriza andina, parte de un importante sistema fluvial binacional. Ofrece un entorno natural espectacular y la experiencia de la pesca en la alta montaña, rodeado de paisajes imponentes.',
  cuota: 'Consultar regulaciones de pesca locales y/o de ambos países si se pesca en zona fronteriza.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O la que prefieras
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Muy combativa en aguas de montaña.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Moscas (ninfas, secas, streamers)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos. Astuta y territorial, busca refugio en estructuras del río.',
      senuelos: ["Cucharas", "Spinners", "Minnows (imitando pequeños peces)", "Moscas (streamers, ninfas grandes)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo fusiforme, dorso azul oscuro/verdoso, flancos plateados. Remonta estos sistemas fluviales desde el Pacífico en temporada.',
      senuelos: ["Cucharas voladoras", "Spinners grandes", "Minnows coloridos", "Moscas (streamers llamativos)"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'El más grande de los salmones del Pacífico, conocido por su fuerza. Ingresa a estos ríos para desovar; capturas de gran tamaño son posibles.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    
  ]
},
{
  id: 121, // O el siguiente ID que corresponda
  nombre: 'Río Tirúa (Desembocadura)',
  latitude: -38.3413817,
  longitude: -73.5019117,
  tipo: 'Desembocadura',
  region: 'Biobío',
  descripcionLugar: 'La unión del Río Tirúa con el Océano Pacífico, un dinámico ecosistema costero en la Región del Biobío, ideal para observar la naturaleza y sentir la brisa marina donde se mezclan las aguas.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Presente en playas expuestas, busca alimento en la rompiente.', // Usando tu descripción estándar para Róbalo de playa
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    },
    {
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Forma cardúmenes en la zona costera y estuarina.', // Usando tu descripción estándar
      senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas'],
      carnadas: ['Gueple de mar', 'Camarón'],
    }
  ]
},
{
  id: 122,
  nombre: 'Río Tucapel (Quelén-Quelén)',
  latitude: -37.7388972,
  longitude: -73.3829601,
  tipo: 'Río',
  region: 'Biobío',
  descripcionLugar: 'Curso fluvial en la histórica zona de Tucapel, Región del Biobío. Sus aguas serpentean entre paisajes campestres y forestales, ofreciendo rincones de tranquilidad para conectar con la naturaleza ribereña.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Ajustar si es necesario para percatrucha
    }
  ]
},
{
  id: 123,
  nombre: 'Río Cupaño',
  latitude: -37.6012976,
  longitude: -73.4880434,
  tipo: 'Río',
  region: 'Biobío',
  descripcionLugar: 'Este río de la provincia de Arauco, en la Región del Biobío, ofrece un entorno natural con vegetación ribereña, un lugar apacible para disfrutar del paisaje fluvial y la calma del campo.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 124,
  nombre: 'Río Toltén (Isla Pitrufquén)',
  descripcionLugar: 'Este importante río de La Araucanía, en su tramo cercano a la Isla Pitrufquén, ofrece un paisaje fluvial diverso y accesible. Sus aguas son conocidas por albergar una interesante variedad de especies, atrayendo a quienes disfrutan de la naturaleza y la pesca ribereña.',
  latitude: -38.98633588380618,
  longitude: -72.61949918529372,
  tipo: 'Río',
  region: 'La Araucanía',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Fario (Marrón)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 125,
  nombre: 'Río Trancura (Puente Añihuarraqui)',
  descripcionLugar: 'Famoso por sus aguas cristalinas y entorno cordillerano, el Trancura, en el sector del Puente Añihuarraqui, brinda una experiencia fluvial auténtica. Es un lugar apreciado por su belleza escénica y la vitalidad de sus corrientes en la zona lacustre andina.',
  latitude: -39.45730605130052,
  longitude: -71.54776318415847,
  tipo: 'Río',
  region: 'La Araucanía',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Fario (Marrón)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 126,
  nombre: 'Lago Chapo (Desplaye)',
  descripcionLugar: 'Ubicado al sureste de Puerto Montt, este lago de origen volcánico, en su sector de desplaye, ofrece un paisaje sureño de gran tranquilidad y acceso a sus aguas. Rodeado de exuberante vegetación nativa, es un refugio para los amantes de la naturaleza.',
  latitude: -41.43332438564597,
  longitude: -72.57525807653788,
  tipo: 'Lago',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Fario (Marrón)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 127,
  nombre: 'Río Cochamó (Inicio del Valle)',
  descripcionLugar: 'En el sector de inicio del valle, este río fluye a través de un espectacular entorno de granito y bosques milenarios. Sus aguas prístinas y el imponente paisaje natural lo convierten en un destino único en la Patagonia Norte, ideal para la aventura y contemplación.',
  latitude: -41.495177259483086,
  longitude: -72.26203488747002,
  tipo: 'Río',
  region: 'Los Lagos',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Fario (Marrón)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequenos", "Metal Vib", "Vinilo", "Caiman", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 128, // O el siguiente ID que te corresponda
  nombre: 'Río Toltén (Sector Cruce Hualpín)',
  latitude: -39.15471238140482,
  longitude: -73.16445823153282,
  tipo: 'Río',
  region: 'La Araucanía',
  descripcionLugar: 'Este tramo del caudaloso Río Toltén, en las cercanías del Cruce Hualpín, ofrece un entorno ribereño característico de La Araucanía. Sus aguas son un conocido corredor fluvial que atrae a los aficionados que buscan una jornada memorable junto al río.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O la que prefieras para ríos
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
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
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Percatrucha (Perca Trucha)',
      nombreCientifico: 'Percichthys trucha',
      imageAsset: require('../imagenes/perca-trucha.png'),
      caracteristicas: 'Cuerpo robusto, color marrón a verdoso con vientre claro. Habita lagos y ríos del sur. Cazadora ágil que se alimenta de peces e insectos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"], // Ajustar si es necesario para percatrucha
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 129, // O el siguiente ID que te corresponda
  nombre: 'Río Bueno (Playa Cocule)',
  latitude: -40.323515625965705,
  longitude: -73.09161649903642,
  tipo: 'Río', // Asumiendo que 'Playa Cocule' es un acceso al río
  region: 'Los Ríos',
  descripcionLugar: 'Conocido sector del Río Bueno, Playa Cocule ofrece un acceso popular a las aguas de este importante cauce de la Región de Los Ríos. Un lugar ideal para disfrutar de la naturaleza ribereña y una jornada tranquila.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
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
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico, remonta grandes ríos.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Remonta ríos en temporada.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 130,
  nombre: 'Río Bueno (Desembocadura)',
  latitude: -40.24529851620782,
  longitude: -73.70920827933135,
  tipo: 'Desembocadura',
  region: 'Los Ríos / Los Lagos', // Zona limítrofe
  descripcionLugar: 'La imponente desembocadura del Río Bueno en el Océano Pacífico, un área de transición donde las aguas dulces se encuentran con el mar, creando un ecosistema rico y paisajes costeros espectaculares en el límite de Los Ríos y Los Lagos.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'),
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Puede encontrarse en la zona estuarina.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos. Frecuente en desembocaduras.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Chinook',
      nombreCientifico: 'Oncorhynchus tshawytscha',
      imageAsset: require('../imagenes/salmon-chinook.png'),
      caracteristicas: 'Grandes ejemplares remontan el Río Bueno y se pueden encontrar en su desembocadura durante la temporada.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante, remonta el río en temporada, siendo la desembocadura un punto clave.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada. Presente en la zona estuarina.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    },
    { // Especie agregada según tu solicitud
      nombreComun: 'Pejerrey de Mar',
      nombreCientifico: 'Odontesthes regia',
      imageAsset: require('../imagenes/pejerrey-de-mar.png'),
      caracteristicas: 'Color gris pizarra, plateado oscuro en el lomo, y claro en el vientre. Franja plateada lateral notoria. Muy común en desembocaduras.',
      senuelos: ['Aparejo de pejerrey', 'Plumas pequeñas y brillantes'],
      carnadas: ['Gueple de mar', 'Camarón pequeño', 'Filete de pescado'],
    },
    { // Especie agregada según tu solicitud
      nombreComun: 'Róbalo',
      nombreCientifico: 'Eleginops maclovinus',
      imageAsset: require('../imagenes/robalo.png'),
      caracteristicas: 'Cuerpo fusiforme, robusto. Dorso marrón azulado, vientre amarillo plateado. Especie característica de desembocaduras y zonas costeras adyacentes.',
      senuelos: ["Vinilos", "Metal vibs", "Minnows", "Plumillas", "Cucharas"],
      carnadas: ["Gueple de mar", "Nape", "Almeja", "Jibia", "Camarón", "Pulga de mar", "Camarón de río/mar", "Pancora", "Lombriz de tierra", "Lapa"],
    }
  ]
},
{
  id: 131, // O el siguiente ID que te corresponda
  nombre: 'Río Liucura (Sector Puente Huife)',
  latitude: -39.229037336466284,
  longitude: -71.66390539925067,
  tipo: 'Río',
  region: 'La Araucanía',
  descripcionLugar: 'Este río, conocido por sus aguas claras y entorno natural, ofrece en el sector del Puente Huife un acceso a un paisaje fluvial característico de la precordillera de La Araucanía. Un lugar apreciado para la conexión con la naturaleza y la tranquilidad del entorno.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O la que prefieras para ríos
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
      nombreCientifico: 'Salmo trutta',
      imageAsset: require('../imagenes/trucha-fario.png'),
      caracteristicas: 'Color predominantemente café o amarillento, con grandes puntos negros y algunos rojos (a veces aureolados). Vientre más claro. Muy adaptable y territorial.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    }
  ]
},
{
  id: 132, // O el siguiente ID que te corresponda
  nombre: 'Río Allipén (Sector Palihue Pillán)',
  latitude: -38.86904159461819,
  longitude: -71.83595489344366,
  tipo: 'Río',
  region: 'La Araucanía',
  descripcionLugar: 'Este río de La Araucanía, en el sector de Palihue Pillán, ofrece un hermoso entorno precordillerano con aguas que bajan de la montaña. Un lugar ideal para disfrutar de la naturaleza y una jornada tranquila junto a sus riberas.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O la que prefieras para ríos
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
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
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},
{
  id: 133, // O el siguiente ID que te corresponda
  nombre: 'Río Allipén (Sector Puente Allipén)',
  latitude: -39.024218667724945,
  longitude: -72.2489645487638,
  tipo: 'Río',
  region: 'La Araucanía',
  descripcionLugar: 'Este sector del Río Allipén, accesible desde el puente homónimo, se caracteriza por sus aguas correntosas y el paisaje precordillerano de La Araucanía. Un lugar que invita a explorar sus riberas y disfrutar de la naturaleza fluvial.',
  cuota: 'Consultar la información actualizada de SERNAPESCA, ya que las regulaciones pueden cambiar.',
  imagenFondoSecciones: require('../imagenes/textura-generica-playas.jpg'), // O la que prefieras para ríos
  especies: [
    {
      nombreComun: 'Trucha Arcoiris',
      nombreCientifico: 'Oncorhynchus mykiss',
      imageAsset: require('../imagenes/trucha-arcoiris.png'),
      caracteristicas: 'Cuerpo robusto, franja rojo-violácea iridiscente lateral. Lomo verdoso/café, flancos plateados. Pequeñas manchas negras en cabeza, cuerpo y aletas.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Jigs pequeños", "Metal Vib", "Vinilo", "Caimán", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Trucha Marrón (Fario)',
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
      caracteristicas: 'Cuerpo fusiforme y robusto. Color azul verdoso con pequeñas manchas doradas en el dorso y cabeza, lados plateados. Es el más grande de los salmones del Pacífico.',
      senuelos: ["Cucharas grandes", "Spinners grandes", "Minnows grandes", "Jigs pesados", "Moscas voluminosas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Salmón Coho',
      nombreCientifico: 'Oncorhynchus kisutch',
      imageAsset: require('../imagenes/salmon-coho.png'),
      caracteristicas: 'Cuerpo plateado brillante con dorso azul oscuro a negro, pequeñas manchas negras en el lomo y aleta dorsal. Durante el desove, los machos desarrollan mandíbulas ganchudas y tonos rojizos.',
      senuelos: ["Cucharas", "Spinners", "Minnows", "Moscas"],
      carnadas: ["Carnadas vivas prohibidas por regla general para salmónidos (Consultar regulaciones actualizadas de Sernapesca)"],
    },
    {
      nombreComun: 'Pejerrey Chileno',
      nombreCientifico: 'Basilichthys australis',
      imageAsset: require('../imagenes/pejerrey-chileno.png'),
      caracteristicas: 'Cuerpo alargado y fusiforme, tonalidad plateada con banda oscura. Presente en sectores del río, especialmente en zonas más calmas y accesibles.',
      senuelos: ["Minnow pequeno", "Vinilos pequenos", "Spinner en numeracion pequena", "Microjigs", "Moscas pequenas"],
      carnadas: ["Tebo", "Lombriz", "Masas preparadas"],
    }
  ]
},


];











  

  
  
  

  
  