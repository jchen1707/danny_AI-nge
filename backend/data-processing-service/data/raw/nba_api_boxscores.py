# Get BoxScore
from nba_api.live.nba.endpoints import boxscore
import json
import pandas as pd

game_id = '0022000198'
box = boxscore.BoxScore(game_id) 

# Data Sets
game = box.get_dict()['game']['gameTimeUTC']                    
away_team = box.away_team.get_dict()['teamName']             
away_team_player = box.away_team_player_stats.get_dict() 
home_team = box.home_team.get_dict()['teamName']         
home_team_player = box.home_team_player_stats.get_dict() 
   


