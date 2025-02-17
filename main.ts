input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 5; index++) {
        basic.showString("M")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.showString("Bonjour")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.temperature() < 21) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    } else {
        music.setBuiltInSpeakerEnabled(false)
    }
})
