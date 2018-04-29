
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

var query = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&format=json&list=search&origin=*&srsearch=';

(function(){

  let form = document.querySelector("#submit");
  let input = document.querySelector("#query");


  form.addEventListener("click",function(e){
    console.log('submitted',e);

    var insertParam = param =>{


      input.placeholder = input.value;

      return query+input.value;
    }



    $.get(insertParam(input.value),function(data){
      console.log(data);
      // var pageNum = Object.keys(data["query"]["pages"])[0]; //page key uknown, manually get (first key within pages)
      let searcher = data.query.search;
      console.log(searcher);
      // var title = data["query"]["pages"][pageNum].title;
      // var url = data["query"]["pages"][pageNum].fullurl;

      let returnString = '';
      returnString+= 'numpages: ' + searcher.length;

      //put them in neat objects;
      function page(title, wordcount,snippet){
        this.title = title;
        this.wordcount = wordcount;
        this.snippet = snippet;
      }
      for(i=0;i<searcher.length;i++){
        returnString+='<div class="page">';
        returnString+= '<div class="title">' + searcher[i].title + '</div>';
        returnString+='<br>' + searcher[i].wordcount;
        returnString+='<br> ' + searcher[i] .snippet + '</div>';
        returnString+= '<div style="clear:both;"></div>';


      }
      returnString+='<br>';
      //
      // let returnString = '<div class="results"><h2></h2>Title: ' + title + '<br>';
      // returnString += '<a target="_blank" href= ' + url + ' ><h2></h2>Link: ' + url + '</a></div>';

      $('#results').append(returnString);
      $("#results").show();
      // $('#results').show().append(returnString);

    })
    .error(function(){
      alert('request failed');
    });




  });




})();
