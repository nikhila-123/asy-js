function showUserCreateBox() {
    Swal.fire({
      title: 'Create posts',
      html:
        '<input id="id" type="hidden">' +
        '<input id="fname" class="swal2-input" placeholder="id">' +
        '<input id="lname" class="swal2-input" placeholder="userId">' +
        '<input id="username" class="swal2-input" placeholder="title">' +
        '<input id="email" class="swal2-input" placeholder="body">',
      focusConfirm: false,
      preConfirm: () => {
        userCreate();
      }
    })
  }
  
  function userCreate() {
    const fname = document.getElementById("id").value;
    const lname = document.getElementById("userId").value;
    const username = document.getElementById("title").value;
    const email = document.getElementById("body").value;
     console.log(fname); 
     console.log(lname);
     console.log(username );
     console.log(email);
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ 
      "id": fname, "userId": lname, "title": username, "body": email, 
      
      
    }));
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const objects = JSON.parse(this.responseText);
        Swal.fire(objects['message']);
        loadTable();
      }
    };
  }


