# MVP 规格

## MVP 要实现的功能

- 基础文献 CRUD。
- 手动添加论文 metadata。
- 记录 paper type、research question、core argument、method summary、evidence source、source summary、contribution、limitations 和 notes。
- 支持多学科示例数据。
- 论文列表、详情页和按年份分组的 timeline。
- 为后续来源问答和多文献检索预留数据结构。

## MVP 暂时不做的功能

- Ask Agent。
- OpenAI API 调用。
- 自动抽取研究问题或论点。
- PDF 上传和解析。
- Chunking。
- Context budgeting。
- Vector database。
- 用户登录和权限系统。

## 用户故事

- 作为学生，我希望添加一篇论文并记录其研究问题和核心论点。
- 作为研究者，我希望区分 empirical、theoretical、survey、dataset、benchmark 等论文类型。
- 作为写作者，我希望记录证据来源和资料来源说明，便于之后写作时追踪依据。
- 作为阅读者，我希望按年份查看本地文献资料，理解研究脉络。
- 作为开发者，我希望当前版本保持简单，后续再加入问答和检索。

## 预期页面

### `/`

首页。展示 LitKnowledge-QA、中文名、项目定位和当前功能入口。

### `/papers`

文献列表页。展示 title、authors、year、venue、field、paper type 和 tags。

### `/papers/new`

添加文献页。支持手动填写论文 metadata、研究问题、核心论点、证据来源和笔记。

### `/papers/[id]`

文献详情页。展示单篇文献的完整结构化信息。

### `/timeline`

按年份分组展示文献。当前只是简单列表，后续可扩展为研究脉络整理视图。

## MVP 成功标准

- 用户可以维护一个本地文献资料夹。
- 用户可以添加多学科、多类型文献。
- 用户可以在详情页看到研究问题、核心论点和证据来源。
- 数据库 schema 为后续来源问答保留字段。
- 项目仍然适合作为学生个人项目和简历项目。

