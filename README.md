# Docs

To contribute go to:

```
/src/docs
```

Each markdown file is a route. The name of the markdown file will be available as /documentation/{{name of file}}. 

Once you've added a route, go to `nav.ts` and add it in one of the section, or create a new section. 

The page will then display as an option in the side navigation within the documentation.

Keep in mind that suggested links on the home page aren't dynamic, you'll need to change them manually should you need to:

```
/src/pages/Home.tsx
```