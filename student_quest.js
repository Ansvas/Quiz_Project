  

var option1text=document.getElementById('option1text');
var option2text=document.getElementById('option2text');
var option3text=document.getElementById('option3text');
var option4text=document.getElementById('option4text');
var questiontext=document.getElementById('questiontext');

var count=0;
var ques;
var ranarr,ranarr2,ranarr3,ranarr4,ranarr5;
var data;
var ques2,ques3,ques4,ques5;
var keys1,keys2,keys3,keys4,keys5;
var n1=3;
var n2=2;
var n3=2;
var n4=2;
var n5=2;
var n=0;


//intialising firebase
  var config = {
    apiKey: "AIzaSyB-zPviDEmZeY_7xEdiRgR0FGv7WslsuLE",
    authDomain: "jwtproject-1aa76.firebaseapp.com",
    databaseURL: "https://jwtproject-1aa76.firebaseio.com",
    projectId: "jwtproject-1aa76",
    storageBucket: "jwtproject-1aa76.appspot.com",
    messagingSenderId: "1017119305086"
  };
  firebase.initializeApp(config);


//retrive questions and options from firebase


        database = firebase.database();
        var questionRefr =database.ref("Teachers/pooja/s1/Questions");
        var questionRefr_1 =database.ref("Teachers/pooja/s1/Questions/1_marks");
        var questionRefr_2 =database.ref("Teachers/pooja/s1/Questions/2_marks");
        var questionRefr_3 =database.ref("Teachers/pooja/s1/Questions/3_marks");
        var questionRefr_4 =database.ref("Teachers/pooja/s1/Questions/4_marks");
        var questionRefr_5 =database.ref("Teachers/pooja/s1/Questions/5_marks");


      questionRefr_1.on('value',gotData,errData);
      questionRefr_2.on('value',gotData2,errData);
      questionRefr_3.on('value',gotData3,errData);
      questionRefr_4.on('value',gotData4,errData);
      questionRefr_5.on('value',gotData5,errData);


      function gotData(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ques =data.val();
        //we store all the key with the data in keys array
        var keys=Object.keys(ques);
         ranarr=getRandom(keys,n1);
        console.log(ranarr);
          k=ranarr[count];
          var option1=ques[k].option1;
          var option2=ques[k].option2;
          var option3=ques[k].option3;
          var option4=ques[k].option4;
          var q=ques[k].question;

  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;      
}
//end

      function gotData2(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ques2 =data.val();
        //we store all the key with the data in keys array
        var keys2=Object.keys(ques2);
         ranarr2=getRandom(keys2,n2);
         console.log(ranarr2);
     
}

      function gotData3(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ques3 =data.val();
        //we store all the key with the data in keys array
        var keys3=Object.keys(ques3);
         ranarr3=getRandom(keys3,n3);
         console.log(ranarr3);
     
}

      function gotData4(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ques4 =data.val();
        //we store all the key with the data in keys array
        var keys4=Object.keys(ques4);
         ranarr4=getRandom(keys4,n4);
         console.log(ranarr4);
     
}


      function gotData5(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ques5 =data.val();
        //we store all the key with the data in keys array
        var keys5=Object.keys(ques5);
         ranarr5=getRandom(keys5,n5);
         console.log(ranarr5);
     
}


function displayQuestion()
{
          var k=ranarr[count];
          var option1=ques[k].option1;
          var option2=ques[k].option2;
          var option3=ques[k].option3;
          var option4=ques[k].option4;
          var q=ques[k].question;
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;
}

function display2q()
{
          var k=ranarr2[n];
        var option1=ques2[k].option1;
          var option2=ques2[k].option2;
          var option3=ques2[k].option3;
          var option4=ques2[k].option4;
          var q=ques2[k].question;
          n=n+1;
          if(n==n2)
          {
            n=0;
          }
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;
}


function display3q()
{
          var k=ranarr3[n];
        var option1=ques3[k].option1;
          var option2=ques3[k].option2;
          var option3=ques3[k].option3;
          var option4=ques3[k].option4;
          var q=ques3[k].question;
          n=n+1;
          if(n==n3)
          {
            n=0;
          }
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;
}

function display4q()
{
          var k=ranarr4[n];
        var option1=ques4[k].option1;
          var option2=ques4[k].option2;
          var option3=ques4[k].option3;
          var option4=ques4[k].option4;
          var q=ques4[k].question;
          n=n+1;
          if(n==n4)
          {
            n==0;
          }
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;
}

function display5q()
{
          var k=ranarr5[n];
        var option1=ques5[k].option1;
          var option2=ques5[k].option2;
          var option3=ques5[k].option3;
          var option4=ques5[k].option4;
          var q=ques5[k].question;
          n=n+1;
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;
}





  function submit(){
  if(count<n1)
  {
    count=count+1;
    displayQuestion();
  }
  else if(count>=n1 && count<(n1+n2))
  {
    count=count+1;
    display2q();
  }

  else if(count>=(n1+n2) && count<(n1+n2+n3))
  {
    count=count+1;
    display3q();
  }

  else if(count>=(n1+n2+n3) && count<(n1+n2+n3+n4)){
    count=count+1;
    display4q();
  }

  else if(count>=(n1+n2+n3+n4) && count<(n1+n2+n3+n4+n5)){
    count=count+1;
    display5q();
  } 
}



//no essue with these functions


      function errData(err){
        console.log('Error!');
        console.log(err);
      }

//random function for use of something

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}