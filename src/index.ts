import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new McpServer({
  name: 'narrate',
  version: '1.0.0',
});

const narratePrompt =
  'You are narrating consequential work to the user. Give one short update that says what phase you are in, why it matters, and the next step. Avoid secrets, raw diffs, and low-value implementation detail.';

const streamPrompt =
  'You are in streaming narration mode. Keep the user informed during long-running work with brief updates on phase changes, retries, blockers, and completion. Avoid secrets, raw diffs, and low-value implementation detail.';

server.registerPrompt(
  'narrate',
  {
    title: 'Narrate',
    description: 'Give one concise narration update.',
  },
  () => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: narratePrompt,
        },
      },
    ],
  }),
);

server.registerPrompt(
  'stream',
  {
    title: 'Narrate Stream',
    description: 'Keep narrating while work is in flight.',
  },
  () => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: streamPrompt,
        },
      },
    ],
  }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
