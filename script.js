  let attack = document.getElementById("attack_btn");
  let defense = document.getElementById("defense_btn");   
  let bossHp = 100
  let myHp = 100
  attack.addEventListener("click", () => {
      const damage1 = Math.floor(Math.random() * 20) + 1;
      const damage2 = Math.floor(Math.random() * 20) + 1;
      bossHp -= damage1
      myHp -= damage2
      console.log(bossHp, myHp)
  })
  defense.addEventListener("click", () => {
      const damage = Math.floor(Math.random() * 20) + 1;
      myHp -= damage / 2
      console.log(bossHp, myHp)
  })
  reset.addEventListener("click", () => {
    myHp = 0 && window.confirm("HP前回復")
    console.log(bossHp, myHp)
})
  
