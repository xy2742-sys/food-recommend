const copy = {
  zh: {
    title: "吃点什么？— 每日食谱灵感", description: "不知道今天吃什么？抽取一道来自世界各地的美味灵感。",
    brand: "吃点什么", topNote: "一点灵感，好好吃饭", headlineLead: "今天，", headlineAccent: "吃点什么？",
    introOne: "选择一种心情，让来自世界各地的好味道", introTwo: "替你做决定。",
    discover: "发现今日食谱", controlTitle: "今天想吃得怎么样？", controlSubtitle: "选一个偏好，找到刚刚好的那一餐",
    filters: {all:"随便来点",light:"清爽轻食",protein:"高蛋白",quick:"30 分钟内",vegetarian:"素食友好"},
    time: "分钟", calories: value => `约 ${value} kcal`, level: "简单", shuffle: "换一道试试", shuffleAgain: "再换一道",
    hint: "好主意值得多试几次", discoveries: count => `已经为你发现 ${count} 道灵感`, bottom: "好好吃饭，不必想太多。",
    footer: "灵感来自世界各地 · 每天都值得好好吃饭", language: "选择语言", tags: {"高蛋白":"高蛋白","均衡一餐":"均衡一餐","清爽轻食":"清爽轻食","植物蛋白":"植物蛋白","暖心主食":"暖心主食","素食友好":"素食友好","素食可选":"素食可选"}
  },
  en: {
    title: "What's for Dinner? — Daily Recipe Inspiration", description: "Not sure what to eat today? Discover delicious recipe inspiration from around the world.",
    brand: "What's for dinner", topNote: "A little inspiration, a better meal", headlineLead: "What sounds ", headlineAccent: "good today?",
    introOne: "Pick a craving and let flavors from around the world", introTwo: "make the choice for you.",
    discover: "Discover today's recipe", controlTitle: "What are you in the mood for?", controlSubtitle: "Pick a preference to find just the right meal",
    filters: {all:"Surprise me",light:"Light & fresh",protein:"High protein",quick:"Under 30 min",vegetarian:"Vegetarian"},
    time: "min", calories: value => `About ${value} kcal`, level: "Easy", shuffle: "Surprise me", shuffleAgain: "Another idea",
    hint: "Good ideas are worth exploring", discoveries: count => `${count} recipe ideas explored`, bottom: "Eat well. Enjoy the moment.",
    footer: "Flavors from around the world · Make every meal a good one", language: "Choose language", tags: {"高蛋白":"High protein","均衡一餐":"Balanced meal","清爽轻食":"Light & fresh","植物蛋白":"Plant protein","暖心主食":"Comfort food","素食友好":"Vegetarian","素食可选":"Vegetarian option"}
  }
};

