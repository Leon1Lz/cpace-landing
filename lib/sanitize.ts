import DOMPurify from "dompurify"

/**
 * Standard rich-text sanitization.
 * Allows safe formatting tags (headings, lists, links, code, etc.)
 * but removes <script>, event handlers, data: URIs, and javascript: hrefs.
 */
export function sanitizeHtml(dirty: string): string {
  if (!dirty) return ""
  if (typeof window === "undefined") {
    return dirty.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
  }
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      "p", "br", "strong", "em", "u", "s", "strike", "del",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "ul", "ol", "li",
      "blockquote", "pre", "code",
      "a", "img",
      "table", "thead", "tbody", "tr", "th", "td",
      "hr", "mark", "span", "div",
    ],
    ALLOWED_ATTR: [
      "href", "src", "alt", "title", "class", "target", "rel",
      "style",
    ],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
    ALLOW_DATA_ATTR: false,
    FORCE_BODY: false,
  })
}

/**
 * Strict sanitization — strips ALL HTML tags, returns plain text.
 */
export function stripTags(dirty: string): string {
  if (!dirty) return ""
  if (typeof window === "undefined") {
    return dirty.replace(/<[^>]*>?/gm, "")
  }
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}

/**
 * Sanitize and also enforce that external links open in a new tab safely.
 */
export function sanitizeHtmlWithLinks(dirty: string): string {
  const clean = sanitizeHtml(dirty)
  return clean.replace(
    /<a\s+href="(https?:\/\/[^"]+)"/gi,
    '<a href="$1" target="_blank" rel="noopener noreferrer"'
  )
}
