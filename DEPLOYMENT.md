# Vercel 部署指南

本文档说明如何将 Next.js 项目部署到 Vercel。

## 部署步骤

### 1. 创建 GitHub 仓库并推送代码

```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/nif36804-bot/111.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 2. 在 Vercel 上注册并授权 GitHub

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up" 注册账号
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub 账户

### 3. 选择仓库并自动检测框架

1. 登录 Vercel 后，点击 "New Project"
2. 选择你的 GitHub 仓库 `nif36804-bot/111`
3. Vercel 会自动检测到这是一个 **Next.js** 项目
4. 点击 "Import"

### 4. 配置环境变量

在项目设置中，添加以下环境变量：

```
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key
```

**步骤：**
1. 在 Vercel 项目页面，点击 "Settings"
2. 选择 "Environment Variables"
3. 添加上述环境变量和值
4. 点击 "Save"

### 5. 点击 Deploy 并等待上线

1. 点击 "Deploy" 按钮
2. Vercel 会自动构建和部署你的项目
3. 通常需要 **2-5 分钟** 完成部署

### 6. 获取域名

部署成功后，你会获得一个免费的 Vercel 域名：

```
https://your-project.vercel.app
```

## 自定义域名配置

如果你想使用自己的域名，按照以下步骤配置：

### 添加自定义域名

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 输入你的自定义域名（例如：`example.com`）
3. 点击 "Add"

### 配置 DNS 记录

在你的域名提供商（如 GoDaddy、Cloudflare 等）的 DNS 管理面板中，添加以下记录：

#### 方式一：A 记录（推荐）
```
记录类型: A
名称: @
值: 76.76.21.21
TTL: 3600
```

#### 方式二：CNAME 记录
```
记录类型: CNAME
名称: www
值: your-project.vercel.app
TTL: 3600
```

### 验证域名

1. DNS 更新通常需要 **24-48 小时** 生效
2. 在 Vercel 中，点击 "Verify" 按钮确认域名配置
3. 确认无误后，你的自定义域名就可以访问了

## Build 命令和环境

项目的构建配置在 `package.json` 中：

```json
{
  "scripts": {
    "build": "next build",
    "start": "next start",
    "vercel-build": "next build"
  }
}
```

Vercel 会自动检测这些脚本并执行构建。

## Vercel 配置文件

项目根目录的 `vercel.json` 配置文件：

```json
{
  "builds": [{ "src": "package.json", "use": "@vercel/next" }],
  "routes": [{ "src": "/(.*)", "dest": "/" }]
}
```

这个配置告诉 Vercel 如何构建和路由你的 Next.js 应用。

## 常见问题

### 1. 部署失败怎么办？

- 检查构建日志：在 Vercel 项目页面查看 "Deployments" 标签
- 确保所有环境变量都已正确配置
- 检查 `package.json` 中的依赖是否都已安装

### 2. 环境变量不生效？

- 确保环境变量名称与代码中的变量名完全匹配
- 重新部署应用以应用新的环境变量
- 清除浏览器缓存

### 3. 自定义域名无法访问？

- 检查 DNS 记录是否正确配置
- 等待 DNS 更新生效（可能需要 24-48 小时）
- 在 Vercel 中验证域名配置

## 自动部署

将代码推送到 GitHub 主分支后，Vercel 会自动检测更改并重新部署你的应用。

```bash
git push origin main
```

部署通常在 **1-2 分钟** 内完成。

## 更多资源

- [Vercel 官方文档](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
- [Environment Variables in Vercel](https://vercel.com/docs/environment-variables)
