/* go to mongoDB shell command line */

-------------------CREATE AND READ DATA------------------------------

// create data along with read data - go to command promp after setting mongoDB in pc mongo>
// show dbs-> show database of all db
to create a db cli is #use dbName
use shops
to show db cli #db to enter the shops db
shops 
to make a collection for db just inserOne and it will create
cli #db.products.inserOne({name:'i-phone',price:22222,category:'mobile',active:true})

to see or show product cli #db.products.find()
to see nicely like an object can use pretty #db.products.find().pretty()

to create more data can use #insertMany()
#db.products.insertMany([
    {name:'nokia',price:23232,category:'phone',active:false},
    {
     name:'akashTv',price:3434,category:'tv',active:true
    },
    {
        name:'konka',price:343, category:'tv',active:true
    },
    {
        name:'i-phone',price:544,category:'phone',active:false
    },
    {
        name:'deshTv',price:323,category:'tv',active:true
    }
])

// conditional reading data fetch
to see product which active
#db.products.find({active:true}).pretty()
to see multi conditional data
#db.products.find({active:false,category:'phone'}).pretty()

> db.products.find().pretty()
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 4444,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d13"),
        "name" : "nokia",
        "price" : 34,
        "category" : "phone",
        "active" : false
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d14"),
        "name" : "akashTv",
        "price" : 3232,
        "category" : "tv"
}
{
        "_id" : ObjectId("60a55121077dda196a369d15"),
        "name" : "nokia",
        "price" : 333,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d16"),
        "name" : "akashTv",
        "price" : 355,
        "category" : "tv",
        "active" : false
}
{
        "_id" : ObjectId("60a55121077dda196a369d17"),
        "name" : "iphone",
        "price" : 444,
        "category" : "phone",
        "active" : true
}
>
> db.products.find({active:true}).pretty()
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 4444,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d15"),
        "name" : "nokia",
        "price" : 333,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d17"),
        "name" : "iphone",
        "price" : 444,
        "category" : "phone",
        "active" : true
}
> db.products.find({active:true,category:phone}).pretty()
uncaught exception: ReferenceError: phone is not defined :
@(shell):1:31
> db.products.find({active:true,category:'tv'}).pretty()
>
> db.products.find({active:false,category:'tv'}).pretty()
{
        "_id" : ObjectId("60a55121077dda196a369d16"),
        "name" : "akashTv",
        "price" : 355,
        "category" : "tv",
        "active" : false
}
>



to disable a filed which need not to show active field want not show 
#db.products.find({category:'phone'},{active:0}).pretty()
{
    "_id" : ObjectId("60a54ea5077dda196a369d14"),
    "name" : "akashTv",
    "price" : 3232,
    "category" : "tv"
}
{
    "_id" : ObjectId("60a55121077dda196a369d16"),
    "name" : "akashTv",
    "price" : 355,
    "category" : "tv"
}
>
to see data with a limit of data 
#db.products.find({category:'phone'}).pretty().limit(1)
{
    "_id" : ObjectId("60a54b2f077dda196a369d12"),
    "name" : "samsung",
    "price" : 4444,
    "category" : "phone",
    "active" : true
}
>
// can not combine findeOne() with pretty() its an error

db.products.findOne().pretty()
uncaught exception: TypeError: db.products.findOne(...).pretty is not a function :
@(shell):1:1

> db.products.findOne() // only a one data fetch
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 4444,
        "category" : "phone",
        "active" : true
}
>

//-----------------------------DATA UPDATE---------------------------------------------------------------------

db.products.updateOne({
  name:'samsung'
},{$set:{price:555}})


> db.products.updateOne({name:'samsung'},{$set:{price:555}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.products.findOne({name:'samsung'})
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 555,
        "category" : "phone",
        "active" : true
}
>

db.products.updateMany({},{$set:{active:true}})


db.products.updateMany({},{$set:{active:true}}) // all active will true
{ "acknowledged" : true, "matchedCount" : 6, "modifiedCount" : 3 }
>

db.products.find().pretty()
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 555,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d13"),
        "name" : "nokia",
        "price" : 34,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d14"),
        "name" : "akashTv",
        "price" : 3232,
        "category" : "tv",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d15"),
        "name" : "nokia",
        "price" : 333,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d16"),
        "name" : "akashTv",
        "price" : 355,
        "category" : "tv",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d17"),
        "name" : "iphone",
        "price" : 444,
        "category" : "phone",
        "active" : true
}

//-------------------------DELETE----------------------------------------------------------------------------------

db.products.deleteOne({name:'iphone'})


> db.products.find().pretty()
{
        "_id" : ObjectId("60a54b2f077dda196a369d12"),
        "name" : "samsung",
        "price" : 555,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d13"),
        "name" : "nokia",
        "price" : 34,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a54ea5077dda196a369d14"),
        "name" : "akashTv",
        "price" : 3232,
        "category" : "tv",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d15"),
        "name" : "nokia",
        "price" : 333,
        "category" : "phone",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d16"),
        "name" : "akashTv",
        "price" : 355,
        "category" : "tv",
        "active" : true
}
{
        "_id" : ObjectId("60a55121077dda196a369d17"),
        "name" : "iphone",
        "price" : 444,
        "category" : "phone",
        "active" : true
}
>


db.products.deleteOne({name:'nokia'})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products.find()
{ "_id" : ObjectId("60a54b2f077dda196a369d12"), "name" : "samsung", "price" : 555, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a54ea5077dda196a369d14"), "name" : "akashTv", "price" : 3232, "category" : "tv", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d15"), "name" : "nokia", "price" : 333, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d16"), "name" : "akashTv", "price" : 355, "category" : "tv", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d17"), "name" : "iphone", "price" : 444, "category" : "phone", "active" : true }
>

db.products.deleteOne({name:'akashTv'})
{ "acknowledged" : true, "deletedCount" : 1 }
>

> db.products.find()
{ "_id" : ObjectId("60a54b2f077dda196a369d12"), "name" : "samsung", "price" : 555, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d15"), "name" : "nokia", "price" : 333, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d16"), "name" : "akashTv", "price" : 355, "category" : "tv", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d17"), "name" : "iphone", "price" : 444, "category" : "phone", "active" : true }
>


db.products.deleteMany({category:'tv'})


db.products.deleteMany({category:'tv'})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products.find()
{ "_id" : ObjectId("60a54b2f077dda196a369d12"), "name" : "samsung", "price" : 555, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d15"), "name" : "nokia", "price" : 333, "category" : "phone", "active" : true }
{ "_id" : ObjectId("60a55121077dda196a369d17"), "name" : "iphone", "price" : 444, "category" : "phone", "active" : true }
>

