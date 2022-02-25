const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
});
