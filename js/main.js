function slidepiece() {
    if (start == 1) {
        var evt = window.event
        var target = evt.target.id
        var trgbg = document.getElementById(target).getAttribute("background")
        var placeholder = ''
        var xaxis = 0;
        var yaxis = 0;
        var mobxaxis = 0;
        var mobyaxis = 0;
        var attack = 5;
        var pos1 = 0;
        var pos2 = 0;
        for (x = 0; x < 4; x++) {
            for (y = 0; y < 4; y++) {
                placeholder = document.getElementById("0" + x + "0" + y).getAttribute("background")
                if (placeholder == trgbg) {
                    xaxis = x
                    yaxis = y
                }
                if (placeholder == "../img/monks_16.jpg") {
                    mobxaxis = x
                    mobyaxis = y
                }
            }
        }
        pos1 = mobxaxis - xaxis
        pos2 = mobyaxis - yaxis
        if (pos1 < 2 && pos1 > 0 && document.getElementById("0" + (xaxis + 1) + "0" + yaxis).getAttribute("background") == "../img/monks_16.jpg") {
            document.getElementById("0" + xaxis + "0" + yaxis).setAttribute("background", "../img/monks_16.jpg")
            document.getElementById("0" + mobxaxis + "0" + mobyaxis).setAttribute("background", trgbg)
            //up
            mc++
        } if (pos1 < 0 && pos1 > -2 && document.getElementById("0" + (xaxis - 1) + "0" + yaxis).getAttribute("background") == "../img/monks_16.jpg") {
            document.getElementById("0" + xaxis + "0" + yaxis).setAttribute("background", "../img/monks_16.jpg")
            document.getElementById("0" + mobxaxis + "0" + mobyaxis).setAttribute("background", trgbg)
            //'down');
            mc++
        } if (pos2 < 2 && pos2 > 0 && document.getElementById("0" + xaxis + "0" + (yaxis + 1)).getAttribute("background") == "../img/monks_16.jpg") {

            document.getElementById("0" + xaxis + "0" + yaxis).setAttribute("background", "../img/monks_16.jpg")
            document.getElementById("0" + mobxaxis + "0" + mobyaxis).setAttribute("background", trgbg)
            //'left');
            mc++
        }
        if (pos2 < 0 && pos2 > -2 && document.getElementById("0" + xaxis + "0" + (yaxis - 1)).getAttribute("background") == "../img/monks_16.jpg") {
            document.getElementById("0" + xaxis + "0" + yaxis).setAttribute("background", "../img/monks_16.jpg")
            document.getElementById("0" + mobxaxis + "0" + mobyaxis).setAttribute("background", trgbg)
            //right
            mc++
        }
        gamechk()
        updatemc()
    }
    else {
        alert('Please press scramble');
    }
}
function gamechk() {
    var boredchk = [];
    var count = 0;
    var wc = 0;
    for (x = 0; x < 4; x++) {
        for (y = 0; y < 4; y++) {
            boredchk[count] = document.getElementById("0" + x + "0" + y).getAttribute("background")
            count++
        }
    }
    for (x = 0; x < 16; x++) {
        switch (x) {
            case 0:
                if (boredchk[x] == "../img/monks_01.jpg") {
                    wc++
                }
                break;
            case 1:
                if (boredchk[x] == "../img/monks_02.jpg") {
                    wc++
                }
                break;
            case 2:
                if (boredchk[x] == "../img/monks_03.jpg") {
                    wc++
                }
                break;
            case 3:
                if (boredchk[x] == "../img/monks_04.jpg") {
                    wc++
                }
                break;
            case 4:
                if (boredchk[x] == "../img/monks_05.jpg") {
                    wc++
                }
                break;
            case 5:
                if (boredchk[x] == "../img/monks_06.jpg") {
                    wc++
                }
                break;
            case 6:
                if (boredchk[x] == "../img/monks_07.jpg") {
                    wc++
                }
                break;
            case 7:
                if (boredchk[x] == "../img/monks_08.jpg") {
                    wc++
                }
                break;
            case 8:
                if (boredchk[x] == "../img/monks_09.jpg") {
                    wc++
                }
                break;
            case 9:
                if (boredchk[x] == "../img/monks_10.jpg") {
                    wc++
                }
                break;
            case 10:
                if (boredchk[x] == "../img/monks_11.jpg") {
                    wc++
                }
                break;
            case 11:
                if (boredchk[x] == "../img/monks_12.jpg") {
                    wc++
                }
                break;
            case 12:
                if (boredchk[x] == "../img/monks_13.jpg") {
                    wc++
                }
                break;
            case 13:
                if (boredchk[x] == "../img/monks_14.jpg") {
                    wc++
                }
                break;
            case 14:
                if (boredchk[x] == "../img/monks_15.jpg") {
                    wc++
                }
                break;
            case 15:
                if (boredchk[x] == "../img/monks_16.jpg") {
                    wc++
                }
                break;

        }
    }
    if (wc == 16) {
        alert("winner! it took you " + mc + " move's to solve this puzzle!");
        document.getElementById("scramble").disabled = false;
        start = 0
        mc = 0
        posx = 3;
        posy = 3;
        pos2x = 3;
        pos2y = 3;
        updatemc()
    }
}
function updatemc() {
    document.getElementById("mc").value = mc
}
function scramble() {
    start = 1
    document.getElementById("scramble").disabled = true;
    for (x = 0; x < 500; x++) {
        var mn = Math.round(Math.random() * 100);
        if (mn < 26)//up
        {
            if (posx - 1 > (-1) && posx - 1 < 4) {
                targ = document.getElementById("0" + (posx - 1) + "0" + posy).getAttribute("background")
                document.getElementById("0" + (posx - 1) + "0" + posy).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posx--
                pos2x = posx
            } else {
                targ = document.getElementById("0" + (posx + 1) + "0" + posy).getAttribute("background")
                document.getElementById("0" + (posx + 1) + "0" + posy).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posx++
                pos2x = posx
            }
        }
        if (mn > 25 && mn < 51)//down
        {
            if (posx + 1 > (-1) && posx + 1 < 4) {
                targ = document.getElementById("0" + (posx + 1) + "0" + posy).getAttribute("background")
                document.getElementById("0" + (posx + 1) + "0" + posy).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posx++
                pos2x = posx
            } else {
                targ = document.getElementById("0" + (posx - 1) + "0" + posy).getAttribute("background")
                document.getElementById("0" + (posx - 1) + "0" + posy).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posx--
                pos2x = posx
            }

        }
        if (mn > 50 && mn < 76)//left +1
        {
            if (posy + 1 > (-1) && posy + 1 < 4) {
                targ = document.getElementById("0" + posx + "0" + (posy + 1)).getAttribute("background")
                document.getElementById("0" + posx + "0" + (posy + 1)).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posy++
                pos2y = posy
            } else {
                targ = document.getElementById("0" + posx + "0" + (posy - 1)).getAttribute("background")
                document.getElementById("0" + posx + "0" + (posy - 1)).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posy--
                pos2y = posy
            }

        }
        if (mn > 75 && mn < 101)//right -1
        {
            if (posy - 1 > (-1) && posy - 1 < 4) {
                targ = document.getElementById("0" + posx + "0" + (posy - 1)).getAttribute("background")
                document.getElementById("0" + posx + "0" + (posy - 1)).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posy--
                pos2y = posy
            } else {
                targ = document.getElementById("0" + posx + "0" + (posy + 1)).getAttribute("background")
                document.getElementById("0" + posx + "0" + (posy + 1)).setAttribute("background", "../img/monks_16.jpg")
                document.getElementById("0" + pos2x + "0" + pos2y).setAttribute("background", targ)
                posy++
                pos2y = posy
            }

        }
    }
}
function reload(){
    location.reload();
}