let pemain = "X";

document.getElementById("ket").innerHTML = "Player: " + pemain;

function klikTombol(x){
    document.getElementById("btn"+x+"D").style.transform = "perspective(600px)rotateY(-180deg)";
    document.getElementById("btn"+x+"B").style.transform = "perspective(600px)rotateY(0deg)";

    document.getElementById("btn"+x+"B").innerHTML = pemain;
    document.getElementById("btn"+x+"B").value = pemain;
    document.getElementById("btn"+x+"B").disabled = "disabled";
    if (pemain=="X"){
        document.getElementById("ket").innerHTML = "Player: O";
        cekMenang();
        pemain = "O";
    }else{
        document.getElementById("ket").innerHTML = "Player: X";
        cekMenang();
        pemain = "X";
    }
}

    function cekMenang(){
        if (document.getElementById("btn1B").value==pemain && document.getElementById("btn2B").value==pemain &&document.getElementById("btn3B").value==pemain){
            menang(1,2,3);
        }else if (document.getElementById("btn4B").value==pemain && document.getElementById("btn5B").value==pemain && document.getElementById("btn6B").value==pemain){
            menang(4,5,6);
        }else if (document.getElementById("btn7B").value==pemain && document.getElementById("btn8B").value==pemain && document.getElementById("btn9B").value==pemain){
            menang(7,8,9);
        }else if (document.getElementById("btn1B").value==pemain && document.getElementById("btn4B").value==pemain && document.getElementById("btn7B").value==pemain){
            menang(1,4,7);
        }else if (document.getElementById("btn2B").value==pemain && document.getElementById("btn5B").value==pemain && document.getElementById("btn8B").value==pemain){
            menang(2,5,8);
        }else if (document.getElementById("btn3B").value==pemain && document.getElementById("btn6B").value==pemain && document.getElementById("btn9B").value==pemain){
            menang(3,6,9);
        }else if (document.getElementById("btn1B").value==pemain && document.getElementById("btn5B").value==pemain && document.getElementById("btn9B").value==pemain){
            menang(1,5,9);
        }else if (document.getElementById("btn3B").value==pemain && document.getElementById("btn5B").value==pemain && document.getElementById("btn7B").value==pemain){
            menang(3,5,7);
        }
    }

    function menang(a,b,c){
        document.getElementById("ket").innerHTML = "Player " + pemain + " WIN!!!";
        for (let i = 1; i < 10; i++){
            document.getElementById("btn"+i+"D").disabled = "disabled";
        }
        
        let x = 1;
        function animasi(){
            if (x==1){
                document.getElementById("btn"+a+"B").style.background = "#a25959";
                document.getElementById("btn"+b+"B").style.background = "#925151";
                document.getElementById("btn"+c+"B").style.background = "#734040";
                x=2;
            } else if (x==2){
                document.getElementById("btn"+c+"B").style.background = "#a25959";
                document.getElementById("btn"+a+"B").style.background = "#925151";
                document.getElementById("btn"+b+"B").style.background = "#734040";
                x=3;
            } else if (x==3){
                document.getElementById("btn"+b+"B").style.background = "#a25959";
                document.getElementById("btn"+c+"B").style.background = "#925151";
                document.getElementById("btn"+a+"B").style.background = "#734040";
                x=1;
            }
        }
        setInterval(animasi,150);
    }