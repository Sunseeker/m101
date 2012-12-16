import pymongo

connection = pymongo.Connection("mongodb://localhost", safe=True)
db = connection.final
images_col = db.images
albums_col = db.albums

def task():
    uniq_ids=albums_col.distinct('images')
    images = images_col.find()
    for image in images:
        img_id = image["_id"]
        if img_id not in uniq_ids:
            images_col.remove({'_id':img_id})
    

def calc():
    images = images_col.find()
    sum = 0
    for image in images:
        sum += image['_id']
    print sum

#task()
calc()
                                                   