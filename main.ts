radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
