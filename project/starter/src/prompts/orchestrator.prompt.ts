export function buildOrchestratorPrompt(pullRequestData: any): string {
    return `You are the Lead Code Review Orchestrator.
Your job is to coordinate a team of specialized AI reviewers to review the following Pull Request.
Please aggregate their feedback into a final structured report.

Pull Request Data:
${JSON.stringify(pullRequestData, null, 2)}
`;
}
