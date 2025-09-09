'use client';

import { useState, useEffect } from 'react';

export default function Step1ReactFundamental() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('CounterDemo mounted');
  }, []);

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
            background: #f5f5f5;
            color: #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            min-height: 100vh;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #000;
          }
        `
      }} />
      <div style={{
        minHeight: '100vh',
        background: '#f5f5f5',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '48rem',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#000'
          }}>
            Step 1: React Basics
          </h1>
          
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#000'
            }}>
              Counter Demo
            </h2>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#2563eb',
                marginBottom: '1rem'
              }}>
                {count}
              </div>
              <button 
                onClick={() => setCount(count + 1)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#2563eb',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#1d4ed8';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                }}
              >
                Increment
              </button>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                marginTop: '0.5rem'
              }}>
                Check browser console (F12) for mount log
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}