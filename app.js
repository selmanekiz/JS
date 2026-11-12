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

function method1(){
    var c = 1 // function scope
    if(true){
        var a=5  //block scope (sadece if in içinde erişilebilir)
    }
    while(true){
        var b = 10 //block scope (sadece while içinde erişilebilir)
    }
    for(let i = 1; i<=10 ; ++i){

    }

}