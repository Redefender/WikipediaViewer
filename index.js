
let display =()=>{
  $(".results").append('<h1>Success!</h1>');
};

let displayError =()=>{
  $(".results").append('<h1>Error!</h1>');
};

$(".container").first().on("click",function(){
  $(this).hide();
  $("form").parent().show();
})

let question = document.querySelector("#question");
question.addEventListener("hover",function(){

});
console.log(question);

var query = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&format=json&list=search&origin=*&srsearch=';

(function(){

  let form = document.querySelector("#submit");
  let input = document.querySelector("#query");

  input.addEventListener("focus",function(e){
    e.preventDefault();
  });


  form.addEventListener("click",function(e){
    console.log('submitted',e);

    var insertParam = param =>{


      input.placeholder = input.value;

      return query+input.value;
    };

    $.get(insertParam(input.value),function(data){

      let searcher = data.query.search;
      let returnString = '';


      for(i=0;i<searcher.length;i++){

        //create page elements
        let page = document.createElement("div");
        let title = document.createElement("div");
        let snippet = document.createElement("div");
        let results = document.querySelector("#results");

        // add attributes
        title.innerHTML = searcher[i].title;
        title.class = 'title';

        snippet.innerHTML = searcher[i].snippet;

        page.appendChild(title);
        page.appendChild(snippet);

        page.id = "article" + i;
        page.className = "page";
        page.style.cursor = "pointer";

        page.addEventListener("click",()=>{
          let url = "https://en.wikipedia.org/wiki/ " + title.innerHTML;

          window.open(url,'_blank');


        });

        results.appendChild(page);

      }

      $("#results").show();

    })
    .error(function(){
      alert('request failed');
    });

  });

})();
