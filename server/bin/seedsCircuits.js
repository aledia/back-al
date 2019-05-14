const mongoose = require('mongoose');
const Circuits = require('../models/Circuits');

const dbName = 'nomadaTravel';
mongoose.connect(`mongodb://localhost/${dbName}`);
const place = [{
    title: "Buscando al Rey León, Kenia ",
    descriptions:"Día 1 España-Nairobi, DÍA 2 Nairobi/Aberdare: Llegada y salida por carretera hacia el parque de Aberdare. Tras el almuerzo ascenderemos hacia una de las colinas de los Montes de Aberdare. Tarde libre. Allí tendremos la oportunidad de observar elefantes, búfalos y otras especies. Cena en el lodge. DÍA 3 ABERDARE/LAGO NAKURU/LAGO NAIVASHA, Salida por carretera hacia el Gran Valle del Rift, hasta el Lago Nakuru. Nuestro camino cruzará la mágica línea del Ecuador, aprovechando para hacer una parada. Almuerzo. Por la tarde safari fotográfico en sus orillas. Continuación por carretera hacia nuestro hotel. Cena en el lodge. DÍA 4 LAGO NAIVASHA O NAKURU/MASAI MARA. Nos dirigimos a la tierra de los míticos guerreros masai. Safari fotográfico recorriendo las inmensas llanuras de Masai Mara donde encontraremos a grandes manadas de ñus, cebras, antílopes y gacelas observadas de cerca por los grandes depredadores. Almuerzo y a continuación primer safari en el parque. Iniciamos nuestra búsqueda del rey de la sabana; el león. Cena en el lodge.",
    image_url:"https://bellanyc.com/wp-content/uploads/2017/12/Safari-1170x947.jpg",
    author: "Pedro López",
    author_img:"https://televisa.brightspotcdn.com/dims4/default/2ba274c/2147483647/strip/true/crop/807x606+186+3/resize/818x614!/quality/90/?url=https%3A%2F%2Ftelevisa.brightspotcdn.com%2F08%2F1a%2Fc7fd3d564e6ba71568e23d133a7f%2Fhombre-con-rostro-dulce.jpg",
    coords:[{
      latitude1: 40.472274,
      longitude1: -3.713781},
      {latitude2: 43.472274,
      longitude2: -8.713781}
    ]

     },
  {
    title: "Tortuguero, Costa Rica ",
    descriptions:"Día 1 España, San José: Salida en vuelo con destino a San José. Día 2 San José. de Tortuguero, Temprano por la mañana partimos hacia el Parque Nacional de Tortuguero, una de las áreas de mayor diversidad biológica de Costa Rica. Desayuno en ruta. Más tarde, haremos una travesía en lancha de unas 2 h para llegar hasta nuestro alojamiento. Almuerzo y cena. DÍA 3 P.N. DE TORTUGUERO,Visitas de exploración navegando en motoras especiales, atravesando bosques y selvas para admirar su exótica flora y sus manglares. Tiempo libre. DÍA 4 P. N. DE TORTUGUERO/P. N. VOLCÁN ARENAL. Salida hacia la bella zona del Volcán Arenal. Almuerzo en ruta. Por la noche les invitamos a disfrutar de las aguas termales en Tabacón con cena incluida (traslados no incluidos). Tabacón ofrece una gran variedad de servicios: cinco piscinas de agua mineral caliente, aguas turbulentas al aire libre, manantiales y cataratas térmicas naturales.DÍA 5 P.N VOLCÁN ARENAL (SKY TRAM Y SKY WALK) Sky Tram, un teleférico que se eleva a través de las copas de los árboles, y que nos permitirá descubrir sus secretos junto a nuestro guía. Continuaremos con el Sky Walk, una perfecta combinación de puentes suspendidos y senderos a lo largo de la selva",
    image_url:"https://www.diariohispaniola.com/fotos/1/Parque-Nacional-Tortuguero.jpg",
    author: "Esperanza Britos",
    author_img:"https://www.viralblog.news/wp-content/uploads/2018/01/mujer-suenos-euroresidentes.jpg",
    coords:[{
    latitude: 43.313401,
    longitude: -6.054992},

    {latitude: 43.281560, 
    longitude: -4.025519
    },

    {latitude: 43.1872449,
    longitude: -4.8390766}]
  },
  {
    title: "Cabañas en los Fiordos Noruegos",
    descriptions:"Día 1 España/Bergen u Oslo,Salida en vuelo regular a Bergen u Oslo. Dirígete a tu alojamiento situado en la zona de Sogndal. Alojamiento en cabaña. DÍAS 2 A 7 VESTERLAND (SOGNDAL)Durante tu estancia en las cabañas puedes visitar esta zona del país y sus principales atractivos, realizar cruceros y acercarse hasta los glaciares cercanos. Os sentiréis privilegiados al alojaros en el área del que sea, probablemente, el fiordo más famoso del mundo, EL FIORDO DE LOS SUEÑOS!; el más extenso y profundo de Noruega, que tiene su desembocadura a unos 75 km al norte de Bergen y se extiende 204 km al interior hasta la localidad de Skjolden. Los espectaculares acantilados que rodean el fiordo alcanzan una altura desde el agua de 1.000 m, e incluso más.DÍA 8 SOGNDAL/BERGEN U OSLO/ESPAÑA",
    image_url:"https://www.touristforum.net/images/gallery/touristforum/Products/201400000073-431303-lake-mountains-landscape-building-italy-clouds-boat-house.jpg",
    author:"Aledia Ortega",
    author_img:"https://smoda.elpais.com/wp-content/uploads/2017/08/40mujeres14-1-635x480.jpg",
    coords:[{
    latitude: 37.174920, 
    longitude: -3.598484,},
    {
    latitude: 37.894254, 
    longitude: -4.784483,},
    
    {latitude: 37.894254, 
    longitude: -4.784483}
  ]}
  ,
  {
    title: "Rias Bajas, Galicia",
    descriptions:" Día 1: Baiona. Día 2: Santa Tecla, Día 3: O Grove, A Toxa,Día 4: Santiago De Compostela,Día 5: A Coruña, Oporto, Pontevedra,Día 6: Combarro, Cambados",
    image_url:"https://www.clubhuellas.com/archivos/web-galicia-211493821799.jpg",
    author:"María Barrios",
    author_img:"data:image/jpeg;base64,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",
    coords:[{
    latitude: 37.174920, 
    longitude: -3.598484,},
    {
    latitude: 37.894254, 
    longitude: -4.784483,},
    
    {latitude: 37.894254, 
    longitude: -4.784483}
  ]}
]


Circuits.create(place, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`create ${place.length} place`)
  mongoose.connection.close();
})