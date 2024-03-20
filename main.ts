input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    record.playAudio(record.BlockingState.Blocking)
})
basic.forever(function () {
    if (input.soundLevel() == 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() > 127) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
