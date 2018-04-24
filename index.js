
let display =()=>{
  $(".results").append('<h1>Success!</h1>');
};

let displayError =()=>{
  $(".results").append('<h1>Error!</h1>');
};

var query = 'https://en.wikipedia.org/w/api.php?action=query&titles=&prop=info&inprop=url&format=json&origin=*';

(function(){

  let form = document.querySelector("#submit");
  let input = document.querySelector("#query");


  form.addEventListener("click",function(e){
    console.log('submitted',e);

    var insertParam = param =>{

      let first = query.substring(0,55);
      let after  = query.substring(55,query.length);

      return first + param + after;
    }



    $.get(insertParam(input.value),function(data){
      console.log(data);
      var pageNum = Object.keys(data["query"]["pages"])[0]; //page key uknown, manually get (first key within pages)

      $(".results").append('Query:' + '<h2>' + input.value + '</h2> ' + "Title: " + data["query"]["pages"][pageNum].title);
      $(".results").append('Query:' + '<h2>' + input.value + '</h2> ' + "Link: " + data["query"]["pages"][pageNum].fullurl);

    })
    .error(function(){
      alert('request failed');
    });


    // $.ajax({
    //   dataType:"json",
    //   type: 'GET',
    //   url: query,
    //   error: function(data){
    //     console.log('in sucess',data);
    //     displayError();
    //     //get individual article
    //     //put each article in its own "set, including title, link."
    //   },
    //   success: function(data){
    //     console.log('in sucess',data);
    //     display();
    //     //get individual article
    //     //put each article in its own "set, including title, link."
    //   },
    //   complete: function(){
    //     console.log('queyr',query);
    //   }
    //
    // });

  });







})();
