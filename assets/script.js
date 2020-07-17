$("#form").submit(function (e) {
    e.preventDefault()

    let result = ''

    var query = $("#search").val()

    var API_KEY = '68aca0b6a6495162ab5f6afa8ca46280'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query

    $.get(url, function(data){
      console.log(data)

      data.organic_results.forEach(res => {

         result = `
         <h1>${res.title}</h1><br><a  target="_blank" href="${res.url}"></a>
         <p>${res.snippet}</p>

         `
         $("#result").append(result) 

      });
    })
});