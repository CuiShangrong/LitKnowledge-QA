# 实现路线图

## Phase 1：基础文献 CRUD，已完成

目标：

- 建立基础 Web 应用骨架和 Paper CRUD。

要实现的功能：

- Next.js + TypeScript + Tailwind CSS。
- Prisma + SQLite。
- 论文列表、添加、详情和 timeline 页面。
- Seed 示例数据。

完成标准：

- 用户可以手动添加、浏览和查看文献。

## Phase 1.5：项目改名与多学科文献结构扩展

目标：

- 将项目更新为 LitFolder QA，并扩展为多学科文献资料夹定位。

要实现的功能：

- 更新项目名称、README、docs 和页面文案。
- package name 改为 `lit-folder-qa`。
- Paper model 增加 `paperType`、`researchQuestion`、`coreArgument`、`evidenceSource`、`sourceSummary`。
- 表单、详情页和 seed 数据支持新增字段。

完成标准：

- 应用仍可运行，文案和 schema 与新定位一致。

## Phase 2：论文文本粘贴与结构化信息抽取

目标：

- 支持用户粘贴论文文本，并辅助填写结构化字段。

要实现的功能：

- 文本粘贴入口。
- 基础字段抽取草稿。
- 用户确认后保存。

完成标准：

- 用户可以从文本中半自动生成 research question、argument、method、evidence 和 limitations 草稿。

## Phase 3：基于来源的单文献问答

目标：

- 对单篇文献进行来源可追踪问答。

要实现的功能：

- 单篇文献 QA 页面。
- 使用 Paper 字段和文本片段构造 context。
- 回答中显示来源字段或片段。

完成标准：

- 用户可以针对单篇文献提问，并看到来源支持。

## Phase 4：文献资料夹 / Folder 管理

目标：

- 支持用户按课程、项目、研究方向或主题组织文献。

要实现的功能：

- Folder model。
- Folder 列表和详情。
- 将 Paper 加入多个 Folder。

完成标准：

- 用户可以维护多个本地文献资料夹。

## Phase 5：多文献检索与研究脉络整理

目标：

- 支持跨文献检索、对比和研究脉络摘要。

要实现的功能：

- Keyword search。
- 多文献候选结果聚合。
- Timeline / trend summary。
- Paper comparison。

完成标准：

- 用户可以基于一个 folder 或 topic 生成初步研究脉络。

## Phase 6：paper-aware chunking

目标：

- 为长论文文本建立结构感知 chunks。

要实现的功能：

- Section-aware chunking。
- LaTeX 公式、表格和引用 metadata。
- PaperChunk model。

完成标准：

- 长文本可以被分成可检索、可追踪的 chunks。

## Phase 7：context budgeting

目标：

- 控制多文献问答的上下文规模。

要实现的功能：

- 按 paper 聚合检索结果。
- 去重。
- Evidence cards。
- Token budget selection。

完成标准：

- 多文献问答不会简单堆叠过多 chunk。

## Phase 8：PDF parsing、embedding 和 vector search

目标：

- 从手动整理升级到更完整的文献导入和语义检索。

要实现的功能：

- PDF parsing。
- Embedding generation。
- Vector search 或 hybrid search。
- 可选迁移到 PostgreSQL + pgvector。

完成标准：

- 用户可以导入 PDF，并进行语义检索和来源问答。

