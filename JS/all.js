// $(document).ready(function () {});

var tem_ch = document.querySelectorAll(".tem_ch_item");
var ch_item = document.querySelectorAll(".ch-ch");
var wrap = document.querySelectorAll(".tem_wrap");
for(let i = 0;i<tem_ch.length;i++){

    wrap[i].onmouseover = function(){
        var chcc =  tem_ch[i].getAttribute("data-inde");
        for(let j =0;j<ch_item.length;j++){
            
            ch_item[j].style.display="none";
        }
        
        
        ch_item[chcc].className = "ch-ch animate__animated animate__fadeIn";
        ch_item[chcc].style.display="block";
            
        }
    // tem_ch[i].mouseout = function(){
    //     var chcc =  tem_ch[i].getAttribute("data-inde");
    //     for(let j =0;j<ch_item.length;j++){

    //         ch_item[chcc].style.opacity="0";
    //     }
            
    //     }
    }

        // console.log(tem_ch[i].getAttribute("data-inde"));
        
    