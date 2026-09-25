import { TEST_COVERAGE_ANALYZER_PROMPT } from '../prompts/test-coverage-analyzer.prompt';
import { TestCoverageResultJSONSchema } from '../types';

export const testCoverageAnalyzerAgent = {
  name: 'test-coverage-analyzer',
  description: 'Analyzes test coverage and identifies missing test cases or edge cases.',
  prompt: TEST_COVERAGE_ANALYZER_PROMPT,
  outputFormat: TestCoverageResultJSONSchema,
};