// const div = document.createElement('div')
// console.log(div)

// const div = document.createElement('div')
// div.classList.add('active')
// console.log(div)

// const b = document.createElement('b')
// b.classList.add('first', 'second')
// console.log(b)

// const ul = document.createElement('ul')
// ul.classList.add('list')
// const li = document.createElement('li')
// li.textContent = 'Привет мир'
// ul.prepend(li)
// console.log(ul)

// const div = document.createElement('div')
// const div1 = document.createElement('div')
// const div2 = document.createElement('div')

// div.classList.add('red')
// div1.classList.add('green')
// div2.classList.add('blue')

// div2.textContent = 'Я вложен'

// div.append(div1)
// div1.append(div2)
// root.append(div)
// console.log(div)

// const div = document.createElement('div')
// const ul = document.createElement('ul')
// const li = document.createElement('li')
// const li1 = document.createElement('li')
// const a = document.createElement('a')
// const a1 = document.createElement('a')

// div.append(ul)
// ul.append(li)
// li.append(a)
// a.href = 'https://instagram.com/intocode'
// a.textContent = 'instagram'
// ul.append(li1)
// li1.append(a1)
// a1.href = 'https://intocode.ru'
// a1.textContent = 'наш сайт'
// root.append(div)

// Сколько всего узлов тебе пришлось создать? ---- 6
// Объясни почему из-за добавления одного узла на странице появились и все остальные? ---- Потому что все остальные узлы вложенны в родительский, и при вызове родительского соотвественно выводятся все дочерние вместе с ним

// let arr = ["html", "css", "js"]
// const ul = document.createElement('ul')
// for(let i = 0; i < arr.length; i++) {
//     const li = document.createElement('li')
//     li.append(arr[i])
//     ul.append(li)
// }
// root.append(ul)


// let array = ["html", "css", "js"];

// const div = document.createElement('div');

// function render (arr) {
  //     const div = document.createElement('div');
  
  //     for (let i = 0; i < arr.length; i++) {
    //         const p = document.createElement('p');
    //         p.textContent = arr[i];
    
    //         root.append(div);
    //         div.append(p);
    //     }
    // }
    // render(array);
    
    // const array = [
      //   {
        //     name: "Google",
        //     url: "https://google.com",
        //   },
        //   {
          //     name: "Instagram",
          //     url: "https://instagram.com",
          //   },
          //   {
            //     name: "intocode",
            //     url: "https://intocode.ru",
            //   },
            // ];
            
            // function render(arr) {
              //     const ul = document.createElement("ul");
              //   for (let i = 0; i < arr.length; i++) {
                //     const li = document.createElement("li");
                //     const a = document.createElement("a");
                //     a.href = arr[i].url;
                //     a.textContent = arr[i].name;
                //     li.append(a);
                //     ul.append(li);
                //   }
                //   root.append(ul)
                // }
                // render(array);
                // const root = document.getElementById("root");