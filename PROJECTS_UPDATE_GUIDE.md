# Projects Content Update Guide

## How to Update Project Content from Word Documents

The professor can update project content by editing the `projects-content.json` file. This file contains all the detailed information for each project that appears on the projects page.

### File Location
`projects-content.json`

## Word Document Templates

Word document templates have been created for each project type. These templates provide a structured format for the professor to fill in project details.

### Available Templates

1. **Project_Template_Supply_Chain_Optimization.docx** - For Pharmaceutical Supply Chain projects
2. **Project_Template_Hospital_Resource_Allocation.docx** - For Healthcare projects
3. **Project_Template_Risk_Management_System.docx** - For Finance projects
4. **Project_Template_Clinical_Trial_Optimization.docx** - For Pharmaceutical Clinical Trial projects

### Template Structure

Each Word template includes the following sections:

1. **Project Overview** - General description of the project
2. **The Challenge** - What problems were being addressed
3. **Our Solution** - How the project solved the challenges
4. **Key Metrics** - Important metrics and their descriptions
5. **Technologies Used** - List of technologies, tools, and methods
6. **Image Placeholders** - Instructions for where to place images
7. **Block Diagram Placeholders** - Instructions for block diagrams
8. **Graph Placeholders** - Instructions for graphs and charts

## Updating Projects from Word Documents

### Step 1: Fill Out the Word Template

1. Open the appropriate Word template for the project
2. Fill in all the sections with project details
3. Add images, diagrams, and graphs in the designated sections
4. Save the document

### Step 2: Extract Content to JSON

After the professor provides the completed Word document, you need to:

1. **Extract Text Content:**
   - Copy text from each section (Overview, Challenge, Solution, etc.)
   - Convert to plain text or HTML format

2. **Extract Images:**
   - Save images from the Word document
   - Name them appropriately (e.g., `supply-chain-optimization-main.jpg`)
   - Place them in the `projects/[project-id]/` folder

3. **Update JSON File:**
   - Open `projects-content.json`
   - Find the project by its ID
   - Update the relevant fields

### Step 3: Update projects-content.json

For each project, update these fields:

```json
{
  "id": "supply-chain-optimization",
  "category": "Pharmaceutical",
  "title": "Supply Chain Optimization",
  "client": "Client Name from Word doc",
  "duration": "Project duration from Word doc",
  "overview": "Overview text from Word doc",
  "challenge": "Challenge description from Word doc",
  "solution": "Solution description from Word doc",
  "keyMetrics": [
    {
      "metric": "Metric name",
      "value": "Metric value",
      "description": "Description from Word doc"
    }
  ],
  "technologies": ["Technology 1", "Technology 2", "Technology 3"]
}
```

### Step 4: Add Images

1. **Main Images:**
   - Save main project images
   - Place in `projects/[project-id]/main.jpg`
   - Update the `images` array in JSON

2. **Block Diagrams:**
   - Save block diagram images
   - Place in `projects/[project-id]/block-diagram-1.jpg`
   - Update the `blockDiagrams` array in JSON

3. **Graphs:**
   - Save graph/chart images
   - Place in `projects/[project-id]/graph-1.jpg`
   - Update the `graphs` array in JSON

### Image Naming Convention

- Main images: `projects/[project-id]/main.jpg`
- Diagrams: `projects/[project-id]/diagram.jpg`
- Block diagrams: `projects/[project-id]/block-diagram-1.jpg`, `block-diagram-2.jpg`, etc.
- Graphs: `projects/[project-id]/graph-1.jpg`, `graph-2.jpg`, etc.

### Example: Updating Supply Chain Optimization Project

1. **Extract from Word:**
   - Overview: "This project involved..."
   - Challenge: "The client faced..."
   - Solution: "We implemented..."
   - Metrics: Cost Reduction: 25%, Delivery Time: 30%

2. **Update JSON:**
   ```json
   {
     "id": "supply-chain-optimization",
     "overview": "This project involved...",
     "challenge": "The client faced...",
     "solution": "We implemented...",
     "keyMetrics": [
       {
         "metric": "Cost Reduction",
         "value": "25%",
         "description": "Reduced operational costs by 25%"
       }
     ]
   }
   ```

3. **Add Images:**
   - Save images to `projects/supply-chain-optimization/`
   - Update image URLs in JSON

## Project IDs Reference

- `supply-chain-optimization` - Supply Chain Optimization
- `hospital-resource-allocation` - Hospital Resource Allocation
- `risk-management-system` - Risk Management System
- `clinical-trial-optimization` - Clinical Trial Optimization

## HTML Formatting in JSON

When copying text from Word to JSON, you can use HTML tags:

- `<p>Paragraph text</p>` for paragraphs
- `<strong>Bold text</strong>` for emphasis
- `<em>Italic text</em>` for emphasis
- `<br>` for line breaks
- `<ul><li>Item</li></ul>` for lists

## Testing

After updating the JSON file:

1. Save the file
2. Refresh the projects page (`projects.html`)
3. Click on a project card from the home page
4. Verify all content displays correctly
5. Check that images load properly

## Notes

- Keep image file sizes reasonable (under 2MB recommended)
- Use JPG or PNG format for images
- Maintain consistent image dimensions for better display
- All placeholder text (marked with `[To be updated]`) should be replaced
- Image paths are relative to the website root

