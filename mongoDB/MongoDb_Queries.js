1) db.getCollection('people').find({"jobs.avg_salary": {$gte: 100000}}).count();
2)
db.people.aggregate(
[
{$group: {_id:"$city", count: {$sum:1}}},
{$sort: {count: -1}},
{$limit:1}
]
);

3)
db.people.aggregate(
[
{$match: {"city.population":{$gt:10000000}}},
{$group: {_id:"$sex", count: {$sum: 1}}},
]
);
4)
db.people.aggregate([
{$match: {"sex": "Female", "ashleymadison.frequency":{$lte: 50}}},
{$group:{_id:"$people_id", count:{$sum:1}}}
]);

db.people.aggregate([
{$match: {"sex": "Female", "ashleymadison.frequency":{$lte: 50}}},
{$group:{_id:"$ashleymadison.password_id", count:{$sum:1}}}
]);

5)
db.people.aggregate([
{$match: {"city.population":{$lt: 60000}}},
{$group:{_id:"$city.city_id",pop:{$min:"$city.population"}, count:{$sum:1}}},
{$sort: {count:-1}},
{$limit:1}
]);

6)
db.at_date.aggregate([
{$match: {succesful: "Y"}},
{$group:{_id:"$types.type_id", count:{$sum:1}}},
{$sort:{count:-1}},
{$limit:2}
]);

7)
db.getCollection('people').find({"jobs.avg_salary": {$gte:150000},"plus.frequency": {$gt:65}}).count()

8)
db.people.aggregate([
{$group:{_id:"$jobs.name", countEmployees:{$sum:1}}},
{$sort:{countEmployees:-1}},
{$limit:4}
]);

9)
db.ashleymadison.aggregate([
{$match: {"dates.succesful": "Y"}},
{$group:{_id:"$password", countP:{$sum:1}}},
{$sort:{countP:-1}},
{$limit:5}
]);

10)
db.people.aggregate([
{$match: {"jobs.avg_salary": {$gte: 350000}}},
{$group:{_id:"$city.name",salary:{$min:"$jobs.avg_salary"}, countP:{$sum:1}}},
{$sort:{countP:-1}},
{$limit:3}
]);