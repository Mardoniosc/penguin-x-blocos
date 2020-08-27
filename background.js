function SpriteMontanhas(x, y, largura, altura){
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

  this.desenha = function(xCanvas, yCanvas) {
    ctx.drawImage(bgImg, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
  }
}

var montanhas = new SpriteMontanhas(0, 0, 629, 490);