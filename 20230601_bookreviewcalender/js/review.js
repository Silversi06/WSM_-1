//URL에 있는 book parameter 값(String):bookId
let url_href=window.location.href;//브라우저 창에 있는 주소

const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId: ${bookId},type: ${typeof bookId}`);
//bookId가  null이면 , index.html로 가자
if(bookId == null){
    window.open("index.html", target="_top"); //새로운 창 열려서 이동하는 문제 해결
    //window.location.href="index.html";
}

// ->String 을 number 로 변환 
let bookIdNumber =Number(bookId); //string-> number
//let bookIdNumber =parseInt(bookId); //string -> number
//let bookIdNumber =bookId * 1 //string -> number

console.log(`bookIdNumber: ${bookIdNumber},type: ${typeof bookIdNumber}`);

// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 뺴자 : bookData
//bookIdNumber: URL에서 가져온 id 값 === books 하나씩  꺼낸 book 의 id 값
let bookData;
for(let book of books){
    if(bookIdNumber === book.id){
        bookData = book;    //id가 같으면 , 그놈을 꺼내서 bookData에 넣는다.
        break;
    }
}
console.log(bookData);

// ->title, author, publisher, bookImage 알아내자
//let title =books[bookIdNumber-1].title ;  
let title = bookData.title;  
console.log(title);
let author =bookData.author;
let publisher=bookData.publisher;
let bookImage=bookData.img;
console.log(title, author, publisher, bookImage);
// ->html에 넣자
//HTML 요소 ->js변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const imgDiv = document.getElementsByClassName("book-image")[0];
imgDiv.innerHTML = `<img src="${bookImage}"/>`;

const readDateDiv =document.getElementsByClassName("read-date")[1];
let now = "2030년 8월 17일";
now = new Date();  //현재날짜와 시각 객체
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();

weeks =["일","월","화","수","목","금","토"];
day = weeks[day]+"요일";
now = `${year}년 ${month+1}월 ${date}일 ${day}`;

readDateDiv.innerHTML =now;
// const bookId = "1";
// var url_href = window.location.href;

// var url = new URL(url_href).searchParams;
// var a = parseInt(url.get("book"));

// const bookTitle = books[a-1].title;

// console.log(`bookTitle: ${bookTitle}`);