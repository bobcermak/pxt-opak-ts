type Cislo = {
    num: number
}


let num1: Cislo = {num: 6}  //reference/odkaz neni to hodnota

let num2: Cislo =  {num: 10}
let backup = num2

let num3: number = 6    //hodnota

let num4: number = 10 

num2 = num1  //stejna mistnost

num1.num = 8  //num2 = num1 => priradime cislo a veriable num1 si nepamtuje kolik je takze num1.num = 8
              //stejne misto takze stejne cislo





console.log(num2) //reference nejde porovnavat!!!

console.log(backup)



type Num = {
    x: number
    y: number
    trend: Trend
}

enum Trend {
    vyrovnany = 1,
    konstantni = 0,
    klesajici = -1
}

let a: Num = {x: 10, y: 20, trend: Trend.vyrovnany}  //reference nejdou porovnavat/ objekty
let b: Num = { x: 10, y: -20, trend: Trend.klesajici}//neporvnavame cisla ale mistonsti objektu ktere nejsou stejne
let c: Num = { x: 10, y: 0, trend: Trend.konstantni}
let d: Num = { x: 10, y: 15, trend: Trend.vyrovnany}


console.log(a.trend)
