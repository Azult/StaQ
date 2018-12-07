function stackSearch(){
  var xmlhttp = new XMLHttpRequest();
  var question = document.getElementById('question').value;
  const url = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + question + '&site=stackoverflow';

  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var theResponse = JSON.parse(this.responseText)["items"][0]["accepted_answer_id"];
    chrome.tabs.create({ url: 'https://stackoverflow.com/a/' + theResponse });
  }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  //["accepted_answer_id"];
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', stackSearch);
});
