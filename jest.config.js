module.exports = {
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/src/**/*.{js,jsx,ts,tsx}"
    ],
    "coverageDirectory": "<rootDir>/tests",
    "coverageReporters": [
        "json",
        "text"
    ],
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "testResultsProcessor": "<rootDir>/node_modules/jest-json-reporter",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};
