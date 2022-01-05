const sample_text_list = [];
sample_text_list[0] =
  "리더에게 필요한 가장 중요한 자질은 무엇이라고 생각하나요?  ";
sample_text_list[1] = "새로운 조직에 적응했던 경험에 대해 말해보세요";
sample_text_list[2] =
"기업이 사회적인 환원, 즉 기부를 어느 정도 해야한다고 생각하나요?<br/> 기업의 기부에 대한 본인의 생각을 말해보세요.";

sample_text_list[3] =
  "본인에게 있는 안좋은 습관과 좋은 습관에 대해 말해보세요.";
sample_text_list[4] =" 최근 일어난 이슈 중 가장 기억나는 것 혹은 관심있는 것에 대해 말해보세요";

sample_text_list[5] =
  "워라밸, 재택근무 등의 직장생활의 문화가 앞으로 어떤 방향으로 발전되어야 한다고 생각하나요?";
sample_text_list[6] = "본인을 잘 나타낼 수 있도록 자기소개 해보세요."
sample_text_list[7] =
  "인생에서 과정과 결과 중 무엇이 더 중요하다고 생각하나요?";
sample_text_list[8] =
  "당신이 상사이고 팀원 중 한 명을 해고해야 한다면, 어떻게 해고할 것인가요?";
sample_text_list[9] =
  "5년 후의 자신의 모습은 어떤 모습일까요?";
sample_text_list[10] =" 지금까지 살아오면서 가장 잘한 선택과 후회하는 선택은 무엇인가요? ";

sample_text_list[11] =
"직장 내 세대차이로 인한 문제는 어떤 것이 있고, 이를 어떻게 극복할 수 있을지 말해보세요. ";

var idlist =["__A_1","__A_2","__A_3",
"__B_1","__B_2","__B_3",
"__C_1","__C_2","__C_3",
"__D_1","__D_2","__D_3",]

for (let i=0;i<idlist.length;i++){
  try{
    document.getElementById(idlist[i]).innerHTML = sample_text_list[i];
  }
  catch(e){
    console.log(e);
  }
}




/////////////////////////////////////////////////////
const ai_video_list = []; // 그냥 보라고 해둠
ai_video_list[0] = "ai_video/ai_low_1.mp4";
ai_video_list[1] = "ai_video/ai_mid_1.mp4";
ai_video_list[2] = "ai_video/ai_high_1.mp4";
ai_video_list[3] = "ai_video/ai_low_2.mp4";
ai_video_list[4] = "ai_video/ai_mid_2.mp4";
ai_video_list[5] = "ai_video/ai_high_2.mp4";
ai_video_list[6] = "ai_video/ai_low_3.mp4";
ai_video_list[7] = "ai_video/ai_mid_3.mp4";
ai_video_list[8] = "ai_video/ai_high_3.mp4";
ai_video_list[9] = "ai_video/ai_low_4.mp4";
ai_video_list[10] = "ai_video/ai_mid_4.mp4";
ai_video_list[11] = "ai_video/ai_high_4.mp4";

const human_video_list = []; // 그냥 보라고 해둠
human_video_list[0] = "audio/low1.mp3";
human_video_list[1] = "human_video/mid1.mp4";
human_video_list[2] = "human_video/high1.mp4";
human_video_list[3] = "human_video/low2.mp4";
human_video_list[4] = "human_video/mid2.mp4";
human_video_list[5] = "human_video/high2.mp4";
human_video_list[6] = "human_video/low3.mp4";
human_video_list[7] = "human_video/mid3.mp4";
human_video_list[8] = "human_video/high3.mp4";
human_video_list[9] = "human_video/low4.mp4";
human_video_list[10] = "human_video/mid4.mp4";
human_video_list[11] = "human_video/high4.mp4";
/////////////////////////////////////////////////////

