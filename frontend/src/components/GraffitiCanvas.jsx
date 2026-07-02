import React, { useRef, useEffect } from 'react';

const GraffitiCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const colors = ['#9333ea', '#ea580c', '#facc15', '#22c55e', '#06b6d4', '#ec4899'];
    let currentColor = colors[0];
    let isDrawing = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawSpray = (e) => {
      if (!isDrawing) return;
      
      for (let i = 0; i < 30; i++) {
        const radius = Math.random() * 20; 
        const angle = Math.random() * Math.PI * 2;
        const x = e.clientX + radius * Math.cos(angle);
        const y = e.clientY + radius * Math.sin(angle);
        
        ctx.fillStyle = currentColor;
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const startDrawing = (e) => {
      // Desliga a seleção de texto
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      // Enquanto o spray está em uso, o cursor vira a lata de spray
      document.body.style.cursor = "url('/spray-cursor.png') 0 32, crosshair";

      isDrawing = true;
      currentColor = colors[Math.floor(Math.random() * colors.length)];
      drawSpray(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
      
      // Devolve a seleção de texto
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      
      // DEVOLVE O CURSOR NORMAL
      document.body.style.cursor = '';
    };

    const timerLimpeza = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 30000);

    window.addEventListener('mousedown', startDrawing);
    window.addEventListener('mousemove', drawSpray);
    window.addEventListener('mouseup', stopDrawing);
    document.addEventListener('mouseleave', stopDrawing);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousedown', startDrawing);
      window.removeEventListener('mousemove', drawSpray);
      window.removeEventListener('mouseup', stopDrawing);
      document.removeEventListener('mouseleave', stopDrawing);
      clearInterval(timerLimpeza);
      
      // Garantia de segurança: se o componente for desmontado, o cursor volta ao normal
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="graffiti-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default GraffitiCanvas;