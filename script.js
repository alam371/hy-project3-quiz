
const myApp = {};

    // myApp.answer = 0;

    myApp.text = function (tally) {
        if (tally >= 5 && tally <= 9) return 'cool';
        if (tally > 9 && tally <= 15) return 'fine';
        if (tally > 15 && tally <= 20) return 'notfine';
    }

    myApp.handleClick = function (e){
        e.preventDefault();
        $('.active')
            .removeClass('active')
            .next('section')
            .addClass('active');
    }

    myApp.handleSubmit = function (e) {
        e.preventDefault();
        let tally = 0;
        $('input:checked').each(function() {
            tally = tally + Number($(this).val());
        });
        const text = myApp.text(tally);
        console.log(text);
        $('.blah').text(text);
    }

    myApp.setupEventHandlers = function(){
        $('.nextButton').click(myApp.handleClick);
        $('form').on('submit', myApp.handleSubmit);
    }

    

    myApp.init = function(){
        myApp.setupEventHandlers();
    }

// Get the document fired up!
$(function () {
    myApp.init();
});
