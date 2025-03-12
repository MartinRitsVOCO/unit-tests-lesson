export const testEnvironment = 'node';
export const transform = {
    '^.+\\.js$': 'babel-jest', // Transform .js files with babel-jest.
};
export const testMatch = ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'];