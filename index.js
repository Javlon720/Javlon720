// let num = 1 ;
// console.log(num);
// let g = 3;
// console.log(num + g );


// let a = b = c = 3;
// console.log(a,b,c);
 


//  let name = "john ";
//     console.log(`welcome ${name}`);

// ################ homework #################### 


// ################# homework 2- prefix and postfix
//  let a = 1 , b = 1 ;

//  let c =++a;
//  let d = b++;


//  console.log(c);
//  console.log(d);
// ################# homework 3 - assigment result 


// let a = 1 ;
// let x=1+(a*=2);

// console.log(x);//3





// ################# homework 4 - type Conversion 
// let a = "", b = 1, c = 0;
// let d = a - b + c ;

// console.log(d);// -1 

// let a = "", b = 1, c = 0;
// let d = a + b + c ;

// console.log(d);// 10 

// let natija = true + false ;
 
// console.log(natija);//1
// let a = 6, b = "3";
// let c = a/b;

// console.log(c); // 2

// let a = "2" , b = "3";
// let c = a*b;

// console.log(c); //6 

// let a  = 4 , b = 5 , c = "px";
// let d = a + b + c;

// console.log(d); // 9px

// let a = "$",b = 4 ,c = 5;
// let d = a + b + c;

// console.log(d); //$45 
//    sababi agar birinchi qiymat string bolsa boshqa qiymallar ham string bo'ladi , yani string ichida faqat son bo'lmasa shunday bo'ladi .

// let a = "4" , b = 2, c ;
//     c = a - b ;
// console.log(c); //2

// let  a ="4xp" , b = 2 , c ;
// c=a-b;
// console.log(c); // NaN chiqadi , sababi string ichida son bo'lishi kerak edi, lekin string ichida son yo'q ,shuning uchun NaN chiqadi .
// console.log(a-b);



// let a,b,c;
// a="  -9   " ;
// b=5;
// c=a+b;
// console.log(c);// -9 5, sababi a ichida bo'sh joylar bor , shuning uchun a ni son qilib oladi , -9 ni son qilb oladi , shuning uchun -9 5 chiqadi .

// let a,b,c;
// a="  -9   " ;
// b=5;
// c=a-b;
// console.log(c);//-14   



// let a, b ;
// a=null, b=1
// console.log(a+b);//1  , sababi null qiymati 0 ga teng , shuning uchun 0+1=1 chiqadi.


// let a, b=1;
// console.log(a+b);// NaN , sababi a ni qiymati belgilanmagan , shuning uchun NaN chiqadi . 

// let a = " \t \n" , b = 2 , c ;
//  c = a + b ;
//  console.log(c);// 2, tushinmadim uncha  ((


// ######### homewrok 5 -comparisons ##############

// let a="apple", b="pineapple";
// console.log(a>b);// false, sababi a harflar soni katta bo'lgani uchun false chiqadi .

// let a = "2", b = "12";
// console.log(a>b); // true , sababi a ni qiymati 50  b ni qiymati 49 charCodeAt orqali aniqlanadi , shuning uchun true chiqadi.
// console.log(a.charCodeAt(0));//50 charCodeAt 
// console.log(b.charCodeAt(0));//49 charCodeAt 
// let c = 50 , d = 49;
// console.log(String.fromCharCode(c));//"2"
// console.log(String.fromCharCode(d));


// let = a = "199", b = "9";
// console.log(a>b);// false chunki sababi agar birinchi son unicode bilan sotlishtirganda a "199" 1- 49 , 9-57, 9-57 , va b unicode "9" 9-57 , shunda agar birinchi raqam  kichkina bolsa qolgan raqamlar solishtirladi , agar unda  undan keyingi raqamlar ham undan kichik yoki teng bo'lsa amal false aylanib b yani "9" katta deb olinadi .

// let a = null , b ;

//  console.log(a==b); // true , sababi ikkala bo'sh  deb qaraladi va teng . 
//  console.log(a===b);// false , sababi ikkalasini type ham solishtiriladi .

// let a = null , b = "\n0\n" ;

// console.log(a==b);//false , sababi a ni qiymati 0 , b ni qiymati String \n0\n 
// console.log(a === +b);// false , sababi a ni qiymati 0  type number , b ni qiymati string type , shuning uchun false chiqadi .shuning uchun teng emas . 


//      2-dars 

// takrorlash

// console.log(1!=="0"&& false && "hey");
// console.log(!(1!=="0"&& true && "hey"));

// console.log(1!=="0");
// console.log( false );
// console.log("hey");




// ############################## if else ####################################



// console.log( "" || "5s" );
// console.log("5s" || "" );

// console.log(true || false);

// console.log(false || true);
// console.log(true && false);

// console.log(2 && 3);


// let s ;
//  s= -0.23;

 

//  if( s >= 1) {
//     console.log("sizning raqamingiz 1 dan katta ");
    
//  } else if (s >= 0 && s<1){
//     console.log("sizning raqamingiz 0 va 1 dan kichik  ");
    
//  } else if ( s <= -0){
//     console.log("sizning raqamingiz -1 dan boshlanadi");
//  }else{
//    console.log("iltimos raqam kiriting");
   
//  }



// if (!isNaN(Number(s))) {
//     s = Number(s); // Raqamga aylantirish

//     if (s > 1) {
//         console.log("Sizning raqamingiz 1 dan katta");
//     } else if (s >= 0 && s < 1) {
//         console.log("Sizning raqamingiz 0 va 1 dan kichik");
//     } else if (s <= -1) {
//         console.log("Sizning raqamingiz -1 dan boshlanadi");
//     } else {
//         console.log("Sizning raqamingiz 0 yoki boshqa intervalga to'g'ri kelmadi");
//     }
// } else {
//     console.log("Iltimos, to'g'ri raqam kiriting");
// }













// alert('Iltismos 2 ta raqam kiriting ') ;
//  prompt(  " 1- raqam kiriting ", a ) ;
//  prompt(  " 2- raqam kiriting ", b ) ;

// let result ,  a , b ;
//  a=2;  
//  b = 1;
// // alert('itlimos 2 ta raqam kiriting') ;
//     // ishlamadi    // a = prompt('1-raqam kiriting'); 
//         // ishlamadi  // b = prompt('2- raqam kiriting') ; 
// if( a + b < 4) {
//   result ='Below';
// } else {
//   result =  'Over';
// }
// alert(result);
















// let  a , b, result ;
// a = 1 ; 
// b = 4 ; 
// a + b < 4? result = ' below ': result =  ' over ' ; // birinchi shartni tekshiradi , agar shart bajarilmasa else ga o'tadi . yani : ga . 

// console.log(result);



// let messege , login;
// login = 'Director';
// console.log(
//      login == 'Employee'
//        ? messege = 'Hello'
//          : login == 'Director' ? messege = 'Greetings'
//            : login == '' ? messege = 'No Login'
//              : messege = ''
// );



