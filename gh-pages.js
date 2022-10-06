import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/LLuthfiY/LLuthfiY.github.io.git', // Update to point to your repository
        user: {
            name: 'LLuthfiY', // update to use your name
            email: 'zerodio111@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);