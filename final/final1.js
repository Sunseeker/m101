use enron
db.messages.find({"headers.From": "andrew.fastow@enron.com", "headers.To": "jeff.skilling@enron.com"}).count()
