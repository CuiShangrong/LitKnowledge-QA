# Paper-aware Chunking 策略规划

当前 Phase 1.5 不实现 chunking。本文件记录 LitKnowledge-QA 后续处理论文文本时的策略。

## 为什么普通 fixed-size chunking 不适合多学科文献

普通 fixed-size chunking 按固定字符数或 token 数切分文本，容易破坏学术文本结构：

- 计算机科学论文中的公式、算法和实验解释可能被切开。
- 社会科学论文中的研究问题、理论框架和证据说明需要保留上下文。
- 人文学科论文中的论点、引文和解释路径不适合简单切块。
- Survey / review 论文常按主题组织，固定切分会削弱主题边界。
- Dataset / benchmark 论文需要保留数据构建、评测任务和局限说明。

因此，LitKnowledge-QA 后续应采用 paper-aware、section-aware 和 source-aware chunking。

## Section-aware chunking

基本流程：

1. 识别 section heading。
2. 按 section 切分全文。
3. 对每个 section 内部按段落切分。
4. 对过长段落组递归分块。
5. 保存 section、chunkIndex、tokenCount、source metadata。

常见 section：

- Abstract
- Introduction
- Related Work
- Background
- Method / Approach
- Experiments / Results
- Discussion
- Conclusion
- Limitations
- References

## LaTeX 公式保护策略

后续应识别并保护：

- `$...$`
- `$$...$$`
- `\begin{equation}...\end{equation}`
- `\begin{align}...\end{align}`

分块边界不能落在公式内部。公式附近的解释段落应尽量与公式保存在同一个 chunk。

## 如何避免证据和解释被切开

LitKnowledge-QA 后续问答强调来源支持，因此 chunking 不只保护公式，也要保护证据上下文：

- 实验结果应与指标说明保留在一起。
- 访谈、档案、文本材料等证据来源应与解释段落保留在一起。
- 引文和后续分析应尽量保留在同一 chunk。
- Dataset / benchmark 描述应保留任务定义、数据来源和局限。

## 长文本递归分块策略

1. 优先按 section 切分。
2. section 过长时按段落切分。
3. 段落组过长时按句子切分。
4. 只有在极端情况下按 token 或字符切分。
5. 每一步都检查公式、引用、表格和证据来源边界。

## Chunk metadata 设计

未来 PaperChunk 至少保存：

- `paperId`
- `section`
- `page`
- `content`
- `tokenCount`
- `containsFormula`
- `containsTable`
- `containsCitation`
- `chunkIndex`

可扩展：

- `evidenceType`
- `sourceType`
- `headingPath`
- `citationKeys`
- `importanceScore`
- `embeddingId`

## MVP / Phase 1.5 状态

当前不实现 chunking，只保留文档规划。Phase 2 可先支持粘贴文本与结构化字段抽取，Phase 6 再实现 paper-aware chunking。

