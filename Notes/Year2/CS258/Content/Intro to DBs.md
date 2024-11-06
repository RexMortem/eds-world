

## Key Facts 

## Relational Model 

A **relation** is a table of values, like below:

| StudentID | Grade | Age |
| --------- | ----- | --- |
|           |       |     |
|           |       |     |
|           |       |     |
|           |       |     |

A **relation** has:
- rows which are called ***tuples*** (denoted by $<\dots>$ in CS258)
- columns, as the relation is a set of rows

Each tuple: 
- has data elements (in the rows) that correspond to real-world data 
	- Each data element has a set of valid values (or a **domain**)
		- For example, the domain of Grade may be $\{1, 2, 3, \dots , 100\}$
		- Domains also often have formats 
- is uniquely identifiable (by the key)
	- An assigned ID (which can be a sequential number) are called ***artificial*** or ***surrogate***

The set of rows is also called a relation's state. 
- state $\subseteq a_{1} \times a_{2} \times \dots \times a_{n}$ where $a_{i}$ is the domain of the corresponding attribute.  

You might ask about the headers, since they appear to be the first tuple in the relation.  
The headers are called ***attribute names***, and they are for interpreting the data elements.

### Schema

The **Schema** of a relation is a description, in the form $RELATION(A1, A2, \dots, A_{n})$. 
For example, the schema for the above relation is $STUDENT(StudentID, \; Grade, \; Age)$.

## Relational DB Constraints 

### Key Constraints 

### Entity Integrity Constraints 

Why should all info not be stored in one table? 
	- Lots of redundant data 

