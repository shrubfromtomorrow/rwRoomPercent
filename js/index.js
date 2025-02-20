const form = document.querySelector('#roomForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const roomName = formData.get("roomID");
    const enterFrom = formData.get("enterFrom");
    const exitTo = formData.get("exitTo");
    
    fetch("https://1pgw260ry3.execute-api.us-west-2.amazonaws.com/dev", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        "room": roomName,
        "enterFrom": enterFrom,
        "exitTo" : exitTo
    })
    });
    
})
