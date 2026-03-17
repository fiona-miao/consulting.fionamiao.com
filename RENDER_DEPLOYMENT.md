# Render 部署指南

## 部署步骤

### 1. 连接 GitHub 到 Render
1. 访问 https://dashboard.render.com
2. 用 GitHub 账户登录或注册
3. 授权 Render 访问你的 GitHub 仓库

### 2. 创建新 Web Service
1. 点击 "New +" → "Web Service"
2. 选择仓库：`fiona-miao/consulting.fionamiao.com`
3. 填写配置：
   - **Name**: `advisory-consulting`
   - **Environment**: `Node`
   - **Region**: `Frankfurt` (或最近的地区)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: `Free` (免费睡眠时间限制)

### 3. 添加环境变量
在 "Environment" 部分添加：

| 变量 | 值 |
|------|-----|
| `NODE_ENV` | `production` |
| `MONGODB_URI` | 你的 MongoDB 连接字符串 |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | 你的邮箱 |
| `SMTP_PASSWORD` | 应用密码 |
| `ADMIN_EMAIL` | `admin@consulting.fionamiao.com` |
| `NEXTAUTH_SECRET` | (可选) 生成随机字符串 |

### 4. 部署
点击 "Create Web Service"，Render 会自动开始部署

### 5. 连接自定义域名
部署完成后：
1. 在 Render 项目设置 → "Custom Domain"
2. 输入域名：`www.advisory.fionaconsult.de`
3. Render 会显示一个 DNS 记录

### 6. 在 Cloudflare 配置 DNS
1. 登录 Cloudflare 控制面板
2. 进入 `fionaconsult.de` 域名
3. 点击 DNS 标签
4. 添加 CNAME 记录（根据 Render 显示的值）：
   - **Type**: CNAME
   - **Name**: `www.advisory`
   - **Content**: Render 给的值 (通常是 `xxx.render.com`)
   - **Proxy status**: Proxied (橙色云)

### 7. 等待 DNS 生效
通常需要 5-30 分钟，最长 24-48 小时

## 完成！
你的网站现在通过以下方式运行：
- GitHub 作为源代码仓库
- Render 自动部署 Next.js 应用
- Cloudflare 管理 DNS 和加速
- www.advisory.fionaconsult.de 指向你的动态网站

## 后续更新
每次你提交代码到 main 分支，Render 会自动重新部署。
