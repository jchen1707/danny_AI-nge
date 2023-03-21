from nba_api.live.nba.endpoints import boxscoreadvancedv2
import json
import pandas as pd

game_id = '0022000198'
boxadv = boxscoreadvancedv2.BoxScoreAdvancedV2(game_id)