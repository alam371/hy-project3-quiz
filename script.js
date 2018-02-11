
const myApp = {};

    myApp.text = function (tally) {
        // This function is evaluating what response to give the user.
        if (tally >= 5 && tally <= 9) {
            $('.word').text(`Go to bed! Don't even think about eating!`);
        } else if (tally > 9 && tally <= 15) {
            $('.word').text(`You can eat half of everything in this quiz! `);
        } else if (tally > 15 && tally <= 20) {
            $('.word').text(`You're super hangry. You must of had a wild night! Eat everything in sight! Also, check if you just got a tattoo!!`);
        }
        $('.finalResult').show();
    }

    myApp.restartSubmit = function (e){
        e.preventDefault();
        // This function resets all forms. 
        // console.log($('form'));
        $('form').each(function(index){
            // console.log(this);
            this.reset();
        });
        // Then gives formOne active class.
        $('.active').removeClass('active');
        // Then shows startPage.
        $('.startPage').addClass('active');
        // Then hide .finalResult section.
        $('.finalResult').hide();

    }


    myApp.handleClick = function (e){
        e.preventDefault();
        // This function takes the user from one form to the next.
        $('.active')
            .removeClass('active')
            .next('section')
            .addClass('active');
    }

    myApp.handleSubmit = function (e) {
        e.preventDefault();
        // This function takes all the value and gives one final number.
        let tally = 0;
        $('input:checked').each(function() {
            tally = tally + Number($(this).val());
        });
        if ($(this).attr('id') === 'finalResult'){
            myApp.text(tally);   
        }
    }

    myApp.setupEventHandlers = function(){
        // when .nextButton is clicked, it passes myApp.handleClick.
        $('.nextButton').click(myApp.handleClick);
        // when form is clicked, submit passes myApp.handleSubmit.
        $('form').on('submit', myApp.handleSubmit);
        // when .playAgain is clicked, it passes myApp.restartSubmit.
        $('.playAgain').on('click', myApp.restartSubmit);
    }
    

    myApp.init = function(){
        // This function initiate all the functions.
        myApp.setupEventHandlers();
    }

// Get the document fired up!
$(function () {
    myApp.init();
});
