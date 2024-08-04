<p align="center">
    <a href="https://jfstech.uk" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/JFS-Tech/icons/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/JFS-Tech/icons/HEAD/.github/logo-light.svg">
      <img alt="JFS-Tech icons" width="315" height="117" style="max-width: 100%" src="https://raw.githubusercontent.com/JFS-Tech/icons/HEAD/.github/logo-light.svg">
    </picture>
    </a>
</p>

<p align="center">
    Hand-crafted SVG icons for JFS-Tech projects.
</p>

<p align="center">
    <a href="https://github.com/JFS-Tech/icons/releases"><img src="https://img.shields.io/npm/v/@jfstech/icons-react" alt="Latest Release"></a>
    <a href="https://github.com/JFS-Tech/icons/blob/master/react/LICENSE"><img src="https://img.shields.io/npm/l/@jfstech/icons-react.svg" alt="License"></a>
</p>

<p align="center">
    <strong>
    Please note that this repository has been copied from the <a href="https://github.com/tailwindlabs/heroicons" target="_blank">heroicons repository</a> and the icons have been deleted and replaced with JFS-Tech icons.
    </strong>
</p>

## Basic Usage

First, install `@jfstech/icons-react` from npm:

```sh
npm install @jfstech/icons-react
```

Now each icon can be imported individually as a React component:

```jsx
import { CopyRightIcon } from '@jfstech/icons-react/24/outline'

function MyComponent() {
    return (
        <div>
            <CopyRightIcon className="size-6 text-blue-500" />
            <p>...</p>
        </div>
    )
}
```

The 24x24 outline icons are currently the only icons which we support.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@jfstech/icons-react/24/outline/)

## Contributing

I will not be accepting contributions to this repository.

## License

This library is MIT licensed.