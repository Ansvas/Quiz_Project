  

var option1text=document.getElementById('option1text');
var option2text=document.getElementById('option2text');
var option3text=document.getElementById('option3text');
var option4text=document.getElementById('option4text');
var questiontext=document.getElementById('questiontext');

var count=0;
var ques;
var ranarr;


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
 

        //var ques =data.val();

      //var refoption1=questionRef.child('option1');
      questionRefr.on('value',gotData,errData);

      



      function gotData(data){
        console.log(data.val());

        //ques is an type of an array  of key of questions
         ques =data.val();

        //we store all the key with the data in keys array
        var keys=Object.keys(ques);
         ranarr=getRandom(keys,5);
        console.log(ranarr);

        for(var i=0;i<ranarr.length;i++)
        {
          //store the value of key in k
          var k=ranarr[i];
          var option1=ques[k].option1;
          var option2=ques[k].option2;
          var option3=ques[k].option3;
          var option4=ques[k].option4;
          var q=ques[k].question;
          //displayQuestion(option1,option2,option3,option4,q);
          console.log(option1,option2,option3,option4,q);
        }


        //for first time diaplaying the data on the web page  



          k=ranarr[count];
          count++;
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

//end of displaying first question

      }

      //end of gotData function










        //for first time diaplaying the data on the web page  

 

//end of displaying first question















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

function displayQuestion(option1,option2,option3,option4,q)
{
  document.getElementById("option1text").innerText=option1;
  document.getElementById("option2text").innerText=option2;
  document.getElementById("option3text").innerText=option3;
  document.getElementById("option4text").innerText=option4;
  document.getElementById("questiontext").innerText=q;

}

  function submit(){
  //submit student reponse to firebase

        var k=ranarr[count];
        var doption1=ques[k].option1;
          var doption2=ques[k].option2;
          var doption3=ques[k].option3;
          var doption4=ques[k].option4;
          var dq=ques[k].question;
          count=count+1;
          displayQuestion(doption1,doption2,doption3,doption4,dq);
}