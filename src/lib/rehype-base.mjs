import { withBase } from './paths.ts';

/** Markdown authors use paths without a deployment base, like the rest of the site. */
export default function rehypeBase({ base = '' } = {}) {
  return function transform(tree) {
    function visit(node) {
      if (node.type === 'element' && node.properties) {
        for (const field of ['href', 'src']) {
          const value = node.properties[field];
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[field] = withBase(value, base);
          }
        }
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
