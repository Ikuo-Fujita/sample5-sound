input.onGesture(Gesture.ScreenUp, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.TiltRight, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.LogoUp, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
})
