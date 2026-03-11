"use client";

import React, { useEffect, useRef } from 'react';

const Loading: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // --- CONFIGURATION ---
        const TEXT = "rhishav.";
        const FONT_SIZE = 40;
        const FONT_FAMILY = '"Arial Black", "Arial", sans-serif'; // Switched to a wider font
        const LETTER_SPACING = 20; // Forces blank space between letters
        
        const BAR_WIDTH = 3;       // Slightly thicker bars
        const BAR_GAP = 1;         
        const MAX_GLITCH_Y = 200;  
        const SPEED = 1.5;         

        // 1. Setup hidden canvas
        const offscreen = document.createElement('canvas');
        const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
        if (!offCtx) return;
        
        offCtx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        
        // 2. Measure total width with our forced letter spacing
        let totalWidth = 0;
        const chars = TEXT.split('');
        chars.forEach(char => {
            totalWidth += offCtx.measureText(char).width + LETTER_SPACING;
        });
        
        const textHeight = FONT_SIZE * 1.5;
        const actualWidth = Math.ceil(totalWidth);

        offscreen.width = actualWidth;
        offscreen.height = textHeight;
        
        // 3. Draw text letter-by-letter to guarantee perfect spacing
        offCtx.fillStyle = 'white';
        offCtx.textBaseline = 'top';
        offCtx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        
        let currentX = 0;
        chars.forEach(char => {
            offCtx.fillText(char, currentX, 0);
            currentX += offCtx.measureText(char).width + LETTER_SPACING;
        });

        // 4. Extract slices
        const imgData = offCtx.getImageData(0, 0, actualWidth, textHeight).data;
        
        interface Segment {
            x: number;
            y: number;
            h: number;
            origY: number;
            shift: number;
            speed: number;
            offset: number;
        }

        const segments: Segment[] = [];

        function createSegment(x: number, y: number, h: number): Segment {
            return {
                x: x,
                y: y,
                h: h,
                origY: y,
                shift: (Math.random() - 0.5) * MAX_GLITCH_Y * 2, 
                speed: 0.5 + Math.random() * 1.5,                
                offset: Math.random() * Math.PI * 2              
            };
        }

        for (let x = 0; x < actualWidth; x += (BAR_WIDTH + BAR_GAP)) {
            let isDrawing = false;
            let startY = 0;
            
            for (let y = 0; y < textHeight; y++) {
                const alpha = imgData[(y * actualWidth + x) * 4 + 3];
                
                if (alpha > 128 && !isDrawing) {
                    isDrawing = true;
                    startY = y;
                } else if (alpha <= 128 && isDrawing) {
                    isDrawing = false;
                    segments.push(createSegment(x, startY, y - startY));
                }
            }
            if (isDrawing) {
                segments.push(createSegment(x, startY, textHeight - startY));
            }
        }

        // 5. Setup visible canvas
        const dpr = window.devicePixelRatio || 1;
        const paddingX = 50;
        const paddingY = MAX_GLITCH_Y + 50; 
        
        canvas.width = (actualWidth + paddingX * 2) * dpr;
        canvas.height = (textHeight + paddingY * 2) * dpr;
        canvas.style.width = `${actualWidth + paddingX * 2}px`;
        canvas.style.height = `${textHeight + paddingY * 2}px`;
        
        ctx.scale(dpr, dpr);

        const drawOffsetX = paddingX;
        const drawOffsetY = paddingY;

        // 6. Animate
        let animationFrameId: number;

        function animate() {
            if (!canvas || !ctx) return;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            
            ctx.fillStyle = '#fff';

            const time = Date.now() / 1000;
            
            let masterGlitch = Math.sin(time * SPEED);
            masterGlitch = Math.max(0, masterGlitch); 
            masterGlitch = Math.pow(masterGlitch, 4); 

            segments.forEach(seg => {
                const noise = Math.sin(time * seg.speed + seg.offset);
                const currentY = seg.origY + (noise * seg.shift * masterGlitch);
                ctx.fillRect(drawOffsetX + seg.x, drawOffsetY + currentY, BAR_WIDTH, seg.h);
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen w-full bg-black overflow-hidden m-0 p-0">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Loading;
