# timestamp
FCC - API Projects - Timestamp microservice

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

### Usage
http://www.tosp.net.au:3000/timestamp/February%2028,%202017  
http://www.tosp.net.au:3000/timestamp/1488200400000  
http://www.tosp.net.au:3000/timestamp/foo-bar-baz

### Outputs
`{"unix": 1488200400000, "natural": "February 28, 2017"}`  
`{"unix": null, "natural": null}`

