// 假資料：每個職缺有 title, company, location, salary, description
const mockJobs = [
  {
    title: "前端工程師",
    company: "蝦米科技",
    location: "台北市 信義區",
    salary: "月薪 4萬~6萬",
    description: "負責網頁前端開發、跨瀏覽器相容..."
  },
  {
    title: "後端工程師",
    company: "蝦米科技",
    location: "新北市 板橋區",
    salary: "月薪 5萬~7萬",
    description: "Node.js / Database 設計與開發..."
  },
  {
    title: "行銷企劃",
    company: "蘋果股份有限公司",
    location: "台中市 西區",
    salary: "月薪 3萬~4.5萬",
    description: "負責活動企劃與執行..."
  },
  {
    title: "品管工程師",
    company: "橘子科技",
    location: "台北市 大安區",
    salary: "月薪 3.5萬~5萬",
    description: "自動化測試、單元測試與驗證..."
  },
  {
    title: "系統維運",
    company: "橘子科技",
    location: "高雄市 前鎮區",
    salary: "月薪 4萬~6萬",
    description: "Linux 伺服器維運、網路架構..."
  }
];

// DOM 取得
const jobListEl = document.getElementById("jobList");
const jobCountEl = document.getElementById("jobCount");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// 函式：渲染職缺列表
function renderJobs(jobs) {
  // 清空內容
  jobListEl.innerHTML = "";

  // 更新數量
  jobCountEl.textContent = jobs.length;

  // 動態產生卡片
  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
      <h2 class="job-title">${job.title}</h2>
      <div class="company-name">${job.company}</div>
      <div class="job-info">地點：${job.location}</div>
      <div class="job-info">薪資：${job.salary}</div>
      <p class="job-description">${job.description}</p>
    `;

    jobListEl.appendChild(jobCard);
  });
}

// 函式：依關鍵字過濾職缺
function filterJobs(keyword) {
  // 關鍵字轉小寫
  const lowerKey = keyword.toLowerCase();

  // 在 title 或 company 中包含關鍵字才保留
  const filtered = mockJobs.filter((job) => {
    const inTitle = job.title.toLowerCase().includes(lowerKey);
    const inCompany = job.company.toLowerCase().includes(lowerKey);
    return inTitle || inCompany;
  });

  renderJobs(filtered);
}

// 預設：顯示全部
renderJobs(mockJobs);

// 綁定搜尋事件
searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.trim();
  filterJobs(keyword);
});

// 也可支援輸入框按下 Enter 觸發
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const keyword = searchInput.value.trim();
    filterJobs(keyword);
  }
});
