(function() {
  // setup
  let canvas = backgroundCanvas;
  let c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // hexagon facts
  let hexHeight = 150;
  const hexWidth = (hexHeight * Math.sqrt(3)) / 2;
  const hexAngleDegrees = 30;
  const hexAngle = (hexAngleDegrees * Math.PI) / 180;
  const hexSideLength = hexHeight / 2;
  const hexRadius = Math.cos(hexAngle) * hexSideLength;

  // hexagon
  function Hexagon(height, x, y) {
    this.radius = 0;
    this.x = x;
    this.y = y;

    this.draw = function() {
      c.beginPath();
      c.moveTo(
        this.x + this.radius * Math.sin(0),
        this.y + this.radius * Math.cos(0)
      );
      for (var side = 0; side < 7; side++) {
        c.lineTo(
          x + this.radius * Math.sin((side * 2 * Math.PI) / 6),
          y + this.radius * Math.cos((side * 2 * Math.PI) / 6)
        );
      }
      c.strokeStyle = "#b60011";
      c.strokeStyle = "red";
      c.fillStyle = "#b60011";
      c.stroke();
      c.fill();
    };

    this.update = function() {
      // get the distance from delayed pointer
      const a = pointer.delayed.x - this.x;
      const b = pointer.delayed.y - this.y;
      const dist = Math.sqrt(a * a + b * b);

      // interactivity
      const spotlightRadius = 300;
      const maxHexRadius = hexHeight;
      if (dist <= spotlightRadius) {
        c.globalAlpha = 1 - dist / spotlightRadius;
        this.radius = maxHexRadius - (dist / spotlightRadius) * maxHexRadius;
      } else {
        c.globalAlpha = 0;
        this.radius = 0;
      }

      this.draw();
    };
  }

  // grid of hexagons
  let hexArr = [];
  function drawGrid() {
    const gridCellWidth = hexWidth;
    const gridCellHeight = hexHeight - (hexHeight - hexSideLength) / 2;
    const cols = Math.floor(canvas.width / gridCellWidth) + 2;
    const rows = Math.floor(canvas.height / gridCellHeight + 2);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * hexWidth + (j % 2) * hexRadius;
        const y = j * (hexSideLength + hexSideLength / 2);
        hexArr.push(new Hexagon(hexHeight, x, y));
      }
    }
  }
  drawGrid();

  // mouse pointer tracking
  var mouse = {
    x: canvas.width,
    y: canvas.height
  };

  window.addEventListener("mousemove", function(e) {
    mouse.x = e.clientX-backgroundCanvas.getBoundingClientRect().left;
    mouse.y = e.clientY-backgroundCanvas.getBoundingClientRect().top;
  });

  function Pointer(x, y) {
    this.x = x;
    this.y = y;
    this.delayed = { x: x, y: y };

    this.draw = function() {
      c.beginPath();
      c.arc(this.delayed.x, this.delayed.y, 5, 0, Math.PI * 2, false);
      // c.fillStyle = "dodgerblue";
      // c.fill();
    };

    this.update = function() {
      this.delayed.x += (mouse.x - this.delayed.x) * 0.04;
      this.delayed.y += (mouse.y - this.delayed.y) * 0.04;
      this.draw();
    };
  }
  const pointer = new Pointer(mouse.x, mouse.y);

  // canvas animation frames
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < hexArr.length; i++) {
      hexArr[i].update();
    }

    pointer.update();
  }
  animate();
})();
