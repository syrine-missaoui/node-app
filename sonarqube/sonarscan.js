const scanner = require('sonarqube-scanner')
const dotenv = require("dotenv")
dotenv.config()
scanner(
    {
        serverUrl: 'http://192.168.33.10:9000',
        token: process.env.SONAR_TOKEN,
        options: {
            'sonar.projectName': 'e-commerce-shop',
            'sonar.projectDescription': 'training for deploying a react app',
            'sonar.projectKey': 'e-commerce-shop',
            'sonar.projectVersion': '1.1.0',
            'sonar.exclusions': '**/node_modules/**',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.verbose': 'true',
            'sonar.debug': 'true',
            'sonar.showProfiling': 'true',
            'sonar.log.level': 'DEBUG',
        }
    },
    () => process.exit()
)