module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
                secure: true,
            },
            actionOptions: {
                upload: {
                    timeout: 60000,
                },
                uploadStream: {},
                delete: {}
            },
        },
    },
});