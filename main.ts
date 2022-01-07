radio.onReceivedValue(function (name, value) {
    if (name == "S1") {
        S1 = value
    }
    if (name == "S2") {
        S2 = value
    }
    if (name == "S3") {
        S3 = value
    }
    if (name == "S4") {
        S4 = value
    }
})
let S4 = 0
let S3 = 0
let S2 = 0
let S1 = 0
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
radio.setGroup(20)
RobotArm.robotInitialize(
7,
11,
15,
90,
60,
60,
0
)
basic.forever(function () {
    RobotArm.manualMotion(S1, S2, S3)
    RobotArm.Servo(RobotArm.Servos.S4, S4)
})
