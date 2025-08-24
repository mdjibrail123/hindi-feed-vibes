import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.457c9c5651914cc0b75274544d7d4bf9',
  appName: 'hindi-feed-vibes',
  webDir: 'dist',
  server: {
    url: 'https://457c9c56-5191-4cc0-b752-74544d7d4bf9.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FF6B6B',
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;