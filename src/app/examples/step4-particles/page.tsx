'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Step4Particles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkReady = () => {
      // @ts-ignore
      if (window.AFRAME && window.AFRAME.components['mindar-image']) {
        setReady(true);
      } else {
        setTimeout(checkReady, 100);
      }
    };
    setTimeout(checkReady, 500);
  }, []);

  return (
    <>
      {/* A-Frame */}
      <Script 
        src="https://aframe.io/releases/1.5.0/aframe.min.js"
        strategy="beforeInteractive"
      />
      
      {/* MindAR A-Frame */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"
        strategy="beforeInteractive"
      />

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { 
            margin: 0; 
            padding: 0; 
            overflow: hidden; 
            height: 100vh;
            width: 100vw;
          }
          a-scene { 
            position: fixed; 
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 1;
          }
        `
      }} />

      {/* Scene renders only when scripts are ready */}
      {ready && (
        // @ts-ignore
        <a-scene 
          mindar-image="imageTargetSrc: /assets/targets/sample.mind; autoStart: true;"
          vr-mode-ui="enabled: false" 
          device-orientation-permission-ui="enabled: false"
          embedded
        >
          {/* @ts-ignore */}
          <a-camera 
            position="0 0 0" 
            look-controls="enabled: false"
          />

          {/* @ts-ignore */}
          <a-entity mindar-image-target="targetIndex: 0">
            {/* Multiple spheres with different colors and animations to simulate particles */}
            {[...Array(20)].map((_, i) => (
              // @ts-ignore
              <a-sphere 
                key={i}
                position={`${(Math.random() - 0.5) * 2} ${(Math.random() - 0.5) * 2} ${(Math.random() - 0.5) * 0.5}`}
                radius="0.02"
                color={`hsl(${Math.random() * 360}, 70%, 60%)`}
                animation={`property: position; to: ${(Math.random() - 0.5) * 2} ${(Math.random() - 0.5) * 2} ${(Math.random() - 0.5) * 0.5}; dur: ${2000 + Math.random() * 3000}; easing: easeInOutSine; loop: true; dir: alternate`}
                opacity="0.8"
              />
            ))}
            {/* @ts-ignore */}
            <a-text 
              value="Step 4: Particles!" 
              position="0 -0.7 0" 
              align="center"
              color="white"
              animation="property: rotation; to: 0 360 0; dur: 8000; easing: linear; loop: true"
            />
            {/* @ts-ignore */}
          </a-entity>
          {/* @ts-ignore */}
        </a-scene>
      )}
    </>
  );
}