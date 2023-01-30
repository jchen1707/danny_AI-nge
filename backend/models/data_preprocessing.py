import sqlite3 
import pandas as pd


import sqlite3

conn = sqlite3.connect("./data/basketball.sqlite")
cursor = conn.cursor()

cursor.execute("SELECT * FROM table_name")


rows = cursor.fetchall()

cursor.close()
conn.close()
