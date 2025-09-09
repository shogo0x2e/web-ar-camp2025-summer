'use client';

import Link from 'next/link';
import { MouseEvent } from 'react';

export default function Home() {
  const handleMouseOver = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = '#f0f0f0';
  };

  const handleMouseOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = '#fff';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            background: #000;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            min-height: 100vh;
            margin: 0;
            padding: 0;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #fff;
          }
        `
      }} />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#fff'
          }}>
            Web AR Camp 2025 Summer
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: '#ccc'
          }}>
            Web 技術を使って実装する AR を学ぼう
          </p>
          <Link 
            href="/docs" 
            style={{
              display: 'inline-block',
              background: '#fff',
              color: '#000',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            ドキュメントを見る →
          </Link>
        </div>
      </div>
    </>
  );
}