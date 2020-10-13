<canvas id="clock"

  width="400"
  height="400"
  style="width: 28%; border: 2px black solid; background-color:#f1f1f1;">
</canvas>

<script>
  var canvas = document.getElementById("clock");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90;
  drawClock();

  function drawClock() {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }



  function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white"
    ctx.fill();

    grad = ctx.radialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05 );
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, '#fff');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius *0.1, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
  }
</script>