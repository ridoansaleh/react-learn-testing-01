module.exports = {
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['./src/**/*.js', './src/**/**/*.js', '!./node_modules/**'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
