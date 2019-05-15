const mongoose = require("mongoose");

const User = require("../models/User");
const Circuits = require("../models/Circuits");
const bcryptSalt = 10;

const dbName = "nomadaTravel";
mongoose
  .connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    startSeed();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function startSeed() {
  const bcrypt = require("bcrypt");

  let user = [
    {
      username: "angel",
      password: bcrypt.hashSync("angel", bcrypt.genSaltSync(bcryptSalt)),
      email: "angel@gmail.com",
      img: "https://i.pinimg.com/originals/80/af/ee/80afeeef9a7b29a9942f2cc0db2fbc86.jpg"
    },
    {
      username: "bob",
      password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
      email: "bob@gmail.com",
      img:
      "https://televisa.brightspotcdn.com/dims4/default/2ba274c/2147483647/strip/true/crop/807x606+186+3/resize/818x614!/quality/90/?url=https%3A%2F%2Ftelevisa.brightspotcdn.com%2F08%2F1a%2Fc7fd3d564e6ba71568e23d133a7f%2Fhombre-con-rostro-dulce.jpg"
    },
    {
      username: "aledia",
      password: bcrypt.hashSync("aledia", bcrypt.genSaltSync(bcryptSalt)),
      email: "aledia@gmail.com",
      img:
          "https://www.viralblog.news/wp-content/uploads/2018/01/mujer-suenos-euroresidentes.jpg"
    },
    {
      username: "pep",
      password: bcrypt.hashSync("pep", bcrypt.genSaltSync(bcryptSalt)),
      email: "pep@gmail.com",
      img:"https://www.diariogol.com/uploads/s1/54/94/28/0/pep-guardiola-fichaje_15_970x597.jpeg"
    }
  ];
  User.create(user, (err, data) => {
    var fakeUserID = data[0]._id;
    var fakeUser2ID = data[1]._id;
    var fakeUser3ID = data[2]._id;
    var fakeUser4ID = data[3]._id;

    const place = [
      {
        title: "Buscando al Rey León, Kenia ",
        descriptions:
          "Día 1 España-Nairobi, DÍA 2 Nairobi/Aberdare: Llegada y salida por carretera hacia el parque de Aberdare. Tras el almuerzo ascenderemos hacia una de las colinas de los Montes de Aberdare. Tarde libre. Allí tendremos la oportunidad de observar elefantes, búfalos y otras especies. Cena en el lodge. DÍA 3 ABERDARE/LAGO NAKURU/LAGO NAIVASHA, Salida por carretera hacia el Gran Valle del Rift, hasta el Lago Nakuru. Nuestro camino cruzará la mágica línea del Ecuador, aprovechando para hacer una parada. Almuerzo. Por la tarde safari fotográfico en sus orillas. Continuación por carretera hacia nuestro hotel. Cena en el lodge. DÍA 4 LAGO NAIVASHA O NAKURU/MASAI MARA. Nos dirigimos a la tierra de los míticos guerreros masai. Safari fotográfico recorriendo las inmensas llanuras de Masai Mara donde encontraremos a grandes manadas de ñus, cebras, antílopes y gacelas observadas de cerca por los grandes depredadores. Almuerzo y a continuación primer safari en el parque. Iniciamos nuestra búsqueda del rey de la sabana; el león. Cena en el lodge.",
        image_url:
          "https://bellanyc.com/wp-content/uploads/2017/12/Safari-1170x947.jpg",
        creator_id: fakeUserID,
        coords: [
          {
            latitude1: 40.472274,
            longitude1: -3.713781
          },
          { latitude2: 43.472274, longitude2: -8.713781 }
        ]
      },
      {
        title: "Tortuguero, Costa Rica ",
        descriptions:
          "Día 1 España, San José: Salida en vuelo con destino a San José. Día 2 San José. de Tortuguero, Temprano por la mañana partimos hacia el Parque Nacional de Tortuguero, una de las áreas de mayor diversidad biológica de Costa Rica. Desayuno en ruta. Más tarde, haremos una travesía en lancha de unas 2 h para llegar hasta nuestro alojamiento. Almuerzo y cena. DÍA 3 P.N. DE TORTUGUERO,Visitas de exploración navegando en motoras especiales, atravesando bosques y selvas para admirar su exótica flora y sus manglares. Tiempo libre. DÍA 4 P. N. DE TORTUGUERO/P. N. VOLCÁN ARENAL. Salida hacia la bella zona del Volcán Arenal. Almuerzo en ruta. Por la noche les invitamos a disfrutar de las aguas termales en Tabacón con cena incluida (traslados no incluidos). Tabacón ofrece una gran variedad de servicios: cinco piscinas de agua mineral caliente, aguas turbulentas al aire libre, manantiales y cataratas térmicas naturales.DÍA 5 P.N VOLCÁN ARENAL (SKY TRAM Y SKY WALK) Sky Tram, un teleférico que se eleva a través de las copas de los árboles, y que nos permitirá descubrir sus secretos junto a nuestro guía. Continuaremos con el Sky Walk, una perfecta combinación de puentes suspendidos y senderos a lo largo de la selva",
        image_url:
          "https://www.diariohispaniola.com/fotos/1/Parque-Nacional-Tortuguero.jpg",
        creator_id: fakeUserID,
        coords: [
          {
            latitude: 43.313401,
            longitude: -6.054992
          },

          { latitude: 43.28156, longitude: -4.025519 },

          { latitude: 43.1872449, longitude: -4.8390766 }
        ]
      },
      {
        title: "Cabañas en los Fiordos Noruegos",
        descriptions:
          "Día 1 España/Bergen u Oslo,Salida en vuelo regular a Bergen u Oslo. Dirígete a tu alojamiento situado en la zona de Sogndal. Alojamiento en cabaña. DÍAS 2 A 7 VESTERLAND (SOGNDAL)Durante tu estancia en las cabañas puedes visitar esta zona del país y sus principales atractivos, realizar cruceros y acercarse hasta los glaciares cercanos. Os sentiréis privilegiados al alojaros en el área del que sea, probablemente, el fiordo más famoso del mundo, EL FIORDO DE LOS SUEÑOS!; el más extenso y profundo de Noruega, que tiene su desembocadura a unos 75 km al norte de Bergen y se extiende 204 km al interior hasta la localidad de Skjolden. Los espectaculares acantilados que rodean el fiordo alcanzan una altura desde el agua de 1.000 m, e incluso más.DÍA 8 SOGNDAL/BERGEN U OSLO/ESPAÑA",
        image_url:
          "https://www.touristforum.net/images/gallery/touristforum/Products/201400000073-431303-lake-mountains-landscape-building-italy-clouds-boat-house.jpg",
        creator_id: fakeUser2ID,
        coords: [
          {
            latitude: 37.17492,
            longitude: -3.598484
          },
          {
            latitude: 37.894254,
            longitude: -4.784483
          },

          { latitude: 37.894254, longitude: -4.784483 }
        ]
      },
      {
        title: "Rias Bajas, Galicia",
        descriptions:
          " Día 1, Santiago de Compostela. A diferencia de otras ciudades importantes de Galicia, Santiago de Compostela no tiene edificios decrépitos, no hay bares de mal gusto y nada en absoluto que empobrezca la historia y la arquitectura de la ciudad. Prácticamente la totalidad de las calles del Casco Antiguo son peatonales y muchas están empedradas, y debido al atractivo turístico del Casco Antiguo de Santiago de Compostela, nuestro viaje a Galicia en tres días empezará por allí. Día 2, La Coruña. Después de Santiago de Compostela, La Coruña es probablemente la localidad más visitada de Galicia, lugar al que deberás dirigirte bien temprano para aprovechar al máximo este segundo día de nuestro viaje a Galicia en tres días. Además de actuar como la capital de la provincia, La Coruña es un lugar importante turísticamente por derecho propio. No en vano, posee el faro en funcionamiento más antiguo del mundo, la Torre de Hércules y la Ciudad de Cristal, todas ellas verdaderas maravillas para la vista. Día 3, Pontevedra. Aunque no en la misma escala de La Coruña o Santiago de Compostela, Pontevedra tiene una buena cantidad de edificios históricos, iglesias y monumentos, junto con un montón de plazas atractivas y una gran zona de tiendas. La mayor parte de la ciudad es llana, aunque el distrito más antiguo requiere subir y bajar pequeñas inclinacione",
        image_url:
          "https://www.clubhuellas.com/archivos/web-galicia-211493821799.jpg",
        creator: "María Barrios",
        creator_id: fakeUser2ID,
        creator_img:
          "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/03/07/Recortada/img_econcejo_20180307-144642_imagenes_lv_terceros_istock-526427791-kTfD-U441332178228MrF-992x558@LaVanguardia-Web.jpg",
        coords: [
          {
            latitude: 37.17492,
            longitude: -3.598484
          },
          {
            latitude: 37.894254,
            longitude: -4.784483
          },

          { latitude: 37.894254, longitude: -4.784483 }
        ]
      },
      {
        title: "Andalucía al completo",
        descriptions:
          "Día 1: Sevilla. Embarque a las 17:00h en Sevilla. Día 2: Sevilla - Córdoba - Sevilla. Excursión incluida de Córdoba, la ciudad de los Califas. Regreso a Sevilla. Día 3: Sevilla - Cádiz. Excursión guiada incluida de Sevilla a pie para descubrir esta maravillosa ciudad. A primera hora de la tarde, salida en navegación. Se pasará junto el Parque de Doñana, clasificado por la UNESCO Reserva natural de la Biosfera. Llegada por la noche a Cádiz. Paseo nocturno en Cádiz acompañados por una de las azafatas del barco. Día 4: Cádiz - El Puerto de Santa María ,Excursión incluida a Jerez y visita de una ganadería. Por la tarde, excursión incluida guiada de Cádiz, que sorprende por su riqueza cultural e histórica y es famosa por la belleza de sus paisajes que la hacen única. Salida en navegación hacia El Puerto de Santa María. Espectáculo de flamenco a bordo. Día 5: El Puerto de Santa María - Isla Mínima. En compañía de la animadora, visita incluida de la Bodega Osborne y cata de vinos. Navegación hacia Isla Mínima, una hacienda andaluza situada junto al Guadalquivir, donde se asistirá a un espectáculo ecuestre. Regreso a bordo y navegación hacia Sevilla. Día 6: Sevilla - Grana. Excursión incluida a Granada. La ciudad debe su prestigio especialmente a sus monumentos árabes, y sobre todo a la Alhambra. Se visitará la Alhambra y el Generalife, residencia de verano de los Reyes. Regreso en autocar a Sevilla. Día 7: Sevilla . Día 8: Sevilla",
        image_url:
          "https://blog.fuertehoteles.com/wp-content/uploads/2016/11/alhambra-granada.jpg",
        creator_id: fakeUser3ID,
        coords: [
          {
            latitude: 37.17492,
            longitude: -3.598484
          },
          {
            latitude: 37.894254,
            longitude: -4.784483
          },

          { latitude: 37.894254, longitude: -4.784483 }
        ]
      },
      {
        title: "La Rioja y Navarra",
        descriptions:
          " Día 1 · Origen - La Rioja.Salida desde los puntos establecidos realizando breves paradas en ruta (almuerzo por cuenta de los señores clientes). Llegada al hotel a última hora de la tarde, distribución de habitaciones, cena y alojamiento.Día 2 · Logroño - Santo Domingo. Desayuno en el hotel y visita a Logroño. Comenzaremos el recorrido por el casco histórico, con múltiples alusiones al Camino de Santiago, como un gran juego de la oca que marca los hitos principales del Camino. Podremos contemplar la Concatedral de Santa María de la Redonda con sus “Torres Gemelas” y tendremos tiempo libre para pasear por la famosa calle del Laurel y degustar los tradicionales pintxos y vinos locales. Regreso al hotel para el almuerzo. Por la tarde, excursión incluida a Santo Domingo de la Calzada, donde destacamos la Catedral del Salvador y Casco Histórico. Regreso al hotel. Cena y alojamiento. Día 3 · Excursión opcional a Burgos. Día 4 · Laguardia - Briones. Sus principales atractivos son; la Iglesia de Santa María de los Reyes, la Torre Abacial y las bodegas. A continuación realizaremos una visita guiada al Museo del centro temático del vino Villa Lucía (entrada incluida). Regreso al hotel para el almuerzo y por la tarde excursiónincluida a la localidad riojana de Briones, donde visitaremos el Museo Vivanco (entradas incluidas), Museo de la Cultura Vinícola Riojana. Regreso al hotel, cena y alojamiento. Día 5 · Excursión opcional a Estella - Puente La Reina - Pamplona. Comenzaremos la visita por Estella, ciudad románica que atesora palacios, casas señoriales, iglesias, conventos, puentes y hermosos edificios que le han valido el sobrenombre de “laToledo del norte” (los jueves se celebra el mercado tradional). Continuaremos viaje hacia Puente La Reina. Por la tarde visita con guía local a Pamplona, Capital de Navarra. Podremos recorrer lugares tan interesantes como el Paseo de Pablo Sarasate, la Plaza del Castillo, la Plaza del Ayuntamiento... Regreso al hotel, cena y alojamiento. Día 6 · Monasterio de Valvanera - Nájera - Haro día completo al Monasterio de Valvanera, Nájera y Haro (almuerzo por cuenta del cliente). Por la mañana iremos a Nájera, Capital del Reino en los Siglos X-XI. Continuaremos hasta el Monasterio de Valvanera, donde se guarda la Patrona de La Rioja. Posteriormente nos dirigiremos a la villa de Haro, donde realizaremos visita con degustación a una bodega. Regreso al hotel, cena y alojamiento.",
        image_url:
          "https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/spain-la-rioja-najera-vineyards-gettyimages-134104074.jpg",
        creator_id: fakeUser4ID,
        coords: [
          {
            latitude: 37.17492,
            longitude: -3.598484
          },
          {
            latitude: 37.894254,
            longitude: -4.784483
          },

          { latitude: 37.894254, longitude: -4.784483 }
        ]
      }
    ];

    Circuits.create(place, err => {
      if (err) {
        throw err;
      }
      console.log(`create ${place.length} place`);
      mongoose.connection.close();
    });
  });
}
