

module.exports = {

  reactStrictMode: true,
  images: {
    domains: ["strsql.herokuapp.com","192.168.43.110","res.cloudinary.com","http://localhost:3000"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

