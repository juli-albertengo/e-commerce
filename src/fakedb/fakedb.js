export default function getBooks(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
}

const products = `[{
	"prodId": 0,
	"title": "Educated",
	"author": "Tara Westover",
	"price": 200,
	"stars": "5 stars",
	"img": "./src/img/educated.png",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Memoir",
	"realeasedDate": "11/27/2018",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 1,
	"title": "Small Great Things",
	"author": "Jodi Picoult",
	"price": 200,
	"stars": "5 stars",
	"img": "sgt",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Novel",
	"realeasedDate": "04/11/2017",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 2,
	"title": "Bad Blood",
	"author": "John Carreyrou",
	"price": 200,
	"stars": "5 stars",
	"img": "https://ibb.co/hmJFrXC",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Non-Fiction",
	"realeasedDate": "07/11/2019",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 3,
	"title": "The Rosie Project",
	"author": "Graeme Simsion",
	"price": 200,
	"stars": "5 stars",
	"img": "rosie",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Novel",
	"realeasedDate": "02/02/2014",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 4,
	"title": "The Choice",
	"author": "Edith Eva Eger",
	"price": 200,
	"stars": "5 stars",
	"img": "thechoice",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Memoir",
	"realeasedDate": "02/01/2019",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 5,
	"title": "Looking for Alaska",
	"author": "John Green",
	"price": 200,
	"stars": "5 stars",
	"img": "lookingforalaska",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Novel",
	"realeasedDate": "03/03/2005",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 6,
	"title": "Little Women",
	"author": "Louisa May Alcott",
	"price": 200,
	"stars": "5 stars",
	"img": "littlewomen",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Novel",
	"realeasedDate": "06/01/2013",
	"reviews": "dontknow",
	"length": "200 pages"
}, {
	"prodId": 7,
	"title": "Extremely Loud and Incredibly Close",
	"author": "Jonathan Safran Foer",
	"price": 200,
	"stars": "5 stars",
	"img": "extremely",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "Novel",
	"realeasedDate": "04/06/2006",
	"reviews": "dontknow",
	"length": "200 pages"
}]`
