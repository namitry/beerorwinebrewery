const brewery = (beerOrWine, howMany) => {
    let yourOrder = [];

    if (beerOrWine === 'beer') {
        for(let i = 0; i < howMany; i++) {
            yourOrder += '🍺'
        }
    } else if (beerOrWine === 'wine') {
        for(let i = 0; i < howMany; i++) {
            yourOrder += '🍷'
        }
   } else {
       return 'You ordered wonderful drink than I expected!'
   }

   return yourOrder;
}