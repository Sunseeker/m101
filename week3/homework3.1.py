import pymongo

connection = pymongo.Connection("mongodb://localhost", safe=True)
db = connection.school
students = db.students

                                                   
def task():
    items_cursor = students.find({}, {"scores":1})
#    items_cursor = students.find({}, {"scores":1}).limit(2)
    for item in items_cursor:
        print "working for item " + str(item.get('_id'))
        scores_list = item.get('scores')
        scores_list.sort()
        print "scores list before -- > " + str(scores_list)        
        for score in scores_list:
            if score.get('type') == 'homework':
                print "removing score " + str(score.get('score'))
                index = scores_list.index(score)
                scores_list.pop(index)
                break
        print "scores list after -- > " + str(scores_list)
        print "removing item id " + str(item.get('_id'))
        students.find_and_modify({"_id": item.get('_id')}, {'$set': {"scores": scores_list}})
        print ''
                                                   
task()
                                                   