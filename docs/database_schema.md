# 数据库 Schema 设计

## 设计原则

- MVP 使用 SQLite + Prisma，保持简单。
- Paper 是当前核心实体，表示一篇论文或研究资料。
- 当前不引入用户、权限、PDF、chunk、embedding 或 vector database。
- authors、topics、tags、datasets 暂时用字符串存储，后续再规范化。
- 新增多学科字段，为来源问答和结构化抽取预留空间。

## 当前 Paper Model

字段：

- `id`：主键。
- `title`：标题，当前设为 unique，便于 seed upsert。
- `authors`：作者。
- `year`：发表年份。
- `venue`：会议、期刊、出版社或资料来源。
- `url`：链接。
- `doi`：DOI。
- `field`：学科或研究领域。
- `paperType`：论文类型，例如 empirical、theoretical、survey、humanities、dataset、benchmark、system、review。
- `topics`：主题，暂用逗号分隔字符串。
- `tags`：标签，暂用逗号分隔字符串。
- `abstract`：摘要。
- `researchQuestion`：研究问题。
- `coreArgument`：核心论点。
- `methodSummary`：方法或分析路径。
- `evidenceSource`：证据来源，例如实验、访谈、档案、文本材料、benchmark。
- `sourceSummary`：证据或资料来源的简要说明。
- `contribution`：贡献。
- `limitations`：局限。
- `datasets`：数据集或材料集合。
- `codeUrl`：代码链接。
- `notes`：个人笔记。
- `createdAt`：创建时间。
- `updatedAt`：更新时间。

## 当前 Prisma 草案

```prisma
model Paper {
  id               String   @id @default(cuid())
  title            String   @unique
  authors          String?
  year             Int?
  venue            String?
  url              String?
  doi              String?
  field            String?
  paperType        String?
  topics           String?
  tags             String?
  abstract         String?
  researchQuestion String?
  coreArgument     String?
  methodSummary    String?
  evidenceSource   String?
  sourceSummary    String?
  contribution     String?
  limitations      String?
  datasets         String?
  codeUrl          String?
  notes            String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}
```

## 后续扩展 Schema

Phase 4 之后可增加：

- `Folder`：本地文献资料夹。
- `FolderPaper`：Folder 与 Paper 的多对多关系。
- `PaperChunk`：论文文本分块。
- `EvidenceCard`：多文献检索时的来源摘要。
- `AgentRun`：保存问答过程、证据和输出。
- `Embedding`：保存 chunk embedding 或外部 vector id。
- `Citation`：保存引用关系。
- `Author`、`Topic`、`Tag`：规范化 metadata。

## PaperChunk 未来设计

后续 paper-aware chunking 阶段再加入：

- `id`
- `paperId`
- `section`
- `page`
- `content`
- `tokenCount`
- `containsFormula`
- `containsTable`
- `containsCitation`
- `chunkIndex`
- `createdAt`

## EvidenceCard 未来设计

EvidenceCard 可先作为运行时对象：

- `paperTitle`
- `year`
- `venue`
- `paperType`
- `relevantSections`
- `keyEvidence`
- `relationToQuestion`
- `limitations`
- `sourceChunkIds`

