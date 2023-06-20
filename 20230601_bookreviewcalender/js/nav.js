const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl= document.getElementsByClassName("nav-list")[0];

//console.log(navToggleI);
//console.log(navListUl);

//.nav-toggle 클릭하면
nav_toggle.onclick = () => {
    //nav-toggle i 햄버거 메뉴 <-> x
    //class에서 bi-list <->bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    //.nav-list .show-menu toggle
    navListUl.classList.toggle("show-menu");
    // navListUl.classList.toggle("show-menu");
}  

//HTML-->js 가져오는 방법
//1.id
//const navToggleDiv = document.getElementById("nav-toggle");//id 가져오는 방법
//nav-toggle

//2.class
//const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; //class는 여러 개 일 수 있기 때문에 Elements 로 써주고, 그 중 []로 가져온다

//3.Tag
//const navToggleDiv = document.getElementsByTagName("div")[0];

// //4.CSS selecter 느리다
// const navToggleDiv = document.querySelector("#nav-toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];

//5.XPath
// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick = alert("안녕");



//안녕이라는 창을 띄우는 함수를 실행해라
// function sayHello(){
//     alert("안녕");
// }
// nav_nav_toggle.onclick = sayHello;

// nav_toggle.onclick = function (){   //함수에 이름을 정의하징 않고도 실행가능
//     alert("안녕");
// };    //sayHello()는 클릭했을 때 실행이 되어야 하는데 그냥 실행하자 마자 뜬다. 알려만 주고 기억만 하게 해줘야 함-->sayHello

// nav_toggle.onclick = () =>{   
//     alert("안녕");
// };    

// nav_toggle.onclick = () => alert("안녕");    //nav_toggle을 클릭하면 이 함수를 정의해준다.



