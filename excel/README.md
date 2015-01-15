Advanced Search.xlsx

This spreadsheet allows to run a QRadar advanced search and return the resuls directly into Excel for 
visualisation and/or further data analysis.

The spreadsheet is very straightforward. On the  first work sheet, called "Config", you configure:

- the QRadar service IP address,
- the security token to use to access the server (created from the "Authorized services" icon in the admin tab)
- The name of worksheet into which the query results will be placed
- The query itself
 
Once you have done this, simply hit the 'Run Query' button, which will invoke a macro and run the query.

It is recommended not to pull millions of events or flows back into excel, instead your query should filter and/or aggregate the data