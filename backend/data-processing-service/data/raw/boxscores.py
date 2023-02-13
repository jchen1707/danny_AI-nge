import requests

# Define the endpoint URL
url = "https://www.balldontlie.io/api/v1/stats"

# Define the parameters
params = {
    "start_date": "2022-10-01", # Starting from the 2010-2011 season
    "end_date": "2022-10-02", # Up to the current date
    "team_ids[]": [], # Leave empty to get stats for all teams
    "player_ids[]": [], # Leave empty to get stats for all players
    "game_ids[]": [], # Leave empty to get stats for all games
    "sort[]": ["game.start_time"], # Sort by start time
    "per_page": 100 # Number of results per page
}

# Make the request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Get the data from the response
    data = response.json()
    # Iterate through the results
    for game in data["data"]:
        # Do something with the data for each game
        print(game)
else:
    # If the request was not successful, raise an error
    raise Exception("Request failed with status code: " + str(response.status_code))