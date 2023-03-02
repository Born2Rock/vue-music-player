import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.vue');

function isValidForRefactoring(value: string) {
  const fsd_layers = [
    'app',
    'entities',
    'features',
    'pages',
    'shared',
    'widgets',
  ];
  if (
    fsd_layers.some((layer) => {
      return value.startsWith('/' + layer);
    })
  ) {
    return true;
  }
  return false;
}

const files = project.getSourceFiles();

files.forEach((srcFile) => {
  const importDeclarations = srcFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isValidForRefactoring(value)) {
      importDeclaration.setModuleSpecifier('@' + value);
    }
  });
});

project.save();
