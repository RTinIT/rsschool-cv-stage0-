#Artyom Aleksikov
---
###Junior Frontend Developer

---

###Contacts
* Location: Russia, Volgograd.
* <img alt = "Phone" src = "pho.png" width = "25px"> 8-919-799-1561, 8-917-648-8980
* <img alt = "Discord" src = "dic.jpg" width = "25px"> rtinit \#7770
* <img alt = "Email" src = "gmail.png" width = "25px"> fizrukaleksikov@gmail.com

---
###About me
I'm an entury-level specialist and I don't have work experience, but my goal is to become the best in this direction. I'm constantly in search of new opportunities for self-study. I'm purposeful, fast-learning, stress-resistant, responsible, honest and open.

---

###Skills
* HTML
* CSS
* JavaScript Basic
* Git
* Markdown

---

###Code Exemple

```javascript
// The Binary Search. 
// There is an ordered Array.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];      
// Function decloration.
let binarySearch = function(numbers, element) {
// Setting the higher and lower Numbers.    
    let low = 0;
    let high = numbers.length - 1;
// Declaring a variable mid.    
    let mid;
// Using while to compare with Element.  
    while (low <= high) {
// Writing  a Formula to find the Middle of the Array.
        mid = Math.round((high - low)/2) + low;

        if (element === numbers[mid]) {
            return mid;            
        } else if (element < numbers[mid]) {
            high = mid - 1;
        } else if (element > numbers[mid]) {
            low = mid + 1;
        }
    }
//If there is not Element you're looking for that return -1.    
    return -1;
}

console.log(binarySearch(array, 7));
```
---

###Education
* YouTube, Google - in progress.
* [Stage#0. Знакомство с профессией "JS/Front-end разработчик"](https://github.com/rolling-scopes-school/tasks/tree/master/stage0) - in progress.

---

###Languages
* Russian native.
* English - A2, in progress.
