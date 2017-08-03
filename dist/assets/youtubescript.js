var channelName = 'theNorimoji'

var setup = (function() { 
  return { 
    init: function() { 
    setup.get("https://www.googleapis.com/youtube/v3/channels",{
        part: 'contentDetails',
        forUsername: channelName,
        key: 'AIzaSyDDGhRiU8zxuGisXmyi2Lze7hq66FAM1Zk'},
        function(data){
          jQuery.each(data.items, function(i, item){
            console.log(item);
            item.contentDetails.relatedPlaylists.uploads;
          })
        }
    );
    } 
  } 
})(setup||{})
