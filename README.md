# Auto Accept Cookies Chrome Extension

A simple Chrome extension that automatically accepts cookie consent banners across websites, saving you time and clicks.

# Instll:

[ add link later]

## Features

- Automatically detects and accepts cookie consent banners
- Works across multiple websites
- Lightweight and fast
- No configuration needed

## How it Works

The extension injects a content script that looks for common cookie consent buttons and automatically clicks them when detected. It runs after the page loads to ensure the consent banner is present.

## Contributing

This is an open source project and we welcome contributions! Cookie consent banners change frequently across websites, so your help is valuable in keeping the extension up to date.

### How to Contribute

1. Fork the repository
2. Create a new branch for your changes
3. Add support for new cookie consent banners by updating the selectors in `content.js`
4. Test your changes across different websites
5. Submit a pull request

### What to Look For

- New cookie consent banner patterns
- Different button selectors
- Alternative consent mechanisms
- Edge cases where the current implementation doesn't work

## License

MIT License - feel free to use this code for your own projects.

## Support

If you find a website where the extension doesn't work, please open an issue with:

- The website URL
- A screenshot of the cookie consent banner
- Any relevant HTML structure
