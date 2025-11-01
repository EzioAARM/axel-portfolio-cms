module.exports = ({ env }) => ({
    "strapi-plugin-populate-deep": {
        config: {
            defaultDepth: 5,
        },
    },
    seo: {
        enabled: true,
    },
    tinymce: {
        enabled: true,
    },
    "strapi-algolia": {
        enabled: true,
        config: {
            apiKey: env("ALGOLIA_ADMIN_KEY"),
            applicationId: env("ALGOLIA_APP_ID"),
            contentTypes: [
                { name: "api::post.post" },
                { name: "api::tag.tag" },
                { name: "api::technology.technology" },
            ],
        },
    },
});
