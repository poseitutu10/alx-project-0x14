## MoviesDatabase API Documentation
Povides complete and updated data for over 9 milion titles ( movies, series and episodes)

## Available Endpoints 
## Request and Response Format
Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

ALL query parameters are OPTIONAL

1. Titles: 

Titles - Multiple:
path: /titles
description: returns array of titles according to filters / sorting query parameters provided
query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
model: title

Titles - By List of Id's:
path: /x/titles-by-ids
description: returns array of titles according to array of id's provided
query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
model: title

Title
path: /titles/{id}
path parameter (required) : id -> imdb id of title
description: returns title acording to filters / sorting query parameters provided
query parameters: info
model: title

Title Rating
path: /titles/{id}/ratings
path parameter (required) : id -> imdb id of title
description: returns title rating and votes number
query parameters: -
model: rating

Seasons and Episodes
path: /titles/series/{id}
path parameter (required) : id -> imdb id of series
description: returns array of episodes only with episode id, episode number and season number in ascending order
query parameters: -
model: light episode

Seasons Number
path: /titles/seasons/{id}
path parameter (required) : id -> imdb id of series
description: returns number of seasons for the series (integer)
query parameters: -

Episodes Id`s By Series Id and Season
path: /titles/series/{id}/{season}
path parameter (required) : id -> imdb id of series, season -> season number
description: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
query parameters: -
model: light episode

Episode
path: /titles/episode/{id}
path parameter (required) : id -> imdb id of episode
description: returns episode according to filters / sorting query parameters provided
query parameters: info
model: title

Upcoming Titles
path: /titles/x/upcoming
description: returns array of upcoming titles according to filters / sorting query parameters provided
query parameters: multiple
model: title


2. Search
a. Titles by Keyword
path: /titles/search/keyword/{keyword}
path parameter (required) : keyword
description: returns array of titles according to filters / sorting query parameters provided and the keyword provided in path
query parameters: multiple
model: title

b. Titles by Title
path: /titles/search/title/{title}
path parameter (required) : title -> a title or part of a title
description: returns array of titles according to filters / sorting query parameters provided and the title provided in path
query parameters: *multiple, uniq query parameter exact that sets the looku to be exact default : false
model: title

c. Titles by Aka's
path: /titles/search/akas/{aka}
path parameter (required) :aka -> a aka of a title ( exact only and case sensitive )
description: returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches
query parameters: multiple
model: title


## Authentication
headers must contain {
x-rapidapi-key, and x-rapidapi-host
}

## Error Handling

## Usage Limits and Best Practices

