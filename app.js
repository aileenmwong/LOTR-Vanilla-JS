//worked with Liana and Sarah on homework
// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth.
  let middleEarth = document.createElement('section');
  // console.log(middleEarth);
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for (let i = 0; i < lands.length; i++) {
    // console.log(lands[i]);
    let place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land
    place.setAttribute('id', lands[i]);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place);
    let nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = lands[i];
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
}

function makeHobbits() {
  console.log('Make hobbits');
  //creating a ul for hobbits
  let characters = document.createElement('ul');
  //create a variable to sort the hobbits
  const sortedHobbits = hobbits;
  //sort hobbits using .sort()
  sortedHobbits.sort();
  //create a loop to go through the hobbits and put them in a list
  for (let i = 0; i < sortedHobbits.length; i++) {
    //create li elements
    let characterItems = document.createElement('li');
    // give each hobbit a class of "hobbit"
    characterItems.setAttribute('class', 'hobbit');
    //change the text of each LI to the current hobbit
    characterItems.innerHTML = sortedHobbits[i];
    //add each li of hobbits to the ul
    characters.appendChild(characterItems);
  }
  //append the ul to the shire
  document.querySelector('#the-shire').appendChild(characters);
}
  //INSTRUCTIONS
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  // list the hobbits alphabetically.  Maybe use the .sort() method.

function keepItSecretKeepItSafe() {
  console.log('Save the Ring')
  //create a div for the ring
  let ring = document.createElement('div');
  //set the id of 'the-ring' and set the innerHTML to 'The Ring'
  ring.setAttribute('id', 'the-ring')
  //set the text of the ring to 'The Ring'
  ring.innerHTML = 'The Ring';
  //select Frodo in the array
  const allHobbits = document.querySelectorAll('.hobbit')[0]
  // add the ring as a child of Frodo
  allHobbits.appendChild(ring);

}

function makeBaddies() {
  console.log('Making Baddies')
  //created an unordered list of baddies
  let badBoys = document.createElement('ul');
  badBoys.setAttribute('class', 'badGuys');
  //create a loop to go through baddies and give them a class of baddy
  for (let i = 0; i < baddies.length; i++) {
    //create li for each baddie
    let badBoyNames = document.createElement('li');
    //set the class of the baddies to baddy
    badBoyNames.setAttribute('class', 'baddy');
    //change the name of each baddie to the proper name
    badBoyNames.innerHTML = baddies[i];
    //add each li of baddies to the ul
    badBoys.appendChild(badBoyNames);
    }
    //append the ul to mordor
  document.querySelector('#mordor').appendChild(badBoys);

  //INSTRUCTIONS
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"

}

function makeBuddies() {
  console.log('Making Buddies')
  //create an aside tag
  let friends = document.createElement('aside');
  //append aside tag below mordor
  document.querySelector('#mordor').appendChild(friends);
  //create a loop to go through buddies and give them a class of buddy
  for (let i = 0; i < buddies.length; i++) {
    //create a li for each buddy
    let buddyNames = document.createElement('li');
    //set the class of buddies to 'buddy'
    buddyNames.setAttribute('class', 'buddy');
    //change the name of each buddy to the proper name
    buddyNames.innerHTML = buddies[i];
    //add the li of buddies to the ul
    friends.appendChild(buddyNames);
  }
  //append the ul to mordor
  document.querySelector('#mordor').appendChild(friends);

  //INSTRUCTIONS
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
}

function leaveTheShire() {
  console.log('Leaving the Shire');
  //make a new ul for the Rivendell
  const newHome = document.createElement('ul');
  //call all the cities where hobbits could be
  const cities = document.querySelectorAll('h1');
  //pick the city and append the empty newHome to Rivendell
  cities[2].appendChild(newHome);
  //select all the hobbits within The Shire
  const migratingHobbits = document.querySelectorAll('.hobbit');
  //loop through all the hobbits in the shire to grab them
  for (let i=0; i < migratingHobbits.length; i++) {
    //moving the migrating hobbits to their newHome
    newHome.appendChild(migratingHobbits[i]);
  }
  //INSTRUCTIONS
  // grab the hobbits and move them to Rivendell
}

function beautifulStranger() {
  console.log ('Beatiful Stranger')
  //create a variable called strider
  const strider = document.querySelectorAll('.buddy')[3];
  //change strider to Aragorn
  strider.innerHTML = 'Aragorn';

  //INSTRUCTIONS
  // change the buddy 'Strider' node to "Aragorn"
}

