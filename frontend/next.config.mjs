/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    REACT_APP_DATABASE:"http://localhost:3000/"
  },
  async redirects() {
    return [
      {
        source: '/jogadores',
        destination: '/jogadores/novo',
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
