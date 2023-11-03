let form = document.getElementById('lobby__form')

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let roomId = urlParams.get('room')
let commId = urlParams.get('comm')

if (roomId) {
    document.getElementById('room_name').value = roomId
}
if (commId) {
    document.getElementById(commId).setAttribute('checked', '')
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value
    const selectedComm = document.querySelector('input[name="comm"]:checked').value;
    if (selectedComm == 'Personal_Call')
        window.location = `peer.html?room=${inviteCode}`
    else
        window.location = `group.html?room=${inviteCode}`
})