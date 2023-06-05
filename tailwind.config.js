module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                whiteBack: '#F4F4F4',
                primaryColor: '#374957',
                secondaryColor: '#7C8892',
                darkHover: '#2B2B35',
                darkComponentColor: '#1C1C22',
                sunriseSunset: '#F4E2A3',
                windSpeed: '#A5B0EC',
                pressure: '#A5D2EC',
                humidity: '#A5ECD7'
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
                'bounce-slow': 'bounce 6s linear infinite'
            }

        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}