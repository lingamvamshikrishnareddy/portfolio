# Create-PersonalPortfolio.ps1
# Script to create personal portfolio project structure

# Create root project directory
New-Item -Path "personal-portfolio" -ItemType Directory
Set-Location "personal-portfolio"

# Create public directory and files
New-Item -Path "public" -ItemType Directory
New-Item -Path "public\index.html" -ItemType File
New-Item -Path "public\favicon.ico" -ItemType File

# Create src directory and subdirectories
New-Item -Path "src" -ItemType Directory
New-Item -Path "src\components" -ItemType Directory
New-Item -Path "src\components\common" -ItemType Directory
New-Item -Path "src\data" -ItemType Directory
New-Item -Path "src\assets" -ItemType Directory
New-Item -Path "src\assets\images" -ItemType Directory
New-Item -Path "src\assets\icons" -ItemType Directory
New-Item -Path "src\styles" -ItemType Directory

# Create component files
$componentFiles = @(
    "src\components\Header.js",
    "src\components\About.js", 
    "src\components\Projects.js", 
    "src\components\Skills.js", 
    "src\components\Contact.js",
    "src\components\common\Button.js",
    "src\components\common\SectionTitle.js"
)
$componentFiles | ForEach-Object { New-Item -Path $_ -ItemType File }

# Create data files
$dataFiles = @(
    "src\data\projectsData.js",
    "src\data\skillsData.js"
)
$dataFiles | ForEach-Object { New-Item -Path $_ -ItemType File }

# Create style file
New-Item -Path "src\styles\index.css" -ItemType File

# Create main application files
$appFiles = @(
    "src\App.js",
    "src\index.js"
)
$appFiles | ForEach-Object { New-Item -Path $_ -ItemType File }

# Create placeholder image and icon files
New-Item -Path "src\assets\images\profile.jpg" -ItemType File
$iconFiles = @(
    "src\assets\icons\github.svg",
    "src\assets\icons\linkedin.svg"
)
$iconFiles | ForEach-Object { New-Item -Path $_ -ItemType File }

# Create package.json
New-Item -Path "package.json" -ItemType File

# Create README.md
New-Item -Path "README.md" -ItemType File

Write-Host "Personal portfolio project structure created successfully!"