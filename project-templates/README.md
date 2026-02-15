# Project Templates

Word-compatible templates for updating project content on the Blue Sail Solutions website.

## Templates

| File | Project | Category |
|------|---------|----------|
| Supply_Chain_Optimization.html | Supply Chain Optimization | Pharmaceutical |
| Hospital_Resource_Allocation.html | Hospital Resource Allocation | Healthcare |
| Risk_Management_System.html | Risk Management System | Finance |
| Clinical_Trial_Optimization.html | Clinical Trial Optimization | Pharmaceutical |

## How to Use

1. **Open in Word:** File → Open → select the HTML file
2. **Fill in** all placeholder sections (gray boxes)
3. **Insert images** in the designated sections
4. **Save as** Word document (.docx)
5. **Export images** separately with the names shown (e.g., `main.jpg`, `diagram.jpg`)
6. **Provide** the completed Word doc + image files for website update

## Image Folder Structure

Save images to `website/public/projects/[project-id]/`:

```
website/public/projects/
├── supply-chain-optimization/
│   ├── main.jpg
│   ├── diagram.jpg
│   ├── block-diagram-1.jpg
│   └── graph-1.jpg
├── hospital-resource-allocation/
├── risk-management-system/
└── clinical-trial-optimization/
```

## Updating the Website

After receiving the completed template:

1. Copy text into `website/public/projects-content.json`
2. Place images in the folders above
3. Rebuild: `cd website && npm run build`
