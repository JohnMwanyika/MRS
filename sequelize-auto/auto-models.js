require('dotenv').config();
const SequelizeAuto = require('sequelize-auto');
const autoMigrations = require('sequelize-auto-migrations');
const path = require('path');

const sequelizeAuto = new SequelizeAuto(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    directory: path.join(__dirname, '../models'),
    additional: {
        timestamps: false,
    },
    typescript: false,
    caseModel: 'p',
    caseFile: 'c',
});

sequelizeAuto.run(function (err) {
    if (err) throw err;

    autoMigrations
        .generateMigrations(sequelizeAuto.tables, {
            migrationsPath: path.join(__dirname, '../migrations'),
            primaryKeys: true,
            timestamps: true,
        })
        .then(function () {
            console.log('Migrations generated successfully!');
        })
        .catch(function (err) {
            console.log('Error generating migrations: ', err);
        });
});