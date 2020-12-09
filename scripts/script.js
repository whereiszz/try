document.addEventListener('DOMContentLoaded', function () {

    // Sync Lottie with scroll
    LottieInteractivity.create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility: [0,1],
            type: 'seek',
            frames: [0, 96],
          },
        ],
    });

    //Lottie scroll relative to container
    LottieInteractivity.create({
        mode: "scroll",
        player: "#secondLottie",
        container: "#MyContainerId",
        actions: [
        {
        visibility: [0,1],
        type: "seek",
        frames: [0, 120],
        },
    ],
    });

});