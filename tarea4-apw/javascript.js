function realizarOperacion() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números que sean válidos");
      return;
    }
    
    var resultado = "";
    
    for (var i = 1; i <= 5; i++) {
      switch (i) {
        case 1:
          resultado += "Suma: " + (num1 + num2) + "<br><br>";
          break;
        case 2:
          resultado += "Resta: " + (num1 - num2) + "<br><br>";
          break;
        case 3:
          resultado += "Multiplicación: " + (num1 * num2) + "<br><br>";
          break;
        case 4:
          resultado += "División: " + (num1 / num2) + "<br><br>";
          break;
        case 5:
          resultado += "Módulo-Residuo: " + (num1 % num2) + "<br>";
          break;
      }
    }
    
    document.getElementById("resultado").innerHTML = resultado;
  }