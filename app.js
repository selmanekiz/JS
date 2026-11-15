// document write ile çıktı oluşturma

// document.write("Hello Wolrd <br>");
// document.write("Selman Ekiz <br>");
// document.write(55)

// console log metodunu kullanırız

// console.log("Hello World");
// console.log(3.54);
// console.log(true);

// // console.clear();

// let a=5;
// let b=10;

// console.log("iki sayının toplamı :" , a+b);
// console.clear();

//alert popup ile çıktı verme işlemleri

// let a=10;
// let b=12;

// alert("iki sayının toplamı : " + (a+b));

// alert("F5 tuşuna lütfen basmayınız")

// console.log(window);
// console.log(window.location.origin);
// console.log(location.origin); //window yazmasak da olur
// console.error("hata için");
// console.warn("uyarı için");
// console.log("normal yazmak için");

// var degiskenIsmi = 10 ;
// console.log(degiskenIsmi);

// var a = 5; // global scope (her yereden erişebilirsiniz)

// function method1(){
//     var sayi = 10; //function scope (süslü parantezler içerisinde erişilebilir)
//     console.log(sayi); //konsola yazar
// }
// // console.log(sayi); //konsola yazamaz
// method1()

// function method1(){
//     var c = 1 // function scope
//     if(true){
//         var a=5  //block scope (sadece if in içinde erişilebilir)
//     }
//     while(true){
//         var b = 10 //block scope (sadece while içinde erişilebilir)
//     }
//     for(let i = 1; i<=10 ; ++i){

//     }

// }

//? var - let - const
// var : block scope olmuyor, block içinde de olsa function scope oluyor bu yüzden ram de çok yer kaplıyor
// let/const : block scope özelliğine sahiptir
// let ve const arasındaki fark const sabittir değişmez

// const a=5;
// a=10;  // hata veriyor
// console.log(a);

// let a=5;
// a=10; // çalışıyor
// console.log(a);

// const user = {
// username: "selman" ,
// password: "123"
// }
// user.username="selmanekiz";
// console.log(user);

/*
*Veri Tipleri
1-String : "selman" (tırnak içerisinde yazılanlar)
2-Number : sayılar (tırnak içinde olmayan)
3-Boolean : true ve false
4-Null : boş
5-Undefined : tanımlanmamış , değer atanmamış
6-Object
7-Function

*/
//string
// let isim="selman";
// document.write(isim);
// document.write(typeof isim); //string

//number
// let sayi=10
// document.write(sayi);
// document.write(typeof sayi);

//boolean
// document.write(5<2); //false

//null
// let a = null;
// a=7;
// document.write(a);

//undefined
// let a;
// document.write(a);

//object
// let insan = {
//     isim:"selman",
//     soyisim:"ekiz",
//     yas:"20"
// }
// document.write(typeof insan);

//function
// let func = function(){
//     document.write("Merhaba")
// }
// func();
// document.write(typeof func);

//? ATAMA OPERATÖRLERİ
/*
    =   : atama operatörü (sağdaki değeri sola ata)
    ==  : eşittir (sadece değerlere bakar ; console.log(5=="5") == true)
    === : hep tipleri hem de değerlerinin eşit olup olmadığına bakar 
    +=  : arttırma (sayı += 2)=(sayı = sayı + 2)
    -=  : azaltma
    *=  : çarpma
    /=  : bölme
    %=  :mod alma
    **= :kuvvet alma (sayı = sayı**2)=(sayı**=2)=(sayı^2)

*/

// var sayi = 3;
// document.write(sayi**=5); //243

/* 

&& : ve 
|| : veya
!  : değil
zaten biliyordum
*/