


setInterval(() => {

    const d = new Date();

    let hour_ = d.getHours();
    let min_ = d.getMinutes();
    let second_ = d.getSeconds();


    var hour = document.querySelector('#hour')




    if (hour_ > 12) {
        hour.innerHTML = numToString(hour_ - 12)
    }
    else {
        hour.innerHTML = numToString(hour_)
    }



    function numToString(num) {
        if (num < 10) {
            return '0' + num
        }
    }



    var min = document.querySelector('#min')
    min.innerHTML = numToString(min_)

    var second = document.querySelector('#second')
    second.innerHTML = numToString(second_)
    // this is a simple comment


}, 1000)

