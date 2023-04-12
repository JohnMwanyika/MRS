const path = require('path');
const {
    generateMigrationFiles
} = require('sequelize-migration-generator');

const {
    Trial,
    TrialStatus
} = require('../models')

// Define options for sequelize-migration-generator
const options = {
    models: [Trial, TrialStatus],
    modelPaths: [path.join(__dirname, 'models')],
    migrationPath: path.join(__dirname, 'migrations'),
    migrationName: 'migration'
};

// Generate the migration files
generateMigrationFiles(options)
    .then(() => {
        console.log('Migration files created successfully');
    })
    .catch(error => {
        console.error(error);
    });