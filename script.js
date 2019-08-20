let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a92fd65580354b0d8cee1ae550fcefc4';

 

fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let data = result;

        // console.log(data.articles[1].author);

        Object.keys(data).forEach((item,key) => {

            let arr = data.articles;
                arr.forEach(item => {
                console.log(data.articles[key].content);

                let div = document.getElementById('app');
                let img = document.createElement('img');
                let h1 = document.createElement('h1');
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                let cont = document.createElement('div');


                h1.innerHTML = item.title;
                li.innerHTML = item.description;
                img.src = item.urlToImage;
                cont.setAttribute('class', 'cont');
                
                
                
                ul.appendChild(li);
                cont.appendChild(h1);
                cont.appendChild(ul);
                cont.appendChild(img);
                

                div.appendChild(cont);
                
                
           
            })
            

            
            
            
            
        });


        
    });
    


