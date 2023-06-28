import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
