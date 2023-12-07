var nums = [5, 13, 16, 25, 9,
    1, 18, 22, 4, 19,
    24, 10, 15, 12, 2,
    3, 21, 11, 17, 6,
    8, 23, 20, 7, 14] // could be generated randomly every time the game is launched but it is constant for now
function appendnum() {
    var itag = document.getElementById("num");
    var mynum = parseInt(itag.value);
    colorit(mynum);
}

function colorit(itag2) {
    var btag = document.getElementsByClassName("gb");
    var ptag = document.getElementById("cnt");
    var ptag2 = document.getElementById("Mess");
    var count = parseInt(ptag.innerHTML);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == itag2) {
            if (btag[i].style.backgroundColor == "" || 
                btag[i].style.backgroundColor == "rgb(0, 0, 0)") {
                btag[i].style.backgroundColor = "rgb(113, 48, 48)"
                ptag.innerHTML = count + 1
                count += 1
                break;
            }
            else {
                ptag2.innerHTML = "Number already chosen";
                setTimeout(() => {
                    ptag2.innerHTML = "";
                }, "2000");
            }
        }
    }
    if (count >= 5 && count < 10) {
        winner();
    }
    else if (count > 10) {
        reset();
        count = 0;
        ptag.innerHTML = count;
    }
}

function winner() {
    var ptag = document.getElementById("Mess");
    var btag = document.getElementsByClassName("gb");
    var wonbyrow = 0;
    var wonbycol = 0;
    for (var i = 0; i < nums.length; i += 5) {
        if (btag[i].style.backgroundColor == "rgb(113, 48, 48)" &&
            btag[i + 1].style.backgroundColor == "rgb(113, 48, 48)" &&
            btag[i + 2].style.backgroundColor == "rgb(113, 48, 48)" &&
            btag[i + 3].style.backgroundColor == "rgb(113, 48, 48)" &&
            btag[i + 4].style.backgroundColor == "rgb(113, 48, 48)") {
            ptag.innerHTML = "Luckiely you won!";
            wonbyrow = 1;
            setTimeout(() => {
                reset();
                ptag.innerHTML = "";
            }, "2000");
        }
    }
    if (wonbyrow == 0) {
        for (var i = 0; i < 5; i++) {
            if (btag[i].style.backgroundColor == "rgb(113, 48, 48)" &&
                btag[i + 5].style.backgroundColor == "rgb(113, 48, 48)" &&
                btag[i + 10].style.backgroundColor == "rgb(113, 48, 48)" &&
                btag[i + 15].style.backgroundColor == "rgb(113, 48, 48)" &&
                btag[i + 20].style.backgroundColor == "rgb(113, 48, 48)") {
                ptag.innerHTML = "Luckiely you won!";
                wonbycol = 1;
                setTimeout(() => {
                    reset();
                    ptag.innerHTML = "";
                }, "2000");
            }
        }
    }
}

function reset() {
    var btag = document.getElementsByClassName("gb");
    var ptag = document.getElementById("cnt");
    for (var i = 0; i < btag.length; i++) {
        btag[i].style.backgroundColor = "000000"
    }
    ptag.innerHTML = "0";
}
