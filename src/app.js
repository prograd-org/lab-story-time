//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighhbours){
    var address,distanceFromTown,hasNeighhbours;
    let a=typeof(address);
    let a1=typeof(distanceFromTown);
    let a2=typeof(hasNeighhbours);
    return(a+a1+a2)

}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily){
if(typeof(parents)!='string'||typeof(noOfSiblings)!='number'||typeof(isNuclearFamily)!='boolean'){
    return (false);
}
return(true)
}


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber){

    if(isNaN(ageInText)==true){

        return(ageInText);
    }
    else 
    return(ageInNumber)


    }



//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel){
if(Number.isInteger(totalNoOfSweets)&&Number.isInteger(sweetsConsumedByKaren)&&Number.isInteger(sweetsConsumedInNMeters)&&Number.isInteger(metersToTravel)){
    var TSR=(totalNoOfSweets-(sweetsConsumedByKaren+(sweetsConsumedInNMeters*metersToTravel)))/2
    return(TSR)
}
return("No sweets for Karen's friend")
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit){
    if(typeof(fahrenheit)==='object'||typeof(fahrenheit)==='string'||typeof(fahrenheit)==='undefined'){
    return ('Technical Error!')
    }
    var temp=5/9*(fahrenheit-32);
    return(temp);
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
if(choice==1){
        return('Take her daughter to a doctor')
    }
    else if(choice==-1){
        return('Break down and give up all hope')
    }
    else if(typeof(choice)==="undefined"){
        return "Wasn't able to decide"
    }
    else{
        return('Refused to do anything for Karen')
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single vara
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies){
    let s="";
    for(var i=0;i<strategies.length;i++){
        s=s+strategies[i]+" ";
    }
    return(s.length)
}
