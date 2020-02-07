# Kkrita

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Update to angular 9

```bash
$ cd ~/src/kkrita;yarn run ng update
yarn run v1.21.1
$ ng update
The installed Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
Installing packages for tooling via yarn.
Installed packages for tooling via yarn.
Using package manager: 'yarn'
Collecting installed dependencies...
Found 30 dependencies.
    We analyzed your package.json, there are some packages to update:
    
      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       8.3.24 -> 9.0.1          ng update @angular/cli
      @angular/core                      8.2.14 -> 9.0.0          ng update @angular/core
      rxjs                               6.4.0 -> 6.5.4           ng update rxjs
Done in 17.37s.
[kushal@ideapadflex-kushal kkrita]$ cd ~/src/kkrita;yarn run ng update @angular/cli @angular/core rxjs
yarn run v1.21.1
$ ng update @angular/cli @angular/core rxjs
The installed Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
Installing packages for tooling via yarn.
Installed packages for tooling via yarn.
Using package manager: 'yarn'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "9.0.1" (was "8.3.24")...
    Updating package.json with dependency @angular/core @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency rxjs @ "6.5.4" (was "6.4.0")...
    Updating package.json with dependency @angular-devkit/build-angular @ "0.900.1" (was "0.803.24")...
    Updating package.json with dependency @angular/compiler-cli @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/language-service @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/animations @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/common @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/platform-browser @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency typescript @ "3.7.5" (was "3.5.3")...
    Updating package.json with dependency @angular/forms @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency zone.js @ "0.10.2" (was "0.9.1")...
    Updating package.json with dependency @angular/compiler @ "9.0.0" (was "8.2.14")...
    Updating package.json with dependency @angular/router @ "9.0.0" (was "8.2.14")...
UPDATE package.json (1302 bytes)
✔ Packages installed successfully.
** Executing migrations of package '@angular/cli' **

▸ Angular Workspace migration.
  Update an Angular CLI workspace to version 9.
UPDATE angular.json (3653 bytes)
UPDATE tsconfig.app.json (272 bytes)
UPDATE package.json (1304 bytes)
✔ Packages installed successfully.
  Migration completed.

▸ Lazy loading syntax migration.
  Update lazy loading syntax to use dynamic imports.
  Migration completed.

** Executing migrations of package '@angular/core' **

▸ Static flag migration.
  Removes the `static` flag from dynamic queries.
  As of Angular 9, the "static" flag defaults to false and is no longer required for your view and content queries.
  Read more about this here: https://v9.angular.io/guide/migration-dynamic-flag
  Migration completed.

▸ Missing @Injectable and incomplete provider definition migration.
  In Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

▸ ModuleWithProviders migration.
  In Angular 9, the ModuleWithProviders type without a generic has been deprecated.
  This migration adds the generic where it is missing.
  Read more about this here: https://v9.angular.io/guide/migration-module-with-providers
  Migration completed.

▸ Renderer to Renderer2 migration.
  As of Angular 9, the Renderer class is no longer available.
  Renderer2 should be used instead.
  Read more about this here: https://v9.angular.io/guide/migration-renderer
  Migration completed.

▸ Undecorated classes with decorated fields migration.
  As of Angular 9, it is no longer supported to have Angular field decorators on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.

▸ Undecorated classes with DI migration.
  As of Angular 9, it is no longer supported to use Angular DI on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.


Your project has been updated to Angular version 9!
For more info, please see: https://v9.angular.io/guide/updating-to-version-9
Done in 79.00s.
```
