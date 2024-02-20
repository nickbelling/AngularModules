# Native Federation stripped-down example

In `/src/@my-project`:

```
npm install
```

In `/src/plugin/plugin`:

```
npm install
```

Back in `/src/@my-project`:

```
npm run build:shared
npm run build:plugin
npm run build:main
npm run serve-python
```

Then access on `http://localhost:8000`.

Note that clicking the incrementor button in the shared component increments the two counters individually - the shared
component is bootstrapped twice.

Now, while the website is running, modify `src/@my-project/dist/@my-project/main/browser/remoteEntry.json`:

Change:

```json
    {
      "packageName": "@my-project/shared",
      "outFileName": "_my_project_shared-2QJEZZPT.js",
      "requiredVersion": "",
      "singleton": true,
      "strictVersion": false,
      "version": ""
    }
```

to:

```json
    {
      "packageName": "@my-project/shared",
      "outFileName": "_my_project_shared-2QJEZZPT.js",
      "requiredVersion": "0.0.1",
      "singleton": true,
      "strictVersion": false,
      "version": "0.0.1"
    }
```

And reload the page.

Note now, that incrementing either counter now correctly increments both counters.
