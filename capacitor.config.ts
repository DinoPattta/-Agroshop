import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.agroshop.app',
  appName: 'Agroshop',
  webDir: 'public',
  server: {
    url: 'https://greatly-breach-silly-proposal.trycloudflare.com/',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#10b981',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true
    }
  }
};

export default config;