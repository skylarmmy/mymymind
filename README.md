# MyMyMind — 草稿版本使用说明

这是一个用 Vite + React 搭建的项目骨架,已经包含 5 个组件,满足草稿阶段的最低要求:

- `Navbar` — 顶部切换标签
- `MoodTracker` — 心情记录 + 简单趋势图
- `ThoughtJournalForm` — CBT 引导式日记表单
- `ReflectionExercise` — 认知扭曲小测验
- `PastEntriesList` — 历史记录查看与删除(满足"用户能修改网站内容"这条要求,存在 localStorage)

## 到家后要做的事(按顺序)

### 1. 解压并安装依赖
```bash
cd mymymind-draft
npm install
```

### 2. 本地跑起来看看
```bash
npm run dev
```
浏览器打开终端提示的地址(通常是 http://localhost:5173),四个标签都点一遍,确认没有报错。

### 3. 推到 GitHub
如果还没建仓库:
```bash
git init
git add .
git commit -m "Draft website: 5 components, mood tracker, CBT journal, reflection exercise"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的仓库名>.git
git push -u origin main
```

### 4. 修改两个地方的仓库名(必须做,否则部署后是白屏)
- `vite.config.js` 里的 `base: '/your-repo-name/'` → 改成你的真实仓库名
- `package.json` 里的 `homepage` → 改成你的真实 GitHub Pages 地址

### 5. 安装部署工具并部署
```bash
npm install --save-dev gh-pages
npm run deploy
```
这一步会自动 build 并把 `dist` 文件夹推到 `gh-pages` 分支。

### 6. 打开 GitHub 仓库设置确认 Pages
Settings → Pages → Source 选择 `gh-pages` 分支 → 保存。等 1-2 分钟后访问 `https://<你的用户名>.github.io/<你的仓库名>/`。

## 对照 rubric 自查
- [ ] React app 已 push 到 GitHub(0.5分)
- [ ] build 后能通过网页访问(1分)—— 第 6 步没做经常导致 0 分,别漏
- [ ] 至少 5 个组件且有意义地使用(0.5分)—— 已满足,若删减组件注意分数会扣
- [ ] 用户能修改网站(记录心情/日记/删除历史都算)

## 时间紧张时可以先跳过的
- 样式细节(目前的莫兰迪绿灰配色已经够用,草稿阶段不评审美)
- ReflectionExercise 的题目数量(目前 3 道,够用)

祝顺利,13点前提交没问题的话记得留 20-30 分钟 buffer 处理 GitHub Pages 第一次部署常见的白屏/404 问题。
