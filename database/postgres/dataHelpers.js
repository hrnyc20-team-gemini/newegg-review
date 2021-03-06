const {author, body, pros, cons, title, date, verified, item_id, eggs} = require('../generator')
const faker = require('faker');

//someStaticData
var staticObj = {
  title: title(),
  pros: pros(),
  cons: cons(),
  body: body(),
  author: author()
}
// var staticArr = JSON.stringify([title(), pros(), cons(), body(), author()])

module.exports = {
  // value_gen: () => {
  //   var obj = {}
  //     obj['static_data'] = staticArr;
  //     obj['item_id'] = item_id(10000000);
  //     obj['review_data'] = JSON.stringify([verified(), date(1000), eggs(5)])
  //   return obj;
  // }
  value_gen: () => {
    var obj = {};
    obj['title'] = staticObj.title;
    obj['pros'] = staticObj.pros;
    obj['cons'] = staticObj.cons;
    obj['body'] = staticObj.body;
    obj['verified'] = verified();
    obj['date'] = date(1000);
    obj['eggs'] = eggs(5);
    obj['author'] = staticObj.author;
    obj['item_id'] = item_id(10000000);
    return obj;
  }
}