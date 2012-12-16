            // if field.find('date') == -1:  # filtering out all date fields 
                // if self.lists_db.find_and_modify({'title':title}, {'$set': {field: self.request.POST[field]}}) is None:
use enron
db.messages.findAndModify({query:{"headers.Message-ID": "<8147308.1075851042335.JavaMail.evans@thyme>"}, update:{'$push': {"headers.To":"mrpotatohead@10gen.com"}}})
