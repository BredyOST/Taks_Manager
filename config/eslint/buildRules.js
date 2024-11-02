import prettierConfig from 'eslint-config-prettier';

function buildRules() {
    return {
        //станавливает правило, что любое несоответствие форматированию Prettier должно вызывать ошибку.
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждает о неиспользуемых переменных.
        'no-console': 'warn', // Предупреждает об использовании console.log и других методов console
        'max-len': ['error', { code: 140 }], // Максимальная длина строки 140 символов
    };
}

export default buildRules;
