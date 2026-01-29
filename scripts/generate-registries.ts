/**
 * Registry Generator
 *
 * Scans the codebase and generates/updates registry markdown files.
 *
 * Usage: npm run generate:registries
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();
const DATA_CONTENT_DIR = path.join(ROOT_DIR, 'data/content');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'components');

interface ContentFile {
  name: string;
  path: string;
  exports: string[];
  interfaces: string[];
}

interface ComponentFile {
  name: string;
  path: string;
  category: string;
}

// Scan data/content/ for TypeScript files
function scanContentFiles(): ContentFile[] {
  const files: ContentFile[] = [];

  if (!fs.existsSync(DATA_CONTENT_DIR)) {
    console.log('No data/content directory found');
    return files;
  }

  const entries = fs.readdirSync(DATA_CONTENT_DIR);

  for (const entry of entries) {
    if (entry.endsWith('.ts') && entry !== 'index.ts') {
      const filePath = path.join(DATA_CONTENT_DIR, entry);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Extract exports
      const exportMatches = content.matchAll(/export (?:const|function|interface|type) (\w+)/g);
      const exports = Array.from(exportMatches).map((m) => m[1]);

      // Extract interfaces
      const interfaceMatches = content.matchAll(/export interface (\w+)/g);
      const interfaces = Array.from(interfaceMatches).map((m) => m[1]);

      files.push({
        name: entry.replace('.ts', ''),
        path: `data/content/${entry}`,
        exports,
        interfaces,
      });
    }
  }

  return files;
}

// Scan components/ for React components
function scanComponents(): ComponentFile[] {
  const files: ComponentFile[] = [];
  const categories = ['ui', 'layout', 'motion', 'sections', 'forms', 'seo'];

  for (const category of categories) {
    const categoryDir = path.join(COMPONENTS_DIR, category);

    if (!fs.existsSync(categoryDir)) {
      continue;
    }

    const entries = fs.readdirSync(categoryDir);

    for (const entry of entries) {
      if (entry.endsWith('.tsx')) {
        files.push({
          name: entry.replace('.tsx', ''),
          path: `components/${category}/${entry}`,
          category,
        });
      }
    }
  }

  return files;
}

// Generate CONTENT_REGISTRY.md
function generateContentRegistry(contentFiles: ContentFile[]): string {
  const date = new Date().toISOString().split('T')[0];

  let output = `# Content Registry

This document maps all content in the website to its source file. **Read this before editing any content.**

Last updated: ${date}

---

`;

  for (const file of contentFiles) {
    output += `## ${file.name.charAt(0).toUpperCase() + file.name.slice(1)}

**File:** \`${file.path}\`

`;

    if (file.interfaces.length > 0) {
      output += `**Interfaces:** ${file.interfaces.map((i) => `\`${i}\``).join(', ')}\n\n`;
    }

    if (file.exports.length > 0) {
      output += `**Exports:**\n`;
      for (const exp of file.exports) {
        output += `- \`${exp}\`\n`;
      }
      output += '\n';
    }

    output += '---\n\n';
  }

  output += `## Adding New Content Types

1. Create \`data/content/{entity}.ts\`
2. Define TypeScript interface
3. Create data object with records
4. Add helper functions (getAll, getBySlug, etc.)
5. Export from \`data/content/index.ts\`
6. Run \`npm run generate:registries\` to update this file
7. Run \`npm run build\` to verify
`;

  return output;
}

// Generate COMPONENT_REGISTRY.md
function generateComponentRegistry(components: ComponentFile[]): string {
  const date = new Date().toISOString().split('T')[0];
  const byCategory: Record<string, ComponentFile[]> = {};

  for (const comp of components) {
    if (!byCategory[comp.category]) {
      byCategory[comp.category] = [];
    }
    byCategory[comp.category].push(comp);
  }

  let output = `# Component Registry

This document catalogs all components in the website. **Update when adding components.**

Last updated: ${date}

---

## Component Summary

| Category | Count |
|----------|-------|
`;

  for (const [category, comps] of Object.entries(byCategory)) {
    output += `| ${category} | ${comps.length} |\n`;
  }

  output += '\n---\n\n';

  for (const [category, comps] of Object.entries(byCategory)) {
    output += `## ${category.charAt(0).toUpperCase() + category.slice(1)} Components (\`components/${category}/\`)

| Component | File |
|-----------|------|
`;

    for (const comp of comps) {
      output += `| ${comp.name} | \`${comp.path}\` |\n`;
    }

    output += '\n';
  }

  return output;
}

// Main execution
function main() {
  console.log('Scanning codebase...\n');

  const contentFiles = scanContentFiles();
  console.log(`Found ${contentFiles.length} content files`);

  const components = scanComponents();
  console.log(`Found ${components.length} components\n`);

  // Generate and write CONTENT_REGISTRY.md
  const contentRegistry = generateContentRegistry(contentFiles);
  fs.writeFileSync(path.join(ROOT_DIR, 'CONTENT_REGISTRY.md'), contentRegistry);
  console.log('✅ Generated CONTENT_REGISTRY.md');

  // Generate and write COMPONENT_REGISTRY.md
  const componentRegistry = generateComponentRegistry(components);
  fs.writeFileSync(path.join(ROOT_DIR, 'COMPONENT_REGISTRY.md'), componentRegistry);
  console.log('✅ Generated COMPONENT_REGISTRY.md');

  console.log('\nRegistry generation complete!');
}

main();
