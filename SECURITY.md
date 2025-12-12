# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest | :x:                |

## Reporting a Vulnerability

Please report (suspected) security vulnerabilities to **[your-email@example.com](mailto:your-email@example.com)**. You will receive a response within 48 hours. If the issue is confirmed, we will release a patch as soon as possible depending on complexity but historically within a few days.

## Security Best Practices

This is a static portfolio website. However, if you're using this as a template:

1. **Environment Variables**: Never commit `.env` files or expose API keys
2. **Dependencies**: Keep all dependencies up to date
3. **Content Security**: Sanitize any user-generated content
4. **HTTPS**: Always use HTTPS in production
5. **API Keys**: Store sensitive keys in environment variables, never in code

## Known Security Considerations

- This project uses Next.js Image Optimization - ensure your image sources are trusted
- Form submissions should be validated server-side if implemented
- External links should use `rel="noopener noreferrer"` (already implemented)

