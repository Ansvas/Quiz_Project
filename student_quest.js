  
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
 



      //var refoption1=questionRef.child('option1');
      questionRefr.on('value',gotData,errData);

      function gotData(data){
        console.log(data.val());

        //ques is an type of an array  of key of questions
        var ques =data.val();

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
          console.log(option1,option2,option3,option4,q);
        }

      }

      //end of gotData function

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


//end of random function