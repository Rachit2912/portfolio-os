import { VirtualFileNode } from '../types/portfolio';
import { virtualFileSystem } from '../data/fs';

export class VirtualFSHelper {
  static getRoot(): VirtualFileNode {
    return virtualFileSystem;
  }

  static getNodeByPath(path: string): VirtualFileNode | null {
    const cleanPath = path.trim();
    if (cleanPath === '~' || cleanPath === '/' || cleanPath === '') {
      return virtualFileSystem;
    }

    let relative = cleanPath.startsWith('~/') ? cleanPath.substring(2) : cleanPath;
    if (relative.startsWith('/')) relative = relative.substring(1);
    if (relative.endsWith('/')) relative = relative.substring(0, relative.length - 1);

    if (!relative) return virtualFileSystem;

    const segments = relative.split('/');
    let current: VirtualFileNode = virtualFileSystem;

    for (const segment of segments) {
      if (!current.children) return null;
      const found = current.children.find((child) => child.name === segment);
      if (!found) return null;
      current = found;
    }

    return current;
  }

  static resolveAbsolutePath(currentPath: string, targetPath: string): string {
    let target = targetPath.trim();
    if (!target || target === '.') return currentPath;
    if (target === '~' || target === '~/') return '~';

    if (target === '..') {
      if (currentPath === '~') return '~';
      const parts = currentPath.split('/');
      parts.pop();
      return parts.length > 0 ? parts.join('/') : '~';
    }

    if (target.startsWith('~/')) {
      return target.endsWith('/') && target.length > 2 ? target.slice(0, -1) : target;
    }

    const base = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    const resolved = `${base}/${target}`;
    return resolved;
  }

  static listDirectory(path: string): string[] {
    const node = this.getNodeByPath(path);
    if (!node) return [`ls: cannot access '${path}': No such file or directory`];
    if (node.type === 'file') return [node.name];
    if (!node.children || node.children.length === 0) return ['(empty directory)'];

    return node.children.map((child) =>
      child.type === 'directory' ? `${child.name}/` : child.name
    );
  }

  static formatTree(node: VirtualFileNode = virtualFileSystem, prefix: string = ''): string[] {
    const lines: string[] = [];
    if (prefix === '') lines.push(node.name);

    if (node.children) {
      node.children.forEach((child, index) => {
        const isLast = index === node.children!.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        lines.push(`${prefix}${connector}${child.type === 'directory' ? child.name + '/' : child.name}`);

        if (child.children) {
          const childPrefix = prefix + (isLast ? '    ' : '│   ');
          lines.push(...this.formatTree(child, childPrefix).slice(1));
        }
      });
    }

    return lines;
  }
}
