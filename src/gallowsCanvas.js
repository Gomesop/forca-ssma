// Gallows Canvas System: Renders Gallows Structure & Industrial Safety Operator Character Part-by-Part

export class GallowsCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  draw(errorCount = 0) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 0. Base Gallows & Frame Structure
    ctx.save();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#475569';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Base Stand
    ctx.beginPath();
    ctx.moveTo(20, 220);
    ctx.lineTo(120, 220);
    ctx.stroke();

    // Vertical Support Pillar
    ctx.beginPath();
    ctx.moveTo(60, 220);
    ctx.lineTo(60, 30);
    ctx.stroke();

    // Top Cross Beam
    ctx.beginPath();
    ctx.moveTo(57, 30);
    ctx.lineTo(190, 30);
    ctx.stroke();

    // Diagonal Corner Support Brace
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(100, 30);
    ctx.stroke();

    // Hanging Safety Noose Rope
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#d97706'; // Rope color
    ctx.beginPath();
    ctx.moveTo(180, 30);
    ctx.lineTo(180, 65);
    ctx.stroke();

    ctx.restore();

    // Coordinates for Character (Head center at 180, 85)
    const headX = 180;
    const headY = 82;
    const headR = 18;

    // --- Error Stage 1: Head with Safety Hardhat & Goggles ⛑️ ---
    if (errorCount >= 1) {
      ctx.save();
      ctx.translate(headX, headY);

      // Head Base
      ctx.fillStyle = '#fde047'; // Skin tone / Bright base
      ctx.beginPath();
      ctx.arc(0, 0, headR, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Eye Expression (Open or Dead X if error 6)
      if (errorCount >= 6) {
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        // Left Eye X
        ctx.beginPath();
        ctx.moveTo(-7, -4); ctx.lineTo(-1, 2);
        ctx.moveTo(-1, -4); ctx.lineTo(-7, 2);
        ctx.stroke();
        // Right Eye X
        ctx.beginPath();
        ctx.moveTo(1, -4); ctx.lineTo(7, 2);
        ctx.moveTo(7, -4); ctx.lineTo(1, 2);
        ctx.stroke();
      } else {
        // Normal Safety Goggles (Óculos de Proteção)
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.roundRect(-10, -5, 8, 6, 2);
        ctx.roundRect(2, -5, 8, 6, 2);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Mouth
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (errorCount >= 6) {
        ctx.arc(0, 10, 5, Math.PI, 0); // O mouth
      } else {
        ctx.arc(0, 8, 6, 0, Math.PI); // Frown / Sad mouth
      }
      ctx.stroke();

      // ⛑️ Yellow Safety Helmet (Capacete de Proteção)
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(0, -3, headR * 1.1, Math.PI, 0);
      ctx.fill();
      ctx.strokeStyle = '#854d0e';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Helmet Brim
      ctx.fillStyle = '#ca8a04';
      ctx.fillRect(-headR * 1.25, -3, headR * 2.5, 3);

      ctx.restore();
    }

    // --- Error Stage 2: Torso with High-Visibility Safety Vest 🦺 ---
    if (errorCount >= 2) {
      ctx.save();
      ctx.translate(headX, headY);

      // Torso Line
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(0, headR);
      ctx.lineTo(0, headR + 50);
      ctx.stroke();

      // Safety Vest Shape (Colete Refletivo Laranja)
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.moveTo(-12, headR + 4);
      ctx.lineTo(12, headR + 4);
      ctx.lineTo(15, headR + 46);
      ctx.lineTo(-15, headR + 46);
      ctx.closePath();
      ctx.fill();

      // Reflective Silver Strips (Fitas Refletivas)
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(-12, headR + 18, 24, 5);
      ctx.fillRect(-14, headR + 32, 28, 5);

      ctx.restore();
    }

    // --- Error Stage 3: Left Arm with Protective Glove 🥊 ---
    if (errorCount >= 3) {
      ctx.save();
      ctx.translate(headX, headY + headR + 6);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#334155';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(-28, 30);
      ctx.stroke();

      // Safety Glove (Luva Azul)
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.arc(-28, 30, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // --- Error Stage 4: Right Arm with Protective Glove 🥊 ---
    if (errorCount >= 4) {
      ctx.save();
      ctx.translate(headX, headY + headR + 6);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#334155';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(28, 30);
      ctx.stroke();

      // Safety Glove (Luva Azul)
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.arc(28, 30, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // --- Error Stage 5: Left Leg with Safety Boot 🥾 ---
    if (errorCount >= 5) {
      ctx.save();
      ctx.translate(headX, headY + headR + 50);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#334155';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-20, 45);
      ctx.stroke();

      // Safety Boot (Bota de Couro Marrom com Biqueira)
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(-24, 45, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // --- Error Stage 6: Right Leg with Safety Boot (Complete Hanging Character) 🥾 ---
    if (errorCount >= 6) {
      ctx.save();
      ctx.translate(headX, headY + headR + 50);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#334155';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(20, 45);
      ctx.stroke();

      // Safety Boot (Bota de Couro Marrom com Biqueira)
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(24, 45, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }
}
