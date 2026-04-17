import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const trail = useRef([]);
  const TRAIL_LENGTH = 35; // Increased for a longer, more impressive trail

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize trail
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trail.current.push({ x: pointer.current.x, y: pointer.current.y });
    }

    const mouseMove = (e) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
    };

    window.addEventListener('mousemove', mouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow
      trail.current[0].x += (pointer.current.x - trail.current[0].x) * 0.5;
      trail.current[0].y += (pointer.current.y - trail.current[0].y) * 0.5;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const prev = trail.current[i - 1];
        trail.current[i].x += (prev.x - trail.current[i].x) * 0.5;
        trail.current[i].y += (prev.y - trail.current[i].y) * 0.5;
      }

      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
        const xc = (trail.current[i].x + trail.current[i + 1].x) / 2;
        const yc = (trail.current[i].y + trail.current[i + 1].y) / 2;
        if (i === 0) {
          ctx.moveTo(trail.current[i].x, trail.current[i].y);
        }
        ctx.quadraticCurveTo(trail.current[i].x, trail.current[i].y, xc, yc);
      }
      ctx.lineTo(trail.current[TRAIL_LENGTH - 1].x, trail.current[TRAIL_LENGTH - 1].y);

      ctx.lineWidth = 4; // Broader line
      
      // Dynamic gradient from the head to the tail of the trail
      const gradient = ctx.createLinearGradient(
        trail.current[0].x, trail.current[0].y,
        trail.current[TRAIL_LENGTH - 1].x, trail.current[TRAIL_LENGTH - 1].y
      );
      gradient.addColorStop(0, "rgba(0, 224, 255, 1)"); // Bright cyan head
      gradient.addColorStop(0.4, "rgba(157, 51, 255, 0.5)"); // Purple middle
      gradient.addColorStop(1, "rgba(255, 0, 85, 0)"); // Fading out pink tail
      
      ctx.strokeStyle = gradient;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#00e0ff";
      ctx.stroke();

      // Draw a bright dot at the exact cursor position 
      ctx.beginPath();
      ctx.arc(trail.current[0].x, trail.current[0].y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
};

export default CustomCursor;
