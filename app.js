// var loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, 
// magni minima. Molestias quidem quo, ea porro iure optio magnam, ipsum laboriosam 
// voluptas ut soluta incidunt debitis nostrum maiores fuga. Rerum, recusandae sunt 
// consequatur unde debitis mollitia. Omnis doloribus quia fugiat recusandae earum
//  eligendi beatae itaque nulla cum, quos eius deleniti, maxime veniam magnam! Eos 
//  assumenda aut dolorum nulla dignissimos consequuntur, doloremque quam laborum unde,
//   debitis modi nesciunt, at quaerat numquam reiciendis aliquam? Dolorem sit sequi et
//    voluptatibus quo delectus saepe, ipsa similique pariatur aliquid tempora quibusda
//    m impedit suscipit accusantium ab commodi quae, vel nostrum. Debitis pariatur ape
//    riam consequuntur explicabo quisquam.`
// function seeMore(parameter1) {
//    var para2 = document.getElementById("para2")
//    var seeBtn = parameter1
//    if (seeBtn.innerHTML == "see more"){
//       seeBtn.innerHTML = "see less"
//       para2.innerHTML = loremText
//    }
//    else {
//         seeBtn.innerHTML = "see more"
//         para2.innerHTML = "Lorem ipsum dolor sit amet."
//    }
// }

setInterval(()=>{
    const time =document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM"
    if(hours > 12){
        hours = hours - 12;
        day_night = "PM"
    }
    if(minutes < 10){
        minutes = "0" +minutes;
    }
    if(hours < 10){
        hours = "0" +hours;
    }
    if(seconds < 10){
        seconds = "0" +seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});


function buttonClick(){
    var name = document.getElementById("name")
    var phoneNumber = document.getElementById("phoneNumber")
    var email = document.getElementById("email")
    var message = document.getElementById("message")

    console.log(name.value)
    console.log(phoneNumber.value)
    console.log(email.value)
    console.log(message.value)

    if(!name.value || !phoneNumber.value || !email.value || !message.value){
        alert("Something is missing. Make Sure all fields must be filled out")
    }
   else{
    alert("SUBMIT")
   }

}
// SCORE BOARD
// ! = 22  RANK === 11 0.28 X
// D = 718 RANK === 06 X
// O = 773 RANK === 05 X
// C = 887 RANK === 04 X
// T = 1,101 RANK === 02 ( 43.71 / 30 ) = PASS ( 20.93 / 20 ) = PASS ( 11.08 / 10 ) = PASS 
// Y = 202 RANK === 10 X
// P = 644 RANK === 07 X
// E = 1,235 RANK === 01 ( 43.71 / 30 ) = PASS ( 23.47 / 20 ) = PASS ( 12.43 / 10 ) = PASS
// h = 532 RANK === 08 X
// t = not participate because of t is already in game ( RANK === 02 ) X
// m = 508 RANK === 09 X
// l = 974 RANK === 03 ( 43.71 / 30 ) = PASS  ( 18.51 / 20 ) = FAIL X
