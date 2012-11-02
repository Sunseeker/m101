import pymongo

connection = pymongo.Connection("mongodb://localhost", safe=True)
db = connection.students
grades = db.grades

def task():
    items_cursor = grades.find().sort('student_id', pymongo.ASCENDING).sort('score', pymongo.ASCENDING)
    print  "found " + str(items_cursor.count()) + " items"
    ids_deleted = []
    items_deleted = 0
    for item in items_cursor:
        current_student_id = item.get('student_id')
        if current_student_id not in ids_deleted:
            items_deleted += 1
            grades.remove(item)
            ids_deleted.append(current_student_id)
    print "items deleted " + str(items_deleted)        
                                                               
                                                   
task()
                                                   