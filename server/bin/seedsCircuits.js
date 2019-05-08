const mongoose = require('mongoose');
const Circuits = require('../models/Circuits');

const dbName = 'nomadaTravel';
mongoose.connect(`mongodb://localhost/${dbName}`);
const place = [{
    title: "Galicia Rias Bajas y Portugal",
    descriptions:"Lorem fistrum ad aute aute benemeritaar me cago en tus muelas. Benemeritaar va usté muy cargadoo esse va usté muy cargadoo amatomaa officia por la gloria de mi madre tiene musho peligro commodo sed. Quis me cago en tus muelas te voy a borrar el cerito condemor magna ese hombree te va a hasé pupitaa se calle ustée. Aute nisi incididunt consequat adipisicing sit amet. Eiusmod tiene musho peligro nisi te va a hasé pupitaa a peich consectetur aute laboris.",
    image_url:"https://saltaconmigo.com/blog/wp-content/uploads/2018/04/Galicia-Pontevedra-Rias-Baixas-Combarro-Horreos-Amanecer.jpg",
    coords:[{
      latitude1: 40.472274,
      longitude1: -3.713781},
      {latitude2: 43.472274,
      longitude2: -8.713781}
    ]

     },
  {
    title: "Asturias, Cantabria y Picos de Europa",
    descriptions:"Lorem fistrum ad aute aute benemeritaar me cago en tus muelas. Benemeritaar va usté muy cargadoo esse va usté muy cargadoo amatomaa officia por la gloria de mi madre tiene musho peligro commodo sed. Quis me cago en tus muelas te voy a borrar el cerito condemor magna ese hombree te va a hasé pupitaa se calle ustée. Aute nisi incididunt consequat adipisicing sit amet. Eiusmod tiene musho peligro nisi te va a hasé pupitaa a peich consectetur aute laboris.",
    image_url:"https://www.haciendadedonjuan.com/uploads/f8y44mj6dhdbly8qe0ur.jpg",
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
    title: "Granada, Córdoba y Sevilla",
    descriptions:"Lorem fistrum ad aute aute benemeritaar me cago en tus muelas. Benemeritaar va usté muy cargadoo esse va usté muy cargadoo amatomaa officia por la gloria de mi madre tiene musho peligro commodo sed. Quis me cago en tus muelas te voy a borrar el cerito condemor magna ese hombree te va a hasé pupitaa se calle ustée. Aute nisi incididunt consequat adipisicing sit amet. Eiusmod tiene musho peligro nisi te va a hasé pupitaa a peich consectetur aute laboris.",
    image_url:"https://www.ruralidays.com/viajar/wp-content/uploads/2017/09/Qu%C3%A9-ver-gratis-en-Sevilla.jpg",
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