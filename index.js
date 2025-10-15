let express = require('express');
let app = express();

let books = {
    "data": [
        {
            title: "Lessons in Chemistry",
            author: "Bonnie Garmus",
            datePublished: "April 5, 2022"
        },
        {
            title: "The Butterfly Garden",
            author: "Dot Hutchison",
            datePublished: "June 1, 2016"
        },
        {
            title: "Cleopatra and Frankenstein",
            author: "Coco Mellors",
            datePublished: "February 8, 2022"
        },
        {
            title: "The Housemaid",
            author: "Freida McFadden",
            datePublished: "April 26, 2022"
        },
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            datePublished: "September 29, 2020"
        },
        {
            title: "Pineapple Street",
            author: "Jenny Jackson",
            datePublished: "March 7, 2023"
        },
        {
            title: "Tell Me Lies",
            author: "Carola Lovering",
            datePublished: "June 12, 2018"
        },
        {
            title: "Verity",
            author: "Colleen Hoover",
            datePublished: "October 5, 2021"
        },
        {
            title: "Carrie Soto Is Back",
            author: "Taylor Jenkins Reid",
            datePublished: "August 30, 2022"
        },
        {
            title: "Never Lie",
            author: "Freida McFadden",
            datePublished: "September 19, 2022"
        }
    ]
}

// app.get('/', (request,response) => {
//     response.send("Have a nice day");
// });

app.use('/', express.static('public'));

app.listen(3000,() => {
    console.log("App is listening at localhost:3000");
});

app.get('/data', (request,response) => {
    response.json(books);
});

app.get('/books/:sign', (request,response) => {
    console.log(request.params.sign);
    let user_sign = request.params.sign;
    let user_object;
    for(let i=0; i<books.data.length;i++){
        if(user_sign == books.data[i].title){
            user_object = books.data[i];
        }
    }
    console.log(user_object); //check it's working
    if(user_object){
        response.json(user_object);
    }else{
        response.json({status: "info not present"});
    }
});