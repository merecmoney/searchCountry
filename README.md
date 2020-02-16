# Search Country

## React Project

### Description

This project basically consists to enter a string _S_ to find a country
, the string _S_ is the preffix _P_ of country name or country
abbreviation to search between all countries' names
and countries' abbreviations, for example for Mexico(country which
I'm from) to find it you could enter __"MX"__ or __"MEX"__

- Find Mexico using preffix __"MX"__ which is its abbreviation

![Find Mexico using preffix "MX"](./../READMEimages/1.png)

- Find Mexico using preffix __"MEX"__ which is its first 3 name characters

![Find Mexico using preffix "MX"](./../READMEimages/2.png)

- You could also find all countries which name or abbreviation start
with __"A"__

![Find all countries with prefix "A"](../READMEimages/3.png)

#### Data Structures Used

- [Trie Tree](https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/): this is used
to search strings that start with preffix P
- [DFS](https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/): used for __Trie Tree__ to transverse
tree
