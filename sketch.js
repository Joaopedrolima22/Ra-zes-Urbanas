function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent('canvas-container');
  noLoop();
}

function draw() {
  background(210, 245, 235);

  // Campo (lado esquerdo) — com relevo suave e vegetação
  noStroke();
  fill(87, 166, 57);
  rect(0, height / 2, width / 2, height / 2);

  // Solo do campo com colinas arredondadas
  fill(75, 140, 48);
  beginShape();
  vertex(0, height / 2 + 40);
  bezierVertex(100, height / 2 - 20, 200, height / 2 + 70, 300, height / 2 + 30);
  bezierVertex(350, height / 2 + 10, 400, height / 2 + 70, 400, height / 2 + 70);
  vertex(400, height);
  vertex(0, height);
  endShape(CLOSE);

  // Cidade (lado direito) — prédios com janelas
  fill(55, 70, 85);
  rect(width / 2, height / 2 - 120, width / 2, height / 2 + 120);

  // Janelas da cidade
  fill(255, 255, 200, 220);
  let baseX = width / 2 + 20;
  let baseY = height / 2 - 110;
  let windowW = 20;
  let windowH = 30;
  let gapX = 40;
  let gapY = 50;

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 6; x++) {
      rect(baseX + x * gapX, baseY + y * gapY, windowW, windowH, 3);
    }
  }

  // Sol no céu
  fill(255, 223, 0);
  ellipse(700, 80, 80, 80);

  // Casas no campo (lado esquerdo)
  fill(150, 111, 51);
  rect(120, height / 2 + 60, 80, 50, 8);
  rect(230, height / 2 + 85, 60, 35, 8);

  // Telhados
  fill(120, 70, 40);
  triangle(120, height / 2 + 60, 160, height / 2 + 20, 200, height / 2 + 60);
  triangle(230, height / 2 + 85, 260, height / 2 + 40, 290, height / 2 + 85);

  // Árvores
  fill(34, 139, 34);
  ellipse(60, height / 2 + 40, 70, 70);
  ellipse(350, height / 2 + 55, 90, 90);

  // Texto indicativo
  fill(30, 50, 30);
  textSize(20);
  textAlign(CENTER);
  text("Campo", width / 4, height / 2 + 30);
  text("Cidade", 3 * width / 4, height / 2 + 30);
}
