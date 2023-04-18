/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-green-hill-676240.us-east-2.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "ahmed.shaykhwork",
    PGPASSWORD: "Br6zhJXo4qWG"
  }
};

module.exports = nextConfig;