const adapter = new LocalStorage('db')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], books: [] })
  .write()

var borrowBtn = document.getElementById('borrow-btn');
borrowBtn.addEventListener('click', onBorrowBtnClick);

function onBorrowBtnClick() {
	console.log('aaa');
}
