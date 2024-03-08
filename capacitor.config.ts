import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ruxatic.maifu',
  appName: '.',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
