# E-Commerce

## Description
Back-end e-commerce program that allows a user to view, add, delete, and update products. Those products can have as many tags as the user desires, and those tags can also be added, deleted, updated, and viewed along with all the products assigned to that tag. Each product can go into one category. The categories can also be added, deleted, updated, and viewed, along with all of the products assigned to the category.

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Usage

This code would ideally be used with a corresponding front-end site that would allow input fields and buttons for adding, updating, creating, and deleting. For this application and project, we'll be running it through the testing program, Insomnia. 

## Installing

If You Want To Create Your Own package.json File

    Upon cloning, run 'npm init -y' in the terminal ONLY if you do not have package.json file. 

    Next, install the npm packages 'mysql2', 'express', 'dotenv', 'sequelize', and the dev dependency, 'nodemon'.

If You Use The package.json File Provided

    Run 'npm install' in the terminal.

## Testing

To test, first seed the data into a database. Next, run nodemon by typing 'npm run watch' or just start the server by running 'node server.js', then open Insomnia and connect to the proper url.

When testing, it's a good idea to have all of the things you would know if you were the front-end user. It's easiest to break the testing down by column. Here is a list of the tables and what data you would need to have to select, update, create, or delete within them. For all three tables, you can do GET requests with no info or do GET requests by the id value.

* Categories:

    * POST: You will be adding 'category_name' and the id will be added automatically.

    * PUT: search by: 'id', update: 'category_name'

    * DELETE: To delete, search by id.

* Products: 

    * POST: You will be adding 'product_name', 'price', 'stock', and 'category_id' with the id being added automatically.

    * PUT: You must know the id of the product, then you can update 'product_name', 'price', 'stock', and/or 'category_id'.

    * DELETE: To delete, search by id.

* Tags:

    * POST: You will be adding 'tag_name' and the id will be added automatically.

    * PUT: search by: 'id', update: 'tag_name'

    * DELETE: To delete, search by id.

## Links
[Github Repo](https://github.com/najuasaad/E-commerce)

[Walkthrough Video]()

## Screenshot

[Screenshot1]