var request = require('superagent');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/subscribe', (req, res) => {

    request.post('https://<SERVER>.api.mailchimp.com/3.0/lists/<LIST_ID>/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set("Authorization", 'API_KEY')
        .send({
            "email_address": req.body.email,
            "status": "subscribed",
            "merge_fields": {
                FNAME: req.body.FNAME,
                LNAME: req.body.LNAME,
                GENDER: req.body.GENDER,
                PHONE: req.body.PHONE,
                LOCATED: req.body.LOCATED,
                Q1: req.body.Q1,
                A1: req.body.A1,
                ICON1: req.body.ICON1,
                Q2: req.body.Q2,
                A2: req.body.A2,
                ICON2: req.body.ICON2,
                Q3: req.body.Q3,
                A3: req.body.A3,
                ICON3: req.body.ICON3,
                Q4: req.body.Q4,
                A4: req.body.A4,
                ICON4: req.body.ICON4,
                Q5: req.body.Q5,
                A5: req.body.A5,
                ICON5: req.body.ICON5,
                Q6: req.body.Q6,
                A6: req.body.A6,
                ICON6: req.body.ICON6,
                Q7: req.body.Q7,
                A7: req.body.A7,
                ICON7: req.body.ICON7,
                Q8: req.body.Q8,
                A8: req.body.A8,
                ICON8: req.body.ICON8
            }
        })
        .end(function (err, response) {
            if (response.status < 300) {
                res.send('Subscribed').status(200);

            } else if ((response.status === 400 && response.body.title === "Member Exists")) {
                UpdateSubscriber(req.body.email, req.body.FNAME, req.body.LNAME, req.body.GENDER, req.body.PHONE,
                    req.body.LOCATED, req.body.Q1, req.body.A1, req.body.ICON1,
                    req.body.Q2, req.body.A2, req.body.ICON2,
                    req.body.Q3, req.body.A3, req.body.ICON3,
                    req.body.Q4, req.body.A4, req.body.ICON4,
                    req.body.Q5, req.body.A5, req.body.ICON5,
                    req.body.Q6, req.body.A6, req.body.ICON6,
                    req.body.Q7, req.body.A7, req.body.ICON7,
                    req.body.Q8, req.body.A8, req.body.ICON8,
                    res)
            } else {
                res.send('Subscribe Failed :(').status(400);
            }
        });
})

function UpdateSubscriber(email, FNAME, LNAME, GENDER, PHONE, LOCATED, Q1, A1, ICON1, Q2, A2, ICON2, Q3, A3, ICON3, Q4, A4, ICON4, Q5, A5, ICON5, Q6, A6, ICON6, Q7, A7, ICON7, Q8, A8, ICON8, res) {
    request.patch(`https://<SERVER>.api.mailchimp.com/3.0/lists/<LIST_ID>/members/${email}`)
        .set('Content-Type', 'application/json;charset=utf-8')
        .set("Authorization", 'API_KEY')
        .send({
            "status": "subscribed",
            "merge_fields": {
                FNAME,
                LNAME,
                GENDER,
                PHONE,
                LOCATED,
                Q1,
                A1,
                ICON1,
                Q2,
                A2,
                ICON2,
                Q3,
                A3,
                ICON3,
                Q4,
                A4,
                ICON4,
                Q5,
                A5,
                ICON5,
                Q6,
                A6,
                ICON6,
                Q7,
                A7,
                ICON7,
                Q8,
                A8,
                ICON8
            }
        })
        .end(function (err, response) {
            if (response.status < 300) {
                res.send('Updated').status(200);
            } else {
                res.send('Update Failed :(').status(400);
            }
        })
}


app.listen(process.env.PORT || 8000, () => {
    console.log('app is running ');

})
