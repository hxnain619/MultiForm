var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var service_id = "default_service";
var template_id = "template_GCQ0zyFQ";
var user_id = "user_T7nqQHHfJaUOTMV0MfQ8e";

function AssignFunc() {

  $('.next').click(NEXT);
  $('.previous').click(PREV)
  $("#submit").click(SUBMIT)

}

function NEXT() {

  let index = $(this).parent().data("elem");

  if (ANSWERS.length !== 0 && ((typeof (index) == 'number' && ValidateAnswers(index, 'num')) || (typeof (index) == 'boolean' && (index == true)) || (typeof (index) == 'string' && ValidateLocation()))) {

    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    next_fs.show();
    current_fs.animate({
      opacity: 0
    }, {
      step: function (now, mx) {
        scale = 1 - (1 - now) * 0.2;
        left = now * 50 + "%";
        opacity = 1 - now;

        current_fs.css({
          'transform': 'scale(' + scale + ')',
          'position': 'absolute'
        });

        next_fs.css({
          'left': left,
          'opacity': opacity
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: 'easeInOutBack'
    });

  } else {
    Alert('Bitte beantworten Sie die folgende Frage.', '#960101')
  }
}

function PREV() {
  CheckAndMarkSelected();

  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  previous_fs.show();
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      scale = 0.8 + (1 - now) * 0.2;
      left = (1 - now) * 50 + "%";
      opacity = 1 - now;
      current_fs.css({
        'left': left
      });
      previous_fs.css({
        'transform': 'scale(' + scale + ')',
        'opacity': opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    easing: 'easeInOutBack'
  });

};

function SUBMIT() {
  let gender = $("input[name='gender']:checked").parent().text();
  let fNAme = $("input[name='fName']").val();
  let lNAme = $("input[name='lName']").val();
  let email = $("input[name='email']").val();
  let tel = $("input[name='tel']").val();
  let check = $('#check').is(':checked');
  let [Q1, A1, ICON1,
    Q2, A2, ICON2,
    Q3, A3, ICON3,
    Q4, A4, ICON4,
    Q5, A5, ICON5,
    Q6, A6, ICON6,
    Q7, A7, ICON7,
    Q8, A8, ICON8,
    LOCATED
  ] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

  if (fNAme.length !== 0 && lNAme.length !== 0 && email.length !== 0 && tel.length !== 0 && check == true) {
    ANSWERS.forEach((answer, index) => {

      if (ANSWERS.length == index + 1) {
        LOCATED = answer.title
      } else {
        if (index == 0) {
          Q1 = answer.question;
          A1 = answer.title;
          ICON1 = answer.icon
        } else if (index == 1) {
          Q2 = answer.question;
          A2 = answer.title;
          ICON2 = answer.icon
        } else if (index == 2) {
          Q3 = answer.question;
          A3 = answer.title;
          ICON3 = answer.icon
        } else if (index == 4) {
          Q4 = answer.question;
          A4 = answer.title;
          ICON4 = answer.icon
        } else if (index == 5) {
          Q5 = answer.question;
          A5 = answer.title;
          ICON5 = answer.icon
        } else if (index == 6) {
          Q6 = answer.question;
          A6 = answer.title;
          ICON6 = answer.icon
        } else if (index == 7) {
          Q7 = answer.question;
          A7 = answer.title;
          ICON7 = answer.icon
        } else if (index == 8) {
          Q8 = answer.question;
          A8 = answer.title;
          ICON8 = answer.icon
        }
      }

    })

    $('#msform').html(`<fieldset > <img src="https://cdn.dribbble.com/users/69182/screenshots/2151363/animated_loading__by__amiri.gif" style="max-width: 500px;" height="100%" width="100%" /> </fieldset>`)

    gender = $.trim(gender);

    var data = {
      service_id,
      template_id,
      user_id,
      template_params: {
        "reply_to": email,
        "from_name": email,
        "to_name": fNAme + " " + lNAme,
        "FNAME": fNAme,
        "LNAME": lNAme,
        "GENDER": gender,
        "PHONE": tel,
        "LOCATED": LOCATED,
        "Q1": Q1,
        "A1": A1,
        "ICON1": ICON1,
        "Q2": Q2,
        "A2": A2,
        "ICON2": ICON2,
        "Q3": Q3,
        "A3": A3,
        "ICON3": ICON3,
        "Q4": Q4,
        "A4": A4,
        "ICON4": ICON4,
        "Q5": Q5,
        "A5": A5,
        "ICON5": ICON5,
        "Q6": Q6,
        "A6": A6,
        "ICON6": ICON6,
        "Q7": Q7,
        "A7": A7,
        "ICON7": ICON7,
        "Q8": Q8,
        "A8": A8,
        "ICON8": ICON8
      }
    }

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      console.log('Your mail is sent!');
      // window.top.setTimeout(() => window.top.location.href = "https://wertermittlung.baierl-immobilien.de/danke-seite", 2000);
      document.getElementsByTagName("iframe")[0].contentWindow.postMessage('{message: "message"}', '*');
    }).fail(function (error) {
      console.log('Oops... ' + JSON.stringify(error));
      Alert('Netzwerkfehler aufgetreten', '#960101')
    });

  } else {
    Alert("Bitte vervollständigen Sie Ihre Angaben", '#960101')
  }

};
