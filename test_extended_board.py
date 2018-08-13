from utils import ExtendedBoard



board = ExtendedBoard()

while True :  
	'''   check for existance of filament   '''
	if board.check_filament_status() == False:
		print 'x'