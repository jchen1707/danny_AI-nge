from nba_api.stats.endpoints import leaguegamelog, boxscoretraditionalv2
import pandas as pd
import os
import time

script_dir = os.path.dirname(os.path.abspath(__file__))

starting_season = 2009
ending_season = 2021

for season in range(starting_season, ending_season + 1):
    season_str = f"{season}-{str(season + 1)[2:]}"
    
    gamelog = leaguegamelog.LeagueGameLog(season=season_str, season_type_all_star="Regular Season")
    games = gamelog.get_data_frames()[0]

    away_team_season_df = pd.DataFrame()
    home_team_season_df = pd.DataFrame()

    for index, game_row in games.iterrows():
        game_id = game_row['GAME_ID']
        box = boxscoretraditionalv2.BoxScoreTraditionalV2(game_id)

        player_stats = box.get_data_frames()[0]

        away_team = game_row['MATCHUP'][-3:]
        home_team = game_row['MATCHUP'][:3]

        away_team_player_df = player_stats[player_stats['TEAM_ABBREVIATION'] == away_team]
        home_team_player_df = player_stats[player_stats['TEAM_ABBREVIATION'] == home_team]

        away_team_season_df = away_team_season_df.append(away_team_player_df, ignore_index=True)
        home_team_season_df = home_team_season_df.append(home_team_player_df, ignore_index=True)

        time.sleep(2)

    away_team_season_csv = f"{season_str}_{away_team}_season_stats.csv"
    home_team_season_csv = f"{season_str}_{home_team}_season_stats.csv"

    away_team_season_df.to_csv(os.path.join(script_dir, away_team_season_csv), index=False)
    home_team_season_df.to_csv(os.path.join(script_dir, home_team_season_csv), index=False)
