/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
      // Add a rule for video files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|ogv)$/, // You can include other video formats here
        type: 'asset/resource',
        generator: {
          filename: 'static/videos/[hash][ext][query]' // Defines the output file name format and location
        }
      });
  
      return config;
    },
  };
  

export default nextConfig;
