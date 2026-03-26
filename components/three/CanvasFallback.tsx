'use client';

export default function CanvasFallback() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 30% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), ' +
          'radial-gradient(ellipse at 70% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%), ' +
          'var(--color-surface-950, #0a0a0f)',
      }}
    >
      {/* Floating circle 1 - top left */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '1px solid rgba(102, 126, 234, 0.2)',
          animation: 'fallbackFloat1 8s ease-in-out infinite',
        }}
      />

      {/* Floating circle 2 - top right */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '12%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%)',
          border: '1px solid rgba(118, 75, 162, 0.15)',
          animation: 'fallbackFloat2 10s ease-in-out infinite',
        }}
      />

      {/* Floating diamond 3 - bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: 60,
          height: 60,
          border: '1px solid rgba(102, 126, 234, 0.15)',
          transform: 'rotate(45deg)',
          animation: 'fallbackFloat3 12s ease-in-out infinite',
        }}
      />

      {/* Floating circle 4 - bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '8%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          border: '1px solid rgba(102, 126, 234, 0.12)',
          animation: 'fallbackFloat4 9s ease-in-out infinite',
        }}
      />

      {/* Soft glow orb in center */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.04) 40%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          animation: 'fallbackPulse 6s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes fallbackFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fallbackFloat2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes fallbackFloat3 {
          0%, 100% { transform: rotate(45deg) translateY(0px); }
          50% { transform: rotate(45deg) translateY(-25px); }
        }
        @keyframes fallbackFloat4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-12px) translateX(8px); }
          66% { transform: translateY(-8px) translateX(-5px); }
        }
        @keyframes fallbackPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
