   
var checkbox1;
var checkbox2;
var checkbox3;
var checkbox4; 
var questionRef;
var checkbox;
var abc='unknown';
var count1;
var count2;
var count3;
var count4;
var count5;
var questionRef1;
var total_q_1 = 'total_q_1';
var total_q_2 = 'total_q_2';
var total_q_3 = 'total_q_3';
var total_q_4 = 'total_q_4';
var total_q_5 = 'total_q_5';

var teacher_name=localStorage.getItem("Teacher_name");
console.log(teacher_name);
var subj_name=localStorage.getItem("subject_name");
console.log(subj_name);
var marks_name=localStorage.getItem("marks_name");
console.log(marks_name);



      (function () {
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded',submitclick, false);
    } else {
        window.attachEvent('onload', submitclick);
    }
} ());




  var checkbox1=document.getElementById('checkbox1');
  var checkbox2=document.getElementById('checkbox2');
  var checkbox3=document.getElementById('checkbox3');
  var checkbox4=document.getElementById('checkbox4');
  var cbmark1=document.getElementById('cbmark1');
  var cbmark2=document.getElementById('cbmark2');
  var cbmark3=document.getElementById('cbmark3');
  var cbmark4=document.getElementById('cbmark4');
  var cbmark5=document.getElementById('cbmark5');



//firebase initialization

  var config = {
    apiKey: "AIzaSyB-zPviDEmZeY_7xEdiRgR0FGv7WslsuLE",
    authDomain: "jwtproject-1aa76.firebaseapp.com",
    databaseURL: "https://jwtproject-1aa76.firebaseio.com",
    projectId: "jwtproject-1aa76",
    storageBucket: "jwtproject-1aa76.appspot.com",
    messagingSenderId: "1017119305086"
  };
  firebase.initializeApp(config);



//retriving value of count1





      var firebaseRef =firebase.database().ref();
      var database=firebase.database();

          quesRef=`/Teachers/${teacher_name}/${subj_name}/Questions/${marks_name}`
          quesRef1=`/Teachers/${teacher_name}/${subj_name}/Questions/1_marks`
          quesRef2=`/Teachers/${teacher_name}/${subj_name}/Questions/2_marks`
          quesRef3=`/Teachers/${teacher_name}/${subj_name}/Questions/3_marks`
          quesRef4=`/Teachers/${teacher_name}/${subj_name}/Questions/4_marks`
          quesRef5=`/Teachers/${teacher_name}/${subj_name}/Questions/5_marks`
 //         Question_mark_Ref =database.ref(quesRef); 

      if(marks_name==1_marks)
      document.getElementById("cbmark1").checked = true;
      if(marks_name==2_marks)
      document.getElementById("cbmark2").checked = true;
      if(marks_name==3_marks)
      document.getElementById("cbmark3").checked = true;
      if(marks_name==4_marks)
      document.getElementById("cbmark4").checked = true;
      if(marks_name==5_marks)
      document.getElementById("cbmark5").checked = true;


     var questionRef =database.ref(quesRef);
     var questionRef1 =database.ref(quesRef1);
     var questionRef2 =database.ref(quesRef2);
     var questionRef3 =database.ref(quesRef3);
     var questionRef4 =database.ref(quesRef4);
     var questionRef5 =database.ref(quesRef5);


     var count1Ref = firebaseRef.child("total_q_1");
     var count2Ref = firebaseRef.child("total_q_2");
     var count3Ref = firebaseRef.child("total_q_3");
     var count4Ref = firebaseRef.child("total_q_4");
     var count5Ref = firebaseRef.child("total_q_5"); 


count1Ref.on('value', function(snapshot) {

count1=snapshot.val();
  console.log(snapshot.val());
});

count2Ref.on('value', function(snapsho) {

count2=snapsho.val();
  console.log(snapsho.val());
});

count3Ref.on('value', function(snapsh) {

count3=snapsh.val();
  console.log(snapsh.val());
});


count4Ref.on('value', function(snaps) {

count4=snaps.val();
  console.log(snaps.val());
});


count5Ref.on('value', function(snap) {

count5=snap.val();
  console.log(snap.val());
});



//submit click function

    function submitclick(){
     var firebaseRef =firebase.database().ref();
//       questionRef =firebaseRef.child("Teachers/pooja/s1/Questions").push();



//     var questionRef1 =firebaseRef.child("Teachers/pooja/s1/Questions/1_marks");
//     var questionRef2 =firebaseRef.child("Teachers/pooja/s1/Questions/2_marks");
//     var questionRef3 =firebaseRef.child("Teachers/pooja/s1/Questions/3_marks");
//     var questionRef4 =firebaseRef.child("Teachers/pooja/s1/Questions/4_marks");
//     var questionRef5 =firebaseRef.child("Teachers/pooja/s1/Questions/5_marks");        
 
 
                        //setting values acc to marks


                        if(cbmark1.checked)
                        {
                          settingvalues(cbmark1,questionRef1,count1,total_q_1);
                        }

                        if(cbmark2.checked)
                        {
                          settingvalues(cbmark2,questionRef2,count2,total_q_2);
                        }
                        if(cbmark3.checked)
                        {
                          settingvalues(cbmark3,questionRef3,count3,total_q_3);
                        }
                        if(cbmark4.checked)
                        {
                          settingvalues(cbmark4,questionRef4,count4,total_q_4);
                        }
                        if(cbmark5.checked)
                        {
                          settingvalues(cbmark5,questionRef5,count5,total_q_5);
                        }

 
}


function settingvalues(cbmark,questionRef,count,total_q)
{

    var question=document.getElementById('tquestion').value;
        var option1=document.getElementById('toption1').value;
            var option2=document.getElementById('toption2').value;
                var option3=document.getElementById('toption3').value;
                    var option4=document.getElementById('toption4').value;  


                        if(cbmark.checked)
                        {

                          questionRef.child(count).set({
                          question:question,
                          option1:option1,
                          option2:option2,
                          option3:option3,
                          option4:option4
                        })


      if(checkbox1.checked)
      questionRef.child(count).child("checkbox1").set("1");    
      else
      questionRef.child(count).child("checkbox1").set("0"); 
      


          if(checkbox2.checked)
      questionRef.child(count).child("checkbox2").set("1");
        else               
      questionRef.child(count).child("checkbox2").set("0");  


            if(checkbox3.checked)        
      questionRef.child(count).child("checkbox3").set("1");       
        else                       
      questionRef.child(count).child("checkbox3").set("0");
        

           if(checkbox4.checked)
      questionRef.child(count).child("checkbox4").set("1");        
        else        
      questionRef.child(count).child("checkbox4").set("0");    
        

      count=count+1;

      firebaseRef.update({
  [total_q]: count,
});
    }

      window.location.href="/faculty";

}

//end of the function