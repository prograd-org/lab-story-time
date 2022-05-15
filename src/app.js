const moreAboutHome = (address, distanceFromTown, hasNeighbours) => {
  let a = typeof address
  let b = typeof distanceFromTown
  let c = typeof hasNeighbours
  return a + b + c
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
const moreAboutKaren = (parents, noOfSiblings, isNuclearFamily) => {
  //     // if (typeof parents, noOfSiblings, isNuclearFamily == 'string', 'number', 'boolean')
  //     //     return true;
  //     // else
  //     //     return false;
  if (
    typeof parents == "string" &&
    typeof noOfSiblings == "number" &&
    typeof isNuclearFamily == "boolean"
  ) {
    return true
  } else {
    return false
  }
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
const doesFriendExist = (ageInText, ageInNumber) => {
  if (isNaN(ageInText) == true) {
    return ageInText
  }
  if (isNaN(ageInNumber) == true) {
    return ageInNumber
  }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
const sweetTooth = (
  totalNoOfSweets,
  sweetsConsumedByKaren,
  sweetsConsumedInNMeters,
  metersToTravel
) => {
  var sweetsShared = 0
  if (
    typeof totalNoOfSweets != "number" ||
    typeof sweetsConsumedByKaren != "number" ||
    typeof sweetsConsumedInNMeters != "number" ||
    typeof metersToTravel != "number"
  ) {
    return "No sweets for Karen's friend"
  } else if (totalNoOfSweets)
    sweetsShared =
      (totalNoOfSweets -
        (sweetsConsumedByKaren + sweetsConsumedInNMeters * metersToTravel)) /
      2

  return sweetsShared
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
const convertToCelsius = (fahrenheit) => {
  var result = 0
  if (typeof fahrenheit !== "number") result = "Technical Error!"
  else result = ((fahrenheit - 32) * 5) / 9
  return result
}

//Progression 6:
//Lily can now do multiple things to deal with this
	@@ -30,6 +87,17 @@
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
const aDifficultChoice = (choice) => {
  if (choice == 1) {
    return "Take her daughter to a doctor"
  } else if (choice == -1) {
    return "Break down and give up all hope"
  } else if (choice == "I give up") {
    return "Refused to do anything for Karen"
  } else {
    return "Wasn't able to decide"
  }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
	@@ -39,3 +107,8 @@
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
const consoleKaren = (strategies) => {
  var result = 0
  result = strategies.reduce(a + b)
  return result
}
