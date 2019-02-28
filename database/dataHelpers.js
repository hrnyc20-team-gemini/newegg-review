const {author, body, pros, cons, title, date, verified, item_id, eggs} = require('./generator')

module.exports = {
  value_gen: (n) => {
    var values = [];
    var obj = {}
    for (var i = 0; i < n; i++) {
        values.push([title(), pros(), cons(), body(), verified(), date(1000), eggs(5), author()])
        obj['review_array'] = JSON.stringify(values)
    }
    if (obj !== undefined) {
      return obj;
    }
  }
}