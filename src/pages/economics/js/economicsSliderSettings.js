export const settingsEconomics = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesPerRow: 1,
                slidesToScroll: 1,
                infinite: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};