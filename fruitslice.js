var playing=false;
        var score;
        var trialeft;
        var step;
        var action; 
        var fruits=['apple','banana','cherry','grapes','pear','watermelon','mango','pineapple1','orange','peach'];
        $(function(){
            
          $("#start").click(function(){
              if(playing==true){
                  location.reload();
              }
              else{
                  playing=true;
                
                  score=0;
                  
                  $("#score").html(score)
                   $("#trialeft").show();
                   trialeft=3;
                   showtrialeft();
                   $("#gameover").hide();
                   $("#start").html("Reset game");
                   showAction();
              }
          });
          $("#fruit1").mouseover(function(){
            score++;
            $("#score").html(score);
            $("#slicesound")[0].play();
            clearInterval(action);
            $("#fruit1").hide("explode",500);
            setTimeout(showAction,800);
                  });
          function showtrialeft(){
              $("#trialeft").empty();
            for(i=0;i<trialeft;i++){
                       $("#trialeft").append('<img src="LogoMakr-3PzNrz.png" class="heart">');
                   } 
          }
          function showAction(){
              $("#fruit1").show();
              choosefruit();
              $("#fruit1").css({'left': Math.round(550*Math.random()),'top':-50});
              step=1+Math.round(5*Math.random());
              action =setInterval(function(){
                $("#fruit1").css('top',$("#fruit1").position().top+ step);
              
              if($("#fruit1").position().top >$("#fruitslicer").height())
              {
                  if(trialeft>1)
                  {
                    $("#fruit1").show();
                    choosefruit();
                   $("#fruit1").css({'left': Math.round(550*Math.random()),'top':-50});
                   step=1+Math.round(5*Math.random());
              
              trialeft--;
              showtrialeft();  
                  }
                  else{
                      playing=false;
                       $("#start").html("Start Game");
                       
                       $("#gameover").show();
                       $("#gameover").html('<p>Game over!</p><p>Your score is '+score+'.</p>');
                       $("#trialeft").hide();
                       closeInterval();
                  }
              }
            },10);
          }
          function choosefruit(){
              $("#fruit1").attr('src',fruits[Math.round(9*Math.random())] +'.png');
          }
          function closeInterval(){
              clearInterval(action);
              $("#fruit1").hide();
          }
        });