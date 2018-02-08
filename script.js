
const myApp = {};

    myApp.answers = [
        {ansOne: 0},
        {ansTwo: 0},
        {ansThree: 0},
        {ansFour: 0},
    ]

    myApp.userSubmitEvents = function(){
        $('.headerButton').on('click', function(e){
            e.preventDefault();
            let fadeOutHomePage = function(){
                $('.headerButton').fadeOut('.headerText')
            }
        })
    }

    myApp.userInputEvents = function(){
        $('form.formOne').on('submit', function(e){
            e.preventDefault();
            let collectInput = $('input[name=marmite]:checked').val();

            if (collectInput === 'valOne') {
                myApp.answers.ansOne = myApp.answers.ansOne + 4;
            } else if (collectInput === 'valTwo') {
                myApp.answers.ansTwo = myApp.answers.ansTwo + 3;
            } else if (collectInput === 'valThree') {
                myApp.answers.ansThree = myApp.answers.ansThree + 2;
            } else if (collectInput === 'valFour') {
                myApp.answers.ansFour = myApp.answers.ansFour + 1;
            }
         });

         $('form.formTwo').on('submit', function(e){
             e.preventDefault();
             let collectInput = $('input[name=hot]:checked').val();

             if (collectInput === 'valOne') {
                 myApp.answers.ansOne = myApp.answers.ansOne + 4;
             } else if (collectInput === 'valTwo') {
                 myApp.answers.ansTwo = myApp.answers.ansTwo + 3;
             } else if (collectInput === 'valThree') {
                 myApp.answers.ansThree = myApp.answers.ansThree + 2;
             } else if (collectInput === 'valFour') {
                 myApp.answers.ansFour = myApp.answers.ansFour + 1;
             }
    
         })

         $('form.formThree').on('submit', function(e){ 
             e.preventDefault();
             let collectInput = $('input[name=butter]:checked').val();
             
             if (collectInput === 'valOne') {
                 myApp.answers.ansOne = myApp.answers.ansOne + 4;
             } else if (collectInput === 'valTwo') {
                 myApp.answers.ansTwo = myApp.answers.ansTwo + 3;
             } else if (collectInput === 'valThree') {
                 myApp.answers.ansThree = myApp.answers.ansThree + 2;
             } else if (collectInput === 'valFour') {
                 myApp.answers.ansFour = myApp.answers.ansFour + 1;
             }
         })

        $('form.formFour').on('submit', function (e) {
            e.preventDefault();
            let collectInput = $('input[name=wasabi]:checked').val();

            if (collectInput === 'valOne') {
                myApp.answers.ansOne = myApp.answers.ansOne + 4;
            } else if (collectInput === 'valTwo') {
                myApp.answers.ansTwo = myApp.answers.ansTwo + 3;
            } else if (collectInput === 'valThree') {
                myApp.answers.ansThree = myApp.answers.ansThree + 2;
            } else if (collectInput === 'valFour') {
                myApp.answers.ansFour = myApp.answers.ansFour + 1;
            }
        })

        $('form.formFive').on('submit', function (e) {
            e.preventDefault();
            let collectInput = $('input[name=choco]:checked').val();

            if (collectInput === 'valOne') {
                myApp.answers.ansOne = myApp.answers.ansOne + 4;
            } else if (collectInput === 'valTwo') {
                myApp.answers.ansTwo = myApp.answers.ansTwo + 3;
            } else if (collectInput === 'valThree') {
                myApp.answers.ansThree = myApp.answers.ansThree + 2;
            } else if (collectInput === 'valFour') {
                myApp.answers.ansFour = myApp.answers.ansFour + 1;
            }
        })

        // console.log(collectInput);
        // console.log(myApp.answers);
    }

    .myApp.eventFadeIn = function(){
        $('form.formOne').ready(function () {
            $("button").click(function () {
                $(".mainContainerOne").fadeIn("slow");
            });
        });
    }

    myApp.finalResult = function(){
        let finalArrayNum = [myApp.answers];
        for (let i = 0; i < my.App.answers.length; i = i + 1){
            if (myApp.answers > 5 || myApp.answers <= 9){
                console.log(${});
            } else {
                (myApp.answers > 9 || myApp.answers <= 15){
                    console.log(${});
                }
            } else {
                (myApp.answers > 15 || myApp.answers <= 20){
                    console.log(${});
                }
            }
        }
    }

    myApp.init = function(){
        myApp.userSubmitEvents();
        myApp.userInputEvents();
    }

// Get the document fired up!
$(function () {
    myApp.init();
});
