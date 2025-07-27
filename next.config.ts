// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  webpack: (config: any, { buildId, dev, isServer, defaultLoaders, webpack }: any) => {
    const fixPath = (path: string | unknown): string | unknown => {
      return typeof path === 'string' ? path.replace(/!/g, '-') : path;
    };

    config.context = fixPath(config.context);
    if (config.cache?.cacheDirectory) {
      config.cache.cacheDirectory = fixPath(config.cache.cacheDirectory);
    }
    if (config.output?.path) {
      config.output.path = fixPath(config.output.path);
    }
    
    config.module.rules.forEach((rule: any) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule: any) => {
          if (oneOfRule.issuer?.and) {
            oneOfRule.issuer.and = oneOfRule.issuer.and.map((item: any) => 
              typeof item === 'string' ? fixPath(item) : item
            );
          }
        });
      }
    });

    return config;
  }
};

export default nextConfig;