const articulos = [
    {
      id: '01',
      name: 'Junta Homocinetica Skf',
      category: 'Suspención',
      description: 'Junta Homocinetica Skf Vkja 2622 A FORD - 19 Bicuerpo - 1.9D 65Cv Diesel F8Q-740',
      price: 75,
      img: '01.png',
      stock: 5,
      
    },
    {
      id: '02',
      name: 'Kit Distribución Skf',
      category: 'motor',
      description: 'Kit de Distribución. Para Fiat Uno 1.6 Nafta 92-99. Contiene: Tensor I: VKM 12200 Correa I: 138SHPN150.',
      price: 70,
      img: '02.png',
      stock: 15,
      
    },
    {
      id: '03',
      name: 'Bomba De Agua Skf',
      category: 'motor',
      description: 'Bomba De Agua Skf Renault Kangoo 1.9d Diesel 99/09. Aplica: Marca: Renault. Contiene: VKPC 86413 AD.',
      price: 100,
      img: '03.png',
      stock: 7,
      
    },
    {
      id: '04',
      name: 'Bomba De Agua XT',
      category: 'motor',
      description: 'Bomba De Agua XT FORD | FIAT 1.9d Diesel 99/09. Aplica: Marca: Ford y Fiat. Contiene: VKPC 86417 AD.',
      price: 75,
      img: '04.png',
      stock: 3,
      
    },
    {
      id: '05',
      name: 'Junta Pluricinetica Skf',
      category: 'Suspención',
      description: 'Junta Pluricinetica Skf Vkja 2622 A FORD - 19 Bicuerpo - 1.9D 65Cv Diesel F8Q-740',
      price: 75,
      img: '05.png',
      stock: 5,
      
    },
    {
      id: '06',
      name: 'Kit Distribución Pov',
      category: 'motor',
      description: 'Kit de Distribución Pov. Para Ford Ka 1.6 Nafta 92-99. Contiene: Tensor I: VKM 12201 Correa I: 131SHPN150.',
      price: 70,
      img: '06.png',
      stock: 15,
      
    },
    {
      id: '07',
      name: 'Kit Junta Skf',
      category: 'motor',
      description: 'Kit junta universal. Aplica: todas las marca y modelos. Contiene: VKPC 86413 AD.',
      price: 100,
      img: '07.png',
      stock: 7,
      
    },
    {
      id: '08',
      name: 'Correa XT',
      category: 'motor',
      description: 'Correa XT FORD | FIAT 1.9d Diesel 99/09. Aplica: Marca: Ford y Fiat. Contiene: XT 86417 AD.',
      price: 75,
      img: '08.png',
      stock: 3,
      
    },
  ];
  
  export const getArticulos = () => {
    let error = false;
    return new Promise((resolve, reject) => {
     
        if (!error) {
          resolve(articulos);
        } else {
          reject('Hubo un error intente mas tarde.');
        }

    });
  };