

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