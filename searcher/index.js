let input = document.getElementById('input').value.toLowerCase()
let dis = document.getElementById('dis')
async function getData() {
  try{
    let response = await fetch(`https://raw.githubusercontent.com/uszer378/ZYXWVU/refs/heads/main/${input}/test.json`)
    if(!response.ok){
      throw new Error("not seeing a thing");
      dis.textContent = `not seeing a thing`
      let son = await response.json()
      dis.textContent = son.who
    }
  }
  catch(error){
    console.error()
  }

}