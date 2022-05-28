

module.exports = {

  reactStrictMode: true,
  images: {
    domains: ["strsql.herokuapp.com","192.168.43.110","res.cloudinary.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

