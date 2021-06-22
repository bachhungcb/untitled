I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
basic.forever(function () {
    I2C_LCD1602.ShowString("Hello", 6, 0)
})
