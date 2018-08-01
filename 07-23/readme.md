# 7/23 NOTES
## CSVs and Databases

Create a database called top_songsDB which will eventually house all of the music data contained within TopSongs.csv

Within the database create a table called top5000. and columns capable of holding info.

CSVs are comma separated files. These can easily be imported via mysql workbench very easily.

# SQL operators!

+ GROUP BY : groups elements with shared values together. Allows us to use the HAVING count(*) >1 statement to determine if there are multiples within that group.
+ BETWEEN ? AND ? : allows us to select information between a specific range.
+ BONUS! The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. % - The Percent sign represents zero, one, or multiple characters.

### Group By Example
SELECT COUNT(position), artist --groups by artist\
FROM top5000 \
GROUP BY artist \
ORDER BY COUNT(position) DESC \

### Between Example
SELECT * FROM top5000 \
WHERE year \ 
BETWEEN 1964 and 1965 \

###Combining
WHERE year > 2010 and song