// function changeMode(){
//     var rootElm = document.getElementById('rootElm') ;
//     var lightModeIcon = document.getElementById('lightModeIcon') ;
//     var darkModeIcon = document.getElementById('darkModeIcon') ;
   
//     var mode =  rootElm.getAttribute('data-bs-theme')
//     console.log(mode);
//     if(mode == "dark") {
//       mode = "light"
//     } else {
//       mode = "dark"
//     }
//     rootElm.setAttribute('data-bs-theme' ,mode )
    
    
    
//   }
// var productNameInput = document.getElementById('productName');
// var productPriceInput = document.getElementById('productPrice');
// var productCategoryInput = document.getElementById('productCategory');
// var productDescInput = document.getElementById('productDesc');
// var productList = [];
// function addProduct(){
//     var product = {
//         name: productNameInput.value ,
//         price: productPriceInput.value ,
//         category: productCategoryInput.value ,
//         desc: productDescInput.value ,
//     };
//     productList.push(product);
//     console.log(productList);
// }  
var quotesList = [
  { authorName : 'Oscar Wilde', 
    quote : 'Be yourself; everyone else is already taken.'
  },
  { authorName : 'Marilyn Monroe', 
    quote : `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.
             But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`
  },
  { authorName : 'Frank Zappa', 
    quote : 'So many books, so little time.'
  },
  
  { authorName : 'Albert Einstein', 
    quote : `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
  },
  { authorName : 'Marcus Tullius Cicero', 
    quote : 'A room without books is like a body without a soul.'
  },
  { authorName : 'Bernard M. Baruch', 
    quote : `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`
  },
  { authorName : 'William W. Purkey', 
    quote : `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's never-ending.`
  },
  { authorName : 'Dr. Seuss', 
    quote : `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`
  },
  { authorName : 'Mae West', 
    quote : 'You only live once, but if you do it right, once is enough.'
  },
  { authorName : 'Mahatma Gandhi', 
    quote : `Be the change that you wish to see in the world.`
  },
  { authorName : 'Robert Frost', 
    quote : `In three words I can sum up everything I've learned about life: it goes on.`
  },
];

function showQuote(){
  var quoteObject = quotesList[Math.floor(Math.random()*quotesList.length)];
  console.log(quoteObject);
  document.getElementById("quote").innerHTML = `"${quoteObject.quote}"`;
  document.getElementById("autherName").innerHTML = `--${quoteObject.authorName}`;
}