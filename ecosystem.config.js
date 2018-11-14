require('dotenv').config();

module.exports = {
    apps: [{
        name: process.env.APP_NAME,
        script: process.env.APP_RUN_SCRIPT,
        args: process.env.APP_RUN_SCRIPT_ARGS
    }],
    deploy: {
        production: {
            user: process.env.DEPLOY_PRODUCTION_USER,
            host: process.env.DEPLOY_PRODUCTION_HOST,
            key: process.env.DEPLOY_PRODUCTION_SSH_KEYFILE_PATH,
            ref: `${process.env.DEPLOY_PRODUCTION_GIT_REMOTE}/${process.env.DEPLOY_PRODUCTION_GIT_BRANCH}`,
            repo: process.env.DEPLOY_PRODUCTION_GIT_REPO,
            path: process.env.DEPLOY_PRODUCTION_DEST_PATH,
            'post-deploy': 'npm install --production && pm2 startOrRestart ecosystem.config.js && pm2 save'
        }
    }
};
