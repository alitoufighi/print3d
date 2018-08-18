'''
pip install ConfigParser 
'''
import ConfigParser
config = ConfigParser.ConfigParser()
config.read('Q-config.ini')
print (config.get('wifi','pass')) == ''