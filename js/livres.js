// Modify the code here
// ======================

const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) { return 0;}
    
    let somme = 0;
    for(let rating of ratings){somme += rating; // somme= somme + rating;
  }
  const Average = somme / ratings.length;
  return Average;
  }
  
  // ======================
  
  const lionelRatings = [5, 4, 4, 3, 1, 2];
  const aliceRatings = [1, 2, 3, 4, 5];
  
  const lionelAverage = calculateAverageRating(lionelRatings);
  const aliceAverage = calculateAverageRating(aliceRatings);
  
  if (lionelAverage && aliceAverage) {
    document.querySelector('#note1').innerText = lionelAverage.toFixed(1) + ' étoiles';
    document.querySelector('#note2').innerText = aliceAverage.toFixed(1) + ' étoiles';
    document.querySelector('#note3').innerText = `${calculateAverageRating([]) === 0 ? 'Pas de note' : calculateAverageRating([]) + ' stars'}`
  }