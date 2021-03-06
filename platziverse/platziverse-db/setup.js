'use strict'

const debug = require('debug')('platziverse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')
const argv = require('yargs').boolean('y').argv

const prompt = inquirer.createPromptModule()

async function setup() {
  const ops = argv.y
  if (!ops) {
    const answer = await prompt({
      type: 'confirm',
      name: 'setup',
      massage: 'This will destroy your DataBase, Are you Sure?'
    })
    if (!answer.setup || ops) {
      returnconsole.log('Nothing happened :)')
    }
  }

  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError(err) {
  console.error(`${chalk.red('[Fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
