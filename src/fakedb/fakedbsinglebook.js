export default function getSingleBook(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(product);
        }, 2000)
    })
}

const product = `{
	"prodId": 0,
	"title": "Educated",
	"author": "Tara Westover",
	"price": 200,
	"stars": "5 stars",
	"img": "./src/img/educated.png",
	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"genre": "memoir",
	"realeasedDate": "11/27/2018",
	"reviews": "dontknow"
}`
