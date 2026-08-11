let input = document.getElementById('input').value.toLowerCase
let dis = document.getElementById('dis')
async function getData() {
  let response = await fetch(`../${input}/test.json`)
  let son = await response.json()
  dis.textContent = son.who
}