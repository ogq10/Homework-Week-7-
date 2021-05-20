//Question 1
function findWords(){
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max", "HAS", "PuRple", "dog"]

    for( let i =0; i < dog_names.length;i++ ){
        if(dog_string.includes(dog_names[i])){
            return `Matched ${dog_names[i]}`
        }
        else{
            return "No Matches"
        }
    }
}
console.log(findWords())

//Question 2

function replaceEvens(arr){
    for( i = 0; i < arr.length; i=i+2){
        arr.splice(i, 1, "Even Index")
    }
    return arr
}
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))


/* 
def is_triangle(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
          return False;      
    elif a+b > c and a+c > b and c+b > a:
          return True;
    else:
          return False;

*/

function is_triangle(a,b,c){
    if (a <= 0 || b <=0 || c <= 0){
        return false
    } else if ((a+b)>c && (a+c > b) && (c+b > a)){
        return true
    } else{
        return false
    }
}


/* 
    def tickets(peopleInLine):
    a25 = 0;
    a50 = 0;
    for i in range(0, len(peopleInLine)):
        if(peopleInLine[i] == 25):
            a25 += 1;
        if(peopleInLine[i] == 50):
            a25 -= 1; a50 += 1;
        if(peopleInLine[i] == 100):
            if(a50 == 0 and a25 >= 3):
                a25 -= 3
            else:
                a25 -= 1; a50 -= 1
        if(a25 < 0 or a50 < 0):
            return 'NO'

    return 'YES'
*/

function tickets(peopleInLine){
    let a25 = 0;
    let a50 = 0;
    for(var i = 0;i<peopleInLine.length;i++){
      if(peopleInLine[i] == 25){
        a25 += 1;
      }
      if(peopleInLine[i] == 50){
        a25 -= 1; a50 += 1;
      }
      if(peopleInLine[i] == 100){
        if(a50 == 0 && a25 >= 3){
          a25 -= 3;
        }else{
          a25 -= 1; a50 -= 1;
        }
      }
      if(a25 < 0 || a50 < 0){
         return 'NO';
      }
    }
    return 'YES';
  }