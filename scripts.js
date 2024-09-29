
let text;
let validateWord1 = "t1g2e".replace(/1/g, 'i').replace(/2/g, 'r');
let validateWord2 = "p3r4tt5".replace(/3/g, 'u').replace(/4/g, 'a').replace(/5/g, 'u');

  let image1 = prompt("Insira a resposta: ");
function formatAnswer(image1) {
    image1 = image1.trim();
    image1 = image1.toLowerCase();
}
formatAnswer(image1);
  if (image1 != (validateWord1.replace(/1/g, 'i').replace(/2/g, 'r'))) {
    if (confirm("Tem certeza?")) {
      window.open("redir.html", "_self");
      
    } else {
      window.open("redir.html", "_self");
    }
  } else {
    if (confirm("Tem certeza?")) {
        document.getElementById("sissy").src = "assets/A.png";
        const link1 = document.createElement('a1');
        link1.href = document.getElementById("sissy").src;
        link1.download = 'A.png';
        document.body.appendChild(link1);
        link1.click();
        document.body.removeChild(link1);
        setTimeout(function() {
          let image2 = prompt("Insira a outra resposta: ");
        formatAnswer(image2);
        if (image2 != (validateWord2.replace(/3/g, 'u').replace(/4/g, 'a').replace(/5/g, 'u'))) {
          if (confirm("Tem certeza?")) {
            window.open("redir.html", "_self");
          } else {
            window.open("redir.html", "_self");
          }
        } else {
          if (confirm("Tem certeza?")) {
              document.getElementById("yssis").src = "assets/A.png";
              const link2 = document.createElement('a1');
              link2.href = document.getElementById("yssis").src;
              link2.download = 'B.png';
              document.body.appendChild(link2);
              link2.click();
              document.body.removeChild(link2);
          }
          else {
            document.getElementById("sissy").src = "assets/bogos.jpg";
          }
        }
        }, 2000);
        

      } else {
        document.getElementById("sissy").src = "assets/bogos.jpg";
      }
  }