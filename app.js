


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

    var min = document.querySelector('#min')
    min.innerHTML = numToString(min_)

    var second = document.querySelector('#sec')
    second.innerHTML = numToString(second_)
    // this is a simple comment

    function numToString(num) {

        if (num < 10) {
            return '0' + num
        }


        return num


    }





}, 1000)


// setInterval(() => {

//     var dots = document.querySelector(".dots")

//     dots.innerHTML.style.opacity = 0;


// }, 1000)
