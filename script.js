let milissegundos = 0;

let cronometro = null;

function pare() {
  clearInterval(cronometro);
  cronometro = null;
}

function inicie() {
  if (cronometro == null) {
    cronometro = setInterval(() => {
      milissegundos = milissegundos + 1;
      let segundos = Math.floor(milissegundos / 100);
      let minutos = Math.floor(segundos / 60);

      document.getElementById("milissegundos").innerHTML = milissegundos % 100;
      if (segundos > 9) {
        document.getElementById("segundos").innerHTML = segundos;
      } else {
        document.getElementById("segundos").innerHTML = "0" + segundos;
      }
      document.getElementById("minutos").innerHTML = minutos;
    }, 10);
  }
}

function resete() {
  milissegundos = 0;
  console.log(milissegundos);
  clearInterval(cronometro);
  cronometro = null;

  document.getElementById("milissegundos").innerHTML = "00";
  document.getElementById("segundos").innerHTML = "00";
  document.getElementById("minutos").innerHTML = "00";
}
