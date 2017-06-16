class StringSplosion{

   constructor(Str)
  {
    this.Str = Str;
  }

 manipulate(){
    let str_exploded = "";
    let sss = ""
    
   let strExplode = (this.Str).split("");
    for(let i=0; i<strExplode.length; i++){
        
     for(let j=0; j<i; j++){
        str_exploded+=this.Str[j];
      }
      
   }
    return str_exploded+this.Str;
  }

  }
let stringSplosion = new StringSplosion('Str');


module.exports = StringSplosion;