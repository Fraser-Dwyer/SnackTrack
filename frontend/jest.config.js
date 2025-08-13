const config = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};

export default config;