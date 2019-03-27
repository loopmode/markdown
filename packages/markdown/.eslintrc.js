const fs = require('fs');

module.exports = {
    extends: '@loopmode/react',
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                ...JSON.parse(fs.readFileSync(`${__dirname}/.prettierrc`))
            }
        ]
    }
};
