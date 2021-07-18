// Merge parent conf objects + any new changes in UAT conf(Base URL, connectiontimeout)

const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {
    // We need to export the newly created merged conf file to make available for access from other config file
    baseUrl: 'https://rahulshettyacademy.com',
    waitforTimeout: 9000,

    mochaOpts: {
        ui: 'bdd',
        timeout: 80000,
        grep: "Sanity"
    },
})
