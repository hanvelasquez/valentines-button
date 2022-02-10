function button() {
    var x;
    var a = confirm("YOUR PC HAS BEEN HACKED!");
    if (a==true)
      {
        var b = confirm("Your computer has been infected by a virus.");
        if (b==true) {
            var c = confirm("To avoid deletion of files, kindly answer these requests.");
            if (c==true) {
                var d = confirm("Will...");
                if (d==true) {
                    var e = confirm("you be...");
                    if (e==true) {
                        var f = confirm("my valentine? ^-^ <3");
                        if (f==true) {
                            var f = confirm("hehe thank you for answering! <3");
                            if (f==true || f==false) {
                                var g = confirm("CONGRATS! Your pc has been fixed");
                                if (g==true || g==false) {
                                    x = "I love you! :>";
                                }
                            }
                        } else {x="Wooooow ://";}
                    } else {x="Come on....";}
                } else {x="Let me finish my question. :/";}
            } else {x="You want your files to be gone?";}
        } else {x="I'm serious!!";}
      }
    else
      {
      x="Click the button again >:(";
      }
    document.getElementById("demo").innerHTML=x;
}