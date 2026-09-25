# Reflection Brief

## System 1 Termination Logic
In agent execution loops, termination is driven exclusively by model response metadata where the stop reason equals `"end_turn"`, returning a `FinalState`. This design explicitly avoids brittle anti-patterns such as parsing output text for string keywords like `"DONE"` or `"COMPLETE"`, guaranteeing deterministic flow control.

## System 2 Context Strategy Defense
Order history details and return-eligibility dates are preserved verbatim because modifying or summarizing structured timestamps and product keys introduced regressions in evaluation controls. Conversely, conversational filler and non-essential chatter were safely summarized to conserve token budget.
* **Citation Data:** Total input tokens were optimized through strict payload pruning, maintaining full compliance without accuracy loss in evaluation metrics.

## System 3 Configuration Architecture
Path-scoped rules utilizing glob frontmatter allow centralized, maintainable governance over cross-cutting monorepo concerns without scattering duplicate nested configuration files across subdirectories. Executing complex skill commands using isolated context forks prevents intermediate tool calls and voluminous artifacts from polluting the primary conversation context window.

## System 4 Orchestration State Management
Hot state is strictly maintained under ~5 KB by storing only volatile session indicators (active turn count, current shift ID, and step flags). Heavy historical records and transaction logs are offloaded to persistent storage and queried on-demand using pre-filtered queries. Upon shift restarts, stale state thresholds invalidate expired active turns to prevent out-of-date session state from corrupting new monitoring cycles.

## Cross-Project Synthesis

### Three Layers
* **Model Layer:** Handles direct LLM interactions, payload framing, and raw API responses.
* **Harness Layer:** Implements programmatically enforced context reduction, tool call stripping, and workspace skill rules.
* **Orchestration Layer:** Manages environment persistence, tiered data boundaries, and crash-recovery logic.

### Deterministic vs. Prompt Guidance
* **Deterministic Filtering:** Uses hard code logic and AST/field-level stripping to guarantee 100% adherence and zero prompt payload bloat.
* **Prompt Guidance:** Uses natural language directives for soft behavioral compliance, relying on model interpretation across turns.

### Context Management Comparison
* **System 2 Context Strategy:** Operates in-flight during active sessions to prune tool results, strip obsolete payload fields, and summarize single-turn history within a single context window.
* **System 4 Context Strategy:** Operates across shift boundaries, decoupling active working memory from long-term storage using a tiered state lifecycle to enable persistent recovery over long horizons.
