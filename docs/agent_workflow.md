# Research / QA Workflow 规划

当前 Phase 1.5 不实现 Ask Agent。本文件描述后续 LitFolder QA 的来源问答工作流。

## 总体目标

LitFolder QA 的问答应基于用户本地文献资料夹中的来源信息，而不是无依据生成。系统需要明确区分：

- 文献中已有的内容。
- 用户记录的结构化笔记。
- LLM 基于证据做出的推断。

## 任务类型

### single_paper_qa

输入：

- 用户问题。
- 指定 Paper。

处理流程：

- 读取 Paper metadata 和结构化字段。
- 后续读取该 Paper 的 chunks。
- 选择与问题相关的来源信息。
- 调用 LLM 生成回答。
- 检查回答是否有来源支持。

输出：

- 回答。
- 来源论文标题。
- 使用到的字段或 chunk。
- 需要人工确认的部分。

### folder_search

输入：

- 用户查询。
- 可选 folder、field、paperType、topic、tag。

处理流程：

- 搜索本地文献资料夹。
- 按相关性、年份和类型排序。
- 返回候选文献。

输出：

- 文献列表。
- 相关原因。
- 命中的字段或文本片段。

### paper_comparison

输入：

- 多篇 Paper。
- 对比维度，例如 research question、core argument、method、evidence source、contribution、limitations。

处理流程：

- 读取指定文献结构化字段。
- 按维度组织对比。
- 后续可加入 chunk evidence。

输出：

- 对比表。
- 相同点和差异。
- 每个结论的来源文献。

### trend_summary

输入：

- topic、field、paperType 或 folder。
- 可选年份范围。

处理流程：

- 查询匹配文献。
- 按年份或主题阶段分组。
- 总结研究脉络。

输出：

- 时间线摘要。
- 代表文献。
- 主要变化。
- 后续可加入 research gap。

### related_work_draft

输入：

- 主题。
- 选定文献或 folder。

处理流程：

- 聚合相关文献。
- 按论点、方法或主题分组。
- 生成可编辑 Related Work 草稿。
- 检查关键陈述是否有来源。

输出：

- 草稿。
- 来源文献列表。
- 需要人工确认的陈述。

## Source-support Self-check

后续 self-check 应检查：

- 回答中的关键 claim 是否能映射到 Paper 字段或 chunk。
- 是否存在无来源的强结论。
- 是否需要改为谨慎表述。

## 当前阶段边界

Phase 1.5 只扩展字段和文案，不实现：

- LLM 调用。
- 自动抽取。
- Ask Agent。
- Chunking。
- Context budgeting。

