var check =0;
var check2=0;
var count =0;
var count2=0;
var time = 0;
var time2 = 0;
var choice = 0;
let click = document.getElementById('start');
click.addEventListener("click",allinone);
function allinone(){
    setnull();
    noodle();
}
function start_force() {
  clearInterval(time2);
  count2 = 10;
  time2 = setInterval("myTimer2()",1000);
}

function setnull(){
    check2=1;
    document.getElementById("precount").innerHTML ="";
}

function noodle() {
  document.getElementById("precount").innerHTML ="";
  if (check==0){
    check=1;
    clearInterval(time); // 타이머 우선 초기화 시켜주기(time initialize)
  count = 60;
  time = setInterval("myTimer()",1000);
  }

}

function myTimer() {
  count = count - 1; // 타이머 선택 숫자에서 -1씩 감산함(갱신되기 때문)
  if (count<30&&count>9){
    document.getElementById("countdown").style.color = "#ff7f00";
  }
  else if(count<10)
  {
    document.getElementById("countdown").style.color = "#ff0000";
  }
  document.getElementById("countdown").innerHTML = count + "s";

  if (count == 0) {
    clearInterval(time); // 시간 초기화
    alert("시간이 완료되었습니다.")
    document.getElementById('end').click();
  }
}

function myTimer2() {
  count2=count2-1;

  if(check2!=1){
    document.getElementById("precount").innerHTML = count2 + "초후 자동으로 시작합니다";
    if (count2 == 0) {
      clearInterval(time2);
      document.getElementById('start').click();
      document.getElementById("precount").innerHTML ="";
    }
  }
  else{
    document.getElementById("precount").innerHTML ="";
    }
  
}
start_force()
document.oncontextmenu = function () {
  alert("마우스의 우클릭은 사용할 수 없습니다.")
  return false;
}