const recipes = [
  {name:{zh:"味噌三文鱼碗",en:"Miso Salmon Bowl"},country:{zh:"JAPAN · 日本",en:"JAPAN"},region:{zh:"🇯🇵 日本料理",en:"🇯🇵 Japanese"},emoji:"🍜",description:{zh:"鲜香味噌三文鱼配糙米、牛油果和脆爽黄瓜，一碗吃进海边的清新。",en:"Savory miso salmon with brown rice, creamy avocado, and crisp cucumber—a fresh taste of the coast."},time:25,calories:480,rating:"4.9",tags:["高蛋白","均衡一餐"],filters:["protein","quick"],color:"#f5ebd9"},
  {name:{zh:"地中海鹰嘴豆沙拉",en:"Mediterranean Chickpea Salad"},country:{zh:"GREECE · 希腊",en:"GREECE"},region:{zh:"🇬🇷 希腊料理",en:"🇬🇷 Greek"},emoji:"🥗",description:{zh:"番茄、黄瓜、橄榄和羊乳酪，拌入柠檬橄榄油，清爽得像吹来一阵海风。",en:"Tomatoes, cucumber, olives, and feta tossed with lemony olive oil—bright and breezy as a sea breeze."},time:15,calories:360,rating:"4.8",tags:["清爽轻食","植物蛋白"],filters:["light","quick","vegetarian"],color:"#e8edcf"},
  {name:{zh:"日式照烧鸡肉饭",en:"Teriyaki Chicken Rice Bowl"},country:{zh:"JAPAN · 日本",en:"JAPAN"},region:{zh:"🇯🇵 日本料理",en:"🇯🇵 Japanese"},emoji:"🍱",description:{zh:"甜咸照烧汁裹住嫩鸡腿，配上米饭和时蔬，熟悉又满足的经典一餐。",en:"Tender chicken glazed in sweet-savory teriyaki, served with rice and vegetables for a comforting classic."},time:25,calories:520,rating:"4.9",tags:["高蛋白","暖心主食"],filters:["protein","quick"],color:"#f1e2ce"},
  {name:{zh:"墨西哥黑豆塔可",en:"Mexican Black Bean Tacos"},country:{zh:"MEXICO · 墨西哥",en:"MEXICO"},region:{zh:"🇲🇽 墨西哥料理",en:"🇲🇽 Mexican"},emoji:"🌮",description:{zh:"香料黑豆、牛油果莎莎和青柠挤进玉米饼，酸爽鲜香，每一口都很有活力。",en:"Spiced black beans, avocado salsa, and a squeeze of lime tucked into corn tortillas—zesty and full of life."},time:20,calories:410,rating:"4.8",tags:["植物蛋白","素食友好"],filters:["light","quick","vegetarian"],color:"#f4e6c8"},
  {name:{zh:"泰式椰香绿咖喱",en:"Thai Coconut Green Curry"},country:{zh:"THAILAND · 泰国",en:"THAILAND"},region:{zh:"🇹🇭 泰国料理",en:"🇹🇭 Thai"},emoji:"🍛",description:{zh:"椰奶的柔滑、青咖喱的香气和时令蔬菜慢慢融合，配一碗热米饭刚刚好。",en:"Creamy coconut milk, fragrant green curry, and seasonal vegetables come together beautifully over warm rice."},time:30,calories:440,rating:"4.9",tags:["暖心主食","素食可选"],filters:["light","vegetarian"],color:"#e7ecd9"},
  {name:{zh:"意式番茄罗勒意面",en:"Tomato & Basil Pasta"},country:{zh:"ITALY · 意大利",en:"ITALY"},region:{zh:"🇮🇹 意大利料理",en:"🇮🇹 Italian"},emoji:"🍝",description:{zh:"熟成番茄与新鲜罗勒在锅中交织，撒上帕玛森，让简单食材也闪闪发光。",en:"Ripe tomatoes and fresh basil mingle in the pan, finished with Parmesan for a simple, beautiful meal."},time:20,calories:430,rating:"4.8",tags:["清爽轻食","素食友好"],filters:["light","quick","vegetarian"],color:"#f3e1d5"},
  {name:{zh:"韩式牛肉拌饭",en:"Korean Beef Bibimbap"},country:{zh:"KOREA · 韩国",en:"KOREA"},region:{zh:"🇰🇷 韩国料理",en:"🇰🇷 Korean"},emoji:"🍲",description:{zh:"香煎牛肉、彩色蔬菜和一颗溏心蛋，拌上微辣酱汁，满满一碗能量。",en:"Seared beef, colorful vegetables, and a soft egg tossed with a little heat—one bowl packed with energy."},time:25,calories:510,rating:"4.9",tags:["高蛋白","均衡一餐"],filters:["protein","quick"],color:"#f0dfd3"},
  {name:{zh:"印度香料烤花椰菜",en:"Spiced Roasted Cauliflower"},country:{zh:"INDIA · 印度",en:"INDIA"},region:{zh:"🇮🇳 印度料理",en:"🇮🇳 Indian"},emoji:"🥘",description:{zh:"姜黄、孜然和酸奶让烤花椰菜香气四溢，配上暖呼呼的扁豆，饱足又轻盈。",en:"Turmeric, cumin, and yogurt make roasted cauliflower fragrant; pair it with warm lentils for a hearty, light meal."},time:30,calories:390,rating:"4.7",tags:["清爽轻食","素食友好"],filters:["light","vegetarian"],color:"#efe5cc"},
  {name:{zh:"越南香茅鸡肉米纸卷",en:"Vietnamese Lemongrass Chicken Rolls"},country:{zh:"VIETNAM · 越南",en:"VIETNAM"},region:{zh:"🇻🇳 越南料理",en:"🇻🇳 Vietnamese"},emoji:"🥢",description:{zh:"香茅鸡肉、新鲜薄荷和脆蔬菜裹进米纸，蘸一点酸甜酱，清新不负担。",en:"Lemongrass chicken, fresh mint, and crunchy vegetables wrapped in rice paper with a tangy dipping sauce."},time:25,calories:350,rating:"4.8",tags:["清爽轻食","高蛋白"],filters:["light","protein","quick"],color:"#e9edda"},
  {name:{zh:"法式蘑菇荞麦薄饼",en:"French Mushroom Buckwheat Galette"},country:{zh:"FRANCE · 法国",en:"FRANCE"},region:{zh:"🇫🇷 法国料理",en:"🇫🇷 French"},emoji:"🥞",description:{zh:"荞麦薄饼包裹奶香蘑菇和嫩菠菜，边缘煎得酥脆，来一份悠闲的法式午餐。",en:"A buckwheat galette filled with creamy mushrooms and tender spinach, crisp at the edges and perfect for a leisurely lunch."},time:25,calories:420,rating:"4.7",tags:["素食友好","均衡一餐"],filters:["light","vegetarian","quick"],color:"#eee9da"},
  {name:{zh:"美式烤鸡藜麦碗",en:"Roast Chicken Quinoa Bowl"},country:{zh:"USA · 美国",en:"USA"},region:{zh:"🇺🇸 美式料理",en:"🇺🇸 American"},emoji:"🍗",description:{zh:"香草烤鸡、藜麦和烤南瓜一起入碗，营养扎实，忙碌的一天也能好好吃饭。",en:"Herb-roasted chicken, quinoa, and roasted squash make a nourishing bowl for even the busiest day."},time:30,calories:490,rating:"4.8",tags:["高蛋白","均衡一餐"],filters:["protein"],color:"#f0e3d3"},
  {name:{zh:"土耳其扁豆汤",en:"Turkish Red Lentil Soup"},country:{zh:"TURKEY · 土耳其",en:"TURKEY"},region:{zh:"🇹🇷 土耳其料理",en:"🇹🇷 Turkish"},emoji:"🍲",description:{zh:"红扁豆和温暖香料炖成绵密浓汤，滴几滴柠檬，简单食材也能带来踏实满足。",en:"Red lentils simmered with warming spices until velvety, finished with lemon for a comforting, simple meal."},time:30,calories:330,rating:"4.8",tags:["植物蛋白","素食友好"],filters:["light","vegetarian"],color:"#f1e0d0"}
];

