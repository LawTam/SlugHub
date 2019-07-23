################################################################################### 
# SYNTAX:
# python3 $PATH $HOST $PORT $USERNAME $PASSWORD $PATHTOSOURCE $PATHTODESTINATION
#
###################################################################################
python3 classes.py   # <----- Generates ALL the following JSON files
#depts = ['am','bme','cmpm','cse','ece','game', 'stat']
# AM
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_am_classes.json ./public_html/lowerdiv_am_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_am_classes.json ./public_html/upperdiv_am_classes.json
# BME
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_bme_classes.json ./public_html/lowerdiv_bme_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_bme_classes.json ./public_html/upperdiv_bme_classes.json
# CMPM
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_cmpm_classes.json ./public_html/lowerdiv_cmpm_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_cmpm_classes.json ./public_html/upperdiv_cmpm_classes.json
# CSE
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_cse_classes.json ./public_html/lowerdiv_cse_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_cse_classes.json ./public_html/upperdiv_cse_classes.json
# ECE
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_ece_classes.json ./public_html/lowerdiv_ece_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_ece_classes.json ./public_html/upperdiv_ece_classes.json
# GAME
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_game_classes.json ./public_html/lowerdiv_game_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_game_classes.json ./public_html/upperdiv_game_classes.json
# STAT
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./lowerdiv_stat_classes.json ./public_html/lowerdiv_stat_classes.json
python3 /Users/naummarkenzon/SlugHubV2/Webscraping/file_share.py unix.ucsc.edu 22 nmarkenz password ./upperdiv_stat_classes.json ./public_html/upperdiv_stat_classes.json