function forgeTheFellowShip() {
  console.log('Forge the Fellowship');
  //create a new div for the fellowship
  const fellowshipFriends = document.createElement('div');
  //set the id of the new div to 'the-fellowship'
  fellowshipFriends.setAttribute('id', 'the-fellowship');
  //create an h1 within the fellowship of friends
  const nameOfFellowship = document.createElement('h1');
  //attach the h1 to the div of Fellowship of Friends
  fellowshipFriends.appendChild(nameOfFellowship);
  //add text to the h1
  nameOfFellowship.innerHTML = 'The Fellowship';
  //call all the cities where the Fellowship could be
  const fellowshipCities = document.querySelectorAll('h1');
  //pick the city and append the empty fellowship to Rivendell
  fellowshipCities[2].appendChild(fellowshipFriends);

  //select all the hobbits
  const fellowshipHobbits = document.querySelectorAll('.hobbit');
  //loop through all the hobbits in the shire to grab them
  for (let i=0; i < fellowshipHobbits.length; i++) {
  //moving the fellowship hobbits to their new fellowship
    fellowshipFriends.appendChild(fellowshipHobbits[i]);
    //alerts each hobbit joined the party
    //alert (fellowshipHobbits[i].innerHTML + ' has joined your party');
  }
  //select all the buddies
  const fellowshipBuddies = document.querySelectorAll('.buddy');
  //loop through all the buddies to grab them
  for (let i=0; i < fellowshipBuddies.length; i++) {
    //moving the fellowship buddies to their new fellowship
    fellowshipFriends.appendChild(fellowshipBuddies[i]);
    //alerts each buddy joined the party
    //alert (fellowshipBuddies[i].innerHTML + ' has joined your party');
  }

  //INSTRUCTIONS
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

function theBalrog() {
  console.log('The Balrog');
  //look for the Gandalf in The Fellowship
  const gandalfName = document.querySelectorAll('.buddy')[0];
  //rename Gandalf
  gandalfName.innerHTML = 'Gandalf the White';
  //add class of 'the white' to the element
  gandalfName.setAttribute('class', 'the-white');
  // in the style.css file, add a css rule for the class "the-white" have a white background and a grey border
  document.querySelector('.the-white').style.backgroundColor = 'white';
  document.querySelector('.the-white').style.borderColor = 'gray';


  //INSTRUCTIONS
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  console.log('Horn of Gondor');
  // pop up an alert that the horn of gondor has been blown
  //alert('The horn of Gondor has been blown! Boromir\'s been killed by the Uruk-hai!');
  // select Boromir
  const byeBoromir = document.querySelectorAll('.buddy')[3];
  // put a linethrough on boromir's name
  byeBoromir.style.textDecoration = 'line-through';
  // Remove the Uruk-Hai from the Baddies on the page
  const byeUruk = document.querySelectorAll('.baddy')[2];
  byeUruk.remove();


  //INSTRUCTIONS
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
}

function itsDangerousToGoAlone(){
  console.log('It\'s dangerous to go alone')
  // select Frodo
  const braveFrodo = document.querySelectorAll('.hobbit')[0];
  // select Sam
  const braveSam = document.querySelectorAll('.hobbit')[3];
  // add Frodo to Mordor
  document.querySelector('#mordor').appendChild(braveFrodo);
  // add Sam to Mordor
  document.querySelector('#mordor').appendChild(braveSam);
  // add a div
  const doomsville = document.createElement('div');
  // with an id of 'mount-doom' to Mordor
  doomsville.setAttribute('id', 'mount-doom');
  // name Mount Doom
  doomsville.innerHTML = 'Mount Doom';
  // add mount doom to Mordor
  document.querySelector('#mordor').appendChild(doomsville);

  //INSTRUCTIONS
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
  console.log ('We Wants It');
  // Create a div
  const gollumLives = document.createElement('div');
  // with an id of 'gollum' and add it to Mordor
  gollumLives.setAttribute('id', 'gollum');
  //name Gollum
  gollumLives.innerHTML = 'Gollum';
  // add gollum to Mordor
  document.querySelector('#mordor').appendChild(gollumLives);
  //Remove the ring from Frodo
  const getTheRing = document.querySelector('#the-ring');
  //give the ring to Gollum
  document.querySelector('#gollum').appendChild(getTheRing);
  //change font color of the ring to red if it is a child of the div with the id of gollum
  if (gollumLives.hasChildNodes('#gollum')) {
    document.querySelector('#the-ring').style.color = 'red';
  }


  //INSTRUCTIONS
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
  console.log('There and Back Again');
  //remove Gollum and the Ring from the DOM
  document.querySelector('#gollum').remove();
  //remove all the baddies from the DOM
  document.querySelector('.badGuys').remove();
  //Move all the hobbits back to the shire
  //search for all of the hobbits
  const goingHome = document.querySelectorAll('.hobbit');
  //search for the shire
  const backHome = document.querySelector('#the-shire');
  //append the hobbits to the shire
  for (let i=0; i < goingHome.length; i++) {
  //moving the fellowship hobbits to their new fellowship
    backHome.appendChild(goingHome[i]);
  }
}
/*
//create a new div for the fellowship
  const fellowshipFriends = document.createElement('div');
  //set the id of the new div to 'the-fellowship'
  fellowshipFriends.setAttribute('id', 'the-fellowship');
  //create an h1 within the fellowship of friends
  const nameOfFellowship = document.createElement('h1');
  //attach the h1 to the div of Fellowship of Friends
  fellowshipFriends.appendChild(nameOfFellowship);
  //add text to the h1
  nameOfFellowship.innerHTML = 'The Fellowship';
  //call all the cities where the Fellowship could be
  const fellowshipCities = document.querySelectorAll('h1');
  //pick the city and append the empty fellowship to Rivendell
  fellowshipCities[2].appendChild(fellowshipFriends);

  //select all the hobbits
  const fellowshipHobbits = document.querySelectorAll('.hobbit');
  //loop through all the hobbits in the shire to grab them
  for (let i=0; i < fellowshipHobbits.length; i++) {
  //moving the fellowship hobbits to their new fellowship
    fellowshipFriends.appendChild(fellowshipHobbits[i]);
    //alerts each hobbit joined the party
    //alert (fellowshipHobbits[i].innerHTML + ' has joined your party');

*/




  //INSTRUCTIONS
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire


// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};

