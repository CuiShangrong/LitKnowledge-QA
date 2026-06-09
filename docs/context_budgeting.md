# Context Budgeting 策略规划

当前 Phase 1.5 不实现 context budgeting。本文件记录 LitFolder QA 后续多文献问答和研究脉络整理时的上下文控制策略。

## 为什么多文献检索会导致 context window 爆炸

当用户从一个 folder 或 topic 中检索多篇文献时，如果直接把所有匹配 chunk 放进 prompt，会出现：

- 同一文献多个 chunk 重复。
- 不同文献证据类型混杂。
- 重要来源被低价值文本挤出。
- LLM 难以追踪每个结论来自哪篇文献。
- 回答容易产生无来源或混淆来源的陈述。

LitFolder QA 后续应把 context budgeting 设计为 source-aware 流程。

## 检索结果如何按 paper 聚合

检索结果先按 `paperId` 分组：

- 每篇文献保留最高相关性的 chunks。
- 同时保留 Paper metadata，例如 title、year、field、paperType、researchQuestion、coreArgument。
- 对每篇文献计算综合 relevance score。
- 按任务类型决定优先字段。

任务例子：

- 单文献问答：优先该文献的结构化字段和相关 chunk。
- 文献对比：优先 researchQuestion、coreArgument、methodSummary、evidenceSource、limitations。
- 研究脉络：优先 year、field、topic、contribution、limitations。

## 如何去重

MVP 后续可先使用规则去重：

- 相同 chunkId 只保留一次。
- 同一 paper 内连续或重叠 chunk 合并。
- 重复 metadata 不重复放入 context。
- References 默认降低优先级，除非用户询问引用。

未来可加入：

- MinHash。
- Embedding similarity。
- Section summary 去重。

## Evidence card 格式

后续每篇文献可压缩为 evidence card：

```json
{
  "paperTitle": "Paper title",
  "year": 2024,
  "venue": "Conference, journal, or source",
  "paperType": "empirical",
  "relevantSections": ["Abstract", "Method"],
  "keyEvidence": ["Evidence point 1", "Evidence point 2"],
  "relationToQuestion": "Why this source is relevant",
  "limitations": "Known limitations",
  "sourceChunkIds": ["chunk_1", "chunk_2"]
}
```

## Token budget 如何设置

后续建议预算：

- System instructions：固定预算。
- User question：固定预算。
- Paper metadata：小预算。
- Evidence cards：主要预算。
- Raw chunks：按需补充。
- Output answer：预留生成预算。
- Self-check：小预算。

## 最终 evidence 如何选择

选择依据：

- 与问题的相关性。
- 来源多样性。
- paperType 与任务是否匹配。
- 是否包含明确 evidence source。
- 是否覆盖用户指定的 folder、topic 或年份范围。

## Phase 1.5 状态

当前只在 Paper model 中加入来源相关字段，不实现多文献检索、evidence card 或 token budgeting。

