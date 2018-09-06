## Getting Associated With Relations

# CRUD Methods Remidner 3
+ findOne: finds a single record from a table
+ findAll: finds a all records
+ create: 
+ update:
+ destroy: deletes a record from the table

# Sequelize
+ What does where do? What might we use it for?
  * Find something by a value in the data
+ What are validations?
  * Validates whether user input is authentic
  * Length, regex, etc
  
  ({force: true}) : forces database recreation on every run of application.
  ]
  
  **hasMany** are connecting one source with multiple targets. \

**belongsTo** relation will be generated from the target model name and the primary author name. \

foreign key: has defaults that are immediately set. These include id being the main value and allowNull: true

onDelete: "cascade" deletes all files associated with the relationship between a belongsto and hasmany relationship.

include: modelName