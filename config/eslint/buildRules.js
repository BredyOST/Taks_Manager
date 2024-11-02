import prettierConfig from 'eslint-config-prettier';

function buildRules() {
    return {
        //станавливает правило, что любое несоответствие форматированию Prettier должно вызывать ошибку.
        'prettier/prettier': 'error',
        // Предупреждает о неиспользуемых переменных.
        '@typescript-eslint/no-unused-vars': 'warn',
        "max-len": ["error", { "code": 140 }], // Максимальная длина строки 140 символов
        "quotes": ["error", "single"], // Использовать одинарные кавычки
        "semi": ["error", "always"], // Всегда использовать точки с запятой
        "indent": ["error", 4], // Использовать 4 пробела для отступов
        "no-console": "warn", // Предупреждает об использовании console.log и других методов console
    };
}

export default buildRules;
