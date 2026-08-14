let dis = document.getElementById('dis')
let link = document.getElementById('link')
let auth = document.getElementById('auth')
async function getData() {
  const input = document.getElementById('input').value.toLowerCase()
  try {
    let response = await fetch(`https://raw.githubusercontent.com/uszer378/ZYXWVU/refs/heads/main/${input}/test.json`)

    if (!response.ok) {
      dis.textContent = `not seeing a thing`
      throw new Error('Network response was not ok')
    }
    let son = await response.json();
    auth.textContent = son.who

  } catch (error) {
    
  }
}