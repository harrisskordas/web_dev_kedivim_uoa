import pyautogui
import time

x, y = 0, 0

offset = 10

def move_mouse():
    global x, y
    if (x>900 or y>900):
        x, y = 0, 0
    x += offset
    y += offset
    pyautogui.moveTo(x, y)
    print(x,y)

while True:
    move_mouse()
    time.sleep(10) #10sec