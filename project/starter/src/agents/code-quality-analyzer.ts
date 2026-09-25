import { CODE_QUALITY_ANALYZER_PROMPT } from '../prompts/code-quality-analyzer.prompt';
import { CodeQualityResultJSONSchema } from '../types';

export const codeQualityAnalyzerAgent = {
  name: 'code-quality-analyzer',
  description: 'Analyzes code quality, readability, maintainability, and design patterns.',
  prompt: CODE_QUALITY_ANALYZER_PROMPT,
  outputFormat: CodeQualityResultJSONSchema,
};