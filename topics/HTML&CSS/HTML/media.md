# Media (Images, Video, SVG)

## What is Media?

Media means visual or audio content used inside websites and applications.

Examples:

- Images
- Videos
- SVG graphics
- Audio files
- Animations
- Icons
- GIFs

Media helps users understand content visually and improves UI/UX.

---

# 1. Images

Images are the most common media type used in websites.

## Common Image Formats

| Format     | Use Case               | Supports Transparency | Best For             |
| ---------- | ---------------------- | --------------------- | -------------------- |
| JPG / JPEG | Photos                 | ❌                    | Real-world images    |
| PNG        | Logos/UI               | ✅                    | Transparent graphics |
| WEBP       | Modern optimized image | ✅                    | Best web performance |
| AVIF       | Next-gen image format  | ✅                    | Ultra compression    |
| GIF        | Simple animations      | ❌                    | Small animations     |

---

## HTML Example

```html
<img src="/image.jpg" alt="Nature" />
```

---

## React / Next.js Example

```tsx
import Image from "next/image";

<Image src="/hero.jpg" alt="Hero" width={1200} height={600} />;
```

---

## Why Next.js Image is Better

Features:

- Automatic optimization
- Lazy loading
- Responsive images
- Better performance
- Reduced bandwidth
- Modern format support

---

## Lazy Loading

Image loads only when visible on screen.

Benefits:

- Faster page load
- Better performance
- Saves internet data

---

## Responsive Images

Different image sizes for different devices.

Example:

- Mobile → small image
- Desktop → large image

---

## Best Practices

✅ Use WEBP or AVIF
✅ Compress images
✅ Always add `alt` text
✅ Use lazy loading
✅ Avoid huge image files
✅ Use CDN when possible

---

# 2. Videos

Videos improve engagement and user interaction.

Examples:

- Tutorials
- Product showcase
- Reels
- Background videos
- Streaming

---

## Common Video Formats

| Format | Best Support       |
| ------ | ------------------ |
| MP4    | Most common        |
| WebM   | Better compression |
| MOV    | Apple ecosystem    |

---

## HTML Video Example

```html
<video controls width="600">
  <source src="video.mp4" type="video/mp4" />
</video>
```

---

## Video Features

| Feature  | Purpose         |
| -------- | --------------- |
| autoplay | Auto play video |
| controls | Show controls   |
| muted    | Mute sound      |
| loop     | Repeat video    |
| poster   | Thumbnail image |

---

## Example

```html
<video autoplay muted loop>
  <source src="intro.mp4" type="video/mp4" />
</video>
```

---

## Video Optimization

Large videos slow websites.

Use:

- Compression
- Streaming
- CDN
- Adaptive quality

---

## Streaming Platforms

Examples:

- YouTube
- Netflix
- Hotstar
- Instagram Reels

Technologies used:

- HLS
- DASH
- CDN
- Video chunks
- Buffering systems

---

# 3. SVG (Scalable Vector Graphics)

SVG is a vector-based graphics format.

SVG uses XML code.

Best for:

- Logos
- Icons
- Diagrams
- Animations
- Charts

---

## Why SVG is Powerful

| Feature     | Benefit              |
| ----------- | -------------------- |
| Scalable    | No quality loss      |
| Lightweight | Small file size      |
| Animatable  | Smooth animations    |
| Editable    | Change using CSS/JS  |
| Responsive  | Works on all screens |

---

## SVG Example

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

---

## React SVG Example

```tsx
export default function Logo() {
  return (
    <svg width="120" height="120">
      <circle cx="60" cy="60" r="50" fill="black" />
    </svg>
  );
}
```

---

# SVG vs PNG

| SVG          | PNG             |
| ------------ | --------------- |
| Vector       | Raster          |
| Scalable     | Quality breaks  |
| Smaller size | Larger size     |
| Editable     | Hard to edit    |
| Great for UI | Good for photos |

---

# SVG Animation Example

```html
<svg width="200" height="100">
  <circle cx="50" cy="50" r="20">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="2s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

---

# 4. Audio

Audio is also media.

Examples:

- Music
- Podcasts
- Voice messages
- Notifications

---

## Audio Example

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
</audio>
```

---

# 5. Media Optimization

Optimization is very important.

Without optimization:

- Slow website
- Bad SEO
- High bandwidth usage
- Poor user experience

---

## Optimization Techniques

| Technique      | Purpose            |
| -------------- | ------------------ |
| Compression    | Reduce size        |
| Lazy loading   | Load when needed   |
| CDN            | Faster delivery    |
| Caching        | Reuse media        |
| Modern formats | Better performance |

---

# 6. CDN (Content Delivery Network)

CDN stores media globally.

User gets media from nearest server.

Benefits:

- Faster loading
- Reduced latency
- Better scaling

Examples:

- Cloudflare
- AWS CloudFront
- Akamai

---

# 7. Media in Modern Frontend

Modern apps use:

- Optimized images
- Video streaming
- SVG animations
- Lazy loading
- CDN delivery
- Responsive media

---

# 8. Media in Next.js

Next.js supports:

| Feature            | Support |
| ------------------ | ------- |
| Image Optimization | ✅      |
| Lazy Loading       | ✅      |
| Responsive Images  | ✅      |
| Static Assets      | ✅      |
| SVG Support        | ✅      |

---

## Public Folder Structure

```bash
public/
 ├── images/
 ├── videos/
 ├── icons/
 └── logo.svg
```

---

# 9. Accessibility

Always make media accessible.

## Images

Use:

```html
alt="Description"
```

---

## Videos

Add:

- subtitles
- captions
- transcripts

---

# 10. Real Industry Usage

| Company   | Media Usage        |
| --------- | ------------------ |
| Instagram | Reels + Images     |
| YouTube   | Video streaming    |
| Netflix   | Adaptive streaming |
| Spotify   | Audio streaming    |
| Figma     | SVG rendering      |
| GitHub    | SVG icons          |

---

# Final Notes

Media is a core part of frontend development.

Good media handling improves:

- Performance
- SEO
- User Experience
- Accessibility
- Professional UI quality

---

# Recommended Modern Stack

## Images

- Next.js Image
- WEBP
- AVIF

## Videos

- MP4 + HLS

## Icons

- SVG
- Lucide Icons

## CDN

- Cloudflare
- AWS CloudFront

## Optimization

- Lazy loading
- Compression
- Responsive delivery
