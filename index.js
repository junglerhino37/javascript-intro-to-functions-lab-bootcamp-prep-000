function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string==="I love you, Grandma."){
<<<<<<< HEAD
    return "I love you, too."
  } 
  else if (string===string.toLowerCase()) {
    return "I can't hear you!"
  }
  else if(string===string.toUpperCase()){
    return "YES INDEED!"
=======
    return "I love you, too.";
  }
  elseif (string===string.isLowerCase()) {
    return "I can't hear you!";
  }
  elseif(string===string.isUpperCase()){
    return "YES INDEED!";
>>>>>>> f25dc2d10e520c5178914b3e6a23c7a42e0323ed
  }
  
}