db.restaurants.createIndex({});
db.restaurants.createIndex({"restaurant_id": 1, "name": 1});
db.restaurants.createIndex({"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.restaurants.createIndex({"restaurant_id": 1, "name": 1, "address.zipcode": 1});
db.restaurants.createIndex({"borough": "Bronx"});
db.restaurants.createIndex({"borough": "Bronx"}).limit(5);
db.restaurants.createIndex({"borough": "Bronx"}).skip(5).limit(5);  
