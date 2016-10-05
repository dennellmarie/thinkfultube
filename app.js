

// function getDataFromApi(searchTerm, callback) {
//   var settings = {
//     url: YOUTUBE_BASE_URL,
//     data: {
      
//     },
//     dataType: 'json',
//     type: 'GET',
//     success: callback
//   };
//   console.log(settings);
//   $.ajax(settings);
// }



var YOUTUBE_BASE_URL =  "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi(searchTerm, callback) {
  var query = {
      part: 'snippet',
      key: 'AIzaSyBzCCAGYT3T9lYej8oxjsCgNFn4MpqUvK4',
      q: searchTerm
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
  console.log($.getJSON(YOUTUBE_BASE_URL, query, callback));
}

// .responseJSON.items[1].snippet.title
function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<p><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src=' + item.snippet.thumbnails.default.url + '><br>' + item.snippet.title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);

  $('.js-search-results').on('click', 'img', function(event) {
    if (data.items){

    }

});

}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYOUTUBESearchData);
  });
}

$(function(){watchSubmit();});


