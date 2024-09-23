function saveData() {
     // Getting values from input fields
     let title = document.getElementById('title').value;
     let cName = document.getElementById('cName').value;
     let views = document.getElementById('views').value;
     let month = document.getElementById('month').value;
     let duration = document.getElementById('duration').value;
     let imagePath = document.getElementById('image_path').value;

     // Displaying the card and setting values
     document.getElementById('cardTitle').innerText = title;
     document.getElementById('cardCName').innerText = cName;
     document.getElementById('cardViews').innerText = views;
     document.getElementById('cardMonth').innerText = month;
     document.getElementById('cardDuration').innerText = duration;
     document.getElementById('cardImage').src = imagePath;

     // Show the card
     document.getElementById('cardContainer').style.display = 'block';
 }