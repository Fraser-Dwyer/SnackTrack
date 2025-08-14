const config = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy"
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"]
};

export default config;
