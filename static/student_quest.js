
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var prn=getUrlParameter('prn');

//var prn = document.querySelector(".prn").value;  
console.log("entered prn");
console.log(prn);
var username = document.querySelector(".username").value;  
console.log("entered username");
console.log(username);
//var username = document.querySelector(".hidden1").value;
//console.log(username);
var username="pooja";
console.log("username is:"+ username);

var option1text=document.getElementById('option1text');
var option2text=document.getElementById('option2text');
var option3text=document.getElementById('option3text');
var option4text=document.getElementById('option4text');
var questiontext=document.getElementById('questiontext');
var checkbox1=document.getElementById('1question');
var checkbox2=document.getElementById('2question');
var checkbox3=document.getElementById('3question');
var checkbox4=document.getElementById('4question');


var count=0;
var ques;
var ranarr=[],ranarr2=[],ranarr3=[],ranarr4=[],ranarr5=[];
var data;
var ques2,ques3,ques4,ques5;
var keys1,keys2,keys3,keys4,keys5;
var n1=3;
var n2=2;
var n3=2;
var n4=2;
var n5=2;
var n=0;
var acount=1;
var j=0;
var total_mark=0;
var ans;
var keys_ans=[];



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



//first time display of the question

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


     var ans_ref=database.ref("s1/Student_ans/16070124011/ds");

      ans_ref.on('value',gotData_ans,errData);


function putdata(ans,keys_ans)
{
  $(function() {

//   var keys_ans=Object.keys(ans);
   console.log("ans array is"+ ans);

     console.log("keys_ans Array"+ keys_ans);

     var alt = allques();

     console.log("allq are"+ alt);

     console.log(prn);
     console.log(n1);
     console.log(ques);
     console.log(ques2);


      $.getJSON($SCRIPT_ROOT + '/_add_numbers', {
        a1: prn,
        a2: alt,
        a3: ans,
        a4: n1,
        a5: n2,
        a6: n3,
        a7: n4,
        a8: n5,
        a9: ques,
        a10: ques2,
        a11: ques3,
        a12: ques4,
        a13: ques5
      }, function(data) {


        var some=data.prn;
        var no=data.n1;
        console.log(no);
        console.log(data.n2);
        console.log(data.n3);
        console.log(data.n4);
        console.log(data.n5);
        console.log(data.ques);
        console.log(data.ques2);
        console.log(data.ques3);
        console.log(data.ques4);
        console.log(data.ans);
        console.log(allq);
        console.log(ans);
        console.log(some);
      });
      return false;
  });

}



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



      function gotData_ans(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ans =data.val();
        //we store all the key with the data in keys array
        var keys_ans=Object.keys(ans);


        putdata(ans,keys_ans); 



             //   return ans;   
        }


function allques()
{

var allq = ranarr.slice(0);

allq.push.apply(allq, ranarr2);


allq.push.apply(allq,ranarr3);


allq.push.apply(allq,ranarr4);


allq.push.apply(allq,ranarr5);


   return allq;
  }





function submit_q(mark)
{

      if(checkbox1.checked)
      ans_ref.child(acount).child("checkbox1").set("1");    
      else
      ans_ref.child(acount).child("checkbox1").set("0"); 
      


          if(checkbox2.checked)
      ans_ref.child(acount).child("checkbox2").set("1");
        else               
      ans_ref.child(acount).child("checkbox2").set("0");  


            if(checkbox3.checked)        
      ans_ref.child(acount).child("checkbox3").set("1");       
        else                       
      ans_ref.child(acount).child("checkbox3").set("0");
        

           if(checkbox4.checked)
      ans_ref.child(acount).child("checkbox4").set("1");        
        else        
      ans_ref.child(acount).child("checkbox4").set("0"); 

    ans_ref.child(acount).child("marks").set(mark);

      acount=acount+1; 

      checkbox1.checked=false;
      checkbox2.checked=false;
      checkbox3.checked=false;
      checkbox4.checked=false; 

}



  function submit(){
  if(count<(n1))
  {
    count=count+1;
    mark=1;
    submit_q(mark);
    if(count<(n1))
    {
    displayQuestion();
    }
    if(count==n1)
    {
      display2q();
    }
  }
  else if(count>=(n1) && count<(n1+n2))
  {
    mark=2;
    count=count+1;
    submit_q(mark);
    if(count<(n1+n2))
    display2q();
  if(count==(n1+n2))
  {
    display3q();
  }
  }

  else if(count>=(n1+n2) && count<(n1+n2+n3))
  {
    mark=3;
    count=count+1;
    submit_q(mark);
    if(count<(n1+n2+n3))
    {
      display3q();
    }
    if(count==(n1+n2+n3))
    {
      display4q();
    }
  }

  else if(count>=(n1+n2+n3) && count<(n1+n2+n3+n4))
  {
    mark=4;
    submit_q(mark);
    count=count+1;
    if(count<(n1+n2+n3+n4))
  {
    display4q();
  }
  if(count==(n1+n2+n3+n4))
  {
    display5q();
  }
  }

  else if(count>=(n1+n2+n3+n4) && count<(n1+n2+n3+n4+n5))
  {
    mark=5;
    submit_q(mark);
    count=count+1;
    if(count<(n1+n2+n3+n4+n5))
    {
    display5q();
    } 
  
  if(count==(n1+n2+n3+n4+n5))
  {
  count=count+1;
  var conf = confirm( "Do you want to submit the paper?" );

  if(conf)
  {
    window.location.href="/result"; 
  }
  //show a alert message
  }
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
            n=0;
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