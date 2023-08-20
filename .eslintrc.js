module.exports = {
    'extends': [
        'next/core-web-vitals',
        './extensions/lint-react.json',
        './extensions/lint-typescript.json',
        'prettier'
    ],
    'plugins': [
        '@typescript-eslint'
    ],
    'rules':   {
        'newline-before-return':             'warn',
        'no-multiple-empty-lines':           ['warn', {'max': 1}],
        '@next/next/no-html-link-for-pages': 'off'
    }
};