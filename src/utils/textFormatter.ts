function removeMarkdown(markdown: string) {
  // Replace bold text with plain text
  markdown = markdown.replaceAll(/\*\*(.+?)\*\*/g, "");
  markdown = markdown.replaceAll(/__(.+?)__/g, "");

  // Replace italicized text with plain text
  markdown = markdown.replaceAll(/_(.+?)_/g, "");
  markdown = markdown.replaceAll(/\*(.+?)\*/g, "");

  // Replace strikethrough text with plain text
  markdown = markdown.replaceAll(/~~(.+?)~~/g, "");

  // Replace inline code blocks with plain text
  markdown = markdown.replaceAll(/`(.+?)`/g, "");

  // Replace code blocks with plain text
  markdown = markdown.replaceAll(/```[\s\S]*?```/g, "");

  // Remove links
  markdown = markdown.replaceAll(/\[(.+?)\]\((.+?)\)/g, "");

  // Remove images
  markdown = markdown.replaceAll(/!\[(.+?)\]\((.+?)\)/g, "");

  // Remove headings
  markdown = markdown.replaceAll(/^#+\s+(.+?)\s*$/gm, "");
  markdown = markdown.replaceAll(/^\s*=+\s*$/gm, "");
  markdown = markdown.replaceAll(/^\s*-+\s*$/gm, "");

  // Remove blockquotes
  markdown = markdown.replaceAll(/^\s*>\s+(.+?)\s*$/gm, "");

  // Remove lists
  markdown = markdown.replaceAll(/^\s*[-*+]\s+(.+?)\s*$/gm, "");
  markdown = markdown.replaceAll(/^\s*\d+\.\s+(.+?)\s*$/gm, "");

  // Remove horizontal lines
  markdown = markdown.replaceAll(/^\s*[-*_]{3,}\s*$/gm, "");

  return markdown;
}

export function getSummary(body: string) {
  const plainText = removeMarkdown(body);
  return plainText.slice(0, 256);
}

export function getCountText(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}
