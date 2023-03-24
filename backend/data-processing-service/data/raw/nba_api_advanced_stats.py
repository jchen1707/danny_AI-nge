from nba_api.live.nba.endpoints import boxscoreadvancedv2,leaguelog
import pandas as pd
import os
import time

script_dir = os.path.dirname(os.path.abspath(__file__))

starting_season = 2009
ending_season = 2021