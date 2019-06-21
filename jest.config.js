module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/*temp/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.[jt]s?(x)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    'react$': 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    'react-is': 'nerv-is-commonjs',
    weui: '<rootDir>/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mock__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mock__/fileMock.js'
  }
}
