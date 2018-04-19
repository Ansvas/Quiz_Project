

var keys_ans=[];
var ans;

  var config = {
    apiKey: "AIzaSyB-zPviDEmZeY_7xEdiRgR0FGv7WslsuLE",
    authDomain: "jwtproject-1aa76.firebaseapp.com",
    databaseURL: "https://jwtproject-1aa76.firebaseio.com",
    projectId: "jwtproject-1aa76",
    storageBucket: "jwtproject-1aa76.appspot.com",
    messagingSenderId: "1017119305086"
  };
  firebase.initializeApp(config);

        database = firebase.database();
        var ans_ref=database.ref("s1/Student_ans/16070124011/ds");

      ans_ref.on('value',gotData_ans,errData);


      function gotData_ans(data){
        console.log(data.val());
        //ques is an type of an array  of key of questions
         ans =data.val();
        //we store all the key with the data in keys array
        var keys_ans=Object.keys(ans);


        console.log(ans); 
             //   return ans;   
        }






//cal result function





    function cal_result()
    {


     console.log(ans);

     var keys_ans=Object.keys(ans);

     console.log("keys_ans Array"+ keys_ans);

      allq=allques();

      console.log("allq array"+ allq);

console.log("ques array");
      console.log(ques);


      for(i=0;i<n1;i++)
      {
        k=allq[i];
       var m=keys_ans[i];
        if(
        (ans[m].checkbox1==ques[k].checkbox1)&&
        (ans[m].checkbox2==ques[k].checkbox2)&&
        (ans[m].checkbox3==ques[k].checkbox3)&&
        (ans[m].checkbox4==ques[k].checkbox4))
        {
          mark=ans[m].marks;
          total_mark=mark+total_mark;
        }
      }

            for(i=n1;i<(n1+n2);i++)
      {
        k=allq[i];
        m=keys_ans[i];
        if(
        (ans[m].checkbox1==ques2[k].checkbox1)&&
        (ans[m].checkbox2==ques2[k].checkbox2)&&
        (ans[m].checkbox3==ques2[k].checkbox3)&&
        (ans[m].checkbox4==ques2[k].checkbox4))
        {
          mark=ans[m].marks;
          total_mark=mark+total_mark;
        }
      }

            for(i=(n1+n2);i<(n1+n2+n3);i++)
      {
        k=allq[i];
        m=keys_ans[i];
        if(
        (ans[m].checkbox1==ques3[k].checkbox1)&&
        (ans[m].checkbox2==ques3[k].checkbox2)&&
        (ans[m].checkbox3==ques3[k].checkbox3)&&
        (ans[m].checkbox4==ques3[k].checkbox4))
        {
          mark=ans[m].marks;
          total_mark=mark+total_mark;
        }
      }

            for(i=(n1+n2+n3);i<(n1+n2+n3+n4);i++)
      {
        k=allq[i];
        m=keys_ans[i];
        if(
        (ans[m].checkbox1==ques4[k].checkbox1)&&
        (ans[m].checkbox2==ques4[k].checkbox2)&&
        (ans[m].checkbox3==ques4[k].checkbox3)&&
        (ans[m].checkbox4==ques4[k].checkbox4))
        {
          mark=ans[m].marks;
          total_mark=mark+total_mark;
        }
      }

              for(i=(n1+n2+n3+n4);i<(n1+n2+n3+n4+n5);i++)
      {
        k=allq[i];
        m=keys_ans[i];
        if(
        (ans[m].checkbox1==ques5[k].checkbox1)&&
        (ans[m].checkbox2==ques5[k].checkbox2)&&
        (ans[m].checkbox3==ques5[k].checkbox3)&&
        (ans[m].checkbox4==ques5[k].checkbox4))
        {
          mark=ans[m].marks;
          total_mark=mark+total_mark;
        }
      }
      console.log(total_mark);
      return total_mark;

    }