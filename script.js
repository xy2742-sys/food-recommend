const recipes = [
  {name:"味噌三文鱼碗",country:"JAPAN · 日本",region:"🇯🇵 日本料理",emoji:"🍜",description:"鲜香味噌三文鱼配糙米、牛油果和脆爽黄瓜，一碗吃进海边的清新。",time:25,calories:480,level:"简单",rating:"4.9",tags:["高蛋白","均衡一餐"],filters:["protein","quick"],color:"#f5ebd9"},
  {name:"地中海鹰嘴豆沙拉",country:"GREECE · 希腊",region:"🇬🇷 希腊料理",emoji:"🥗",description:"番茄、黄瓜、橄榄和羊乳酪，拌入柠檬橄榄油，清爽得像吹来一阵海风。",time:15,calories:360,level:"简单",rating:"4.8",tags:["清爽轻食","植物蛋白"],filters:["light","quick","vegetarian"],color:"#e8edcf"},
  {name:"日式照烧鸡肉饭",country:"JAPAN · 日本",region:"🇯🇵 日本料理",emoji:"🍱",description:"甜咸照烧汁裹住嫩鸡腿，配上米饭和时蔬，熟悉又满足的经典一餐。",time:25,calories:520,level:"简单",rating:"4.9",tags:["高蛋白","暖心主食"],filters:["protein","quick"],color:"#f1e2ce"},
  {name:"墨西哥黑豆塔可",country:"MEXICO · 墨西哥",region:"🇲🇽 墨西哥料理",emoji:"🌮",description:"香料黑豆、牛油果莎莎和青柠挤进玉米饼，酸爽鲜香，每一口都很有活力。",time:20,calories:410,level:"简单",rating:"4.8",tags:["植物蛋白","素食友好"],filters:["light","quick","vegetarian"],color:"#f4e6c8"},
  {name:"泰式椰香绿咖喱",country:"THAILAND · 泰国",region:"🇹🇭 泰国料理",emoji:"🍛",description:"椰奶的柔滑、青咖喱的香气和时令蔬菜慢慢融合，配一碗热米饭刚刚好。",time:30,calories:440,level:"简单",rating:"4.9",tags:["暖心主食","素食可选"],filters:["light","vegetarian"],color:"#e7ecd9"},
  {name:"意式番茄罗勒意面",country:"ITALY · 意大利",region:"🇮🇹 意大利料理",emoji:"🍝",description:"熟成番茄与新鲜罗勒在锅中交织，撒上帕玛森，让简单食材也闪闪发光。",time:20,calories:430,level:"简单",rating:"4.8",tags:["清爽轻食","素食友好"],filters:["light","quick","vegetarian"],color:"#f3e1d5"},
  {name:"韩式牛肉拌饭",country:"KOREA · 韩国",region:"🇰🇷 韩国料理",emoji:"🍲",description:"香煎牛肉、彩色蔬菜和一颗溏心蛋，拌上微辣酱汁，满满一碗能量。",time:25,calories:510,level:"简单",rating:"4.9",tags:["高蛋白","均衡一餐"],filters:["protein","quick"],color:"#f0dfd3"},
  {name:"印度香料烤花椰菜",country:"INDIA · 印度",region:"🇮🇳 印度料理",emoji:"🥘",description:"姜黄、孜然和酸奶让烤花椰菜香气四溢，配上暖呼呼的扁豆，饱足又轻盈。",time:30,calories:390,level:"简单",rating:"4.7",tags:["清爽轻食","素食友好"],filters:["light","vegetarian"],color:"#efe5cc"},
  {name:"越南香茅鸡肉米纸卷",country:"VIETNAM · 越南",region:"🇻🇳 越南料理",emoji:"🥢",description:"香茅鸡肉、新鲜薄荷和脆蔬菜裹进米纸，蘸一点酸甜酱，清新不负担。",time:25,calories:350,level:"简单",rating:"4.8",tags:["清爽轻食","高蛋白"],filters:["light","protein","quick"],color:"#e9edda"},
  {name:"法式蘑菇荞麦薄饼",country:"FRANCE · 法国",region:"🇫🇷 法国料理",emoji:"🥞",description:"荞麦薄饼包裹奶香蘑菇和嫩菠菜，边缘煎得酥脆，来一份悠闲的法式午餐。",time:25,calories:420,level:"简单",rating:"4.7",tags:["素食友好","均衡一餐"],filters:["light","vegetarian","quick"],color:"#eee9da"},
  {name:"美式烤鸡藜麦碗",country:"USA · 美国",region:"🇺🇸 美式料理",emoji:"🍗",description:"香草烤鸡、藜麦和烤南瓜一起入碗，营养扎实，忙碌的一天也能好好吃饭。",time:30,calories:490,level:"简单",rating:"4.8",tags:["高蛋白","均衡一餐"],filters:["protein"],color:"#f0e3d3"},
  {name:"土耳其扁豆汤",country:"TURKEY · 土耳其",region:"🇹🇷 土耳其料理",emoji:"🍲",description:"红扁豆和温暖香料炖成绵密浓汤，滴几滴柠檬，简单食材也能带来踏实满足。",time:30,calories:330,level:"简单",rating:"4.8",tags:["植物蛋白","素食友好"],filters:["light","vegetarian"],color:"#f1e0d0"}
];
let currentFilter = "all";
let currentRecipe = recipes[0];
let shuffleCount = 0;

function chooseRecipe() {
  const options = recipes.filter(recipe => currentFilter === "all" || recipe.filters.includes(currentFilter));
  const alternatives = options.filter(recipe => recipe !== currentRecipe);
  const pool = alternatives.length ? alternatives : options;
  currentRecipe = pool[Math.floor(Math.random() * pool.length)];
  shuffleCount++;
  renderRecipe();
}

function renderRecipe() {
  const recipe = currentRecipe;
  document.querySelector("#food-emoji").textContent = recipe.emoji;
  document.querySelector("#food-emoji").setAttribute("aria-label", recipe.name);
  document.querySelector("#art-country").textContent = recipe.country;
  document.querySelector("#region-label").textContent = recipe.region;
  document.querySelector("#recipe-name").textContent = recipe.name;
  document.querySelector("#recipe-description").textContent = recipe.description;
  document.querySelector("#recipe-time").textContent = `${recipe.time} 分钟`;
  document.querySelector("#recipe-calories").textContent = `约 ${recipe.calories} kcal`;
  document.querySelector("#recipe-level").textContent = recipe.level;
  document.querySelector("#rating").textContent = recipe.rating;
  document.querySelector("#recipe-tags").innerHTML = recipe.tags.map(tag => `<span>${tag}</span>`).join("");
  document.querySelector("#recipe-art").style.background = `radial-gradient(ellipse at 49% 49%, #fff8e7 0%, ${recipe.color} 100%)`;
  const card = document.querySelector(".recipe-card");
  card.style.animation = "none";
  requestAnimationFrame(() => { card.style.animation = "card-in .35s ease both"; });
  document.querySelector("#button-label").textContent = shuffleCount === 0 ? "换一道试试" : "再换一道";
  document.querySelector("#shuffle-hint").textContent = shuffleCount === 0 ? "好主意值得多试几次" : `已经为你发现 ${shuffleCount} 道灵感`;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    chooseRecipe();
  });
});
document.querySelector("#shuffle-button").addEventListener("click", chooseRecipe);
