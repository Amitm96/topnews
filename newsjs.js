let apikey = 'db5dfdd66911466ea4e7490392ecdb23';
let newsaccord = document.getElementById('newsaccord');
let country = 'in'
const xhr = new XMLHttpRequest();

xhr.open('GET' , `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}` , true);
xhr.onload = function(){
    
    if(this.status === 200){
        str = '';
        let obj = JSON.parse(this.responseText);
        let i = 1;
        obj.articles.forEach(art =>{
            let readmore = art.url;
            let title = art.title;
            let desc = art.description;
            str += `<div class="card">
            <div class="card-header" id="heading${i}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                  ${title}
                </button>
              </h2>
            </div>
        
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#newsaccord">
              <div class="card-body">
              ${desc} <a href="${readmore}" target="_blank">read full news</a>
              </div>
            </div>
          </div>`
          i += 1;
        })
        newsaccord.innerHTML = str;
    }
}

xhr.send();