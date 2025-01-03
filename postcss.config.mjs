/** @type {import('postcss-load-config').Config} */
const config = {
  plugins:[
    'tailwindcss',
    process.env.NODE_ENV === 'production' ? [
        '@fullhuman/postcss-purgecss',
        {
            content : [
                './src/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }

    ] : undefined,
    'postcss-preset-env',
]
};

export default config;
