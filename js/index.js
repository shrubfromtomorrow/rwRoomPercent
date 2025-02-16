const form = document.querySelector('#roomForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const roomName = formData.get("roomID");
    const enterFrom = formData.get("enterFrom");
    const exitTo = formData.get("exitTo");
    
    fetch("https://rwroompercent.shrub.one/fetch", {
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