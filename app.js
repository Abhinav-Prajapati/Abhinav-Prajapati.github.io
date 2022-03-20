


setInterval(() => {

    const d = new Date();

    let hour_ = d.getHours();
    let min_ = d.getMinutes();
    let second_ = d.getSeconds();


    var hour = document.querySelector('#hour')

    if (hour_ > 12) {
        hour.innerHTML = hour_ - 12
    }
    else {
        hour.innerHTML = hour_
    }


    var min = document.querySelector('#min')
    min.innerHTML = min_

    var second = document.querySelector('#second')
    second.innerHTML = second_



}, 1000)

