# LitFolder QA

中文名：文献资料夹问答系统

LitFolder QA 是一个面向多学科论文的本地文献整理与问答系统。它帮助用户在本地整理不同领域、不同类型的论文资料，并为后续基于来源的问答、文献对比、研究脉络整理和多文献检索打基础。

## 项目目标

- 管理多学科论文和研究资料。
- 记录论文类型、研究问题、核心论点、方法、证据来源、贡献和局限。
- 支持计算机科学、社会科学、人文学科、survey、review、dataset、benchmark 等不同类型资料。
- 后续支持基于来源的单文献问答和多文献问答。
- 后续支持文献资料夹、文献对比、研究脉络整理和 Related Work 草稿。

## 当前 Phase 1 / Phase 1.5 已实现功能

- Next.js + TypeScript + Tailwind CSS 基础应用骨架。
- Prisma + SQLite 数据库。
- Paper 基础 CRUD。
- 手动添加文献 metadata。
- 新增多学科结构字段：paper type、research question、core argument、evidence source、source summary。
- 论文列表 `/papers`。
- 添加论文 `/papers/new`。
- 论文详情 `/papers/[id]`。
- 按年份分组的时间线 `/timeline`。
- 多学科 seed 示例数据。

当前只完成基础文献整理功能，还没有实现完整问答系统。

## 后续计划功能

- 论文文本粘贴与结构化信息抽取。
- 基于来源的单文献问答。
- 文献资料夹 / Folder 管理。
- 多文献检索与研究脉络整理。
- Paper-aware chunking。
- Context budgeting。
- PDF parsing、embedding 和 vector search。

## 技术栈

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- Prisma
- SQLite

## 本地运行方法

安装依赖：

```bash
npm install
```

复制环境变量：

```bash
cp .env.example .env
```

Windows PowerShell：

```powershell
Copy-Item .env.example .env
```

初始化数据库并运行 migration：

```bash
npx prisma migrate dev
```

导入 seed 数据：

```bash
npx prisma db seed
```

启动开发服务器：

```bash
npm run dev
```

访问：

- `http://localhost:3000/`
- `http://localhost:3000/papers`
- `http://localhost:3000/papers/new`
- `http://localhost:3000/timeline`

## 当前未实现

- Ask Agent。
- OpenAI API 调用。
- 自动结构化抽取。
- Chunking。
- Context budgeting。
- PDF 上传。
- Embedding。
- Vector database。
- 用户登录。

