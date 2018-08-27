'''

import codecs
import os




                            if command.find(' ', Eresulte) != -1:
                                end = command.find(' ', Eresulte)
                            elif command.find('\n', Eresulte) != -1:
                                end = command.find('\n')
                            else:
                                end = len(command)

                                
                            e_pos_offset = float(command[Eresulte + 1: end])

gcode_file = codecs.open('simplify_hex.gcode', 'r')
lines = []

for line in gcode_file:
    lines.append(line[:])


print(lines[1000])
'''
'''
command = 'M109 S250.0 T0 \n'
Sfound = command.find('S')
if command.find(' ', Sfound) != -1:
    end = command.find(' ', Sfound)
elif command.find('\n', Sfound) != -1:
    end = command.find('\n')
else:
    end = len(command)
print(end)
print(command[command.find('S') + 1: end ])
print(int(float(command[command.find('S') + 1: end ])))
'''
'''

command = "G1 Z3.060 F1002"

Zresulte = command.find('Z')
    
if command.find(' ', Zresulte) != -1:
    end = command.find(' ', Zresulte)
elif command.find('\n', Zresulte) != -1:
    end = command.find('\n')
else:
    end = len(command)

z_pos = float(command[Zresulte + 1: end ])
command = command[0: Zresulte + 1] + str(25000000) + ' ' + command[end + 1:]

print(z_pos)
print(command)

'''

"""

command = "G1 X113.867 Y101.139 E12.5837"


'''         get x position            '''
Xresulte = command.find('X')

if Xresulte != -1:
    
    if command.find(' ', Xresulte) != -1:
        end = command.find(' ', Xresulte)
    elif command.find('\n', Xresulte) != -1:
        end = command.find('\n')
    else:
        end = len(command)

    X_pos = float(command[Xresulte + 1: end ])

    end = None
    
'''         get Y position            '''
Yresulte = command.find('Y')

if Yresulte != -1:
    
    if command.find(' ', Yresulte) != -1:
        end = command.find(' ', Yresulte)
    elif command.find('\n', Yresulte) != -1:
        end = command.find('\n')
    else:
        end = len(command)

    Y_pos = float(command[Yresulte + 1: end ])

    end = None


print(X_pos)
print(Y_pos)

"""


command = ["; layer 10, Z = 3.06",'sdsadf']

print(int(command[0][8:command[0].find(',')]) == 10)