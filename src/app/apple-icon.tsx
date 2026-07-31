import { ImageResponse } from 'next/og';

/** The home-screen icon the old site was missing (`apple-touch-icon` returned 404). */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(150deg, #33203A 0%, #1E1420 100%)',
        }}
      >
        <svg width="128" height="128" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 10c5.4 4.6 8.1 9.2 8.1 14S29.4 33.4 24 38c-5.4-4.6-8.1-9.2-8.1-14S18.6 14.6 24 10Z"
            stroke="#C9A961"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M10 24c4.6-5.4 9.2-8.1 14-8.1s9.4 2.7 14 8.1c-4.6 5.4-9.2 8.1-14 8.1S14.6 29.4 10 24Z"
            stroke="#C9A961"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.6"
          />
          <circle cx="24" cy="24" r="3.6" fill="#C9A961" />
        </svg>
      </div>
    ),
    size,
  );
}