let language = localStorage.getItem("recipe-language") === "en" ? "en" : "zh";
let currentFilter = "all";
let currentRecipe = recipes[0];
let shuffleCount = 0;
const t = () => copy[language];

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("recipe-language", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = t().title;
  document.querySelector('meta[name="description"]').content = t().description;
  document.querySelector("#language-select").setAttribute("aria-label", t().language);
  document.querySelector("#brand-mark").textContent = language === "zh" ? "好" : "Y";
  document.querySelector("#brand-name").innerHTML = `${t().brand}<span class="brand-dot">.</span>`;
  document.querySelector(".brand").setAttribute("aria-label", t().brand);
  document.querySelector("#top-note-text").textContent = t().topNote;
  document.querySelector("#headline-lead").textContent = t().headlineLead;
  document.querySelector("#headline-accent").textContent = t().headlineAccent;
  document.querySelector("#intro-line-one").textContent = t().introOne;
  document.querySelector("#intro-line-two").textContent = t().introTwo;
  document.querySelector("#discover").setAttribute("aria-label", t().discover);
  document.querySelector("#control-title").textContent = t().controlTitle;
  document.querySelector("#control-subtitle").textContent = t().controlSubtitle;
  document.querySelector("#filter-list").setAttribute("aria-label", language === "zh" ? "饮食偏好" : "Dietary preferences");
  document.querySelectorAll(".filter").forEach(button => {
    const icon = button.querySelector("span").outerHTML;
    button.innerHTML = `${icon} ${t().filters[button.dataset.filter]}`;
  });
  document.querySelector("#bottom-note-text").textContent = t().bottom;
  document.querySelector("#footer-note").textContent = t().footer;
  renderRecipe();
}

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
  document.querySelector("#food-emoji").setAttribute("aria-label", recipe.name[language]);
  document.querySelector("#art-country").textContent = recipe.country[language];
  document.querySelector("#region-label").textContent = recipe.region[language];
  document.querySelector("#recipe-name").textContent = recipe.name[language];
  document.querySelector("#recipe-description").textContent = recipe.description[language];
  document.querySelector("#recipe-time").textContent = `${recipe.time} ${t().time}`;
  document.querySelector("#recipe-calories").textContent = t().calories(recipe.calories);
  document.querySelector("#recipe-level").textContent = t().level;
  document.querySelector("#rating").textContent = recipe.rating;
  document.querySelector("#recipe-tags").innerHTML = recipe.tags.map(tag => `<span>${t().tags[tag]}</span>`).join("");
  document.querySelector("#recipe-art").style.background = `radial-gradient(ellipse at 49% 49%, #fff8e7 0%, ${recipe.color} 100%)`;
  const card = document.querySelector(".recipe-card");
  card.style.animation = "none";
  requestAnimationFrame(() => { card.style.animation = "card-in .35s ease both"; });
  document.querySelector("#button-label").textContent = shuffleCount === 0 ? t().shuffle : t().shuffleAgain;
  document.querySelector("#shuffle-hint").textContent = shuffleCount === 0 ? t().hint : t().discoveries(shuffleCount);
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
document.querySelector("#language-select").addEventListener("change", event => setLanguage(event.target.value));
document.querySelector("#language-select").value = language;
setLanguage(language);