const input_video_list = [];
//A
input_video_list[0] = "human_video/low4.mp4";
input_video_list[1] = "human_video/mid4.mp4";
input_video_list[2] = "human_video/high4.mp4";
//B
input_video_list[3] = "ai_video/ai_low_3.mp4";
input_video_list[4] = "ai_video/ai_mid_3.mp4";
input_video_list[5] = "ai_video/ai_high_3.mp4";
//C
input_video_list[6] = "human_video/low2.mp4";
input_video_list[7] = "human_video/mid2.mp4";
input_video_list[8] = "human_video/high2.mp4";
//D
input_video_list[9] = "ai_video/ai_low_1.mp4";
input_video_list[10] = "ai_video/ai_mid_1.mp4";
input_video_list[11] = "ai_video/ai_high_1.mp4";

const voice_list = [];
//A
voice_list[0] = "audio/low4.mp3";
voice_list[1] = "audio/mid4.mp3";
voice_list[2] = "audio/high4.mp3";
//B
voice_list[3] = "audio/low3.mp3";
voice_list[4] = "audio/mid3.mp3";
voice_list[5] = "audio/high3.mp3";
//C
voice_list[6] = "audio/low2.mp3";
voice_list[7] = "audio/mid2.mp3";
voice_list[8] = "audio/high2.mp3";
//D
voice_list[9] = "audio/low1.mp3";
voice_list[10] = "audio/mid1.mp3";
voice_list[11] = "audio/high1.mp3";



var idlist = [
  "__A_1",
  "__A_2",
  "__A_3",
  "__B_1",
  "__B_2",
  "__B_3",
  "__C_1",
  "__C_2",
  "__C_3",
  "__D_1",
  "__D_2",
  "__D_3",
];

var videolist = [
  "ai_low_1",
  "ai_mid_1",
  "ai_high_1",
  "ai_low_2",
  "ai_mid_2",
  "ai_high_2",
  "ai_low_3",
  "ai_mid_3",
  "ai_high_3",
  "ai_low_4",
  "ai_mid_4",
  "ai_high_4",
];

var audiolist = [
  "audio_A_1",
  "audio_A_2",
  "audio_A_3",
  "audio_B_1",
  "audio_B_2",
  "audio_B_3",
  "audio_C_1",
  "audio_C_2",
  "audio_C_3",
  "audio_D_1",
  "audio_D_2",
  "audio_D_3",
];



for (let i = 0; i < audiolist.length; i++) {
  try {
    document.getElementById(audiolist[i]).setAttribute("src", voice_list[i]);
  } catch (e) {
    console.log(e);
  }
}

for (let i = 0; i < videolist.length; i++) {
  try {
    document
      .getElementById(videolist[i])
      .setAttribute("src", input_video_list[i]);
  } catch (e) {
    console.log(e);
  }
}


// document.getElementById("__A_1").innerHTML = sample_text_list[0];
// document.getElementById("__A_2").innerHTML = sample_text_list[1];
// document.getElementById("__A_3").innerHTML = sample_text_list[2];
// document.getElementById("__A_4").innerHTML = sample_text_list[3];
// document.getElementById("__A_5").innerHTML = sample_text_list[4];
// document.getElementById("__A_6").innerHTML = sample_text_list[5];

// document.getElementById("__B_1").innerHTML = sample_text_list[6];
// document.getElementById("__B_2").innerHTML = sample_text_list[7];
// document.getElementById("__B_3").innerHTML = sample_text_list[8];
// document.getElementById("__B_4").innerHTML = sample_text_list[9];
// document.getElementById("__B_5").innerHTML = sample_text_list[10];
// document.getElementById("__B_6").innerHTML = sample_text_list[11];

// document.getElementById("__C_1").innerHTML = sample_text_list[12];
// document.getElementById("__C_2").innerHTML = sample_text_list[13];
// document.getElementById("__C_3").innerHTML = sample_text_list[14];
// document.getElementById("__C_4").innerHTML = sample_text_list[15];
// document.getElementById("__C_5").innerHTML = sample_text_list[16];
// document.getElementById("__C_6").innerHTML = sample_text_list[17];

// document.getElementById("__D_1").innerHTML = sample_text_list[18];
// document.getElementById("__D_2").innerHTML = sample_text_list[19];
// document.getElementById("__D_3").innerHTML = sample_text_list[20];
// document.getElementById("__D_4").innerHTML = sample_text_list[21];
// document.getElementById("__D_5").innerHTML = sample_text_list[22];
// document.getElementById("__D_6").innerHTML = sample_text_list[23];
