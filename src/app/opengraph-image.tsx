import { ImageResponse } from 'next/og';

export const alt = 'Healthy Kitchen — Meal Plans, Smart Grocery Lists & Quick Recipes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: 64,
          background: '#1E4D38',
          color: '#E1E6C8',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          Healthy Kitchen
        </div>
        <div
          style={{
            background: '#E1E6C8',
            color: '#1E4D38',
            fontSize: 32,
            fontWeight: 700,
            padding: '12px 20px',
            borderRadius: 14,
          }}
        >
          Meal Plans • Smart Grocery Lists • Quick Recipes
        </div>
      </div>
    ),
    size
  );
}