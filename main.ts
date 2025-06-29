input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("Avanza")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    radio.sendString("Parar")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendString("Derecha")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("Izquierda")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    radio.sendString("Parar")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("Reversa")
})
radio.setTransmitPower(7)
basic.showIcon(IconNames.House)
radio.setGroup(100)
