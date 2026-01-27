# Services Content Update Guide

## How to Update Service Content from Word Document

The professor can update service content by editing the `services-content.json` file. This file contains all the detailed content for each service that appears when users click on a service card.

### File Location
`services-content.json`

### Structure

Each service has the following structure:

```json
{
  "service-id": {
    "title": "Service Name",
    "icon": "📊",
    "shortDescription": "Brief description shown on the card",
    "fullContent": "<h2>Service Name</h2><p>Detailed content in HTML format</p>"
  }
}
```

### Service IDs

The service IDs correspond to the six services:

1. `operations-optimization` - Operations Optimization
2. `data-analytics` - Data Analytics
3. `pharmaceutical-solutions` - Pharmaceutical Solutions
4. `healthcare-analytics` - Healthcare Analytics
5. `financial-analytics` - Financial Analytics
6. `consulting-strategy` - Consulting & Strategy

### Updating Content

1. **From Word Document:**
   - Copy the content from the Word document
   - Convert it to HTML format (or use plain text - it will be formatted)
   - Update the `fullContent` field in the JSON file

2. **HTML Formatting:**
   - Use `<h2>` for main headings
   - Use `<h3>` for subheadings
   - Use `<p>` for paragraphs
   - Use `<ul>` and `<li>` for bullet lists
   - Use `<strong>` for bold text
   - Use `<em>` for italic text

### Example Update

```json
{
  "operations-optimization": {
    "title": "Operations Optimization",
    "icon": "📊",
    "shortDescription": "Streamline your operations with data-driven optimization strategies...",
    "fullContent": "<h2>Operations Optimization</h2><p>Detailed paragraph here.</p><h3>Key Benefits</h3><ul><li>Benefit 1</li><li>Benefit 2</li></ul>"
  }
}
```

### Quick HTML Conversion Tips

- **Paragraphs**: Wrap text in `<p>...</p>`
- **Headings**: Use `<h2>Main Heading</h2>` or `<h3>Subheading</h3>`
- **Lists**: 
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```
- **Line breaks**: Use `<br>` for line breaks within paragraphs

### Testing

After updating the JSON file:
1. Save the file
2. Refresh the website
3. Click on any service card to see the updated content in the modal

### Notes

- The `shortDescription` is what appears on the service card itself
- The `fullContent` is what appears in the modal when the card is clicked
- HTML tags are supported in `fullContent` for rich formatting
- Keep the JSON syntax valid (proper quotes, commas, brackets)

