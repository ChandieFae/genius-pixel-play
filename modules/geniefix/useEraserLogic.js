// useEraserLogic.js

import { useRef, useEffect } from "react";

export function useEraserLogic(canvasRef, brushSize, isErasing) {
  const ctxRef = useRef(null);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const startDrawing = (e) => {
      drawing.current = true;
      draw(e);
    };

    const endDrawing = () => {
      drawing.current = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!drawing.current || !isErasing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", endDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [brushSize, isErasing]);

  return ctxRef;
}
