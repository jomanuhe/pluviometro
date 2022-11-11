let CANTIDAD_AGUA = 0
let PROMEDIO = 0
input.onButtonPressed(Button.A, function () {
    CANTIDAD_AGUA = 0
    for (let index = 0; index < 1825; index++) {
        CANTIDAD_AGUA += randint(0, 6)
    }
    basic.showNumber(PROMEDIO)
    PROMEDIO = CANTIDAD_AGUA / 7
    if (PROMEDIO < CANTIDAD_AGUA) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        if (PROMEDIO == CANTIDAD_AGUA) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (PROMEDIO > CANTIDAD_AGUA) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
