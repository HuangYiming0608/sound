input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    record.playAudio(record.BlockingState.Blocking)
})
