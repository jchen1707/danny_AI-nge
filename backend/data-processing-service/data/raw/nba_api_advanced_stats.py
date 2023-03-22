from nba_api.live.nba.endpoints import boxscoreadvancedv2
from nba_api.stats.endpoints import leaguegamefinder
import json
import pandas as pd
import os
import time

game_id = '0022000198'
boxadv = boxscoreadvancedv2.BoxScoreAdvancedV2(game_id)