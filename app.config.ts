export default defineAppConfig({
    logo: '/images/logo.svg',

    url: 'https://mistral.bloggrify.com/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'RR\'s Blog',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description:
        '作为我的第一个根据地，我很高兴能够在这里记录我的生活，希望这个博客能够为你带来帮助。',

    socials: {
        twitter: 'https://twitter.com',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },

    newsletter: {
        enabled: true,
        form_action: 'YOUR_NEWSLETTER_FORM_ACTION',
        provider: 'demo',
    },

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            default: true,
            username: 'LeelaDang',
            name: 'Leela',
            description:
                '记录一切',
            avatar: '/images/avatar.jpeg',
            socials: {
                twitter: 'https://twitter.com',
                twitter_username: 'username',
                mastodon: 'https://piaille.fr',
                youtube: 'https://youtube.com',
                linkedin: 'https://linkedin.com',
                facebook: 'https://facebook.com',
                instagram: 'https://instagram.com',
                github: 'https://github.com',
            },
        },
    ],

    menu: () => [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Archives', path: '/archives' },
    ],
})
