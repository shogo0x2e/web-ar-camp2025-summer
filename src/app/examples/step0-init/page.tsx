export default function Step0Init() {
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
            Step 0: Project Init
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
              Commands
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '0.25rem',
                marginBottom: '1rem'
              }}>
                <code style={{
                  fontSize: '0.875rem',
                  color: '#000',
                  fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                }}>
                  npx create-next-app@latest web-ar-project
                </code>
              </div>
              
              <div style={{
                background: '#f9fafb',
                padding: '1rem',
                borderRadius: '0.25rem'
              }}>
                <code style={{
                  fontSize: '0.875rem',
                  color: '#000',
                  fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                }}>
                  cd web-ar-project && npm run dev
                </code>
              </div>
            </div>
            
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#f0fdf4',
              borderRadius: '0.25rem'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#15803d'
              }}>
                Expected: Development server running at http://localhost:3000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}