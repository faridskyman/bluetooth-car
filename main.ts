devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, speed)
    basic.pause(1000)
    rekabit.brakeMotor(MotorChannel.All)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    
    rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, speed)
    basic.pause(1000)
    rekabit.brakeMotor(MotorChannel.All)
})
let speed = 0
speed = 200
basic.forever(function () {
	
})
