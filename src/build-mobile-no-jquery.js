({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../dist/converse-mobile.nojquery.min.js",
    mainConfigFile: '../converse.js',
    excludeShallow: [
        "converse-minimize",
        "converse-dragresize",
    ],
    include: ['converse'],
	exclude: ['jquery', 'jquery-private'],
    insertRequire: ['converse'],
    wrap: {
        endFile: ["wrapper-mobile-no-jquery.js"]
    },
});