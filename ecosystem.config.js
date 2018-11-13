module.exports = {
    apps: [{
        name: 'tempollo_api',
        script: 'npm',
        args: 'run start'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-204-203-52.compute-1.amazonaws.com',
            key: '~/.ssh/administrator-key-pair-useast1.pem',
            ref: 'origin/master',
            repo: 'git@github.com:dnialwill/tempollo_api.git',
            path: '/home/ubuntu/tempollo_api',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js && pm2 save'
        }
    }
};
