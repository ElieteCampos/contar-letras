/*
Mostrar quantas letras repetidas aparecem em uma palavra
ex: Alicate = {a:2, l:1, i:1 , c:1, t:1 , e: 1 }

*/

const palavra = "ABACATE MADURO" .toLowerCase(). replace("" , "  ");  
let letras = {}  


for(let i = 0; i < palavra.length; i ++) {
        if(letras[palavra[i]]){
            letras[palavra[i]]++;
        }else{
            letras[palavra[i]] = 1;
        }


    console.log(letras);
}

