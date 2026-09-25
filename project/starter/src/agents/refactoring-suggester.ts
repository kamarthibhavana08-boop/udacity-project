import { REFACTORING_SUGGESTER_PROMPT } from '../prompts/refactoring-suggester.prompt';
import { RefactoringSuggestionJSONSchema } from '../types';

export const refactoringSuggesterAgent = {
  name: 'refactoring-suggester',
  description: 'Suggests refactorings to improve code structure, design patterns, and maintainability.',
  prompt: REFACTORING_SUGGESTER_PROMPT,
  outputFormat: RefactoringSuggestionJSONSchema,
};