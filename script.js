
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a92fd65580354b0d8cee1ae550fcefc4';



fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let data = result;

        // console.log(data.articles[1].author);

        Object.keys(data).forEach((item, key) => {

            let arr = data.articles;
            arr.forEach(item => {
                console.log(data.articles[key].content);

                let div = document.getElementById('app');
                let img = document.createElement('img');
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let cont = document.createElement('div');
                let date = document.createElement('p');

                date.innerText = item.publishedAt;
                h1.innerHTML = item.title;
                p.innerHTML = item.description;
                img.src = item.urlToImage;
                cont.setAttribute('class', 'cont');
                date.setAttribute('class', 'date');



                cont.appendChild(h1);
                cont.appendChild(date);
                cont.appendChild(p);
                cont.appendChild(img);

                const visit = () => {
                    location.href = item.url;
                    preventDefault();
                    
                }

            
                cont.onclick = () => {
                    visit();
                }


                div.appendChild(cont);

                const sp = document.getElementsById('sp');
                sp.onclick = () => {
                    sp.style.display = 'none';
                }




            })






        });



    });


