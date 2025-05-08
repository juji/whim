'use client';
import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function PixiDevPage() {
  const pixiContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pixiContainer.current) return;

    let app: PIXI.Application | null = null;

    const initializePixi = async () => {
      if (!pixiContainer.current) return;
      // Create PixiJS Application instance
      app = new PIXI.Application();

      // Initialize the application with options
      await app.init({
        width: 400,
        height: 300,
        backgroundColor: '#f0f0f0',
        antialias: true,
        resizeTo: pixiContainer.current,
      });

      // Append the canvas to the container
      pixiContainer.current.appendChild(app.canvas as HTMLCanvasElement);

      // Create a simple animated blob (graphics)
      const blob = new PIXI.Graphics();
      let t = 0;
      app.stage.addChild(blob);

      app.ticker.add(() => {
        if (!app) return; // Ensure app exists
        t += 0.05;
        blob.clear();
        blob.beginPath(); // Start a new path
        // Draw a wobbly circle (blob)
        const points = 32;
        const r = 60;
        blob.moveTo(
          200 + Math.cos(0) * (r + Math.sin(t) * 8),
          150 + Math.sin(0) * (r + Math.cos(t) * 8)
        );
        for (let i = 1; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const wobble = Math.sin(angle * 6 + t) * 8;
          blob.lineTo(
            200 + Math.cos(angle) * (r + wobble),
            150 + Math.sin(angle) * (r + wobble)
          );
        }
        blob.fill({ color: 0x7ec8e3 }); // Set style and fill the path
      });
    };

    initializePixi();

    return () => {
      // Destroy the application instance on cleanup
      if (app) {
        app.destroy(true, { children: true });
        app = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="text-2xl font-bold mb-4">PixiJS Demo Blob</h1>
      <div ref={pixiContainer} className="rounded-lg shadow-lg overflow-hidden" style={{ width: 400, height: 300 }} />
      <p className="mt-4 text-gray-500">A wobbly animated blob rendered with PixiJS.</p>
    </div>
  );
}