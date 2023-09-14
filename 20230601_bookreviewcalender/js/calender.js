//이번달
//현재날짜, 시각 객체 만들자
var now = new Date();
//현재 년
var year = now.getFullYear();

//현재 월
var month=now.getMonth()+1;
//현재 일
var date=now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];
const setCalender = (year, month) => {
    
    //제목 달 보여주자
    //html, -> js
    const titleMonthDiv = document.getElementsByClassName("month")[0];
    //.innerHTML =`${month}월`;
    titleMonthDiv.innerHTML = `${year}년 ${month}월`;

    //달력 만들자
    //해당 월의 1일이 무슨 요일인지알아야한다
    // 해당 월의 첫 번째 날짜를 가져옵니다.
    var firstDate = new Date(year, month - 1, 1).getDay();
    // 해당 월의 첫 번째 날짜의 요일을 가져옵니다. (0: 일요일, 1: 월요일, ..., 6: 토요일)

    //해당 월의 마지막 날짜가 며칠? :다음 달의 1일 하루 전 날(0일)
    var lastDate = new Date(year, month-1 +1, 0).getDate();

    //원래 있던 달력의 .date.item clear
    datesContainerDiv.replaceChildren();

    //.date.item{$}*lastDate
    //for 1~lastday
    for(let date =1; date<=lastDate; date++){
        //<div class = "date item"> date</div>
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");  //<div class = "date"></div>
        dateItemDiv.classList.add("item");//<div class = "date item"></div>
        dateItemDiv.innerHTML = date;//<div class = "date">날짜</div>
        //HTML 에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    //1일을 firstDateDay로 옮기자 5->6
    //.dates.container의 자식 중 첫째자식(1일) style grid-column-start: day+1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    //CSS {grid-column-start: firstDateDay +1;}
    firstDateDiv.style.gridColumnStart = firstDate +1;

}

setCalender(year, month);

//<:이전 달
//html->js
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    if(month ==0) {
        year--;
        month = 12;
    }   //수동으로 yearmonth를 작업해주는 방법
    // let thisMonthDateObject = new Date(year,month-1,1);
    // year = thisMonthDateObject.getFullYear();
    // month = thisMonthDateObject.getMonth()+1;
    setCalender(year,month);
}  //시험!!!! 더 짧게 쓰기
// leftDiv.addEventListener("click",() =>console.log(`${month}월`));

//>:이후 달
const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month ==13){
        year++;
        month = 1;
    }
    setCalender(year,month);
}
// rightDiv.addEventListener("click",() =>console.log(`${month}월`));