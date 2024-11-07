import webpack from 'webpack';

function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // SVG как React-компоненты
    const svgLoaderReact = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // SVG как URL (для CSS и фонов в Styled Components)
    const svgLoaderUrl = {
        test: /\.svg$/,
        type: 'asset',
        issuer: /\.(css|scss)$/, // Применяется только для файлов стилей
        generator: {
            filename: 'assets/images/[name][ext]', // Настройка пути сохранения
        },
    };

    return [typescriptLoader, cssLoaders, svgLoaderReact, svgLoaderUrl];
}

export default buildLoaders;
