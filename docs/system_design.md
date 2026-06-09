# 系统设计

## 系统整体架构

LitFolder QA 采用单体 Next.js 应用架构。当前 Phase 1.5 聚焦本地文献资料夹和基础 CRUD，后续再加入问答、抽取、chunking 和检索。

主要组成：

- Frontend：Next.js App Router、React components、Tailwind CSS。
- Backend/API：Server Actions 和后续 Route Handlers。
- Database：SQLite + Prisma。
- LLM：后续阶段再接入 OpenAI API。
- Search：后续先做 keyword search，再演进到 hybrid / vector search。

## 前端模块

- Home：项目定位和功能入口。
- Paper list：本地文献列表。
- Paper form：添加文献 metadata 和结构化阅读字段。
- Paper detail：展示研究问题、核心论点、证据来源、贡献、局限和笔记。
- Timeline：按年份展示文献，后续用于研究脉络整理。

## 后端 / API 模块

当前：

- Paper create：通过 Server Action 创建文献。
- Paper read：列表、详情和 timeline 查询。

后续：

- Extraction API：从粘贴文本中抽取结构化字段。
- QA API：基于单篇或多篇文献来源回答问题。
- Folder API：管理文献资料夹。
- Search API：keyword、hybrid 和 vector search。

## 数据流

1. 用户在 `/papers/new` 手动添加文献。
2. 系统保存 Paper 结构化字段。
3. 用户在 `/papers` 浏览本地文献资料夹。
4. 用户在 `/papers/[id]` 查看详细研究问题、论点、证据和笔记。
5. 用户在 `/timeline` 按年份查看文献。

后续问答数据流：

1. 用户选择单篇文献或资料夹。
2. 系统检索相关文本和结构化字段。
3. 系统构造带来源的 context。
4. LLM 生成回答。
5. 系统检查回答是否有来源支持。

## LLM 调用流程规划

当前不调用 LLM。后续流程：

1. 判断任务类型。
2. 读取文献 metadata、结构化字段和文本片段。
3. 选择来源证据。
4. 调用 LLM 生成回答或摘要。
5. 执行 source-support self-check。
6. 输出带来源标题和证据说明的回答。

## 从 keyword search 演进到 vector search

Phase 2 / 3 可先基于字段和文本做 keyword search。后续加入 embedding 后，SearchService 可以演进为：

- Metadata filter。
- Keyword score。
- Vector similarity score。
- Source-aware ranking。

数据库可从 SQLite 逐步迁移到 PostgreSQL + pgvector，或接入独立 vector database。

## 未来如何加入 PDF parsing 和 embedding retrieval

PDF parsing 会作为独立 ingestion pipeline：

1. 上传或导入 PDF。
2. 提取文本、页码、section、表格、引用和公式。
3. 生成 paper-aware chunks。
4. 抽取研究问题、核心论点、方法、证据来源、贡献和局限。
5. 生成 embedding。
6. 用于单文献和多文献问答。

