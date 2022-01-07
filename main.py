def on_received_value(name, value):
    global S1, S2, S3, S4
    if name == "S1":
        S1 = value
    if name == "S2":
        S2 = value
    if name == "S3":
        S3 = value
    if name == "S4":
        S4 = value
radio.on_received_value(on_received_value)

S4 = 0
S3 = 0
S2 = 0
S1 = 0
for index in range(3):
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
radio.set_group(20)
RobotArm.robot_initialize(7, 11, 15, 90, 60, 60, 0)

def on_forever():
    RobotArm.manual_motion(S1, S2, S3)
    RobotArm.servo(RobotArm.Servos.S4, S4)
basic.forever(on_forever)
